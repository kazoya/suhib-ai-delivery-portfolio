# كيف تعمل المنصة / How Master Brain works

منصة **Master Brain** وكيل متابعة لمحفظة مشاريع: مجلد لكل مشروع، "عقل هندسي" لكل مشروع، تقارير
للفترات، وقناة أوامر تصل من المالك إلى وكيل ذكاء اصطناعي ينفّذ على الجهاز/الخادم.

Master Brain is a portfolio agent: one folder per project, an engineering mind per project,
period reports, and a command channel from the owner to an AI agent that executes on the machine.

---

## 1) البنية / Layout

```
bin/mb.js        CLI                      bin/server.js  لوحة HTTP + JSON API      bin/mcp.js  خادم MCP (stdio)
src/store.js     مخزن الملفات              src/ops.js     كتالوج العمليات الموحّد     src/tasks.js  قناة الأوامر
src/reports.js   HTML·PDF·XLSX·MD·JSON     src/auth.js    حسابات وجلسات (PBKDF2)      src/xlsx.js  كاتب xlsx بلا اعتماديات
config.json      projectsRoot · watchRoots · port · lang · timezone
data/            registry.json · platform-brain.json · requests.json · auth.json · reports/
public/index.html  اللوحة                  skills/        مهارات المنصة
```

**قاعدة واحدة تحكم كل شيء:** كل عملية معرّفة مرّة واحدة في `src/ops.js` (مخطط JSON + معالج)،
ثم تُعرض بثلاث قنوات: أداة MCP، ومسار `POST /api/op/<name>`، وأمر CLI. لذلك تتصرف القنوات الثلاث
بالطريقة نفسها ولا تتفرّق السلوكيات.

**One catalogue rules everything:** each operation is defined once in `src/ops.js` (JSON schema +
handler) and exposed three ways — an MCP tool, `POST /api/op/<name>`, and a CLI command.

---

## 2) نموذج البيانات / Data model

كل مشروع مجلد فيه:

| الملف | المحتوى |
|------|---------|
| `project.json` | البيانات الوصفية: الاسم (ar/en)، الحالة، الأولوية، النسبة، الوسوم، الروابط |
| `brain.json` | العقل الهندسي بأقسامه: `done · findings · current · next · improvements · suggestions · decisions · blockers · constraints` |
| `journal/<date>-<title>.md` | مدخل تقدّم واحد لكل ملف (frontmatter + نص) |
| `BRAIN.md` | عرض مُولَّد من `brain.json` + آخر السجلّ — **لا يُعدَّل يدوياً** |
| `CLAUDE.md` | تعليمات للوكيل حين يُفتح المجلد — يُكتب مرة واحدة ولا يُستبدل إن كان موجوداً |
| `files/` | ملفات عمل المشروع |

على مستوى المنصة في `data/`: `registry.json` (فهرس المسارات)، `platform-brain.json` (ما تعلّمته
المنصة: دروس، مهارات، أدوات، طلبات تثبيت)، `requests.json` (الأوامر والأسئلة)، `auth.json` (الحسابات).

### الحالات / Statuses

| الحالة | المعنى |
|--------|--------|
| `running` | **تنفيذ فعلي جارٍ الآن** — لا تُوضع يدوياً؛ قناة الأوامر هي من تضعها وتزيلها |
| `open` | مفتوح بانتظار طلب المالك |
| `awaiting` | متوقف حتى يجيب المالك على سؤال (`ask_owner`) |
| `blocked` · `planning` · `done` · `dormant` | الباقي — `dormant` بعد `dormantAfterDays` بلا نشاط |

---

## 3) قناة الأوامر / The command channel

```
المالك ─▶ اللوحة أو Next.js أو CLI ─▶ POST /api/tasks ─▶ requests.json
                                                  │
                            channel = claude-code │ channel = desktop
                                                  ▼                 ▼
                             spawn: claude -p --output-format text   يبقى في صندوق الوارد
                             cwd = مجلد المشروع                       يلتقطه وكيل عبر MCP
                             status = running  ⟶  done | failed        (list_tasks / list_requests)
                             المخرجات تُبثّ إلى سجلّ المهمة
                             وتُكتب مدخلاً في journal/ عند الانتهاء
```

- **مهمة واحدة في كل مرة** (`MAX_CONCURRENT = 1`) — Claude Code ثقيل، فلا يُشغَّل مرّتان معاً.
- **مهلة 20 دقيقة** افتراضياً، ثم تُقتل العملية وتُسجَّل `failed`.
- **`broadcast`** يرسل الأمر نفسه لكل المشاريع غير المهجورة، بمعرّف `batch` واحد، ويُنفَّذ بالطابور.
- يُعثر على ثنائي Claude Code تلقائياً (`where`/`which`، ثم مسارات معروفة)، ويمكن فرضه بـ `MB_CLAUDE`،
  وتمرير وسائط إضافية بـ `MB_CLAUDE_ARGS`. إن لم يوجد → تتحول المهمة إلى `queued` لقناة desktop.
- النصّ الذي يصل الوكيل ليس أمر المالك وحده: `src/tasks.js` يبني برومبتاً يضمّ **الأمر + سياق
  المشروع الكامل (`contextBlock`) + قواعد العمل + أوامر التسجيل الواجبة بعد الإنجاز**.

## 4) الاتجاه المعاكس: أسئلة الوكيل / The reverse direction

حين لا يعرف الوكيل قراراً (رقم، اعتماد، تفضيل) ينادي `ask_owner` → المشروع ينتقل إلى `awaiting`
ويظهر السؤال على اللوحة حتى يجيب المالك (`POST /api/questions/<id>/answer`) فيعود إلى `open`.
هذه هي البدائل الصريحة للتخمين، وهي مفروضة في قواعد البرومبت.

## 5) التقارير / Reports

`generate_report` يبني بيانات الفترة (مشاريع + مدخلات + إحصاءات) ثم يحفظها بصيغ
`html · md · xlsx · json` وPDF (طباعة HTML). الملفات في `data/reports/` وتُخدَّم على
`/reports/<file>` (تتطلب جلسة) مع `?download=1` للتنزيل.

## 6) المصادقة / Authentication

- كلمات المرور: PBKDF2-HMAC-SHA512، 210,000 تكرار، ملح 16 بايت — لا تُخزَّن أبداً بشكل ظاهر.
- الجلسة: كوكي `mb_session` موقّع بـ HMAC-SHA256 بسرّ خاص بكل تثبيت، httpOnly، SameSite=Lax، 12 ساعة.
- أول تشغيل يبذر حساب المالك (`config.owner.username` أو `Sultan`) بكلمة مرور = اسم المستخدم
  و`mustChange=true` — **غيّرها فوراً**.
- **لا توجد ترويسات CORS**: أي نداء من متصفح على أصل مختلف سيفشل. هذا مقصود — الوسيط هو خادمك
  (Next.js route handler) لا المتصفح.
