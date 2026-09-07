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
    // TỐI ƯU: Đưa phần viền xuống bọc toàn bộ khối, bỏ pb-4 cũ đi
    <div className="border-b border-white/10 lg:border-none">
      <button
        // TỐI ƯU: Tăng py-4 trên mobile để tạo vùng bấm rộng rãi, dễ chạm bằng ngón tay
        className="flex w-full items-center justify-between py-4 lg:mb-6 lg:cursor-default lg:py-0"
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
      {/* TỐI ƯU: Thêm mb-4 khi mở ra để cách viền dưới một khoảng đẹp mắt */}
      <ul className={cn('mb-4 space-y-3 text-sm lg:mt-0 lg:mb-0 lg:block', !open && 'hidden')}>
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
    // TỐI ƯU: Giảm padding bottom pb-28 xuống pb-20 trên mobile
    <footer className="relative w-full overflow-hidden bg-slate-900 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 pt-10 pb-20 md:pb-40 lg:pt-16 lg:pb-48">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1800px] lg:w-[96%] lg:px-12">
        {/* TỐI ƯU: Giảm gap-12 xuống gap-6 trên mobile để đỡ trống trải */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 md:col-span-2 md:space-y-6 lg:col-span-4 lg:pr-12">
            <Link href="/" className="inline-block">
              {/* TỐI ƯU LOGO: Thu nhỏ xuống h-12 trên điện thoại, trả lại h-28 bề thế trên PC */}
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

          <div className="mt-4 lg:col-span-2 lg:mt-0">
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
            {/* Trên Mobile đưa Tài Nguyên thành 1 khối Accordion bình thường */}
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

          <div className="mt-6 lg:col-span-2 lg:mt-0">
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

        {/* TỐI ƯU: Đẩy khoảng cách mt-8 thay vì mt-12 trên mobile */}
        <div className="relative z-20 mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[10px] font-medium text-slate-400 md:mt-12 md:flex-row md:text-xs">
          <p>© {new Date().getFullYear()} RIC Việt Nam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for <span className="font-bold text-cyan-400">digital excellence</span>.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 flex w-full -translate-x-1/2 justify-center select-none">
        <span
          // TỐI ƯU CHỮ NỀN: Thu nhỏ text-[15vw] trên mobile thay vì 18vw để tránh chèn ngang giao diện
          className="translate-y-[28%] bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-[15vw] leading-none font-black tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] sm:text-[18vw] xl:text-[220px]"
          style={{ fontFamily: "'Arial Rounded MT Bold', 'Quicksand', 'Nunito', sans-serif" }}
        >
          RICVINA
        </span>
      </div>
    </footer>
  )
}
