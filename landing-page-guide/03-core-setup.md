# 03 - Cấu hình Core

## 1. Tailwind CSS v4

Tailwind v4 đã tích hợp sẵn khi tạo project bằng `create-next-app`. File `src/app/globals.css`:

```css
@import 'tailwindcss';

@theme {
  /* ===== Colors - Thay đổi theo branding công ty ===== */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* ===== Fonts ===== */
  --font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;

  /* ===== Container ===== */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1400px;

  /* ===== Animation ===== */
  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.5s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Base styles ===== */
@layer base {
  body {
    @apply bg-background text-foreground antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply tracking-tight;
  }
}
```

## 2. Font setup

File `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  // Xem chi tiết ở file 06-seo-performance.md
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
```

> **Lưu ý**: Thêm `vietnamese` vào subsets để hỗ trợ tiếng Việt có dấu.

## 3. Utility helper - cn()

File `src/lib/utils.ts` (shadcn/ui tự tạo khi init):

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 4. Site constants

File `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'RIC Vietnam',
  description: 'Công ty công nghệ hàng đầu Việt Nam',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ricvina.vn',
  adminUrl: process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.ricvina.vn',
  ogImage: '/images/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/ricvietnam',
    linkedin: 'https://linkedin.com/company/ricvietnam',
    zalo: 'https://zalo.me/ricvietnam',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Tuyển dụng', href: '/careers' },
  { label: 'Liên hệ', href: '/contact' },
] as const
```

## 5. Container component

File `src/components/shared/container.tsx`:

```tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Comp = 'div' }: ContainerProps) {
  return (
    <Comp className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Comp>
  )
}
```

## 6. Section heading component

File `src/components/shared/section-heading.tsx`:

```tsx
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="text-muted-foreground mt-4 text-lg">{description}</p>}
    </div>
  )
}
```

## 7. Scroll animation wrapper

File `src/components/shared/animate-on-scroll.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
}

export function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

## 8. TypeScript types

File `src/types/index.ts`:

```typescript
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  image: string
  features: string[]
}

export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail: string
  publishedAt: string
  category: string
}

export interface Career {
  id: string
  title: string
  slug: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  description: string
  requirements: string[]
  benefits: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}
```
