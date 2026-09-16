# Project1 Commerce Intelligence

منصة تشغيل خاصة. المستودع: **https://github.com/kazoya/Project1** (خاص على حساب kazoya).

إحاطة لإرسالها لأي نموذج (الرؤية ذات الخمس ركائز + الواقع المبني + القيود): [`docs/AGENT_BRIEF.md`](docs/AGENT_BRIEF.md)

التوثيق الحي في `docs/brain/`. تقرير حلقة المحاكاة: `docs/brain/COMMERCE_LOOP.md`. مسار CSV المحلي: `docs/brain/LOW_COST_BASELINE.md`. مركز الجاهزية: `docs/brain/READINESS_CENTER.md` · `/readiness`.

قيود ثابتة: `buyHalt=true`، لا شراء حي، لا إجراء مدفوع، لا كتابة للأسواق بلا إذن.

```powershell
pnpm test
pnpm prove:csv
pnpm prove:readiness
```

حلقة المحاكاة التجارية تحتاج `DATABASE_URL` ولا ترفع `buyHalt`. `db:push` / `db:seed` فقط عند إعداد قاعدة معزولة — ليست شرطاً لإثبات CSV المحلي.

```powershell
pnpm install
pnpm test
pnpm exec tsx scripts/prove-commerce-loop.ts
pnpm worker
pnpm dev
```

افتح http://localhost:3002

المالكان المسموحان للوحة: `suhib.asrawi@gmail.com` و `innervision2016@gmail.com` (غيتهاب/رفع).

أسرار التشغيل (Neon، OAuth) تبقى في `.env.local` وليست في Git. إثبات `prove-commerce-loop` يحتاج `DATABASE_URL` صالحاً.