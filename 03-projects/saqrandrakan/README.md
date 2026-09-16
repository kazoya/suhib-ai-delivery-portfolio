# Saqr & Rakan - Multi-Brand Agricultural Export Platform

A modern, multi-brand website supporting three agricultural export businesses:
- Fresh Anatolia (freshanatolia.com)
- WA Apple (waapple.org)
- Amon Vegetables (amon-vegetables.com)

## Features

- 🌾 Multi-brand support with dynamic theming
- 📦 Product catalog with categories
- ✅ Quality & certifications showcase
- 🚚 Supply chain & logistics information
- 🌱 Sustainability initiatives
- 📱 Mobile-first responsive design
- 🔍 SEO-optimized structure

## Tech Stack

- Next.js 14
- TypeScript
- React 18
- Vercel deployment ready

## Getting Started

```bash
npm install
npm run dev
```

`npm run dev` uses **HTTPS** (experimental). Open [https://localhost:3000](https://localhost:3000) and accept the dev certificate. For plain HTTP: `npm run dev:http`.

## Brand Configuration

Brands are configured in `data/brands.json` and can be switched via:
- Subdomain detection (freshanatolia.com, waapple.org, amon-vegetables.com)
- Query parameter: `?brand=fresh-anatolia`
- Environment variable: `NEXT_PUBLIC_BRAND`

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── (brands)/          # Brand-specific routes
│   ├── about/
│   ├── products/
│   ├── quality/
│   ├── logistics/
│   ├── sustainability/
│   └── contact/
├── components/            # Reusable React components
├── data/                  # JSON data models
├── lib/                   # Utilities & helpers
└── styles/               # Global styles
```

## Deployment

Deployed on Vercel. Push to main branch triggers automatic deployment.
