import type { AddedLocale } from "@/lib/i18n";
import type { Project } from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";

/** One-line case summaries. English uses `shortEn`; Arabic uses `short`. */
const summaries: Record<string, Record<AddedLocale, string>> = {
  project1: {
    fa: "شبیه‌ساز تجارت فرامرزی با حلقهٔ کامل از کشف تا خرید شبیه‌سازی‌شده، و کلید توقفی که رابط کاربری نمی‌تواند آن را بردارد.",
    tr: "Keşiften simüle satın almaya tam döngülü sınır ötesi ticaret simülatörü; arayüzün kaldıramadığı bir durdurma anahtarı var.",
    ur: "سرحد پار تجارت کا سمیولیٹر: دریافت سے نقلی خریداری تک مکمل حلقہ، اور ایک اسٹاپ سوئچ جسے انٹرفیس نہیں ہٹا سکتا۔",
    ru: "Симулятор трансграничной торговли с полным циклом от поиска до имитации покупки и стоп-краном, который интерфейс не может снять.",
  },
  "master-brain": {
    fa: "سکوی پیگیری نمونه‌کار بدون وابستگی: یک کاتالوگ عملیات به‌صورت ابزار MCP، HTTP API و CLI، با ذهن مهندسی برای هر پروژه و گزارش‌ها.",
    tr: "Bağımlılıksız portföy platformu: tek işlem kataloğu MCP aracı, HTTP API ve CLI olarak; her projede bir mühendislik zihni ve raporlar.",
    ur: "بغیر انحصار کے پورٹ فولیو پلیٹ فارم: ایک آپریشن کیٹلاگ بطور MCP، HTTP API اور CLI، ہر منصوبے کا انجینئرنگ ذہن اور رپورٹس۔",
    ru: "Платформа портфеля без зависимостей: один каталог операций как MCP, HTTP API и CLI, инженерная память каждого проекта и отчёты.",
  },
  risha360: {
    fa: "سکوی استعداد Laravel + Next.js: نقش‌های سلف‌سرویس مشاهیر در تولید، و مرکز همکاری اینفلوئنسرها با ماشین حالت قفل‌شدهٔ پرداخت.",
    tr: "Laravel + Next.js yetenek platformu: ünlülerin self-servis rolleri üretimde; kilitli ödeme durum makinesiyle influencer işbirliği merkezi.",
    ur: "Laravel + Next.js ٹیلنٹ پلیٹ فارم: مشاہیر کے سیلف سروس کردار پروڈکشن میں، اور انفلوئنسر مرکز ایک مقفل ادائیگی اسٹیٹ مشین کے ساتھ۔",
    ru: "Платформа талантов на Laravel и Next.js: роли знаменитостей в продакшене и центр сотрудничества инфлюенсеров с заблокированным автоматом выплат.",
  },
  factories: {
    fa: "دو سایت کارخانهٔ اردنی با Next.js، زنده روی Vercel در یک روز، با جریان کپی → بهبود → بازبینی → ادغام → انتشار.",
    tr: "İki Ürdün fabrikası sitesi Next.js ile bir gün içinde Vercel'de yayında; akış: kopyala → iyileştir → incele → birleştir → yayınla.",
    ur: "دو اردنی فیکٹری سائٹس Next.js میں، ایک دن میں Vercel پر لائیو؛ کاپی → بہتری → جائزہ → مرج → شائع۔",
    ru: "Два сайта иорданских заводов на Next.js, за сутки на Vercel: копия → улучшение → проверка → слияние → публикация.",
  },
  baraah: {
    fa: "دموی فروشگاه ممتاز و دوزبانه با Next.js 16 برای محصولات غذایی دستی، با دو گذر امنیتی پیش از هر استفادهٔ تولیدی.",
    tr: "Zanaat gıda ürünleri için iki dilli Next.js 16 premium mağaza demosu; üretime geçmeden önce iki güvenlik geçişi.",
    ur: "دست ساز غذائی مصنوعات کے لیے دو لسانی Next.js 16 پریمیم اسٹور ڈیمو، پیداوار سے پہلے دو سیکیورٹی پاس۔",
    ru: "Двуязычное премиум-демо магазина на Next.js 16 для ремесленных продуктов, с двумя проверками безопасности до любого продакшена.",
  },
  "giz-apca": {
    fa: "مُظهِر آموزشی دوزبانه برای TVET: تشخیص → مسیر → سناریو → ارزیابی ایمنی غیرقابل جبران → گذرنامهٔ مهارت. مُظهِر پیشنهادی هم‌سو با اهداف اعلام‌شدهٔ GIZ، نه محصول GIZ.",
    tr: "İki dilli TVET göstericisi: tanı → yol → senaryo → telafi edilemez güvenlik değerlendirmesi → beceri pasaportu. GIZ'in açıkladığı hedeflerle hizalı önerilen bir gösterici; bir GIZ ürünü değil.",
    ur: "دو لسانی TVET مظہر: تشخیص → راستہ → منظر → ناقابلِ تلافی حفاظتی جائزہ → مہارت پاسپورٹ۔ GIZ کے بیان کردہ مقاصد کے ساتھ تجویز کردہ مظہر، GIZ کی مصنوعہ نہیں۔",
    ru: "Двуязычный демонстратор TVET: диагностика → маршрут → сценарий → некомпенсируемая оценка безопасности → паспорт навыков. Предлагаемый демонстратор, согласованный с заявленными целями GIZ, а не продукт GIZ.",
  },
  wathiqa: {
    fa: "عاملی که PDF می‌خواند و به سبک گفت‌وگوی واتساپ پاسخ می‌دهد، با مدل اشتراک منتشر شده است.",
    tr: "PDF okuyup WhatsApp tarzı bir konuşmayla yanıtlayan ajan; abonelik modeliyle yayında.",
    ur: "ایک ایجنٹ جو PDF پڑھ کر واٹس ایپ طرز کی گفتگو میں جواب دیتا ہے، سبسکرپشن ماڈل کے ساتھ شائع۔",
    ru: "Агент читает PDF и отвечает в разговоре в стиле WhatsApp; опубликован с моделью подписки.",
  },
  ghayari: {
    fa: "بازار قطعات یدکی با اولویت بیروت: جست‌وجوی OEM، مقایسهٔ قطعه + ارسال = جمع، و سفارش COD با جدول زمانی واقعی.",
    tr: "Beyrut öncelikli yedek parça pazarı: OEM arama, parça + teslimat = toplam karşılaştırması, gerçek zaman çizelgeli COD siparişleri.",
    ur: "بیروت پہلے آٹو پارٹس مارکیٹ: OEM تلاش، پرزہ + ڈلیوری = کل موازنہ، حقیقی ٹائم لائن کے ساتھ COD آرڈر۔",
    ru: "Маркетплейс автозапчастей с приоритетом Бейрута: поиск OEM, сравнение «деталь + доставка = итог», заказы COD с реальным графиком.",
  },
  "nexa-ai-agents": {
    fa: "سکوی نمایش و فروش دوزبانه برای شش عامل هوش مصنوعی: دموی صوتی، گفت‌وگوی زنده، بسته‌ها، ماشین‌حساب پیشنهاد و حاشیه، و ماشین‌حساب بازده.",
    tr: "Altı yapay zeka ajanı için iki dilli demo ve satış platformu: sesli demolar, canlı sohbet, paketler, teklif-marj hesaplayıcı ve ROI hesaplayıcı.",
    ur: "چھ اے آئی ایجنٹس کے لیے دو لسانی ڈیمو اور سیلز پلیٹ فارم: صوتی ڈیمو، لائیو چیٹ، پیکجز، کوٹ اور مارجن کیلکولیٹر، اور ROI کیلکولیٹر۔",
    ru: "Двуязычная витрина и продажи для шести ИИ-агентов: голосовые демо, живой чат, пакеты, калькулятор сметы и маржи и калькулятор ROI.",
  },
  smarthelp: {
    fa: "سیستم کاملاً محلی PDF → کمک معنایی: FTS5 + FAISS + Ollama با استناد به شمارهٔ صفحه.",
    tr: "Tamamen yerel PDF → anlamsal yardım sistemi: FTS5 + FAISS + Ollama, sayfa numarasıyla alıntı.",
    ur: "مکمل مقامی PDF → معنوی مدد کا نظام: FTS5 + FAISS + Ollama، صفحہ نمبر کے ساتھ حوالہ۔",
    ru: "Полностью локальная система PDF → семантическая справка: FTS5 + FAISS + Ollama с цитатой по номеру страницы.",
  },
  "betterself-os": {
    fa: "دستیار اولویت دوزبانه که فهرست پراکنده را به یک گام بعدی روشن تبدیل می‌کند؛ حریم خصوصی پیش‌فرض است و رضایت آموزش هوش مصنوعی جداگانه.",
    tr: "Dağınık görev listesini tek net sonraki adıma çeviren iki dilli öncelik asistanı; gizlilik varsayılan, yapay zeka eğitim onayı ayrı.",
    ur: "دو لسانی ترجیحی معاون جو بکھری فہرست کو ایک واضح اگلے قدم میں بدلتا ہے؛ رازداری طے شدہ ہے اور اے آئی تربیت کی رضامندی الگ۔",
    ru: "Двуязычный помощник приоритетов: рассеянный список дел становится одним ясным следующим шагом. Приватность по умолчанию, согласие на обучение ИИ отдельно.",
  },
  "expertech-control": {
    fa: "کنسول عملیات محلی و دوزبانه برای نوبت، تقویم، مشتریان، پیش‌فاکتور، تبلیغات، محصولات، فاکتور و صندوق.",
    tr: "Randevu, takvim, müşteriler, teklifler, promosyonlar, ürünler, faturalar ve satış noktası için iki dilli yerel operasyon konsolu.",
    ur: "ملاقاتوں، کیلنڈر، گاہکوں، کوٹس، پروموشنز، مصنوعات، انوائس اور پوائنٹ آف سیل کے لیے دو لسانی مقامی آپریشن کنسول۔",
    ru: "Двуязычная локальная консоль: записи, календарь, клиенты, сметы, акции, товары, счета и касса.",
  },
  khudhni: {
    fa: "اسکلت راه رفتن برای سکوی اردنی اشتراک مسیرهای روزانهٔ تکراری: Laravel + Filament در پشت صحنه و اپ Flutter با RTL.",
    tr: "Ürdün'de tekrarlayan günlük güzergâh paylaşımı için yürüyen iskelet: Laravel + Filament arka uç ve Flutter RTL uygulaması.",
    ur: "اردن میں دہرائے جانے والے روزانہ راستوں کے اشتراک کے لیے واکنگ سکیلیٹن: Laravel + Filament بیک اینڈ اور Flutter RTL ایپ۔",
    ru: "Каркас иорданской платформы совместных повторяющихся маршрутов: бэкенд Laravel + Filament и приложение Flutter RTL.",
  },
  "ghina-media-concept": {
    fa: "تصور مستقل و عربی برای غنی مدیا: پنج پاسخ، برنامهٔ ۳۰ روزه و تقویم و خلاصه می‌سازد و هر دلیل به یک پاسخ وصل است. سایت رسمی شرکت نیست.",
    tr: "Ghina Media için bağımsız Arapça konsept: beş yanıt, açıklamalı 30 günlük plan, takvim ve özet üretir. Şirketin resmi sitesi değildir.",
    ur: "غنی میڈیا کے لیے آزاد عربی تصور: پانچ جواب ایک وضاحتی 30 دن کا منصوبہ، کیلنڈر اور خلاصہ بناتے ہیں۔ کمپنی کی سرکاری سائٹ نہیں۔",
    ru: "Независимый арабский концепт для Ghina Media: пять ответов дают пояснённый план на 30 дней, календарь и бриф. Это не официальный сайт компании.",
  },
  "quran-pattern-lab": {
    fa: "پیش‌نمایش پژوهشی که الگوهای نامزد میان متن قرآن و عدد را با شاهد لفظی از تنزیل منتشر می‌کند. ادعای اعجاز نیست.",
    tr: "Kur'an metni ile sayılar arasında aday örüntüleri, Tanzil'den aynen alıntıyla yayımlayan araştırma önizlemesi. Mucize iddiası değildir.",
    ur: "تحقیقی پیش منظر جو قرآن کے متن اور اعداد کے درمیان امیدوار نمونے تنزیل کے لفظی ثبوت کے ساتھ شائع کرتا ہے۔ اعجاز کا دعویٰ نہیں۔",
    ru: "Исследовательский предпросмотр: кандидаты в закономерности между текстом Корана и числами с дословным свидетельством Tanzil. Это не заявление о чуде.",
  },
  "abu-abdullah-fabrics": {
    fa: "تصور غیررسمی و دوزبانه برای پارچه: پنج پرسش نمونه‌های برچسب‌خورده را رتبه می‌دهد، سپس درخواست نمونه واتساپ را باز می‌کند.",
    tr: "Gayriresmi iki dilli kumaş bulucu konsepti: beş soru etiketli örnekleri sıralar, ardından numune isteği WhatsApp'ı açar.",
    ur: "غیر سرکاری دو لسانی کپڑے کا تصور: پانچ سوال لیبل شدہ نمونے ترتیب دیتے ہیں، پھر نمونہ کی درخواست واٹس ایپ کھولتی ہے۔",
    ru: "Неофициальный двуязычный концепт подбора ткани: пять вопросов ранжируют подписанные образцы, затем запрос образца открывает WhatsApp.",
  },
  emazad: {
    fa: "ویترین عربی برای مزایده‌های اردن. مزایده‌های نمایشی نمونه هستند؛ پیشنهاد زنده روی سکوی رسمی می‌ماند.",
    tr: "Ürdün müzayedeleri için Arapça vitrin. Listelenen müzayedeler örnektir; canlı teklif resmi platformda kalır.",
    ur: "اردن کی نیلامیوں کے لیے عربی شوکیس۔ دکھائی گئی نیلامیاں نمونے ہیں؛ لائیو بولی سرکاری پلیٹ فارم پر رہتی ہے۔",
    ru: "Арабская витрина аукционов Иордании. Показанные аукционы — образцы; живые ставки остаются на официальной платформе.",
  },
  "al-mohannad-plastic": {
    fa: "تصور مستقل برای کاتالوگ و نمای خودارزیابی کیفیت یک کارخانهٔ پلاستیک در سحاب. گواهی ISO صادرشده نیست و سایت شرکت نیست.",
    tr: "Sahab'daki bir plastik ambalaj fabrikası için bağımsız katalog ve öz değerlendirme kalite görünümü konsepti. Verilmiş bir ISO sertifikası değildir ve şirket sitesi değildir.",
    ur: "سحاب میں پلاسٹک پیکجنگ فیکٹری کے لیے آزاد کیٹلاگ اور خود تشخیصی معیار کا تصور۔ جاری شدہ ISO سرٹیفکیٹ نہیں اور کمپنی کی سائٹ نہیں۔",
    ru: "Независимый концепт каталога и самооценки качества пластиковой фабрики в Сахабе. Это не выданный сертификат ISO и не сайт компании.",
  },
};

export function projectSummary(project: Project, locale: Locale): string {
  if (locale === "ar") return project.short;
  if (locale === "en") return project.shortEn;
  return summaries[project.id]?.[locale] ?? project.shortEn;
}

export function projectTitle(project: Project, locale: Locale): string {
  return locale === "en" || locale === "tr" || locale === "ru" ? project.nameEn : project.name;
}
