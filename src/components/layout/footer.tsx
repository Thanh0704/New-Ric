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
    <div className="border-b border-slate-200 pb-4 lg:border-none lg:pb-0">
      <button
        className="flex w-full items-center justify-between py-2 lg:mb-6 lg:cursor-default lg:py-0"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h5 className="text-lg font-bold text-slate-900">{title}</h5>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-slate-400 transition-transform duration-200 lg:hidden',
            open && 'rotate-180',
          )}
        />
      </button>
      <ul className={cn('mt-4 space-y-3 text-sm lg:mt-0 lg:block', !open && 'hidden')}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-medium text-slate-600 transition-colors hover:text-[#3b82f6]"
            >
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
    <footer
      className="relative bg-cover bg-fixed bg-center px-4 pt-32 pb-8 md:pt-40 md:pb-12"
      style={{ backgroundImage: "url('/images/hero/form-dk.jpg')" }}
    >
      {/* Lớp phủ đã được đồng bộ màu và độ mờ giống hệt Form Đăng ký */}
      <div className="absolute inset-0 bg-[#0b1329]/80 backdrop-blur-[2px]"></div>

      {/* KHỐI CARD FOOTER TRẮNG LƠ LỬNG */}
      <div className="relative z-10 mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-12 lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Cột 1: Thông tin công ty */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="RIC Việt Nam Logo"
                width={64}
                height={64}
                className="h-12 w-auto object-contain md:h-14"
              />
              <span className="text-sm font-extrabold tracking-tight text-slate-900 uppercase">
                Công ty Cổ phần Đầu tư và Phát triển RIC Việt Nam
              </span>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                <span className="font-bold text-slate-900">MST:</span> 0110014823
              </p>
              <p>
                <span className="font-bold text-slate-900">Trụ sở:</span> Số 05, ngõ 58, đường Chùa
                Võ, Dương Nội, Hà Nội
              </p>
              <p>
                <span className="font-bold text-slate-900">VP giao dịch:</span> 38 Thâm Tâm, Phường
                Xuân Phương, Quận Nam Từ Liêm, Hà Nội
              </p>
            </div>
          </div>

          {/* Cột 2, 3, 4: Menu liên kết */}
          <AccordionColumn title="Sản phẩm" links={productLinks} />
          <AccordionColumn title="Về chúng tôi" links={aboutLinks} />
          <AccordionColumn title="Chính sách" links={policyLinks} />

          {/* Cột 5: Form liên hệ nhanh */}
          <div>
            <h5 className="mb-4 text-lg font-bold text-slate-900 lg:mb-6">Liên hệ</h5>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 lg:mb-6">
              Đăng ký để nhận tư vấn chuyển đổi số miễn phí từ chuyên gia của chúng tôi.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-[#3b82f6] focus:bg-white focus:ring-1 focus:ring-[#3b82f6]"
                placeholder="Email của bạn"
                type="email"
              />
              <Link
                href="/contact"
                className="mt-1 block w-full rounded-xl bg-[#3b82f6] px-4 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-[#2563eb]"
              >
                Gửi yêu cầu
              </Link>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm font-medium text-slate-500 md:mt-16">
          <p>
            © {new Date().getFullYear()} RIC Việt Nam. All rights reserved. Designed for digital
            excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
