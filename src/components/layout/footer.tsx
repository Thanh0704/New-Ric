import Image from 'next/image'
import Link from 'next/link'

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

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 px-4 py-20 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Column 1 — Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RIC Việt Nam Logo"
              width={64}
              height={64}
              className="h-14 w-auto object-contain"
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

        {/* Column 2 — Sản phẩm */}
        <div>
          <h5 className="mb-6 text-lg font-bold text-white">Sản phẩm</h5>
          <ul className="space-y-4 text-sm">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Về chúng tôi */}
        <div>
          <h5 className="mb-6 text-lg font-bold text-white">Về chúng tôi</h5>
          <ul className="space-y-4 text-sm">
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Chính sách */}
        <div>
          <h5 className="mb-6 text-lg font-bold text-white">Chính sách</h5>
          <ul className="space-y-4 text-sm">
            {policyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5 — Liên hệ */}
        <div>
          <h5 className="mb-6 text-lg font-bold text-white">Liên hệ</h5>
          <p className="mb-6 text-sm">
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
      <div className="mx-auto mt-20 max-w-7xl border-t border-slate-800 pt-8 text-center text-xs">
        <p>© {new Date().getFullYear()} RIC Việt Nam.</p>
      </div>
    </footer>
  )
}
