---
applyTo: 'src/app/globals.css'
---

# Styling Guidelines (Tailwind CSS v4)

## Theme Configuration

Tailwind v4 uses `@theme inline` block in this CSS file — **NOT** `tailwind.config.js`.

All design tokens (colors, radii, fonts, animations) MUST be defined inside the `@theme inline {}` block.

## Brand Colors

| Token                      | Value     | Usage                            |
| -------------------------- | --------- | -------------------------------- |
| `--color-electric`         | `#00ffff` | Primary accent, CTAs, highlights |
| `--color-navy`             | `#1a2b3c` | Dark backgrounds, headers        |
| `--color-background-light` | `#f6f7f8` | Light section backgrounds        |
| `--color-background-dark`  | `#13191f` | Dark section backgrounds         |

## Imports Order

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';
```

## Rules

- Never create a `tailwind.config.js` or `tailwind.config.ts` file
- Add new design tokens inside `@theme inline {}` — not as regular CSS custom properties
- shadcn/ui tokens (`--background`, `--foreground`, `--primary`, etc.) are managed by shadcn — do not rename
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *));`
- Container breakpoint: `--breakpoint-2xl: 1400px`
