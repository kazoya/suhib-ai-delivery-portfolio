# محفظة صهيب عسراوي — الموقع العام — Suhib Asrawi public portfolio site

هذا المجلد مشروع مسجَّل في منصة **Master Brain** (C:\master-brain). اقرأ `BRAIN.md` أولاً قبل أي عمل — هو العقل الهندسي للمشروع (المنجز، النتائج، الجاري، التالي، التحسينات، المقترحات).

This folder is a project registered in the **Master Brain** platform (C:\master-brain). Read `BRAIN.md` first — it is the project's engineering mind.

## قواعد العمل / Working rules

1. قبل التنفيذ: اقرأ `BRAIN.md` (أو أداة MCP `get_project` بمعرّف `suhib-portfolio`).
2. بعد أي تقدّم ملموس: سجّله — `mb log suhib-portfolio --title "..." --type progress --progress <0-100> --model <opus|sonnet|fable|haiku>` أو أداة MCP `add_journal_entry`.
3. القرارات والنتائج والعوائق تُضاف إلى العقل: `mb brain suhib-portfolio add <done|findings|current|next|improvements|decisions|blockers|constraints> "..."`.
4. أي مقترح تحسين تقدّمه يُنسب للنموذج الذي قدّمه: `mb suggest suhib-portfolio "..." --by <opus|sonnet|fable|haiku>`.
5. لا تعدّل `BRAIN.md` يدوياً — يُولَّد من `brain.json` و`journal/`.
6. ملفات العمل الخاصة بالمشروع توضع في `files/`.

## CLI

```
node "C:\master-brain\bin\mb.js" show suhib-portfolio
node "C:\master-brain\bin\mb.js" context suhib-portfolio
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
