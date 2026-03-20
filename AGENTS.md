# Agent Instructions

## Mandatory: Validation After Every Change

After ANY code change, ALWAYS run validation before considering the task complete:

```bash
pnpm build            # MUST pass with zero errors — this is non-negotiable
```

For comprehensive validation (recommended before commits):

```bash
pnpm validate         # Runs: pnpm lint && pnpm typecheck && pnpm build
```

If lint or format errors are found, fix them:

```bash
pnpm lint:fix         # Auto-fix ESLint errors
pnpm format           # Auto-fix Prettier formatting
```

**The build is the single source of truth. Never mark a task complete if build fails.**

## Mandatory: Documentation Sync (Kill Switch)

After ANY structural change to the project, update `.github/copilot-instructions.md` to keep it accurate. This is **not optional** — the doc is the AI's primary context for understanding the project.

### Triggers and What to Update

| Change Made                                          | Section to Update in `copilot-instructions.md` |
| ---------------------------------------------------- | ---------------------------------------------- |
| New page added/removed in `src/app/`                 | **Project Structure** tree                     |
| New component created in `src/components/`           | **Project Structure** tree                     |
| New data file or type in `src/data/` or `src/types/` | **Project Structure** tree + types list        |
| New dependency added to `package.json`               | **Tech Stack** table                           |
| New environment variable                             | **Environment Variables** table                |
| New gotcha or bug discovered                         | **Known Gotchas** list                         |
| New key config file                                  | **Key Files** table                            |

### How to Update

1. Read the current `.github/copilot-instructions.md`
2. Find the relevant section
3. Add/remove/modify the specific entry
4. Keep the file concise — no more than ~2 pages

## Adding New Pages

1. Create route folder under `src/app/`
2. Add TypeScript interfaces to `src/types/index.ts` if needed
3. Add mock data to `src/data/` if needed
4. Create page component with `metadata` export (include `openGraph`)
5. For dynamic routes: add `generateStaticParams()` + `generateMetadata()`
6. **Update `.github/copilot-instructions.md` → Project Structure section**
7. Run `pnpm build` to verify

## Adding New UI Components

Use shadcn CLI — never create UI components manually:

```bash
pnpm dlx shadcn@latest add <component-name>
```

This project uses the `base-nova` style with Base UI (NOT Radix UI).

For custom components (non-shadcn):

1. Create file in appropriate `src/components/` subdirectory
2. Use named exports, PascalCase filenames
3. Only add `'use client'` when hooks/interactivity are needed
4. **Update `.github/copilot-instructions.md` → Project Structure section**
5. Run `pnpm build` to verify

## Adding New Data or Types

1. Add the interface to `src/types/index.ts`
2. Create or update the data file in `src/data/` with explicit type annotation
3. Each item needs `id` (string) and `slug` (string, URL-safe kebab-case) where applicable
4. **Update `.github/copilot-instructions.md` → Project Structure section**
5. Run `pnpm build` to verify

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
