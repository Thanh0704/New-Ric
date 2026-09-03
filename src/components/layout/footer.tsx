'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
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
        <h5 className="text-sm font-bold tracking-widest text-white uppercase">{title}</h5>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-cyan-400 transition-transform duration-200 lg:hidden',
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
              className="font-medium text-slate-400 transition-colors hover:text-cyan-400"
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
      className="relative w-full bg-cover bg-fixed bg-center px-4 pt-16 pb-12 lg:px-10 lg:pt-24 lg:pb-16"
      style={{ backgroundImage: "url('/images/hero/form-dk.jpg')" }}
    >
      {/* ĐÃ SỬA LỖI: Trả lại lớp phủ xanh dương (blue-900/40) y hệt như khối Đăng ký ở trên */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

      {/* KHỐI FOOTER LƠ LỬNG (FLOATING CARD) - Giữ nguyên màu Gradient chuẩn */}
      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 p-8 shadow-2xl md:p-12 lg:p-16">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/20 blur-[100px]"></div>

        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 md:col-span-2 lg:col-span-4 lg:pr-12">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="RIC Việt Nam Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm font-bold tracking-wide text-white uppercase">
              Công ty CP Đầu tư và Phát triển RIC Việt Nam
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                <span className="font-bold text-slate-300">MST:</span> 0110014823
              </p>
              <p>
                <span className="font-bold text-slate-300">Trụ sở:</span> Số 05, ngõ 58, đường Chùa
                Võ, Dương Nội, Hà Đông, Hà Nội
              </p>
              <p>
                <span className="font-bold text-slate-300">VP giao dịch:</span> 38 Thâm Tâm, Phường
                Xuân Phương, Quận Nam Từ Liêm, Hà Nội
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AccordionColumn
              title="Sản phẩm"
              links={productLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
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

          <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
            <AccordionColumn title="Về RIC" links={aboutLinks} onSmartClick={handleSmartClick} />
            <AccordionColumn
              title="Chính sách"
              links={policyLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          <div className="lg:col-span-2">
            <h5 className="mb-4 text-sm font-bold tracking-widest text-white uppercase lg:mb-6">
              Liên hệ
            </h5>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Đăng ký để nhận tư vấn chuyển đổi số miễn phí từ chuyên gia.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-1 focus:ring-cyan-400"
                placeholder="Email của bạn"
                type="email"
              />
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Gửi yêu cầu{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} RIC Việt Nam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for <span className="font-bold text-cyan-400">digital excellence</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
