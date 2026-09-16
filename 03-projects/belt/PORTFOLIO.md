# Belt — بوابة واتساب

بنية P1: FIFO worker، حجز إنشاء/تأكيد، معرفة عبر `BeltKnowledgeClient` → SmartHelp.

## لا تكسر

قفل `qms_inbound_fifo` وترتيب الصادر قبل وارد جديد.

## التحويل البشري

`HumanHandoffService` + جدول `human_handoff_queue`. صندوق المشغّل:

```powershell
php flutter_sms_gateway\backend\bin\handoff-inbox.php
```

اختبارات: `php flutter_sms_gateway\backend\tests\unit.php`

التقرير: `%USERPROFILE%\.cursor\portfolio\briefs\c-belt.yaml`
