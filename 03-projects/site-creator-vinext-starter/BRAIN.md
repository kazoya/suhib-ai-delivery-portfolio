# العقل الهندسي — site-creator-vinext-starter / site-creator-vinext-starter

> ملف مُولَّد تلقائياً من `brain.json` + `journal/` — لا تعدّله يدوياً؛ استخدم `mb brain` / `mb log` أو أدوات MCP.

- **ID:** `site-creator-vinext-starter`  |  **الحالة:** مفتوح / Open  |  **التقدّم:** 78%  |  **الأولوية:** 3
- اكتُشف من claude+codex+cursor — C:\Users\pscx9\Documents\Risha360  
  Discovered via claude+codex+cursor — C:\Users\pscx9\Documents\Risha360
- **الوسوم:** discovered, claude, codex, cursor, node, nextjs
- **آخر تحديث:** 2026-09-12 17:55

## ✓ ما تم إنجازه / Done

- عقد celebrity-self-service-roles + تنفيذ BE (أدوار/login/self-update) + قفل FE (Auth/Login/my-celebrities/CelebrityEditPage) على فرع feat/celebrity-self-service-roles — غير منشور بعد — _Claude Fable_ <sub>2026-09-10 · `b-25299d79`</sub>
- Influencer Collab Hub wave 2 (Claude Opus 5): auto-enroll السفراء عبر syncRoles مع إعادة استخدام ReferralCodeService، لوحتا إدارة (مراجعة حسابات الآيبان + طلبات الصرف) مع صلاحيتين جديدتين، PayoutReviewService بآلة حالة مقفولة، وإصلاح احتساب held_for_payout عند الدفع، و6 ملفات اختبارات Feature — لم تُنفَّذ بعد (لا يوجد vendor/ ولا .env في هذه النسخة) <sub>2026-09-12 · `b-b2d606f2`</sub>

## ◎ ما توصلنا إليه / Findings & conclusions

- package.json name=site-creator-vinext-starter version=0.1.0 | README.md excerpt: # دعم ريشة 360 مركز مساعدة عربي يسهّل رحلة الزائر والموهبة والمؤثر والشركة في منصة ريشة 360، مع فصل المحتوى العام عن ملفات الموظفين والإدارة. ## الواجهة العامة - اختيار المسار: زائر، موهبة/مؤثر، أو شركة. - بحث عربي داخل الموضوعات المسموحة للمسار. - خطوات واضحة وروابط مباشرة إلى ص | CLAUDE.md present (600 chars excerpted). | git repository present — _Claude (generic)_ <sub>2026-09-10 · `b-4c5aff42`</sub>
- my-celebrities كان يفلتر فقط بـ created_by فيظهر قائمة فارغة لحساب المشهور؛ صار يشمل celebrities.id = users.celebrity_id، وshow يرفض غير المالك/الرابط — _Claude Fable_ <sub>2026-09-10 · `b-b469b7c9`</sub>

## ◐ ما نعمل عليه حالياً / In progress now

- feat/celebrity-self-service-roles: backend جاهز محلياً؛ frontend شبه جاهز وينتظر قفل واجهة my-celebrities ثم نشر — _Claude Fable_ <sub>2026-09-10 · `b-113555b0`</sub>
- feat/influencer-collab-hub: نواة العروض/الاتفاقيات/المهام/المحفظة/المتابعين ولوحة /influencer — يتبقى أدمن + واجهة شركة + اختبارات — _Claude Fable_ <sub>2026-09-12 · `b-1e267e95`</sub>

## ▹ الخطوات التالية / Next steps

- عند الطلب: commit + PR لـ BE(main) و FE(staging)، ثم Forge migrate + deploy لأدوار celebrity/talent ودخول المشاهير والتعديل الذاتي — _Claude Fable_ <sub>2026-09-10 · `b-d845e368`</sub>
- تشغيل composer install + .env محلي ثم php artisan test --filter=InfluencerCollab للتحقق من اختبارات Influencer Collab Hub قبل أي PR <sub>2026-09-12 · `b-1204dd3b`</sub>

## ▲ ما نتطلع إلى تحسينه / Improvements we aim for

_لا شيء بعد._

## ✦ مقترحات النماذج (Claude / Opus / Fable…) / Model suggestions (Claude / Opus / Fable…)

_لا شيء بعد._

## ◆ القرارات المعتمدة / Decisions

_لا شيء بعد._

## ⊘ العوائق / Blockers

_لا شيء بعد._

## ≡ القيود والقواعد / Constraints & rules

_لا شيء بعد._

## 🗓️ آخر مدخلات سجل التقدّم

- ↗ **2026-09-13 13:19** — حزمة إحاطة المدير المضغوطة — _Claude Fable_ · `journal/20260913-1319-حزمة-إحاطة-المدير-المضغوطة-71e5.md`
- ↗ **2026-09-13 12:37** — Mint missing promo for innervision — _Claude Fable_ · `journal/20260913-1237-mint-missing-promo-for-innervision-0408.md`
- ↗ **2026-09-12 18:22** — Push influencer hub + WIP paid slots (78%) — _Claude Fable_ · `journal/20260912-1822-push-influencer-hub-wip-paid-slots-64a5.md`
- ↗ **2026-09-12 18:13** — Claude Code trust + collab hub wave (72%) — _Claude Fable_ · `journal/20260912-1813-claude-code-trust-collab-hub-wave-cde7.md`
- ↗ **2026-09-12 17:55** — Influencer Collab Hub — لوحات الإدارة والاختبارات والتسجيل التلقائي للسفراء (88%) — _Claude Opus_ · `journal/20260912-1755-influencer-collab-hub-لوحات-الإدارة-والا-5ea4.md`
- ↗ **2026-09-12 17:43** — بدء منظومة لوحة المؤثر والتعاون (45%) — _Claude Fable_ · `journal/20260912-1743-بدء-منظومة-لوحة-المؤثر-والتعاون-40d9.md`
- ✦ **2026-09-10 23:23** — نشر أدوار المشاهير على الإنتاج (85%) — _Claude Fable_ · `journal/20260910-2323-نشر-أدوار-المشاهير-على-الإنتاج-4aa4.md`
- ↗ **2026-09-10 19:59** — أدوار الدخول الذاتي للمشاهير — تنفيذ محلي (55%) — _Claude Fable_ · `journal/20260910-1959-أدوار-الدخول-الذاتي-للمشاهير-تنفيذ-محلي-4abe.md`
- ✦ **2026-09-10 17:54** — نشر إصلاح تفعيل الحساب على الإنتاج (0%) — _Claude Fable_ · `journal/20260910-1754-نشر-إصلاح-تفعيل-الحساب-على-الإنتاج-add5.md`
- ↗ **2026-09-10 17:24** — إصلاح تفعيل الحساب بعد الموافقة (0%) — _Claude Fable_ · `journal/20260910-1724-إصلاح-تفعيل-الحساب-بعد-الموافقة-5552.md`
- ↗ **2026-09-10 17:13** — تحديث نص ظهور الزوج/الزوجة في تسجيل المواهب (0%) — _Claude Fable_ · `journal/20260910-1713-تحديث-نص-ظهور-الزوج-الزوجة-في-تسجيل-المو-8f19.md`
