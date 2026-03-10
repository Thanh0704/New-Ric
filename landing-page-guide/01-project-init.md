# 01 - Khởi tạo dự án

> **Yêu cầu**: Node.js 24 LTS hoặc cao hơn, pnpm 10+

## Bước 1: Tạo project Next.js

```bash
pnpm create next-app@latest ric-landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```

Khi được hỏi, chọn:

- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Turbopack: **Yes**
- Import alias: `@/*`

```bash
cd ric-landing
```

## Bước 2: Cài đặt dependencies

### UI & Animation

```bash
pnpm add framer-motion lucide-react class-variance-authority clsx tailwind-merge
```

### Forms & Validation

```bash
pnpm add react-hook-form @hookform/resolvers zod
```

## Bước 3: Cài đặt shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

Khi được hỏi, chọn:

- Style: **New York**
- Base color: **Zinc** (hoặc tùy branding công ty)
- CSS variables: **Yes**

Cài các components cơ bản:

```bash
pnpm dlx shadcn@latest add button card input textarea label separator sheet navigation-menu accordion badge dialog scroll-area toast
```

## Bước 4: Cài đặt Dev tools

```bash
pnpm add -D prettier eslint-config-prettier husky lint-staged @commitlint/cli @commitlint/config-conventional prettier-plugin-tailwindcss
```

## Bước 5: Cấu hình Prettier

Tạo file `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Bước 6: Cấu hình Husky & Lint-staged

```bash
pnpm exec husky init
```

Sửa file `.husky/pre-commit`:

```bash
pnpm exec lint-staged
```

Thêm vào `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

## Bước 7: Cấu hình Commitlint

Tạo file `commitlint.config.ts`:

```typescript
import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'ci', 'build'],
    ],
  },
}

export default config
```

Thêm hook:

```bash
echo "pnpm exec commitlint --edit \$1" > .husky/commit-msg
```

## Bước 8: Cấu hình next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Thêm domain khi cần load ảnh từ bên ngoài
    remotePatterns: [],
  },
  // Nếu deploy bằng Docker
  // output: 'standalone',
}

export default nextConfig
```

## Bước 9: Cấu hình TypeScript paths

Kiểm tra `tsconfig.json` đã có:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Bước 10: Tạo file .env

Tạo file `.env.local`:

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="RIC Vietnam"

# URL Admin System (chỉ dùng cho button Đăng nhập)
NEXT_PUBLIC_ADMIN_URL=https://admin.ricvina.vn
```

## Bước 11: Scripts trong package.json

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,md,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,md,css}\""
  }
}
```

## Bước 12: Tạo cấu trúc thư mục mock data

```bash
mkdir -p src/data src/types src/components/{ui,layout,sections,shared,forms} src/lib src/hooks
```

## Kiểm tra

```bash
pnpm dev
```

Truy cập `http://localhost:3000` → thấy trang mặc định Next.js là thành công.
