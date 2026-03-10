# 06 - SEO & Performance

> **Phase 1**: Chỉ cần cấu hình Metadata API cho mỗi trang. Sitemap, Analytics thêm vào Phase 2.

## 1. Metadata API (Next.js built-in)

### Root metadata

File `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - Công ty Công nghệ`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['công nghệ', 'phần mềm', 'giải pháp doanh nghiệp', 'RIC Vietnam'],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Per-page metadata

Mỗi trang cần `export const metadata` riêng:

```tsx
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: 'Về chúng tôi', // → "Về chúng tôi | RIC Vietnam"
  description: 'Tìm hiểu về lịch sử, sứ mệnh và đội ngũ RIC Vietnam.',
}
```

### Dynamic metadata cho trang chi tiết

```tsx
// src/app/products/[slug]/page.tsx
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Lấy thông tin sản phẩm từ API hoặc local data
  const product = await getProduct(slug)

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}
```

---

## 2. Sitemap & Robots.txt _(Phase 2)_

> Thêm `next-sitemap` sau khi UI hoàn thiện và chuẩn bị deploy production.

### Cài đặt next-sitemap

File `next-sitemap.config.js`:

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ricvina.vn',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,

  // Trang nào không cần index
  exclude: ['/api/*'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },

  // Thêm dynamic routes
  additionalPaths: async (config) => {
    const paths = []

    // Lấy danh sách sản phẩm từ API
    // const products = await fetch(`${API_BASE_URL}/products`).then(r => r.json());
    // products.forEach(p => {
    //   paths.push({
    //     loc: `/products/${p.slug}`,
    //     changefreq: 'monthly',
    //     priority: 0.8,
    //     lastmod: new Date(p.updatedAt).toISOString(),
    //   });
    // });

    return paths
  },
}
```

Script trong `package.json`:

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

Mỗi lần `pnpm build` sẽ tự động generate `sitemap.xml` và `robots.txt`.

---

## 3. Structured Data (JSON-LD)

Giúp Google hiểu nội dung trang tốt hơn → hiển thị rich snippets.

File `src/components/shared/structured-data.tsx`:

```tsx
interface StructuredDataProps {
  data: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
```

### Sử dụng trong trang chủ

```tsx
// src/app/page.tsx
import { StructuredData } from '@/components/shared/structured-data'
import { SITE_CONFIG } from '@/lib/constants'

export default function HomePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-123-456-789',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese',
    },
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.linkedin],
  }

  return (
    <>
      <StructuredData data={orgSchema} />
      {/* Sections */}
    </>
  )
}
```

### Sử dụng trong trang tin tức chi tiết

```tsx
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  image: article.thumbnail,
  datePublished: article.publishedAt,
  author: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
}
```

---

## 4. Performance Optimization

### Image Optimization

Luôn dùng `next/image`:

```tsx
import Image from 'next/image'

// Thay vì <img src="...">
;<Image
  src="/images/hero.jpg"
  alt="Mô tả ảnh"
  width={1200}
  height={630}
  priority // Chỉ dùng cho ảnh above-the-fold (hero)
  placeholder="blur" // Nếu có blurDataURL
/>
```

### Font Optimization

Đã cấu hình ở bước 03 với `next/font` → tự động self-host, no layout shift.

### Lazy loading sections

```tsx
import dynamic from 'next/dynamic'

// Các section dưới fold → lazy load
const Testimonials = dynamic(() =>
  import('@/components/sections/testimonials').then((mod) => mod.Testimonials),
)
const Partners = dynamic(() => import('@/components/sections/partners').then((mod) => mod.Partners))
```

### Prefetch links

Next.js App Router tự động prefetch `<Link>` khi visible. Không cần cấu hình thêm.

---

## 5. Google Analytics _(Phase 2)_

> Thêm sau khi chuẩn bị deploy production.

```bash
pnpm add @next/third-parties
```

File `src/app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  )
}
```

---

## 6. SEO Checklist

Trước khi deploy, kiểm tra:

- [ ] Mỗi trang có `title` và `description` riêng
- [ ] Ảnh OG (1200x630 px) cho trang chủ và các trang chính
- [ ] `robots.txt` và `sitemap.xml` được generate
- [ ] Structured data (JSON-LD) cho Organization, Article
- [ ] Tất cả ảnh dùng `next/image` với `alt` text
- [ ] Font có `vietnamese` subset
- [ ] `lang="vi"` trên `<html>`
- [ ] Favicon + Apple touch icon
- [ ] HTTPS enabled
- [ ] Google Search Console đã verify và submit sitemap
- [ ] Google PageSpeed score > 90 trên mobile
