# RIC Vietnam — Landing Page

Trang landing page doanh nghiệp cho **RIC Vietnam** ([ricvina.vn](https://ricvina.vn)) — công ty công nghệ cung cấp giải pháp phần mềm doanh nghiệp (ERP, HRM, WMS). Dự án là một static site sử dụng Next.js App Router với SSG (Static Site Generation), không có database.

## Tech Stack

| Công nghệ             | Version    | Mô tả                                                     |
| --------------------- | ---------- | --------------------------------------------------------- |
| Node.js               | v22        | Runtime                                                   |
| pnpm                  | v10        | Package manager                                           |
| Next.js               | 16         | Framework (App Router + Turbopack)                        |
| React                 | 19         | UI library                                                |
| TypeScript            | 5 (strict) | Language                                                  |
| Tailwind CSS          | v4         | Styling (`@theme` block, không dùng `tailwind.config.js`) |
| shadcn/ui             | v4         | UI components (dùng Base UI, **không phải Radix UI**)     |
| Framer Motion         | 12         | Animation                                                 |
| React Hook Form + Zod | 7 + 4      | Form validation                                           |
| Lucide React          | latest     | Icons                                                     |
| Sonner                | latest     | Toast notifications                                       |

## Yêu cầu hệ thống

- **Node.js** v22+
- **pnpm** v10+ — nếu chưa có: `npm install -g pnpm`

## Cài đặt

```bash
# 1. Clone repository
git clone <repo-url>
cd ric-landing

# 2. Cài đặt dependencies
pnpm install

# 3. (Tuỳ chọn) Tạo file môi trường
cp .env.example .env.local
# Chỉnh sửa NEXT_PUBLIC_SITE_URL nếu cần
```

> Git hooks (Husky) sẽ được tự động cài đặt sau `pnpm install` nhờ script `prepare`.

## Biến môi trường

| Biến                    | Mặc định                   | Mô tả                   |
| ----------------------- | -------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL`  | `https://ricvina.vn`       | URL production của site |
| `NEXT_PUBLIC_ADMIN_URL` | `https://admin.ricvina.vn` | URL admin panel         |

Tạo file `.env.local` ở root để override khi phát triển local:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Các lệnh thường dùng

```bash
# Chạy dev server (http://localhost:3000)
pnpm dev

# Build production
pnpm build

# Chạy production build đã build
pnpm start

# Kiểm tra lỗi ESLint
pnpm lint

# Tự động sửa lỗi ESLint
pnpm lint:fix

# Format code bằng Prettier
pnpm format

# Kiểm tra format mà không sửa
pnpm format:check

# Kiểm tra lỗi TypeScript
pnpm typecheck

# Validate toàn bộ: lint + typecheck + build (dùng trước khi push)
pnpm validate
```

> **Quan trọng**: Luôn chạy `pnpm build` sau mỗi thay đổi để đảm bảo build thành công trước khi commit.

## Cấu trúc dự án

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, Header, Footer, SEO metadata)
│   ├── page.tsx                # Trang chủ (6 sections + JSON-LD)
│   ├── not-found.tsx           # Trang 404 tuỳ chỉnh
│   ├── about/page.tsx          # Giới thiệu (đội ngũ, sứ mệnh)
│   ├── products/               # Danh sách sản phẩm + trang chi tiết [slug]
│   ├── news/                   # Danh sách tin tức + bài viết [slug]
│   ├── careers/                # Danh sách tuyển dụng + vị trí [slug]
│   ├── contact/page.tsx        # Liên hệ (form + thông tin)
│   └── api/contact/route.ts    # Mock API endpoint
├── components/
│   ├── ui/                     # shadcn/ui components (không chỉnh sửa thủ công)
│   ├── layout/                 # Header, Footer, nav-links
│   ├── sections/               # Các section trang chủ
│   ├── shared/                 # Container, SectionHeading, AnimateOnScroll, ...
│   └── forms/                  # ContactForm
├── data/                       # Mock data (products, news, careers, team, ...)
├── hooks/                      # Custom React hooks
├── lib/
│   ├── constants.ts            # SITE_CONFIG, NAV_ITEMS
│   └── utils.ts                # cn() helper
└── types/
    └── index.ts                # Tất cả TypeScript interfaces
```

## Quy ước code

- **Không dấu chấm phẩy**, dùng **single quotes**, **trailing commas** — do Prettier quy định
- **Print width**: 100 ký tự
- **Import alias**: `@/` trỏ đến `src/`
- **Components**: Named exports, tên file PascalCase
- **Data files**: camelCase exports, ví dụ `export const products: Product[]`
- **Pages**: Default export + `export const metadata` (static) hoặc `generateMetadata()` (dynamic)
- **Dynamic routes**: Params là `Promise<{ slug: string }>`, phải `await params` (Next.js 16+)
- **Client components**: Chỉ thêm `'use client'` khi cần hooks, tương tác, hoặc browser API

## Thêm UI component mới

Dùng shadcn CLI — **không tạo thủ công** trong `src/components/ui/`:

```bash
pnpm dlx shadcn@latest add <tên-component>
```

Dự án dùng style `base-nova` với **Base UI** (`@base-ui/react`), không phải Radix UI.

## Lưu ý quan trọng (Gotchas)

| Vấn đề                                    | Giải pháp                                                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| `<Button asChild>` không hoạt động        | Dùng `<Link className={buttonVariants({...})}>` thay thế                       |
| `buttonVariants()` trong server component | Thêm `'use client'` vào component đó                                           |
| Tailwind v4 theme                         | Cấu hình trong `@theme` block ở `globals.css`, không dùng `tailwind.config.js` |
| Font chữ tiếng Việt                       | Geist không hỗ trợ subset `vietnamese`, dùng `latin-ext`                       |
| Zod v4 với React Hook Form                | Cần `@hookform/resolvers` v5+                                                  |
| Next.js 16 dynamic params                 | `params: Promise<{ slug: string }>` — phải `await params`                      |

## Quy tắc commit

Dự án dùng [Conventional Commits](https://www.conventionalcommits.org/) được enforce bởi commitlint:

```
feat:      Tính năng mới
fix:       Sửa lỗi
docs:      Thay đổi tài liệu
style:     Thay đổi style/format (không ảnh hưởng logic)
refactor:  Tái cấu trúc code
perf:      Cải thiện hiệu năng
test:      Thêm/sửa test
chore:     Công việc bảo trì, cấu hình
ci:        Thay đổi CI/CD
build:     Thay đổi build system
```

Ví dụ: `git commit -m "feat: thêm trang giới thiệu"`

## Quy trình phát triển

1. Tạo nhánh từ `main`: `git checkout -b feat/ten-tinh-nang`
2. Viết code — tuân theo cấu trúc và quy ước đã có
3. Kiểm tra trước khi commit: `pnpm validate`
4. Commit theo Conventional Commits (Husky sẽ kiểm tra tự động)
5. Push và tạo Pull Request

## Dữ liệu mock

Toàn bộ dữ liệu nằm trong `src/data/` — đây là dữ liệu tĩnh dùng cho SSG:

- `products.ts` — 3 sản phẩm (ERP, HRM, WMS)
- `news.ts` — 3 bài viết tin tức
- `careers.ts` — 3 vị trí tuyển dụng
- `team.ts` — 3 thành viên đội ngũ
- `testimonials.ts` — 3 đánh giá khách hàng
- `partners.ts` — 5 đối tác

Để thêm dữ liệu: chỉnh sửa file `.ts` tương ứng trong `src/data/`, các interface TypeScript ở `src/types/index.ts`.

## Deploy

Dự án được tối ưu để deploy trên **Vercel**:

```bash
# Build kiểm tra trước khi deploy
pnpm build

# Deploy qua Vercel CLI
vercel --prod
```

Hoặc kết nối GitHub repo với Vercel dashboard để auto-deploy khi push lên `main`.
