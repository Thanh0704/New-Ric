import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = {
  company: [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Tuyển dụng', href: '/careers' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Liên hệ', href: '/contact' },
  ],
  products: [
    { label: 'Quản lý Bán hàng', href: '/products/he-thong-quan-ly-ban-hang' },
    { label: 'Quản lý Nhân sự', href: '/products/he-thong-quan-ly-nhan-su' },
    { label: 'Quản lý Kho', href: '/products/he-thong-quan-ly-kho' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cột 1: Thông tin công ty */}
          <div>
            <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
            <p className="text-muted-foreground mt-3 text-sm">{SITE_CONFIG.description}</p>
          </div>

          {/* Cột 2: Liên kết công ty */}
          <div>
            <h4 className="font-semibold">Công ty</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Sản phẩm */}
          <div>
            <h4 className="font-semibold">Sản phẩm</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="font-semibold">Liên hệ</h4>
            <ul className="mt-3 space-y-3">
              <li className="text-muted-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Địa chỉ công ty</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@ricvina.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
