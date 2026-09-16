# دعم ريشة 360

مركز مساعدة عربي يسهّل رحلة الزائر والموهبة والمؤثر والشركة في منصة ريشة 360، مع فصل المحتوى العام عن ملفات الموظفين والإدارة.

## الواجهة العامة

- اختيار المسار: زائر، موهبة/مؤثر، أو شركة.
- بحث عربي داخل الموضوعات المسموحة للمسار.
- خطوات واضحة وروابط مباشرة إلى صفحات التسجيل في المنصة الحية.
- لا تُرسل المقالات الداخلية أو بيانات الدخول إلى متصفح الزائر.

## التشغيل المحلي

```powershell
npm install
npm run dev
```

## التحقق

```powershell
npm run build
npm test
npm run build:vercel
npm run help:validate
npm run help:jar:validate
```

## النشر

- `npm run build` يبني نسخة OpenAI Sites/Cloudflare الحالية.
- `npm run build:vercel` يبني نسخة Next.js المخصصة لـVercel.
- `vercel.json` يطلب من Vercel استخدام بناء Next.js.

## بنية المعرفة

- `help-center/source`: المصدر المعتمد للأدوار والمقالات.
- `help-center/dist`: حزم HTML مستقلة حسب الدور.
- `knowledge-base`: محتوى منظم للفهرسة الدلالية والبوت مستقبلاً.
- `output/pdf`: دليل PDF إداري.
- `output/jar`: حزم JavaHelp مفصولة حسب الدور.

ملف `.env2` وملفات البيئة الأخرى مستبعدة من Git بواسطة `.gitignore` ولا يجوز رفعها إلى المستودع.
