# 00 - Tech Stack Overview

> **Lưu ý**: Các version dưới đây được cập nhật tính đến tháng 3/2026. Khi khởi tạo project, hãy chạy `pnpm create next-app@latest` để tự động lấy version mới nhất. Kiểm tra version hiện tại bằng:
>
> ```bash
> pnpm show next version        # Next.js
> pnpm show react version       # React
> node --version                # Node.js
> pnpm --version                # pnpm
> ```

> **Giai đoạn hiện tại**: Build UI với **mock data hoàn toàn**, dựa theo Figma. Chưa kết nối API hay external services. Những thư viện đánh dấu _(sau này)_ sẽ được thêm vào sau khi UI xong.

---

## Core Framework

| Layer           | Technology     | Version | Lý do chọn                                 |
| --------------- | -------------- | ------- | ------------------------------------------ |
| Framework       | **Next.js**    | 16.x    | App Router, RSC, SSG, Turbopack            |
| Language        | **TypeScript** | 5.7+    | Type safety, DX                            |
| Runtime         | **Node.js**    | 24 LTS  | Long-term support (v24.14.0+)              |
| Package Manager | **pnpm**       | 10.x    | Nhanh, tiết kiệm disk, strict dependencies |

## Styling & UI

| Layer             | Technology             | Version | Lý do chọn                                                  |
| ----------------- | ---------------------- | ------- | ----------------------------------------------------------- |
| UI Library        | **React**              | 19.x    | React 19 với Server Components, Actions                     |
| CSS Framework     | **Tailwind CSS**       | 4.2+    | v4 stable, utility-first, CSS variables                     |
| Component Library | **shadcn/ui**          | latest  | Copy-paste components, customizable 100%, dựa trên Radix UI |
| Icons             | **Lucide React**       | latest  | Icon set mặc định của shadcn/ui, nhẹ, tree-shakable         |
| Animation         | **Framer Motion**      | 12.x+   | Scroll animations, page transitions                         |
| Fonts             | **Geist** (hoặc Inter) | -       | Font modern, rõ ràng, được Vercel phát triển                |

## Forms

| Layer | Technology                | Version   | Lý do chọn                           |
| ----- | ------------------------- | --------- | ------------------------------------ |
| Form  | **React Hook Form + Zod** | 7.x + 3.x | Validation, type-safe, UI hoàn chỉnh |

## Development & Quality

| Layer      | Technology              | Version | Lý do chọn                        |
| ---------- | ----------------------- | ------- | --------------------------------- |
| Linting    | **ESLint**              | 9.x+    | Flat config, chuẩn Next.js        |
| Formatting | **Prettier**            | 3.x+    | Code formatting thống nhất        |
| Git Hooks  | **Husky + lint-staged** | latest  | Auto lint/format trước khi commit |
| Commit     | **Commitlint**          | 19.x+   | Conventional commits              |

## Deployment

| Layer   | Technology                       | Lý do chọn                                           |
| ------- | -------------------------------- | ---------------------------------------------------- |
| Hosting | **Vercel** hoặc **Docker + VPS** | Vercel tối ưu nhất cho Next.js, Docker nếu self-host |
| CI/CD   | **GitHub Actions**               | Auto build, test, deploy                             |

---

## Thêm sau (Phase 2 - Kết nối thực)

Sau khi UI hoàn thiện từ Figma, thêm vào:

| Thư viện                | Mục đích                                         |
| ----------------------- | ------------------------------------------------ |
| **Resend**              | Gửi email thật cho contact form                  |
| **next-sitemap**        | Auto-generate sitemap.xml + robots.txt           |
| **@next/third-parties** | Google Analytics                                 |
| Admin System API        | Thay mock data bằng dữ liệu thật từ `ric-system` |

---

## Kiến trúc hiện tại (Phase 1 - Mock)

```
Browser
  │
  ▼
┌─────────────────────────────────────┐
│  Next.js 16 (App Router)            │
│                                     │
│  Tất cả pages đều là SSG            │
│  (Static Site Generation)           │
│                                     │
│  Data lấy từ:                       │
│  src/data/                          │
│  ├── products.ts   ← mock           │
│  ├── news.ts       ← mock           │
│  └── careers.ts    ← mock           │
│                                     │
│  [Đăng nhập] → redirect đến         │
│  admin.domain.com                   │
└─────────────────────────────────────┘
```
