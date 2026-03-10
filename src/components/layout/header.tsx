'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
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
          <a
            href={SITE_CONFIG.adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants())}
          >
            Đăng nhập
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'md:hidden')}
          >
            <Menu className="h-5 w-5" />
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
              <a
                href={SITE_CONFIG.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), 'mt-2')}
              >
                Đăng nhập
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
