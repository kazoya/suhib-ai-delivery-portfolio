# Smart Agent Hub - منصة إدارة الوكلاء الذكية

منصة متكاملة لإدارة وكلاء الذكاء الاصطناعي الذين يعملون كوسطاء بين مقدمي الخدمات والعملاء، مع تكامل واتساب وقاعدة بيانات متقدمة.

## 🚀 المميزات الرئيسية

### للآدمن
- ✅ لوحة تحكم شاملة لإدارة الوكلاء
- ✅ إنشاء وتعديل الوكلاء مع قواعد سلوك مخصصة
- ✅ ربط الوكلاء بأرقام واتساب محددة
- ✅ إدارة المستخدمين والطلبات
- ✅ إحصائيات مفصلة عن أداء النظام

### للمستخدمين
- ✅ واجهة سهلة لاختيار نوع الخدمة
- ✅ دردشة مباشرة مع الوكلاء الذكيين
- ✅ تتبع حالة الطلبات والمواعيد
- ✅ استقبال ردود من مقدمي الخدمات عبر واتساب

### التقنيات المستخدمة
- ✅ **Next.js 14** - إطار عمل React متقدم
- ✅ **Supabase** - قاعدة بيانات وخدمات مصادقة
- ✅ **OpenAI API** - ذكاء اصطناعي للردود الذكية
- ✅ **WhatsApp API** - تكامل مع واتساب (Twilio/Meta)
- ✅ **Tailwind CSS** - تصميم عصري ومتجاوب
- ✅ **TypeScript** - أمان في الكود

## 📋 متطلبات التشغيل

- Node.js 18+ 
- حساب Supabase
- مفتاح OpenAI API
- حساب Twilio أو Meta للواتساب

## 🛠️ التثبيت والإعداد

### 1. استنساخ المشروع
```bash
git clone <repository-url>
cd smart-agent-hub
npm install
```

### 2. إعداد متغيرات البيئة
انسخ ملف `env.example` إلى `.env.local` واملأ القيم:

```bash
cp env.example .env.local
```

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# WhatsApp API Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. إعداد قاعدة البيانات
1. افتح Supabase Dashboard
2. اذهب إلى SQL Editor
3. انسخ محتوى ملف `supabase-schema.sql` والصقه
4. اضغط Run لتنفيذ الكود

### 4. تشغيل المشروع
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## 📱 كيفية الاستخدام

### للمستخدمين العاديين
1. سجل حساب جديد أو سجل الدخول
2. اختر نوع الخدمة المطلوبة
3. ابدأ المحادثة مع الوكيل الذكي
4. تابع حالة طلبك

### للآدمن
1. سجل دخول بحساب آدمن
2. اذهب إلى لوحة التحكم
3. أضف وكلاء جدد أو عدل الموجودين
4. راقب الطلبات والرسائل

## 🗄️ هيكل قاعدة البيانات

### الجداول الرئيسية
- **users** - بيانات المستخدمين
- **agents** - الوكلاء الذكيين
- **providers** - مقدمي الخدمات
- **requests** - الطلبات والمواعيد
- **messages** - الرسائل والمحادثات
- **availability** - المواعيد المتاحة

## 🔧 التخصيص

### إضافة وكيل جديد
1. اذهب إلى لوحة التحكم > إدارة الوكلاء
2. اضغط "إضافة وكيل جديد"
3. املأ البيانات المطلوبة
4. اكتب قواعد السلوك (Prompt) للوكيل
5. احفظ الوكيل

### تخصيص قواعد السلوك
يمكنك تخصيص كيفية تصرف كل وكيل من خلال تعديل حقل "قواعد السلوك" في قاعدة البيانات.

## 🚀 النشر

### Vercel (مستحسن)
1. اربط المشروع بـ GitHub
2. اربط بـ Vercel
3. أضف متغيرات البيئة في Vercel
4. انشر المشروع

### خوادم أخرى
```bash
npm run build
npm start
```

## 🔒 الأمان

- ✅ Row Level Security (RLS) مفعل
- ✅ مصادقة آمنة عبر Supabase Auth
- ✅ فصل كامل بين واجهة الآدمن والمستخدمين
- ✅ تشفير البيانات الحساسة

## 📞 الدعم

للمساعدة أو الاستفسارات:
- 📧 البريد الإلكتروني: support@smartagenthub.com
- 📱 الواتساب: +966501234567

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى:
1. عمل Fork للمشروع
2. إنشاء فرع للميزة الجديدة
3. عمل Commit للتغييرات
4. عمل Pull Request

---

**ة**
