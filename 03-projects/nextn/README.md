# Hissah

Hissah is an Arabic-first tutoring marketplace that connects students, parents,
verified teachers, and administrators through one web platform and one Flutter
mobile app.

Production target:

- Web: `https://hissah.vercel.app`
- Repository: `https://github.com/Suhib-byte/Hissah`
- Deployment: Vercel project `hissah`

## Product Scope

Hissah supports the core foundation for:

- student, parent, teacher, support, and admin roles
- Jordanian curriculum, grade levels, and subjects
- verified public teacher profiles
- teacher schedules and availability
- lesson/package booking flow
- mock checkout with a Stripe-ready adapter skeleton
- 10% platform commission logic
- teacher verification review flow
- student, parent, and teacher dashboard contracts
- reminder preferences for email, SMS, WhatsApp, and in-app notifications
- accessibility settings such as high contrast, large text, captions, and screen-reader readiness

## Source Of Truth

The repository currently has both root and `src` route trees. The current
production convention is:

- `app/` contains thin Next.js App Router wrappers.
- `src/app/` contains the canonical page/API implementations.
- `src/components/` contains the canonical React components.
- `src/lib/` contains shared TypeScript utilities, marketplace logic, data, and API helpers.
- `mobile/flutter/` is the canonical Flutter app committed to GitHub.
- `mobile/Noor/` is a local device-testing mirror only. It contains its own `.git`,
  generated build output, and local tooling files, so it is intentionally ignored
  by the root repository.

Do not leave `mobile/Noor` as an untracked nested folder in a release commit.
Either keep it ignored as a local mirror, convert it to an explicit submodule, or
replace `mobile/flutter` with a cleaned single mobile source tree in a dedicated
future migration.

## Tech Stack

Web:

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/Radix UI components
- Firebase Auth for current login flows
- Neon Serverless PostgreSQL as the target database
- Genkit/Gemini for future learning intelligence

Mobile:

- Flutter / Dart
- Firebase Core/Auth
- Google Sign-In
- Provider
- SharedPreferences
- HTTP API client
- Arabic RTL UI and Droid Arabic Kufi font

Database:

- PostgreSQL migration: `db/migrations/0001_marketplace_foundation.sql`
- Jordanian curriculum seed: `db/seeds/0001_jordan_curriculum.sql`

## Local Setup

Install web dependencies:

```bash
npm ci
```

Run the web platform:

```bash
npm run dev
```

The dev server uses port `9002`:

```text
http://localhost:9002
```

Run checks:

```bash
npm run typecheck
npm run test:business
npm run build
```

Run Flutter checks:

```bash
cd mobile/flutter
flutter analyze
flutter build apk --debug --dart-define=HISSA_API_BASE_URL=http://127.0.0.1:9002
```

Database commands require `DATABASE_URL`:

```bash
npm run db:migrate
npm run db:seed
```

Use `.env.local` for local secrets. Never commit `.env*` files.

Firebase note:

- Web Firebase config is read from `NEXT_PUBLIC_FIREBASE_*` environment variables.
- The Flutter app currently includes generated Firebase client configuration files.
  Firebase client API keys are public project identifiers, not server secrets, but
  production hardening should still restrict Firebase Auth domains and rules.

## API Contract

Flutter-facing API documentation lives in:

- `docs/FLUTTER_API_CONTRACT.md`

All mobile-facing routes use a stable response envelope:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

Important endpoints:

- `GET /api/v1/auth/session`
- `GET /api/v1/curricula`
- `GET /api/v1/grade-levels`
- `GET /api/v1/subjects`
- `GET /api/v1/teachers`
- `GET /api/v1/teachers/{teacherId}`
- `GET /api/v1/teachers/{teacherId}/availability`
- `POST /api/v1/bookings`
- `POST /api/v1/payments/checkout`
- `GET /api/v1/payments/mock/complete`
- `GET /api/v1/dashboard/student`
- `GET /api/v1/dashboard/parent`
- `GET /api/v1/dashboard/teacher`
- `GET /api/v1/admin/teachers/verification`
- `POST /api/v1/admin/teachers/verification`

## Mock Versus Real Data

Current production-readiness status:

- Marketplace schema exists in PostgreSQL migration.
- API contracts exist and are consumed by Flutter.
- Most API v1 routes still use seed/mock data from `src/lib/marketplace/seed-data.ts`.
- Mock checkout is available for local development only. In production,
  `/api/v1/payments/mock/complete` is disabled unless `ALLOW_MOCK_PAYMENTS=true`.
- Stripe support is an adapter skeleton until Stripe keys, Connect decisions,
  webhook signing, refund policy, and payout flow are confirmed.
- Notification cron/provider delivery is not live yet; the current reminder route
  is a preview contract.

Commercial priority for replacing mock data:

1. Bookings and availability
2. Payments and wallet ledger
3. Teacher verification
4. Notification preferences and delivery logs
5. Reviews and rating aggregation

## Engineering Brain

The current architecture and roadmap are documented in:

- `docs/HISSA_ENGINEERING_BRAIN.md`

That document is the project memory for:

- product north star
- bounded contexts
- notification design
- accessibility requirements
- roadmap
- recommended technical team
- known risks before launch

## Release Hygiene

Before pushing:

- confirm `git status --short`
- do not stage Zayed award files, screenshots, APKs, `.next`, Flutter builds, or local mirrors
- do not stage `package-lock.json` unless dependency changes were intentional and verified with `npm ci`
- verify `mobile/Noor/` remains ignored or has a formal submodule/integration decision
- run web and Flutter checks
- confirm GitHub credentials can push to `Suhib-byte/Hissah`

Suggested commit groups:

- `feat(design): unify brand identity across web and mobile`
- `chore(repo): finalize release hygiene and docs`
- `fix(api): guard mock payments outside local development`
- `perf(db): add booking and payment lookup indexes`
