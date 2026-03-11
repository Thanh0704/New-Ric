'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SITE_CONFIG } from '@/lib/constants'
import { navLinks } from './nav-links'

function RicLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('size-8', className)}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { RicLogo }

export function Header() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMobileMenu = (label: string) =>
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }))

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="dark:bg-background-dark/80 sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md md:px-20 dark:border-slate-800">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <RicLogo className="text-primary" />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            RIC VIỆT NAM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <button
                  className={cn(
                    'hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors',
                    isActive(link.href) ? 'text-primary' : '',
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div
                  className={cn(
                    'invisible absolute top-full left-0 mt-2 rounded-lg border border-slate-100 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900',
                    link.href === '/about' ? 'w-48' : 'w-56',
                  )}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="hover:text-primary block px-4 py-2 text-xs transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'hover:text-primary text-sm font-medium transition-colors',
                  pathname === link.href ? 'text-primary' : '',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right side: Login + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hidden rounded-lg px-6 py-2 text-sm font-bold text-slate-900 transition-opacity hover:opacity-90 sm:flex"
          >
            Đăng nhập
          </a>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'lg:hidden')}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <button
                        onClick={() => toggleMobileMenu(link.label)}
                        className={cn(
                          'flex w-full items-center justify-between px-3 py-2 text-sm font-medium transition-colors',
                          isActive(link.href) ? 'text-primary' : 'text-muted-foreground',
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-200',
                            openMenus[link.label] ? 'rotate-180' : '',
                          )}
                        />
                      </button>
                      {openMenus[link.label] && (
                        <div className="mt-1 ml-3 flex flex-col gap-1 border-l pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'px-3 py-2 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary font-medium'
                                  : 'text-muted-foreground',
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'px-3 py-2 text-sm font-medium transition-colors',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <hr className="my-2" />
                <a
                  href={SITE_CONFIG.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary mt-2 rounded-lg px-6 py-2 text-center text-sm font-bold text-white"
                >
                  Đăng nhập
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
