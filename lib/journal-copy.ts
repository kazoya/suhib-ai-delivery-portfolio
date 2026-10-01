import type { Locale } from "@/lib/i18n";

export type JournalCopy = {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  thesis: string;
  bridge: string;
  eras: string;
  chapters: string;
  recruiterEyebrow: string;
  recruiterTitle: string;
  mapEyebrow: string;
  mapTitle: string;
  mapLead: string;
  chaptersEyebrow: string;
  chaptersTitle: string;
  methodEyebrow: string;
  methodTitle: string;
  methodLead: string;
  methodAria: string;
  genEyebrow: string;
  genTitle: string;
  genLead: string;
  clientEyebrow: string;
  clientTitle: string;
  clientLead: string;
  entriesEyebrow: string;
  entriesTitle: string;
  entriesLead: string;
  secEyebrow: string;
  secTitle: string;
  secLead: string;
  secPractice: string;
  secShot: string;
  funEyebrow: string;
  funTitle: string;
  funLead: string;
  truthTitle: string;
  truth: string[];
  handsOn: string;
  memory: string;
  lesson: string;
  today: string;
  proof: string;
  classification: string;
  evidence: string;
  then: string;
  now: string;
  legendCurrent: string;
  legendPast: string;
  filters: string;
  count: (n: number) => string;
  fields: {
    challenge: string;
    context: string;
    decision: string;
    implementation: string;
    verification: string;
    result: string;
    lesson: string;
    today: string;
  };
};

const ar: JournalCopy = {
  metaTitle: "السجل الهندسي — من DOS إلى وكلاء الذكاء الاصطناعي",
  metaDescription:
    "رحلة صهيب الصالح عبر أجيال الحوسبة: من تشخيص أنظمة DOS وإصلاح الأجهزة والشبكات واستعادة البيانات، إلى التكامل المؤسسي بـ Java وSQL Server وOracle، ثم الأتمتة ووكلاء الذكاء الاصطناعي. ذاكرات هندسية، أجيال التقنية، ونظرة للمسؤول عن التوظيف.",
  ogDescription: "المكدّس تغيّر. الطريقة لم تتغيّر.",
  eyebrow: "السجل الهندسي",
  h1: "من تشخيص أنظمة DOS إلى التكامل المؤسسي ووكلاء الذكاء الاصطناعي",
  lead: "لم أبدأ التقنية من واجهات API والذكاء الاصطناعي. بدأتها من سطر أوامر ومحرك أقراص لا يُقرأ. هذه الصفحة ليست سيرة زمنية، بل رحلة عبر أجيال من الحوسبة، وكل خبرة قديمة فيها تتصل بقيمة هندسية أعملها اليوم.",
  thesis: "لم أتعلم أحدث إطار عمل فقط. كبرتُ عبر أجيال متعددة من الحوسبة.",
  bridge: "",
  eras: "العصور",
  chapters: "الفصول",
  recruiterEyebrow: "نظرة المسؤول عن التوظيف · 30 ثانية",
  recruiterTitle: "سبعة أسئلة، سبع إجابات، بلا قراءة السجل كله",
  mapEyebrow: "الخريطة",
  mapTitle: "عشرة فصول في أربعة عصور",
  mapLead: "الفصول مرتبة بالعصر لا بالتاريخ الدقيق. السنوات الأولى بلا تواريخ عمداً؛ التواريخ المذكورة هي تواريخ العمل الموثّقة في السيرة.",
  chaptersEyebrow: "الرحلة",
  chaptersTitle: "كل فصل: ما كان، ما بقي منه، وأين يظهر اليوم",
  methodEyebrow: "الثابت",
  methodTitle: "المكدّس تغيّر. الطريقة لم تتغيّر.",
  methodLead: "راقب → اعزل → شخّص → احفظ → أصلح → تحقق → أتمِت. الخطوات نفسها على قرص من التسعينيات وعلى وكيل ذكاء اصطناعي في الإنتاج.",
  methodAria: "الطريقة",
  genEyebrow: "أجيال التقنية",
  genTitle: "التقدّم عبر العصور، لا قائمة تقنيات متساوية",
  genLead: "المهارات الحالية معبّأة باللون؛ الخبرات التاريخية والتأسيسية بإطار فقط. Sound Forge وDOS خبرات، لا مهارات 2026.",
  clientEyebrow: "لأصحاب الأعمال",
  clientTitle: "ماذا تحتاج؟",
  clientLead: "سبع مشكلات شائعة، ولكل واحدة ما أفعله ودليل عام يمكنك مراجعته.",
  entriesEyebrow: "مدخلات هندسية",
  entriesTitle: "خمسة قرارات هندسية موثّقة بالكامل",
  entriesLead: "لكل مدخل: التحدي، السياق والقيود، القرار، التنفيذ، التحقق، النتيجة، الدرس، وكيف يظهر المبدأ في عملي اليوم.",
  secEyebrow: "الأمن التطبيقي",
  secTitle: "الأمن بالأدلة لا بالألقاب",
  secLead: "الطبقة نفسها من التشخيص، لكن من جهة المهاجم: كل مختبر في PortSwigger محلول، وتقارير هندسة عكسية، وتقييمات أمن تطبيقات للتنفيذيين.",
  secPractice: "ما أفعله فعلاً",
  secShot: "لوحة PortSwigger — لقطة حقيقية 2026-09-16",
  funEyebrow: "على الهامش",
  funTitle: "حين دخل الذكاء الاصطناعي عالمنا",
  funLead: "ثلاث صور مولّدة بالذكاء الاصطناعي صنعتها في حزيران 2026 للمرح. زينة لا دليل، وشريك عمل لا بديل.",
  truthTitle: "ملاحظة صدق",
  truth: [
    "خبرات DOS والوسائط واستعادة البيانات خبرات عملية تأسيسية؛ لا أدّعي تخصصاً حالياً في DOS، ولا شهادة تحقيق جنائي رقمي، ولا استعادة غير مقيدة لأجهزة iPhone.",
    "لا تواريخ للسنوات الأولى، ولا سنوات خبرة محددة لأداة بعينها، ولا عملاء أو نتائج مالية أو نسب أداء لم تُوثَّق.",
    "أكاديمية APCA للذكاء الاصطناعي الصناعي مُظهِر مقترح متوافق مع أهداف GIZ المعلنة، وليست موافقة أو اعتماداً من GIZ.",
  ],
  handsOn: "خبرة عملية",
  memory: "ذاكرة هندسية",
  lesson: "الدرس الذي بقي",
  today: "كيف يظهر في عملي اليوم",
  proof: "الدليل",
  classification: "التصنيف",
  evidence: "الدليل",
  then: "في عصر DOS",
  now: "في الإنتاج اليوم",
  legendCurrent: "مهارة حالية",
  legendPast: "خبرة تاريخية أو تأسيسية",
  filters: "تصفية حسب المجال",
  count: (n) => `${n} مسارات`,
  fields: {
    challenge: "التحدي",
    context: "السياق والقيود",
    decision: "القرار",
    implementation: "التنفيذ",
    verification: "التحقق",
    result: "النتيجة",
    lesson: "الدرس",
    today: "كيف يظهر المبدأ في عملي اليوم",
  },
};

const en: JournalCopy = {
  metaTitle: "Engineering Journal — from DOS to AI agents",
  metaDescription:
    "Suhib Al-Saleh's journey across generations of computing: DOS-era troubleshooting, PC and network repair, data recovery, enterprise integration with Java, SQL Server and Oracle, then automation and AI agents. Engineering memories, technology generations and a 30-second recruiter view.",
  ogDescription: "The stack changed. The method didn't.",
  eyebrow: "Engineering journal",
  h1: "From DOS-era systems troubleshooting to enterprise integration and AI agents",
  lead: "I did not start technology with APIs and AI. I started it at a command prompt with a CD-ROM drive that would not read. This page is not a chronological résumé; it is a journey across generations of computing, and every old experience on it connects to an engineering value I apply today.",
  thesis: "I didn't just learn the newest framework. I grew through multiple generations of computing.",
  bridge: "",
  eras: "Eras",
  chapters: "Chapters",
  recruiterEyebrow: "Recruiter view · 30 seconds",
  recruiterTitle: "Seven questions, seven answers, no need to read the whole journal",
  mapEyebrow: "The map",
  mapTitle: "Ten chapters across four eras",
  mapLead: "Chapters are ordered by era, not exact date. The early years are deliberately undated; the dates shown are the employment dates documented in the CV.",
  chaptersEyebrow: "The journey",
  chaptersTitle: "Each chapter: what it was, what survived, and where it shows up today",
  methodEyebrow: "The constant",
  methodTitle: "The stack changed. The method didn't.",
  methodLead: "Observe → isolate → diagnose → preserve → repair → verify → automate. The same steps on a 1990s disk and on an AI agent in production.",
  methodAria: "The method",
  genEyebrow: "Technology generations",
  genTitle: "Progression across eras, not a flat list of equal technologies",
  genLead: "Current skills are filled; historical and foundational ones are outlined. Sound Forge and DOS are experience, not 2026 skills.",
  clientEyebrow: "For business visitors",
  clientTitle: "What do you need?",
  clientLead: "Seven common problems, each with what I do about it and public proof you can check.",
  entriesEyebrow: "Engineering entries",
  entriesTitle: "Five fully documented engineering decisions",
  entriesLead: "Each entry: challenge, context and constraints, decision, implementation, verification, result, lesson, and how the principle appears in my work today.",
  secEyebrow: "Application security",
  secTitle: "Security by evidence, not by titles",
  secLead: "The same diagnostic layer, seen from the attacker's side: every PortSwigger lab solved, reverse-engineering reports, and application-security assessments for executives.",
  secPractice: "What I actually do",
  secShot: "PortSwigger dashboard — real capture, 2026-09-16",
  funEyebrow: "On the side",
  funTitle: "When AI walked into our world",
  funLead: "Three AI-generated illustrations I made in June 2026, for fun. Decoration, not evidence; a work partner, not a replacement.",
  truthTitle: "Truthfulness note",
  truth: [
    "DOS, multimedia and data-recovery experiences are hands-on foundations; I claim no current DOS specialisation, no digital-forensics certification, and no unrestricted iPhone recovery.",
    "No dates for the early years, no years-of-experience figures for specific tools, and no clients, financial outcomes or performance percentages that are not documented.",
    "The APCA Industrial AI Academy is a proposed demonstrator aligned with GIZ's publicly stated objectives, not a GIZ approval or accreditation.",
  ],
  handsOn: "Hands-on",
  memory: "Engineering memory",
  lesson: "Lesson that survived",
  today: "How it shows up in my work today",
  proof: "Proof",
  classification: "Classification",
  evidence: "Evidence",
  then: "In the DOS era",
  now: "In production today",
  legendCurrent: "Current skill",
  legendPast: "Historical or foundational",
  filters: "Filter by area",
  count: (n) => `${n} tracks`,
  fields: {
    challenge: "Challenge",
    context: "Context and constraints",
    decision: "Decision",
    implementation: "Implementation",
    verification: "Verification",
    result: "Result",
    lesson: "Lesson learned",
    today: "How the principle appears in my work today",
  },
};

const fa: JournalCopy = {
  metaTitle: "دفتر مهندسی — از DOS تا عامل‌های هوش مصنوعی",
  metaDescription:
    "سفر صهیب الصالح در نسل‌های رایانش: عیب‌یابی دوران DOS، تعمیر رایانه و شبکه، بازیابی داده، یکپارچه‌سازی سازمانی با Java و SQL Server و Oracle، سپس اتوماسیون و عامل‌های هوش مصنوعی.",
  ogDescription: "پشته عوض شد. روش نه.",
  eyebrow: "دفتر مهندسی",
  h1: "از عیب‌یابی سیستم‌های دوران DOS تا یکپارچه‌سازی سازمانی و عامل‌های هوش مصنوعی",
  lead: "فناوری را از API و هوش مصنوعی شروع نکردم. از خط فرمان و درایو سی‌دی‌ای که نمی‌خواند شروع کردم. این صفحه رزومهٔ زمانی نیست؛ سفری است میان نسل‌های رایانش، و هر تجربهٔ قدیمی در آن به ارزشی وصل است که امروز به کار می‌برم.",
  thesis: "فقط تازه‌ترین چارچوب را یاد نگرفتم. میان چند نسل رایانش بزرگ شدم.",
  bridge: "عنوان‌ها، مقدمهٔ فصل‌ها و روش به فارسی‌اند. جزئیات شواهد به عربیِ اصلی مانده تا هیچ رقمی در ترجمه جابه‌جا نشود.",
  eras: "دوره‌ها",
  chapters: "فصل‌ها",
  recruiterEyebrow: "نگاه جذب‌کننده · 30 ثانیه",
  recruiterTitle: "هفت پرسش، هفت پاسخ، بی‌آنکه همهٔ دفتر خوانده شود",
  mapEyebrow: "نقشه",
  mapTitle: "ده فصل در چهار دوره",
  mapLead: "فصل‌ها به دوره چیده‌اند نه به تاریخ دقیق. سال‌های آغاز عمداً بدون تاریخ‌اند؛ تاریخ‌های ذکرشده تاریخ‌های اشتغالِ ثبت‌شده در رزومه‌اند.",
  chaptersEyebrow: "سفر",
  chaptersTitle: "هر فصل: چه بود، چه از آن ماند، و امروز کجا دیده می‌شود",
  methodEyebrow: "ثابت",
  methodTitle: "پشته عوض شد. روش نه.",
  methodLead: "ببین → جدا کن → تشخیص بده → حفظ کن → تعمیر کن → راستی‌آزمایی کن → خودکار کن. همان گام‌ها روی دیسک دههٔ نود و روی عامل هوش مصنوعی در تولید.",
  methodAria: "روش",
  genEyebrow: "نسل‌های فناوری",
  genTitle: "پیشرفت میان دوره‌ها، نه فهرستی تخت از فناوری‌های برابر",
  genLead: "مهارت‌های جاری پررنگ‌اند؛ تجربه‌های تاریخی و پایه‌ای فقط کادر دارند. Sound Forge و DOS تجربه‌اند، نه مهارت 2026.",
  clientEyebrow: "برای صاحبان کسب‌وکار",
  clientTitle: "به چه نیاز دارید؟",
  clientLead: "هفت مسئلهٔ رایج، و برای هر کدام کاری که می‌کنم و سندی عمومی که می‌توانید ببینید.",
  entriesEyebrow: "مدخل‌های مهندسی",
  entriesTitle: "پنج تصمیم مهندسی که کامل مستند شده‌اند",
  entriesLead: "هر مدخل: چالش، زمینه و قیدها، تصمیم، اجرا، راستی‌آزمایی، نتیجه، درس، و اینکه اصل امروز در کارم کجا دیده می‌شود.",
  secEyebrow: "امنیت کاربردی",
  secTitle: "امنیت با شواهد، نه با عنوان",
  secLead: "همان لایهٔ تشخیص، از سمت مهاجم: همهٔ آزمایشگاه‌های PortSwigger حل شده، گزارش‌های مهندسی معکوس، و ارزیابی امنیت برنامه برای مدیران.",
  secPractice: "کاری که واقعاً می‌کنم",
  secShot: "داشبورد PortSwigger — ثبت واقعی 2026-09-16",
  funEyebrow: "در حاشیه",
  funTitle: "وقتی هوش مصنوعی به دنیای ما آمد",
  funLead: "سه تصویر ساخته‌شده با هوش مصنوعی که در ژوئن 2026 برای سرگرمی ساختم. زینت است نه سند؛ شریک کار است نه جایگزین.",
  truthTitle: "یادداشت صداقت",
  truth: [
    "تجربه‌های DOS، چندرسانه‌ای و بازیابی داده پایه‌های عملی‌اند؛ ادعای تخصص جاری در DOS، گواهی جرم‌یابی دیجیتال، یا بازیابی نامحدود آیفون ندارم.",
    "برای سال‌های آغاز تاریخ نیست، برای یک ابزار سال‌های تجربهٔ مشخص نیست، و مشتری یا نتیجهٔ مالی یا درصد عملکردی که مستند نشده باشد نیست.",
    "آکادمی هوش مصنوعی صنعتی APCA یک نشانگر پیشنهادی همسو با اهداف اعلام‌شدهٔ GIZ است، نه تأیید یا اعتبارنامهٔ GIZ.",
  ],
  handsOn: "کار عملی",
  memory: "حافظهٔ مهندسی",
  lesson: "درسی که ماند",
  today: "امروز در کارم کجا دیده می‌شود",
  proof: "سند",
  classification: "طبقه‌بندی",
  evidence: "سند",
  then: "در دوران DOS",
  now: "امروز در تولید",
  legendCurrent: "مهارت جاری",
  legendPast: "تجربهٔ تاریخی یا پایه‌ای",
  filters: "پالایش بر اساس حوزه",
  count: (n) => `${n} مسیر`,
  fields: {
    challenge: "چالش",
    context: "زمینه و قیدها",
    decision: "تصمیم",
    implementation: "اجرا",
    verification: "راستی‌آزمایی",
    result: "نتیجه",
    lesson: "درس",
    today: "اصل امروز در کارم کجا دیده می‌شود",
  },
};

const tr: JournalCopy = {
  metaTitle: "Mühendislik günlüğü — DOS'tan yapay zeka ajanlarına",
  metaDescription:
    "Suhib Al-Saleh'in bilişim kuşakları boyunca yolculuğu: DOS dönemi arıza giderme, bilgisayar ve ağ onarımı, veri kurtarma, Java, SQL Server ve Oracle ile kurumsal entegrasyon, ardından otomasyon ve yapay zeka ajanları.",
  ogDescription: "Yığın değişti. Yöntem değişmedi.",
  eyebrow: "Mühendislik günlüğü",
  h1: "DOS dönemi sistem arızasından kurumsal entegrasyona ve yapay zeka ajanlarına",
  lead: "Teknolojiye API'ler ve yapay zeka ile başlamadım. Okumayan bir CD sürücüsü ve bir komut istemi ile başladım. Bu sayfa kronolojik bir özgeçmiş değil; bilişim kuşakları boyunca bir yolculuk, ve üzerindeki her eski deneyim bugün uyguladığım bir mühendislik değerine bağlanır.",
  thesis: "Yalnızca en yeni çerçeveyi öğrenmedim. Birden fazla bilişim kuşağı boyunca büyüdüm.",
  bridge: "Başlıklar, bölüm girişleri ve yöntem Türkçe. Kanıt ayrıntıları İngilizce özgün metindedir; böylece hiçbir rakam çeviride kaymaz.",
  eras: "Dönemler",
  chapters: "Bölümler",
  recruiterEyebrow: "İşe alım bakışı · 30 saniye",
  recruiterTitle: "Yedi soru, yedi cevap; günlüğün tamamını okumaya gerek yok",
  mapEyebrow: "Harita",
  mapTitle: "Dört dönemde on bölüm",
  mapLead: "Bölümler kesin tarihe göre değil, döneme göre sıralı. İlk yıllar bilinçli olarak tarihsizdir; gösterilen tarihler özgeçmişte belgelenmiş istihdam tarihleridir.",
  chaptersEyebrow: "Yolculuk",
  chaptersTitle: "Her bölüm: neydi, ne kaldı, bugün nerede görünüyor",
  methodEyebrow: "Sabit olan",
  methodTitle: "Yığın değişti. Yöntem değişmedi.",
  methodLead: "Gözle → yalıt → tanıla → koru → onar → doğrula → otomatikleştir. Aynı adımlar 1990'ların diskinde de üretimdeki bir yapay zeka ajanında da.",
  methodAria: "Yöntem",
  genEyebrow: "Teknoloji kuşakları",
  genTitle: "Eşit teknolojilerin düz listesi değil, dönemler boyunca ilerleme",
  genLead: "Güncel beceriler dolu; tarihsel ve temel olanlar yalnızca çerçeveli. Sound Forge ve DOS deneyimdir, 2026 becerisi değil.",
  clientEyebrow: "İş sahipleri için",
  clientTitle: "Neye ihtiyacınız var?",
  clientLead: "Yedi yaygın sorun; her biri için ne yaptığım ve kontrol edebileceğiniz kamuya açık bir kanıt.",
  entriesEyebrow: "Mühendislik girdileri",
  entriesTitle: "Tam belgelenmiş beş mühendislik kararı",
  entriesLead: "Her girdi: meydan okuma, bağlam ve kısıtlar, karar, uygulama, doğrulama, sonuç, ders ve ilkenin bugünkü işimde nerede göründüğü.",
  secEyebrow: "Uygulama güvenliği",
  secTitle: "Unvanla değil, kanıtla güvenlik",
  secLead: "Aynı tanı katmanı, saldırgan tarafından: PortSwigger'daki her laboratuvar çözüldü, tersine mühendislik raporları ve yöneticiler için uygulama güvenliği değerlendirmeleri.",
  secPractice: "Gerçekten yaptığım",
  secShot: "PortSwigger panosu — gerçek kayıt, 2026-09-16",
  funEyebrow: "Kenarda",
  funTitle: "Yapay zeka dünyamıza girdiğinde",
  funLead: "Haziran 2026'da eğlence için yaptığım üç yapay zeka görseli. Süs, kanıt değil; bir iş ortağı, yerine geçen değil.",
  truthTitle: "Dürüstlük notu",
  truth: [
    "DOS, multimedya ve veri kurtarma deneyimleri uygulamalı temellerdir; güncel bir DOS uzmanlığı, adli bilişim sertifikası veya kısıtsız iPhone kurtarma iddia etmiyorum.",
    "İlk yıllar için tarih yok, belirli bir araç için yıl cinsinden deneyim yok ve belgelenmemiş müşteri, finansal sonuç veya performans yüzdesi yok.",
    "APCA Endüstriyel Yapay Zeka Akademisi, GIZ'in açıkladığı hedeflerle uyumlu önerilen bir göstericidir; GIZ onayı veya akreditasyonu değildir.",
  ],
  handsOn: "Uygulamalı",
  memory: "Mühendislik belleği",
  lesson: "Kalan ders",
  today: "Bugün işimde nerede görünüyor",
  proof: "Kanıt",
  classification: "Sınıflandırma",
  evidence: "Kanıt",
  then: "DOS döneminde",
  now: "Bugün üretimde",
  legendCurrent: "Güncel beceri",
  legendPast: "Tarihsel veya temel",
  filters: "Alana göre süz",
  count: (n) => `${n} iz`,
  fields: {
    challenge: "Meydan okuma",
    context: "Bağlam ve kısıtlar",
    decision: "Karar",
    implementation: "Uygulama",
    verification: "Doğrulama",
    result: "Sonuç",
    lesson: "Öğrenilen ders",
    today: "İlke bugün işimde nasıl görünüyor",
  },
};

const ur: JournalCopy = {
  metaTitle: "انجینئرنگ جرنل — DOS سے اے آئی ایجنٹس تک",
  metaDescription:
    "صهیب الصالح کا سفر کمپیوٹنگ کی نسلوں میں: DOS دور کی خرابی، کمپیوٹر اور نیٹ ورک کی مرمت، ڈیٹا کی بازیافت، Java، SQL Server اور Oracle سے انٹرپرائز انضمام، پھر آٹومیشن اور اے آئی ایجنٹس۔",
  ogDescription: "اسٹیک بدل گیا۔ طریقہ نہیں بدلا۔",
  eyebrow: "انجینئرنگ جرنل",
  h1: "DOS دور کے نظاموں کی تشخیص سے انٹرپرائز انضمام اور اے آئی ایجنٹس تک",
  lead: "میں نے ٹیکنالوجی API اور مصنوعی ذہانت سے شروع نہیں کی۔ کمانڈ پرامپٹ اور ایک سی ڈی ڈرائیو سے شروع کی جو پڑھتی نہیں تھی۔ یہ صفحہ زمانی سوانح نہیں؛ کمپیوٹنگ کی نسلوں کا سفر ہے، اور اس پر ہر پرانا تجربہ آج کے ایک انجینئرنگ قدر سے جڑا ہے۔",
  thesis: "میں نے صرف نیا ترین فریم ورک نہیں سیکھا۔ کمپیوٹنگ کی کئی نسلوں میں بڑا ہوا۔",
  bridge: "عنوان، فصلوں کے دیباچے اور طریقہ اردو میں ہیں۔ شواہد کی تفصیل اصل عربی میں ہے تاکہ کوئی عدد ترجمہ میں نہ بدلے۔",
  eras: "ادوار",
  chapters: "ابواب",
  recruiterEyebrow: "بھرتی کا نظر · 30 سیکنڈ",
  recruiterTitle: "سات سوال، سات جواب، پورا جرنل پڑھے بغیر",
  mapEyebrow: "نقشہ",
  mapTitle: "چار ادوار میں دس ابواب",
  mapLead: "ابواب تاریخِ دقیق سے نہیں، دور سے ترتیب ہیں۔ ابتدائی سال جان بوجھ کر بغیر تاریخ ہیں؛ جو تاریخیں ہیں وہ سی وی میں درج ملازمت کی تاریخیں ہیں۔",
  chaptersEyebrow: "سفر",
  chaptersTitle: "ہر باب: کیا تھا، کیا بچا، اور آج کہاں نظر آتا ہے",
  methodEyebrow: "ثابت",
  methodTitle: "اسٹیک بدل گیا۔ طریقہ نہیں بدلا۔",
  methodLead: "دیکھو → الگ کرو → تشخیص کرو → محفوظ رکھو → درست کرو → تصدیق کرو → خودکار بناؤ۔ وہی قدم نوے کی دہائی کی ڈسک پر اور پروڈکشن کے اے آئی ایجنٹ پر۔",
  methodAria: "طریقہ",
  genEyebrow: "ٹیکنالوجی کی نسلیں",
  genTitle: "ادوار میں پیش قدمی، برابر ٹیکنالوجیز کی ہموار فہرست نہیں",
  genLead: "موجودہ مہارتیں بھری ہوئی ہیں؛ تاریخی اور بنیادی تجربے صرف خاکہ۔ Sound Forge اور DOS تجربہ ہیں، 2026 کی مہارت نہیں۔",
  clientEyebrow: "کاروباری مہمانوں کے لیے",
  clientTitle: "آپ کو کیا چاہیے؟",
  clientLead: "سات عام مسائل، ہر ایک پر میں کیا کرتا ہوں اور عوامی ثبوت جسے آپ دیکھ سکتے ہیں۔",
  entriesEyebrow: "انجینئرنگ اندراجات",
  entriesTitle: "پانچ مکمل دستاویزی انجینئرنگ فیصلے",
  entriesLead: "ہر اندراج: چیلنج، سیاق اور پابندیاں، فیصلہ، نفاذ، تصدیق، نتیجہ، سبق، اور اصول آج میرے کام میں کہاں دکھتا ہے۔",
  secEyebrow: "اطلاقی سیکیورٹی",
  secTitle: "سیکیورٹی ثبوت سے، القاب سے نہیں",
  secLead: "وہی تشخیصی پرت، حملہ آور کی طرف سے: PortSwigger کی ہر لیب حل، ریورس انجینئرنگ رپورٹیں، اور ایگزیکٹوز کے لیے ایپلیکیشن سیکیورٹی جائزے۔",
  secPractice: "جو میں واقعی کرتا ہوں",
  secShot: "PortSwigger ڈیش بورڈ — اصل تصویر، 2026-09-16",
  funEyebrow: "حاشیے پر",
  funTitle: "جب مصنوعی ذہانت ہماری دنیا میں آئی",
  funLead: "جون 2026 میں تفریح کے لیے بنائی تین اے آئی تصویریں۔ سجاوٹ، ثبوت نہیں؛ کام کا ساتھی، بدل نہیں۔",
  truthTitle: "سچائی کا نوٹ",
  truth: [
    "DOS، ملٹی میڈیا اور ڈیٹا بازیافت کے تجربے عملی بنیاد ہیں؛ موجودہ DOS تخصص، ڈیجیٹل فرانزک سرٹیفکیٹ، یا بلا پابندی iPhone بازیافت کا دعویٰ نہیں۔",
    "ابتدائی سالوں کی تاریخ نہیں، کسی آلے کے سالوں کا عدد نہیں، اور غیر دستاویزی کلائنٹ، مالی نتیجہ یا کارکردگی کا فیصد نہیں۔",
    "APCA صنعتی مصنوعی ذہانت اکیڈمی GIZ کے اعلان کردہ اہداف سے ہم آہنگ ایک تجویز کردہ مظاہرہ ہے، GIZ کی منظوری یا اسناد نہیں۔",
  ],
  handsOn: "عملی تجربہ",
  memory: "انجینئرنگ یاد",
  lesson: "جو سبق رہ گیا",
  today: "آج میرے کام میں کہاں دکھتا ہے",
  proof: "ثبوت",
  classification: "درجہ بندی",
  evidence: "ثبوت",
  then: "DOS کے دور میں",
  now: "آج پروڈکشن میں",
  legendCurrent: "موجودہ مہارت",
  legendPast: "تاریخی یا بنیادی",
  filters: "شعبے کے لحاظ سے چھانٹیں",
  count: (n) => `${n} راستے`,
  fields: {
    challenge: "چیلنج",
    context: "سیاق اور پابندیاں",
    decision: "فیصلہ",
    implementation: "نفاذ",
    verification: "تصدیق",
    result: "نتیجہ",
    lesson: "سبق",
    today: "اصول آج میرے کام میں کیسے دکھتا ہے",
  },
};

const ru: JournalCopy = {
  metaTitle: "Инженерный журнал — от DOS к ИИ-агентам",
  metaDescription:
    "Путь Сухиба Аль-Салеха через поколения вычислений: диагностика эпохи DOS, ремонт компьютеров и сетей, восстановление данных, корпоративная интеграция на Java, SQL Server и Oracle, затем автоматизация и ИИ-агенты.",
  ogDescription: "Стек изменился. Метод — нет.",
  eyebrow: "Инженерный журнал",
  h1: "От диагностики систем эпохи DOS к корпоративной интеграции и ИИ-агентам",
  lead: "Я начал технику не с API и искусственного интеллекта. Я начал её с командной строки и привода CD, который не читал. Эта страница не хронологическое резюме, а путь через поколения вычислений, и каждый старый опыт на ней связан с инженерной ценностью, которую я применяю сегодня.",
  thesis: "Я не просто выучил новейший фреймворк. Я вырос через несколько поколений вычислений.",
  bridge: "Заголовки, вступления глав и метод — на русском. Подробности доказательств оставлены на английском, чтобы ни одна цифра не поехала в переводе.",
  eras: "Эпохи",
  chapters: "Главы",
  recruiterEyebrow: "Взгляд рекрутера · 30 секунд",
  recruiterTitle: "Семь вопросов, семь ответов, без чтения всего журнала",
  mapEyebrow: "Карта",
  mapTitle: "Десять глав в четырёх эпохах",
  mapLead: "Главы упорядочены по эпохе, не по точной дате. Ранние годы намеренно без дат; указанные даты — даты работы из резюме.",
  chaptersEyebrow: "Путь",
  chaptersTitle: "Каждая глава: чем было, что осталось и где проявляется сегодня",
  methodEyebrow: "Постоянное",
  methodTitle: "Стек изменился. Метод — нет.",
  methodLead: "Наблюдай → изолируй → диагностируй → сохрани → почини → проверь → автоматизируй. Те же шаги на диске девяностых и на ИИ-агенте в продакшене.",
  methodAria: "Метод",
  genEyebrow: "Поколения технологий",
  genTitle: "Движение через эпохи, а не плоский список равных технологий",
  genLead: "Текущие навыки закрашены; исторические и базовые только обведены. Sound Forge и DOS — опыт, не навыки 2026 года.",
  clientEyebrow: "Для бизнеса",
  clientTitle: "Что вам нужно?",
  clientLead: "Семь частых задач, по каждой — что я делаю и публичное доказательство, которое можно проверить.",
  entriesEyebrow: "Инженерные записи",
  entriesTitle: "Пять полностью задокументированных инженерных решений",
  entriesLead: "Каждая запись: вызов, контекст и ограничения, решение, реализация, проверка, результат, урок и где принцип виден в сегодняшней работе.",
  secEyebrow: "Прикладная безопасность",
  secTitle: "Безопасность доказательствами, не титулами",
  secLead: "Тот же диагностический слой со стороны атакующего: решены все лаборатории PortSwigger, отчёты по обратной разработке и оценки безопасности приложений для руководителей.",
  secPractice: "Что я делаю на самом деле",
  secShot: "Панель PortSwigger — реальный кадр, 2026-09-16",
  funEyebrow: "На полях",
  funTitle: "Когда ИИ вошёл в наш мир",
  funLead: "Три иллюстрации, которые я сгенерировал в июне 2026 ради шутки. Украшение, не доказательство; напарник в работе, не замена.",
  truthTitle: "Заметка о точности",
  truth: [
    "Опыт DOS, мультимедиа и восстановления данных — практический фундамент; я не заявляю текущую специализацию по DOS, сертификат цифровой криминалистики или неограниченное восстановление iPhone.",
    "Нет дат для ранних лет, нет стажа в годах по отдельному инструменту и нет клиентов, финансовых результатов или процентов производительности, которые не задокументированы.",
    "Академия промышленного ИИ APCA — это предлагаемый демонстратор, согласованный с публично заявленными целями GIZ, а не одобрение или аккредитация GIZ.",
  ],
  handsOn: "Практика",
  memory: "Инженерная память",
  lesson: "Урок, который остался",
  today: "Где это видно в моей работе сегодня",
  proof: "Доказательство",
  classification: "Классификация",
  evidence: "Доказательство",
  then: "В эпоху DOS",
  now: "В продакшене сегодня",
  legendCurrent: "Текущий навык",
  legendPast: "Исторический или базовый",
  filters: "Фильтр по области",
  count: (n) => `${n} треков`,
  fields: {
    challenge: "Вызов",
    context: "Контекст и ограничения",
    decision: "Решение",
    implementation: "Реализация",
    verification: "Проверка",
    result: "Результат",
    lesson: "Урок",
    today: "Как принцип виден в моей работе сегодня",
  },
};

export const journalCopy: Record<Locale, JournalCopy> = { ar, en, fa, tr, ur, ru };
