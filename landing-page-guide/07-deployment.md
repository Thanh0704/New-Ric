# 07 - Deployment

## Option A: Deploy lên Vercel (Khuyến nghị)

### Bước 1: Push code lên GitHub

```bash
git init
git add .
git commit -m "feat: initial project setup"
git remote add origin https://github.com/your-org/ric-landing.git
git push -u origin main
```

### Bước 2: Kết nối Vercel

1. Truy cập [vercel.com](https://vercel.com) → **Add New Project**
2. Import repo `ric-landing`
3. Vercel tự nhận diện Next.js, không cần cấu hình thêm
4. Thêm Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://ricvina.vn`
   - `NEXT_PUBLIC_ADMIN_URL` = `https://admin.ricvina.vn`
   - `API_BASE_URL` = `https://admin.ricvina.vn/api`
   - `RESEND_API_KEY` = `re_xxx`
   - `NEXT_PUBLIC_GA_ID` = `G-xxx`
5. Deploy

### Bước 3: Custom Domain

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. Thêm `ricvina.vn` và `www.ricvina.vn`
3. Update DNS records theo hướng dẫn của Vercel

### Ưu điểm Vercel

- Zero config, tối ưu sẵn cho Next.js
- CDN toàn cầu, edge caching
- Auto HTTPS
- Preview deployments cho mỗi PR
- Analytics built-in (optional)

---

## Option B: Deploy bằng Docker + VPS

Phù hợp nếu muốn self-host hoặc deploy trên VPS cùng admin system.

### Bước 1: Dockerfile

```dockerfile
# ===== Build stage =====
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# ===== Production stage =====
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

> **Lưu ý**: Cần bật `output: 'standalone'` trong `next.config.ts` khi dùng Docker.

### Bước 2: docker-compose.yml

```yaml
services:
  ric-landing:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: ric-landing
    restart: unless-stopped
    ports:
      - '3001:3000'
    env_file:
      - .env.production
    networks:
      - web

networks:
  web:
    external: true
```

### Bước 3: Nginx reverse proxy

Nếu admin system đang chạy trên cùng VPS:

```nginx
# Landing page - ricvina.vn
server {
    listen 80;
    server_name ricvina.vn www.ricvina.vn;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Admin system - admin.ricvina.vn (đã có sẵn)
server {
    listen 80;
    server_name admin.ricvina.vn;

    location / {
        proxy_pass http://localhost:3000;
        # ... config hiện tại
    }
}
```

### Bước 4: SSL với Certbot

```bash
sudo certbot --nginx -d ricvina.vn -d www.ricvina.vn
```

### Bước 5: CI/CD với GitHub Actions

File `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/ric-landing
            git pull origin main
            docker compose up -d --build
```

---

## Kiến trúc deployment tổng thể

```
                    DNS
                     │
        ┌────────────┴───────────┐
        │                        │
   ricvina.vn            admin.ricvina.vn
        │                        │
        ▼                        ▼
   ┌─────────┐             ┌──────────┐
   │  Nginx  │             │  Nginx   │
   │  :443   │             │  :443    │
   └────┬────┘             └────┬─────┘
        │                       │
        ▼                       ▼
   ┌──────────┐           ┌──────────┐
   │ Landing  │           │  Admin   │
   │  :3001   │  ──API──▶ │  :3000   │
   │ (Next.js)│           │ (Next.js │
   └──────────┘           │+Hono+RA) │
                          └──────────┘
```

---

## Checklist trước khi go-live

- [ ] Environment variables đã cấu hình đúng
- [ ] `NEXT_PUBLIC_SITE_URL` trỏ đúng domain production
- [ ] `NEXT_PUBLIC_ADMIN_URL` trỏ đúng domain admin
- [ ] HTTPS hoạt động
- [ ] Sitemap accessible tại `/sitemap.xml`
- [ ] Robots.txt accessible tại `/robots.txt`
- [ ] Google Search Console đã verify domain
- [ ] Google Analytics đang track
- [ ] Contact form gửi email thành công
- [ ] Responsive trên mobile/tablet/desktop
- [ ] PageSpeed score > 90
- [ ] Tất cả ảnh đã optimize
- [ ] Favicon hiển thị đúng
- [ ] OG image hiển thị khi share link
