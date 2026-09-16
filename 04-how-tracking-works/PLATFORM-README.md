# Master Brain — ماستر برين

**منصة متابعة المشاريع والعقل الهندسي الواعي** — مجلد لكل مشروع، عقل هندسي (المنجز / النتائج / الجاري / التالي / التحسينات / مقترحات منسوبة للنموذج)، تقارير بالفترات وطبيعة التقدّم (HTML → PDF، Excel، Markdown، JSON)، وقناة مباشرة مع **Claude Code** و**Claude Desktop** عبر MCP والطرفية.

**Portfolio tracker & conscious engineering mind** — a folder per project, an engineering brain per project, period/progress reports, and a native MCP + CLI channel for Claude Code / Claude Desktop. **Zero npm dependencies** — runs with `node` alone (≥ 18).

Born from [kazoya/rctc-skill → portfolio-commander](https://github.com/kazoya/rctc-skill/tree/master/portfolio-commander) and shipped with the **[start-skill](skills/start-skill/)** (مهارة البدء).

---

## ⚡ التشغيل السريع / Quick start (Windows)

**لا يوجد Node على الجهاز؟ لا مشكلة — انقر مرّتين على `run.cmd`.**
يبحث عن Node، وإن لم يجده ينزّل نسخة **محمولة** داخل `.node\` (بلا صلاحيات مسؤول، بلا مثبِّت، بلا تغيير في PATH)، ثم يهيّئ المنصة ويفتح اللوحة.

```powershell
cd E:\master
.\run.cmd                        # ← الطريقة الموصى بها: تثبيت + تشغيل بنقرة
```

يدوياً إن كان Node مثبّتاً لديك:

```powershell
.\scripts\install.ps1            # add -AddToPath to use "mb" from anywhere
mb serve --open                  # http://127.0.0.1:4545
mb doctor
```

**بلا أي تثبيت إطلاقاً:** افتح `dashboard-offline.html` بالنقر المزدوج — لوحة للقراءة مع منشئ تقارير قابل للطباعة PDF.

macOS / Linux: `bash scripts/install.sh` ثم `node bin/mb.js serve --open`.

## 🔐 الدخول / Sign-in

اللوحة محمية بحساب المالك. الافتراضي عند أول تشغيل: **Sultan / Sultan** — غيّرها من زرّ 🔑 في الشريط العلوي أو:

```powershell
mb user list
mb user passwd Sultan --password "كلمة مرور جديدة" --current "Sultan"
```

كلمات المرور تُخزَّن مشفّرة (PBKDF2-SHA512، 210 ألف دورة، ملح عشوائي) في `data/auth.json` — لا تُحفظ أبداً كنص. الجلسة كعكة موقّعة (httpOnly) صالحة 12 ساعة، والخادم يستمع على 127.0.0.1 فقط.

## ⌨️ الأوامر — أرسل أمراً يصل إلى كلود / Commands

من تبويب **الأوامر** (أو تبويب Claude داخل أي مشروع) اكتب ما تريد وأرسله:

| القناة | ماذا يحدث |
|--------|-----------|
| **Claude Code** | المنصة تشغّل `claude` فوراً داخل مجلد المشروع، تمرّر له العقل الهندسي + أمرك + قواعد العمل، تعرض المخرجات مباشرة في اللوحة، وتسجّل مدخل تقدّم تلقائياً. حالة المشروع تصبح **نشط الآن** ثم تعود إلى **مفتوح**. |
| **Claude Desktop / Cowork** | الأمر ينتظر في الطابور، وتلتقطه أي جلسة عبر أداة MCP `list_tasks` ثم تعلّمه منجزاً. |

```powershell
mb run cv-job-search "راجع الردود على الطلبات وسجّل ما وصل، ثم اقترح الخطوة التالية"
mb tasks · mb task show <id> · mb task cancel <id>
```

### ◆ أمر واحد لكل المشاريع / Broadcast

اختر **«كل المشاريع»** في قائمة المشروع، أو من الطرفية:

```powershell
mb run-all --preset continue          # «دعنا نكمل» لكل مشروع نشط
mb run-all "جهّز تقرير الأسبوع" --channel desktop
mb run-all --preset status --project cv-job-search,risha360-contacts-db
mb presets                            # الأوامر الجاهزة ونصّها الكامل
```

مشاريع **السكون** و**المكتمل** تُستثنى تلقائياً (إلا مع `--include-dormant`)، وقناة Claude Code تُنفَّذ **مشروعاً تلو الآخر** فلا يعمل أكثر من Claude Code واحد في وقت واحد.

**الأوامر الجاهزة:** `continue` دعنا نكمل · `status` أعطني الحالة · `decisions` ما الذي ينتظر قراري؟ · `review` راجع واقترح تحسيناً — نصوصها مكتوبة بعناية: تُلزم كلود بقراءة العقل الهندسي، وبتنفيذ خطوة واحدة آمنة فقط، وبالسؤال بدل التخمين، وبتسجيل ما فعله.

الاتجاه المعاكس — كلود يسألك: `mb ask <project> "سؤال"` يوقف المشروع على **بانتظار ردّك** ويظهر السؤال في اللوحة؛ جوابك يعيده إلى **مفتوح** (`mb answer <id> "..."`).

## 🚦 حالات المشروع / Project states

| الحالة | متى | من يضعها |
|--------|-----|----------|
| ⚡ **نشط الآن** `running` | كلود ينفّذ عملاً على المشروع هذه اللحظة | مشغّل الأوامر فقط (تلقائياً) |
| ○ **مفتوح** `open` | جاهز — بانتظار أن تطلب منه شيئاً | تلقائياً بعد انتهاء العمل |
| ⏳ **بانتظار ردّك** `awaiting` | كلود سأل سؤالاً ولا يكمل بلا جوابك | `ask_owner` / `mb ask` |
| ⛔ **معلّق بعائق** `blocked` | عائق خارجي (صلاحية، بريد ميت…) | أنت أو كلود |
| ✎ **تخطيط** `planning` · ✔ **مكتمل** `done` · ⏸ **سكون** `dormant` | كما يوحي الاسم | أنت |

الحالة القديمة `active` تُترجَم تلقائياً إلى `open`، و`paused` إلى `dormant`.

## 🗂️ مجلد المشروع / Project folder

```
D:\projects\<project-id>\
  project.json   name (ar/en) · status · priority · progress · tags · sessions
  brain.json     done · findings · current · next · improvements · suggestions(by model) · decisions · blockers · constraints
  journal\       one Markdown file per progress entry (date · type · progress · model)
  files\         working files
  BRAIN.md       generated view (read this first)      CLAUDE.md   instructions for Claude Code
```

## 🤖 قنوات Claude / Claude channels

| القناة | كيف |
|--------|-----|
| **Claude Code** | افتح `E:\master` — `.mcp.json` يحمّل خادم `master-brain` تلقائياً (19 أداة + موارد + prompts). المهارات: `/master-brain`, `/start-skill` |
| **Claude Desktop** | `scripts/install.ps1` يضيف `master-brain` إلى `claude_desktop_config.json` — أعد تشغيل التطبيق |
| **أي محادثة** | `mb context <id|all>` → انسخ والصق |
| **الطرفية** | `mb list · show · log · brain · suggest · report · learn · request-tool · tasks` |
| **REST** | `GET /api/projects` · `POST /api/report` · `POST /api/op/<name>` … |

## 📄 التقارير / Reports

```powershell
mb report --from 2026-09-01 --to 2026-09-30 --format all --group status --platform --open
mb report --project cv-job-search --types milestone,decision --format xlsx --lang en
mb report --status active,blocked --min-progress 20 --format pdf
```
Filters: period · projects · statuses · entry types (nature of progress) · models · progress range · grouping (status / priority). Output in `data/reports/`. PDF is automatic when Edge/Chrome exists; otherwise print the HTML.

## 🧠 العقل العام / Platform brain

What Claude learned, acquired skills, tools, capabilities, tool requests: dashboard → **العقل العام**, or `mb brain-platform`, or [skills/start-skill/LEARNED.md](skills/start-skill/LEARNED.md).

## 🧪 الاختبار / Tests

```
npm test        # util + smoke (CLI · reports · XLSX · HTTP API · MCP stdio) — 40+ checks, no network
```

## 🔒 الخصوصية / Privacy

Publish the tool, never the data: `config.json`, `data/`, `seed/initial-projects.json` are git-ignored. Use `seed/example-projects.json` for demos.

## Docs

[ARCHITECTURE](docs/ARCHITECTURE.md) · [CLAUDE-INTEGRATION](docs/CLAUDE-INTEGRATION.md) · [REPORTS](docs/REPORTS.md) · [SKILLS-CATALOG](docs/SKILLS-CATALOG.md) · [LEARNED](skills/start-skill/LEARNED.md) · [CHANGELOG](CHANGELOG.md)

MIT © 2026 — built with Claude (Cowork). Vendored skills © kazoya/rctc-skill (MIT).
