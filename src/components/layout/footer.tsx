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
  { label: 'Tin tức & Sự kiện', href: '/news' },
  { label: 'Blog chuyển đổi số', href: '/blog' },
  { label: 'Thư viện tài liệu', href: '/resources/library' },
  { label: 'Trung tâm hỗ trợ', href: '/help-center' },
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
    <div className="border-b border-white/10 lg:border-none">
      <button
        // ĐÃ SỬA: Thêm text-left để chữ kẹp sát lề trái, Tăng py-5 trên mobile để nới rộng khoảng cách các thẻ, chống "dính"
        className="flex w-full items-center justify-between py-5 text-left md:py-4 lg:mb-6 lg:cursor-default lg:py-0"
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
      {/* ĐÃ SỬA: Tăng mb-5 khi mở ra để tương xứng với py-5 ở trên */}
      <ul className={cn('mb-5 space-y-3 text-sm lg:mt-0 lg:mb-0 lg:block', !open && 'hidden')}>
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
    <footer className="relative w-full overflow-hidden bg-slate-900 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 pt-10 pb-20 md:pb-40 lg:pt-16 lg:pb-48">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1800px] lg:w-[96%] lg:px-12">
        {/* =========================================================
            ĐÃ SỬA LOGIC: Đổi gap-6 thành gap-0 trên mobile.
            Việc này gom toàn bộ khối Accordion lại thành 1 list thống nhất, 
            loại bỏ hoàn toàn sự lộn xộn. Trả lại gap-6 cho Tablet và Laptop (md:gap-6).
            ========================================================= */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-12">
          {/* TỐI ƯU: Bổ sung pb-8 trên Mobile để tạo vùng đệm thở ngăn cách phần Địa chỉ với các Accordion */}
          <div className="space-y-4 pb-8 md:col-span-2 md:space-y-6 md:pb-0 lg:col-span-4 lg:pr-12">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="RIC Việt Nam Logo"
                width={360}
                height={100}
                className="h-12 w-auto object-contain sm:h-16 md:h-24 lg:h-28"
              />
            </Link>
            <p className="mt-2 text-xs font-bold tracking-wide text-white uppercase md:text-sm">
              Công ty CP Đầu tư và Phát triển RIC Việt Nam
            </p>
            <div className="space-y-2 text-xs leading-relaxed text-slate-400 md:space-y-4 md:text-sm">
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

          <div className="flex flex-col lg:col-span-2 lg:gap-8">
            <AccordionColumn
              title="Giải pháp"
              links={solutionLinks}
              onSmartClick={handleSmartClick}
            />
            <div className="hidden lg:block">
              <AccordionColumn
                title="Tài nguyên"
                links={resourceLinks}
                onSmartClick={handleSmartClick}
              />
            </div>
            <div className="block lg:hidden">
              <AccordionColumn
                title="Tài nguyên"
                links={resourceLinks}
                onSmartClick={handleSmartClick}
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-2 lg:gap-8">
            <AccordionColumn title="Về RIC" links={aboutLinks} onSmartClick={handleSmartClick} />
            <AccordionColumn
              title="Chính sách"
              links={policyLinks}
              onSmartClick={handleSmartClick}
            />
          </div>

          {/* TỐI ƯU: Đổi mt-6 thành pt-8 trên mobile để tách biệt rõ phần Liên hệ khỏi Accordion */}
          <div className="pt-8 md:pt-0 lg:col-span-2 lg:mt-0">
            <h5 className="mb-3 text-sm font-bold tracking-widest text-white uppercase lg:mb-6">
              Liên hệ
            </h5>
            <p className="mb-4 text-xs leading-relaxed text-slate-400 md:text-sm lg:mb-6">
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
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-500"
              >
                Gửi yêu cầu{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[10px] font-medium text-slate-400 md:mt-12 md:flex-row md:text-xs">
          <p>© {new Date().getFullYear()} RIC Việt Nam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for <span className="font-bold text-cyan-400">digital excellence</span>.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 flex w-full -translate-x-1/2 justify-center select-none">
        <span
          className="translate-y-[28%] bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-[15vw] leading-none font-black tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] sm:text-[18vw] xl:text-[220px]"
          style={{ fontFamily: "'Arial Rounded MT Bold', 'Quicksand', 'Nunito', sans-serif" }}
        >
          RICVINA
        </span>
      </div>
    </footer>
  )
}
