import type { AddedLocale, Locale } from "@/lib/i18n";

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  role: string;
  h1: string;
  summary: string;
  ctaRole: string;
  ctaJournal: string;
  ctaCv: string;
  mailSubject: string;
  kpisLabel: string;
  kpis: { label: string; hint: string }[];
  journalEyebrow: string;
  journalTitle: string;
  journalLead: string;
  methodTitle: string;
  journalLink: string;
  workTitle: string;
  workLead: string;
  caseStudy: string;
  live: string;
  more: (n: number) => string;
  coverAlt: string;
  coverCaption: string;
  cvEyebrow: string;
  cvTitle: string;
  print: string;
  summaryHeading: string;
  cvSummary: string;
  skillsHeading: string;
  experienceHeading: string;
  projectsHeading: string;
  educationHeading: string;
  languagesLabel: string;
  cvCardTitle: string;
  cvCardLead: string;
  cvArabic: string;
  cvEnglish: string;
  blurbs: Record<string, string>;
};

const en: HomeCopy = {
  metaTitle: "Suhib Al-Saleh — Senior Technology Consultant & Solutions Architect · AI Agents and Systems Integration",
  metaDescription:
    "Suhib Al-Saleh, Senior Technology Consultant and Solutions Architect in Amman, Jordan: 20+ years building, integrating and supporting enterprise systems (Java, C#, SQL Server, Oracle), now applying that depth to AI agents and automation. Six live platforms, two client production systems, printable CV.",
  role: "Solutions Architect",
  h1: "Systems and software engineer with 20+ years of depth, leading secure bilingual platforms and enterprise integration from concept to production.",
  summary:
    "An enterprise background in Java, C#, SQL Server and Oracle (banking, access control and attendance, queue management), and current work in AI agents, operations automation and systems integration. I use coding agents as governed accelerators under written constraints; the decisions and the evidence stay with me: a green test, a commit or a deploy URL before anything counts as done.",
  ctaRole: "Discuss a role or a project",
  ctaJournal: "Engineering journal",
  ctaCv: "CV",
  mailSubject: "Engineering role — via portfolio",
  kpisLabel: "Verified figures",
  kpis: [
    { label: "years building, integrating and supporting systems", hint: "from network administration in 2003 to AI agents" },
    { label: "live URLs on Vercel", hint: "41 projects · 3 custom domains · Muqasa is v.muqasa-jo.com only" },
    { label: "green automated tests across two projects", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
    { label: "client production systems", hint: "a banking MTZ platform · Risha360 on Forge" },
  ],
  journalEyebrow: "Engineering journal",
  journalTitle: "From DOS-era systems troubleshooting to enterprise integration and AI agents",
  journalLead: "I didn't just learn the newest framework. I grew through multiple generations of computing. Four eras, ten chapters, one method that never changed.",
  methodTitle: "The stack changed. The method didn't.",
  journalLink: "Read the full journal, with the 30-second recruiter view",
  workTitle: "Selected work",
  workLead: "Status labels instead of internal completion figures. Each card opens its case study in English.",
  caseStudy: "Case study",
  live: "Live:",
  more: (n) => `and ${n} more (full list)`,
  coverAlt: "Home page of the Bara'ah Alshobaki store demo",
  coverCaption: "Real capture: Bara'ah Alshobaki store demo",
  cvEyebrow: "Curriculum vitae",
  cvTitle: "ATS-friendly CV",
  print: "Print / PDF",
  summaryHeading: "Professional summary",
  cvSummary:
    "Software engineer and technology consultant with more than 20 years building, integrating, supporting, and troubleshooting enterprise and operational systems across banking, education, government-adjacent operations, and commercial clients. Core work spans Java and C# backends, Microsoft SQL Server and Oracle, systems integration, Windows applications, Flutter/Dart, access-control and attendance platforms, intelligent queue/customer-experience systems, and AI agents. Earlier infrastructure work includes PC/laptop repair, network administration, operating-system installation and recovery, boot diagnostics, Windows safe-mode/recovery workflows, Linux/Ubuntu troubleshooting, peripheral/printer support, and hands-on maintenance of end-user systems. Comfortable moving from low-level operational troubleshooting to architecture, automation, integration, and production delivery.",
  skillsHeading: "Core skills",
  experienceHeading: "Professional experience",
  projectsHeading: "Selected projects",
  educationHeading: "Education & professional development",
  languagesLabel: "Languages",
  cvCardTitle: "",
  cvCardLead: "",
  cvArabic: "Arabic CV",
  cvEnglish: "English CV",
  blurbs: {},
};

const fa: HomeCopy = {
  metaTitle: "صهیب الصالح — مشاور ارشد فناوری و معمار راهکار · عامل‌های هوش مصنوعی و یکپارچه‌سازی سیستم‌ها",
  metaDescription:
    "صهیب الصالح، مشاور ارشد فناوری و معمار راهکار در عمّان، اردن: بیش از 20 سال ساخت، یکپارچه‌سازی و پشتیبانی سیستم‌های سازمانی (Java، C#، SQL Server، Oracle)، و اکنون همین عمق در عامل‌های هوش مصنوعی و اتوماسیون.",
  role: "معمار راهکار",
  h1: "مهندس سیستم و نرم‌افزار با بیش از بیست سال عمق عملی؛ سکوهای دوزبانهٔ امن و یکپارچه‌سازی سازمانی را از ایده تا تولید پیش می‌برد.",
  summary:
    "پیشینهٔ سازمانی در Java، C#، SQL Server و Oracle (بانک، کنترل تردد و حضور، مدیریت صف)، و کار جاری در عامل‌های هوش مصنوعی، اتوماسیون عملیات و یکپارچه‌سازی سیستم‌ها. عامل‌های برنامه‌نویسی را شتاب‌دهندهٔ تحت قاعدهٔ مکتوب می‌دانم؛ تصمیم و سند پیش من می‌ماند: آزمون سبز، commit، یا نشانی انتشار، پیش از آنکه چیزی «تمام» حساب شود.",
  ctaRole: "دربارهٔ نقش یا پروژه حرف بزنیم",
  ctaJournal: "دفتر مهندسی",
  ctaCv: "رزومه",
  mailSubject: "نقش مهندسی — از طریق نمونه‌کار",
  kpisLabel: "رقم‌های راستی‌آزمایی‌شده",
  kpis: [
    { label: "سال ساخت، یکپارچه‌سازی و پشتیبانی سیستم‌ها", hint: "از مدیریت شبکه در 2003 تا عامل‌های هوش مصنوعی" },
    { label: "نشانی زنده روی Vercel", hint: "41 پروژه · 3 دامنهٔ اختصاصی · مقاصة فقط v.muqasa-jo.com" },
    { label: "آزمون خودکار سبز در دو پروژه", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
    { label: "سامانهٔ تولیدی برای مشتری", hint: "سکوی بانکی MTZ · Risha360 روی Forge" },
  ],
  journalEyebrow: "دفتر مهندسی",
  journalTitle: "از عیب‌یابی سیستم‌های دوران DOS تا یکپارچه‌سازی سازمانی و عامل‌های هوش مصنوعی",
  journalLead: "فقط تازه‌ترین چارچوب را یاد نگرفتم. میان چند نسل رایانش بزرگ شدم. چهار دوره، ده فصل، یک روش که عوض نشد.",
  methodTitle: "پشته عوض شد. روش نه.",
  journalLink: "دفتر کامل را بخوانید، با نگاه سی‌ثانیه‌ای برای جذب",
  workTitle: "کارهای برگزیده",
  workLead: "به‌جای درصد تکمیل داخلی، برچسب وضعیت. هر کارت مطالعهٔ موردی را در همین زبان باز می‌کند.",
  caseStudy: "مطالعهٔ موردی",
  live: "زنده:",
  more: (n) => `و ${n} مورد دیگر (فهرست کامل)`,
  coverAlt: "صفحهٔ اصلی پیش‌نمایش فروشگاه براءة الشوبکی",
  coverCaption: "ثبت واقعی: پیش‌نمایش فروشگاه براءة الشوبکی",
  cvEyebrow: "",
  cvTitle: "",
  print: "",
  summaryHeading: "",
  cvSummary: "",
  skillsHeading: "",
  experienceHeading: "",
  projectsHeading: "",
  educationHeading: "",
  languagesLabel: "",
  cvCardTitle: "رزومه",
  cvCardLead: "رزومه در همین زبان باز می‌شود. متن سوابق از نسخهٔ بازبینی‌شده آمده تا تاریخ‌ها و ادعاها جابه‌جا نشوند.",
  cvArabic: "رزومه به عربی",
  cvEnglish: "رزومه به انگلیسی",
  blurbs: {
    risha360: "سکوی استعداد با Laravel و Next.js: نقش‌های سلف‌سرویس مشاهیر در تولید، و قطب همکاری اینفلوئنسر با ماشین حالت پرداخت قفل‌شده.",
    project1: "شبیه‌ساز تجارت فرامرزی با حلقهٔ کامل از کشف تا خرید شبیه‌سازی‌شده، و کلید توقفی که رابط نمی‌تواند بردارد.",
    "master-brain": "سکوی نمونه‌کار بدون وابستگی: یک کاتالوگ عملیات به‌صورت ابزار MCP، APIی HTTP و CLI، با ذهن مهندسی هر پروژه و گزارش.",
    factories: "دو سایت کارخانهٔ اردنی با Next.js، زنده روی Vercel در یک روز، با جریان رونوشت → بهبود → بازبینی → ادغام → انتشار.",
    baraah: "پیش‌نمایش فروشگاه ممتاز دوزبانه با Next.js 16 برای محصولات غذایی هنری، با دو گذر امنیتی پیش از هر استفادهٔ تولیدی.",
    "giz-apca": "نشانگر آموزش فنی‌وحرفه‌ای دوزبانه: تشخیص → مسیر → سناریو → ارزیابی ایمنی غیرقابل‌جبران → گذرنامهٔ مهارت. نشانگر پیشنهادی همسو با اهداف اعلام‌شدهٔ GIZ، نه محصول GIZ.",
  },
};

const tr: HomeCopy = {
  metaTitle: "Suhib Al-Saleh — Kıdemli Teknoloji Danışmanı ve Çözüm Mimarı · Yapay zeka ajanları ve sistem entegrasyonu",
  metaDescription:
    "Suhib Al-Saleh, Amman, Ürdün'de Kıdemli Teknoloji Danışmanı ve Çözüm Mimarı: kurumsal sistemleri kurma, entegre etme ve desteklemede 20+ yıl (Java, C#, SQL Server, Oracle); bu derinliği şimdi yapay zeka ajanlarına ve otomasyona uyguluyor.",
  role: "Çözüm Mimarı",
  h1: "Yirmi yılı aşkın derinliği olan bir sistem ve yazılım mühendisi. Güvenli iki dilli platformları ve kurumsal entegrasyonu fikirden üretime kadar yönetir.",
  summary:
    "Java, C#, SQL Server ve Oracle'da kurumsal bir geçmiş (bankacılık, geçiş ve devam kontrolü, kuyruk yönetimi) ve yapay zeka ajanları, operasyon otomasyonu ile sistem entegrasyonunda güncel iş. Kod ajanlarını yazılı kısıtlar altında yönetilen hızlandırıcılar olarak kullanırım; karar ve kanıt bende kalır: bir şeyin bitti sayılması için yeşil bir test, bir commit veya bir dağıtım adresi gerekir.",
  ctaRole: "Bir rol veya proje konuşalım",
  ctaJournal: "Mühendislik günlüğü",
  ctaCv: "Özgeçmiş",
  mailSubject: "Mühendislik rolü — portföy üzerinden",
  kpisLabel: "Doğrulanmış rakamlar",
  kpis: [
    { label: "yıl sistem kurma, entegrasyon ve destek", hint: "2003'te ağ yönetiminden yapay zeka ajanlarına" },
    { label: "canlı adres Vercel'de", hint: "41 proje · 3 özel alan adı · Muqasa yalnızca v.muqasa-jo.com" },
    { label: "iki projede yeşil otomatik test", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
    { label: "müşteri üretim sistemi", hint: "bankacılık MTZ platformu · Forge üzerinde Risha360" },
  ],
  journalEyebrow: "Mühendislik günlüğü",
  journalTitle: "DOS dönemi sistem arızasından kurumsal entegrasyona ve yapay zeka ajanlarına",
  journalLead: "Yalnızca en yeni çerçeveyi öğrenmedim. Birden fazla bilişim kuşağı boyunca büyüdüm. Dört dönem, on bölüm, hiç değişmeyen bir yöntem.",
  methodTitle: "Yığın değişti. Yöntem değişmedi.",
  journalLink: "30 saniyelik işe alım bakışıyla günlüğün tamamını okuyun",
  workTitle: "Seçilmiş işler",
  workLead: "İç tamamlanma yüzdeleri yerine durum etiketleri. Her kart vaka çalışmasını bu dilde açar.",
  caseStudy: "Vaka çalışması",
  live: "Yayında:",
  more: (n) => `ve ${n} tane daha (tam liste)`,
  coverAlt: "Bera eş-Şubeki mağaza demosunun ana sayfası",
  coverCaption: "Gerçek kayıt: Bera eş-Şubeki mağaza demosu",
  cvEyebrow: "",
  cvTitle: "",
  print: "",
  summaryHeading: "",
  cvSummary: "",
  skillsHeading: "",
  experienceHeading: "",
  projectsHeading: "",
  educationHeading: "",
  languagesLabel: "",
  cvCardTitle: "Özgeçmiş",
  cvCardLead: "Özgeçmiş bu dilde açılır. Görev metni, tarihler ve iddialar kaymasın diye gözden geçirilmiş kayıttan gelir.",
  cvArabic: "Arapça özgeçmiş",
  cvEnglish: "İngilizce özgeçmiş",
  blurbs: {
    risha360: "Laravel + Next.js yetenek platformu: üretimde ünlü self-servis rolleri ve kilitli ödeme durum makinesi olan bir influencer işbirliği merkezi.",
    project1: "Keşiften simüle bir satın almaya tam döngülü sınır ötesi ticaret simülatörü ve arayüzün kaldıramadığı bir durdurma anahtarı.",
    "master-brain": "Bağımlılıksız portföy platformu: MCP aracı, HTTP API ve CLI olarak açılan tek bir operasyon kataloğu; proje başına mühendislik zihni ve raporlar.",
    factories: "Next.js ile iki Ürdün fabrika sitesi, kopyala → iyileştir → incele → birleştir → dağıt akışıyla bir gün içinde Vercel'de yayında.",
    baraah: "Zanaat gıda ürünleri için iki dilli Next.js 16 premium mağaza demosu; herhangi bir üretim kullanımından önce iki güvenlik geçişi.",
    "giz-apca": "İki dilli mesleki eğitim göstericisi: tanı → yol → senaryo → telafi edilemez güvenlik değerlendirmesi → beceri pasaportu. GIZ'in açıkladığı hedeflerle uyumlu önerilen bir gösterici, bir GIZ ürünü değil.",
  },
};

const ur: HomeCopy = {
  metaTitle: "صهیب الصالح — سینئر ٹیکنالوجی کنسلٹنٹ اور سلوشنز آرکیٹیکٹ · اے آئی ایجنٹس اور نظاموں کا انضمام",
  metaDescription:
    "صهیب الصالح، عمّان، اردن میں سینئر ٹیکنالوجی کنسلٹنٹ اور سلوشنز آرکیٹیکٹ: انٹرپرائز نظام بنانے، جوڑنے اور سہارا دینے کے 20+ سال (Java، C#، SQL Server، Oracle)، اور اب یہی گہرائی اے آئی ایجنٹس اور آٹومیشن میں۔",
  role: "سلوشنز آرکیٹیکٹ",
  h1: "بیس سال سے زیادہ کی گہرائی کے ساتھ سسٹمز اور سافٹ ویئر انجینئر۔ محفوظ دو لسانی پلیٹ فارمز اور انٹرپرائز انضمام کو خیال سے پروڈکشن تک لے جاتا ہے۔",
  summary:
    "Java، C#، SQL Server اور Oracle میں انٹرپرائز پس منظر (بینکنگ، رسائی اور حاضری، قطار کا انتظام)، اور موجودہ کام اے آئی ایجنٹس، آپریشنز آٹومیشن اور نظاموں کے انضمام میں۔ کوڈنگ ایجنٹس کو تحریری پابندیوں کے تحت تیز رفتار آلہ مانتا ہوں؛ فیصلہ اور ثبوت میرے پاس رہتے ہیں: سبز ٹیسٹ، commit، یا ڈپلائے یو آر ایل سے پہلے کچھ مکمل نہیں گنا جاتا۔",
  ctaRole: "کردار یا منصوبے کی بات کریں",
  ctaJournal: "انجینئرنگ جرنل",
  ctaCv: "سی وی",
  mailSubject: "انجینئرنگ کردار — پورٹ فولیو کے ذریعے",
  kpisLabel: "تصدیق شدہ اعداد",
  kpis: [
    { label: "سال نظام بنانے، جوڑنے اور سہارا دینے میں", hint: "2003 کی نیٹ ورک انتظامیہ سے اے آئی ایجنٹس تک" },
    { label: "Vercel پر زندہ پتے", hint: "41 منصوبے · 3 مخصوص ڈومین · مقاصہ صرف v.muqasa-jo.com" },
    { label: "دو منصوبوں میں سبز خودکار ٹیسٹ", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
    { label: "کلائنٹ کے پروڈکشن سسٹم", hint: "بینکنگ MTZ پلیٹ فارم · Forge پر Risha360" },
  ],
  journalEyebrow: "انجینئرنگ جرنل",
  journalTitle: "DOS دور کے نظاموں کی تشخیص سے انٹرپرائز انضمام اور اے آئی ایجنٹس تک",
  journalLead: "میں نے صرف نیا ترین فریم ورک نہیں سیکھا۔ کمپیوٹنگ کی کئی نسلوں میں بڑا ہوا۔ چار ادوار، دس ابواب، ایک طریقہ جو نہیں بدلا۔",
  methodTitle: "اسٹیک بدل گیا۔ طریقہ نہیں بدلا۔",
  journalLink: "پورا جرنل پڑھیں، 30 سیکنڈ کے بھرتی نظر کے ساتھ",
  workTitle: "منتخب کام",
  workLead: "اندرونی تکمیل کے اعداد کی جگہ حیثیت کے لیبل۔ ہر کارڈ کیس اسٹڈی اسی زبان میں کھولتا ہے۔",
  caseStudy: "کیس اسٹڈی",
  live: "لائیو:",
  more: (n) => `اور ${n} مزید (مکمل فہرست)`,
  coverAlt: "براء الشوبکی اسٹور ڈیمو کا ہوم پیج",
  coverCaption: "اصلی تصویر: براء الشوبکی اسٹور کا ڈیمو",
  cvEyebrow: "",
  cvTitle: "",
  print: "",
  summaryHeading: "",
  cvSummary: "",
  skillsHeading: "",
  experienceHeading: "",
  projectsHeading: "",
  educationHeading: "",
  languagesLabel: "",
  cvCardTitle: "سی وی",
  cvCardLead: "سی وی اسی زبان میں کھلتا ہے۔ ملازمت کا متن جائزہ شدہ ریکارڈ سے ہے تاکہ تاریخیں اور دعوے نہ ہلیں۔",
  cvArabic: "عربی سی وی",
  cvEnglish: "انگریزی سی وی",
  blurbs: {
    risha360: "Laravel + Next.js ٹیلنٹ پلیٹ فارم: پروڈکشن میں مشہور شخصیات کے سیلف سروس کردار، اور مقفل ادائیگی اسٹیٹ مشین والا انفلوئنسر مرکز۔",
    project1: "سرحد پار تجارت کا سمیلیٹر، دریافت سے نقلی خرید تک مکمل حلقہ، اور کل سوئچ جسے انٹرفیس نہیں اٹھا سکتا۔",
    "master-brain": "بغیر انحصار کے پورٹ فولیو پلیٹ فارم: ایک آپریشن کیٹلاگ بطور MCP ٹول، HTTP API اور CLI، ہر منصوبے کا انجینئرنگ ذہن اور رپورٹیں۔",
    factories: "Next.js میں دو اردنی فیکٹری سائٹیں، نقل → بہتری → جائزہ → ضم → ڈپلائے کے ساتھ ایک دن میں Vercel پر لائیو۔",
    baraah: "دستکاری خوراک کے لیے دو لسانی Next.js 16 پریمیم اسٹور ڈیمو، کسی پروڈکشن استعمال سے پہلے دو سیکیورٹی پاس۔",
    "giz-apca": "دو لسانی فنی تربیت کا مظاہرہ: تشخیص → راستہ → منظر → ناقابلِ تلافی حفاظتی جائزہ → مہارت پاسپورٹ۔ GIZ کے اعلان کردہ اہداف سے ہم آہنگ تجویز کردہ مظاہرہ، GIZ کی مصنوعہ نہیں۔",
  },
};

const ru: HomeCopy = {
  metaTitle: "Сухиб Аль-Салех — старший технологический консультант и архитектор решений · ИИ-агенты и интеграция систем",
  metaDescription:
    "Сухиб Аль-Салех, старший технологический консультант и архитектор решений в Аммане, Иордания: более 20 лет создания, интеграции и сопровождения корпоративных систем (Java, C#, SQL Server, Oracle), и та же глубина теперь в ИИ-агентах и автоматизации.",
  role: "Архитектор решений",
  h1: "Инженер систем и программного обеспечения с более чем двадцатилетней глубиной: ведёт защищённые двуязычные платформы и корпоративную интеграцию от идеи до продакшена.",
  summary:
    "Корпоративный опыт на Java, C#, SQL Server и Oracle (банкинг, контроль доступа и посещаемости, управление очередями) и текущая работа в ИИ-агентах, автоматизации операций и интеграции систем. Агентов для кода использую как ускорители под письменными ограничениями; решения и доказательства остаются у меня: зелёный тест, commit или URL выкладки, прежде чем что-либо считать сделанным.",
  ctaRole: "Обсудить роль или проект",
  ctaJournal: "Инженерный журнал",
  ctaCv: "Резюме",
  mailSubject: "Инженерная роль — через портфолио",
  kpisLabel: "Проверенные цифры",
  kpis: [
    { label: "лет создания, интеграции и сопровождения систем", hint: "от администрирования сетей в 2003 году до ИИ-агентов" },
    { label: "живых адресов на Vercel", hint: "41 проект · 3 своих домена · Muqasa только на v.muqasa-jo.com" },
    { label: "зелёных автотестов в двух проектах", hint: "Vitest 52 + Playwright 4 + Vitest 11" },
    { label: "продакшен-системы клиентов", hint: "банковская платформа MTZ · Risha360 на Forge" },
  ],
  journalEyebrow: "Инженерный журнал",
  journalTitle: "От диагностики систем эпохи DOS к корпоративной интеграции и ИИ-агентам",
  journalLead: "Я не просто выучил новейший фреймворк. Я вырос через несколько поколений вычислений. Четыре эпохи, десять глав, один метод, который не менялся.",
  methodTitle: "Стек изменился. Метод — нет.",
  journalLink: "Читать журнал целиком, со взглядом рекрутера на 30 секунд",
  workTitle: "Избранные работы",
  workLead: "Вместо внутренних процентов готовности — метки статуса. Каждая карточка открывает кейс на этом же языке.",
  caseStudy: "Кейс",
  live: "В проде:",
  more: (n) => `и ещё ${n} (полный список)`,
  coverAlt: "Главная страница демо магазина Бараа аш-Шубаки",
  coverCaption: "Реальный кадр: демо магазина Бараа аш-Шубаки",
  cvEyebrow: "",
  cvTitle: "",
  print: "",
  summaryHeading: "",
  cvSummary: "",
  skillsHeading: "",
  experienceHeading: "",
  projectsHeading: "",
  educationHeading: "",
  languagesLabel: "",
  cvCardTitle: "Резюме",
  cvCardLead: "Резюме открывается на этом же языке. Текст опыта взят из выверенной записи, чтобы даты и формулировки не поехали.",
  cvArabic: "Резюме на арабском",
  cvEnglish: "Резюме на английском",
  blurbs: {
    risha360: "Платформа талантов на Laravel и Next.js: роли самообслуживания знаменитостей в продакшене и центр коллабораций инфлюенсеров с заблокированным автоматом выплат.",
    project1: "Симулятор трансграничной торговли с полным циклом от обнаружения до симулированной покупки и аварийным выключателем, который интерфейс не может снять.",
    "master-brain": "Платформа портфеля без зависимостей: один каталог операций как инструмент MCP, HTTP API и CLI, с инженерным умом каждого проекта и отчётами.",
    factories: "Два сайта иорданских фабрик на Next.js, в проде на Vercel за день по потоку копия → улучшение → ревью → слияние → выкладка.",
    baraah: "Двуязычное премиум-демо магазина на Next.js 16 для ремесленных продуктов, с двумя проходами безопасности до любого продакшен-использования.",
    "giz-apca": "Двуязычный демонстратор профобучения: диагностика → траектория → сценарий → некомпенсируемая оценка безопасности → паспорт навыков. Предлагаемый демонстратор, согласованный с заявленными целями GIZ, не продукт GIZ.",
  },
};

export const homeCopy: Record<Exclude<Locale, "ar">, HomeCopy> = { en, fa, tr, ur, ru };

export const isHomeLocale = (locale: Locale): locale is Exclude<Locale, "ar"> => locale !== "ar";

export const addedHomeCopy: Record<AddedLocale, HomeCopy> = { fa, tr, ur, ru };
