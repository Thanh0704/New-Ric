'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DiscoveryModal } from '@/components/shared/discovery-modal'

// --- CẤU TRÚC MENU MỚI THEO CHUẨN B2B SAAS ---
const newNavData = [
  {
    label: 'Trang chủ',
    href: '/',
  },
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
          { label: 'Bắt đầu số hóa', href: '#' },
          { label: 'Tự động hóa quy trình', href: '#' },
          { label: 'Mở rộng & Tăng trưởng', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Khách hàng',
    href: '/customers',
  },
  {
    label: 'Tài nguyên',
    isMega: false,
    children: [
      {
        category: '',
        items: [
          // ĐÃ CẬP NHẬT ĐƯỜNG LINK ANCHOR (NEO) VỀ ĐÚNG KHỐI INSIGHTS Ở TRANG CHỦ 👇
          { label: 'RIC Insights', href: '/#ric-insights' },
          { label: 'Case Studies', href: '#' },
          { label: 'Kiến thức & Hướng dẫn', href: '#' },
          { label: 'Tài liệu sản phẩm', href: '#' },
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
          { label: 'Câu chuyện của chúng tôi', href: '#' },
          { label: 'Hệ sinh thái RIC', href: '#' },
          { label: 'Đối tác', href: '#' },
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
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95'
            : 'border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900', // Luôn giữ nền trắng/tối để logo png hiển thị rõ
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-10">
          {/* 1. LOGO */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RIC Việt Nam Logo"
              width={80}
              height={80}
              className="h-12 w-auto object-contain md:h-16"
            />
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-x-8 lg:flex">
            {newNavData.map((nav) =>
              nav.children ? (
                <div key={nav.label} className="group relative py-8">
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
                    {nav.label}{' '}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                  </button>

                  {/* Dropdown / Mega Menu */}
                  <div
                    className={cn(
                      'invisible absolute top-full mt-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:mt-0 group-hover:opacity-100',
                      nav.isMega ? 'left-1/2 w-[600px] -translate-x-1/2' : 'left-0 w-[260px]',
                    )}
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                      {nav.isMega ? (
                        <>
                          <div className="grid grid-cols-2 gap-8">
                            {nav.children.map((group, idx) => (
                              <div key={idx}>
                                <h4 className="mb-4 text-xs font-black tracking-wider text-slate-400 uppercase">
                                  {group.category}
                                </h4>
                                <ul className="space-y-3">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className="block text-sm font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 border-t border-slate-100 pt-4 text-center dark:border-slate-800">
                            <Link
                              href="/products"
                              className="text-sm font-bold text-blue-600 hover:text-blue-800"
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
                                <h4 className="mb-2 px-3 text-xs font-black tracking-wider text-slate-400 uppercase">
                                  {group.category}
                                </h4>
                              )}
                              <ul className="space-y-1">
                                {group.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
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
                  className="text-sm font-bold text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-200"
                >
                  {nav.label}
                </Link>
              ),
            )}
          </nav>

          {/* 3. RIGHT SIDE: SMART CTA + MOBILE MENU */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 sm:flex"
            >
              Tìm giải pháp phù hợp →
            </button>

            <Sheet>
              <SheetTrigger
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'lg:hidden')}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] overflow-y-auto sm:w-96">
                <nav className="mt-8 flex flex-col gap-2">
                  {newNavData.map((nav) =>
                    nav.children ? (
                      <div key={nav.label}>
                        <button
                          onClick={() => toggleMobileMenu(nav.label)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          {nav.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              openMobileMenus[nav.label] ? 'rotate-180' : '',
                            )}
                          />
                        </button>
                        {openMobileMenus[nav.label] && (
                          <div className="mt-1 ml-3 flex flex-col gap-4 border-l-2 border-slate-100 py-2 pl-4 dark:border-slate-800">
                            {nav.children.map((group, idx) => (
                              <div key={idx}>
                                {group.category && (
                                  <h5 className="mb-2 text-xs font-black text-slate-400 uppercase">
                                    {group.category}
                                  </h5>
                                )}
                                <div className="flex flex-col gap-2">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      className="text-sm font-medium text-slate-600 dark:text-slate-400"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={nav.label}
                        href={nav.href || '#'}
                        className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        {nav.label}
                      </Link>
                    ),
                  )}
                  <hr className="my-4 dark:border-slate-800" />
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-md"
                  >
                    Tìm giải pháp phù hợp
                  </button>
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
