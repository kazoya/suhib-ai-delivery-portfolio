# Master HQ — تعليمات كل الوكلاء

قبل أي طلب: اقرأ `BRAIN.md` ثم `ROLES.md` ثم آخر رسائل الجسر.

```
node C:\master\bridge\bin\bridge-cli.js list
```

## هذا المجلد

`C:\master` هو **المقر الرئيسي** للتعاون بين Cursor Auto وClaude Code وCodex وChatGPT. منصة التتبع تبقى في `C:\master-brain` (لا تنسخ المنصة هنا ولا تشغّل نسخة ثانية على المنفذ 4545).

## قواعد ثابتة

- لا أسرار في رسائل الجسر ولا في الصور.
- `from` يجب أن يطابق هويتك الحقيقية: `cursor` | `claude` | `codex` | `chatgpt` | `human`.
- أعلن الملفات قبل التعديل. تجنّب ملفات أعلنها وكيل آخر.
- لا تعدّل `BRAIN.md` يدوياً.
- بعد تقدّم ملموس: `mb log master` + `mb brain master add` + `mb suggest master --by <نموذجك>`.

## تشغيل الجسر

المخزن الوحيد المعتمد: `C:\master\bridge`. كل أمر جسر بالمسار المطلق:

```
node C:\master\bridge\bin\bridge-cli.js list
C:\master\scripts\start-bridge.cmd
powershell -File C:\master\scripts\claims.ps1
```

نسخ المهارة تحت `.claude/skills` و`bridge/skill` للنقل إلى خادم آخر فقط. إن اضطررت لها: `$env:ACB_HOME='C:\master\bridge'`.

عند حجز ملف اجعل السطر الأول من الرسالة `CLAIM: path1, path2`. عند الفراغ: `RELEASE: path1, path2`. قبل التعديل شغّل `scripts/claims.ps1`.

ثم افتح `http://127.0.0.1:4560/`.
