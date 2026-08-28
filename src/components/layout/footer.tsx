'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const productLinks = [
  { label: 'RIC ECOM', href: '/products/ecom' },
  { label: 'RIC Affiliate', href: '/products/ric-affiliate' },
  { label: 'ZHUB', href: '/products/zhub' },
  { label: 'RIC Message', href: '/products/ric-message' },
  { label: 'RIC ERP', href: '/products/ric-erp' },
  { label: 'RICIO', href: '/products/ricio' },
  { label: 'RIC Trust', href: '/products/ric-trust' },
]

const solutionLinks = [
  { label: 'Bán hàng và Thương mại', href: '/products?category=sales' },
  { label: 'Marketing & Tương tác', href: '/products?category=marketing' },
  { label: 'Quản trị chuyên ngành', href: '/products?category=management' },
  { label: 'Bảo vệ thương hiệu', href: '/products?category=security' },
]

const resourceLinks = [
  { label: 'Case Studies', href: '/customers' },
  { label: 'Kiến thức & Hướng dẫn', href: '/knowledge' },
  { label: 'Tài liệu sản phẩm', href: '/docs' },
]

const aboutLinks = [
  { label: 'Câu chuyện của chúng tôi', href: '#' },
  { label: 'Hệ sinh thái RIC', href: '/?scrollTo=ecosystem' },
  { label: 'Đối tác', href: '#' },
  { label: 'Tuyển dụng', href: '/careers' },
  { label: 'Liên hệ', href: '/contact' },
]

const policyLinks = [
  { label: 'Chính sách bảo mật', href: '/privacy-policy' },
  { label: 'Điều khoản sử dụng', href: '/terms' },
  { label: 'Câu hỏi thường gặp', href: '/faq' },
]

function AccordionColumn({
  title,
  links,
  onSmartClick,
}: {
  title: string
  links: { label: string; href: string }[]
  onSmartClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 pb-4 lg:border-none lg:pb-0">
      <button
        className="flex w-full items-center justify-between py-2 lg:mb-6 lg:cursor-default lg:py-0"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h5 className="text-lg font-bold text-white">{title}</h5>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-blue-200 transition-transform duration-200 lg:hidden',
            open && 'rotate-180',
          )}
        />
      </button>
      <ul className={cn('mt-4 space-y-3 text-sm lg:mt-0 lg:block', !open && 'hidden')}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(e) => onSmartClick(e, link.href)}
              className="font-medium text-slate-200 transition-colors hover:text-white"
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
  const pathname = usePathname()

  const handleSmartClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.includes('?scrollTo=')) {
      e.preventDefault()
      const param = href.split('?scrollTo=')[1]
      const targetId =
        param === 'insights' ? 'ric-insights' : param === 'ecosystem' ? 'ric-ecosystem' : ''
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer
      className="relative bg-cover bg-fixed bg-center px-4 pt-32 pb-8 md:pt-40 md:pb-12"
      style={{ backgroundImage: "url('/images/hero/form-dk.jpg')" }}
    >
      {/* LỚP PHỦ MỜ ẢO: Đồng bộ màu sắc với khối Register Demo phía trên */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl rounded-[2rem] border border-blue-400/30 bg-blue-900/60 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="RIC Việt Nam Logo"
                width={64}
                height={64}
                className="h-12 w-auto object-contain md:h-14"
              />
              <span className="text-sm font-extrabold tracking-tight text-white uppercase drop-shadow-sm">
                Công ty Cổ phần Đầu tư và Phát triển RIC Việt Nam
              </span>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-slate-200">
              <p>
                <span className="font-bold text-white">MST:</span> 0110014823
              </p>
              <p>
                <span className="font-bold text-white">Trụ sở:</span> Số 05, ngõ 58, đường Chùa Võ,
                Dương Nội, Hà Nội
              </p>
              <p>
                <span className="font-bold text-white">VP giao dịch:</span> 38 Thâm Tâm, Phường Xuân
                Phương, Quận Nam Từ Liêm, Hà Nội
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8">
            <AccordionColumn
              title="Sản phẩm"
              links={productLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          <div className="flex flex-col gap-4 lg:gap-8">
            <AccordionColumn
              title="Giải pháp"
              links={solutionLinks}
              onSmartClick={handleSmartClick}
            />
            <AccordionColumn
              title="Tài nguyên"
              links={resourceLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          <div className="flex flex-col gap-4 lg:gap-8">
            <AccordionColumn title="Về RIC" links={aboutLinks} onSmartClick={handleSmartClick} />
            <AccordionColumn
              title="Chính sách"
              links={policyLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold text-white lg:mb-6">Liên hệ</h5>
            <p className="mb-4 text-sm leading-relaxed text-slate-200 lg:mb-6">
              Đăng ký để nhận tư vấn chuyển đổi số miễn phí từ chuyên gia của chúng tôi.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-300 transition-all outline-none focus:border-white focus:bg-white/20 focus:ring-1 focus:ring-white"
                placeholder="Email của bạn"
                type="email"
              />
              <Link
                href="/contact"
                className="mt-1 block w-full rounded-xl bg-white px-4 py-3.5 text-center text-sm font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Gửi yêu cầu
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm font-medium text-slate-200 md:mt-16">
          <p>
            © {new Date().getFullYear()} RIC Việt Nam. All rights reserved. Designed for digital
            excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
