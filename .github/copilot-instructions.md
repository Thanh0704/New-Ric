# RIC Vietnam Landing Page — Copilot Instructions

## Project Overview

Corporate landing page for **RIC Vietnam** (ricvina.vn) — a Vietnamese tech company providing enterprise software solutions (ERP, HRM, WMS). Static site with SSG, no backend database. All data is mock data in `src/data/`.

## Tech Stack

- **Runtime**: Node.js v22, pnpm 10 (monorepo via pnpm-workspace.yaml)
- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS v4 (uses `@theme` block in `src/app/globals.css`, NOT `tailwind.config.js`)
- **UI Library**: shadcn/ui v4 with **Base UI** (`@base-ui/react`) — NOT Radix UI
- **Animation**: Framer Motion 12
- **Form**: React Hook Form 7 + Zod v4 + @hookform/resolvers v5
- **Icons**: Lucide React
- **Toast**: Sonner
- **Linting**: ESLint 9 (flat config) + Prettier 3 + eslint-config-prettier
- **Git hooks**: Husky 9 + lint-staged 16 + commitlint (conventional commits)

## Critical: Base UI Compatibility

shadcn/ui in this project uses `@base-ui/react`, NOT `@radix-ui`. Key differences:

- **NO `asChild` prop** on Button, SheetTrigger, or any Base UI component
- For styled links use: `<Link className={buttonVariants({ variant, size })}>` instead of `<Button asChild><Link /></Button>`
- SheetTrigger: apply className directly, no `asChild`
- `buttonVariants()` is exported from a `'use client'` module — any server component calling it must be converted to `'use client'`

## Commands

Always run `pnpm install` first if `node_modules/` is missing.

```bash
pnpm dev              # Dev server with Turbopack (http://localhost:3000)
pnpm build            # Production build — ALWAYS run after changes to verify
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm format           # Prettier format all src files
pnpm format:check     # Prettier check without writing
pnpm typecheck        # TypeScript type check (tsc --noEmit)
pnpm validate         # Full validation: lint + typecheck + build
```

**After every code change, run `pnpm build`. The build must pass with zero errors.**

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (full SEO metadata, fonts, Header/Footer)
│   ├── page.tsx            # Homepage (6 sections + Organization JSON-LD)
│   ├── not-found.tsx       # Custom 404 page
│   ├── about/page.tsx      # About page (team, mission/vision)
│   ├── products/           # Product list + [slug] detail pages
│   ├── news/               # News list + [slug] detail pages
│   ├── careers/            # Careers list + [slug] detail pages
│   ├── contact/page.tsx    # Contact page with form
│   └── api/contact/route.ts # Mock contact API endpoint
├── components/
│   ├── ui/                 # shadcn/ui components (DO NOT manually edit)
│   ├── layout/             # Header, Footer, nav-links
│   ├── sections/           # Homepage sections (hero, features, stats, etc.)
│   ├── shared/             # Reusable: Container, SectionHeading, AnimateOnScroll, StructuredData, BackToTop
│   └── forms/              # Form components (contact-form)
├── data/                   # Mock data files (products, news, careers, team, testimonials, partners)
├── hooks/                  # Custom React hooks
├── lib/
│   ├── constants.ts        # SITE_CONFIG, NAV_ITEMS
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── types/
    └── index.ts            # All TypeScript interfaces (Product, NewsArticle, Career, etc.)
```

## Coding Conventions

- **No semicolons**, single quotes, trailing commas — enforced by Prettier
- **Print width**: 100 characters
- **Imports**: Use `@/` path alias (maps to `src/`)
- **Components**: Named exports, PascalCase filenames
- **Data files**: camelCase exports (`export const products: Product[]`)
- **Pages**: Default exports with `export const metadata` for static SEO or `generateMetadata()` for dynamic routes
- **Dynamic routes**: Always use `params: Promise<{ slug: string }>` pattern and `await params` (Next.js 16+)
- **Client components**: Only add `'use client'` when hooks/interactivity/browser APIs are needed
- **New shadcn components**: `pnpm dlx shadcn@latest add <component-name>` (uses `base-nova` style)

## Commit Messages

Follow conventional commits enforced by commitlint:
`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`, `ci:`, `build:`

## Key Files to Reference

| File                           | Purpose                                                |
| ------------------------------ | ------------------------------------------------------ |
| `src/types/index.ts`           | All TypeScript interfaces                              |
| `src/lib/constants.ts`         | SITE_CONFIG and NAV_ITEMS                              |
| `src/components/ui/button.tsx` | `buttonVariants` export for styled links               |
| `src/app/globals.css`          | Tailwind v4 theme with `@theme` block and brand colors |
| `components.json`              | shadcn/ui configuration (base-nova style, Base UI)     |
| `.prettierrc`                  | Prettier config                                        |
| `eslint.config.mjs`            | ESLint flat config                                     |

## Known Gotchas

- Geist font only supports `latin` and `latin-ext` subsets — no `vietnamese`
- Tailwind v4 theme tokens are defined via `@theme` in CSS, not a JS config file
- All images reference `/public/images/` paths that may not exist yet — SSG still works
- The mock contact API (`/api/contact`) returns `{ success: true }` without sending email
