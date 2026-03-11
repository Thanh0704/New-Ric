import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, BarChart3 } from 'lucide-react'
import { RicLogo } from './header'

const footerLinks = {
  about: [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Tuyển dụng', href: '/careers' },
  ],
  newsPolicy: [
    { label: 'Blog công nghệ', href: '/news' },
    { label: 'Chính sách bảo mật', href: '/privacy-policy' },
    { label: 'Quy định dịch vụ', href: '/terms' },
    { label: 'Hỗ trợ khách hàng', href: '/faq' },
  ],
}

const socialLinks = [
  { icon: BarChart3, href: '#' },
  { icon: Mail, href: '#' },
  { icon: Globe, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-slate-300 md:px-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <RicLogo className="text-primary" />
            <span className="text-xl font-bold tracking-tight text-white">RIC VIỆT NAM</span>
          </div>
          <p className="text-sm leading-relaxed opacity-70">
            <b>RIC Việt Nam</b> xây dựng mô hình hệ sinh thái đa ngành, tập trung vào việc tạo ra
            giá trị bền vững.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="hover:bg-primary flex size-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:text-slate-900"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Về chúng tôi */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold tracking-widest text-white uppercase">Về chúng tôi</h4>
          <ul className="space-y-4 text-sm">
            {footerLinks.about.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Tin tức & Chính sách */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold tracking-widest text-white uppercase">
            Tin tức &amp; Chính sách
          </h4>
          <ul className="space-y-4 text-sm">
            {footerLinks.newsPolicy.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Liên hệ */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold tracking-widest text-white uppercase">Liên hệ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
              <span>38 Thâm Tâm, Yên Hoà, Hà Nội, Việt Nam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary size-5 shrink-0" />
              <span>+84 (0) 975 769 323</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary size-5 shrink-0" />
              <span>contact@ricvina.vn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-16 max-w-[1200px] border-t border-slate-800 pt-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()} RIC Việt Nam. Bảo lưu mọi quyền. Thiết kế cho kỷ nguyên chuyển
        đổi số.
      </div>
    </footer>
  )
}
