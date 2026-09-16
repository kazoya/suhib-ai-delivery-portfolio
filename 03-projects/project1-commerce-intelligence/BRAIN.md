# العقل الهندسي — ذكاء التجارة — Project1 / Project1 Commerce Intelligence

> ملف مُولَّد تلقائياً من `brain.json` + `journal/` — لا تعدّله يدوياً؛ استخدم `mb brain` / `mb log` أو أدوات MCP.

- **ID:** `project1-commerce-intelligence`  |  **الحالة:** مفتوح / Open  |  **التقدّم:** 83%  |  **الأولوية:** 1
- المشروع الافتراضي للتواصل عبر ماستر برين وواجهة Next.js على المنفذ 3002. Dry Run: buyHalt=true، لا نشر حيّ.  
  Default project for Master Brain + Next.js command channel on port 3002. Dry run: buyHalt=true, no live publish.
- **الوسوم:** default, discovered, claude, codex, cursor, node, nextjs
- **آخر تحديث:** 2026-09-14 13:41

## ✓ ما تم إنجازه / Done

- Public bilingual landing + owner console theme/locale (AR RTL, EN LTR, light/dark). Master page RCTC template. Kill-switch UI cannot emit buyHalt:false. <sub>2026-09-10 · `b-38edb31f`</sub>
- Low-cost pack local loop: CSV preview/validate, ops pricing fixture, local draft statuses, TEMPLATE copy. Evidence: pnpm test 40/40, pnpm prove:csv. buyHalt true. HANDOFF for Claude: docs/brain/LOW_COST_HANDOFF.md. — _Claude Fable_ <sub>2026-09-11 · `b-f8f85b13`</sub>
- Owner Readiness Center (Pack V2 S1): dynamic OwnerTasks from DB/connectors/quotes; UI on /overview and /readiness; POST /api/readiness/recheck with same-origin; docs/brain/READINESS_CENTER.md. Evidence: pnpm test 49/49, pnpm prove:readiness. — _Claude Fable_ <sub>2026-09-13 · `b-6e7dfadb`</sub>

## ◎ ما توصلنا إليه / Findings & conclusions

- package.json name=project1-commerce-intelligence version=0.1.0 | README.md excerpt: # Project1 Commerce Intelligence منصة تشغيل خاصة. المستودع: **https://github.com/kazoya/Project1** (خاص على حساب kazoya). التوثيق الحي في `docs/brain/`. تقرير حلقة المحاكاة: `docs/brain/COMMERCE_LOOP.md`. قيود ثابتة: `buyHalt=true`، لا شراء حي، لا إجراء مدفوع، لا كتابة للأسواق بل | AGENTS.md present (600 chars excerpted). | git repository present — _Claude (generic)_ <sub>2026-09-10 · `b-905ac708`</sub>

## ◐ ما نعمل عليه حالياً / In progress now

- Master Brain command channel being wired at /master with requireOwner (NextAuth OWNER_EMAIL). — _Claude (generic)_ <sub>2026-09-10 · `b-766e8dcd`</sub>

## ▹ الخطوات التالية / Next steps

- Owner: put eBay App ID / Cert ID in .env.local then reply `ebay app ids in .env.local`. Keep buyHalt on. — _Claude (generic)_ <sub>2026-09-10 · `b-cfb87f81`</sub>
- S2: Discovery topN by category — SavedSearch/DiscoveryRun over existing DiscoveryConfig; one allowed source + CSV; no fake sales ranks; wire filters into readiness task discovery.category_or_market_missing. — _Claude Fable_ <sub>2026-09-13 · `b-df74b214`</sub>

## ▲ ما نتطلع إلى تحسينه / Improvements we aim for

_لا شيء بعد._

## ✦ مقترحات النماذج (Claude / Opus / Fable…) / Model suggestions (Claude / Opus / Fable…)

- Keep Command Center on /master and commerce docs on /brain so the two minds stay separate. — _Claude Sonnet_ [proposed] <sub>2026-09-10 · `b-80b4cd85`</sub>
- Add Origin/CSRF checks on owner JSON writes (kill-switch, jobs) without lifting buyHalt. — _Claude Fable_ [proposed] <sub>2026-09-10 · `b-ca257827`</sub>
- When posting from Cursor into the collab room, always run pnpm collab list first so ChatGPT/Claude pastes stay in order. — _Claude Fable_ [proposed] <sub>2026-09-11 · `b-6ff4f0fa`</sub>
- When committing quote CSV, look up ProductCandidate by exact csv: dedup source instead of contains(candidateId) so DEMO-001 cannot match DEMO-0010. — _Claude Fable_ [proposed] <sub>2026-09-11 · `b-28e3ad4f`</sub>
- Next revenue gate (still blocked by policy): Production eBay MAD exemption/endpoint, seller account OAuth, explicit owner lift of buyHalt + spend cap > 0, and a non-Shein/Temu supplier with real shipping. Until then keep iterating SANDBOX discovery → quote CSV → LOCAL_READY → simulate-buy only. — _Claude Fable_ [proposed] <sub>2026-09-14 · `b-446c789a`</sub>

## ◆ القرارات المعتمدة / Decisions

_لا شيء بعد._

## ⊘ العوائق / Blockers

_لا شيء بعد._

## ≡ القيود والقواعد / Constraints & rules

- buyHalt=true. Simulation / dry-run only. Do not lift buyHalt. Do not live-publish. eBay keys only in .env.local; never print them. <sub>2026-09-10 · `b-84c622ab`</sub>

## 🗓️ آخر مدخلات سجل التقدّم

- ↗ **2026-09-14 16:19** — Google×Discovery owner zip pack (83%) — _Claude Fable_ · `journal/20260914-1619-google-discovery-owner-zip-pack-a694.md`
- ✦ **2026-09-14 13:40** — Sim loop LOCAL_READY + simulated purchase (82%) — _Claude Fable_ · `journal/20260914-1340-sim-loop-local-ready-simulated-purchase-8b19.md`
- ↗ **2026-09-14 13:30** — Local draft after eBay — costs incomplete (76%) — _Claude Fable_ · `journal/20260914-1330-local-draft-after-ebay-costs-incomplete-f8ae.md`
- ✦ **2026-09-14 13:29** — eBay Sandbox verified — discovery filters saved (75%) — _Claude Fable_ · `journal/20260914-1329-ebay-sandbox-verified-discovery-filters--ae9d.md`
- ↗ **2026-09-13 01:04** — S1 hardened S2 S3 started (70%) — _Claude Fable_ · `journal/20260913-0104-s1-hardened-s2-s3-started-c778.md`
- ↗ **2026-09-13 00:56** — Readiness center S1 delivered (66%) — _Claude Fable_ · `journal/20260913-0056-readiness-center-s1-delivered-240a.md`
- ↗ **2026-09-13 00:38** — AI handoff zip pack for other models — _Claude Fable_ · `journal/20260913-0038-ai-handoff-zip-pack-for-other-models-cdc1.md`
- ↗ **2026-09-11 14:41** — Claude review gaps patched on CSV loop (63%) — _Claude Fable_ · `journal/20260911-1441-claude-review-gaps-patched-on-csv-loop-a922.md`
- ↗ **2026-09-11 14:34** — Low-cost CSV pricing local preview (62%) — _Claude Fable_ · `journal/20260911-1434-low-cost-csv-pricing-local-preview-00a4.md`
- ↗ **2026-09-11 12:18** — Three-agent collab bridge with failover (58%) — _Claude Fable_ · `journal/20260911-1218-three-agent-collab-bridge-with-failover-05f3.md`
- ✦ **2026-09-10 21:59** — Global luxury AR/EN console UI (55%) — _Claude Fable_ · `journal/20260910-2159-global-luxury-ar-en-console-ui-7d93.md`
- ✦ **2026-09-10 15:10** — Master Brain registered as default — _Claude (generic)_ · `journal/20260910-1510-master-brain-registered-as-default-7196.md`
