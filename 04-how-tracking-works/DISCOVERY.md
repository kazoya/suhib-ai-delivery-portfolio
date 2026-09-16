# الاكتشاف عبر الوكلاء / Cross-agent project discovery

الهدف: ألّا يمرّ مشروع مفتوح على الجهاز دون أن تراه المنصة — سواء فتحه **Claude Code** أو
**OpenAI Codex** أو **Cursor** أو **Windsurf** أو **VS Code** أو **Copilot** أو **Gemini CLI**
أو **Aider** أو **Cline/Roo** أو **Continue**.

الأداة: `server-kit/tools/discover-projects.js` — صفر اعتماديات، Node ≥ 18، ولا تكتب شيئاً
إلا مع `--register`.

---

## 1) مصدران للاكتشاف / Two sources

### أ) علامات داخل المجلد / in-folder markers

| الوكيل | العلامات |
|--------|----------|
| Claude Code | `CLAUDE.md` · `.claude/` · `.mcp.json` |
| OpenAI Codex | `AGENTS.md` · `.codex/` · `codex.md` |
| Cursor | `.cursor/` · `.cursorrules` · `.cursorignore` · `.cursorindexingignore` |
| Windsurf | `.windsurf/` · `.windsurfrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Gemini CLI | `GEMINI.md` · `.gemini/` |
| Aider | `.aider.conf.yml` · `.aider.chat.history.md` |
| Cline / Roo | `.clinerules` · `.roo/` · `.roomodes` |
| Continue | `.continue/` · `.continuerc.json` |
| VS Code | `.vscode/` |

بالإضافة إلى دلائل المشروع نفسه: `.git/` و`package.json` · `pyproject.toml` · `requirements.txt` ·
`go.mod` · `Cargo.toml` · `composer.json` · `pom.xml` · `build.gradle` · `Gemfile` · `pubspec.yaml` ·
`next.config.*` · `Dockerfile` · `docker-compose.yml` · `Makefile` · `index.html`.

### ب) سجلّ الوكلاء نفسه / the agents' own history

| الوكيل | أين يسجّل مشاريعه | ما نقرأه |
|--------|-------------------|----------|
| Claude Code | `~/.claude.json` | مفاتيح الكائن `projects` = مسارات مطلقة |
| Claude Code | `~/.claude/projects/` | اسم المجلد مسار مُرمّز (`E--master` → `E:\master`) |
| OpenAI Codex | `~/.codex/sessions/<yyyy>/<mm>/<dd>/rollout-*.jsonl` | **أول سطر فقط**: `payload.cwd` في سجلّ `session_meta` |
| Cursor | `<AppData\|~/.config\|Library>/Cursor/User/workspaceStorage/*/workspace.json` | `folder` بصيغة `file:///d%3A/projects/x` |
| VS Code | نفس المسار تحت `Code` | كذلك |
| Windsurf | نفس المسار تحت `Windsurf` | كذلك |

> ملفات جلسات Codex قد تبلغ عشرات الميغابايت؛ الأداة تقرأ **أول 64 كيلوبايت فقط** من كل ملف
> لأن `session_meta` هو أول سطر — فلا تُحمّل الجهاز.

---

## 2) قاعدة التمييز / What counts as a project

المجلد الذي يظهر في سجلّ وكيل لكنه **بلا أي علامة مشروع** (لا git ولا ملف حزمة ولا ملف وكيل) هو
غالباً مجلد محادثة عابر — مثل `~/Documents/Codex/<date>/new-chat`. هذه تُستبعَد افتراضياً،
وتظهر فقط مع `--all`.

## 3) الاستعمال / Usage

```bash
node server-kit/tools/discover-projects.js                       # جدول
node server-kit/tools/discover-projects.js --depth 3 --md --out data/discovered.md
node server-kit/tools/discover-projects.js --json --out data/discovered.json
node server-kit/tools/discover-projects.js --agent codex,cursor  # وكيل بعينه
node server-kit/tools/discover-projects.js --since 30            # نشط خلال 30 يوماً
node server-kit/tools/discover-projects.js --unregistered        # ما ليس في المنصة بعد
node server-kit/tools/discover-projects.js --all                 # بما فيه مجلدات الجلسات العابرة
node server-kit/tools/discover-projects.js --no-history          # علامات الملفات فقط
node server-kit/tools/discover-projects.js --roots "/srv/a,/srv/b" --depth 4
```

| الخيار | المعنى |
|--------|--------|
| `--roots a,b` | جذور إضافية فوق `watchRoots` و`projectsRoot` من `config.json` |
| `--depth n` | عمق النزول داخل الجذور (افتراضي 3؛ لا ينزل داخل مجلد تبيّن أنه مشروع) |
| `--sessions n` | كم ملف جلسة Codex يُفحص (افتراضي 400، الأحدث أولاً) |
| `--no-fs` / `--no-history` | إلغاء أحد المصدرين |
| `--json` · `--md` · `--out file` | صيغة الإخراج ووجهته |
| `--register` | إنشاء المشاريع غير المسجّلة داخل المنصة |
| `--dry-run` | مع `--register`: اعرض ما سيُنشأ دون كتابة |

### مخرَج الجدول / table output

```
MB  id                  agents        stack        idle  path
──  ──────────────────  ────────────  ───────────  ────  ────────────────────────────────
·   master-brain        claude        node         0d    E:\master
·   resha360-platform   claude+codex  python       0d    D:\projects\resha360-platform
✔   social-autopilot    claude        node/nextjs  1d    D:\projects\...\social-autopilot
```

`MB` = ‏`✔` مسجّل في المنصة، `·` غير مسجّل · `agents` = الوكلاء الذين لمسوا المشروع ·
`idle` = أيام منذ آخر نشاط (من نظام الملفات أو من سجلّ الوكيل، أيّهما أحدث).

## 4) التسجيل / Registering — اقرأ قبل التشغيل

`--register` ينادي `store.createProject` لكل مشروع غير مسجّل، وهذا **يكتب داخل مجلد المشروع**:

- `project.json` و`brain.json` و`journal/` و`files/` و`BRAIN.md` — تُنشأ.
- `CLAUDE.md` — **يُكتب فقط إن لم يكن موجوداً**؛ ملفك الحالي لا يُستبدل أبداً.

لذلك: `--dry-run` أولاً، اعرض القائمة على المالك، ثم نفّذ. الحالة الابتدائية `open`، أو `dormant`
إن تجاوز الخمول `dormantAfterDays` من `config.json`، والأولوية 3 والنسبة 0 — يصحّحها الوكيل في
مرحلة تعبئة العقل.

## 5) جدولة الاكتشاف / Scheduling

```bash
# Linux — كل ليلة 02:30، تقرير بما استُجدّ فقط
30 2 * * *  cd /opt/master-brain && node server-kit/tools/discover-projects.js --unregistered --md --out data/discovered-new.md
```

```powershell
# Windows — مهمة مجدولة يومية
schtasks /create /tn "MB discover" /sc daily /st 02:30 ^
  /tr "node E:\master\server-kit\tools\discover-projects.js --unregistered --md --out E:\master\data\discovered-new.md"
```

ثم اجعل الوكيل يفتح `data/discovered-new.md` في جولته الصباحية ويسأل المالك عمّا يستحق التسجيل.
