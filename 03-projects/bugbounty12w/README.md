# Bug Bounty 12-Week → HackerOne Top 1000

**Source of truth:** `curriculum/bug_bounty_12w.json`  
**Integrations:** OpenClaw (coach) + GreatMinds (tasks/habits)

---

## Quick links

- **Authorized testing prompts (reduce refusals):** `tools/AUTHORIZED_TESTING_PROMPTS.md`
- **Which Ollama tool?** `tools/OLLAMA_TOOLS_PICK.md`
- **Local Model Provider (recommended local chat):** `tools/LOCAL_MODEL_PROVIDER_SETUP.md`
- **Ollama View (simple chat UI):** `tools/OLLAMA_VIEW_SETUP.md`
- **Ollama Autocoder (inline completion):** `tools/OLLAMA_AUTOCODER_SETUP.md`
- **Cursor + Ollama (local DeepSeek):** `tools/CURSOR_OLLAMA_SETUP.md`
- **Engagement playbook (PM / field readiness):** `ENGAGEMENT_PLAYBOOK.md`
- **Project kickoff checklist:** `PROJECT_KICKOFF_CHECKLIST.md`
- **Report templates:** `REPORT_TEMPLATES.md`
- **BountyBrain MVP:** `bountybrain/README.md` (local-only Program Policy -> Score -> Engagement Plan -> Report Draft -> Learning Update)
- **BountyBrain Web Command Center:** `bountybrain_web/README.md` (Next.js dashboard for target intake, gates, model routing, agents, test catalog, DB recommendations)
- **Compliant bounty workflow:** `bountybrain/docs/COMPLIANT_BOUNTY_WORKFLOW.md`
- **Bugcrowd ranking workflow:** `tools/BUGCROWD_RANKING_WORKFLOW.md`
- **BountyBrain Phase 1 storage:** SQLite, approvals, audit log, model/agent run records via `python -m bountybrain.app.cli db status`
- Full index: https://portswigger.net/web-security/all-labs
- **Bottom→Top queue (53 labs):** `portswigger_bottom_to_top_queue.md`
- SQLi + session log: `portswigger_sqli_day1_session.md`
- **Web LLM #1 runbook:** `web_llm_scanner_bypass_runbook.md`
- **Web LLM Phase A (#1–#8):** `web_llm_phase_a_cheatsheet.md`
- **Automation rules:** `PORTSWIGGER_AUTOMATION_RULES.md` (requests first; Chrome/Edge/CDP — **no Chromium download**)

---

## Structure

```
bug_bounty_12w/
├── curriculum/bug_bounty_12w.json    ← master curriculum
├── openclaw/
│   ├── skills/bug-bounty-12w/SKILL.md
│   ├── workspace/                    ← AGENTS, USER, SOUL, templates
│   └── install-openclaw-pack.ps1
├── sync_to_greatminds.ps1
├── tools/
│   ├── portswigger_http.py / portswigger_browser.py
│   ├── llm_scanner_bypass_requests.py   ← try first
│   ├── llm_scanner_bypass_playwright.py ← Chrome/Edge/CDP fallback
│   ├── run_llm_lab1.ps1 / start-chrome-cdp.ps1
│   ├── wcd_origin_norm_playwright.py
│   └── portswigger_lab_runner.py
└── README.md
```

---

## Rules (strict)

| Rule | Penalty |
| --- | --- |
| No side projects | → `defer.md` |
| One question per message | Coach ignores extras |
| 2h daily minimum | Timer tracking |
| Friday weekly report | No next week until done |
| Scope only | Stop program if violated |
| No HackerOne submit weeks 1-8 | Training reports only |

---

## OpenClaw

```powershell
cd C:\ArabBank\bug_bounty_12w\openclaw
powershell -ExecutionPolicy Bypass -File install-openclaw-pack.ps1
```

Then configure cron (Telegram/Discord) — see script output.

Set `start_date` in `~/.openclaw/workspace/USER.md`.

---

## GreatMinds

```powershell
powershell -File C:\ArabBank\bug_bounty_12w\sync_to_greatminds.ps1
cd C:\greatminds\betterself_os
flutter pub get
flutter run
```

Imports: **72 tasks** (12 weeks + 60 days), **4 habits**, **2 insights**, **subtasks** with AI prompts.

Filter: Priority space **"Bug Bounty 12w"**.

---

## Update curriculum

1. Edit `curriculum/bug_bounty_12w.json`
2. Run `sync_to_greatminds.ps1`
3. Re-copy to OpenClaw workspace curriculum folder (or re-run install script)

---

## Psychology & marketing (coach persona)

- **Identity:** Mobile + API Fintech specialist
- **Metric month 1-2:** labs completed, not reputation
- **Normalize:** zero valid reports in first 90 days is common

---

## Legal

Training platforms + in-scope HackerOne programs only. ArabBank static analysis is separate authorized workflow.
