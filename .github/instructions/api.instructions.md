---
applyTo: 'src/app/api/**/*.ts'
---

# API Route Guidelines

## Current State (Phase 1)

All API routes are **mock endpoints** — they return static success responses without real backend logic.

## Pattern

```ts
export async function POST() {
  // Mock API — Phase 2 will integrate real service
  return Response.json({ success: true })
}
```

## Rules

- Use Web standard `Response` API (Next.js 16 App Router)
- Return `Response.json()` for JSON responses
- Only `POST` method for form submissions
- No database or external API calls in Phase 1
- Phase 2 will replace with: Resend (email), ric-system API (data)
