# RIC Vietnam — Landing Page

Trang landing page doanh nghiệp cho **RIC Vietnam** ([ricvina.vn](https://ricvina.vn)) — công ty công nghệ cung cấp giải pháp phần mềm doanh nghiệp (ERP, HRM, WMS). Dự án là một static site sử dụng Next.js App Router với SSG (Static Site Generation), không có database.

> **Dành cho AI agent**: Xem `.github/copilot-instructions.md` để có đầy đủ context về dự án (tech stack, conventions, gotchas). Xem `AGENTS.md` cho quy trình validation và doc-update.

## Yêu cầu hệ thống

- **Node.js** v22+
- **pnpm** v10+ — nếu chưa có: `npm install -g pnpm`

## Cài đặt

```bash
git clone <repo-url>
cd ric-landing
pnpm install
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
pnpm dev              # Dev server (http://localhost:3000)
pnpm build            # Build production — luôn chạy sau mỗi thay đổi
pnpm start            # Chạy production build
pnpm lint             # Kiểm tra ESLint
pnpm lint:fix         # Tự động sửa ESLint
pnpm format           # Format code (Prettier)
pnpm typecheck        # Kiểm tra TypeScript
pnpm validate         # Validate toàn bộ: lint + typecheck + build
```

## Quy trình phát triển

1. Tạo nhánh từ `main`: `git checkout -b feat/ten-tinh-nang`
2. Viết code — tuân theo conventions trong `.github/copilot-instructions.md`
3. Kiểm tra: `pnpm validate`
4. Commit theo [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `refactor:`, ...
5. Push và tạo Pull Request

## Dữ liệu mock

Toàn bộ dữ liệu nằm trong `src/data/` — đây là dữ liệu tĩnh dùng cho SSG:

- `products.ts` — 3 sản phẩm (ERP, HRM, WMS)
- `news.ts` — 3 bài viết tin tức
- `careers.ts` — 3 vị trí tuyển dụng
- `team.ts` — 3 thành viên đội ngũ

Interfaces TypeScript ở `src/types/index.ts`.

## Deploy

```bash
pnpm build            # Kiểm tra build trước khi deploy
vercel --prod         # Deploy qua Vercel CLI
```

Hoặc kết nối GitHub repo với Vercel dashboard để auto-deploy khi push lên `main`.
