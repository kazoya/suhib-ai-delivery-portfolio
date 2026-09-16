/**
 * Portfolio data — every figure here is copied from the Master Brain kit
 * exported on 2026-09-14 (reports + project brains + 99 journal entries)
 * or from the owner's internal capabilities file. Nothing is estimated.
 */

export type Tier = "live" | "product" | "explore";
export type Confidence = "عالي" | "متوسط" | "استكشافي" | "تاريخي";

export type ProjectLink = { label: string; url: string };
export type TimelineEntry = { date: string; title: string; progress?: number; kind: "progress" | "milestone" | "blocker" | "note"; by: string };

export type Project = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  progress: number;
  status: string;
  tier: Tier;
  stack: string[];
  problem: string;
  built: string[];
  evidence: string[];
  links: ProjectLink[];
  note?: string;
  timeline?: TimelineEntry[];
  constraints?: string[];
};

export const owner = {
  name: "صهيب عسراوي",
  fullName: "صهيب محمود صالح العسراوي",
  nameEn: "Suhib Asrawi",
  title: "مهندس برمجيات · قائد تسليم رقمي بوكلاء الذكاء الاصطناعي",
  titleEn: "Software Engineer · AI-Agent-Driven Delivery",
  tagline: "منصات ويب عربية تصل إلى الإنتاج، ويديرها نظام يسجّل كل خطوة بدليلها.",
  location: "الأردن · عن بُعد",
  github: "https://github.com/kazoya",
  githubHandle: "kazoya",
  mostaql: "https://mostaql.com/u/kazoyan",
  baeed: "https://baeed.com/u/suhib_asrawi",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://suhib-ai-delivery-portfolio.vercel.app",
  sourceNote: "المصدر: حزمة Master Brain المصدَّرة بتاريخ 2026-09-14 (46 مشروعاً · 99 مدخل تقدّم). لا رقم هنا مُقدَّر.",
};

export const kpis = [
  { value: "46", label: "مشروعاً في منصة المتابعة", hint: "متوسط الإنجاز 12%" },
  { value: "6", label: "روابط إنتاج حيّة على Vercel", hint: "READY وقت التصدير" },
  { value: "52/52", label: "اختبار Vitest في Project1", hint: "+ Playwright 4/4" },
  { value: "99", label: "مدخل تقدّم موثّق", hint: "10–14 أيلول 2026" },
];

export const projects: Project[] = [
  {
    id: "project1",
    name: "ذكاء التجارة — Project1",
    nameEn: "Project1 Commerce Intelligence",
    short: "منصة محاكاة تجارة إلكترونية عابرة للحدود بحلقة كاملة من الاكتشاف إلى الشراء المحاكى.",
    progress: 83,
    status: "حلقة محاكاة مكتملة",
    tier: "live",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Vitest", "Playwright", "eBay Sandbox", "NextAuth"],
    problem: "اختبار جدوى تجارة إلكترونية عابرة للحدود (اكتشاف منتج → تسعير → إدراج → شراء) دون المخاطرة بمال حقيقي أو انتهاك سياسات المنصات.",
    built: [
      "اتصال eBay Sandbox موثَّق (SANDBOX_VERIFIED، Browse أعاد 3 عناصر)، إعدادات اكتشاف محفوظة (accessories / US / JO / topN=10).",
      "مسار CSV للعروض: معاينة → تحقق → commit، تسعير حتمي (markupFloor / marginFloor)، مسودة محلية بحالة LOCAL_READY، شراء محاكى بـ dataPlane=SIMULATION.",
      "مركز جاهزية للمالك (/overview و/readiness) يولّد المهام من فحوصات حقيقية مع دمج بـ dedupeKey.",
      "واجهة ثنائية اللغة (AR RTL / EN LTR) فاتحة/داكنة، وصفحة أوامر /master بقالب RCTC خلف requireOwner.",
      "مفتاح إيقاف buyHalt=true لا يمكن رفعه من الواجهة؛ فحوصات Origin/CSRF على كتابات المالك.",
    ],
    evidence: [
      "Vitest 28 → 40 → 43 → 49 → 52/52 خلال أسبوع",
      "Playwright 4/4 (landing public، overview→login، health 403، liveness 200)",
      "pnpm prove:csv و pnpm prove:readiness",
      "مراجعة واجهة عدائية بنموذج Opus: PASS بلا ثغرات رفع الإيقاف",
      "مراجعة Claude Code Reviewer: PASS مع 4 ثغرات رُقّعت (G1–G4)",
    ],
    links: [],
    note: "مستودع خاص على GitHub (kazoya/Project1). الإيراد الحيّ محجوب بالسياسة عمداً.",
    constraints: ["buyHalt=true — محاكاة فقط", "لا نشر حيّ ولا كتابة للأسواق", "مفاتيح eBay في .env.local فقط ولا تُطبع أبداً"],
    timeline: [
      { date: "2026-09-10", title: "Master Brain مسجّل كمشروع افتراضي", kind: "milestone", by: "Claude" },
      { date: "2026-09-10", title: "واجهة تحكم فاخرة ثنائية اللغة — Vitest 28/28", progress: 55, kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-11", title: "جسر تعاون ثلاثي الوكلاء مع failover", progress: 58, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-11", title: "معاينة تسعير CSV محلية — Vitest 40/40", progress: 62, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-11", title: "ترقيع ثغرات مراجعة Claude — Vitest 43/43", progress: 63, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-12", title: "مركز الجاهزية S1 — Vitest 49/49", progress: 66, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-12", title: "تقوية S1 وبدء S2/S3 — Vitest 52/52", progress: 70, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-14", title: "eBay Sandbox موثَّق وفلاتر الاكتشاف محفوظة", progress: 75, kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-14", title: "مسودة محلية بعد eBay — التكاليف ناقصة", progress: 76, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-14", title: "حلقة المحاكاة LOCAL_READY + شراء محاكى", progress: 82, kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-14", title: "حزمة المالك: Google login مقابل الاكتشاف", progress: 83, kind: "progress", by: "Claude Fable" },
    ],
  },
  {
    id: "master-brain",
    name: "Master Brain + Master HQ",
    nameEn: "Master Brain portfolio platform",
    short: "منصة متابعة محفظة بلا اعتماديات: عقل هندسي لكل مشروع، قناة أوامر للوكلاء، تقارير، وجسر تعاون بين أربعة وكلاء.",
    progress: 70,
    status: "تعمل يومياً",
    tier: "live",
    stack: ["Node.js بلا اعتماديات", "CLI", "HTTP API", "MCP", "PBKDF2-HMAC-SHA512", "HTML/PDF/XLSX/MD/JSON"],
    problem: "عشرات المشاريع موزّعة على جلسات Cursor وClaude وCodex بلا ذاكرة مشتركة، ولا طريقة لمعرفة ما أُنجز فعلاً وما هو ادّعاء.",
    built: [
      "كتالوج عمليات واحد (src/ops.js) يُعرض بثلاث قنوات: أداة MCP، POST /api/op/<name>، وأمر CLI — فتتصرف القنوات الثلاث بالطريقة نفسها.",
      "مخزن ملفات لكل مشروع: project.json + brain.json + journal/ تُولَّد منها BRAIN.md تلقائياً.",
      "قناة أوامر تشغّل claude -p داخل مجلد المشروع مع سياقه كاملاً، مهمة واحدة في كل مرة، مهلة 20 دقيقة، وتكتب مدخلاً في السجل عند الانتهاء.",
      "اتجاه معاكس ask_owner: الوكيل الذي لا يعرف قراراً يوقف المشروع حتى يجيب المالك بدل التخمين.",
      "تقارير بخمس صيغ (HTML/PDF/XLSX/MD/JSON) بكاتب xlsx مكتوب يدوياً، ومصادقة PBKDF2 بـ 210,000 تكرار وجلسات HMAC.",
      "Master HQ: جسر تعاون على المنفذ 4560 بسجل JSON ذرّي بين cursor/claude/codex/chatgpt/human مع اتفاقية CLAIM/RELEASE.",
    ],
    evidence: [
      "هذه المحفظة نفسها مُولَّدة من تقارير المنصة (46 مشروعاً، 99 مدخل تقدّم)",
      "اكتشاف تلقائي لـ 47 مشروعاً من 12 جذراً للجلسات",
      "مراجعة Claude Code T1–T3 طُبّقت على الجسر الحي 2026-09-12",
    ],
    links: [{ label: "مهارة RCTC على GitHub", url: "https://github.com/kazoya/rctc-skill" }],
    note: "منصة محلية على جهاز المالك (127.0.0.1:4545).",
    timeline: [
      { date: "2026-09-10", title: "تثبيت المنصة وتسجيل Project1 افتراضياً", kind: "milestone", by: "Claude" },
      { date: "2026-09-12", title: "إنشاء Master HQ وجسر التعاون على 4560", progress: 45, kind: "milestone", by: "Cursor" },
      { date: "2026-09-12", title: "تطبيق مراجعة Claude T1–T3 على الجسر الحي", progress: 70, kind: "progress", by: "Cursor" },
    ],
  },
  {
    id: "risha360",
    name: "ريشة 360 — أدوار المشاهير ومركز المؤثرين",
    nameEn: "Risha360 celebrity roles & influencer hub",
    short: "منصة مواهب Laravel + Next.js: أدوار دخول ذاتي للمشاهير في الإنتاج، ومركز تعاون المؤثرين بآلة حالة للصرف.",
    progress: 78,
    status: "أدوار في الإنتاج",
    tier: "live",
    stack: ["Laravel", "Next.js", "Laravel Forge", "PHPUnit", "Spatie", "pm2"],
    problem: "منصة مواهب ومؤثرين تحتاج دخولاً ذاتياً للمشاهير وتعديلاً مقيّداً لملفاتهم، ثم منظومة عروض واتفاقيات ومهام وصرف.",
    built: [
      "أدوار celebrity/talent مع ترحيل backfill، middleware على public_app_roles، syncRoles عند الدعوة/التفعيل، وendpoint تعديل ذاتي يرفض الحقول المحظورة.",
      "واجهة: AuthContext + LoginForm، قفل CelebrityEditPage، إصلاح فلتر my-celebrities ليشمل celebrities.id = users.celebrity_id.",
      "Influencer Collab Hub: ترحيلات (عروض/اتفاقيات/مهام/أدلة/محفظة/آيبان/صرف/متابعون)، لوحة /influencer، لوحتا إدارة بصلاحيتين جديدتين، PayoutReviewService بآلة حالة مقفولة، auto-enroll للسفراء.",
      "إصلاح تفعيل الحساب (تعارض مفتاحي invite/data بين API والواجهة) ونشره على الإنتاج.",
    ],
    evidence: [
      "الإنتاج على Forge: BE PR #3 + FE PR #26، migration 2026_09_10_190001 Ran",
      "commits ce79801 / 652d826 على الإنتاج؛ فرع feat/influencer-collab-hub مدفوع (86c2f81 / b5447db)",
      "6 ملفات اختبارات Feature لمركز التعاون",
      "تشخيص إنتاجي لمستخدم بلا ambassador_profile وإصلاحه يدوياً",
    ],
    links: [],
    note: "منصة عميل — لا رابط عام هنا.",
    timeline: [
      { date: "2026-09-10", title: "إصلاح تفعيل الحساب ونشره على الإنتاج", kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-10", title: "أدوار الدخول الذاتي — تنفيذ محلي", progress: 55, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-10", title: "نشر أدوار المشاهير على الإنتاج (Forge)", progress: 85, kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-12", title: "بدء منظومة لوحة المؤثر والتعاون", progress: 45, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-12", title: "لوحات الإدارة والاختبارات والتسجيل التلقائي للسفراء", progress: 88, kind: "progress", by: "Claude Opus" },
      { date: "2026-09-12", title: "دفع مركز المؤثرين مع تمييز المسارات المدفوعة «قيد التطوير»", progress: 78, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-13", title: "حزمة إحاطة المدير (HTML عربي + نموذج تعليقات)", kind: "progress", by: "Claude Fable" },
    ],
  },
  {
    id: "factories",
    name: "المصانع — المثالية للألبان وACI",
    nameEn: "Factory sites: Al-Mithaliya Dairy & ACI",
    short: "موقعا مصنعين أردنيين بـ Next.js منشوران على Vercel خلال يوم واحد، بسير عمل نسخ → تحسين بوكيل → دمج → نشر.",
    progress: 85,
    status: "منشوران على Vercel",
    tier: "live",
    stack: ["Next.js 16", "Tailwind 4", "shadcn", "Recharts", "Vercel", "GitHub"],
    problem: "مصانع أردنية بلا حضور رقمي مقنع؛ المطلوب مواقع عرض سريعة قابلة للتحسين بوكيل خارجي ثم الدمج والنشر.",
    built: [
      "المثالية للألبان: صفحة مبيعات، قائمة جانبية قابلة للطي، تقييم آيزو، noindex حتى الاعتماد.",
      "ACI للكيماويات الزراعية: بطل زراعي، تدرج أخضر، واتساب مبيعات، QR للمطوّر، حاسبة عائد، لوحات تشغيل تجريبية.",
      "سير عمل: نسخ → إعادة علامة → ZIP تحسين لوكيل آخر → دمج → lint/build → push → Vercel READY.",
    ],
    evidence: [
      "al-mithaliya-dairy.vercel.app — Vercel production READY (commit 7037dc9)",
      "aci-agrochemicals.vercel.app — READY",
      "GitHub kazoya/AlMithaliya و kazoya/ACI",
      "عائق مسجَّل بصدق: انقطاع جلسة ترك ACI نسخة غير معاد علامتها قبل إكمالها لاحقاً",
    ],
    links: [
      { label: "المثالية للألبان", url: "https://al-mithaliya-dairy.vercel.app" },
      { label: "ACI للكيماويات الزراعية", url: "https://aci-agrochemicals.vercel.app" },
      { label: "GitHub kazoya/ACI", url: "https://github.com/kazoya/ACI" },
    ],
    timeline: [
      { date: "2026-09-14", title: "حالة ACI: نسخ فقط — لا Vercel ولا ZIP", kind: "blocker", by: "Claude Opus" },
      { date: "2026-09-14", title: "دمج تحسينات المثالية ونشر Vercel", progress: 75, kind: "milestone", by: "Claude Opus" },
      { date: "2026-09-14", title: "فصل المثالية وبناء ACI للكيماويات الزراعية", progress: 85, kind: "milestone", by: "Claude Opus" },
      { date: "2026-09-14", title: "خلفية زراعية لـ ACI + ZIP تحسين", kind: "progress", by: "Claude Opus" },
    ],
  },
  {
    id: "baraah",
    name: "براءة الشوبكي — متجر تجريبي فاخر",
    nameEn: "Bara'ah Alshobaki premium store demo",
    short: "متجر Next.js 16 ثنائي اللغة لمنتجات غذائية حرفية، بتمريرَي أمان قبل أي إنتاج.",
    progress: 92,
    status: "بانتظار أصول العميل",
    tier: "live",
    stack: ["Next.js 16", "Supabase + RLS", "CSP hash", "HSTS", "Vercel"],
    problem: "عميل يحتاج عرضاً مقنعاً لمنتجات زيوت وخل ومستخلصات نباتية قبل توفير أصوله (صور، شعار، أسعار).",
    built: [
      "متجر ثنائي اللغة (ar RTL افتراضي / en)، سمة «هدوء نباتي فاخر»، تحكم بالعرض، قسم تصويت/قهوة، SEO محجوب حتى NEXT_PUBLIC_SEO_INDEX=true.",
      "أمان: mock payments تفشل مغلقةً على VERCEL_ENV=production، HMAC بحد أدنى للطول، CSP بهاش، HSTS، تحديد معدل للتواصل، Supabase migration + RLS.",
      "صفحات قانونية مسودة وأدمن مقفول، وإزالة تسريب public/audio مع فحص prebuild.",
    ],
    evidence: [
      "baraahalshobaki.vercel.app — Production على فريق muqasa",
      "github.com/kazoya/bara-ah-alshobaki",
      "typecheck / unit / lint / build خضراء محلياً وعلى Vercel",
      "تمريرا مراجعة Claude: pass-1 High مقبولة في DECISIONS.md، pass-2 منفّذة",
    ],
    links: [
      { label: "الموقع الحي", url: "https://baraahalshobaki.vercel.app" },
      { label: "GitHub", url: "https://github.com/kazoya/bara-ah-alshobaki" },
    ],
    constraints: ["لا شهادات أو جوائز مخترَعة", "التواصل والصور DEMO حتى يرسل العميل مواده"],
    timeline: [
      { date: "2026-09-13", title: "الديمو منشور على GitHub + Vercel", progress: 85, kind: "milestone", by: "Cursor" },
      { date: "2026-09-13", title: "أساس المرحلة A + إصلاحات مراجعة Claude", progress: 90, kind: "progress", by: "Cursor" },
      { date: "2026-09-13", title: "إصلاحات الأمان (تمرير 2) + مسودات قانونية", progress: 92, kind: "progress", by: "Cursor" },
    ],
  },
  {
    id: "giz-apca",
    name: "أكاديمية APCA للذكاء الاصطناعي الصناعي — GIZ",
    nameEn: "APCA Industrial AI Skills & Safety Academy (GIZ)",
    short: "مُظهِر تعليمي ثنائي اللغة لمؤسسات التدريب المهني: تشخيص → مسار → سيناريو → تقييم أمان → جواز مهارات.",
    progress: 85,
    status: "Gate B مكتمل",
    tier: "live",
    stack: ["Next.js", "Vitest", "Tailwind 4", "Vercel"],
    problem: "مؤسسات التدريب المهني (TVET) تحتاج مُظهِراً لمهارات وسلامة الذكاء الاصطناعي الصناعي قبل تجربة ميدانية.",
    built: [
      "رحلة ذهبية كاملة: تشخيص → مسار → سيناريو (رفض التجاوز + استشهاد) → تقييم بسلامة غير قابلة للتعويض → جواز مهارات → لوحة مدرّب → لوحة GIZ → تصدير أدلة.",
      "ذكاء اصطناعي محاكى وبذرة localStorage موثّقة في DECISION_LOG لتبقى التمارين حتمية.",
    ],
    evidence: [
      "11 اختبار vitest خضراء و next build أخضر",
      "apca-industrial-ai-academy.vercel.app — Vercel production READY",
      "github.com/kazoya/apca-industrial-ai-academy",
    ],
    links: [
      { label: "الموقع الحي", url: "https://apca-industrial-ai-academy.vercel.app" },
      { label: "GitHub", url: "https://github.com/kazoya/apca-industrial-ai-academy" },
    ],
    timeline: [
      { date: "2026-09-14", title: "الشريحة الرأسية الذهبية (Gate B)", progress: 70, kind: "progress", by: "Claude" },
      { date: "2026-09-14", title: "GitHub + Vercel production live", progress: 85, kind: "milestone", by: "Claude" },
    ],
  },
  {
    id: "wathiqa",
    name: "وثيقة — وكيل يقرأ PDF",
    nameEn: "Wathiqa PDF chat agent",
    short: "وكيل يقرأ ملف PDF ويجيب بأسلوب محادثة واتساب، منشور بنموذج اشتراك.",
    progress: 0,
    status: "منتج حيّ بلا متابعة",
    tier: "product",
    stack: ["Next.js", "PayPal subscriptions", "OpenAI (اختياري)"],
    problem: "قراءة ملفات PDF طويلة بالعربية مرهقة؛ المطلوب وكيل محادثة يجيب من الملف نفسه.",
    built: [
      "رفع PDF حتى 40 MB، ساعة مجانية، اشتراك PayPal (_xclick-subscriptions) من 12$ شهرياً.",
      "استخراج من الصفحات بدون مفتاح LLM، أو إجابات أسلس مع OPENAI_API_KEY.",
    ],
    evidence: ["wathiqa-eight.vercel.app منشور", "قيد مسجَّل من المالك: IPN الحي كان 404 آخر فحص، والـ stub المحلي لا يمنح «مدفوع» أبداً"],
    links: [{ label: "الموقع الحي", url: "https://wathiqa-eight.vercel.app" }],
    note: "مسجَّل بنسبة 0% في المنصة: مكتشَف لا مُتابَع.",
  },
  {
    id: "ghayari",
    name: "غياري — سوق قطع سيارات، لبنان",
    nameEn: "Ghayari auto-parts marketplace",
    short: "سوق قطع غيار بيروت أولاً: بحث OEM، مقارنة القطعة + التوصيل = الإجمالي، طلب COD بجدول زمني حقيقي.",
    progress: 0,
    status: "شريحة قابلة للتشغيل",
    tier: "product",
    stack: ["Next.js", "COD state machine", "PDF investor brief", "AR/EN/FR"],
    problem: "شراء قطع غيار في بيروت بلا شفافية سعر التوصيل الكلي.",
    built: [
      "بحث بـ OEM أو المركبة، فرز بأفضل تطابق / أقل إجمالي / الأقرب، طلب COD بأسعار من الخادم.",
      "آلة حالة COD_CONFIRMED → PREPARING → READY_FOR_PICKUP → DELIVERED → CLOSED، سجل تدقيق وجدول زمني.",
      "موجز مستثمرين PDF (/api/investor-brief) وصفحة طباعة عربية، أدوار تجريبية لا تنتحل ADMIN.",
    ],
    evidence: ["ghayari.vercel.app", "سكربتات test / lint / typecheck / build", "قواعد صدق مكتوبة: لا GPS مزيف، لا OCR، لا PayPal حيّ"],
    links: [{ label: "الموقع الحي", url: "https://ghayari.vercel.app" }],
  },
  {
    id: "smarthelp",
    name: "APCA SmartHelp — معرفة محلية من PDF",
    nameEn: "APCA SmartHelp local semantic help",
    short: "نظام PDF → مساعدة دلالية محلي بالكامل: FTS5 + FAISS + Ollama مع استشهاد برقم الصفحة.",
    progress: 0,
    status: "نواة متحققة محلياً",
    tier: "explore",
    stack: ["Python", "Node", "SQLite FTS5", "FAISS / hnswlib", "Ollama", "Sentence Transformers"],
    problem: "كتيبات تقنية عربية/إنجليزية بصيغة PDF/EPUB يصعب البحث فيها داخل الشركة دون إرسالها للسحابة.",
    built: [
      "استخراج بنية (فصول/مواضيع/مقاطع)، فهرسة هجينة كلمات + متجهات، فتح تلقائي واعٍ بالثقة (لا يفتح أول نتيجة عمياء).",
      "إجابات مؤسَّسة عبر Ollama مع رقم الصفحة، حزم .apcahelp محمولة، مواضيع مرتبطة بنمط JavaHelp.",
    ],
    evidence: ["README تفصيلي + setup.ps1", "ملف القدرات: «متحقق محلياً — جاهز لديمو معرفة»"],
    links: [],
  },
  {
    id: "khudhni",
    name: "خذني بطريقك — مشاركة رحلات مجدولة",
    nameEn: "Khudhni scheduled ride-sharing",
    short: "هيكل سير لمنصة أردنية لمشاركة ممرات يومية متكررة: Laravel + Filament للخلفية وFlutter RTL للموبايل.",
    progress: 0,
    status: "هيكل سير",
    tier: "explore",
    stack: ["Laravel", "Filament", "SQLite", "Flutter", "PHPUnit"],
    problem: "ممرات يومية مشتركة في الأردن، لا أوبر عند الطلب.",
    built: ["خلفية Laravel + Filament باختبارات في الذاكرة عبر SQLite.", "تطبيق Flutter RTL بدخول حقيقي ومعمل ممر، التوكن في الذاكرة فقط."],
    evidence: ["الحالة المكتوبة: «Walking skeleton، ليس جاهزاً للإطلاق، لا مدفوعات حقيقية»"],
    links: [],
  },
];

export const enterpriseBackground = [
  { project: "استيراد إجازات بنكي / MTZ", what: "محرك استيراد إنتاجي، تحقق ثم تعليم، جدولة، تشخيص، حزمة تراجع", tech: "Java 8، Oracle، Task Scheduler", status: "في الإنتاج" },
  { project: "APCA Smart Queue", what: "دور ذكي وتجربة انتظار/نداء", tech: "QMS", status: "منتج قائم" },
  { project: "التحكم بالدخول والحضور", what: "Miditec وZKTeco إلى الموارد البشرية", tech: "Java/C#، SDK، SQL Server", status: "خبرة إنتاجية ممتدة" },
  { project: "مقاصة جو", what: "ثقة وتقييم عقاري؛ وثائق المستثمرين", tech: "ويب، APIs", status: "موقع يعمل" },
];

export const capabilities: { name: string; evidence: string; level: Confidence }[] = [
  { name: "Next.js ثنائي اللغة RTL/LTR + سمات", evidence: "7 مشاريع، 6 منها منشورة", level: "عالي" },
  { name: "نشر على Vercel من GitHub", evidence: "6 روابط إنتاج READY", level: "عالي" },
  { name: "Laravel (أدوار، middleware، ترحيلات، آلة حالة)", evidence: "ريشة 360: PR #3 في الإنتاج، PayoutReviewService", level: "عالي" },
  { name: "نشر Laravel على Forge (migrate + pm2)", evidence: "ce79801 / 652d826، migration Ran", level: "عالي" },
  { name: "PostgreSQL + Prisma مع أقفال واستمرارية", evidence: "Project1 S1", level: "عالي" },
  { name: "اختبارات آلية (Vitest / Playwright / PHPUnit)", evidence: "52/52 + 4/4 · 11 · 6 ملفات Feature", level: "عالي" },
  { name: "منصات Node.js بلا اعتماديات (CLI + HTTP + MCP)", evidence: "Master Brain", level: "عالي" },
  { name: "مصادقة وجلسات آمنة", evidence: "PBKDF2-HMAC-SHA512 ×210k، كوكي HMAC httpOnly", level: "عالي" },
  { name: "تقوية أمان تطبيقات ويب", evidence: "CSP hash · HSTS · rate limit · fail-closed payments · CSRF", level: "عالي" },
  { name: "تنسيق وكلاء AI بأدوار مكتوبة", evidence: "Master HQ · جسر 4560 · CLAIM/RELEASE", level: "عالي" },
  { name: "هندسة أوامر للوكلاء (RCTC)", evidence: "kazoya/rctc-skill مثبّتة على /master", level: "عالي" },
  { name: "تكامل APIs خارجية", evidence: "eBay Browse Sandbox: SANDBOX_VERIFIED", level: "عالي" },
  { name: "تقارير آلية بخمس صيغ", evidence: "حزمة التقارير نفسها مُولَّدة من المنصة", level: "عالي" },
  { name: "Supabase + RLS", evidence: "براءة الشوبكي (غير مُزوَّدة تلقائياً)", level: "متوسط" },
  { name: "RAG محلي (FTS5 + FAISS + Ollama)", evidence: "APCA SmartHelp", level: "متوسط" },
  { name: "منتج SaaS باشتراك (PayPal)", evidence: "وثيقة: IPN الحي غير موثَّق", level: "متوسط" },
  { name: "آلة حالة طلبات COD وسجل تدقيق", evidence: "غياري", level: "متوسط" },
  { name: "Java 8 + Oracle للمؤسسات", evidence: "استيراد إجازات بنكي (ملف القدرات)", level: "تاريخي" },
  { name: "C# / SQL Server / SSIS / RDLC / WINCC", evidence: "ملف القدرات", level: "تاريخي" },
  { name: "أجهزة ميدانية (Miditec, ZKTeco, RFID)", evidence: "ملف القدرات", level: "تاريخي" },
  { name: "Filament admin + Flutter RTL", evidence: "خذني بطريقك (هيكل سير)", level: "استكشافي" },
  { name: "Python للنماذج (ARC Prize)", evidence: "arc_solver_web · arc_prize_2026 بنسبة 0%", level: "استكشافي" },
];

export const howIWork = [
  { title: "مجلد لكل مشروع", text: "project.json + brain.json + journal/ تُولَّد منها BRAIN.md تلقائياً، فلا يضيع سياق بين الجلسات." },
  { title: "أدوار مكتوبة للوكلاء", text: "Cursor مدير التنفيذ، Claude Code مراجعة الكود والمعمارية، Codex وثائق وسكربتات، ChatGPT صور وصياغة." },
  { title: "أمر بقالب RCTC", text: "Role / Context / Task / Constraints. الأمر يصل الوكيل مع سياق المشروع كاملاً وقواعد العمل وأوامر التسجيل." },
  { title: "مهمة واحدة في كل مرة", text: "مهلة 20 دقيقة. الوكيل الذي لا يعرف قراراً يسأل المالك (ask_owner) بدل التخمين." },
  { title: "دليل أو لم يحدث", text: "اختبارات خضراء، commit، رابط نشر، أو تسجيل «لم يُنفَّذ» صراحةً في السجل." },
  { title: "قيود لا تُرفع من الواجهة", text: "لا شراء حيّ، لا نشر بلا إذن، لا أرقام أو شهادات مخترَعة، لا مفاتيح خارج .env.local." },
];

export const honesty = [
  "نحو 35 مشروعاً في المنصة بنسبة 0%: مخزون مكتشَف من الجلسات، لا إنجاز مكتمل.",
  "أهم مشروع (Project1) مستودع خاص، ودليله اختبارات وسجلات لا رابط عام.",
  "Next.js وLaravel لغتا العمل الحاليتان؛ الأساس المؤسسي Java وC# وSQL.",
  "صيد الجوائز والـ CTF مسار جانبي لا محور توظيف.",
];

export const docs = [
  { slug: "profile", file: "01-profile-ar.md", title: "البروفايل المهني", blurb: "عنوان وظيفي مقترح، نبذة، مهارات مرتّبة بقوة الدليل، أسلوب العمل مع الوكلاء." },
  { slug: "cv", file: "02-cv-one-pager-ar.md", title: "سيرة صفحة واحدة", blurb: "جاهزة للنسخ إلى مستقل وبعيد وLinkedIn، مع ملخص إنجليزي." },
  { slug: "case-studies", file: "03-portfolio-case-studies.md", title: "دراسات الحالة", blurb: "عشر دراسات: المشكلة → ما بُني → الدليل → الحالة." },
  { slug: "capabilities", file: "04-capability-matrix.md", title: "مصفوفة القدرات", blurb: "قدرة | دليل المشروع | مستوى الثقة." },
  { slug: "positioning", file: "05-positioning.md", title: "التموضع في السوق", blurb: "خمسة أدوار مستهدفة، أنواع المشاريع المناسبة، وما يُرفض." },
  { slug: "bios", file: "06-linkedin-github-bios.md", title: "نصوص LinkedIn وGitHub ومستقل", blurb: "نصوص قصيرة جاهزة للنسخ." },
  { slug: "cover-letters", file: "07-cover-letter-templates.md", title: "قوالب رسائل التقديم", blurb: "قالب لوظيفة تقنية وقالب لمشروع تعاقدي." },
  { slug: "gaps", file: "08-honest-gaps.md", title: "الفجوات الصادقة وخطة أسبوعين", blurb: "ما ينقص البروفايل الآن وخطة يوم بيوم." },
];

/* ---------- chart data (all from report-202609141629-all-ar.json) ---------- */

export const progressByProject = projects
  .filter((p) => p.progress > 0)
  .map((p) => ({ id: p.id, name: p.name.split(" — ")[0], progress: p.progress }))
  .sort((a, b) => b.progress - a.progress);

export const activityByDay = [
  { day: "10 أيلول", date: "2026-09-10", entries: 8 },
  { day: "11 أيلول", date: "2026-09-11", entries: 8 },
  { day: "12 أيلول", date: "2026-09-12", entries: 66 },
  { day: "13 أيلول", date: "2026-09-13", entries: 5 },
  { day: "14 أيلول", date: "2026-09-14", entries: 12 },
];

export const entriesByType = [
  { key: "progress", label: "تقدّم", value: 84 },
  { key: "milestone", label: "إنجاز رئيسي", value: 12 },
  { key: "blocker", label: "عائق", value: 2 },
  { key: "note", label: "ملاحظة", value: 1 },
];

export const entriesByModel = [
  { key: "other", label: "Cursor / وكلاء أخرى", value: 66 },
  { key: "fable", label: "Claude Fable", value: 22 },
  { key: "opus", label: "Claude Opus", value: 7 },
  { key: "claude", label: "Claude (عام)", value: 4 },
];

export const projectsByStatus = [
  { key: "open", label: "مفتوح", value: 42 },
  { key: "dormant", label: "سكون", value: 3 },
  { key: "awaiting", label: "بانتظار ردّك", value: 1 },
];

export const project1Trajectory = [
  { date: "10 أيلول", value: 55, label: "واجهة تحكم فاخرة" },
  { date: "11 أيلول", value: 63, label: "ترقيع ثغرات المراجعة" },
  { date: "12 أيلول", value: 70, label: "S1 مُقوّى" },
  { date: "14 أيلول", value: 83, label: "حلقة المحاكاة مكتملة" },
];

export const platformSummary = {
  projects: 46,
  avgProgress: 12,
  entries: 99,
  suggestions: 9,
  period: "2026-01-01 → 2026-09-14",
  generated: "2026-09-14 16:29",
};
