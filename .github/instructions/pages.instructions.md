---
applyTo: 'src/app/**/page.tsx'
---

# Page Guidelines

- Every page must export `metadata` (static) or `generateMetadata` (dynamic) for SEO
- Include `openGraph: { title, description }` in all metadata
- Dynamic routes must implement `generateStaticParams()` returning all valid slugs
- Dynamic route params are `Promise<{ slug: string }>` — always `await params`
- Use `notFound()` from `next/navigation` when data is not found
- Import mock data from `src/data/` — no API calls needed, all pages are SSG
- Use existing shared components: Container, SectionHeading, AnimateOnScroll
- Use `<StructuredData>` component for JSON-LD schema when appropriate
