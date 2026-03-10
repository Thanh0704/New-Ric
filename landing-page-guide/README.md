# Landing Page Project Guide

Hướng dẫn xây dựng landing page cho công ty công nghệ với Next.js 16 (tháng 3/2026).

## Kế hoạch 2 giai đoạn

| Giai đoạn   | Mục tiêu                                                 | Trạng thái      |
| ----------- | -------------------------------------------------------- | --------------- |
| **Phase 1** | Build UI hoàn toàn với mock data, dựa theo Figma         | ← Đang làm      |
| **Phase 2** | Ghép API thật từ admin system, tích hợp email, analytics | Sau khi UI xong |

## Quick Start (Phase 1 - Mock UI)

```bash
# 1. Tạo project
pnpm create next-app@latest ric-landing --typescript --tailwind --eslint --app --src-dir --turbopack

# 2. Cài dependencies (chỉ những gì cần cho UI)
cd ric-landing
pnpm add framer-motion lucide-react class-variance-authority clsx tailwind-merge
pnpm add react-hook-form @hookform/resolvers zod

# 3. Setup shadcn/ui
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card input textarea label separator sheet navigation-menu badge dialog scroll-area toast

# 4. Chạy dev server
pnpm dev
```

## Đọc hướng dẫn theo thứ tự

1. **[00-tech-stack.md](./00-tech-stack.md)** - Tổng quan tech stack & version
2. **[01-project-init.md](./01-project-init.md)** - Khởi tạo dự án từ đầu
3. **[02-project-structure.md](./02-project-structure.md)** - Cấu trúc thư mục
4. **[03-core-setup.md](./03-core-setup.md)** - Cấu hình core (Tailwind, fonts, utils)
5. **[04-layout-components.md](./04-layout-components.md)** - Header, Footer, Navigation
6. **[05-pages-routing.md](./05-pages-routing.md)** - Tất cả các trang + code mẫu
7. **[06-seo-performance.md](./06-seo-performance.md)** - SEO, metadata, performance
8. **[07-deployment.md](./07-deployment.md)** - Deploy lên Vercel hoặc Docker

## Tech Stack (Phase 1)

| Category        | Tech                  | Version   |
| --------------- | --------------------- | --------- |
| Framework       | Next.js               | 16.x      |
| UI Library      | React                 | 19.x      |
| Language        | TypeScript            | 5.7+      |
| CSS             | Tailwind CSS          | 4.2+      |
| Components      | shadcn/ui             | latest    |
| Animation       | Framer Motion         | 12.x+     |
| Forms           | React Hook Form + Zod | 7.x + 3.x |
| Runtime         | Node.js               | 24 LTS    |
| Package Manager | pnpm                  | 10.x      |

> Chưa cần: Resend, next-sitemap, MDX, Google Analytics — thêm vào Phase 2.

## Kiến trúc Phase 1

```
Browser
  │
  ▼
Next.js 16 (All SSG)
  │
  ├── src/data/products.ts   ← mock
  ├── src/data/news.ts       ← mock
  ├── src/data/careers.ts    ← mock
  └── [Đăng nhập] ──────────→ admin.ricvina.vn
```

Phase 2: thay `src/data/*.ts` bằng fetch từ Admin System API.

## Check version hiện tại

```bash
node --version                # v24.14.0+
pnpm --version                # 10.x+
pnpm show next version        # 16.x
pnpm show react version       # 19.x
pnpm show tailwindcss version # 4.2.x+
```

## Deployment Options

### Option A: Vercel (Khuyến nghị)

- Zero config
- Auto deploy from GitHub
- CDN toàn cầu
- Preview deployments

### Option B: Docker + VPS

- Self-host
- Cùng server với admin system
- Nginx reverse proxy
- Full control

## Support

Nếu gặp lỗi khi follow guide:

1. Check version requirements (Node 24+, pnpm 10+)
2. Xóa `node_modules` và `pnpm-lock.yaml`, chạy lại `pnpm install`
3. Check Next.js 16 breaking changes tại [nextjs.org/blog/next-16](https://nextjs.org/blog/next-16)
