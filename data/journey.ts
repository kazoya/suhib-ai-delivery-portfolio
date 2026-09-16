/**
 * Career journey data — eras, engineering memories, technology generations,
 * method, recruiter/client views and curated engineering-journal entries.
 *
 * Sources: the owner's ATS CV (2026-09-16), the Master Brain export of
 * 2026-09-14 and the OUT/ profile documents. Early-computing experiences carry
 * no dates on purpose: only employment dates from the CV are dated.
 */

export type L = { ar: string; en: string };
export type Category = "systems" | "software" | "data" | "integration" | "automation" | "ai";

export const categoryLabel: Record<Category | "all", L> = {
  all: { ar: "الكل", en: "All" },
  systems: { ar: "الأنظمة", en: "Systems" },
  software: { ar: "البرمجيات", en: "Software" },
  data: { ar: "البيانات", en: "Data" },
  integration: { ar: "التكامل", en: "Integration" },
  automation: { ar: "الأتمتة", en: "Automation" },
  ai: { ar: "الذكاء الاصطناعي", en: "AI" },
};

/* ------------------------------------------------------------------ eras */

export type Era = { id: string; label: L; note: L };

export const eras: Era[] = [
  { id: "early", label: { ar: "سنوات الحوسبة الأولى", en: "Early Computing Years" }, note: { ar: "قبل 2002 · بلا تواريخ دقيقة عمداً", en: "Before 2002 · deliberately undated" } },
  { id: "infra", label: { ar: "عصر الأنظمة والشبكات", en: "Systems & Networking Era" }, note: { ar: "2003 – 2015", en: "2003 – 2015" } },
  { id: "enterprise", label: { ar: "عصر الهندسة المؤسسية", en: "Enterprise Engineering Era" }, note: { ar: "2018 – الآن", en: "2018 – present" } },
  { id: "ai", label: { ar: "عصر الذكاء الاصطناعي والأتمتة", en: "AI & Automation Era" }, note: { ar: "2018 – الآن، بكثافة منذ 2025", en: "2018 – present, intensively since 2025" } },
];

/* -------------------------------------------------------------- chapters */

export type Chapter = {
  n: string;
  id: string;
  era: Era["id"];
  category: Category;
  title: L;
  intro: L;
  /** Hands-on experience in that chapter — historical, never a current primary skill. */
  handsOn: L[];
  memory: { text: L; lesson: L };
  today: L;
  /** Public proof for the "today" claim, when one exists. */
  proof?: { label: L; href: string };
  classification: L;
};

export const chapters: Chapter[] = [
  {
    n: "01",
    id: "before-plug-and-play",
    era: "early",
    category: "systems",
    title: { ar: "قبل أن يصبح Plug & Play فعلاً Plug & Play", en: "Before Plug & Play Was Actually Plug & Play" },
    intro: {
      ar: "بدأت التقنية عندي من سطر أوامر DOS، حيث كان تشغيل أي جهاز يعني تهيئته يدوياً: ملفات الإقلاع، تعريفات محرك الأقراص المضغوطة، وبطاقة صوت لا تعمل حتى تفهم كيف يتحدث الجهاز مع البرنامج.",
      en: "My technology started at the DOS prompt, where making any device work meant configuring it by hand: boot files, CD-ROM drivers, and a sound card that stayed silent until you understood how the machine talked to the program.",
    },
    handsOn: [
      { ar: "استكشاف الأخطاء وسطر الأوامر في بيئة DOS", en: "DOS-era troubleshooting and command-line work" },
      { ar: "تهيئة بيئات العتاد والبرمجيات يدوياً", en: "Manual hardware / software environment configuration" },
      { ar: "تعريف محركات الأقراص المضغوطة في DOS", en: "CD-ROM setup in DOS-era environments" },
      { ar: "تعريف بطاقات الصوت وتعريفاتها", en: "Sound-card and driver configuration" },
    ],
    memory: {
      text: {
        ar: "الحصول على صوت من لعبة كان يعني فهم التعريفات وملفات تهيئة DOS وقيود عصر IRQ/DMA، أي فهم الجهاز الذي يقف تحت التطبيق.",
        en: "Getting a game to produce sound once meant understanding drivers, DOS configuration, IRQ/DMA-era constraints and the machine beneath the application.",
      },
      lesson: { ar: "حين يفشل التجريد، افهم الطبقة التي تحته.", en: "When the abstraction fails, understand the layer below it." },
    },
    today: {
      ar: "هذه العادة نفسها هي التي تجعلني أنزل إلى مستوى SDK الجهاز عندما ترفض بصمة أو قارئ RFID الحديث بدل الاكتفاء برسالة الخطأ في الواجهة.",
      en: "That same habit is why I drop to the device-SDK level when a fingerprint reader or RFID unit stops talking, instead of stopping at the error message in the UI.",
    },
    classification: { ar: "خبرة تأسيسية — لا تخصص حالي في DOS", en: "Foundational experience — not a current DOS specialisation" },
  },
  {
    n: "02",
    id: "drivers",
    era: "early",
    category: "systems",
    title: { ar: "حين كانت التعريفات مشكلة عليك حلّها", en: "When Drivers Were a Problem You Had to Solve" },
    intro: {
      ar: "تثبيت Windows 95 لم يكن نقرة «التالي». كل طابعة وطرفية وبطاقة كانت تفاوضاً بين العتاد ونظام التشغيل، وكان عليك أن تعرف أين ينتهي أحدهما ويبدأ الآخر.",
      en: "Installing Windows 95 was not a Next-Next-Finish affair. Every printer, peripheral and card was a negotiation between hardware and operating system, and you had to know where one ended and the other began.",
    },
    handsOn: [
      { ar: "تثبيت واستعادة أنظمة عصر Windows 95", en: "Windows 95-era installation and recovery" },
      { ar: "إصلاح الحواسيب المكتبية والمحمولة", en: "PC and laptop repair" },
      { ar: "استكشاف أخطاء الطابعات والطرفيات", en: "Printer and peripheral troubleshooting" },
      { ar: "تثبيت أنظمة التشغيل واستعادتها", en: "Operating-system installation and recovery" },
    ],
    memory: {
      text: {
        ar: "طابعة لا تطبع قد تكون كابلاً، أو منفذاً، أو تعريفاً، أو خدمة نظام. تعلمت أن أستبعد طبقة بعد طبقة بدل تغيير كل شيء دفعة واحدة.",
        en: "A printer that will not print can be a cable, a port, a driver or a system service. I learned to rule out one layer at a time instead of changing everything at once.",
      },
      lesson: { ar: "حدود العتاد والبرمجيات مكان يجب أن تعرفه لا أن تخمّنه.", en: "The hardware/software boundary is a place you should know, not guess." },
    },
    today: {
      ar: "تكامل أنظمة الدخول والحضور (Miditec، ZKTeco، RFID، ANPR، التعرف على الوجه) هو الشكل المؤسسي لنفس المشكلة: جهاز، تعريف، خدمة، وقاعدة بيانات موارد بشرية في الطرف الآخر.",
      en: "Access-control and attendance integration (Miditec, ZKTeco, RFID, ANPR, facial recognition) is the enterprise form of the same problem: a device, a driver, a service and an HR database on the other end.",
    },
    proof: { label: { ar: "الخبرة المهنية في السيرة", en: "Experience in the CV" }, href: "/cv#experience" },
    classification: { ar: "خبرة تأسيسية وعملية", en: "Foundational, hands-on experience" },
  },
  {
    n: "03",
    id: "boot-recover-repair",
    era: "early",
    category: "systems",
    title: { ar: "إقلاع، استعادة، إصلاح", en: "Boot, Recover, Repair" },
    intro: {
      ar: "الجهاز الذي لا يقلع يعلّمك الانضباط: الوضع الآمن، ScanDisk، أدوات استعادة السجل، وأقراص الصيانة من عصر Hiren's BootCD. لم يكن هناك زر «إصلاح تلقائي»؛ كان هناك تسلسل تشخيص.",
      en: "A machine that will not boot teaches discipline: Safe Mode, ScanDisk, registry-recovery tools and Hiren's BootCD-era maintenance discs. There was no auto-repair button; there was a diagnostic sequence.",
    },
    handsOn: [
      { ar: "استكشاف أخطاء الإقلاع", en: "Boot troubleshooting" },
      { ar: "الوضع الآمن ومسارات الاستعادة", en: "Safe Mode and recovery workflows" },
      { ar: "أدوات قديمة مثل ScanDisk وأدوات استعادة السجل", en: "Legacy utilities such as ScanDisk and registry-recovery tools" },
      { ar: "مسارات صيانة بأقراص Hiren's BootCD", en: "Hiren's BootCD-era maintenance workflows" },
    ],
    memory: {
      text: {
        ar: "قبل أي إصلاح كنت أسأل: هل يصل الجهاز إلى BIOS؟ إلى محمّل الإقلاع؟ إلى النواة؟ كل إجابة تقصي نصف الاحتمالات.",
        en: "Before any fix I asked: does the machine reach BIOS? The boot loader? The kernel? Each answer eliminated half the possibilities.",
      },
      lesson: { ar: "تشخيص الفشل عملية منضبطة، لا سلسلة محاولات.", en: "Failure diagnosis is a disciplined process, not a series of attempts." },
    },
    today: {
      ar: "هذا هو أسلوبي في تشخيص الإنتاج اليوم: خدمة Windows متوقفة، وظيفة SQL Agent فاشلة، أو جهاز لا يستجيب. أعزل الطبقة أولاً ثم أطبّق إصلاحاً قابلاً للتراجع.",
      en: "This is how I approach production diagnostics today: a stopped Windows service, a failed SQL Agent job or an unresponsive device. Isolate the layer first, then apply a rollback-safe fix.",
    },
    proof: { label: { ar: "محرك استيراد الإجازات — سجل هندسي", en: "Leave-import engine — journal entry" }, href: "/journal#entry-leave-import" },
    classification: { ar: "خبرة تأسيسية تُطبَّق يومياً", en: "Foundational experience applied daily" },
  },
  {
    n: "04",
    id: "networks",
    era: "infra",
    category: "integration",
    title: { ar: "الشبكات صارت الجهاز العصبي", en: "Networks Became the Nervous System" },
    intro: {
      ar: "من إدارة شبكة شركة في الإمارات (2003) إلى دعم شبكات العملاء التجاريين في الأردن (2004–2007) ثم شبكة مدرسة ومختبراتها (2007–2015): بنية Windows، أجهزة افتراضية VMware، ولينكس/أوبونتو حين يتعطل X Server.",
      en: "From administering a company network in the UAE (2003) to supporting commercial clients' networks in Jordan (2004–2007) and then a school network and its labs (2007–2015): Windows infrastructure, VMware virtual machines, and Linux/Ubuntu when the X Server refused to start.",
    },
    handsOn: [
      { ar: "إدارة الشبكات والبنية التحتية", en: "Networking and network administration" },
      { ar: "بنية Windows التحتية", en: "Windows infrastructure" },
      { ar: "VMware والأجهزة الافتراضية", en: "VMware and virtual machines" },
      { ar: "استكشاف أخطاء Linux / Ubuntu وجلسات X Server", en: "Linux / Ubuntu and X Server / graphical-session troubleshooting" },
    ],
    memory: {
      text: {
        ar: "أول مرة تعطّلت الشبكة لأن جهازاً واحداً أخذ عنوان IP الخاص بالخادم، فهمت أن النظام الموزّع يفشل بطرق لا يفشل بها الجهاز الواحد.",
        en: "The first time a network went down because one workstation grabbed the server's IP address, I understood that distributed systems fail in ways a single machine never does.",
      },
      lesson: { ar: "الأنظمة الموزعة لها حدس خاص: التوقيت، التعارض، والانقطاع الجزئي.", en: "Distributed systems need their own intuition: timing, contention and partial failure." },
    },
    today: {
      ar: "هذا الحدس هو ما أستخدمه في تصميم عمال FIFO مع idempotency لتدفقات واتساب، وفي اختيار SQL Server Service Broker أو MSMQ أو IBM MQ حين يجب ألا تضيع رسالة.",
      en: "That intuition is what I use when designing FIFO workers with idempotency for WhatsApp flows, or choosing SQL Server Service Broker, MSMQ or IBM MQ when a message must never be lost.",
    },
    classification: { ar: "خبرة مهنية موثّقة بالتواريخ", en: "Dated professional experience" },
  },
  {
    n: "05",
    id: "data",
    era: "infra",
    category: "data",
    title: { ar: "البيانات صارت هي الأصل", en: "Data Became the Asset" },
    intro: {
      ar: "استعادة ملفات محذوفة أو غير قابلة للوصول من أقراص صلبة، ذواكر USB، بطاقات microSD، تخزين أندرويد، ووسائط تالفة، باستخدام أكثر من أداة حسب الحالة. القاعدة الأولى التي لا تُكسر: لا تكتب الملفات المستعادة على الوسيط المتضرر نفسه.",
      en: "Recovering deleted or inaccessible files from hard drives, USB flash storage, microSD cards, Android storage and damaged media, using more than one tool depending on the situation. The first unbreakable rule: never write recovered files back onto the affected source media.",
    },
    handsOn: [
      { ar: "استعادة عملية للملفات المحذوفة أو غير القابلة للوصول", en: "Hands-on recovery of deleted or inaccessible files" },
      { ar: "مسارات استعادة الأقراص الصلبة وUSB وmicroSD وتخزين أندرويد", en: "HDD, USB flash, microSD and Android storage recovery workflows" },
      { ar: "وسائط تالفة أو غير قابلة للوصول", en: "Damaged or inaccessible media" },
      { ar: "ممارسة الاستعادة غير التدميرية", en: "Non-destructive recovery practice" },
    ],
    memory: {
      text: {
        ar: "أسوأ ما يمكن فعله ببيانات مفقودة هو محاولة إنقاذها بسرعة. النسخة الأولى تكون صورة من الوسيط، والعمل كله يجري على الصورة.",
        en: "The worst thing you can do to lost data is rescue it in a hurry. The first step is an image of the media, and all the work happens on the image.",
      },
      lesson: { ar: "الحفاظ أولاً: لا تغيّر المصدر قبل أن تملك نسخة.", en: "Preservation first: never alter the source before you hold a copy." },
    },
    today: {
      ar: "القاعدة نفسها تظهر في محرك استيراد الإجازات البنكي (تحقق ثم علِّم، لا تعديل صامت) وفي حزم التراجع التي ترافق كل إصلاح عاجل على قاعدة بيانات إنتاجية.",
      en: "The same rule shows up in the bank leave-import engine (verify then flag, never silently mutate) and in the rollback packages that accompany every hotfix on a production database.",
    },
    proof: { label: { ar: "محرك استيراد الإجازات — سجل هندسي", en: "Leave-import engine — journal entry" }, href: "/journal#entry-leave-import" },
    classification: { ar: "خبرة عملية — ليست شهادة تحقيق جنائي رقمي، ولا استعادة غير مقيدة لأجهزة iPhone", en: "Hands-on experience — not a digital-forensics certification, and no unrestricted iPhone recovery" },
  },
  {
    n: "06",
    id: "software",
    era: "infra",
    category: "software",
    title: { ar: "البرمجيات صارت الأداة", en: "Software Became the Tool" },
    intro: {
      ar: "بكالوريوس نظم معلومات حاسوبية (2002)، ثم Java وC# وتطبيقات Windows، ولاحقاً Flutter/Dart للموبايل. وعلى الهامش، عصر الوسائط: Sound Forge، Movavi Video Suite، أدوات تحويل الفيديو، وبرامج قديمة مثل iPhoto Plus أبقيتها تعمل على أنظمة حديثة حين كان ذلك ممكناً تقنياً.",
      en: "A B.A. in Computer Information Systems (2002), then Java, C# and Windows applications, and later Flutter/Dart for mobile. On the side, the multimedia era: Sound Forge, Movavi Video Suite, video-conversion utilities and legacy applications such as iPhoto Plus that I kept useful on modern systems when technically feasible.",
    },
    handsOn: [
      { ar: "Java وC# وتطبيقات سطح مكتب Windows", en: "Java, C# and Windows desktop applications" },
      { ar: "Flutter / Dart", en: "Flutter / Dart" },
      { ar: "أدوات وسائط قديمة: Sound Forge، Movavi، iPhoto Plus (خبرة تاريخية)", en: "Legacy multimedia tools: Sound Forge, Movavi, iPhoto Plus (historical)" },
      { ar: "إبقاء البرمجيات القديمة نافعة على أنظمة حديثة", en: "Keeping old software useful on modern systems" },
    ],
    memory: {
      text: {
        ar: "برنامج تحرير صوت من التسعينيات يعمل تحت Windows 10 بعد ضبط التوافق ومكتبة مفقودة واحدة. لم يكن حنيناً؛ كان توفير أسابيع على مستخدم يعرف أداته.",
        en: "A 1990s audio editor running under Windows 10 after a compatibility setting and one missing library. That was not nostalgia; it saved weeks for a user who knew their tool.",
      },
      lesson: { ar: "الأداة وسيلة. الاحتراف هو معرفة متى تُبقيها ومتى تستبدلها.", en: "Tools are means. Professionalism is knowing when to keep one and when to replace it." },
    },
    today: {
      ar: "لهذا أختار المكدّس حسب المشكلة: Java على Oracle لمحرك استيراد بنكي، C# وWinCC لغرف التحكم، Next.js لمنصة عربية تُنشر خلال أيام.",
      en: "That is why I pick the stack per problem: Java on Oracle for a bank import engine, C# and WinCC for control rooms, Next.js for an Arabic platform shipped in days.",
    },
    proof: { label: { ar: "الأعمال", en: "Projects" }, href: "/projects" },
    classification: { ar: "الوسائط خبرة تاريخية — Java وC# وFlutter مهارات حالية", en: "Multimedia is historical — Java, C# and Flutter are current skills" },
  },
  {
    n: "07",
    id: "integration",
    era: "enterprise",
    category: "integration",
    title: { ar: "التكامل صار هو المشكلة", en: "Integration Became the Problem" },
    intro: {
      ar: "منذ 2018 في Signals Control وAPCA Systems: Microsoft SQL Server وOracle، حزم SSIS، تقارير RDLC، REST وXML، خدمات Windows ووظائف مجدولة، ومراسلة مؤسسية عبر Service Broker وMSMQ وIBM MQ. المشكلة لم تعد «هل يعمل البرنامج؟» بل «هل تتفق الأنظمة على الحقيقة نفسها؟».",
      en: "Since 2018 at Signals Control and APCA Systems: Microsoft SQL Server and Oracle, SSIS packages, RDLC reports, REST and XML, Windows services and scheduled jobs, and enterprise messaging over Service Broker, MSMQ and IBM MQ. The question stopped being \"does the program work?\" and became \"do the systems agree on the same truth?\"",
    },
    handsOn: [
      { ar: "SQL / T-SQL، إجراءات ومحفّزات، ضبط الاستعلامات، التجميع (clustering)", en: "SQL / T-SQL, procedures and triggers, query tuning, clustering" },
      { ar: "SSIS، RDLC، وظائف SQL Agent", en: "SSIS, RDLC, SQL Agent jobs" },
      { ar: "REST APIs وXML وخدمات Windows", en: "REST APIs, XML and Windows services" },
      { ar: "تكامل أنظمة الدخول والحضور مع الموارد البشرية عبر SDK الأجهزة", en: "Access-control and attendance integration with HR through device SDKs" },
    ],
    memory: {
      text: {
        ar: "قارئ بصمة يسجّل الحضور بتوقيت محلي، ونظام موارد بشرية يتوقع UTC، وتقرير شهري يخرج بساعة ناقصة لكل موظف. التكامل ليس نقل بيانات؛ إنه الاتفاق على معناها.",
        en: "A fingerprint reader logging attendance in local time, an HR system expecting UTC, and a monthly report one hour short for every employee. Integration is not moving data; it is agreeing on what the data means.",
      },
      lesson: { ar: "افهم حدود كل نظام وعقده قبل أن تصل بينها.", en: "Understand each system's boundary and its contract before you connect them." },
    },
    today: {
      ar: "المركز متعدد الوكلاء الذي صممته في APCA يقوم على هذا المبدأ: عمّال متخصصون (معرفة، حجز، تحويل) يتشاركون نواة محكومة واحدة بدل روبوتات محادثة منفصلة.",
      en: "The multi-agent hub I designed at APCA stands on that principle: specialised workers (knowledge, booking, handoff) share one governed core instead of disconnected chatbots.",
    },
    proof: { label: { ar: "APCA SmartHelp", en: "APCA SmartHelp" }, href: "/projects/smarthelp" },
    classification: { ar: "مهارة حالية أساسية", en: "Current core skill" },
  },
  {
    n: "08",
    id: "automation",
    era: "enterprise",
    category: "automation",
    title: { ar: "الأتمتة صارت هي الجواب", en: "Automation Became the Answer" },
    intro: {
      ar: "من سكربتات صغيرة إلى وظائف مجدولة، إلى برمجة WinCC لغرف التحكم، إلى محرك استيراد إجازات مجدول على Oracle يشخّص نفسه، إلى تدفقات عمليات عملاء على واتساب بعمّال FIFO وidempotency وطابور تحويل بشري.",
      en: "From small scripts to scheduled jobs, to WinCC scripting for control rooms, to a scheduled leave-import engine on Oracle that reports its own diagnostics, to WhatsApp customer-operations flows with FIFO workers, idempotency and a human-handoff queue.",
    },
    handsOn: [
      { ar: "وظائف مجدولة (Task Scheduler، SQL Agent)", en: "Scheduled jobs (Task Scheduler, SQL Agent)" },
      { ar: "برمجة سكربتات WinCC", en: "WinCC scripting" },
      { ar: "أتمتة سير العمل", en: "Workflow automation" },
      { ar: "أتمتة واتساب لعمليات العملاء", en: "WhatsApp customer-operations automation" },
    ],
    memory: {
      text: {
        ar: "أول وظيفة مجدولة كتبتها كانت تعمل بنجاح كل ليلة وتفشل بصمت كل شهر في أول يوم عمل. الأتمتة بلا تحقق هي فشل مجدول.",
        en: "The first scheduled job I wrote succeeded every night and failed silently every month on the first working day. Automation without verification is scheduled failure.",
      },
      lesson: { ar: "أتمِت ما تحققت منه، وأرفق كل أتمتة بتشخيص ومسار تراجع.", en: "Automate what you have verified, and ship every automation with diagnostics and a rollback path." },
    },
    today: {
      ar: "لهذا يقوم محرك الإجازات على «تحقق ثم علِّم»، ولهذا تحمل تدفقات الحجز على واتساب مفاتيح idempotency، ولهذا لا يُرفع مفتاح الإيقاف في منصة المحاكاة من الواجهة.",
      en: "That is why the leave engine runs verify-then-flag, why WhatsApp booking flows carry idempotency keys, and why the kill switch in the commerce simulator cannot be lifted from the UI.",
    },
    proof: { label: { ar: "مفتاح الإيقاف في Project1 — سجل هندسي", en: "Project1 kill switch — journal entry" }, href: "/journal#entry-kill-switch" },
    classification: { ar: "مهارة حالية أساسية", en: "Current core skill" },
  },
  {
    n: "09",
    id: "ai-layer",
    era: "ai",
    category: "ai",
    title: { ar: "الذكاء الاصطناعي صار طبقة هندسية أخرى", en: "AI Became Another Engineering Layer" },
    intro: {
      ar: "مساعد معرفة عربي يفهرس ملفات PDF وEPUB ويجيب باستشهاد برقم الصفحة (بحث دلالي + RAG)، ومركز متعدد الوكلاء بنواة محكومة، وأنظمة تجربة عملاء بمساعدة الذكاء الاصطناعي. الطبقة جديدة؛ أنماط الفشل ليست كذلك.",
      en: "An Arabic knowledge assistant that indexes PDF and EPUB files and answers with page-level citations (semantic search + RAG), a multi-agent hub with a governed core, and AI-assisted customer-experience systems. The layer is new; the failure modes are not.",
    },
    handsOn: [
      { ar: "RAG والبحث الدلالي", en: "RAG and semantic search" },
      { ar: "مساعدات معرفة مؤسَّسة على الوثائق", en: "Document-grounded knowledge assistants" },
      { ar: "أنظمة متعددة الوكلاء", en: "Multi-agent systems" },
      { ar: "أنظمة تجربة العملاء بمساعدة الذكاء الاصطناعي", en: "AI-assisted customer-experience systems" },
    ],
    memory: {
      text: {
        ar: "نموذج يجيب بثقة من صفحة لا وجود لها هو نفس الطابعة التي «تطبع» في السجل ولا تُخرج ورقة. الحل نفسه: اجعل الطبقة تثبت ما تدّعيه، هنا برقم صفحة.",
        en: "A model answering confidently from a page that does not exist is the printer that logs \"printed\" and produces no paper. Same fix: make the layer prove what it claims, here with a page number.",
      },
      lesson: { ar: "الذكاء الاصطناعي طبقة تحتاج حوكمة واختبارات ومفاتيح إيقاف كأي طبقة أخرى.", en: "AI is a layer that needs governance, tests and kill switches like any other." },
    },
    today: {
      ar: "أدير وكلاء البرمجة نفسها بهذه العقلية: أدوار مكتوبة، قيود لا تُرفع من الواجهة، ودليل (اختبار، commit، رابط نشر) قبل أن يُحسب أي إنجاز.",
      en: "I run coding agents with the same mindset: written roles, constraints that cannot be lifted from the UI, and evidence (a test, a commit, a deploy URL) before anything counts as done.",
    },
    proof: { label: { ar: "منصة المتابعة Master Brain", en: "Master Brain platform" }, href: "/projects/master-brain" },
    classification: { ar: "مهارة حالية أساسية", en: "Current core skill" },
  },
  {
    n: "10",
    id: "now",
    era: "ai",
    category: "ai",
    title: { ar: "ما أبنيه الآن", en: "What I Build Now" },
    intro: {
      ar: "مستشار تقني أول ومهندس حلول: وكلاء ذكاء اصطناعي، أتمتة، وتكامل أنظمة. أقود APCA SmartHelp CX وAPCA Smart Queue، وأبني وأصون منصة مقاصة جو العقارية، وأنشر منصات عربية ثنائية اللغة على Vercel وForge، وأستشير التنفيذيين في تحول رقمي عملي.",
      en: "Senior Technology Consultant and Solutions Architect: AI agents, automation and systems integration. I lead APCA SmartHelp CX and APCA Smart Queue, build and maintain the Muqasa Jo real-estate platform, ship bilingual Arabic platforms on Vercel and Forge, and advise executives on practical digital transformation.",
    },
    handsOn: [
      { ar: "هندسة الحلول والتسليم التقني", en: "Solutions architecture and technical delivery" },
      { ar: "وكلاء الذكاء الاصطناعي وأتمتة سير العمل", en: "AI agents and workflow automation" },
      { ar: "تكامل الأنظمة المؤسسية", en: "Enterprise systems integration" },
      { ar: "تشخيص الإنتاج وهندسة الإصلاحات العاجلة", en: "Production diagnostics and hotfix engineering" },
    ],
    memory: {
      text: {
        ar: "الفرق بين 2003 واليوم ليس في صعوبة المشكلات بل في عدد الطبقات بين المشكلة والشاشة. الطريقة لم تتغير.",
        en: "The difference between 2003 and today is not the difficulty of the problems but the number of layers between the problem and the screen. The method has not changed.",
      },
      lesson: { ar: "المكدّس تغيّر. الطريقة لم تتغيّر.", en: "The stack changed. The method didn't." },
    },
    today: {
      ar: "راجع الأعمال الحية، أو اقرأ نظرة المسؤول عن التوظيف، أو اختر مشكلتك في قسم «ماذا تحتاج؟».",
      en: "Browse the live work, read the recruiter view, or pick your problem in the \"What do you need?\" section.",
    },
    proof: { label: { ar: "الأعمال", en: "Projects" }, href: "/projects" },
    classification: { ar: "الهوية المهنية الحالية", en: "Current professional identity" },
  },
];

/* ---------------------------------------------------------------- method */

export const method: { step: L; then: L; now: L }[] = [
  { step: { ar: "راقب", en: "Observe" }, then: { ar: "ما الذي يظهر على الشاشة فعلاً، لا ما يقوله المستخدم", en: "What is actually on the screen, not what the user says" }, now: { ar: "سجلات، مقاييس، وإعادة إنتاج قبل أي فرضية", en: "Logs, metrics and a reproduction before any hypothesis" } },
  { step: { ar: "اعزل", en: "Isolate" }, then: { ar: "BIOS؟ محمّل الإقلاع؟ النواة؟ التعريف؟", en: "BIOS? Boot loader? Kernel? Driver?" }, now: { ar: "الجهاز؟ الخدمة؟ الطابور؟ قاعدة البيانات؟ النموذج؟", en: "Device? Service? Queue? Database? Model?" } },
  { step: { ar: "شخِّص", en: "Diagnose" }, then: { ar: "تعارض IRQ، قطاع تالف، سجل معطوب", en: "IRQ conflict, bad sector, corrupt registry" }, now: { ar: "تعارض عقد، رسالة مكررة، توقيت غير متفق عليه", en: "Contract mismatch, duplicate message, disagreed timestamps" } },
  { step: { ar: "احفظ", en: "Preserve" }, then: { ar: "صورة من الوسيط قبل أي كتابة", en: "An image of the media before any write" }, now: { ar: "نسخة احتياطية وحزمة تراجع قبل أي إصلاح عاجل", en: "A backup and a rollback package before any hotfix" } },
  { step: { ar: "أصلح", en: "Repair" }, then: { ar: "تعريف، ملف تهيئة، إعادة تثبيت", en: "A driver, a config file, a reinstall" }, now: { ar: "إجراء مخزّن، ترحيل، وظيفة مجدولة، تصحيح في الوكيل", en: "A stored procedure, a migration, a scheduled job, an agent fix" } },
  { step: { ar: "تحقق", en: "Verify" }, then: { ar: "الجهاز يقلع مرتين متتاليتين", en: "The machine boots twice in a row" }, now: { ar: "اختبار أخضر، تقرير تشخيص، رابط نشر يعمل", en: "A green test, a diagnostic report, a working deploy URL" } },
  { step: { ar: "أتمِت", en: "Automate" }, then: { ar: "قرص صيانة جاهز للمرة القادمة", en: "A maintenance disc ready for next time" }, now: { ar: "وظيفة مجدولة، وكيل، أو تدفق واتساب مع مفتاح إيقاف", en: "A scheduled job, an agent, or a WhatsApp flow with a kill switch" } },
];

/* ------------------------------------------------- technology generations */

export type GenItem = { label: string; current?: boolean; era: Era["id"] };
export type Track = { id: string; category: Category; title: L; items: GenItem[] };

export const tracks: Track[] = [
  { id: "systems", category: "systems", title: { ar: "الأنظمة", en: "Systems" }, items: [
    { label: "DOS", era: "early" }, { label: "Windows 95 → Windows", era: "early" }, { label: "Linux / Ubuntu", era: "infra" }, { label: "VMware", era: "infra" }, { label: "Windows Server ops", era: "enterprise", current: true },
  ] },
  { id: "infrastructure", category: "systems", title: { ar: "البنية التحتية", en: "Infrastructure" }, items: [
    { label: "PC / laptop repair", era: "early" }, { label: "Network administration", era: "infra" }, { label: "School labs & network", era: "infra" }, { label: "Enterprise operations", era: "enterprise", current: true },
  ] },
  { id: "data", category: "data", title: { ar: "البيانات", en: "Data" }, items: [
    { label: "File recovery", era: "early" }, { label: "SQL Server", era: "enterprise", current: true }, { label: "T-SQL / tuning", era: "enterprise", current: true }, { label: "Oracle", era: "enterprise", current: true }, { label: "SSIS / RDLC", era: "enterprise", current: true }, { label: "PostgreSQL / Supabase", era: "ai", current: true },
  ] },
  { id: "software", category: "software", title: { ar: "البرمجيات", en: "Software" }, items: [
    { label: "Desktop (C#)", era: "enterprise", current: true }, { label: "Backend (Java)", era: "enterprise", current: true }, { label: "REST APIs / XML", era: "enterprise", current: true }, { label: "Mobile (Flutter / Dart)", era: "enterprise", current: true }, { label: "Web (Next.js / Laravel)", era: "ai", current: true },
  ] },
  { id: "integration", category: "integration", title: { ar: "التكامل", en: "Integration" }, items: [
    { label: "Windows services", era: "enterprise", current: true }, { label: "Service Broker / MSMQ / IBM MQ", era: "enterprise", current: true }, { label: "Device SDKs (Miditec, ZKTeco)", era: "enterprise", current: true }, { label: "RFID / biometrics / ANPR", era: "enterprise", current: true }, { label: "Multi-agent hub", era: "ai", current: true },
  ] },
  { id: "automation", category: "automation", title: { ar: "الأتمتة", en: "Automation" }, items: [
    { label: "Scripts", era: "infra" }, { label: "Scheduled jobs / SQL Agent", era: "enterprise", current: true }, { label: "WinCC scripting", era: "enterprise", current: true }, { label: "Workflow automation", era: "ai", current: true }, { label: "WhatsApp operations flows", era: "ai", current: true },
  ] },
  { id: "intelligence", category: "ai", title: { ar: "الذكاء", en: "Intelligence" }, items: [
    { label: "Search", era: "enterprise" }, { label: "Semantic search / RAG", era: "ai", current: true }, { label: "Knowledge assistants", era: "ai", current: true }, { label: "AI agents", era: "ai", current: true }, { label: "Multi-agent systems", era: "ai", current: true },
  ] },
];

/* ----------------------------------------------------------- recruiter view */

export const recruiterView: { q: L; a: L }[] = [
  { q: { ar: "من هو صهيب؟", en: "Who is Suhib?" }, a: { ar: "مهندس برمجيات ومستشار تقني من عمّان، أكثر من 20 عاماً في بناء الأنظمة المؤسسية والتشغيلية وتكاملها ودعمها وتشخيصها.", en: "A software engineer and technology consultant from Amman with 20+ years building, integrating, supporting and troubleshooting enterprise and operational systems." } },
  { q: { ar: "ماذا يعمل الآن؟", en: "What does he do now?" }, a: { ar: "مستشار تقني أول ومهندس حلول في APCA Systems (منذ 2018)، ومهندس برمجيات لأنظمة الدخول وقواعد البيانات والتكامل في Signals Control (منذ 2018): وكلاء ذكاء اصطناعي، أتمتة، وتكامل أنظمة.", en: "Senior Technology Consultant & Solutions Architect at APCA Systems (since 2018) and Software Engineer for access control, databases and integration at Signals Control (since 2018): AI agents, automation and systems integration." } },
  { q: { ar: "ما مستوى أقدميته؟", en: "How senior is he?" }, a: { ar: "أول/معماري. يقود التصميم والتسليم، يشخّص الإنتاج، ويوجّه المهندسين والوكلاء؛ يعمل مباشرة مع التنفيذيين.", en: "Senior / architect level. Leads design and delivery, diagnoses production, mentors engineers and directs AI agents; works directly with executives." } },
  { q: { ar: "على أي أنظمة عمل؟", en: "What systems has he worked on?" }, a: { ar: "أنظمة بنكية (استيراد إجازات على منصة MTZ)، تحكم بالدخول والحضور (Miditec، ZKTeco، RFID، بصمة، ANPR)، إدارة طوابير، مساعدات معرفة عربية، منصات عقارية، ومواقع ومنصات عربية ثنائية اللغة.", en: "Banking (leave import on an MTZ platform), access control and attendance (Miditec, ZKTeco, RFID, fingerprint, ANPR), queue management, Arabic knowledge assistants, a real-estate platform, and bilingual Arabic web platforms." } },
  { q: { ar: "ماذا يحل لمؤسستي؟", en: "What can he solve for my organisation?" }, a: { ar: "أنظمة لا تتحدث مع بعضها، عمليات متكررة تحتاج أتمتة، نظام إنتاجي يتعطل، مساعد معرفة على وثائقكم، أو معمارية تقنية قبل الإنفاق.", en: "Systems that do not talk to each other, repetitive operations that need automation, a production system that keeps failing, a knowledge assistant over your documents, or technical architecture before you spend." } },
  { q: { ar: "أين يعمل؟", en: "Where can he work?" }, a: { ar: "عمّان، الأردن. عن بُعد أولاً، وحضور ميداني في السعودية والخليج عند الحاجة.", en: "Amman, Jordan. Remote-first, on-site in Saudi Arabia and the GCC when required." } },
  { q: { ar: "كيف أتواصل معه؟", en: "How can I contact him?" }, a: { ar: "البريد أو LinkedIn أدناه، أو GitHub لمراجعة الكود العام.", en: "Email or LinkedIn below, or GitHub to review public code." } },
];

/* -------------------------------------------------------------- client mode */

export const clientProblems: { need: L; answer: L; href: string; proof: L }[] = [
  { need: { ar: "«أحتاج ربط أنظمتي ببعضها.»", en: "\"I need systems integrated.\"" }, answer: { ar: "تكامل أجهزة الدخول والحضور مع الموارد البشرية، مراسلة مؤسسية، وREST/XML بين أنظمة لا تتفق على نفس الحقيقة.", en: "Access-control and attendance devices into HR, enterprise messaging, and REST/XML between systems that disagree on the truth." }, href: "/cv#experience", proof: { ar: "خبرة Signals Control وAPCA", en: "Signals Control and APCA experience" } },
  { need: { ar: "«لديّ عمليات متكررة أريد أتمتتها.»", en: "\"I have repetitive operations to automate.\"" }, answer: { ar: "وظائف مجدولة تشخّص نفسها، تدفقات واتساب بعمّال FIFO وidempotency، وأتمتة سير عمل مع مفتاح إيقاف.", en: "Scheduled jobs that report their own diagnostics, WhatsApp flows with FIFO workers and idempotency, workflow automation with a kill switch." }, href: "/journal#entry-leave-import", proof: { ar: "محرك استيراد الإجازات", en: "Leave-import engine" } },
  { need: { ar: "«أحتاج مساعد معرفة بالذكاء الاصطناعي.»", en: "\"I need an AI knowledge assistant.\"" }, answer: { ar: "مساعد عربي يفهرس PDF/EPUB ويجيب باستشهاد برقم الصفحة، محلياً أو سحابياً حسب حساسية البيانات.", en: "An Arabic assistant that indexes PDF/EPUB and answers with page-level citations, local or cloud depending on data sensitivity." }, href: "/projects/smarthelp", proof: { ar: "APCA SmartHelp", en: "APCA SmartHelp" } },
  { need: { ar: "«لديّ نظام إنتاجي يتعطل باستمرار.»", en: "\"I have a production system that keeps failing.\"" }, answer: { ar: "تشخيص منضبط: راقب → اعزل → شخّص → احفظ → أصلح → تحقق، ثم إصلاح عاجل قابل للتراجع.", en: "Disciplined diagnosis: observe → isolate → diagnose → preserve → repair → verify, then a rollback-safe hotfix." }, href: "/journal#method", proof: { ar: "الطريقة", en: "The method" } },
  { need: { ar: "«أحتاج من يشخّص قاعدة البيانات أو الخلفية.»", en: "\"I need database / backend troubleshooting.\"" }, answer: { ar: "SQL Server وOracle: إجراءات ومحفّزات، ضبط استعلامات، SSIS، وظائف Agent، تجميع، وخدمات Windows.", en: "SQL Server and Oracle: procedures and triggers, query tuning, SSIS, Agent jobs, clustering and Windows services." }, href: "/cv#skills", proof: { ar: "المهارات الأساسية", en: "Core skills" } },
  { need: { ar: "«أحتاج نموذجاً أولياً لذكاء اصطناعي أو أتمتة.»", en: "\"I need an AI / automation prototype.\"" }, answer: { ar: "منصات ثنائية اللغة تُنشر خلال أيام على Vercel، مع اختبارات وقيود مكتوبة لا تُرفع من الواجهة.", en: "Bilingual platforms shipped to Vercel within days, with tests and written constraints that cannot be lifted from the UI." }, href: "/projects", proof: { ar: "ستة مواقع حية", en: "Six live sites" } },
  { need: { ar: "«أحتاج معمارية تقنية قبل الإنفاق.»", en: "\"I need technical architecture before spending money.\"" }, answer: { ar: "استشارة معمارية: حدود الأنظمة، اختيار المكدّس حسب المشكلة، مخاطر الأمان، وما لا يستحق البناء.", en: "Architecture consulting: system boundaries, stack per problem, security risks, and what is not worth building." }, href: "/projects/master-brain", proof: { ar: "منصة Master Brain", en: "Master Brain platform" } },
];

/* ------------------------------------------------------- journal entries */

export type JournalEntry = {
  id: string;
  era: Era["id"];
  title: L;
  challenge: L;
  context: L;
  decision: L;
  implementation: L;
  verification: L;
  result: L;
  lesson: L;
  today: L;
  evidence?: { label: L; href: string };
  status: L;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "leave-import",
    era: "enterprise",
    title: { ar: "محرك استيراد إجازات بنكي على Oracle لا يعدّل صامتاً", en: "A bank leave-import engine on Oracle that never mutates silently" },
    challenge: { ar: "استيراد بيانات إجازات الموظفين إلى منصة MTZ لعميل بنكي، بشكل مجدول، دون أن يُفسد سجل خاطئ واحد الرصيد الشهري لأحد.", en: "Import employee leave data into a banking client's MTZ platform on a schedule, without a single bad record corrupting anyone's monthly balance." },
    context: { ar: "بيئة إنتاجية، نافذة صيانة ضيقة، مصدر بيانات لا يخضع لسيطرتنا، وقاعدة بيانات Oracle مشتركة مع أنظمة أخرى.", en: "A production environment, a narrow maintenance window, a data source outside our control, and an Oracle database shared with other systems." },
    decision: { ar: "تحقق ثم علِّم: كل سجل يُفحص أولاً، والسجلات المشبوهة تُعلَّم للمراجعة بدل أن تُطبَّق. لا كتابة على المصدر، وكل إصدار يرافقه حزمة تراجع.", en: "Verify then flag: every record is checked first and suspicious ones are flagged for review instead of applied. No writes to the source, and every release ships with a rollback package." },
    implementation: { ar: "محرك Java مجدول عبر Task Scheduler، تقارير تشخيص لكل تشغيل، وإصلاحات عاجلة مصمَّمة ليكون التراجع عنها آمناً.", en: "A Java engine scheduled through Task Scheduler, diagnostic reports for every run, and hotfixes engineered so that rolling back is safe." },
    verification: { ar: "تشغيلات مقارَنة على بيانات حقيقية قبل التفعيل، وتقارير تشخيص تُراجع بعد كل تشغيل مجدول.", en: "Comparison runs on real data before go-live, and diagnostic reports reviewed after every scheduled run." },
    result: { ar: "المحرك في الإنتاج على منصة العميل مع أتمتة مجدولة وتشخيص مستمر.", en: "The engine runs in production on the client's platform with scheduled automation and continuous diagnostics." },
    lesson: { ar: "قاعدة الاستعادة القديمة (لا تكتب على المصدر) تنطبق على البيانات المؤسسية تماماً كما على قرص تالف.", en: "The old recovery rule (never write to the source) applies to enterprise data exactly as it does to a damaged disk." },
    today: { ar: "كل أتمتة أسلّمها اليوم تحمل تشخيصاً ومسار تراجع، من وظائف SQL Agent إلى وكلاء الذكاء الاصطناعي.", en: "Every automation I ship today carries diagnostics and a rollback path, from SQL Agent jobs to AI agents." },
    evidence: { label: { ar: "الخبرة في السيرة (Signals Control)", en: "CV experience (Signals Control)" }, href: "/cv#experience" },
    status: { ar: "نظام إنتاجي لعميل — لا رابط عام", en: "Client production system — no public link" },
  },
  {
    id: "kill-switch",
    era: "ai",
    title: { ar: "تجارة محاكاة فقط بمفتاح إيقاف لا تُرفع من الواجهة", en: "Simulation-only commerce with a kill switch the UI cannot lift" },
    challenge: { ar: "اختبار جدوى تجارة عابرة للحدود (اكتشاف → تسعير → إدراج → شراء) دون المخاطرة بمال حقيقي أو انتهاك سياسات المنصات.", en: "Test cross-border commerce end to end (discover → price → list → buy) without risking real money or breaching marketplace policies." },
    context: { ar: "منصة Next.js + PostgreSQL تعمل مع eBay Sandbox، وأجزاء من التنفيذ تُسند لوكلاء برمجة تحت إشرافي.", en: "A Next.js + PostgreSQL platform working against the eBay Sandbox, with parts of the implementation delegated to coding agents under my supervision." },
    decision: { ar: "مفتاح buyHalt=true ثابت في طبقة البيانات، لا مسار في الواجهة أو الـ API يرفعه، وكتابات المالك محمية بفحوص Origin/CSRF. الإيراد الحي محجوب بالسياسة عمداً.", en: "A buyHalt=true flag fixed in the data layer, no UI or API path that lifts it, and owner writes protected by Origin/CSRF checks. Live revenue deliberately blocked by policy." },
    implementation: { ar: "حلقة محاكاة كاملة: eBay Sandbox موثَّق، مسار CSV معاينة → تحقق → commit، تسعير حتمي، مسودة محلية، شراء محاكى بـ dataPlane=SIMULATION، ومركز جاهزية يولّد المهام من فحوص حقيقية.", en: "A complete simulation loop: verified eBay Sandbox, a CSV path preview → validate → commit, deterministic pricing, a local draft, a simulated purchase with dataPlane=SIMULATION, and a readiness centre that generates tasks from real checks." },
    verification: { ar: "Vitest 52/52، Playwright 4/4، ومراجعتان مستقلتان بنماذج مختلفة تبحثان تحديداً عن أي مسار يرفع الإيقاف: لم يوجد.", en: "Vitest 52/52, Playwright 4/4, and two independent reviews with different models looking specifically for any path that lifts the halt: none found." },
    result: { ar: "حلقة المحاكاة مكتملة والإيراد الحي محجوب. المستودع خاص.", en: "Simulation loop complete, live revenue blocked. Private repository." },
    lesson: { ar: "القيد الذي يمكن رفعه من الواجهة ليس قيداً؛ إنه إعداد.", en: "A constraint that can be lifted from the UI is not a constraint; it is a setting." },
    today: { ar: "أطبّق القاعدة نفسها على كل وكيل ذكاء اصطناعي أنشره: ما يجب ألا يحدث يُمنع في الطبقة التي لا يصل إليها المستخدم.", en: "I apply the same rule to every AI agent I deploy: what must not happen is blocked in a layer the user cannot reach." },
    evidence: { label: { ar: "دراسة حالة Project1", en: "Project1 case study" }, href: "/projects/project1" },
    status: { ar: "محاكاة — مستودع خاص", en: "Simulation — private repository" },
  },
  {
    id: "one-catalogue",
    era: "ai",
    title: { ar: "كتالوج عمليات واحد يُعرض عبر CLI وHTTP وMCP", en: "One operation catalogue exposed through CLI, HTTP and MCP" },
    challenge: { ar: "عشرات المشاريع موزعة على جلسات وكلاء مختلفين بلا ذاكرة مشتركة، ولا طريقة لمعرفة ما أُنجز فعلاً وما هو ادّعاء.", en: "Dozens of projects spread across different agent sessions with no shared memory, and no way to tell real progress from claims." },
    context: { ar: "منصة داخلية يجب أن تعمل بلا اعتماديات، على جهاز واحد، وتخدم البشر والوكلاء بالسلوك نفسه.", en: "An internal platform that must run with no dependencies, on one machine, and serve humans and agents with identical behaviour." },
    decision: { ar: "كل عملية تُعرَّف مرة واحدة (مخطط JSON + معالج) ثم تُعرض بثلاث قنوات: أداة MCP، POST /api/op/<name>، وأمر CLI. الوكيل الذي لا يعرف قراراً ينادي ask_owner بدل التخمين.", en: "Each operation is defined once (JSON schema + handler) and exposed three ways: an MCP tool, POST /api/op/<name>, and a CLI command. An agent that lacks a decision calls ask_owner instead of guessing." },
    implementation: { ar: "Node.js خام، مخزن ملفات لكل مشروع (project.json + brain.json + journal/)، مصادقة PBKDF2-HMAC-SHA512 وجلسات HMAC، تقارير بخمس صيغ، وجسر تعاون ذرّي بين الوكلاء.", en: "Plain Node.js, a per-project file store (project.json + brain.json + journal/), PBKDF2-HMAC-SHA512 auth with HMAC sessions, reports in five formats, and an atomic collaboration bridge between agents." },
    verification: { ar: "هذه المحفظة نفسها مولَّدة من تقارير المنصة؛ مراجعة T1–T3 مستقلة طُبّقت على الجسر الحي.", en: "This very portfolio is generated from the platform's reports; an independent T1–T3 review was applied to the live bridge." },
    result: { ar: "تعمل يومياً وتتابع 46 مبادرة مسجَّلة.", en: "Runs daily and tracks 46 registered initiatives." },
    lesson: { ar: "القنوات الثلاث تتصرف بالطريقة نفسها لأن الحقيقة معرَّفة في مكان واحد.", en: "The three channels behave identically because the truth is defined in one place." },
    today: { ar: "الوكلاء أدوات محكومة في هذا النظام؛ القرار والدليل يبقيان عندي.", en: "Agents are governed tools inside this system; decisions and evidence stay with me." },
    evidence: { label: { ar: "دراسة حالة Master Brain", en: "Master Brain case study" }, href: "/projects/master-brain" },
    status: { ar: "نظام داخلي يعمل يومياً", en: "Internal system in daily use" },
  },
  {
    id: "factory-sites",
    era: "ai",
    title: { ar: "موقعا مصنعين ثنائيا اللغة خلال يوم عبر سير عمل وكيل محكوم", en: "Two bilingual factory sites in a day through a controlled agent workflow" },
    challenge: { ar: "مصنعان أردنيان بلا حضور رقمي مقنع، والمطلوب مواقع عرض سريعة قابلة للتحسين ثم الدمج والنشر.", en: "Two Jordanian factories with no credible digital presence, needing fast showcase sites that can be improved, merged and deployed." },
    context: { ar: "قالب Next.js 16 واحد، ووكيل خارجي يقترح تحسينات، وأنا أملك قرار الدمج والنشر.", en: "One Next.js 16 template, an external agent proposing improvements, and I own the merge and deploy decision." },
    decision: { ar: "سير عمل مكتوب: نسخ → إعادة علامة → حزمة تحسين للوكيل → مراجعة ودمج → lint/build → push → Vercel. الوكيل يقترح؛ الدمج قراري.", en: "A written workflow: copy → rebrand → improvement bundle for the agent → review and merge → lint/build → push → Vercel. The agent proposes; the merge is my call." },
    implementation: { ar: "المثالية للألبان (صفحة مبيعات، تقييم آيزو، noindex حتى الاعتماد) وACI للكيماويات الزراعية (بطل زراعي، واتساب مبيعات، حاسبة عائد).", en: "Al-Mithaliya Dairy (sales page, ISO assessment, noindex until approved) and ACI Agrochemicals (agricultural hero, WhatsApp sales, ROI calculator)." },
    verification: { ar: "lint وbuild أخضران محلياً، وVercel production READY لكلا الموقعين.", en: "Green lint and build locally, and Vercel production READY for both sites." },
    result: { ar: "موقعان حيّان على Vercel من GitHub. سُجّل عائق بصدق: انقطاع جلسة ترك ACI نسخة غير معاد علامتها قبل إكمالها لاحقاً.", en: "Two live sites on Vercel from GitHub. One blocker recorded honestly: a session interruption left ACI un-rebranded until it was completed later." },
    lesson: { ar: "سرعة الوكيل لا تلغي بوابة المراجعة؛ تجعلها أهم.", en: "Agent speed does not remove the review gate; it makes it more important." },
    today: { ar: "كل موقع أسلّمه بهذا السير يمر بالبوابة نفسها: مراجعة، بناء أخضر، ثم نشر.", en: "Every site I ship this way passes the same gate: review, green build, then deploy." },
    evidence: { label: { ar: "دراسة حالة المصانع", en: "Factory sites case study" }, href: "/projects/factories" },
    status: { ar: "حيّ", en: "Live" },
  },
  {
    id: "safety-assessment",
    era: "ai",
    title: { ar: "تقييم سلامة غير قابل للتعويض في مُظهِر تدريب صناعي", en: "A non-compensable safety assessment in an industrial-training demonstrator" },
    challenge: { ar: "مؤسسات التدريب المهني تحتاج مُظهِراً لمهارات وسلامة الذكاء الاصطناعي الصناعي قبل أي تجربة ميدانية، حيث لا يجوز أن تعوّض درجة مرتفعة في المهارات إخفاقاً في السلامة.", en: "Vocational training institutions need a demonstrator for industrial-AI skills and safety before any field trial, where a high skills score must never compensate for a safety failure." },
    context: { ar: "مُظهِر مقترح متوافق مع أهداف GIZ المعلنة، ثنائي اللغة، بذكاء اصطناعي محاكى وبيانات بذرة حتمية. ليس موافقة ولا اعتماداً من GIZ.", en: "A proposed demonstrator aligned with GIZ's publicly stated objectives, bilingual, with simulated AI and deterministic seed data. Not a GIZ approval or accreditation." },
    decision: { ar: "السلامة بوابة مستقلة غير قابلة للتعويض: الإخفاق فيها يوقف المسار مهما كانت الدرجات الأخرى، ويُسجَّل القرار في DECISION_LOG.", en: "Safety is an independent, non-compensable gate: failing it stops the pathway regardless of other scores, and the decision is recorded in DECISION_LOG." },
    implementation: { ar: "رحلة كاملة: تشخيص → مسار → سيناريو (رفض التجاوز + استشهاد) → تقييم → جواز مهارات → لوحة مدرّب → لوحة جهة مانحة → تصدير أدلة.", en: "A full journey: diagnostic → pathway → scenario (override refusal + citation) → assessment → skills passport → instructor dashboard → funder dashboard → evidence export." },
    verification: { ar: "11 اختبار Vitest خضراء، next build أخضر، Vercel production READY.", en: "11 green Vitest tests, green next build, Vercel production READY." },
    result: { ar: "المرحلة B مكتملة؛ التالية قاعدة بيانات ومصادقة حقيقية خلف أنواع النطاق الحالية.", en: "Gate B complete; next is a real database and authentication behind the current domain types." },
    lesson: { ar: "بعض القواعد يجب أن تكون بوابات لا أوزاناً.", en: "Some rules must be gates, not weights." },
    today: { ar: "الفكرة نفسها في أنظمة الدخول: بطاقة صالحة لا تعوّض منطقة ممنوعة.", en: "The same idea lives in access control: a valid badge does not compensate for a forbidden zone." },
    evidence: { label: { ar: "دراسة الحالة", en: "Case study" }, href: "/projects/giz-apca" },
    status: { ar: "مُظهِر مقترح — حيّ على Vercel", en: "Proposed demonstrator — live on Vercel" },
  },
];

/* --------------------------------------------------- CV (from the ATS PDF) */

export type Experience = { role: L; org: L; place: L; period: L; bullets: L[] };

export const experience: Experience[] = [
  {
    role: { ar: "مستشار تقني أول ومهندس حلول", en: "Senior Technology Consultant & Solutions Architect" },
    org: { ar: "APCA Systems", en: "APCA Systems" },
    place: { ar: "عمّان، الأردن · عن بُعد للخليج", en: "Amman, Jordan · Remote GCC" },
    period: { ar: "2018 – الآن", en: "2018 – Present" },
    bullets: [
      { ar: "قيادة APCA SmartHelp CX: مساعد معرفة عربي يفهرس ملفات PDF/EPUB الشركة ويجيب باستشهاد برقم الصفحة عبر بحث دلالي وRAG.", en: "Lead APCA SmartHelp CX: an Arabic knowledge assistant that indexes company PDF/EPUB files and answers with page-level citations using semantic search and RAG." },
      { ar: "تصميم مركز متعدد الوكلاء يتشارك فيه العمّال المتخصصون (معرفة، حجز، تحويل) نواة محكومة واحدة بدل روبوتات منفصلة.", en: "Design a multi-agent hub so specialised workers (knowledge, booking, handoff) share one governed core instead of disconnected chatbots." },
      { ar: "هندسة تدفقات عمليات العملاء على واتساب: عمّال FIFO، idempotency، إنشاء/تأكيد الحجوزات، وطابور تحويل بشري للعيادات وشركات الخدمات.", en: "Architect WhatsApp customer-operations flows: FIFO workers, idempotency, booking create/confirm, and a human-handoff queue for clinics and service businesses." },
      { ar: "تسليم APCA Smart Queue: تدفق زوار بمساعدة الذكاء الاصطناعي وتجربة «الفرع الناطق» لمراكز خدمة العملاء.", en: "Deliver APCA Smart Queue — AI-assisted visitor flow and talking-branch experience for customer-service counters." },
      { ar: "بناء وصيانة مقاصة جو، منصة ثقة وتقييم عقاري بمساعدة الذكاء الاصطناعي، بما فيها واجهات إنتاجية لتسليم الوثائق.", en: "Build and maintain Muqasa Jo, an AI-assisted real-estate trust and valuation platform, including production document-delivery APIs." },
      { ar: "استشارة التنفيذيين في تحول رقمي عملي: تحكم بالدخول، حضور، أتمتة تجربة العملاء، وتقييمات أمان التطبيقات مع تقارير مخاطر.", en: "Advise executives on practical digital transformation: access control, attendance, CX automation, and application-security assessments with risk reporting." },
    ],
  },
  {
    role: { ar: "مهندس برمجيات — التحكم بالدخول وقواعد البيانات والتكامل", en: "Software Engineer — Access Control, Databases & Integration" },
    org: { ar: "Signals Control (Miditec / منظومة MTZ المؤسسية)", en: "Signals Control (Miditec / enterprise MTZ stack)" },
    place: { ar: "عمّان، الأردن", en: "Amman, Jordan" },
    period: { ar: "أيار 2018 – الآن", en: "May 2018 – Present" },
    bullets: [
      { ar: "هندسة أنظمة خلفية بإجراءات ومحفّزات SQL متقدمة، حزم SSIS، وظائف SQL Agent، تقارير RDLC، وعمليات قواعد بيانات مجمّعة.", en: "Engineer backend systems with advanced SQL procedures and triggers, SSIS packages, SQL Agent jobs, RDLC reports, and clustered database operations." },
      { ar: "تطبيقات سطح مكتب Windows وأتمتة سكربتات WinCC لغرف التحكم التشغيلية.", en: "Implement Windows desktop applications and WinCC script automation for operational control rooms." },
      { ar: "تسليم محرك استيراد إجازات إنتاجي بـ Java على Oracle لمنصة MTZ لدى عميل بنكي: تحقق ثم علِّم، أتمتة مجدولة، تشخيص، وإصلاحات عاجلة قابلة للتراجع.", en: "Deliver a production leave-import engine in Java on Oracle for a banking client's MTZ platform: verify-then-flag processing, scheduled automation, diagnostics, and rollback-safe hotfixes." },
      { ar: "تكامل أجهزة الدخول والحضور — Miditec، ZKTeco، RFID، بصمة، التعرف على اللوحات والوجوه — بما فيه العمل على مستوى SDK ومزامنة الموارد البشرية.", en: "Integrate access-control and attendance hardware — Miditec, ZKTeco, RFID, fingerprint, licence-plate and facial recognition — including SDK-level device work and HR system sync." },
      { ar: "تشخيص برمجيات الإنتاج وخدمات Windows ووظائف قواعد البيانات واتصالات الأجهزة عبر بيئات متكاملة.", en: "Troubleshoot production software, Windows services, database jobs, device communications, and operational-system issues across integrated environments." },
    ],
  },
  {
    role: { ar: "مدير مكتب، المكتب التنفيذي", en: "Office Manager, Executive Office" },
    org: { ar: "مجموعة السعيد الاقتصادية", en: "Al-Said Economic Group" },
    place: { ar: "عمّان، الأردن", en: "Amman, Jordan" },
    period: { ar: "أيار 2017 – أيار 2018", en: "May 2017 – May 2018" },
    bullets: [
      { ar: "تصميم حلول أرشفة رقمية آمنة عبر وحدات الأعمال ودعم المراسلات التنفيذية والاجتماعات وعمليات تقنية المعلومات.", en: "Designed secure digital archive solutions across business units and supported executive correspondence, meetings, and IT operations." },
      { ar: "قيادة التوظيف والتهيئة وتوجيه الموظفين مع تعامل صارم مع السجلات السرية.", en: "Led recruitment, onboarding, and staff mentorship with strict handling of confidential records." },
    ],
  },
  {
    role: { ar: "معلم علوم حاسوب", en: "Computer Science Teacher" },
    org: { ar: "مدرسة المتنبي الثانوية", en: "Al-Mutanabbi High School" },
    place: { ar: "عمّان، الأردن", en: "Amman, Jordan" },
    period: { ar: "أيار 2007 – آذار 2015", en: "May 2007 – March 2015" },
    bullets: [
      { ar: "تدريس علوم الحاسوب والرياضيات والثقافة العامة للصفوف 7–12، وإدارة المختبرات والعتاد والبرمجيات وشبكة المدرسة.", en: "Taught Computer Science, Mathematics, and General Culture for grades 7–12; administered labs, hardware, software, and the school network." },
      { ar: "دعم حواسيب الصفوف والمختبرات وأنظمة التشغيل والطرفيات والطابعات والاتصال الشبكي، مع تشخيص واستعادة عمليين.", en: "Supported classroom and lab PCs, operating systems, peripherals, printers, and network connectivity, including practical troubleshooting and recovery." },
    ],
  },
  {
    role: { ar: "مهندس شبكات", en: "Network Engineer" },
    org: { ar: "Fast Systems", en: "Fast Systems" },
    place: { ar: "الأردن", en: "Jordan" },
    period: { ar: "أيار 2004 – نيسان 2007", en: "May 2004 – April 2007" },
    bullets: [
      { ar: "إصلاح الحواسيب المكتبية والمحمولة، دعم الشبكات المحلية، صيانة الأنظمة، تثبيت واستعادة أنظمة التشغيل، تشخيص الإقلاع، ودعم الطرفيات والطابعات لعملاء تجاريين.", en: "PC and laptop repair, local network support, systems maintenance, operating-system installation/recovery, boot troubleshooting, and peripheral/printer support for commercial clients." },
    ],
  },
  {
    role: { ar: "مدير شبكات", en: "Network Administrator" },
    org: { ar: "North Sea for Equipment and Commercial Agencies", en: "North Sea for Equipment and Commercial Agencies" },
    place: { ar: "الإمارات", en: "UAE" },
    period: { ar: "كانون الثاني 2003 – نيسان 2004", en: "January 2003 – April 2004" },
    bullets: [
      { ar: "إدارة شبكات الشركة وبنيتها التحتية، دعم محطات Windows وأنظمة المستخدمين، ومعالجة التشخيص التقني اليومي.", en: "Administered company networks and IT infrastructure, supported Windows workstations and end-user systems, and handled day-to-day technical troubleshooting." },
    ],
  },
];

export const education = {
  degree: { ar: "بكالوريوس نظم معلومات حاسوبية", en: "B.A. Computer Information Systems" },
  school: { ar: "جامعة العلوم التطبيقية، الأردن", en: "Applied Science University, Jordan" },
  year: "2002",
  license: { ar: "رخصة مزاولة رقم 1590", en: "License No. 1590" },
  development: [
    { ar: "تطوير الخلفيات بـ Java", en: "Backend development with Java" },
    { ar: "تطوير تطبيقات Windows", en: "Windows application development" },
    { ar: "SQL متقدم وSSIS", en: "Advanced SQL and SSIS" },
    { ar: "أمن المعلومات وحلول النسخ الاحتياطي", en: "Information security and backup solutions" },
    { ar: "تكامل الأنظمة", en: "Systems integration" },
  ],
  languages: { ar: "العربية (أم) · الإنجليزية (كفاءة مهنية)", en: "Arabic (native) · English (professional working proficiency)" },
};

export const coreSkills: { group: L; items: string }[] = [
  { group: { ar: "البرمجة والخلفيات", en: "Programming & backend" }, items: "Java, C#, Dart/Flutter, SQL, T-SQL, XML, REST APIs" },
  { group: { ar: "منصات البيانات", en: "Data platforms" }, items: "Microsoft SQL Server, Oracle, SSIS, RDLC, query tuning, clustering" },
  { group: { ar: "التكامل", en: "Integration" }, items: "SQL Server Service Broker, MSMQ, IBM MQ, Windows services, scheduled jobs, device SDKs" },
  { group: { ar: "الأنظمة والبنية التحتية", en: "Systems & infrastructure" }, items: "Windows installation/recovery, boot diagnostics, Safe Mode/recovery environments, PC/laptop repair, network administration, printer/peripheral troubleshooting, Linux/Ubuntu desktop troubleshooting" },
  { group: { ar: "الذكاء الاصطناعي والأتمتة", en: "AI & automation" }, items: "Multi-agent systems, RAG / semantic search, knowledge assistants, workflow automation, WinCC scripting" },
  { group: { ar: "الأنظمة التشغيلية", en: "Operational systems" }, items: "Access control, RFID, biometrics, ANPR, ZKTeco, Miditec, queue management (QMS), HR leave and attendance interfaces" },
  { group: { ar: "التسليم", en: "Delivery" }, items: "Production diagnostics, hotfix engineering, rollback-safe releases, technical mentorship, digital transformation" },
  { group: { ar: "الويب الحديث", en: "Modern web" }, items: "Next.js, React, TypeScript, Laravel, Node.js, PostgreSQL / Supabase, Vercel, Laravel Forge, Playwright, Vitest" },
];

export const selectedProjectsCv: L[] = [
  { ar: "APCA SmartHelp CX ومركز الوكلاء الذكي: وكلاء عرب متعددو الوظائف لإجابات موثّقة، حجز، وتحويل للمشغّل.", en: "APCA SmartHelp CX & Smart Agent Hub: multi-function Arabic AI agents for documented answers, booking, and operator handoff." },
  { ar: "APCA Smart Queue: إدارة طوابير ذكية وتجربة زائر «الفرع الناطق».", en: "APCA Smart Queue: intelligent queue management and talking-branch visitor experience." },
  { ar: "استيراد إجازات مؤسسي (Java / Oracle): أتمتة إنتاجية وإصلاحات عاجلة على منصة MTZ بنكية، مع وظائف Task Scheduler وتقارير تشخيص.", en: "Enterprise HR leave import (Java / Oracle): production automation and hotfix delivery on an MTZ banking platform, including Task Scheduler jobs and diagnostic reporting." },
  { ar: "نسيج التحكم بالدخول والحضور: تكاملات Miditec وZKTeco عبر RFID والبصمة وANPR والتعرف على الوجه إلى الموارد البشرية المؤسسية.", en: "Access control & attendance fabric: Miditec and ZKTeco integrations across RFID, biometrics, ANPR, and facial recognition into enterprise HR." },
  { ar: "مقاصة جو: ثقة وتقييم عقاري بمساعدة الذكاء الاصطناعي؛ عمل API إنتاجي لتسليم وثائق المستثمرين.", en: "Muqasa Jo: AI-assisted real-estate trust and valuation; production API work for investor document delivery." },
];
