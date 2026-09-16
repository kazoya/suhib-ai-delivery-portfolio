# حزمة تسليم لوكيل تحسين — محفظة صهيب عسراوي

**التاريخ:** 2026-09-16 · **المالك:** صهيب عسراوي (Suhib.Asrawi@gmail.com) · **المستودع:** `kazoya/suhib-ai-delivery-portfolio` · **الموقع الحي:** https://suhib-ai-delivery-portfolio.vercel.app

> هذا الملف بقالب RCTC (Role / Context / Task / Constraints). الصقه كما هو في أي وكيل (ChatGPT، Claude، Codex، Cursor) مع الحزمة المضغوطة. الوكيل يقترح ويسلّم فرعاً أو ZIP؛ **الدمج والنشر قرار المالك**.

---

## R — الدور

أنت مهندس واجهات أمامية أول ومصمم تفاعل. تعمل على مشروع Next.js 16 قائم ومنشور، بهوية بصرية عربية هادئة (كريمي/أخضر)، ولا تعيد بناءه.

## C — السياق

### ما هو المشروع
محفظة أعمال ثنائية اللغة (العربية أولاً RTL، والإنجليزية LTR تحت `/en`) لمستشار تقني أول ومهندس حلول. الصفحة الأهم `/journal`: رحلة «من تشخيص أنظمة DOS إلى التكامل المؤسسي ووكلاء الذكاء الاصطناعي».

### كيف بُني
| الطبقة | التقنية |
|---|---|
| إطار العمل | Next.js 16.3 (App Router، توليد ثابت لكل الصفحات) + React 19 + TypeScript strict |
| التنسيق | Tailwind CSS 4 برموز تصميم في `app/globals.css` (`--primary`, `--gold`, `--surface`…)، وضع داكن عبر `data-theme` |
| الرسوم | Recharts 3 مع جدول بديل لكل رسم |
| الخط | Droid Arabic Kufi محلي + Geist Mono |
| الأيقونات | lucide-react (بلا أيقونات علامات تجارية؛ GitHub/LinkedIn مكوّنان يدويان) |
| الاختبارات | Playwright (119 اختباراً: مسارات، H1، lang/dir، canonical، a11y عبر axe، لوحة الأوامر، الطباعة) |
| النشر | GitHub → Vercel تلقائياً عند الدفع إلى `main` |

### خريطة الموقع (كل الصفحات ثابتة)
```
/                      الرئيسية (عربي)         app/(ar)/page.tsx
/journal               السجل الهندسي           app/(ar)/journal/page.tsx  ← components/journey/journal-page.tsx
/projects              الأعمال                  app/(ar)/projects/page.tsx
/projects/[id]         دراسة حالة (10 مشاريع)   app/(ar)/projects/[id]/page.tsx
/platform              منصة المتابعة + النشر    app/(ar)/platform/page.tsx
/cv                    سيرة A4                  app/(ar)/cv/page.tsx
/docs/[slug]           8 وثائق Markdown         app/(ar)/docs/[slug]/page.tsx  (المصدر OUT/*.md)
/en                    الرئيسية + السيرة (EN)   app/(en)/en/page.tsx
/en/journal            السجل الهندسي (EN)       app/(en)/en/journal/page.tsx
/og, /og/projects/[id] صور Open Graph           app/og/**/route.tsx
/sitemap.xml, /robots.txt, /manifest.webmanifest
```

### بنية الكود
```
data/portfolio.ts      مصدر الحقيقة: المالك، المشاريع، القدرات، النشر (35 رابطاً)، بيانات الرسوم
data/journey.ts        العصور، الفصول العشرة، الذاكرات الهندسية، الطريقة، أجيال التقنية، الأمن، السيرة (ar/en)
components/layout/     root-shell (html lang/dir)، الترويسة، التذييل، لوحة الأوامر Ctrl+K، تبديل الوضع، reveal
components/journey/    journal-page، journey-chapters، method-strip، technology-generations (client)، recruiter-view، journal-entries
components/projects/   project-card، project-explorer (client)
components/charts/     chart-frame (جدول بديل)، progress-bars، trajectory، activity، share-bars
components/shared/     section-heading (as=h1/h2)، contact-cta، badge، print-button، site-qr، أيقونات
lib/i18n.ts            t(l, locale)، lib/seo.ts (JSON-LD، canonical، OG base)، lib/markdown.ts
public/screenshots/    لقطات حقيقية WebP · public/fun/ صور توضيحية
tests/e2e/             routes, interactions, a11y, visual
```

### السكربتات
```
npm run dev        # http://localhost:3000
npm run lint       # eslint 9
npm run typecheck  # tsc --noEmit
npm run build      # next build (51 صفحة ثابتة)
npm run test       # playwright (يشغّل next start على 3100 تلقائياً)
npm run test:a11y  # axe فقط
npm run verify     # lint + typecheck + build + test  ← بوابة القبول
```

### الواجهة وتجربة المستخدم الحالية
- **الحركة مقصودة ومحدودة:** `.reveal` عند التمرير (IntersectionObserver)، مؤشر وامض على عنوان السجل، انتقالات hover خفيفة. كل حركة تحترم `prefers-reduced-motion`.
- **الهوية:** خلفية `hero-mesh` (تدرجان شعاعيان) + `grid-lines` شبكة خفيفة. بطاقات بزوايا 1.5rem وظل خفيف. لا زجاجية، لا نيون، لا مصفوفة.
- **الوصول:** H1 واحد لكل صفحة، تباين AA في الوضعين (axe 0 مخالفات)، تنقل كامل بالكيبورد، رابط تخطٍّ، لوحة أوامر بمصيدة تركيز.
- **الأداء:** Lighthouse 92–93 جوال / 100 سطح مكتب، CLS 0.

## T — المهمة

أضف طبقة تفاعل JavaScript **رشيقة** مستوحاة من موقع APCA المرفق في الحزمة (`reference/apca-script.js` و`reference/nodes.js`)، دون كسر أي معيار أعلاه:

1. **ساعة رقمية حية** (مثل `initDigitalClock()` في `reference/apca-script.js` السطر ~246): توقيت عمّان (Asia/Amman)، ساعات:دقائق:ثواني بنقطتين وامضتين + التاريخ، بخط Geist Mono، تُوضع في الترويسة أو في بطل الرئيسية والسجل. لغة العرض تتبع الصفحة (أرقام لاتينية في الحالتين لثبات العرض). تُحدَّث بـ `setInterval` واحد وتتوقف عند إخفاء التبويب (`visibilitychange`).
2. **خلفية عقد/جسيمات تتفاعل مع الفأرة** (مثل `reference/nodes.js`: عقد تتصل بخطوط، ودائرة حول المؤشر `pointerCircleRadius`): على Canvas في بطل الرئيسية وبطل السجل فقط، بألوان من رموز التصميم (`--primary` بشفافية 0.25–0.35)، عدد عقد ≤ 60 على سطح المكتب و≤ 25 على الجوال، `requestAnimationFrame` يتوقف خارج الشاشة وعند `prefers-reduced-motion` تُرسم لقطة ثابتة بلا حركة. لا تحجب النص (z-index خلف المحتوى، `pointer-events: none`).
3. **لمسات دقيقة اختيارية:** ميل خفيف لبطاقة المشروع مع الفأرة (≤ 3 درجات)، عدّاد أرقام صاعد لبطاقات الأرقام في البطل عند الظهور، وتقدّم قراءة رفيع أعلى صفحة السجل.
4. سلّم النتيجة كمكوّنات React (`"use client"`) في `components/effects/`، بلا مكتبات خارجية ثقيلة (يُفضَّل كود يدوي ≤ 8 KB مضغوطاً)، وبتحميل كسول (`next/dynamic` مع `ssr: false`).

## C — القيود

- **لا إعادة تصميم.** الهوية والألوان والخط والبنية تبقى. لا gradients جديدة صاخبة، لا أيقونات روبوتات، لا طرفية مزيفة.
- **الأداء بوابة قبول:** Lighthouse الجوال لا ينزل تحت 90، CLS يبقى 0، لا JavaScript إضافي على صفحات لا تحتاجه.
- **الوصول بوابة قبول:** `npm run verify` يجب أن يبقى أخضر (119 اختباراً + axe). كل حركة تحترم `prefers-reduced-motion`. الساعة تحمل `aria-label` ولا تُقرأ كل ثانية (`aria-live="off"`).
- **الصدق:** لا تغيّر أي نص أو رقم أو ادعاء في `data/`. المحتوى قرار المالك.
- **لا أسرار، لا نشر.** لا تعديل على إعدادات Vercel أو GitHub. سلّم فرعاً `feat/effects` أو ZIP بالملفات المتغيرة فقط + لقطة شاشة قبل/بعد + نتائج `npm run verify` و Lighthouse.
- **التسليم:** وصف موجز لكل مكوّن، أين رُكّب، وكيف يُعطَّل بعلم واحد (`NEXT_PUBLIC_EFFECTS=off`).

---

## ملاحق في الحزمة
- `source/` — الكود كاملاً بلا `node_modules` و`.next` و`kit/` (الحزمة الأصلية محذوفة لأنها تحوي بيانات عملاء).
- `reference/apca-script.js`, `reference/nodes.js`, `reference/apca-style.css` — مرجع الساعة وحركة الفأرة من موقع APCA.
- `docs/JOURNAL_REDESIGN_REPORT.md`, `docs/AUDIT.md`, `docs/SUMMARY-ar.html` — كيف بُني الموقع ولماذا.
- `docs/screenshots/` — لقطات قبل/بعد على 390 و768 و1440.
- `docs/reports/` — نتائج axe وLighthouse.
- `sitemap.xml` — خريطة الموقع المولّدة.
