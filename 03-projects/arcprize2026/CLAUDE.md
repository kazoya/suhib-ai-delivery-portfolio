# arc_prize_2026 — arc_prize_2026

هذا المجلد مشروع مسجَّل في منصة **Master Brain** (C:\master-brain). اقرأ `BRAIN.md` أولاً قبل أي عمل — هو العقل الهندسي للمشروع (المنجز، النتائج، الجاري، التالي، التحسينات، المقترحات).

This folder is a project registered in the **Master Brain** platform (C:\master-brain). Read `BRAIN.md` first — it is the project's engineering mind.

## قواعد العمل / Working rules

1. قبل التنفيذ: اقرأ `BRAIN.md` (أو أداة MCP `get_project` بمعرّف `arcprize2026`).
2. بعد أي تقدّم ملموس: سجّله — `mb log arcprize2026 --title "..." --type progress --progress <0-100> --model <opus|sonnet|fable|haiku>` أو أداة MCP `add_journal_entry`.
3. القرارات والنتائج والعوائق تُضاف إلى العقل: `mb brain arcprize2026 add <done|findings|current|next|improvements|decisions|blockers|constraints> "..."`.
4. أي مقترح تحسين تقدّمه يُنسب للنموذج الذي قدّمه: `mb suggest arcprize2026 "..." --by <opus|sonnet|fable|haiku>`.
5. لا تعدّل `BRAIN.md` يدوياً — يُولَّد من `brain.json` و`journal/`.
6. ملفات العمل الخاصة بالمشروع توضع في `files/`.

## CLI

```
node "C:\master-brain\bin\mb.js" show arcprize2026
node "C:\master-brain\bin\mb.js" context arcprize2026
```
