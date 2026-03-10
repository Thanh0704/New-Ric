# Agent Instructions

## Build & Validate

After any code change, always run:

```bash
pnpm build
```

This is the single source of truth for correctness. The build must pass with zero errors before considering a task complete.

For comprehensive validation:

```bash
pnpm validate
```

This runs lint + typecheck + build sequentially.

## Adding New Pages

1. Create route folder under `src/app/`
2. Add TypeScript interfaces to `src/types/index.ts` if needed
3. Add mock data to `src/data/` if needed
4. Create page component with `metadata` export (include `openGraph`)
5. For dynamic routes: add `generateStaticParams()` + `generateMetadata()`
6. Run `pnpm build` to verify

## Adding New UI Components

Use shadcn CLI — never create UI components manually:

```bash
pnpm dlx shadcn@latest add <component-name>
```

This project uses the `base-nova` style with Base UI (NOT Radix UI).

## Code Formatting

Code is auto-formatted on commit via lint-staged + Husky. To manually format:

```bash
pnpm format           # Fix formatting
pnpm lint:fix         # Fix lint errors
```

## Known Gotchas

- `Button asChild` does NOT work — use `<Link className={buttonVariants(...)}>` instead
- `buttonVariants()` requires `'use client'` in the consuming component
- Tailwind v4 uses `@theme` block in CSS, not `tailwind.config.js`
- Geist font only supports `latin` and `latin-ext` subsets (no `vietnamese`)
- Zod v4 API is used (`^4.3.6`), compatible with `@hookform/resolvers` v5
- Next.js 16 dynamic route params are `Promise<{}>` — must be awaited
- All images in `/public/images/` may not exist yet — SSG still builds correctly
