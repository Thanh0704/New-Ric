---
applyTo: 'src/data/**/*.ts'
---

# Data File Guidelines

## Structure

- Import types from `@/types` (all interfaces defined in `src/types/index.ts`)
- Export as `const` arrays with explicit type annotation: `export const items: Type[] = [...]`
- Use camelCase for export names: `products`, `newsArticles`, `careers`, `teamMembers`

## Required Fields

- `id` — unique string identifier
- `slug` — URL-safe kebab-case string (used in `[slug]` dynamic routes and `generateStaticParams`)

## Current Types

- `Product` — id, name, description, image, features[]
- `NewsArticle` — id, slug, title, excerpt, content, thumbnail, publishedAt, category, author
- `Career` — id, slug, title, department, location, type (full-time|part-time|contract), salary?, description, requirements[], benefits[]
- `TeamMember` — id, name, title, bio, avatar, linkedin
- `ContactFormData` — name, email, phone, company?, service?, message (form schema, not data file)

## Content Rules

- Images reference paths in `/public/images/<category>/` (may not exist yet — SSG still builds)
- Keep data realistic with Vietnamese content for the RIC Vietnam brand
- Dates use ISO format strings: `'2025-01-15'`
