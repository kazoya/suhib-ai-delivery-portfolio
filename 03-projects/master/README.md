# المقر الرئيسي — Master HQ

مساحة عمل واحدة لتنسيق **Cursor Auto** (المدير والمنفّذ) مع **Claude Code** (عمق الكود) و**Codex** و**ChatGPT** (صور، تحسين، إدارة مكتب).

## ابدأ هنا

1. اقرأ [ROLES.md](ROLES.md) و[AGENTS.md](AGENTS.md).
2. شغّل الجسر: `scripts\start-bridge.cmd` → http://127.0.0.1:4560/
3. العقل الهندسي: `node C:\master-brain\bin\mb.js show master`
4. لوحة المنصة (موجودة مسبقاً): http://127.0.0.1:4545/

## المصادر التي بُني عليها هذا المقر

- `C:\project1\master\master-brain-full-E-master full.zip` — منصة العقل (مثبّتة في `C:\master-brain`، لا تُكرَّر هنا)
- `C:\project1\master\AgentCollaborationBridge.zip`
- `C:\project1\master\agent-collaboration-bridge-skill.zip`
- `C:\project1\master\EXAMPLE_MASTER_PROMPT_FOR_CHATGPT.md`

## المجلدات

| مسار | الغرض |
|---|---|
| `bridge/` | غرفة التعاون (Node بدون اعتماديات) |
| `prompts/` | برومبتات جاهزة لكل وكيل |
| `scripts/` | تشغيل الجسر، إرسال رسالة، استدعاء Claude Code |
| `.cursor/` `.claude/` `.agents/` | مهارات وقواعد لكل بيئة |
| `files/` | مخرجات العمل |

## التعاون مع Claude Code

من هذا المجلد:

```
powershell -File C:\master\scripts\ask-claude.ps1
```

أو افتح Claude Code على `C:\master` واقرأ `CLAUDE.md`.
