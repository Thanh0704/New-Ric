export const SITE_CONFIG = {
  name: 'RIC Vietnam',
  description: 'Công ty công nghệ hàng đầu Việt Nam',
  url: 'https://ricvina.vn',
  adminUrl: 'https://ricvina.vn/#/login',
  ogImage: '/images/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/ricvietnam',
    linkedin: 'https://linkedin.com/company/ricvietnam',
    zalo: 'https://zalo.me/ricvietnam',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Tuyển dụng', href: '/careers' },
  { label: 'Liên hệ', href: '/contact' },
] as const
