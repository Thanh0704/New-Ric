'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown, ArrowRight, LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DiscoveryModal } from '@/components/shared/discovery-modal'

const newNavData = [
  { label: 'Trang chủ', href: '/' },
  {
    label: 'Sản phẩm',
    isMega: true,
    children: [
      {
        category: 'Commerce & Growth',
        items: [
          { label: 'RIC ECOM', href: '/products/ecom' },
          { label: 'RIC Affiliate', href: '/products/ric-affiliate' },
        ],
      },
      {
        category: 'Customer Engagement',
        items: [
          { label: 'ZHUB', href: '/products/zhub' },
          { label: 'RIC Message', href: '/products/ric-message' },
        ],
      },
      {
        category: 'Operations',
        items: [
          { label: 'RIC ERP', href: '/products/ric-erp' },
          { label: 'RICIO', href: '/products/ricio' },
        ],
      },
      {
        category: 'Trust & Protection',
        items: [{ label: 'RIC Trust', href: '/products/ric-trust' }],
      },
    ],
  },
  {
    label: 'Giải pháp',
    isMega: false,
    children: [
      {
        category: 'Theo nhu cầu',
        items: [
          { label: 'Bán hàng và Thương mại', href: '/products?category=sales' },
          { label: 'Marketing & Tương tác', href: '/products?category=marketing' },
          { label: 'Quản trị chuyên ngành', href: '/products?category=management' },
          { label: 'Bảo vệ thương hiệu', href: '/products?category=security' },
        ],
      },
      {
        category: 'Theo giai đoạn',
        items: [
          { label: 'Bắt đầu số hóa', href: '/stages/start' },
          { label: 'Tự động hóa quy trình', href: '/stages/automate' },
          { label: 'Mở rộng & Tăng trưởng', href: '/stages/scale' },
        ],
      },
    ],
  },
  {
    label: 'Tài nguyên',
    isMega: false,
    children: [
      {
        category: '',
        items: [
          { label: 'Tin tức & Sự kiện', href: '/news' },
          { label: 'Thư viện tài liệu', href: '/documents' },
          { label: 'Trung tâm hỗ trợ', href: '/support' },
        ],
      },
    ],
  },
  {
    label: 'Về RIC',
    isMega: false,
    children: [
      {
        category: '',
        items: [
          { label: 'Câu chuyện của chúng tôi', href: '/about' },
          { label: 'Hệ sinh thái RIC', href: '/ecosystem' },
          { label: 'Tuyển dụng', href: '/careers' },
          { label: 'Liên hệ', href: '/contact' },
        ],
      },
    ],
  },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({})

  // ĐÃ THÊM: Biến menuKey để reset trạng thái hover trên PC
  const [menuKey, setMenuKey] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timer = setTimeout(() => {
        setOpenMobileMenus({})
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const handleSmartClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Đóng menu mobile
    setIsMobileMenuOpen(false)
    setOpenMobileMenus({})

    // ĐÃ THÊM: Đổi key để ép React reset component trên Laptop, tắt ngay bảng menu đang hover
    setMenuKey((prev) => prev + 1)

    if (pathname === '/') {
      if (href === '/') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (href.includes('?scrollTo=')) {
        e.preventDefault()
        const param = href.split('?scrollTo=')[1]
        const targetId =
          param === 'insights' ? 'ric-insights' : param === 'ecosystem' ? 'ric-ecosystem' : ''
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 isolate z-40 w-full bg-slate-900 bg-linear-to-r from-blue-900 to-slate-900 transition-all duration-300',
          isScrolled ? 'border-b border-white/10 shadow-xl' : 'border-b border-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-10">
          <Link
            href="/"
            onClick={(e) => handleSmartClick(e, '/')}
            className="flex shrink-0 items-center gap-3 py-2"
          >
            <Image
              src="/images/logo.png"
              alt="RIC Việt Nam Logo"
              width={260}
              height={80}
              className="h-12 w-auto origin-left scale-125 object-contain md:h-15 md:scale-[1.35] lg:scale-150"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-x-8 lg:flex">
            {newNavData.map((nav) =>
              nav.children ? (
                // ĐÃ SỬA: Bọc menuKey vào tham số key của div. Khi menuKey đổi, thẻ div này sẽ được render lại mới hoàn toàn
                <div key={`${nav.label}-${menuKey}`} className="group relative py-8">
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-200 transition-colors hover:text-cyan-400">
                    {nav.label}{' '}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                  </button>

                  <div
                    className={cn(
                      'invisible absolute top-full mt-2 opacity-0 shadow-2xl shadow-cyan-900/20 transition-all group-hover:visible group-hover:mt-0 group-hover:opacity-100',
                      nav.isMega ? 'left-1/2 w-150 -translate-x-1/2' : 'left-0 w-65',
                    )}
                  >
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      {nav.isMega ? (
                        <>
                          <div className="grid grid-cols-2 gap-8">
                            {nav.children.map((group, idx) => (
                              <div key={idx}>
                                <h4 className="mb-4 text-xs font-black tracking-wider text-cyan-500 uppercase">
                                  {group.category}
                                </h4>
                                <ul className="space-y-3">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        onClick={(e) => handleSmartClick(e, item.href)}
                                        className="block text-sm font-bold text-slate-300 hover:text-cyan-400"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 border-t border-white/10 pt-4 text-center">
                            <Link
                              href="/products"
                              onClick={(e) => handleSmartClick(e, '/products')}
                              className="text-sm font-bold text-cyan-400 hover:text-cyan-300"
                            >
                              → Xem toàn bộ sản phẩm
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col gap-4">
                          {nav.children.map((group, idx) => (
                            <div key={idx}>
                              {group.category && (
                                <h4 className="mb-2 px-3 text-xs font-black tracking-wider text-cyan-500 uppercase">
                                  {group.category}
                                </h4>
                              )}
                              <ul className="space-y-1">
                                {group.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      onClick={(e) => handleSmartClick(e, item.href)}
                                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={nav.label}
                  href={nav.href || '#'}
                  onClick={(e) => handleSmartClick(e, nav.href)}
                  className="text-sm font-bold text-slate-200 transition-colors hover:text-cyan-400"
                >
                  {nav.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-bold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              <span className="whitespace-nowrap sm:hidden">Tìm giải pháp phù hợp</span>
              <span className="hidden whitespace-nowrap sm:inline">Tìm giải pháp phù hợp</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>

            <a
              href="https://admin.ricvina.vn/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-slate-600 px-4 py-2.5 text-sm font-bold text-slate-200 transition-all hover:border-slate-400 hover:bg-white/5 hover:text-white lg:flex"
            >
              <LogIn className="h-4 w-4" />
              <span>Đăng nhập cho đối tác</span>
            </a>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'text-slate-200 hover:bg-white/10 hover:text-white lg:hidden',
                )}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] overflow-y-auto border-l border-white/10 bg-slate-950 sm:w-96"
              >
                <nav className="mt-8 flex flex-col gap-2">
                  {newNavData.map((nav) =>
                    nav.children ? (
                      <div key={nav.label}>
                        <button
                          onClick={() => toggleMobileMenu(nav.label)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-white/5 hover:text-cyan-400"
                        >
                          {nav.label}{' '}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              openMobileMenus[nav.label] ? 'rotate-180' : '',
                            )}
                          />
                        </button>
                        {openMobileMenus[nav.label] && (
                          <div className="mt-1 ml-3 flex flex-col gap-4 border-l-2 border-white/10 py-2 pl-4">
                            {nav.children.map((group, idx) => (
                              <div key={idx}>
                                {group.category && (
                                  <h5 className="mb-2 text-xs font-black text-cyan-500 uppercase">
                                    {group.category}
                                  </h5>
                                )}
                                <div className="flex flex-col gap-2">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      onClick={(e) => handleSmartClick(e, item.href)}
                                      className="text-sm font-medium text-slate-300 hover:text-cyan-400"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {nav.isMega && (
                              <div className="mt-2 border-t border-white/5 pt-4">
                                <Link
                                  href="/products"
                                  onClick={(e) => handleSmartClick(e, '/products')}
                                  className="inline-flex items-center gap-1 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                                >
                                  → Xem toàn bộ sản phẩm
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={nav.label}
                        href={nav.href || '#'}
                        onClick={(e) => handleSmartClick(e, nav.href)}
                        className="rounded-lg px-3 py-3 text-sm font-bold text-white hover:bg-white/5 hover:text-cyan-400"
                      >
                        {nav.label}
                      </Link>
                    ),
                  )}

                  <div className="mt-4 border-t border-white/10 pt-6 pb-4">
                    <a
                      href="https://admin.ricvina.vn/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setOpenMobileMenus({})
                      }}
                      className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm font-bold text-white transition-all hover:border-slate-500 hover:bg-slate-700"
                    >
                      <LogIn className="h-4 w-4" />
                      Đăng nhập dành cho đối tác
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <DiscoveryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
