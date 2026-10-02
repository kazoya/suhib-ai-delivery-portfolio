import type { Locale } from "@/lib/i18n";
import type { Tier } from "@/data/portfolio";

export const projectsCopy: Record<Locale, {
  metaTitle: string;
  metaDescription: (n: number) => string;
  eyebrow: string;
  title: (n: number) => string;
  lead: string;
  kind: string;
  all: (n: number) => string;
  tiers: Record<Tier, string>;
  searchPlaceholder: string;
  searchLabel: string;
  tech: string;
  allTech: string;
  emptyTech: string;
  count: (shown: number, total: number) => string;
  filter: string;
  clear: string;
  noResults: string;
  noResultsHint: string;
  remove: (label: string) => string;
  clearSearch: string;
  caseStudy: string;
  role: string;
  outcome: string;
  evidence: string;
  liveSite: string;
  noPublic: string;
}> = {
  ar: {
    metaTitle: "الأعمال — دراسات حالة بدور واضح ونتيجة موثّقة",
    metaDescription: (n) => `${n} دراسة حالة من أعمال صهيب الصالح: أنظمة إنتاجية لعملاء، منصات عربية حيّة على Vercel وForge، محاكاة تجارية، ونماذج أولية. لكل مشروع: المشكلة، دوره، النتيجة، الدليل، والقيود.`,
    eyebrow: "الأعمال",
    title: (n) => `${n} دراسة حالة بدور واضح ونتيجة موثّقة`,
    lead: "الحالة على كل بطاقة: حيّ، تجريبي، نموذج أولي، محاكاة، أو نظام داخلي. الأنظمة المؤسسية لعملاء (بنوك، تحكم بالدخول) مذكورة في السيرة بلا روابط عامة. منصة المتابعة تسجّل 46 مبادرة؛ المعروض هنا ما له دليل.",
    kind: "نوع المشروع",
    all: (n) => `الكل (${n})`,
    tiers: { live: "عمل موثّق", product: "منتج منشور", explore: "استكشافي" },
    searchPlaceholder: "ابحث في الاسم أو التقنية…",
    searchLabel: "بحث في الأعمال",
    tech: "التقنية",
    allTech: "كل التقنيات",
    emptyTech: "لا مشاريع بهذه التقنية ضمن التصفية الحالية",
    count: (shown, total) => `${shown} من ${total}`,
    filter: "التصفية",
    clear: "مسح الفلاتر",
    noResults: "لا نتائج تطابق التصفية",
    noResultsHint: "جرّب إزالة أحد الشروط أو ابدأ من جديد.",
    remove: (label) => `إزالة «${label}»`,
    clearSearch: "مسح البحث",
    caseStudy: "دراسة الحالة",
    role: "دوري",
    outcome: "النتيجة",
    evidence: "الدليل",
    liveSite: "الموقع الحي",
    noPublic: "بلا رابط عام",
  },
  en: {
    metaTitle: "Projects — case studies with a clear role and a verified outcome",
    metaDescription: (n) => `${n} case studies from Suhib Al-Saleh: client production systems, live platforms on Vercel and Forge, a commerce simulation, and prototypes. Each states the problem, his role, the outcome, the evidence, and the constraints.`,
    eyebrow: "Projects",
    title: (n) => `${n} case studies with a clear role and a verified outcome`,
    lead: "Each card is labelled live, pilot, prototype, simulation, or internal. Client banking and access-control systems stay in the CV, without public URLs. The tracking platform lists 46 initiatives; only evidenced work is shown here.",
    kind: "Project kind",
    all: (n) => `All (${n})`,
    tiers: { live: "Documented work", product: "Shipped product", explore: "Exploratory" },
    searchPlaceholder: "Search by name or technology…",
    searchLabel: "Search projects",
    tech: "Technology",
    allTech: "All technologies",
    emptyTech: "No projects with this technology in the current filter",
    count: (shown, total) => `${shown} of ${total}`,
    filter: "Filter",
    clear: "Clear filters",
    noResults: "Nothing matches this filter",
    noResultsHint: "Remove one condition, or start again.",
    remove: (label) => `Remove “${label}”`,
    clearSearch: "Clear search",
    caseStudy: "Case study",
    role: "My role",
    outcome: "Outcome",
    evidence: "Evidence",
    liveSite: "Live site",
    noPublic: "No public URL",
  },
  fa: {
    metaTitle: "نمونه‌کارها — مطالعه‌های موردی با نقش روشن و نتیجهٔ مستند",
    metaDescription: (n) => `${n} مطالعهٔ موردی از کارهای صهیب الصالح: سامانه‌های تولیدی برای مشتری، سکوهای زنده روی Vercel و Forge، شبیه‌سازی تجارت، و نمونه‌های اولیه. برای هر کدام: مسئله، نقش، نتیجه، سند و قیدها.`,
    eyebrow: "نمونه‌کارها",
    title: (n) => `${n} مطالعهٔ موردی با نقش روشن و نتیجهٔ مستند`,
    lead: "روی هر کارت وضعیت است: در حال اجرا، آزمایشی، نمونهٔ اولیه، شبیه‌سازی، یا داخلی. سامانه‌های بانکی و کنترل تردد مشتریان در رزومه است و نشانی عمومی ندارد. سکو ۴۶ ابتکار را ثبت کرده؛ اینجا فقط کارِ دارای سند است.",
    kind: "گونهٔ پروژه",
    all: (n) => `همه (${n})`,
    tiers: { live: "کار مستند", product: "محصول منتشرشده", explore: "اکتشافی" },
    searchPlaceholder: "جست‌وجو در نام یا فناوری…",
    searchLabel: "جست‌وجو در نمونه‌کارها",
    tech: "فناوری",
    allTech: "همهٔ فناوری‌ها",
    emptyTech: "در پالایش فعلی پروژه‌ای با این فناوری نیست",
    count: (shown, total) => `${shown} از ${total}`,
    filter: "پالایش",
    clear: "پاک کردن پالایش",
    noResults: "چیزی با این پالایش جور نیست",
    noResultsHint: "یکی از شرط‌ها را بردارید یا از نو شروع کنید.",
    remove: (label) => `برداشتن «${label}»`,
    clearSearch: "پاک کردن جست‌وجو",
    caseStudy: "مطالعهٔ موردی",
    role: "نقش من",
    outcome: "نتیجه",
    evidence: "سند",
    liveSite: "سایت زنده",
    noPublic: "نشانی عمومی ندارد",
  },
  tr: {
    metaTitle: "Projeler — net bir rol ve doğrulanmış sonuçla vaka çalışmaları",
    metaDescription: (n) => `Suhib Al-Saleh'in çalışmalarından ${n} vaka: müşteri üretim sistemleri, Vercel ve Forge'da canlı platformlar, bir ticaret simülasyonu ve prototipler. Her birinde sorun, rol, sonuç, kanıt ve kısıtlar vardır.`,
    eyebrow: "Projeler",
    title: (n) => `Net bir rol ve doğrulanmış sonuçla ${n} vaka`,
    lead: "Her kartta durum yazar: yayında, pilot, prototip, simülasyon veya dahili. Bankacılık ve geçiş kontrolü sistemleri özgeçmiştedir, genel adresleri yoktur. İzleme platformu 46 girişim kaydeder; burada yalnızca kanıtı olan iş vardır.",
    kind: "Proje türü",
    all: (n) => `Tümü (${n})`,
    tiers: { live: "Belgelenmiş iş", product: "Yayındaki ürün", explore: "Keşif" },
    searchPlaceholder: "Ada veya teknolojiye göre ara…",
    searchLabel: "Projelerde ara",
    tech: "Teknoloji",
    allTech: "Tüm teknolojiler",
    emptyTech: "Bu filtrede bu teknolojiye sahip proje yok",
    count: (shown, total) => `${shown} / ${total}`,
    filter: "Filtre",
    clear: "Filtreleri temizle",
    noResults: "Bu filtreyle eşleşen yok",
    noResultsHint: "Bir koşulu kaldırın veya baştan başlayın.",
    remove: (label) => `“${label}” kaldır`,
    clearSearch: "Aramayı temizle",
    caseStudy: "Vaka çalışması",
    role: "Rolüm",
    outcome: "Sonuç",
    evidence: "Kanıt",
    liveSite: "Canlı site",
    noPublic: "Herkese açık adres yok",
  },
  ur: {
    metaTitle: "کام — واضح کردار اور تصدیق شدہ نتیجے کے کیس",
    metaDescription: (n) => `صہیب الصالح کے کام سے ${n} کیس: کلائنٹ کے پیداواری نظام، Vercel اور Forge پر زندہ پلیٹ فارم، تجارت کی سمیولیشن، اور پروٹوٹائپ۔ ہر ایک میں مسئلہ، کردار، نتیجہ، ثبوت اور پابندیاں ہیں۔`,
    eyebrow: "کام",
    title: (n) => `واضح کردار اور تصدیق شدہ نتیجے کے ساتھ ${n} کیس`,
    lead: "ہر کارڈ پر حیثیت ہے: فعال، آزمائشی، پروٹوٹائپ، سمولیشن، یا اندرونی۔ بینکنگ اور داخلہ کنٹرول کے نظام سی وی میں ہیں، عوامی پتہ نہیں۔ ٹریکنگ پلیٹ فارم 46 اقدامات لکھتا ہے؛ یہاں صرف وہ کام ہے جس کا ثبوت ہے۔",
    kind: "منصوبے کی قسم",
    all: (n) => `سب (${n})`,
    tiers: { live: "دستاویزی کام", product: "شائع شدہ پروڈکٹ", explore: "دریافت" },
    searchPlaceholder: "نام یا ٹیکنالوجی سے تلاش…",
    searchLabel: "کام میں تلاش",
    tech: "ٹیکنالوجی",
    allTech: "تمام ٹیکنالوجیز",
    emptyTech: "موجودہ فلٹر میں اس ٹیکنالوجی کا کوئی منصوبہ نہیں",
    count: (shown, total) => `${shown} از ${total}`,
    filter: "فلٹر",
    clear: "فلٹر صاف کریں",
    noResults: "اس فلٹر سے کچھ نہیں ملا",
    noResultsHint: "ایک شرط ہٹائیں یا دوبارہ شروع کریں۔",
    remove: (label) => `«${label}» ہٹائیں`,
    clearSearch: "تلاش صاف کریں",
    caseStudy: "کیس اسٹڈی",
    role: "میرا کردار",
    outcome: "نتیجہ",
    evidence: "ثبوت",
    liveSite: "لائیو سائٹ",
    noPublic: "عوامی پتہ نہیں",
  },
  ru: {
    metaTitle: "Проекты — кейсы с ясной ролью и проверенным результатом",
    metaDescription: (n) => `${n} кейсов Сухиба Аль-Салеха: промышленные системы для клиентов, живые платформы на Vercel и Forge, торговая симуляция и прототипы. В каждом — задача, роль, результат, доказательства и ограничения.`,
    eyebrow: "Проекты",
    title: (n) => `${n} кейсов с ясной ролью и проверенным результатом`,
    lead: "На каждой карточке статус: в эксплуатации, пилот, прототип, симуляция или внутренняя система. Банковские системы и контроль доступа остаются в резюме, без публичных адресов. Платформа учёта хранит 46 инициатив; здесь только работа с доказательствами.",
    kind: "Тип проекта",
    all: (n) => `Все (${n})`,
    tiers: { live: "Подтверждённая работа", product: "Выпущенный продукт", explore: "Исследование" },
    searchPlaceholder: "Поиск по имени или технологии…",
    searchLabel: "Поиск по проектам",
    tech: "Технология",
    allTech: "Все технологии",
    emptyTech: "В текущем фильтре нет проектов с этой технологией",
    count: (shown, total) => `${shown} из ${total}`,
    filter: "Фильтр",
    clear: "Сбросить фильтры",
    noResults: "Ничего не совпало с фильтром",
    noResultsHint: "Уберите одно условие или начните сначала.",
    remove: (label) => `Убрать «${label}»`,
    clearSearch: "Очистить поиск",
    caseStudy: "Кейс",
    role: "Моя роль",
    outcome: "Результат",
    evidence: "Доказательства",
    liveSite: "Живой сайт",
    noPublic: "Нет публичного адреса",
  },
};

export const articleCopy: Record<Locale, {
  back: string;
  links: string;
  noLink: string;
  evidenceKind: string;
  constraints: string;
  shots: string;
  realCapture: string;
  problem: string;
  built: string;
  security: string;
  evidence: string;
  limitation: string;
  milestones: string;
  openLive: string;
  related: string;
  record: string;
}> = {
  ar: {
    back: "كل الأعمال",
    links: "الروابط والدليل",
    noLink: "لا رابط عام لهذا المشروع.",
    evidenceKind: "نوع الدليل",
    constraints: "القيود المكتوبة",
    shots: "لقطات حقيقية",
    realCapture: "لقطة حقيقية من الموقع الحي.",
    problem: "المشكلة",
    built: "ما نفّذته أو قدته",
    security: "ضوابط الأمان والسلامة",
    evidence: "الدليل",
    limitation: "القيد الحالي والخطوة التالية",
    milestones: "المحطات الرئيسية",
    openLive: "افتح الموقع الحي",
    related: "مشاريع من الفئة نفسها",
    record: "",
  },
  en: {
    back: "All projects",
    links: "Links and evidence",
    noLink: "This project has no public URL.",
    evidenceKind: "Evidence type",
    constraints: "Written constraints",
    shots: "Real captures",
    realCapture: "Real capture from the live site.",
    problem: "Problem",
    built: "What I built or led",
    security: "Safety and security controls",
    evidence: "Evidence",
    limitation: "Current limit and next step",
    milestones: "Milestones",
    openLive: "Open the live site",
    related: "More from the same group",
    record: "The record below is the vetted Arabic wording, so figures, dates and constraints stay exact.",
  },
  fa: {
    back: "همهٔ نمونه‌کارها",
    links: "پیوندها و سند",
    noLink: "این پروژه نشانی عمومی ندارد.",
    evidenceKind: "گونهٔ سند",
    constraints: "قیدهای نوشته‌شده",
    shots: "ثبت‌های واقعی",
    realCapture: "ثبت واقعی از سایت زنده.",
    problem: "مسئله",
    built: "آنچه ساختم یا رهبری کردم",
    security: "کنترل‌های ایمنی و امنیت",
    evidence: "سند",
    limitation: "قید فعلی و گام بعد",
    milestones: "ایستگاه‌های اصلی",
    openLive: "سایت زنده را باز کنید",
    related: "پروژه‌های همین دسته",
    record: "متن زیر نسخهٔ بازبینی‌شدهٔ عربی است تا رقم‌ها، تاریخ‌ها و قیدها جابه‌جا نشوند.",
  },
  tr: {
    back: "Tüm projeler",
    links: "Bağlantılar ve kanıt",
    noLink: "Bu projenin herkese açık adresi yok.",
    evidenceKind: "Kanıt türü",
    constraints: "Yazılı kısıtlar",
    shots: "Gerçek kayıtlar",
    realCapture: "Canlı siteden gerçek kayıt.",
    problem: "Sorun",
    built: "Yaptığım veya yönettiğim",
    security: "Güvenlik ve emniyet kontrolleri",
    evidence: "Kanıt",
    limitation: "Şu anki sınır ve sonraki adım",
    milestones: "Kilometre taşları",
    openLive: "Canlı siteyi aç",
    related: "Aynı gruptan diğerleri",
    record: "Aşağıdaki kayıt, rakamlar, tarihler ve kısıtlar kaymasın diye gözden geçirilmiş Arapça metindir.",
  },
  ur: {
    back: "تمام کام",
    links: "روابط اور ثبوت",
    noLink: "اس منصوبے کا عوامی پتہ نہیں۔",
    evidenceKind: "ثبوت کی قسم",
    constraints: "لکھی پابندیاں",
    shots: "حقیقی عکس",
    realCapture: "لائیو سائٹ سے حقیقی عکس۔",
    problem: "مسئلہ",
    built: "جو میں نے بنایا یا قیادت کی",
    security: "حفاظت اور سیکیورٹی کے کنٹرول",
    evidence: "ثبوت",
    limitation: "موجودہ حد اور اگلا قدم",
    milestones: "اہم پڑاؤ",
    openLive: "لائیو سائٹ کھولیں",
    related: "اسی گروہ کے مزید",
    record: "نیچے کا ریکارڈ عربی کا جائزہ شدہ متن ہے تاکہ اعداد، تاریخیں اور پابندیاں نہ ہلیں۔",
  },
  ru: {
    back: "Все проекты",
    links: "Ссылки и доказательства",
    noLink: "У этого проекта нет публичного адреса.",
    evidenceKind: "Тип доказательства",
    constraints: "Письменные ограничения",
    shots: "Реальные снимки",
    realCapture: "Реальный снимок с живого сайта.",
    problem: "Задача",
    built: "Что я сделал или вёл",
    security: "Контроль безопасности",
    evidence: "Доказательства",
    limitation: "Текущее ограничение и следующий шаг",
    milestones: "Вехи",
    openLive: "Открыть живой сайт",
    related: "Ещё из той же группы",
    record: "Ниже — выверенный арабский текст, чтобы цифры, даты и ограничения не поехали.",
  },
};

export const docTitles: Record<string, Record<Locale, { title: string; blurb: string }>> = {
  profile: {
    ar: { title: "البروفايل المهني", blurb: "عنوان وظيفي مقترح، نبذة، مهارات مرتّبة بقوة الدليل، أسلوب العمل مع الوكلاء." },
    en: { title: "Professional profile", blurb: "A proposed title, a short bio, skills ordered by evidence, and how the work with agents is governed." },
    fa: { title: "پروفایل حرفه‌ای", blurb: "عنوان پیشنهادی، نبذه، مهارت‌ها به ترتیب قوت سند، و شیوهٔ کار با عامل‌ها." },
    tr: { title: "Profesyonel profil", blurb: "Önerilen unvan, kısa özgeçmiş, kanıta göre sıralanmış beceriler ve ajanlarla çalışma biçimi." },
    ur: { title: "پیشہ ورانہ پروفائل", blurb: "تجویز کردہ عنوان، مختصر تعارف، ثبوت کے حساب سے مہارتیں، اور ایجنٹس کے ساتھ کام کا طریقہ۔" },
    ru: { title: "Профессиональный профиль", blurb: "Предлагаемая должность, краткая биография, навыки по силе доказательств и порядок работы с агентами." },
  },
  cv: {
    ar: { title: "سيرة صفحة واحدة (نص)", blurb: "نسخة نصية للنسخ إلى مستقل وبعيد وLinkedIn؛ النسخة المنسّقة في صفحة السيرة." },
    en: { title: "One-page CV (text)", blurb: "Plain text to paste into Mostaql, Baeed and LinkedIn. The formatted CV is on the CV page." },
    fa: { title: "رزومهٔ یک‌صفحه‌ای (متن)", blurb: "متن برای مستقل و بعید و LinkedIn. نسخهٔ آراسته در صفحهٔ رزومه است." },
    tr: { title: "Tek sayfalık özgeçmiş (metin)", blurb: "Mostaql, Baeed ve LinkedIn'e yapıştırmalık düz metin. Biçimli sürüm özgeçmiş sayfasında." },
    ur: { title: "ایک صفحے کا سی وی (متن)", blurb: "مستقل، بعید اور LinkedIn میں چسپاں کرنے کا سادہ متن۔ سجا ہوا نسخہ سی وی کے صفحے پر ہے۔" },
    ru: { title: "Резюме на одну страницу (текст)", blurb: "Текст для Mostaql, Baeed и LinkedIn. Оформленная версия — на странице резюме." },
  },
  "case-studies": {
    ar: { title: "دراسات الحالة", blurb: "عشر دراسات: المشكلة → ما بُني → الدليل → الحالة." },
    en: { title: "Case studies", blurb: "Problem → what was built → evidence → status." },
    fa: { title: "مطالعه‌های موردی", blurb: "مسئله → آنچه ساخته شد → سند → وضعیت." },
    tr: { title: "Vaka çalışmaları", blurb: "Sorun → ne yapıldı → kanıt → durum." },
    ur: { title: "کیس اسٹڈیز", blurb: "مسئلہ → کیا بنا → ثبوت → حیثیت۔" },
    ru: { title: "Кейсы", blurb: "Задача → что сделано → доказательства → статус." },
  },
  capabilities: {
    ar: { title: "مصفوفة القدرات", blurb: "قدرة | دليل المشروع | مستوى الثقة." },
    en: { title: "Capability matrix", blurb: "Capability, project evidence, and confidence." },
    fa: { title: "ماتریس توانمندی", blurb: "توانمندی، سند پروژه، و سطح اطمینان." },
    tr: { title: "Yetenek matrisi", blurb: "Yetenek, proje kanıtı ve güven düzeyi." },
    ur: { title: "صلاحیتوں کا جدول", blurb: "صلاحیت، منصوبے کا ثبوت، اور اعتماد کی سطح۔" },
    ru: { title: "Матрица навыков", blurb: "Навык, доказательство проектом и уровень уверенности." },
  },
  positioning: {
    ar: { title: "التموضع في السوق", blurb: "خمسة أدوار مستهدفة، أنواع المشاريع المناسبة، وما يُرفض." },
    en: { title: "Market positioning", blurb: "Five target roles, the projects that fit, and what is declined." },
    fa: { title: "جایگاه در بازار", blurb: "پنج نقش هدف، پروژه‌های مناسب، و آنچه رد می‌شود." },
    tr: { title: "Pazar konumu", blurb: "Beş hedef rol, uyan projeler ve reddedilenler." },
    ur: { title: "مارکیٹ پوزیشن", blurb: "پانچ ہدف کردار، موزوں منصوبے، اور جو مسترد ہوتا ہے۔" },
    ru: { title: "Позиция на рынке", blurb: "Пять целевых ролей, подходящие проекты и то, от чего отказ." },
  },
  bios: {
    ar: { title: "نصوص LinkedIn وGitHub ومستقل", blurb: "نصوص قصيرة جاهزة للنسخ." },
    en: { title: "LinkedIn, GitHub and Mostaql bios", blurb: "Short texts ready to copy." },
    fa: { title: "متن‌های LinkedIn و GitHub و مستقل", blurb: "متن‌های کوتاه آمادهٔ کپی." },
    tr: { title: "LinkedIn, GitHub ve Mostaql metinleri", blurb: "Kopyalanmaya hazır kısa metinler." },
    ur: { title: "LinkedIn، GitHub اور Mostaql کے متن", blurb: "کاپی کے لیے تیار مختصر متن۔" },
    ru: { title: "Тексты для LinkedIn, GitHub и Mostaql", blurb: "Короткие тексты, готовые к копированию." },
  },
  "cover-letters": {
    ar: { title: "قوالب رسائل التقديم", blurb: "قالب لوظيفة تقنية وقالب لمشروع تعاقدي." },
    en: { title: "Cover letter templates", blurb: "One template for a technical role and one for a contract project." },
    fa: { title: "قالب‌های نامهٔ معرفی", blurb: "یک قالب برای نقش فنی و یک قالب برای پروژهٔ قراردادی." },
    tr: { title: "Ön yazı şablonları", blurb: "Teknik rol için bir şablon, sözleşmeli proje için bir şablon." },
    ur: { title: "تعارفی خطوط کے سانچے", blurb: "ایک سانچہ تکنیکی کردار کے لیے، ایک معاہداتی منصوبے کے لیے۔" },
    ru: { title: "Шаблоны сопроводительных писем", blurb: "Один шаблон для технической роли и один для контрактного проекта." },
  },
  gaps: {
    ar: { title: "الفجوات الصادقة وخطة أسبوعين", blurb: "ما ينقص البروفايل الآن وخطة يوم بيوم." },
    en: { title: "Honest gaps and a two-week plan", blurb: "What the profile still lacks, and a day-by-day plan." },
    fa: { title: "شکاف‌های صادقانه و برنامهٔ دو هفته", blurb: "آنچه اکنون در پروفایل کم است، و برنامهٔ روزبه‌روز." },
    tr: { title: "Dürüst boşluklar ve iki haftalık plan", blurb: "Profilde şu an eksik olanlar ve gün gün plan." },
    ur: { title: "ایماندار خامیاں اور دو ہفتے کا منصوبہ", blurb: "پروفائل میں اب کیا کم ہے، اور دن بہ دن منصوبہ۔" },
    ru: { title: "Честные пробелы и план на две недели", blurb: "Чего профилю ещё не хватает, и план по дням." },
  },
};

export const docsCopy: Record<Locale, { nav: string; download: string; note: string; metaDescription: string }> = {
  ar: { nav: "وثائق البروفايل", download: "تنزيل Markdown", note: "", metaDescription: "وثائق البروفايل الجاهزة للنسخ: بروفايل، سيرة، دراسات حالة، مصفوفة قدرات، تموضع، نصوص المنصات، قوالب تقديم، وفجوات صادقة." },
  en: { nav: "Profile documents", download: "Download Markdown", note: "This file is the vetted Arabic source, ready to copy. The navigation around it is in English.", metaDescription: "Copy-ready profile documents: profile, CV, case studies, capability matrix, positioning, platform bios, cover letters, and honest gaps." },
  fa: { nav: "سندهای پروفایل", download: "بارگیری Markdown", note: "این پرونده متن بازبینی‌شدهٔ عربی و آمادهٔ کپی است. ناوبری دور آن فارسی است.", metaDescription: "سندهای آمادهٔ کپی پروفایل: پروفایل، رزومه، مطالعه‌های موردی، ماتریس توانمندی، جایگاه، متن سکوها، نامه‌ها، و شکاف‌های صادقانه." },
  tr: { nav: "Profil belgeleri", download: "Markdown indir", note: "Bu dosya kopyalanmaya hazır, gözden geçirilmiş Arapça kaynaktır. Çevresindeki gezinti Türkçedir.", metaDescription: "Kopyalanmaya hazır profil belgeleri: profil, özgeçmiş, vakalar, yetenek matrisi, konum, platform metinleri, ön yazılar ve dürüst boşluklar." },
  ur: { nav: "پروفائل کی دستاویزات", download: "Markdown ڈاؤن لوڈ", note: "یہ فائل جائزہ شدہ عربی ماخذ ہے، کاپی کے لیے تیار۔ اس کے گرد نیویگیشن اردو میں ہے۔", metaDescription: "کاپی کے لیے تیار پروفائل دستاویزات: پروفائل، سی وی، کیس، صلاحیتوں کا جدول، پوزیشن، پلیٹ فارم کے متن، خطوط، اور ایماندار خامیاں۔" },
  ru: { nav: "Документы профиля", download: "Скачать Markdown", note: "Это выверенный арабский исходник, готовый к копированию. Навигация вокруг него на русском.", metaDescription: "Документы профиля, готовые к копированию: профиль, резюме, кейсы, матрица навыков, позиция, тексты площадок, письма и честные пробелы." },
};

export const cvCopy: Record<Locale, { metaTitle: string; metaDescription: string; note: string; print: string }> = {
  ar: {
    metaTitle: "السيرة الذاتية — صهيب الصالح، مستشار تقني أول ومهندس حلول",
    metaDescription: "سيرة صهيب الصالح القابلة للطباعة (A4): أكثر من عشرين عاماً في الأنظمة المؤسسية وتكاملها، Java وC# وSQL Server وOracle، وكلاء الذكاء الاصطناعي والأتمتة، وخبرة ميدانية في الشبكات والأجهزة.",
    note: "نسخة A4 قابلة للطباعة أو الحفظ PDF. النسخة الإنجليزية الموسّعة من زر الطباعة في الصفحة الإنجليزية.",
    print: "طباعة / PDF",
  },
  en: {
    metaTitle: "CV — Suhib Al-Saleh, Senior Technology Consultant",
    metaDescription: "Printable ATS CV for Suhib Al-Saleh: 20+ years of enterprise systems, Java, C#, SQL Server, Oracle, AI agents and automation, plus earlier network and hardware work.",
    note: "",
    print: "Print / PDF",
  },
  fa: {
    metaTitle: "رزومه — صهیب الصالح، مشاور ارشد فناوری",
    metaDescription: "رزومهٔ قابل چاپ صهیب الصالح: بیش از بیست سال سیستم‌های سازمانی، Java و C# و SQL Server و Oracle، عامل‌های هوش مصنوعی و اتوماسیون، و کار میدانی شبکه و سخت‌افزار.",
    note: "عنوان‌ها فارسی است. متن سوابق از نسخهٔ بازبینی‌شدهٔ عربی آمده تا تاریخ‌ها و ادعاها جابه‌جا نشوند. زبان‌های محکی فقط عربی و انگلیسی است.",
    print: "چاپ / PDF",
  },
  tr: {
    metaTitle: "Özgeçmiş — Suhib Al-Saleh, Kıdemli Teknoloji Danışmanı",
    metaDescription: "Suhib Al-Saleh'in yazdırılabilir özgeçmişi: 20+ yıl kurumsal sistemler, Java, C#, SQL Server, Oracle, yapay zeka ajanları ve otomasyon, ayrıca ağ ve donanım deneyimi.",
    note: "Başlıklar Türkçedir. Görev metni, tarihler ve iddialar kaymasın diye gözden geçirilmiş İngilizce özgeçmişten gelir. Konuşulan diller yalnızca Arapça ve İngilizcedir.",
    print: "Yazdır / PDF",
  },
  ur: {
    metaTitle: "سی وی — صہیب الصالح، سینئر ٹیکنالوجی کنسلٹنٹ",
    metaDescription: "صہیب الصالح کا قابلِ طبع سی وی: بیس سال سے زیادہ انٹرپرائز نظام، Java، C#، SQL Server، Oracle، اے آئی ایجنٹس اور آٹومیشن، اور نیٹ ورک و ہارڈویئر کا میدان۔",
    note: "عنوان اردو میں ہیں۔ ملازمت کی تفصیل عربی کے جائزہ شدہ متن سے ہے تاکہ تاریخیں اور دعوے نہ ہلیں۔ بولی جانے والی زبانیں صرف عربی اور انگریزی ہیں۔",
    print: "پرنٹ / PDF",
  },
  ru: {
    metaTitle: "Резюме — Сухиб Аль-Салех, старший технологический консультант",
    metaDescription: "Печатное резюме Сухиба Аль-Салеха: более 20 лет корпоративных систем, Java, C#, SQL Server, Oracle, агенты ИИ и автоматизация, плюс сети и оборудование.",
    note: "Заголовки на русском. Текст опыта взят из выверенного английского резюме, чтобы даты и формулировки не поехали. Разговорные языки — только арабский и английский.",
    print: "Печать / PDF",
  },
};

export const platformCopy: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  factsLabel: string;
  facts: { k: string; hint: string }[];
  deployEyebrow: string;
  deployTitle: (urls: number, repos: number) => string;
  deployLead: (products: number, factories: number, domains: number) => string;
  products: string;
  factories: string;
  customDomain: string;
  caseStudy: string;
}> = {
  ar: {
    metaTitle: "منصة المتابعة — حوكمة 46 مبادرة متتبَّعة",
    metaDescription: "Master Brain: منصة Node.js بلا اعتماديات بناها صهيب الصالح لحوكمة محفظة من 46 مبادرة متتبَّعة: عقل هندسي لكل مشروع، كتالوج عمليات واحد عبر CLI وHTTP وMCP، وتقارير. الأرقام من تقرير 2026-09-14.",
    eyebrow: "منصة المتابعة",
    title: "Master Brain: كيف أحكم 46 مبادرة متتبَّعة بعقل هندسي لكل واحدة",
    lead: "منصة Node.js بلا اعتماديات بنيتها لحوكمة المحفظة وتوجيه وكلاء البرمجة تحت قيود مكتوبة. هذه الصفحة دليل على الحوكمة لا على الإنجاز: معظم المبادرات مخزون مكتشَف، والمعروض في الأعمال ما له دليل فقط.",
    factsLabel: "أرقام المنصة",
    facts: [
      { k: "مبادرة متتبَّعة", hint: "معظمها مخزون مكتشَف" },
      { k: "بتقدّم مسجَّل ودليل", hint: "المعروضة في الأعمال" },
      { k: "مدخل تقدّم موثّق", hint: "10–14 أيلول 2026" },
      { k: "مقترح ينتظر قراراً", hint: "من مراجعات مستقلة" },
    ],
    deployEyebrow: "النشر",
    deployTitle: (urls, repos) => `${urls} رابطاً حيّاً على Vercel من ${repos} مشروعاً`,
    deployLead: (products, factories, domains) => `القائمة السابقة فُحصت في 2026-09-16، وBetterSelf في 2026-09-28. روابط 2026-09-29 (غنى ميديا، مختبر الأنماط، أبو عبدالله، إي مزاد، المهند) أُعيد فحصها فأعادت HTTP 200. ${products} منتجاً ومنصة، و${factories} موقع مصنع أردني (20 منها من قالب واحد)، و${domains} نطاقات مخصصة.`,
    products: "منتجات ومنصات",
    factories: "مواقع المصانع",
    customDomain: "نطاق مخصص",
    caseStudy: "دراسة حالة المنصة كاملة",
  },
  en: {
    metaTitle: "Tracking platform — governing 46 tracked initiatives",
    metaDescription: "Master Brain: a dependency-free Node.js platform Suhib Al-Saleh built to govern 46 tracked initiatives, with one operation catalogue over CLI, HTTP and MCP, and reports. Figures are from the 2026-09-14 report.",
    eyebrow: "Tracking platform",
    title: "Master Brain: how 46 tracked initiatives each keep an engineering mind",
    lead: "A dependency-free Node.js platform for governing the portfolio and directing coding agents under written constraints. This page is evidence of governance, not of completion: most initiatives are discovered inventory, and the projects page shows only what has evidence.",
    factsLabel: "Platform figures",
    facts: [
      { k: "tracked initiatives", hint: "most are discovered inventory" },
      { k: "with recorded progress and evidence", hint: "shown on the projects page" },
      { k: "documented progress entries", hint: "10–14 September 2026" },
      { k: "suggestions awaiting a decision", hint: "from independent reviews" },
    ],
    deployEyebrow: "Deployments",
    deployTitle: (urls, repos) => `${urls} live Vercel URLs from ${repos} projects`,
    deployLead: (products, factories, domains) => `The earlier list was checked on 2026-09-16, and BetterSelf on 2026-09-28. Links added on 2026-09-29 (Ghina Media, Pattern Lab, Abu Abdullah, eMazad, Al Mohannad) were rechecked and returned HTTP 200. ${products} products and platforms, ${factories} Jordanian factory sites (20 from one template), and ${domains} custom domains.`,
    products: "Products and platforms",
    factories: "Factory sites",
    customDomain: "Custom domain",
    caseStudy: "Full platform case study",
  },
  fa: {
    metaTitle: "سکوی پیگیری — حکمرانی ۴۶ ابتکارِ ثبت‌شده",
    metaDescription: "Master Brain: سکوی Node.js بدون وابستگی که صهیب الصالح برای حکمرانی ۴۶ ابتکارِ ثبت‌شده ساخت؛ یک کاتالوگ عملیات روی CLI و HTTP و MCP، و گزارش‌ها. رقم‌ها از گزارش 2026-09-14 است.",
    eyebrow: "سکوی پیگیری",
    title: "Master Brain: چطور ۴۶ ابتکارِ ثبت‌شده هر کدام یک ذهن مهندسی دارند",
    lead: "سکوی Node.js بدون وابستگی برای حکمرانی نمونه‌کار و هدایت عامل‌های برنامه‌نویسی زیر قیدهای نوشته‌شده. این صفحه سند حکمرانی است نه سندِ تمام‌شدن: بیشتر ابتکارها موجودی کشف‌شده‌اند و صفحهٔ نمونه‌کار فقط آنچه سند دارد را نشان می‌دهد.",
    factsLabel: "رقم‌های سکو",
    facts: [
      { k: "ابتکار ثبت‌شده", hint: "بیشترشان موجودی کشف‌شده‌اند" },
      { k: "با پیشرفت ثبت‌شده و سند", hint: "در صفحهٔ نمونه‌کارها" },
      { k: "مدخل پیشرفت مستند", hint: "10–14 سپتامبر 2026" },
      { k: "پیشنهاد در انتظار تصمیم", hint: "از بازبینی‌های مستقل" },
    ],
    deployEyebrow: "انتشار",
    deployTitle: (urls, repos) => `${urls} نشانی زنده روی Vercel از ${repos} پروژه`,
    deployLead: (products, factories, domains) => `فهرست پیشین در 2026-09-16 بررسی شد و BetterSelf در 2026-09-28. پیوندهای 2026-09-29 (غنی مدیا، آزمایشگاه الگو، ابو عبدالله، ای مزاد، المهند) دوباره بررسی شدند و HTTP 200 دادند. ${products} محصول و سکو، ${factories} سایت کارخانهٔ اردنی (20 تا از یک قالب)، و ${domains} دامنهٔ اختصاصی.`,
    products: "محصولات و سکوها",
    factories: "سایت‌های کارخانه",
    customDomain: "دامنهٔ اختصاصی",
    caseStudy: "مطالعهٔ موردی کامل سکو",
  },
  tr: {
    metaTitle: "İzleme platformu — 46 izlenen girişimin yönetimi",
    metaDescription: "Master Brain: Suhib Al-Saleh'in 46 izlenen girişimi yönetmek için kurduğu bağımlılıksız Node.js platformu. Tek işlem kataloğu CLI, HTTP ve MCP üzerinde, artı raporlar. Rakamlar 2026-09-14 raporundandır.",
    eyebrow: "İzleme platformu",
    title: "Master Brain: 46 izlenen girişimin her birinin bir mühendislik zihni var",
    lead: "Portföyü yönetmek ve kodlama ajanlarını yazılı kısıtlar altında yönlendirmek için bağımlılıksız bir Node.js platformu. Bu sayfa tamamlanmanın değil yönetişimin kanıtıdır: girişimlerin çoğu keşfedilmiş envanterdir ve projeler sayfası yalnızca kanıtı olanı gösterir.",
    factsLabel: "Platform rakamları",
    facts: [
      { k: "izlenen girişim", hint: "çoğu keşfedilmiş envanter" },
      { k: "kayıtlı ilerleme ve kanıtla", hint: "projeler sayfasında" },
      { k: "belgelenmiş ilerleme girişi", hint: "10–14 Eylül 2026" },
      { k: "karar bekleyen öneri", hint: "bağımsız incelemelerden" },
    ],
    deployEyebrow: "Yayın",
    deployTitle: (urls, repos) => `${repos} projeden ${urls} canlı Vercel adresi`,
    deployLead: (products, factories, domains) => `Önceki liste 2026-09-16'da, BetterSelf 2026-09-28'de kontrol edildi. 2026-09-29 bağlantıları (Ghina Media, Pattern Lab, Abu Abdullah, eMazad, Al Mohannad) yeniden kontrol edildi ve HTTP 200 döndü. ${products} ürün ve platform, ${factories} Ürdün fabrika sitesi (20'si tek şablondan) ve ${domains} özel alan adı.`,
    products: "Ürünler ve platformlar",
    factories: "Fabrika siteleri",
    customDomain: "Özel alan adı",
    caseStudy: "Platformun tam vaka çalışması",
  },
  ur: {
    metaTitle: "ٹریکنگ پلیٹ فارم — 46 درج اقدامات کی حکمرانی",
    metaDescription: "Master Brain: صہیب الصالح کا بغیر انحصار Node.js پلیٹ فارم، 46 درج اقدامات کی حکمرانی کے لیے۔ ایک آپریشن کیٹلاگ CLI، HTTP اور MCP پر، اور رپورٹس۔ اعداد 2026-09-14 کی رپورٹ سے ہیں۔",
    eyebrow: "ٹریکنگ پلیٹ فارم",
    title: "Master Brain: 46 درج اقدامات میں سے ہر ایک کا انجینئرنگ ذہن",
    lead: "پورٹ فولیو کی حکمرانی اور کوڈنگ ایجنٹس کو لکھی پابندیوں کے تحت چلانے کا بغیر انحصار Node.js پلیٹ فارم۔ یہ صفحہ تکمیل کا نہیں، حکمرانی کا ثبوت ہے: زیادہ تر اقدامات دریافت شدہ ذخیرہ ہیں، اور کام کا صفحہ صرف وہ دکھاتا ہے جس کا ثبوت ہے۔",
    factsLabel: "پلیٹ فارم کے اعداد",
    facts: [
      { k: "درج اقدام", hint: "زیادہ تر دریافت شدہ ذخیرہ" },
      { k: "درج پیش رفت اور ثبوت کے ساتھ", hint: "کام کے صفحے پر" },
      { k: "دستاویزی پیش رفت کے اندراج", hint: "10–14 ستمبر 2026" },
      { k: "فیصلے کے منتظر تجاویز", hint: "آزاد جائزوں سے" },
    ],
    deployEyebrow: "اشاعت",
    deployTitle: (urls, repos) => `${repos} منصوبوں سے ${urls} لائیو Vercel پتے`,
    deployLead: (products, factories, domains) => `پچھلی فہرست 2026-09-16 کو چکی گئی، BetterSelf 2026-09-28 کو۔ 2026-09-29 کے روابط (غنی میڈیا، پیٹرن لیب، ابو عبداللہ، ای مزاد، المہند) دوبارہ چیک ہوئے اور HTTP 200 واپس آیا۔ ${products} مصنوعات اور پلیٹ فارم، ${factories} اردنی فیکٹری سائٹس (20 ایک سانچے سے)، اور ${domains} مخصوص ڈومین۔`,
    products: "مصنوعات اور پلیٹ فارم",
    factories: "فیکٹری سائٹس",
    customDomain: "مخصوص ڈومین",
    caseStudy: "پلیٹ فارم کا مکمل کیس",
  },
  ru: {
    metaTitle: "Платформа учёта — управление 46 инициативами",
    metaDescription: "Master Brain: платформа Node.js без зависимостей, которую Сухиб Аль-Салех собрал для учёта 46 инициатив. Один каталог операций через CLI, HTTP и MCP, и отчёты. Цифры из отчёта 2026-09-14.",
    eyebrow: "Платформа учёта",
    title: "Master Brain: как у 46 инициатив появляется собственная инженерная память",
    lead: "Платформа Node.js без зависимостей для управления портфелем и направления агентов программирования по письменным ограничениям. Эта страница — доказательство управления, а не завершённости: большинство инициатив — найденный запас, а страница проектов показывает только то, у чего есть доказательства.",
    factsLabel: "Цифры платформы",
    facts: [
      { k: "учитываемых инициатив", hint: "большинство — найденный запас" },
      { k: "с записанным прогрессом и доказательством", hint: "показаны на странице проектов" },
      { k: "документированных записей прогресса", hint: "10–14 сентября 2026" },
      { k: "предложений, ждущих решения", hint: "из независимых проверок" },
    ],
    deployEyebrow: "Публикация",
    deployTitle: (urls, repos) => `${urls} живых адресов Vercel из ${repos} проектов`,
    deployLead: (products, factories, domains) => `Прежний список проверен 2026-09-16, BetterSelf — 2026-09-28. Ссылки от 2026-09-29 (Ghina Media, Pattern Lab, Abu Abdullah, eMazad, Al Mohannad) перепроверены и вернули HTTP 200. ${products} продуктов и платформ, ${factories} сайтов иорданских заводов (20 из одного шаблона) и ${domains} собственных домена.`,
    products: "Продукты и платформы",
    factories: "Сайты заводов",
    customDomain: "Свой домен",
    caseStudy: "Полный кейс платформы",
  },
};
