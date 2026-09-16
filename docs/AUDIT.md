# Portfolio audit — 2026-09-16

Repository: `C:\Suhib-AI-Delivery-Portfolio` · Next.js 16.3 · Tailwind 4 · Recharts 3 · deployed from GitHub `kazoya/suhib-ai-delivery-portfolio` to Vercel.

## Baseline (before changes)

| Check | Result |
|---|---|
| `npm run lint` (eslint 9) | pass, 0 warnings |
| `npx tsc --noEmit` | pass |
| `npm run build` | pass, all routes static |
| Unit / e2e tests | none exist |
| Lighthouse / axe | never run |
| `public/` | empty — no screenshots, no static images |
| Git | clean on `main` after commit `1fc2f78` |

## Sources of truth used

1. `data/portfolio.ts` — figures copied from the Master Brain export of 2026-09-14.
2. `OUT/*.md` — the eight profile documents rendered under `/docs`.
3. `Suhib_Asrawi_ATS_CV_Updated_Systems.pdf` (owner-supplied, 2026-09-16) — employment history, education, skills, contact channels.
4. `kit/` (git-ignored) — raw project brains; never rendered publicly.

Anything not in these four sources is not published.

## Findings, affected routes, acceptance criteria

| # | Finding | Routes | Acceptance criterion | Status |
|---|---|---|---|---|
| 1 | `/en` renders English content inside `<html lang="ar" dir="rtl">` | `/en` | `/en` served with `lang="en" dir="ltr"`, English header/footer/palette, hreflang both ways | done |
| 2 | `/projects`, `/platform`, `/journal` have no page-level H1 (SectionHeading renders h2) | those routes | exactly one H1 per public route | done |
| 3 | Canonical is `/` for every route (inherited from root layout) | all | self-referencing canonical per route | done |
| 4 | Project pages have no route-specific OG image | `/projects/[id]` | `opengraph-image.tsx` per project | done |
| 5 | `/cv` publicly says email, phone and education must be added before sending; `/docs/cv` has the same placeholders | `/cv`, `/docs/cv` | no owner instructions or placeholders on public pages; verified CV data rendered | done |
| 6 | `/journal` exposes raw chat dialogue, local paths, MCP auth state, Cursor limits, `claude --resume` notes | `/journal` | page rebuilt as an experience journey + curated engineering entries; no session transcript | done |
| 7 | Home leads with 46 projects / 12% average / 99 entries | `/` | hero and KPIs lead with role, outcomes and verified proof; inventory stays on `/platform` labelled as tracked initiatives | done |
| 8 | No real project screenshots anywhere | `/`, `/projects/*` | real captures of the six live sites stored locally, served via `next/image` | done |
| 9 | Agent-centric wording ("Claude built", model names in timelines, "Built with Claude Code" footer) | `/`, `/en`, `/platform`, `/projects/*`, footer | Suhib is the protagonist; AI tools described as governed leverage; timelines show curated milestones without model names | done |
| 10 | "APCA Industrial AI Academy — GIZ" reads as GIZ affiliation | `/`, `/en`, `/projects/giz-apca`, `/docs/*` | renamed to "proposed GIZ-aligned demonstrator" with a disclaimer; no approval or accreditation implied | done |
| 11 | Progress percentages and raw logs read like an internal dashboard | `/projects`, `/projects/*`, `/en` | status labels (Live / Pilot / Prototype / Simulation / Internal) replace percentages on public cards; 3–5 curated milestones per project | done |
| 12 | No contact path beyond GitHub / Mostaql / Baeed | all | contact component with verified channels (email, LinkedIn, GitHub) in hero, header, case-study end, CV, footer | done |
| 13 | No structured data beyond a minimal Person | `/`, `/projects/*` | Person + WebSite + ProfilePage on `/`, CreativeWork per project, ProfilePage on `/cv` | done |
| 14 | No automated verification | repo | Playwright suite: routes 200, one H1, lang/dir, canonical, no placeholders, no overflow at 390px, palette keyboard flow, axe scan | done |
| 15 | Metadata keywords list agent product names ("Claude Code", "Cursor") | root layout | keywords reflect role, region and stacks | done |

## Owner decisions still needed (not invented)

- Public phone number: present in the ATS CV but **not** published on the site. Set `owner.publicPhone = true` in `data/portfolio.ts` to show it.
- Muqasa Jo (`muqasa.jo`) and apcasystems.com are listed as employer sites from the CV; no screenshots were taken of client-owned domains.
- Project1 remains a private repository; a public trimmed mirror is still the strongest missing evidence.
