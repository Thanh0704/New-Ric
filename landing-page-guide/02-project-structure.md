# 02 - Cấu trúc thư mục

## Tổng quan

```
ric-landing/
├── public/                     # Static assets
│   ├── images/
│   │   ├── logo.svg            # Logo công ty
│   │   ├── og-image.jpg        # Open Graph image (1200x630)
│   │   ├── hero/               # Ảnh hero sections
│   │   ├── products/           # Ảnh sản phẩm (mock)
│   │   ├── news/               # Ảnh tin tức (mock)
│   │   └── team/               # Ảnh đội ngũ (mock)
│   └── favicon.ico
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── page.tsx            # Trang chủ "/"
│   │   ├── not-found.tsx       # Trang 404
│   │   ├── globals.css         # Global styles + Tailwind
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx        # "/about" - Về chúng tôi
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx        # "/products" - Danh sách sản phẩm
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # "/products/[slug]" - Chi tiết sản phẩm
│   │   │
│   │   ├── news/
│   │   │   ├── page.tsx        # "/news" - Danh sách tin tức
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # "/news/[slug]" - Chi tiết bài viết
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx        # "/contact" - Liên hệ
│   │   │
│   │   ├── careers/
│   │   │   ├── page.tsx        # "/careers" - Tuyển dụng
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # "/careers/[slug]" - Chi tiết vị trí
│   │   │
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # API giả (trả về success, chưa gửi email thật)
│   │
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── nav-links.ts
│   │   │
│   │   ├── sections/           # Các section trang chủ
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── partners.tsx
│   │   │   └── cta.tsx
│   │   │
│   │   ├── shared/             # Shared components
│   │   │   ├── container.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── animate-on-scroll.tsx
│   │   │   └── back-to-top.tsx
│   │   │
│   │   └── forms/
│   │       └── contact-form.tsx
│   │
│   ├── data/                   # ← Mock data (thay thế API)
│   │   ├── products.ts         # Danh sách sản phẩm mock
│   │   ├── news.ts             # Danh sách tin tức mock
│   │   ├── careers.ts          # Danh sách tuyển dụng mock
│   │   ├── testimonials.ts     # Đánh giá khách hàng mock
│   │   ├── partners.ts         # Đối tác mock
│   │   └── team.ts             # Đội ngũ mock
│   │
│   ├── lib/
│   │   ├── utils.ts            # cn() helper (shadcn/ui)
│   │   └── constants.ts        # Site config, nav items
│   │
│   ├── hooks/
│   │   └── use-scroll-spy.ts
│   │
│   └── types/
│       └── index.ts            # TypeScript interfaces
│
├── .env.local
├── .prettierrc
├── .husky/
├── commitlint.config.ts
├── components.json             # shadcn/ui config
├── next.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Giải thích chi tiết

### `src/data/` - Mock Data (quan trọng)

Đây là nơi chứa **toàn bộ dữ liệu giả** cho giai đoạn build UI. Mỗi file export một array.

```
src/data/
├── products.ts     → Product[]       (danh sách sản phẩm)
├── news.ts         → NewsArticle[]   (danh sách tin tức)
├── careers.ts      → Career[]        (vị trí tuyển dụng)
├── testimonials.ts → Testimonial[]   (đánh giá của khách hàng)
├── partners.ts     → Partner[]       (logo đối tác)
└── team.ts         → TeamMember[]    (thành viên đội ngũ)
```

Khi ghép API thật, chỉ cần **thay thế nội dung file này** bằng fetch call — toàn bộ UI không đổi.

### `src/app/` - Routes

Mỗi folder = 1 route. Tất cả pages đều là **SSG** (không có dynamic/ISR).

### `src/components/sections/` - Sections trang chủ

```tsx
// src/app/page.tsx — sắp xếp sections theo thứ tự Figma
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  )
}
```

### `src/app/api/contact/route.ts` - Contact API (mock)

Giai đoạn này chỉ trả về success, **không gửi email thật**:

```typescript
export async function POST() {
  // TODO Phase 2: tích hợp Resend để gửi email thật
  return Response.json({ success: true })
}
```
