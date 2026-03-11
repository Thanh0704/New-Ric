export interface NavDropdownItem {
  label: string
  href: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
  children?: NavDropdownItem[]
}

export const navLinks: NavLink[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Liên hệ', href: '/contact' },
  { label: 'Tuyển dụng', href: '/careers' },
]
