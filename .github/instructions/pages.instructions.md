---
applyTo: 'src/app/**/page.tsx'
---

# Page Guidelines

## Exports

- Default export for the page component
- `export const metadata: Metadata` for static pages
- `export async function generateMetadata()` for dynamic routes
- Always include `openGraph: { title, description }` in metadata

## Dynamic Routes (`[slug]`)

- Params are `Promise<{ slug: string }>` (Next.js 16+) — MUST `await params`
- Implement `generateStaticParams()` returning all valid slugs from `src/data/`
- Use `notFound()` from `next/navigation` when slug doesn't match any data

```tsx
export async function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = items.find((i) => i.slug === slug)
  if (!item) notFound()
  // ...
}
```

## Data & Layout

- Import mock data directly from `src/data/` — no API calls, all pages are SSG
- Use `<Container>` for consistent page width
- Use `<SectionHeading>` for page/section titles
- Wrap animated sections with `<AnimateOnScroll>`
- Use `<StructuredData>` for JSON-LD schema (Organization, Article, JobPosting, etc.)
