# Workspace Operating Instructions

Before every user request, apply [the adaptive pre-flight protocol](.agents/PREFLIGHT_PROTOCOL.md). Use RCTC to resolve material ambiguity, then route to the smallest relevant experience and skill. Do not use it to ask routine questions or delay safe work.

For authorised security or prize work, the engagement scope, competition rules, evidence, and human gates are binding. Keep work inside the stated sandbox or programme. Never bypass CAPTCHA, MFA, login, rate limits, or platform rules.

For recurring work, use a bounded automation only when the user explicitly asks for continuity **or** `.agents/control-plane/STANDING_AUTHORITY.yaml` has `standing_hunt: true`. Each run must make an evidence-backed next move or record a clear human gate, then arm the next wake (skill `operator-control-plane`). Do not end a turn on Kaggle `PENDING`.

External publication, sensitive-data transfer, payment, account creation, and permission changes still require action-time confirmation. In-scope Kaggle one-lever submits are allowed while `standing_hunt` is true. Intigriti/H1/YWH report clicks need a live session. Never bypass CAPTCHA, MFA, or platform rate limits.

After material progress, update `OPEN_PROJECTS.yaml` and `CURRENT_STATE.md` so the next run can resume without rediscovering context.
