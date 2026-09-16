# Effects layer — delivery report (branch `feat/effects`)

Delivered against `Portfolio-Armed-Handoff-2026-09-16` (`01_MASTER_IMPLEMENTATION_PROMPT_AR.md`, `02_COMPONENT_AND_PERFORMANCE_SPEC.md`, `03_ACCEPTANCE_AND_EVIDENCE.md`). Not merged, not deployed: the owner review card decides.

## Baseline observed
- Branch created from `main` at `a732738` (clean tree, `git status` empty). Node v24.15.0, npm lockfile respected.
- `npm run verify` on main: lint 0 · typecheck clean · build 51 static pages · Playwright 119 passed / 17 skipped.
- Lighthouse mobile (local `next start`, headless Chrome), JSON in `docs/reports/lighthouse-effects/before-*.json`:

| Page | Perf | A11y | BP | SEO | LCP | CLS | Bytes |
|---|---|---|---|---|---|---|---|
| `/` | 92 | 100 | 100 | 100 | 3309 ms | 0.000 | 398 KB |
| `/journal` | 92 | 100 | 100 | 100 | 3384 ms | 0.000 | 382 KB |
| `/en` | 93 | 100 | 100 | 100 | 3238 ms | 0.000 | 382 KB |
| `/en/journal` | 92 | 100 | 100 | 100 | 3385 ms | 0.000 | 373 KB |

## Changed files
| File | Why |
|---|---|
| `components/effects/effects-gate.ts` | Single flag read (`NEXT_PUBLIC_EFFECTS !== "off"`), no DOM, no secrets. |
| `components/effects/use-media.ts` | One `matchMedia` listener per query via `useSyncExternalStore`; server snapshot `false` so hydration never mismatches. Also `useDocumentVisible`. |
| `components/effects/live-amman-clock.tsx` | `Intl.DateTimeFormat` with `timeZone: "Asia/Amman"`, Latin digits, one timer re-aligned to the wall-clock second, cleared while the tab is hidden, immediate refresh on return. Fixed-width skeleton `--:--:--` on the server; `aria-live="off"`, `aria-label` "Amman time / توقيت عمّان". |
| `components/effects/node-field-canvas.tsx` | Canvas behind the hero: ≤60 nodes desktop / ≤25 phone, DPR capped at 2, `ResizeObserver` debounced 120 ms, `IntersectionObserver` stops the loop off-screen, `visibilitychange` stops it in a hidden tab, passive `pointermove`, colours from `--primary` at 0.25–0.35 alpha, `aria-hidden`, `pointer-events: none`. Reduced motion draws one static frame (`data-mode="static"`, no RAF, no pointer tracking). |
| `components/effects/reading-progress.tsx` | 2 px fixed bar, `transform: scaleX()` only, one RAF per scroll burst, out of flow, `aria-hidden`. |
| `components/effects/hero-effects.tsx` | `next/dynamic` (`ssr: false`) mount points so pages that do not use them ship no effects code. |
| `app/(ar)/page.tsx`, `app/(en)/en/page.tsx` | Mount node field in the hero and the clock next to the eyebrow. |
| `components/journey/journal-page.tsx` | Mount node field + clock in the journal hero and the reading-progress bar (both locales). |
| `tests/e2e/effects.spec.ts` | 24 behavioural tests (desktop + mobile): clock correctness and advance, single clock, canvas attributes, hero text stays above the canvas, loop stops off-screen and in a hidden tab, resumes once, reduced-motion static frame, reading bar only on journal pages, no effects on project pages, project page scripts contain no effects code. |
| `docs/reports/lighthouse-effects/*.json`, `docs/screenshots/effects-*.png` | Evidence. |

No change to `data/`, no new dependency, no Vercel/GitHub configuration change.

## Behavior evidence
- Screenshots `docs/screenshots/effects-{home,journal,en,en-journal}-{390,768,1440}.png` (light theme; the dark theme uses the same `--primary` token and was checked in the axe dark runs).
- RTL/LTR: `/` and `/journal` render RTL with the clock in a `ltr` isolate; `/en` and `/en/journal` render LTR. Verified by the route suite (`lang`/`dir` assertions) and the effects suite.
- Text above canvas: `document.elementFromPoint` at the H1 centre never returns the canvas (asserted on all four pages).

## Quality gates
| Gate | Before | After |
|---|---|---|
| `npm run lint` | 0 errors | 0 errors |
| `npm run typecheck` | clean | clean |
| `npm run build` | 51 pages | 51 pages, no new warnings |
| `npm run test` | 119 passed / 17 skipped | **143 passed / 17 skipped** (119 + 24 effects) |
| axe (8 pages × light/dark) | 0 serious/critical | 0 serious/critical |
| Lighthouse mobile `/` | 92 · CLS 0 | 91 · CLS 0 |
| Lighthouse mobile `/journal` | 92 · CLS 0 | 92 · CLS 0 |
| Lighthouse mobile `/en` | 93 · CLS 0 | 91 · CLS 0 |
| Lighthouse mobile `/en/journal` | 92 · CLS 0 | 92 · CLS 0 |
| Flag `NEXT_PUBLIC_EFFECTS=off` | — | separate build: zero `data-effect` nodes on the four pages; routes + a11y suites 94 passed |

All after-scores stay ≥ 90 and within 2 points of baseline (LCP moved by +50 to +340 ms on a local machine run; accessibility, best practices and SEO unchanged at 100).

## Performance budget
- Hand-written effects source: **4.3 KB gzip** total (budget ≤ 8 KB).
- Built chunks: node field 1.5 KB gzip (lazy, only on the four hero pages), reading bar 0.6 KB gzip (journal pages only); the clock is inlined in the page chunks of the four target pages.
- Total transferred bytes per page: +4 to +8 KB (`/` 398→402 KB, `/journal` 382→389 KB, `/en` 382→388 KB, `/en/journal` 373→381 KB).
- One canvas per hero, one RAF loop, zero frames while off-screen or hidden.

## Safe to say now
- The three components meet the spec's stop/resume, reduced-motion, flag, accessibility and budget rules, verified by the tests above on this commit.
- Optional touches (card tilt, count-up numbers) were **not** implemented: the prompt says to skip them when Lighthouse sits near 90, and the mobile score is 91–92.

## Do not promise yet
- Lighthouse numbers are from a local machine; the Vercel CDN run will differ by a few points either way.
- Dark-theme screenshots of the effects were not captured separately (axe dark runs passed; the canvas uses the dark `--primary` token automatically).

## Rollback
- Fastest: set `NEXT_PUBLIC_EFFECTS=off` in the Vercel project and redeploy (verified to remove every effect with a correct page).
- Full: `git revert` the single commit on `feat/effects`, or do not merge the branch.

## Owner review card
- [ ] قبول ودمج
- [ ] قبول الساعة فقط
- [ ] قبول الساعة + Canvas
- [ ] إعادة بسبب: __________
