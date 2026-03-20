# RIC Vietnam Landing Page

## Overview

Corporate landing page for **RIC Vietnam** ([ricvina.vn](https://ricvina.vn)) — a Vietnamese tech company providing enterprise software solutions (ERP, HRM, WMS).

**Current phase**: Phase 1 — Build UI with mock data only (SSG, no backend database). All data lives in `src/data/`. Phase 2 will replace mock data with a real API from `ric-system`, integrate Resend email, and add Google Analytics.

## Tech Stack

| Category        | Technology                 | Version                  | Notes                                                                 |
| --------------- | -------------------------- | ------------------------ | --------------------------------------------------------------------- |
| Runtime         | Node.js                    | v22+                     | LTS required                                                          |
| Package Manager | pnpm                       | 10                       | Monorepo via `pnpm-workspace.yaml`                                    |
| Framework       | Next.js                    | 16                       | App Router, Turbopack, SSG                                            |
| UI Library      | React                      | 19                       | Server Components by default                                          |
| Language        | TypeScript                 | 5.9                      | Strict mode enabled                                                   |
| Styling         | Tailwind CSS               | v4                       | `@theme` block in `src/app/globals.css`, **NOT** `tailwind.config.js` |
| Components      | shadcn/ui v4               | base-nova style          | Uses **Base UI** (`@base-ui/react`), **NOT Radix UI**                 |
| Animation       | Framer Motion              | 12                       | Scroll-triggered animations via `AnimateOnScroll`                     |
| Forms           | React Hook Form 7 + Zod v4 | + @hookform/resolvers v5 | Type-safe validation                                                  |
| Icons           | Lucide React               | latest                   | Tree-shakable, shadcn default                                         |
| Toast           | Sonner                     | latest                   | Toast notifications                                                   |
| Linting         | ESLint 9 + Prettier 3      | flat config              | `eslint-config-prettier` integration                                  |
| Git Hooks       | Husky 9 + lint-staged 16   | + commitlint             | Conventional commits enforced                                         |

## Commands

Run `pnpm install` first if `node_modules/` is missing.

```bash
pnpm dev              # Dev server with Turbopack (http://localhost:3000)
pnpm build            # Production build — MUST run after every change, zero errors required
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm format           # Prettier format all src files
pnpm format:check     # Prettier check without writing
pnpm typecheck        # TypeScript type check (tsc --noEmit)
pnpm validate         # Full validation: lint + typecheck + build (run before commits)
```

## Project Structure

```
src/
├── app/                        # Next.js App Router (all SSG)
│   ├── layout.tsx              # Root layout (fonts, SEO metadata, Header/Footer)
│   ├── page.tsx                # Homepage (hero, features, stats, vision-mission, testimonials, partners, CTA)
│   ├── not-found.tsx           # Custom 404
│   ├── about/page.tsx          # About (team, mission/vision)
│   ├── products/page.tsx       # Product list
│   ├── news/                   # News list + [slug] detail
│   ├── careers/                # Careers list + [slug] detail (with filter)
│   ├── contact/page.tsx        # Contact form
│   ├── faq/page.tsx            # FAQ with accordion
│   ├── privacy-policy/page.tsx # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   └── api/contact/route.ts    # Mock contact API (returns { success: true })
├── components/
│   ├── ui/                     # shadcn/ui (auto-generated — DO NOT manually edit)
│   ├── layout/                 # Header, Footer, nav-links.ts
│   ├── sections/               # Homepage: hero, features, stats, vision-mission, testimonials, partners, cta
│   ├── shared/                 # Container, SectionHeading, AnimateOnScroll, StructuredData, BackToTop
│   ├── forms/                  # ContactForm (Zod + RHF)
│   ├── careers/                # CareersFilter
│   └── faq/                    # FaqClient
├── data/                       # Mock data: products, news, careers, team (+ testimonials, partners inline)
├── hooks/                      # Custom React hooks
├── lib/
│   ├── constants.ts            # SITE_CONFIG, NAV_ITEMS
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
└── types/
    └── index.ts                # All interfaces: Product, NewsArticle, Career, ContactFormData, TeamMember
```

## Key Files

| File                           | Purpose                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `src/types/index.ts`           | All TypeScript interfaces                                                             |
| `src/lib/constants.ts`         | `SITE_CONFIG` (name, URL, social links) and `NAV_ITEMS`                               |
| `src/components/ui/button.tsx` | `buttonVariants` export for styled links                                              |
| `src/app/globals.css`          | Tailwind v4 theme (`@theme` block), brand colors (`--color-electric`, `--color-navy`) |
| `components.json`              | shadcn/ui config (base-nova style, Base UI, `@/` aliases)                             |
| `.prettierrc`                  | No semicolons, single quotes, trailing commas, 100 char width                         |
| `eslint.config.mjs`            | ESLint 9 flat config (next/core-web-vitals + typescript + prettier)                   |

## Coding Conventions

- **No semicolons**, single quotes, trailing commas — Prettier enforced (`.prettierrc`)
- **Print width**: 100 characters
- **Imports**: `@/` path alias (maps to `src/`)
- **Components**: Named exports, PascalCase filenames (e.g., `export function HeroSection()`)
- **Data files**: camelCase exports with explicit types (e.g., `export const products: Product[]`)
- **Pages**: Default export + `export const metadata` (static) or `generateMetadata()` (dynamic)
- **Dynamic routes**: `params: Promise<{ slug: string }>` — must `await params` (Next.js 16+)
- **Client components**: Only `'use client'` when hooks, interactivity, or browser APIs are required
- **shadcn components**: `pnpm dlx shadcn@latest add <name>` — never create manually in `ui/`
- **Commits**: Conventional commits — `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`, `ci:`, `build:`

## Critical: Base UI (NOT Radix)

shadcn/ui in this project uses `@base-ui/react`, **NOT** `@radix-ui`. Key differences:

- **NO `asChild` prop** on Button, SheetTrigger, or any Base UI component
- Styled links: `<Link className={buttonVariants({ variant, size })}>` — NOT `<Button asChild><Link /></Button>`
- SheetTrigger: apply `className` directly, no `asChild`
- `buttonVariants()` requires `'use client'` in the consuming component

## Environment Variables

| Variable                | Default                    | Purpose             |
| ----------------------- | -------------------------- | ------------------- |
| `NEXT_PUBLIC_SITE_URL`  | `https://ricvina.vn`       | Production site URL |
| `NEXT_PUBLIC_ADMIN_URL` | `https://admin.ricvina.vn` | Admin panel URL     |

Create `.env.local` to override locally: `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

## Known Gotchas

- Geist font supports `latin` and `latin-ext` only — no `vietnamese` subset
- Tailwind v4 theme tokens are in `@theme` block in CSS, not a JS config file
- Images reference `/public/images/` paths that may not exist — SSG still builds
- Mock contact API (`/api/contact`) returns `{ success: true }` without sending email
- Zod v4 API is used (`^4.3.6`), needs `@hookform/resolvers` v5+
- `next-themes` is installed but dark mode is not fully implemented yet
