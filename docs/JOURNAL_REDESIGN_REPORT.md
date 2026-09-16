# Journal redesign and portfolio repositioning — report

Date: 2026-09-16 · Repository: `kazoya/suhib-ai-delivery-portfolio` · Live: https://suhib-ai-delivery-portfolio.vercel.app · Journal: https://suhib-ai-delivery-portfolio.vercel.app/journal

## 1. Before-state problems

| Area | Problem | Evidence |
|---|---|---|
| Positioning | Hero presented Suhib as "Software Engineer · AI-Agent-Driven Delivery"; agents (Cursor, Claude Code, Codex) were the protagonists of the copy, timelines and footer ("Built with Claude Code"). | `docs/screenshots/before-home-1440.png` |
| Metrics | Home led with 46 tracked projects, 12% average completion and 99 progress entries. `/en` said "about 35 of the 46 tracked projects sit at 0%". | `before-home-*.png`, old `data/portfolio.ts` KPIs |
| Journal | `/journal` was a raw chat transcript: "the folder was empty", local desktop paths, MCP sign-in states, Cursor usage-limit discussion, `claude --resume` instructions. | `before-journal-1440.png` |
| Locale | `/en` rendered English inside `<html lang="ar" dir="rtl">` with Arabic navigation and footer. | `before-en-*.png` |
| Semantics / SEO | `/projects`, `/platform`, `/journal` had no H1 (SectionHeading rendered h2). Every route inherited canonical `/`. Project pages had no route-specific OG image. Keywords listed agent product names. | old `app/layout.tsx`, `section-heading.tsx` |
| CV | `/cv` and `/docs/cv` said "add email and phone before sending" and "complete university and major before sending". | `before-cv-1440.png` |
| Claims | "APCA Industrial AI Academy — GIZ" read as GIZ affiliation. | old project name |
| Evidence | No real screenshots anywhere; `public/` was empty. Raw progress percentages and model-attributed log entries on every project page. | old `app/projects/[id]/page.tsx` |
| Contact | Only GitHub / Mostaql / Baeed; no email, no LinkedIn, no CTA. | old footer |
| Verification | No tests, no axe, no Lighthouse. | `docs/AUDIT.md` baseline |

## 2. Changes made

### Data and content
- `data/journey.ts` (new): four eras, ten chapters with an **engineering memory** and a **lesson that survived** each, the seven-step method (then vs. now), seven technology-generation tracks with `current` flags, the 30-second recruiter view, seven client-mode problems routed to proof, five fully structured engineering-journal entries, and the verified experience / education / skills from the ATS CV of 2026-09-16.
- `data/portfolio.ts`: owner repositioned as Senior Technology Consultant · Solutions Architect; verified contact channels; proof-based KPIs; per-project `statusKey`, `role`, `outcome`, `evidenceType`, `milestones`, `security`, `limitation`, `screenshots`; GIZ academy renamed to a proposed GIZ-aligned demonstrator with a disclaimer; reviewers described as independent rather than by model name; Java / C# / SQL Server / Oracle re-rated as current core skills (they are current per the CV).
- `OUT/*.md`: CV placeholders replaced with verified data; GIZ wording qualified in every document; LinkedIn bios reworded so Suhib is the protagonist.

### Routes and layout
- `app/(ar)` and `app/(en)/en` route groups, each with its own root layout, sharing `components/layout/root-shell.tsx`. `/en` and `/en/journal` are now true `lang="en" dir="ltr"` pages with English header, footer, command palette and hreflang links both ways.
- `/journal` and `/en/journal`: experience journey (hero with thesis and era pills → recruiter view → chapter map → chapters grouped by era → "The stack changed. The method didn't." → technology generations with filters → "What do you need?" → five journal entries → truthfulness note → contact). The old transcript is gone.
- Home: hero leads with role, outcomes and enterprise background; real screenshot beside it; proof KPIs; journey teaser; six featured case studies with role / outcome / evidence; enterprise background; how-I-work rewritten around Suhib's decisions; contact section.
- `/projects`: H1; cards show status, one-line problem, role, outcome, evidence type, stack and a cover shot. Detail pages are case studies: role and verified outcome, real screenshots, what Suhib implemented or led, security controls, evidence, current limitation, curated milestones, live-site button, contact CTA.
- `/cv`: structured A4 CV from verified data; email, LinkedIn, GitHub, employer sites; no placeholders; print styles.
- `/platform`: H1; reframed as governance of 46 tracked initiatives; roles table led by the owner with generic agent roles; by-model chart removed from the public view.
- Command palette: focus trap, combobox semantics, chapter search, English items on `/en`.
- Contact CTA component in hero, header, every case study, CV, journal and footer. `mailto:` with subject presets; phone stays hidden unless `owner.publicPhone` is set.

### SEO / structured data
- Unique titles and descriptions per route; self-referencing canonicals; hreflang on the four localised roots; `/og` site image referenced from both layouts; per-project `opengraph-image.tsx`; sitemap includes `/en/journal`.
- JSON-LD: Person (with worksFor, alumniOf, knowsAbout, sameAs), WebSite, ProfilePage on `/`, `/en`, `/journal`, `/en/journal`, `/cv`; SoftwareApplication / CreativeWork per project.
- Keywords now: Suhib Asrawi, Solutions Architect Jordan, Systems Integration, Enterprise Integration, AI Automation, AI Agents, Java, C#, SQL Server, Oracle, GCC technical delivery.

## 3. UX rationale
- A recruiter should answer "who, what now, how senior, which systems, what can he solve, where, how to contact" in 30 seconds, so the recruiter view sits directly under the journal hero and the contact CTA repeats at the end of every major page.
- Chapters are grouped by **era**, not by year, because the early-computing years are deliberately undated. Each chapter ends with a classification line that says whether the experience is foundational, historical or a current core skill, so old tools are never mistaken for 2026 skills.
- The engineering-memory card is the storytelling unit: a concrete memory, the lesson that survived, and how it shows up in production today, with a link to proof where one exists.
- The technology-generations grid fills current competencies and outlines historical ones, so the eye reads progression rather than a flat list of equal technologies.
- Status labels replace completion percentages on public cards; percentages remain in the internal data and on `/platform`, which is explicitly framed as governance evidence.

## 4. New components
`components/journey/journal-page.tsx`, `journey-chapters.tsx`, `method-strip.tsx`, `technology-generations.tsx` (client, filters), `recruiter-view.tsx` (RecruiterView + ClientMode), `journal-entries.tsx`; `components/shared/contact-cta.tsx`, `linkedin-icon.tsx`; `components/layout/root-shell.tsx`; `lib/i18n.ts`, `lib/seo.ts`; `app/og/route.tsx`; `app/(ar)/projects/[id]/opengraph-image.tsx`; `app/fonts.ts`.

## 5. Content added
Ten chapters (Arabic and English), ten engineering memories, seven method steps (then/now), seven generation tracks, seven recruiter Q&As, seven client problems, five journal entries (challenge → context → decision → implementation → verification → result → lesson → today → evidence), six employment entries and education from the CV, six real screenshots (WebP, 39–97 KB each; contact bars with client phone numbers cropped out of the two factory captures).

## 6. Evidence and truthfulness decisions
- Early-computing experiences carry **no dates**; only CV employment dates are dated.
- DOS, multimedia tools (Sound Forge, Movavi, iPhoto Plus) and data recovery are labelled historical / foundational; the site states explicitly: no current DOS specialisation, no digital-forensics certification, no unrestricted iPhone recovery.
- GIZ appears only as "proposed demonstrator aligned with GIZ's publicly stated objectives", with a disclaimer that it is not approval, accreditation or partnership.
- Project1 keeps the simulation-only and `buyHalt=true` boundary; live revenue is described as blocked by policy.
- No clients, financial outcomes, performance percentages, certifications or testimonials were invented. Client production systems (bank MTZ platform, Risha360) are described without public links.
- AI usage is disclosed as governed leverage ("I use coding agents as accelerators under written constraints; decisions and evidence stay with me"); no page says an agent built the work.
- Phone number from the CV is **not** published (owner decision pending: `owner.publicPhone`).

## 7. Verification results

Environment: Windows 11, Node 24, Next.js 16.3.1 production build served locally on port 3100, Playwright 1.x Chromium, axe-core via `@axe-core/playwright`, Lighthouse latest via npx with headless Chrome.

| Check | Result |
|---|---|
| `npm run lint` | pass, 0 warnings |
| `npm run typecheck` | pass |
| `npm run build` | pass, 51 static pages |
| `npm run test` (Playwright, desktop 1440 + mobile 390) | 119 passed, 17 skipped by design (axe and print run once), 0 failed |
| axe WCAG 2.1 AA, 8 pages × light/dark | 0 serious or critical violations (JSON per page in `docs/reports/axe/`) |
| Horizontal overflow at 390px | none on 12 routes |
| Keyboard: skip link, visible focus, palette focus trap, Escape, arrows, Enter | pass |
| Print: `/cv` A4, header/footer hidden | pass |

Lighthouse (local production build; scores vary a few points between runs):

| Page | Form factor | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|---|
| `en-journal` | desktop | 100 | 100 | 100 | 100 | 671 ms | 0.000 |
| `en-journal` | mobile | 93 | 100 | 100 | 100 | 3231 ms | 0.000 |
| `home` | desktop | 100 | 100 | 100 | 100 | 696 ms | 0.000 |
| `home` | mobile | 92 | 100 | 100 | 100 | 3303 ms | 0.000 |
| `journal` | desktop | 100 | 100 | 100 | 100 | 711 ms | 0.000 |
| `journal` | mobile | 92 | 100 | 100 | 100 | 3392 ms | 0.000 |
| `project` | desktop | 100 | 100 | 100 | 100 | 693 ms | 0.000 |
| `project` | mobile | 92 | 100 | 100 | 100 | 3314 ms | 0.000 |


## 8. Remaining recommendations
1. Decide whether to publish the phone number (`owner.publicPhone = true`).
2. Publish a trimmed public mirror of Project1 (README, loop diagram, one test file) so the strongest simulation has a public link.
3. Add two or three supporting screenshots per case study (inner pages), captured the same way as the covers.
4. Translate the ten case studies for `/en/projects` if English-speaking recruiters become the main audience.
5. Record a short silent walkthrough of Master Brain; it is the one asset nobody else has.
6. Re-run Lighthouse on the Vercel deployment (CDN and image optimisation change the numbers).
