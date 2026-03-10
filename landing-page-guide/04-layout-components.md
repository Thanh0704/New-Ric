# 04 - Layout & Common Components

## 1. Root Layout

File `src/app/layout.tsx` (hoàn chỉnh):

```tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'RIC Vietnam - Công ty Công nghệ',
    template: '%s | RIC Vietnam',
  },
  description: 'Giải pháp công nghệ toàn diện cho doanh nghiệp Việt Nam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={geist.variable}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

## 2. Navigation config

File `src/components/layout/nav-links.ts`:

```typescript
export const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Tuyển dụng', href: '/careers' },
  { label: 'Liên hệ', href: '/contact' },
] as const
```

## 3. Header

File `src/components/layout/header.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SITE_CONFIG } from '@/lib/constants'
import { navLinks } from './nav-links'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border/50 bg-background/80 backdrop-blur-lg'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button (desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <a href={SITE_CONFIG.adminUrl} target="_blank" rel="noopener noreferrer">
              Đăng nhập
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    pathname === link.href ? 'bg-accent text-primary' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2" />
              <Button asChild className="mt-2">
                <a href={SITE_CONFIG.adminUrl} target="_blank" rel="noopener noreferrer">
                  Đăng nhập
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
```

## 4. Footer

File `src/components/layout/footer.tsx`:

```tsx
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = {
  company: [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Tuyển dụng', href: '/careers' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Liên hệ', href: '/contact' },
  ],
  products: [
    { label: 'Sản phẩm A', href: '/products/san-pham-a' },
    { label: 'Sản phẩm B', href: '/products/san-pham-b' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cột 1: Thông tin công ty */}
          <div>
            <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
            <p className="text-muted-foreground mt-3 text-sm">{SITE_CONFIG.description}</p>
          </div>

          {/* Cột 2: Liên kết công ty */}
          <div>
            <h4 className="font-semibold">Công ty</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Sản phẩm */}
          <div>
            <h4 className="font-semibold">Sản phẩm</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="font-semibold">Liên hệ</h4>
            <ul className="mt-3 space-y-3">
              <li className="text-muted-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Địa chỉ công ty</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@ricvina.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
```

## 5. Back to top button

File `src/components/shared/back-to-top.tsx`:

```tsx
'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed right-6 bottom-6 z-50"
        >
          <Button
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

Thêm vào `layout.tsx`:

```tsx
<body className="flex min-h-dvh flex-col">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
  <BackToTop />
</body>
```
