# خذني بطريقك — Khudhni Bi Tariqak

**Slug:** `khudhni`  
**Status:** Walking skeleton (2026-09-04). **Not launch-ready.** No real payments.

منصة أردنية لمشاركة رحلات **مجدولة ومتكررة** (ممر يومي)، وليست أوبر عند الطلب.

## التشغيل المحلي

PHP المحمول (لأن PHP على ويندوز هنا بلا امتدادات):

```text
C:\ArabBank\khudhni\.tools\php\php.exe
```

اختبارات (SQLite في الذاكرة عبر `phpunit.xml`):

```powershell
Set-Location C:\ArabBank\khudhni\backend
C:\ArabBank\khudhni\.tools\php\php.exe artisan test
```

خادم API على SQLite:

```powershell
Set-Location C:\ArabBank\khudhni\backend
C:\ArabBank\khudhni\.tools\php\php.exe artisan migrate --seed
C:\ArabBank\khudhni\.tools\php\php.exe artisan serve --port=8000
```

لوحة Filament: `/admin` — مستخدم البذرة `admin@khudhni.test` / `ChangeMeNow1!` (غيّره قبل أي بيئة مشتركة).

Flutter (RTL). الافتراضي: دخول حقيقي + بيت راكب/سائق. معمل الممر: `KhudhniApp(openLab: true)` أو زر «معمل الممر» بعد الدخول. التوكن في الذاكرة فقط.

```powershell
Set-Location C:\ArabBank\khudhni\mobile
flutter test
flutter run -d web-server --web-hostname 127.0.0.1 --web-port 5174
```

معمل الممر بالترتيب: إنشاء حسابين → نشر ممر طبربور → طلب ومطابقة → محادثة وحجز → إكمال وتقييم. المحاكي أندرويد يستخدم `http://10.0.2.2:8000`. سطح المكتب/الويب: `http://127.0.0.1:8000`. التوثيق والاشتراك من Filament أو `try-corridor` (خدمات KYC محلياً)، ليس من شيفرة التطبيق.

أتمتة تسجيل سائق وراكب أو أكثر (تعيد الفحص عند الخطأ):

```powershell
Set-Location C:\ArabBank\khudhni
C:\ArabBank\khudhni\.tools\php\php.exe backend\artisan khudhni:try-corridor --riders=2 --retries=3
# أو
.\scripts\try-corridor.ps1 -Riders 2
```

## Docker

`compose.yaml`: MySQL **8.4** على المنفذ **3308** (3307 مشغول بـ XAMPP على هذا الجهاز)، Redis 6379، صورة PHP للتطبيق. **لا** تعمل factory-reset لـ Docker Desktop (ملف بيانات ضخم).

```powershell
Set-Location C:\ArabBank\khudhni
docker compose up -d mysql redis
```

السعر الشهري صف في `subscription_plans` وليس ثابتاً في الشيفرة. المطابقة حتمية في PHP خلف `MatchingRepository`.

## وثائق

- `docs/DECISIONS.md` — ADR Laravel مقابل Next.js
- `docs/MATCHING_ENGINE.md` — اختبارات القبول
- `docs/openapi-v1.yaml` — المسارات المنفَّذة فقط
- `docs/CLAUDE_HANDOFF.md` — بعد اخضرار الاختبارات: أرسل لكلود `git diff` + اختبارات المطابقة فقط
- `brand/` — الشعار والصور وأوامر ChatGPT للفيرال
