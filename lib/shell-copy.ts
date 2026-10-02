import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export type NavItem = { href: string; label: string; match?: string };

export const shell = {
  skip: {
    ar: "تخطَّ إلى المحتوى",
    en: "Skip to content",
    fa: "پرش به محتوا",
    tr: "İçeriğe atla",
    ur: "مواد پر جائیں",
    ru: "К содержанию",
  },
  themeToLight: {
    ar: "الوضع الفاتح",
    en: "Light mode",
    fa: "حالت روشن",
    tr: "Aydınlık mod",
    ur: "روشن موڈ",
    ru: "Светлая тема",
  },
  themeToDark: {
    ar: "الوضع الداكن",
    en: "Dark mode",
    fa: "حالت تیره",
    tr: "Karanlık mod",
    ur: "گہرا موڈ",
    ru: "Тёмная тема",
  },
  clock: {
    ar: "توقيت عمّان",
    en: "Amman time",
    fa: "وقت عمّان",
    tr: "Amman saati",
    ur: "عمّان کا وقت",
    ru: "Время Аммана",
  },
  languages: {
    ar: "اللغة",
    en: "Language",
    fa: "زبان",
    tr: "Dil",
    ur: "زبان",
    ru: "Язык",
  },
  header: {
    ar: { home: "الصفحة الرئيسية", nav: "التنقل الرئيسي", palette: "افتح لوحة الأوامر", search: "بحث", menu: "القائمة", contact: "تواصل", role: "" },
    en: { home: "Home page", nav: "Main navigation", palette: "Open the command palette", search: "Search", menu: "Menu", contact: "Contact", role: "Solutions Architect" },
    fa: { home: "صفحهٔ اصلی", nav: "ناوبری اصلی", palette: "صفحهٔ فرمان را باز کن", search: "جست‌وجو", menu: "فهرست", contact: "تماس", role: "معمار راهکار" },
    tr: { home: "Ana sayfa", nav: "Ana gezinti", palette: "Komut paletini aç", search: "Ara", menu: "Menü", contact: "İletişim", role: "Çözüm Mimarı" },
    ur: { home: "مرکزی صفحہ", nav: "مرکزی نیویگیشن", palette: "کمانڈ پیلٹ کھولیں", search: "تلاش", menu: "فہرست", contact: "رابطہ", role: "سلوشنز آرکیٹیکٹ" },
    ru: { home: "Главная", nav: "Основная навигация", palette: "Открыть палитру команд", search: "Поиск", menu: "Меню", contact: "Связь", role: "Архитектор решений" },
  },
  footer: {
    ar: {
      about: "مستشار تقني أول ومهندس حلول من عمّان. تكامل أنظمة مؤسسية، أتمتة، ووكلاء ذكاء اصطناعي، بخبرة تمتد من إدارة الشبكات في 2003 إلى منصات عربية حيّة اليوم.",
      nav: "التنقل",
      contact: "تواصل",
      roleTitle: "مستشار تقني أول · مهندس حلول",
      role: "ناقش دوراً أو مشروعاً",
      subject: "دور أو مشروع — عبر المحفظة",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "امسح لفتح المحفظة",
      snapshot: "لقطة البيانات 2026-09-14 · السيرة 2026-09-16",
      mostaql: "مستقل",
      baeed: "بعيد",
      location: "عمّان، الأردن · عن بُعد أولاً · حضور ميداني في السعودية عند الحاجة",
    },
    en: {
      about: "Senior Technology Consultant and Solutions Architect in Amman. Enterprise systems integration, automation and AI agents, with depth that runs from network administration in 2003 to live bilingual platforms today.",
      nav: "Navigation",
      contact: "Contact",
      roleTitle: "Senior Technology Consultant · Solutions Architect",
      role: "Discuss a role or a project",
      subject: "Role or project — via portfolio",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "Scan to open the portfolio",
      snapshot: "Data snapshot 2026-09-14 · CV 2026-09-16",
      mostaql: "Mostaql",
      baeed: "Baeed",
      location: "Amman, Jordan · Remote-first · On-site in Saudi Arabia when required",
    },
    fa: {
      about: "مشاور ارشد فناوری و معمار راهکار در عمّان. یکپارچه‌سازی سیستم‌های سازمانی، اتوماسیون و عامل‌های هوش مصنوعی؛ عمقی که از مدیریت شبکه در 2003 تا سکوهای دوزبانهٔ زندهٔ امروز می‌رسد.",
      nav: "ناوبری",
      contact: "تماس",
      roleTitle: "مشاور ارشد فناوری · معمار راهکار",
      role: "دربارهٔ نقش یا پروژه حرف بزنیم",
      subject: "نقش یا پروژه — از طریق نمونه‌کار",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "برای گشودن نمونه‌کار اسکن کنید",
      snapshot: "برداشت داده 2026-09-14 · رزومه 2026-09-16",
      mostaql: "مستقل",
      baeed: "بعيد",
      location: "عمّان، اردن · اول دورکاری · در عربستان سعودی، هرگاه لازم باشد، حضوری",
    },
    tr: {
      about: "Amman'da Kıdemli Teknoloji Danışmanı ve Çözüm Mimarı. Kurumsal sistem entegrasyonu, otomasyon ve yapay zeka ajanları; derinlik 2003'teki ağ yönetiminden bugünün canlı iki dilli platformlarına uzanır.",
      nav: "Gezinti",
      contact: "İletişim",
      roleTitle: "Kıdemli Teknoloji Danışmanı · Çözüm Mimarı",
      role: "Bir rol veya proje konuşalım",
      subject: "Rol veya proje — portföy üzerinden",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "Portföyü açmak için tarayın",
      snapshot: "Veri anlık görüntüsü 2026-09-14 · özgeçmiş 2026-09-16",
      mostaql: "Mostaql",
      baeed: "Baeed",
      location: "Amman, Ürdün · Önce uzaktan · Gerektiğinde Suudi Arabistan'da sahada",
    },
    ur: {
      about: "عمّان میں سینئر ٹیکنالوجی کنسلٹنٹ اور سلوشنز آرکیٹیکٹ۔ انٹرپرائز نظاموں کا انضمام، آٹومیشن اور اے آئی ایجنٹس؛ گہرائی 2003 کی نیٹ ورک انتظامیہ سے آج کے زندہ دو لسانی پلیٹ فارمز تک۔",
      nav: "نیویگیشن",
      contact: "رابطہ",
      roleTitle: "سینئر ٹیکنالوجی کنسلٹنٹ · سلوشنز آرکیٹیکٹ",
      role: "کردار یا منصوبے کی بات کریں",
      subject: "کردار یا منصوبہ — پورٹ فولیو کے ذریعے",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "پورٹ فولیو کھولنے کے لیے اسکین کریں",
      snapshot: "ڈیٹا اسنیپ شاٹ 2026-09-14 · سی وی 2026-09-16",
      mostaql: "مستقل",
      baeed: "بعيد",
      location: "عمّان، اردن · پہلے ریموٹ · ضرورت پر سعودی عرب میں موقع پر",
    },
    ru: {
      about: "Старший технологический консультант и архитектор решений в Аммане. Интеграция корпоративных систем, автоматизация и ИИ-агенты; глубина от администрирования сетей в 2003 году до сегодняшних живых двуязычных платформ.",
      nav: "Навигация",
      contact: "Связь",
      roleTitle: "Старший технологический консультант · Архитектор решений",
      role: "Обсудить роль или проект",
      subject: "Роль или проект — через портфолио",
      built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
      qr: "Сканируйте, чтобы открыть портфолио",
      snapshot: "Снимок данных 2026-09-14 · резюме 2026-09-16",
      mostaql: "Mostaql",
      baeed: "Baeed",
      location: "Амман, Иордания · Сначала удалённо · На площадке в Саудовской Аравии, когда это нужно",
    },
  },
  contact: {
    ar: {
      title: "هل لديك دور أو مشروع؟",
      lead: "دور هندسي أو استشاري، أو مشروع تكامل وأتمتة أو ذكاء اصطناعي. عن بُعد أولاً، وميدانياً في السعودية والخليج عند الحاجة.",
      role: "ناقش دوراً",
      consult: "اطلب استشارة مشروع",
      subjectRole: "دور هندسي — عبر المحفظة",
      subjectConsult: "استشارة مشروع — عبر المحفظة",
      email: "البريد",
      cv: "السيرة الذاتية",
    },
    en: {
      title: "Have a role or a project?",
      lead: "An engineering or consulting role, or an integration, automation or AI project. Remote-first, on-site in Saudi Arabia and the GCC when required.",
      role: "Discuss a role",
      consult: "Request a project consultation",
      subjectRole: "Engineering role — via portfolio",
      subjectConsult: "Project consultation — via portfolio",
      email: "Email",
      cv: "CV",
    },
    fa: {
      title: "نقش یا پروژه‌ای در میان است؟",
      lead: "نقش مهندسی یا مشاوره، یا پروژهٔ یکپارچه‌سازی، اتوماسیون یا هوش مصنوعی. اول دورکاری، و در عربستان و خلیج هرگاه لازم باشد حضوری.",
      role: "دربارهٔ نقش حرف بزنیم",
      consult: "مشاورهٔ پروژه بخواهید",
      subjectRole: "نقش مهندسی — از طریق نمونه‌کار",
      subjectConsult: "مشاورهٔ پروژه — از طریق نمونه‌کار",
      email: "رایانامه",
      cv: "رزومه",
    },
    tr: {
      title: "Bir rol veya proje mi var?",
      lead: "Bir mühendislik veya danışmanlık rolü, ya da entegrasyon, otomasyon veya yapay zeka projesi. Önce uzaktan; gerektiğinde Suudi Arabistan ve Körfez'de sahada.",
      role: "Bir rol konuşalım",
      consult: "Proje danışmanlığı isteyin",
      subjectRole: "Mühendislik rolü — portföy üzerinden",
      subjectConsult: "Proje danışmanlığı — portföy üzerinden",
      email: "E-posta",
      cv: "Özgeçmiş",
    },
    ur: {
      title: "کوئی کردار یا منصوبہ؟",
      lead: "انجینئرنگ یا مشاورتی کردار، یا انضمام، آٹومیشن یا مصنوعی ذہانت کا منصوبہ۔ پہلے ریموٹ، ضرورت پر سعودی عرب اور خلیج میں موقع پر۔",
      role: "کردار کی بات کریں",
      consult: "منصوبے کا مشورہ مانگیں",
      subjectRole: "انجینئرنگ کردار — پورٹ فولیو کے ذریعے",
      subjectConsult: "منصوبے کا مشورہ — پورٹ فولیو کے ذریعے",
      email: "ای میل",
      cv: "سی وی",
    },
    ru: {
      title: "Есть роль или проект?",
      lead: "Инженерная или консультационная роль, либо проект интеграции, автоматизации или искусственного интеллекта. Сначала удалённо, на площадке в Саудовской Аравии и заливе — когда это нужно.",
      role: "Обсудить роль",
      consult: "Запросить консультацию по проекту",
      subjectRole: "Инженерная роль — через портфолио",
      subjectConsult: "Консультация по проекту — через портфолио",
      email: "Почта",
      cv: "Резюме",
    },
  },
  palette: {
    ar: { dialog: "لوحة الأوامر", placeholder: "ابحث عن مشروع أو صفحة أو فصل…", search: "بحث", none: "لا نتائج.", pages: "صفحات", projects: "الأعمال", chapters: "فصول السجل", docs: "الوثائق", contact: "تواصل" },
    en: { dialog: "Command palette", placeholder: "Search a project, page or chapter…", search: "Search", none: "No results.", pages: "Pages", projects: "Projects", chapters: "Journal chapters", docs: "Documents", contact: "Contact" },
    fa: { dialog: "صفحهٔ فرمان", placeholder: "پروژه، صفحه یا فصل را جست‌وجو کنید…", search: "جست‌وجو", none: "نتیجه‌ای نیست.", pages: "صفحه‌ها", projects: "کارها", chapters: "فصل‌های دفتر", docs: "سندها", contact: "تماس" },
    tr: { dialog: "Komut paleti", placeholder: "Proje, sayfa veya bölüm ara…", search: "Ara", none: "Sonuç yok.", pages: "Sayfalar", projects: "Projeler", chapters: "Günlük bölümleri", docs: "Belgeler", contact: "İletişim" },
    ur: { dialog: "کمانڈ پیلٹ", placeholder: "منصوبہ، صفحہ یا باب تلاش کریں…", search: "تلاش", none: "کوئی نتیجہ نہیں۔", pages: "صفحات", projects: "کام", chapters: "جرنل کے ابواب", docs: "دستاویزات", contact: "رابطہ" },
    ru: { dialog: "Палитра команд", placeholder: "Ищите проект, страницу или главу…", search: "Поиск", none: "Ничего не найдено.", pages: "Страницы", projects: "Работы", chapters: "Главы журнала", docs: "Документы", contact: "Связь" },
  },
} as const;

const navLabel: Record<Locale, { home: string; projects: string; journal: string; platform: string; docs: string; cv: string }> = {
  ar: { home: "الرئيسية", projects: "الأعمال", journal: "السجل الهندسي", platform: "المنصة", docs: "الوثائق", cv: "السيرة" },
  en: { home: "Home", projects: "Projects", journal: "Journal", platform: "Platform", docs: "Docs", cv: "CV" },
  fa: { home: "خانه", projects: "نمونه‌کارها", journal: "دفتر مهندسی", platform: "سکو", docs: "سندها", cv: "رزومه" },
  tr: { home: "Ana sayfa", projects: "Projeler", journal: "Günlük", platform: "Platform", docs: "Belgeler", cv: "Özgeçmiş" },
  ur: { home: "مرکز", projects: "کام", journal: "جرنل", platform: "پلیٹ فارم", docs: "دستاویزات", cv: "سی وی" },
  ru: { home: "Главная", projects: "Проекты", journal: "Журнал", platform: "Платформа", docs: "Документы", cv: "Резюме" },
};

export function navFor(locale: Locale): NavItem[] {
  const l = navLabel[locale];
  return [
    { href: localePath(locale, "/"), label: l.home },
    { href: localePath(locale, "/projects"), label: l.projects },
    { href: localePath(locale, "/journal"), label: l.journal },
    { href: localePath(locale, "/platform"), label: l.platform },
    { href: localePath(locale, "/docs/profile"), label: l.docs, match: localePath(locale, "/docs") },
    { href: localePath(locale, "/cv"), label: l.cv },
  ];
}

export function footerLinks(locale: Locale): [string, string][] {
  const l = navLabel[locale];
  return [
    [localePath(locale, "/projects"), l.projects],
    [localePath(locale, "/journal"), l.journal],
    [localePath(locale, "/platform"), l.platform],
    [localePath(locale, "/docs/profile"), l.docs],
    [localePath(locale, "/cv"), locale === "ar" ? "السيرة الذاتية" : l.cv],
  ];
}

export function themeLabel(locale: Locale, theme: "light" | "dark") {
  return theme === "dark" ? shell.themeToLight[locale] : shell.themeToDark[locale];
}

export function usesLatinName(locale: Locale) {
  return locale === "en" || locale === "tr" || locale === "ru";
}
