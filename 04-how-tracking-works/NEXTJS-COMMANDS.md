# آلية إرسال الأوامر عبر Next.js / The Next.js command channel

كل ما يلزم موجود في `server-kit/nextjs/` — انسخه إلى تطبيق Next.js يستخدم App Router.

---

## 1) لماذا من جهة الخادم فقط؟ / Why server-side only

المنصة تصادق بكوكي **httpOnly** اسمه `mb_session` ولا ترسل أي ترويسة CORS. أي `fetch` من المتصفح
إلى `http://127.0.0.1:4545` سيفشل — وهذا مقصود: المنصة تنفّذ أوامر حقيقية على الخادم، فلا يجوز
أن يلمسها المتصفح مباشرة.

```
المتصفح ──▶ Server Action أو /api/mb/*  ──▶  خادم Next.js  ──▶  http://127.0.0.1:4545/api/*
 (لا سرّ)        (نفس الأصل)                  (يحمل الكوكي)          (المنصة)
```

## 2) الملفات / Files

```
nextjs/
  .env.example                      MB_BASE_URL · MB_USER · MB_PASSWORD · MB_OPS_TOKEN
  lib/master-brain.ts               عميل الخادم: تسجيل دخول مرة واحدة + تجديد الجلسة + كل العمليات
  lib/guard.ts                      حارس مسارات /api/mb/* للنداءات من خادم إلى خادم
  app/actions/mb.ts                 Server Actions — ما تستعمله الواجهة
  app/api/mb/command/route.ts       POST أمر مفرد أو بثّ لكل المشاريع
  app/api/mb/tasks/[id]/route.ts    GET حالة الأمر ومخرجاته · DELETE إلغاء
  app/api/mb/[...path]/route.ts     وكيل عام للقراءات + كتابة بقائمة بيضاء
  components/CommandCenter.tsx      واجهة جاهزة: اختر مشروعاً، اكتب الأمر، تابع المخرجات
```

## 3) الإعداد / Setup

```bash
cp -r server-kit/nextjs/* my-app/          # lib · app · components
cp server-kit/nextjs/.env.example my-app/.env.local
```

```ini
MB_BASE_URL=http://127.0.0.1:4545
MB_USER=Sultan
MB_PASSWORD=••••••••
MB_OPS_TOKEN=$(openssl rand -hex 32)       # لمساري /api/mb/* فقط
```

`@/lib/...` يفترض `"paths": { "@/*": ["./*"] }` في `tsconfig.json` (الافتراضي في `create-next-app`).

> **قبل الإنتاج:** اربط `requireOwner()` في `app/actions/mb.ts` بمصادقة تطبيقك (NextAuth/Clerk/كوكي
> جلستك). بلا ذلك ترفض الدالة العمل في الإنتاج عمداً.

## 4) الاستعمال / Usage

### من الواجهة — Server Actions

```tsx
// app/page.tsx
import CommandCenter from '@/components/CommandCenter';
export default function Page() { return <CommandCenter />; }
```

```ts
import { runCommand, pollTask } from '@/app/actions/mb';

const r = await runCommand({ project: 'risha360', text: 'تابع المرحلة الثانية' });
const t = await pollTask(r.taskId);          // استطلاع كل ~2 ثانية حتى t.done
```

### من خادم آخر أو cron — مسارات HTTP

```bash
# أمر لمشروع واحد
curl -X POST https://ops.example.com/api/mb/command \
  -H "x-mb-ops-token: $MB_OPS_TOKEN" -H 'Content-Type: application/json' \
  -d '{"project":"risha360","text":"تابع المرحلة الثانية","channel":"claude-code"}'
# ← { "mode":"single", "task":{ "id":"req_…","status":"running" }, "dispatch":{ "started":true } }

# الأمر نفسه لكل المشاريع، واحداً تلو الآخر
curl -X POST https://ops.example.com/api/mb/command \
  -H "x-mb-ops-token: $MB_OPS_TOKEN" -H 'Content-Type: application/json' \
  -d '{"preset":"continue","broadcast":true}'
# ← { "mode":"broadcast", "batch":"batch_…", "count":7, "tasks":[ … ] }

# متابعة
curl -H "x-mb-ops-token: $MB_OPS_TOKEN" https://ops.example.com/api/mb/tasks/req_…
# ← { "status":"running","live":true,"output":"…","done":false }

# قراءات
curl -H "x-mb-ops-token: $MB_OPS_TOKEN" https://ops.example.com/api/mb/projects
curl -H "x-mb-ops-token: $MB_OPS_TOKEN" https://ops.example.com/api/mb/questions?status=pending

# أي عملية من الكتالوج (نفس أدوات MCP)
curl -X POST https://ops.example.com/api/mb/op/get_context \
  -H "x-mb-ops-token: $MB_OPS_TOKEN" -H 'Content-Type: application/json' -d '{"id":"all"}'
```

## 5) القنوات / Channels

| القناة | ما يحدث | متى تستعملها |
|--------|---------|--------------|
| `claude-code` | يشغّل Claude Code فوراً على الخادم داخل مجلد المشروع، مهمة واحدة في كل مرة، مهلة 20 دقيقة، ثم يكتب مدخل سجلّ بالنتيجة | تريد التنفيذ الآن |
| `desktop` | يضع الأمر في صندوق الوارد ليلتقطه وكيل عبر MCP (`list_tasks`) في جلسته القادمة | لا يوجد Claude Code على الخادم، أو تريد مراجعة بشرية |

`GET /api/mb/claude-status` يخبرك أيّهما متاح فعلاً. إن غاب الثنائي فكل أمر `claude-code` يتحوّل
تلقائياً إلى `queued` على قناة `desktop` مع سبب واضح في `result` — لا يضيع أمر بصمت.

## 6) دورة حياة الأمر / Task lifecycle

```
pending ─▶ queued ─▶ running ─▶ done
                        │        └─ سطر ملخص في result + مدخل journal في المشروع
                        ├─▶ failed     (exitCode ≠ 0 أو انتهت المهلة 20 دقيقة)
                        └─▶ cancelled  (DELETE /api/mb/tasks/<id>)
```

بينما الحالة `running` يكون المشروع نفسه على `running` (نشط الآن) — تُرفع وتُسحب آلياً، فلا تضعها يدوياً.

## 7) الحدود التي يجب أن تعرفها / Limits worth knowing

- **لا بثّ SSE/WebSocket** — المخرجات تُقرأ بالاستطلاع (`pollTask` كل ثانيتين). الخرج المحفوظ لكل
  مهمة محدود بـ 200 كيلوبايت (يُقصّ من الوسط عند التجاوز).
- **مهمة واحدة في كل مرة** على مستوى العملية — البثّ لعشرة مشاريع يعني عشر تنفيذات متتالية لا متوازية.
- **الجلسة 12 ساعة**؛ العميل يجدّدها تلقائياً عند 401 مرة واحدة.
- **حالة الطابور في الذاكرة**: إعادة تشغيل خدمة المنصة تُفقد المهام المنتظرة في الطابور (المهام
  المسجَّلة تبقى في `requests.json` — أعد إطلاقها بـ `POST /api/mb/tasks/<id>/retry`).
- المسارات المسموح بها للكتابة عبر الوكيل العام محصورة في قائمة بيضاء في `app/api/mb/[...path]/route.ts`،
  ومسارات `auth/` ممنوعة دائماً.
