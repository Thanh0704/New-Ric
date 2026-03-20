---
applyTo: 'src/components/forms/**/*.tsx'
---

# Form Component Guidelines

## Stack

- **React Hook Form 7** — form state management
- **Zod v4** (`^4.3.6`) — schema validation
- **@hookform/resolvers v5** — bridges Zod ↔ RHF

## Pattern

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên'),
  email: z.string().email('Email không hợp lệ'),
})

type FormData = z.infer<typeof schema>

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  // ...
}
```

## Rules

- Forms MUST be `'use client'` components (they use hooks)
- Define Zod schema in the same file as the form component
- Use `z.infer<typeof schema>` for the TypeScript type — do not duplicate
- Submit to `/api/contact` (mock endpoint, returns `{ success: true }`)
- Use Sonner `toast()` for success/error feedback
- For `<Select>` from shadcn, use RHF `Controller` wrapper
- Validation messages should be in Vietnamese
