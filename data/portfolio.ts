/**
 * Portfolio data — every figure here is copied from the Master Brain kit
 * exported on 2026-09-14 (reports + project brains + 99 journal entries)
 * or from the owner's internal capabilities file. Nothing is estimated.
 */

export type Tier = "live" | "product" | "explore";
export type Confidence = "عالي" | "متوسط" | "استكشافي" | "تاريخي";

export type ProjectLink = { label: string; url: string };
export type TimelineEntry = { date: string; title: string; progress?: number; kind: "progress" | "milestone" | "blocker" | "note"; by: string };

export type StatusKey = "live" | "pilot" | "prototype" | "simulation" | "internal";
export type Milestone = { date: string; title: string };
export type Screenshot = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  shortEn: string;
  /** Internal completion figure from the tracking platform. Not rendered on public cards. */
  progress: number;
  status: string;
  statusKey: StatusKey;
  tier: Tier;
  stack: string[];
  problem: string;
  role: string;
  outcome: string;
  evidenceType: string;
  built: string[];
  evidence: string[];
  links: ProjectLink[];
  note?: string;
  /** Raw platform log, kept for the internal record; public pages render `milestones`. */
  timeline?: TimelineEntry[];
  milestones?: Milestone[];
  constraints?: string[];
  security?: string[];
  limitation?: string;
  screenshots?: Screenshot[];
};

export const statusLabel: Record<StatusKey, { ar: string; en: string }> = {
  live: { ar: "حيّ", en: "Live" },
  pilot: { ar: "تجريبي", en: "Pilot" },
  prototype: { ar: "نموذج أولي", en: "Prototype" },
  simulation: { ar: "محاكاة", en: "Simulation" },
  internal: { ar: "نظام داخلي", en: "Internal system" },
};

export const owner = {
  name: "صهيب عسراوي",
  fullName: "صهيب محمود صالح العسراوي",
  nameEn: "Suhib Asrawi",
  fullNameEn: "Suhib Mahmoud Saleh Asrawi",
  title: "مستشار تقني أول · مهندس حلول · وكلاء الذكاء الاصطناعي والأتمتة وتكامل الأنظمة",
  titleEn: "Senior Technology Consultant · Solutions Architect · AI Agents, Automation & Systems Integration",
  tagline: "مهندس نظم وبرمجيات بخبرة تتجاوز عشرين عاماً، يقود بناء منصات عربية آمنة وتكامل الأنظمة المؤسسية من الفكرة إلى الإنتاج.",
  taglineEn: "Systems and software engineer with 20+ years of depth, leading secure bilingual platforms and enterprise integration from concept to production.",
  summary:
    "خلفية مؤسسية في Java، C#، SQL Server، Oracle (أنظمة بنكية، تحكم بالدخول والحضور، إدارة طوابير)، وعمل حالي في وكلاء الذكاء الاصطناعي وأتمتة العمليات وتكامل الأنظمة. أستخدم وكلاء البرمجة كأداة تسريع تحت قيود مكتوبة، ويبقى القرار والدليل عندي: اختبار أخضر، commit، أو رابط نشر قبل أن يُحسب أي إنجاز.",
  summaryEn:
    "An enterprise background in Java, C#, SQL Server and Oracle (banking, access control and attendance, queue management), and current work in AI agents, operations automation and systems integration. I use coding agents as governed accelerators under written constraints; the decisions and the evidence stay with me: a green test, a commit or a deploy URL before anything counts as done.",
  location: "عمّان، الأردن · عن بُعد أولاً · حضور ميداني في السعودية عند الحاجة",
  locationEn: "Amman, Jordan · Remote-first · On-site in Saudi Arabia when required",
  email: "Suhib.Asrawi@gmail.com",
  linkedin: "https://linkedin.com/in/suhib-asrawi-0a6136264",
  /** Present in the ATS CV. Rendered only when publicPhone is true (owner decision). */
  phone: "+962 787 523 192",
  publicPhone: false,
  github: "https://github.com/kazoya",
  githubHandle: "kazoya",
  mostaql: "https://mostaql.com/u/kazoyan",
  baeed: "https://baeed.com/u/suhib_asrawi",
  employers: [
    { label: "apcasystems.com", url: "https://apcasystems.com" },
    { label: "muqasa.jo", url: "https://muqasa.jo" },
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://suhib-ai-delivery-portfolio.vercel.app",
  sourceNote: "الأرقام في هذا الموقع من تقارير منصة المتابعة (تصدير 2026-09-14) ومن السيرة الذاتية المعتمدة. لا رقم هنا مُقدَّر.",
};

export const kpis = [
  { value: "20+", label: "عاماً في بناء الأنظمة وتكاملها ودعمها", hint: "من إدارة الشبكات 2003 إلى وكلاء الذكاء الاصطناعي" },
  { value: "35", label: "رابطاً حيّاً على Vercel", hint: "34 مشروعاً · 3 نطاقات مخصصة · تُحقق منها 2026-09-16" },
  { value: "67", label: "اختباراً آلياً أخضر في مشروعين", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
  { value: "2", label: "نظامان إنتاجيان لعملاء", hint: "منصة MTZ بنكية · ريشة 360 على Forge" },
];

export const kpisEn = [
  { value: "20+", label: "years building, integrating and supporting systems", hint: "from network administration in 2003 to AI agents" },
  { value: "35", label: "live URLs on Vercel", hint: "34 projects · 3 custom domains · verified 2026-09-16" },
  { value: "67", label: "green automated tests across two projects", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
  { value: "2", label: "client production systems", hint: "a banking MTZ platform · Risha360 on Forge" },
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
    shortEn: "Cross-border commerce simulator with a full loop from discovery to a simulated purchase, and a kill switch the UI cannot lift.",
    statusKey: "simulation",
    role: "المالك والمعماري: تصميم حلقة المحاكاة، سياسة الإيقاف، وإسناد أجزاء من التنفيذ لوكلاء برمجة تحت مراجعة مزدوجة.",
    outcome: "حلقة محاكاة مكتملة بـ 56 اختباراً أخضر، بلا مسار يرفع الإيقاف من الواجهة.",
    evidenceType: "اختبارات + مراجعتان مستقلتان",
    security: ["buyHalt=true ثابت في طبقة البيانات", "فحوص Origin/CSRF على كتابات المالك", "مفاتيح eBay في .env.local فقط"],
    limitation: "المستودع خاص؛ الدليل اختبارات وسجلات لا رابط عام. الخطوة التالية نسخة عامة مخفّفة بلا مفاتيح.",
    milestones: [
      { date: "2026-09-10", title: "واجهة تحكم ثنائية اللغة — Vitest 28/28" },
      { date: "2026-09-12", title: "مركز الجاهزية يولّد المهام من فحوص حقيقية — Vitest 52/52" },
      { date: "2026-09-14", title: "eBay Sandbox موثَّق وفلاتر الاكتشاف محفوظة" },
      { date: "2026-09-14", title: "حلقة المحاكاة مكتملة: مسودة محلية وشراء محاكى" },
    ],
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
      "مراجعة واجهة عدائية مستقلة: PASS بلا ثغرات رفع الإيقاف",
      "مراجعة كود مستقلة ثانية: PASS مع 4 ثغرات رُقّعت (G1–G4)",
    ],
    links: [],
    note: "مستودع خاص على GitHub (kazoya/Project1). الإيراد الحيّ محجوب بالسياسة عمداً.",
    constraints: ["buyHalt=true — محاكاة فقط", "لا نشر حيّ ولا كتابة للأسواق", "مفاتيح eBay في .env.local فقط ولا تُطبع أبداً"],
    timeline: [
      { date: "2026-09-10", title: "Master Brain مسجّل كمشروع افتراضي", kind: "milestone", by: "Claude" },
      { date: "2026-09-10", title: "واجهة تحكم فاخرة ثنائية اللغة — Vitest 28/28", progress: 55, kind: "milestone", by: "Claude Fable" },
      { date: "2026-09-11", title: "جسر تعاون ثلاثي الوكلاء مع failover", progress: 58, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-11", title: "معاينة تسعير CSV محلية — Vitest 40/40", progress: 62, kind: "progress", by: "Claude Fable" },
      { date: "2026-09-11", title: "ترقيع ثغرات المراجعة المستقلة — Vitest 43/43", progress: 63, kind: "progress", by: "Claude Fable" },
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
    shortEn: "Dependency-free portfolio platform: one operation catalogue exposed as MCP tool, HTTP API and CLI, with a per-project engineering mind and reports.",
    statusKey: "internal",
    role: "المصمم والمنفذ الوحيد: كتالوج العمليات، المصادقة، التقارير، وجسر التعاون.",
    outcome: "منصة تعمل يومياً وتتابع 46 مبادرة مسجَّلة؛ هذه المحفظة مولَّدة من تقاريرها.",
    evidenceType: "نظام داخلي + مراجعة مستقلة",
    security: ["PBKDF2-HMAC-SHA512 بـ 210,000 تكرار", "كوكي جلسة HMAC httpOnly SameSite=Lax", "لا CORS عمداً"],
    limitation: "تعمل على جهاز المالك محلياً؛ لا نسخة عامة.",
    milestones: [
      { date: "2026-09-10", title: "تثبيت المنصة وتسجيل أول مشروع" },
      { date: "2026-09-12", title: "جسر التعاون بين الوكلاء مع اتفاقية CLAIM/RELEASE" },
      { date: "2026-09-12", title: "تطبيق مراجعة مستقلة T1–T3 على الجسر الحي" },
      { date: "2026-09-14", title: "تصدير التقارير التي بُنيت منها هذه المحفظة" },
    ],
    stack: ["Node.js بلا اعتماديات", "CLI", "HTTP API", "MCP", "PBKDF2-HMAC-SHA512", "HTML/PDF/XLSX/MD/JSON"],
    problem: "عشرات المشاريع موزّعة على جلسات وكلاء برمجة مختلفة بلا ذاكرة مشتركة، ولا طريقة لمعرفة ما أُنجز فعلاً وما هو ادّعاء.",
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
      "مراجعة مستقلة T1–T3 طُبّقت على الجسر الحي 2026-09-12",
    ],
    links: [{ label: "مهارة RCTC على GitHub", url: "https://github.com/kazoya/rctc-skill" }],
    note: "منصة محلية على جهاز المالك (127.0.0.1:4545).",
    timeline: [
      { date: "2026-09-10", title: "تثبيت المنصة وتسجيل Project1 افتراضياً", kind: "milestone", by: "Claude" },
      { date: "2026-09-12", title: "إنشاء Master HQ وجسر التعاون على 4560", progress: 45, kind: "milestone", by: "Cursor" },
      { date: "2026-09-12", title: "تطبيق مراجعة مستقلة T1–T3 على الجسر الحي", progress: 70, kind: "progress", by: "Cursor" },
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
    shortEn: "Laravel + Next.js talent platform: celebrity self-service roles in production, and an influencer collaboration hub with a locked payout state machine.",
    statusKey: "live",
    role: "مهندس الخلفية والواجهة: الأدوار والصلاحيات، آلة حالة الصرف، النشر على Forge، وتشخيص الإنتاج.",
    outcome: "أدوار الدخول الذاتي للمشاهير في الإنتاج على Laravel Forge، ومركز التعاون جاهز للدمج باختباراته.",
    evidenceType: "إنتاج لعميل + PR وترحيل",
    security: ["endpoint تعديل ذاتي يرفض الحقول المحظورة", "آلة حالة صرف مقفولة", "صلاحيتان إداريتان منفصلتان لمراجعة الآيبان والصرف"],
    limitation: "منصة عميل بلا رابط عام؛ مركز التعاون بانتظار اختبارات PHPUnit قبل PR.",
    milestones: [
      { date: "2026-09-10", title: "إصلاح تفعيل الحساب ونشره على الإنتاج" },
      { date: "2026-09-10", title: "أدوار المشاهير في الإنتاج (Forge، PR #3 / #26)" },
      { date: "2026-09-12", title: "مركز تعاون المؤثرين: لوحات الإدارة وآلة حالة الصرف" },
      { date: "2026-09-13", title: "حزمة إحاطة للإدارة بالعربية" },
    ],
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
    shortEn: "Two Jordanian factory sites in Next.js, live on Vercel within a day through a copy → improve → review → merge → deploy workflow.",
    statusKey: "live",
    role: "المالك التقني: القالب، سير العمل، مراجعة اقتراحات الوكيل، قرار الدمج والنشر.",
    outcome: "موقعان حيّان على Vercel من GitHub.",
    evidenceType: "روابط حيّة + GitHub",
    limitation: "أصول المصانع (صور وشعارات) تجريبية حتى يوفّرها العميل. إلى جانب هذين الموقعين، 20 موقع مصنع آخر من القالب نفسه حيّة على Vercel (القائمة في صفحة المنصة).",
    milestones: [
      { date: "2026-09-14", title: "دمج تحسينات المثالية للألبان ونشرها على Vercel" },
      { date: "2026-09-14", title: "فصل القالب وبناء ACI للكيماويات الزراعية" },
      { date: "2026-09-14", title: "ACI حيّ مع واتساب مبيعات وحاسبة عائد" },
    ],
    screenshots: [
      { src: "/screenshots/al-mithaliya.webp", alt: "الصفحة الرئيسية لموقع المثالية للألبان", width: 1280, height: 766 },
      { src: "/screenshots/aci.webp", alt: "الصفحة الرئيسية لموقع ACI للكيماويات الزراعية", width: 1280, height: 766 },
    ],
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
      "22 موقع مصنع حيّاً على Vercel من القالب نفسه (تُحقق منها 2026-09-16)",
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
    shortEn: "Bilingual Next.js 16 premium store demo for artisan food products, with two security passes before any production use.",
    statusKey: "pilot",
    role: "المهندس المسؤول: المتجر، السمة، تمريرا الأمان، وقرار حجب SEO حتى الاعتماد.",
    outcome: "ديمو حيّ على Vercel بفحوص typecheck/unit/lint/build خضراء وتمريرَي مراجعة أمنية منفّذين.",
    evidenceType: "رابط حيّ + GitHub + مراجعتان",
    security: ["mock payments تفشل مغلقةً في الإنتاج", "CSP بهاش + HSTS", "تحديد معدل للتواصل", "Supabase RLS"],
    limitation: "بانتظار أصول العميل؛ الصور والتواصل تجريبية.",
    milestones: [
      { date: "2026-09-13", title: "الديمو منشور على GitHub وVercel" },
      { date: "2026-09-13", title: "إصلاحات المراجعة الأمنية الأولى" },
      { date: "2026-09-13", title: "التمرير الأمني الثاني ومسودات الصفحات القانونية" },
    ],
    screenshots: [{ src: "/screenshots/baraah.webp", alt: "الصفحة الرئيسية لمتجر براءة الشوبكي التجريبي", width: 1280, height: 800 }],
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
      "تمريرا مراجعة أمنية مستقلة: pass-1 High مقبولة في DECISIONS.md، pass-2 منفّذة",
    ],
    links: [
      { label: "الموقع الحي", url: "https://baraahalshobaki.vercel.app" },
      { label: "GitHub", url: "https://github.com/kazoya/bara-ah-alshobaki" },
    ],
    constraints: ["لا شهادات أو جوائز مخترَعة", "التواصل والصور DEMO حتى يرسل العميل مواده"],
    timeline: [
      { date: "2026-09-13", title: "الديمو منشور على GitHub + Vercel", progress: 85, kind: "milestone", by: "Cursor" },
      { date: "2026-09-13", title: "أساس المرحلة A + إصلاحات المراجعة المستقلة", progress: 90, kind: "progress", by: "Cursor" },
      { date: "2026-09-13", title: "إصلاحات الأمان (تمرير 2) + مسودات قانونية", progress: 92, kind: "progress", by: "Cursor" },
    ],
  },
  {
    id: "giz-apca",
    name: "أكاديمية APCA للذكاء الاصطناعي الصناعي — مُظهِر مقترح متوافق مع أهداف GIZ",
    nameEn: "APCA Industrial AI Academy — proposed GIZ-aligned demonstrator",
    short: "مُظهِر تعليمي ثنائي اللغة لمؤسسات التدريب المهني: تشخيص → مسار → سيناريو → تقييم أمان → جواز مهارات.",
    progress: 85,
    status: "مُظهِر مقترح — Gate B مكتمل",
    tier: "live",
    shortEn: "Bilingual TVET demonstrator: diagnostic → pathway → scenario → non-compensable safety assessment → skills passport. A proposed demonstrator aligned with GIZ's stated objectives, not a GIZ product.",
    statusKey: "pilot",
    role: "المصمم والمنفذ: أنواع النطاق، بوابة السلامة، الرحلة الكاملة، والنشر.",
    outcome: "مُظهِر حيّ على Vercel بـ 11 اختباراً أخضر.",
    evidenceType: "رابط حيّ + GitHub + اختبارات",
    security: ["تقييم سلامة غير قابل للتعويض", "ذكاء اصطناعي محاكى وبذرة حتمية موثّقة"],
    limitation: "مُظهِر مقترح متوافق مع أهداف GIZ المعلنة؛ لا يمثّل موافقة أو اعتماداً أو شراكة مع GIZ. المرحلة التالية قاعدة بيانات ومصادقة حقيقية.",
    milestones: [
      { date: "2026-09-14", title: "الشريحة الرأسية الكاملة من التشخيص إلى جواز المهارات" },
      { date: "2026-09-14", title: "11 اختباراً أخضر ونشر على Vercel" },
    ],
    screenshots: [{ src: "/screenshots/apca-academy.webp", alt: "الصفحة الرئيسية لمُظهِر أكاديمية APCA للذكاء الاصطناعي الصناعي", width: 1280, height: 800 }],
    stack: ["Next.js", "Vitest", "Tailwind 4", "Vercel"],
    problem: "مؤسسات التدريب المهني (TVET) تحتاج مُظهِراً لمهارات وسلامة الذكاء الاصطناعي الصناعي قبل تجربة ميدانية.",
    built: [
      "رحلة كاملة: تشخيص → مسار → سيناريو (رفض التجاوز + استشهاد) → تقييم بسلامة غير قابلة للتعويض → جواز مهارات → لوحة مدرّب → لوحة جهة مانحة → تصدير أدلة.",
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
    shortEn: "A PDF chat agent that answers in a WhatsApp-style conversation, published with a subscription model.",
    statusKey: "prototype",
    role: "المهندس والناشر.",
    outcome: "منتج منشور يعمل للاستخدام المجاني؛ مسار الاشتراك غير موثَّق حياً.",
    evidenceType: "رابط حيّ",
    limitation: "IPN الحي كان 404 آخر فحص؛ لا خطوة تالية مسجَّلة.",
    screenshots: [{ src: "/screenshots/wathiqa.webp", alt: "واجهة وثيقة لرفع ملف PDF ومحادثته", width: 1280, height: 800 }],
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
    shortEn: "Beirut-first auto-parts marketplace: OEM search, part + delivery = total comparison, COD orders with a real timeline.",
    statusKey: "prototype",
    role: "المهندس: آلة حالة الطلبات، سجل التدقيق، الموجز الاستثماري.",
    outcome: "شريحة قابلة للتشغيل منشورة على Vercel بقواعد صدق مكتوبة.",
    evidenceType: "رابط حيّ + سكربتات فحص",
    limitation: "لا GPS حقيقي، لا OCR، لا PayPal حيّ؛ بيانات بذرة.",
    screenshots: [{ src: "/screenshots/ghayari.webp", alt: "الصفحة الرئيسية لسوق غياري لقطع السيارات", width: 1280, height: 800 }],
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
    shortEn: "Fully local PDF → semantic help system: FTS5 + FAISS + Ollama with page-level citations.",
    statusKey: "prototype",
    role: "المصمم والمنفذ؛ يرتبط بمساعد APCA SmartHelp CX الذي أقوده في العمل.",
    outcome: "نواة متحققة محلياً وجاهزة لعرض معرفة على وثائق شركة.",
    evidenceType: "كود + README + سكربت إعداد",
    limitation: "لا نشر عام؛ يعمل محلياً على وثائق الشركة.",
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
    shortEn: "Walking skeleton for a Jordanian scheduled ride-sharing platform: Laravel + Filament backend and a Flutter RTL app.",
    statusKey: "prototype",
    role: "المهندس.",
    outcome: "هيكل سير باختبارات في الذاكرة؛ ليس جاهزاً للإطلاق.",
    evidenceType: "كود",
    limitation: "لا مدفوعات حقيقية؛ التوكن في الذاكرة فقط.",
    stack: ["Laravel", "Filament", "SQLite", "Flutter", "PHPUnit"],
    problem: "ممرات يومية مشتركة في الأردن، لا أوبر عند الطلب.",
    built: ["خلفية Laravel + Filament باختبارات في الذاكرة عبر SQLite.", "تطبيق Flutter RTL بدخول حقيقي ومعمل ممر، التوكن في الذاكرة فقط."],
    evidence: ["الحالة المكتوبة: «Walking skeleton، ليس جاهزاً للإطلاق، لا مدفوعات حقيقية»"],
    links: [],
  },
];

export const enterpriseBackground = [
  { project: "استيراد إجازات بنكي / MTZ", what: "محرك استيراد إنتاجي، تحقق ثم تعليم، جدولة، تشخيص، حزمة تراجع", tech: "Java، Oracle، Task Scheduler", status: "في الإنتاج" },
  { project: "APCA Smart Queue", what: "دور ذكي وتجربة انتظار/نداء", tech: "QMS", status: "منتج قائم" },
  { project: "التحكم بالدخول والحضور", what: "Miditec وZKTeco إلى الموارد البشرية", tech: "Java/C#، SDK، SQL Server", status: "خبرة إنتاجية ممتدة" },
  { project: "مقاصة جو", what: "ثقة وتقييم عقاري؛ وثائق المستثمرين", tech: "ويب، APIs", status: "موقع يعمل" },
];

export const capabilities: { name: string; evidence: string; level: Confidence }[] = [
  { name: "Next.js ثنائي اللغة RTL/LTR + سمات", evidence: "34 مشروعاً منشوراً على Vercel، منها 22 موقع مصنع", level: "عالي" },
  { name: "نشر على Vercel من GitHub", evidence: "35 رابطاً حيّاً (34 مشروعاً) تُحقق منها 2026-09-16", level: "عالي" },
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
  { name: "Java + Oracle للمؤسسات", evidence: "محرك استيراد إجازات بنكي في الإنتاج (Signals Control)", level: "عالي" },
  { name: "C# / SQL Server / SSIS / RDLC / WinCC", evidence: "أنظمة خلفية وغرف تحكم في الإنتاج (Signals Control)", level: "عالي" },
  { name: "أجهزة ميدانية (Miditec, ZKTeco, RFID, ANPR)", evidence: "تكامل SDK مع الموارد البشرية (Signals Control)", level: "عالي" },
  { name: "Filament admin + Flutter RTL", evidence: "خذني بطريقك (هيكل سير)", level: "استكشافي" },
  { name: "Python للنماذج (ARC Prize)", evidence: "arc_solver_web · arc_prize_2026 بنسبة 0%", level: "استكشافي" },
];

export const howIWork = [
  { title: "القرار عندي، التنفيذ موزَّع", text: "أحدد المعمارية والقيود والمعيار، ثم أوزّع التنفيذ بين نفسي ووكلاء برمجة بأدوار مكتوبة: تنفيذ، مراجعة كود، وثائق." },
  { title: "مجلد وعقل هندسي لكل مشروع", text: "ما أُنجز، ما يجري، ما يلي، والقيود، في ملفات أراجعها أنا لا الوكيل، فلا يضيع سياق بين الجلسات." },
  { title: "أمر بقالب RCTC", text: "Role / Context / Task / Constraints. كل توجيه يحمل سياق المشروع كاملاً وقواعد العمل، فلا مجال للتخمين." },
  { title: "مهمة واحدة في كل مرة", text: "الوكيل الذي لا يعرف قراراً يوقف العمل ويسألني بدل أن يخمّن. القرار التقني والمالي لا يُفوَّض." },
  { title: "دليل أو لم يحدث", text: "اختبار أخضر، commit، رابط نشر، أو تسجيل «لم يُنفَّذ» صراحةً. لا يُحسب إنجاز بلا دليل." },
  { title: "قيود لا تُرفع من الواجهة", text: "لا شراء حيّ، لا نشر بلا إذن، لا أرقام أو شهادات مخترَعة، لا مفاتيح خارج .env.local. تُفرض في طبقة لا يصل إليها المستخدم." },
];

export const honesty = [
  "منصة المتابعة تسجّل 46 مبادرة؛ معظمها مخزون مكتشَف لا عمل مكتمل. المعروض هنا هو ما له دليل فقط.",
  "أقوى مشروع محاكاة (Project1) مستودع خاص، ودليله اختبارات وسجلات لا رابط عام.",
  "Java، C#، SQL Server، Oracle أساس مؤسسي حالي؛ Next.js وLaravel لغتا العمل للمنصات العربية الحديثة.",
  "خبرات DOS والوسائط واستعادة البيانات خبرات عملية تأسيسية، لا شهادات ولا تخصص حالي.",
  "أستخدم وكلاء البرمجة كأداة تسريع تحت قيود مكتوبة؛ القرار والمسؤولية عندي.",
];

export const docs = [
  { slug: "profile", file: "01-profile-ar.md", title: "البروفايل المهني", blurb: "عنوان وظيفي مقترح، نبذة، مهارات مرتّبة بقوة الدليل، أسلوب العمل مع الوكلاء." },
  { slug: "cv", file: "02-cv-one-pager-ar.md", title: "سيرة صفحة واحدة (نص)", blurb: "نسخة نصية للنسخ إلى مستقل وبعيد وLinkedIn؛ النسخة المنسّقة في صفحة السيرة." },
  { slug: "case-studies", file: "03-portfolio-case-studies.md", title: "دراسات الحالة", blurb: "عشر دراسات: المشكلة → ما بُني → الدليل → الحالة." },
  { slug: "capabilities", file: "04-capability-matrix.md", title: "مصفوفة القدرات", blurb: "قدرة | دليل المشروع | مستوى الثقة." },
  { slug: "positioning", file: "05-positioning.md", title: "التموضع في السوق", blurb: "خمسة أدوار مستهدفة، أنواع المشاريع المناسبة، وما يُرفض." },
  { slug: "bios", file: "06-linkedin-github-bios.md", title: "نصوص LinkedIn وGitHub ومستقل", blurb: "نصوص قصيرة جاهزة للنسخ." },
  { slug: "cover-letters", file: "07-cover-letter-templates.md", title: "قوالب رسائل التقديم", blurb: "قالب لوظيفة تقنية وقالب لمشروع تعاقدي." },
  { slug: "gaps", file: "08-honest-gaps.md", title: "الفجوات الصادقة وخطة أسبوعين", blurb: "ما ينقص البروفايل الآن وخطة يوم بيوم." },
];

/* ---------- live Vercel deployments (verified with HTTP 200 on 2026-09-16) ---------- */

export type Deployment = { label: string; url: string; kind: "product" | "factory"; repo?: string; customDomain?: boolean };

export const deployments: Deployment[] = [
  { label: "ريشة 360 — القانون", url: "https://law.risha360.com", kind: "product", repo: "law-risha360", customDomain: true },
  { label: "منصة ريشة 360", url: "https://risha360-platform.vercel.app", kind: "product", repo: "risha360-platform" },
  { label: "مقاصة جو", url: "https://v.muqasa-jo.com", kind: "product", repo: "muqasa", customDomain: true },
  { label: "مقاصة (نسخة Vercel)", url: "https://muqasa.vercel.app", kind: "product", repo: "muqasa" },
  { label: "زها المجالي — محاماة", url: "https://www.zahaalaw.com", kind: "product", repo: "zaha-almajali", customDomain: true },
  { label: "أكاديمية APCA (مُظهِر)", url: "https://apca-industrial-ai-academy.vercel.app", kind: "product", repo: "apca-industrial-ai-academy" },
  { label: "براءة الشوبكي", url: "https://baraahalshobaki.vercel.app", kind: "product", repo: "bara-ah-alshobaki" },
  { label: "سمسار العرب", url: "https://simsar-alarab.vercel.app", kind: "product", repo: "simsar-alarab" },
  { label: "وثيقة", url: "https://wathiqa-eight.vercel.app", kind: "product", repo: "Wathiqa" },
  { label: "غياري", url: "https://ghayari.vercel.app", kind: "product", repo: "ghayari" },
  { label: "VStrata", url: "https://vstrata.vercel.app", kind: "product", repo: "VStrata" },
  { label: "البيروتي — مقاصة", url: "https://albayrouty-muqasa.vercel.app", kind: "product", repo: "AlBayrouty" },
  { label: "NNS Perchance Catcher", url: "https://nns-perchance-catcher.vercel.app", kind: "product" },
  { label: "ACI للكيماويات الزراعية", url: "https://aci-agrochemicals.vercel.app", kind: "factory", repo: "ACI" },
  { label: "المثالية للألبان", url: "https://al-mithaliya-dairy.vercel.app", kind: "factory", repo: "AlMithaliya" },
  { label: "مجموعة عبد", url: "https://abdulgroup.vercel.app", kind: "factory", repo: "AbdulGroup" },
  { label: "Wales", url: "https://wales-jo.vercel.app", kind: "factory", repo: "Wales" },
  { label: "VIP Armouring", url: "https://viparmouring.vercel.app", kind: "factory", repo: "VipArmouring" },
  { label: "Universal Jordan", url: "https://universaljordan.vercel.app", kind: "factory", repo: "UniversalJordan" },
  { label: "TransWorld Apparel", url: "https://transworldapparel.vercel.app", kind: "factory", repo: "TransWorldApparel" },
  { label: "Top", url: "https://top-jo.vercel.app", kind: "factory", repo: "Top" },
  { label: "ثمار", url: "https://themar-nine.vercel.app", kind: "factory", repo: "Themar" },
  { label: "Tello Socks", url: "https://tellosocks.vercel.app", kind: "factory", repo: "TelloSocks" },
  { label: "طيبة", url: "https://tayyiba-muqasa.vercel.app", kind: "factory", repo: "Tayyiba" },
  { label: "تفاصيل", url: "https://tafaseel-beta.vercel.app", kind: "factory", repo: "Tafaseel" },
  { label: "مجموعة الرياض", url: "https://riyadhgrp.vercel.app", kind: "factory", repo: "RiyadhGrp" },
  { label: "Primo Cafe", url: "https://primocafe-pi.vercel.app", kind: "factory", repo: "PrimoCafe" },
  { label: "Point Comfort", url: "https://pointcomfort.vercel.app", kind: "factory", repo: "PointComfort" },
  { label: "National Paints", url: "https://nationalpaints.vercel.app", kind: "factory", repo: "NationalPaints" },
  { label: "Movetco", url: "https://movetco.vercel.app", kind: "factory", repo: "Movetco" },
  { label: "المزارع الحديثة", url: "https://modernfarms.vercel.app", kind: "factory", repo: "ModernFarms" },
  { label: "خضري", url: "https://khudari.vercel.app", kind: "factory", repo: "Khudari" },
  { label: "Joswe", url: "https://joswe-muqasa.vercel.app", kind: "factory", repo: "Joswe" },
  { label: "Jordina", url: "https://jordina.vercel.app", kind: "factory", repo: "Jordina" },
  { label: "Jopack", url: "https://jopack-kappa.vercel.app", kind: "factory", repo: "Jopack" },
];

export const deploymentStats = {
  urls: deployments.length,
  repos: new Set(deployments.map((d) => d.repo ?? d.url)).size,
  products: deployments.filter((d) => d.kind === "product").length,
  factories: deployments.filter((d) => d.kind === "factory").length,
  customDomains: deployments.filter((d) => d.customDomain).length,
  verified: "2026-09-16",
};

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
  { key: "other", label: "وكلاء تنفيذ", value: 66 },
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
