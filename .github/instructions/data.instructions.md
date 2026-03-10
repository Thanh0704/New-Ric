---
applyTo: 'src/data/**/*.ts'
---

# Data File Guidelines

- All mock data files use TypeScript with proper type imports from `@/types`
- Export as `const` arrays with explicit type annotation: `export const items: Type[] = [...]`
- Each item must have `id` (string) and `slug` (string, URL-safe kebab-case)
- Images reference paths in `/public/images/` (may not exist yet — that is OK for SSG)
- Keep data realistic with Vietnamese content for the RIC Vietnam brand
