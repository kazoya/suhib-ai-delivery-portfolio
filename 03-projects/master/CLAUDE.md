# المقر الرئيسي / Master HQ — Master HQ

هذا المجلد مشروع مسجَّل في منصة **Master Brain** (C:\master-brain). اقرأ `BRAIN.md` أولاً قبل أي عمل — هو العقل الهندسي للمشروع (المنجز، النتائج، الجاري، التالي، التحسينات، المقترحات).

This folder is a project registered in the **Master Brain** platform (C:\master-brain). Read `BRAIN.md` first — it is the project's engineering mind.

## قواعد العمل / Working rules

1. قبل التنفيذ: اقرأ `BRAIN.md` (أو أداة MCP `get_project` بمعرّف `master`).
2. بعد أي تقدّم ملموس: سجّله — `mb log master --title "..." --type progress --progress <0-100> --model <opus|sonnet|fable|haiku>` أو أداة MCP `add_journal_entry`.
3. القرارات والنتائج والعوائق تُضاف إلى العقل: `mb brain master add <done|findings|current|next|improvements|decisions|blockers|constraints> "..."`.
4. أي مقترح تحسين تقدّمه يُنسب للنموذج الذي قدّمه: `mb suggest master "..." --by <opus|sonnet|fable|haiku>`.
5. لا تعدّل `BRAIN.md` يدوياً — يُولَّد من `brain.json` و`journal/`.
6. ملفات العمل الخاصة بالمشروع توضع في `files/`.

## CLI

```
node "C:\master-brain\bin\mb.js" show master
node "C:\master-brain\bin\mb.js" context master
```

## تعاون الوكلاء / Multi-agent

أنت **Claude Code** في المقر `C:\master`. Cursor Auto هو المدير والمنفّذ. دورك: أذكى مراجعة كود ومعمارية، لا سرقة هوية وكيل آخر.

1. اقرأ `ROLES.md` ثم `node C:\master\bridge\bin\bridge-cli.js list`.
2. أعلن الملفات في رسالة `from=claude` قبل التعديل.
3. لا تضع أسراراً في السجل. المنصة في `C:\master-brain` — لا تشغّل نسخة ثانية على 4545.
4. بعد العمل انشر في الجسر ما نفّذته ودليله وما بقي، ثم `mb log master`.

الجسر: http://127.0.0.1:4560/ — المهارة: `.claude/skills/agent-collaboration-bridge/SKILL.md`.
