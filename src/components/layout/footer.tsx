'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const productLinks = [
  { label: 'Hệ thống Quản trị', href: '/products' },
  { label: 'Hệ thống Hỗ trợ Kinh doanh', href: '/products' },
  { label: 'Hệ thống Truyền thông', href: '/products' },
  { label: 'Hệ thống Chăm sóc khách hàng', href: '/products' },
  { label: 'Giải pháp', href: '/products' },
]

const aboutLinks = [
  { label: 'Câu chuyện thương hiệu', href: '/about' },
  { label: 'Đội ngũ chuyên gia', href: '/about' },
  { label: 'Đối tác chiến lược', href: '/about' },
  { label: 'Cơ hội nghề nghiệp', href: '/careers' },
  { label: 'Tin tức công nghệ', href: '/news' },
]

const policyLinks = [
  { label: 'Chính sách bảo mật', href: '/privacy-policy' },
  { label: 'Điều khoản sử dụng', href: '/terms' },
  { label: 'Câu hỏi thường gặp', href: '/faq' },
]

function AccordionColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-800 pb-4 lg:border-none lg:pb-0">
      <button
        className="flex w-full items-center justify-between py-2 lg:mb-6 lg:cursor-default lg:py-0"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h5 className="text-lg font-bold text-white">{title}</h5>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-slate-400 transition-transform duration-200 lg:hidden',
            open && 'rotate-180',
          )}
        />
      </button>
      <ul className={cn('mt-4 space-y-4 text-sm lg:mt-0 lg:block', !open && 'hidden')}>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 px-4 py-12 text-slate-300 md:mt-20 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        {/* Column 1 — Company Info (always open) */}
        <div className="space-y-5 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RIC Việt Nam Logo"
              width={64}
              height={64}
              className="h-12 w-auto object-contain md:h-14"
            />
            <span className="text-sm font-bold tracking-tight text-white uppercase">
              Công ty Cổ phần Đầu tư và Phát triển RIC Việt Nam
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium text-white">MST:</span> 0110014823
            </p>
            <p>
              <span className="font-medium text-white">Trụ sở:</span> Số 05, ngõ 58, đường Chùa Võ,
              Dương Nội, Hà Nội
            </p>
            <p>
              <span className="font-medium text-white">VP giao dịch:</span> 38 Thâm Tâm, Phường Xuân
              Phương, Quận Nam Từ Liêm, Hà Nội
            </p>
          </div>
        </div>

        {/* Column 2 — Sản phẩm (accordion on mobile) */}
        <AccordionColumn title="Sản phẩm" links={productLinks} />

        {/* Column 3 — Về chúng tôi (accordion on mobile) */}
        <AccordionColumn title="Về chúng tôi" links={aboutLinks} />

        {/* Column 4 — Chính sách (accordion on mobile) */}
        <AccordionColumn title="Chính sách" links={policyLinks} />

        {/* Column 5 — Liên hệ (always open) */}
        <div>
          <h5 className="mb-4 text-lg font-bold text-white lg:mb-6">Liên hệ</h5>
          <p className="mb-4 text-sm lg:mb-6">
            Đăng ký để nhận tư vấn chuyển đổi số miễn phí từ chuyên gia của chúng tôi.
          </p>
          <div className="flex flex-col gap-3">
            <input
              className="focus:ring-primary rounded-xl border-none bg-slate-800 px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
              placeholder="Email của bạn"
              type="email"
            />
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 rounded-xl py-2.5 text-center text-sm font-bold text-white transition-all"
            >
              Gửi yêu cầu
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-8 text-center text-xs md:mt-20">
        <p>
          © {new Date().getFullYear()} RIC Việt Nam. All rights reserved. Designed for digital
          excellence.
        </p>
      </div>
    </footer>
  )
}
