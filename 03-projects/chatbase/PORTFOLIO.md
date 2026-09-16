# OmniAgent Pro — عقل هندسي

قالب SaaS قابل للاستنساخ داخل `C:\airealpro\` — المنتج الأول: وكيل عمليات عملاء (RAG هجين + أداة تنفيذ لاحقاً).

**الرؤية الكاملة** في رسالة التعريف و`docs/PRODUCT.md`. هذا الملف هو مصدر الحقيقة للوكيل: ما يوجد على القرص، أين نحن، وما نبني الآن. لا تنفّذ وثيقة الـ 42 بنداً كخطة سبرنت.

التقرير: `%USERPROFILE%\.cursor\portfolio\briefs\c-airealpro-chatbase.yaml`

**نظام التنفيذ:** `/focused3-agentic-phases` — المصدر `C:\rctc-skill\focused3-agentic-phases`. كل عمل هندسي يمر THINK → EXECUTE → PROVE. لا توليد شامل.

---

## الثقة

`scaffolded` — مجلدات ووثائق. لا تطبيق، لا قاعدة بيانات، لا Git، لا نشر.

لا تَعِد بـ «20 ثانية» أو «دقة 99%» أو هامش 82% حتى يعمل مسار الديمو على بيانات حقيقية.

---

## ما أُنجز (مثبت على القرص)

| الأصل | الدليل |
|--------|--------|
| هيكل monorepo فارغ | `apps/web/` · `packages/ai/` · `packages/database/` · `packages/ui/` — كلها بلا ملفات |
| تعريف المنتج | `docs/PRODUCT.md` — ICP، لحظة الـ Aha، PLG |
| رسم المعمارية | `docs/ARCHITECTURE.md` — طبقات Client / Gateway / AI / Storage |
| مسودة المخطط | `docs/DATABASE.md` — SQL لـ orgs / workspaces / agents / sources / chunks / conversations |
| نظام focused3AgenticPhases | المصدر `C:\rctc-skill\focused3-agentic-phases` · نسخة المشروع `.cursor/skills/focused3-agentic-phases` · GitHub `kazoya/rctc-skill` @ `1a54cf0` |

هذا كل ما هو حقيقي. الباقي مخطط.

---

## ما يدّعيه README ولم يُبنَ

ملفات مذكورة وغير موجودة: `AI_ARCHITECTURE.md` · `SECURITY.md` · `PRICING.md` · `ROADMAP.md` · `DECISIONS.md`.

غير موجود أيضاً: `package.json` · `turbo.json` · تطبيق Next.js · Prisma/Drizzle · هجرات · RLS · pgvector على مشروع حي · Vercel AI SDK · Widget · Stripe · `.env` · `.git`.

مخطط `DATABASE.md` ناقص مقابل الرؤية: لا جداول عضوية المستخدم، لا RLS policies، لا عمود `tsvector` للبحث النصي، لا فهارس على `agent_id` / `org_id`.

---

## أين نحن

**المرحلة 0 — Paper OS.** القرار المنتج واضح (OmniAgent كـ #1، ليس API Docs Copilot). التنفيذ لم يبدأ.

شريحة الإطلاق الوحيدة التي تُثبِت الفكرة:

`لصق URL → سحب صفحات → chunk + embed → شات حي مع مصدر → سكربت تضمين سطر واحد`

كل ما عدا ذلك (ملفات، CRM، WhatsApp، Actions، SEO tools، صوت) مؤجّل حتى تعمل هذه الشريحة.

---

## لا تبنِ الآن

- لا تدريب LLM، لا multi-agent، لا SDK بعدة لغات، لا لوحة معقّدة.
- لا P1/P2/P3 من مصفوفة المنتج قبل أن يردّ الديمو من سياق مفهرس.
- لا Puppeteer/Playwright في الأسبوع الأول — HTML fetch + markdown كافٍ لـ Aha.
- لا تخلط هذا المستودع مع P1 الحالي في المحفظة (Belt / SmartHelp / AIPRO). هذا قالب منتج جديد، ليس قناة واتساب.

---

## الخطوة التالية (واحدة)

خلية focused3AgenticPhases الأولى (غير منفَّذة حتى يصرّح المستخدم):

- Builder: NextScaffoldBuilder
- Supervisor: FrontendSupervisor
- Verifier: RuntimeVerifier
- النطاق: Git إن غاب + Next.js 15 في `apps/web` + عنوان + حقل URL + CTA
- القبول: `npm install` ينجح، `npm run dev` يعمل، الصفحة تحمل، حقل URL ظاهر
- ممنوع: Supabase، RAG، Stripe، Widget، OAuth

بعدها بالترتيب، لا بالتوازي:

1. ربط Git + مشروع Supabase فارغ؛ تطبيق DDL الموجود في `docs/DATABASE.md` مع RLS و`pgvector` (لا توسّع الجدول قبل أول استعلام RAG يعمل).
2. `packages/ai`: scraper URL → markdown → chunk 512/64 → `text-embedding-3-small` → كتابة `document_chunks`.
3. مسار شات واحد (`Vercel AI SDK` + مزوّد واحد أولاً، ثم الراوتر). بث الإجابة مع استشهاد بالمقطع.
4. صفحة الهبوط = الديمو الحي (20s Aha). بلا تسجيل في المحاولة الأولى.
5. OAuth + إنشاء workspace/agent تلقائياً + سكربت embed أولي.
6. Stripe بعد أن يكتمل المسار المجاني 100 رسالة.

---

## وعد تجاري صادق اليوم

لا يوجد منتج يُباع. العرض المسموح: «نموذج ورقي لوكيل معرفة من رابط موقع». أي جملة مبيعات أقوى من ذلك كذب حتى يُفهرس موقع حقيقي ويُجاب منه.
