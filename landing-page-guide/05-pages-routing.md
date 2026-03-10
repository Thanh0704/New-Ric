# 05 - Pages & Routing

## Tổng quan các trang

| Route              | Trang             | Render Strategy | Data Source         |
| ------------------ | ----------------- | --------------- | ------------------- |
| `/`                | Trang chủ         | SSG             | `src/data/` (mock)  |
| `/about`           | Về chúng tôi      | SSG             | Static (hardcode)   |
| `/products`        | Sản phẩm          | SSG             | `src/data/products` |
| `/products/[slug]` | Chi tiết sản phẩm | SSG             | `src/data/products` |
| `/news`            | Tin tức           | SSG             | `src/data/news`     |
| `/news/[slug]`     | Chi tiết tin tức  | SSG             | `src/data/news`     |
| `/contact`         | Liên hệ           | SSG             | Static              |
| `/careers`         | Tuyển dụng        | SSG             | `src/data/careers`  |
| `/careers/[slug]`  | Chi tiết vị trí   | SSG             | `src/data/careers`  |

---

## Mock Data Files

### `src/data/products.ts`

```typescript
import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'he-thong-quan-ly-ban-hang',
    name: 'Hệ thống Quản lý Bán hàng',
    tagline: 'Quản lý đơn hàng, khách hàng và doanh thu trong một nền tảng',
    description:
      'Giải pháp toàn diện giúp doanh nghiệp quản lý toàn bộ quy trình bán hàng từ tiếp nhận đơn hàng đến xuất kho và thanh toán.',
    image: '/images/products/sales.jpg',
    features: [
      'Quản lý đơn hàng real-time',
      'Báo cáo doanh thu tự động',
      'Tích hợp thanh toán',
      'Quản lý khách hàng (CRM)',
    ],
    category: 'ERP',
  },
  {
    id: '2',
    slug: 'he-thong-quan-ly-nhan-su',
    name: 'Hệ thống Quản lý Nhân sự',
    tagline: 'Tối ưu quy trình tuyển dụng, chấm công và tính lương',
    description:
      'Nền tảng HRM đầy đủ giúp doanh nghiệp quản lý nhân viên, chấm công tự động và tính lương chính xác.',
    image: '/images/products/hrm.jpg',
    features: [
      'Chấm công tự động',
      'Quản lý bảng lương',
      'Quy trình tuyển dụng',
      'Đánh giá hiệu suất (KPI)',
    ],
    category: 'HRM',
  },
  {
    id: '3',
    slug: 'he-thong-quan-ly-kho',
    name: 'Hệ thống Quản lý Kho',
    tagline: 'Kiểm soát hàng tồn kho chính xác, giảm thất thoát',
    description:
      'Giải pháp WMS giúp doanh nghiệp quản lý kho hàng, theo dõi xuất nhập tồn và tối ưu không gian kho.',
    image: '/images/products/warehouse.jpg',
    features: [
      'Quét mã vạch / QR',
      'Theo dõi xuất nhập tồn',
      'Cảnh báo hàng sắp hết',
      'Báo cáo tồn kho',
    ],
    category: 'WMS',
  },
]
```

### `src/data/news.ts`

```typescript
import type { NewsArticle } from '@/types'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'ric-vietnam-ra-mat-phien-ban-moi',
    title: 'RIC Vietnam ra mắt phiên bản mới với nhiều tính năng vượt trội',
    excerpt:
      'Phiên bản 3.0 mang đến giao diện hiện đại, hiệu suất cải thiện 40% và hàng loạt tính năng AI tích hợp.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-1.jpg',
    publishedAt: '2026-02-15T08:00:00Z',
    category: 'Sản phẩm',
    author: 'Đội ngũ RIC Vietnam',
  },
  {
    id: '2',
    slug: 'hop-tac-chien-luoc-voi-cac-doanh-nghiep',
    title: 'RIC Vietnam ký kết hợp tác chiến lược với 10 doanh nghiệp hàng đầu',
    excerpt: 'Mở rộng hệ sinh thái đối tác, tăng cường năng lực triển khai trên toàn quốc.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-2.jpg',
    publishedAt: '2026-01-20T08:00:00Z',
    category: 'Sự kiện',
    author: 'Ban truyền thông',
  },
  {
    id: '3',
    slug: 'cong-nghe-ai-trong-quan-ly-doanh-nghiep',
    title: 'Ứng dụng AI trong quản lý doanh nghiệp: Xu hướng 2026',
    excerpt: 'Tìm hiểu cách các doanh nghiệp Việt Nam đang ứng dụng AI để tối ưu vận hành.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-3.jpg',
    publishedAt: '2026-01-05T08:00:00Z',
    category: 'Công nghệ',
    author: 'Đội ngũ kỹ thuật',
  },
]
```

### `src/data/careers.ts`

```typescript
import type { Career } from '@/types'

export const careers: Career[] = [
  {
    id: '1',
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Kỹ thuật',
    location: 'TP. Hồ Chí Minh',
    type: 'full-time',
    description:
      'Chúng tôi tìm kiếm Frontend Developer có đam mê xây dựng UI đẹp và hiệu suất cao.',
    requirements: [
      'Tối thiểu 2 năm kinh nghiệm với React/Next.js',
      'Thành thạo TypeScript, Tailwind CSS',
      'Hiểu biết về SEO và Web Performance',
    ],
    benefits: [
      'Lương cạnh tranh 20-35 triệu',
      'Làm việc hybrid',
      'Đào tạo chuyên sâu',
      '13 tháng lương',
    ],
  },
  {
    id: '2',
    slug: 'backend-developer',
    title: 'Backend Developer',
    department: 'Kỹ thuật',
    location: 'TP. Hồ Chí Minh',
    type: 'full-time',
    description: 'Xây dựng và tối ưu API, hệ thống backend cho các sản phẩm SaaS của công ty.',
    requirements: [
      'Tối thiểu 2 năm kinh nghiệm với Node.js hoặc Go',
      'Thành thạo SQL, thiết kế database',
      'Kinh nghiệm với microservices',
    ],
    benefits: [
      'Lương cạnh tranh 25-40 triệu',
      'Làm việc hybrid',
      'Budget học tập hàng năm',
      'Cổ phần (ESOP)',
    ],
  },
  {
    id: '3',
    slug: 'business-development',
    title: 'Business Development Executive',
    department: 'Kinh doanh',
    location: 'Hà Nội / TP. HCM',
    type: 'full-time',
    description: 'Phát triển thị trường, tìm kiếm và chăm sóc khách hàng doanh nghiệp.',
    requirements: [
      'Tối thiểu 1 năm kinh nghiệm B2B Sales',
      'Kỹ năng giao tiếp, thuyết trình tốt',
      'Tiếng Anh giao tiếp',
    ],
    benefits: ['Lương + hoa hồng hấp dẫn', 'Phụ cấp di chuyển', 'Đào tạo sales chuyên nghiệp'],
  },
]
```

### `src/data/testimonials.ts`

```typescript
import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    title: 'Giám đốc điều hành',
    company: 'Công ty TNHH ABC',
    avatar: '/images/testimonials/avatar-1.jpg',
    content:
      'Giải pháp của RIC Vietnam giúp chúng tôi giảm 60% thời gian xử lý đơn hàng và tăng năng suất đáng kể.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Trần Thị B',
    title: 'Trưởng phòng Kế toán',
    company: 'Tập đoàn XYZ',
    avatar: '/images/testimonials/avatar-2.jpg',
    content:
      'Hệ thống dễ sử dụng, báo cáo tự động rất tiện lợi. Đội ngũ hỗ trợ nhiệt tình và chuyên nghiệp.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lê Văn C',
    title: 'CEO & Co-founder',
    company: 'Startup DEF',
    avatar: '/images/testimonials/avatar-3.jpg',
    content:
      'Triển khai nhanh, phù hợp với quy mô startup. Giá cả hợp lý, ROI rõ ràng sau 3 tháng sử dụng.',
    rating: 5,
  },
]
```

### `src/data/team.ts`

```typescript
import type { TeamMember } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Nguyễn Văn X',
    title: 'CEO & Co-founder',
    bio: '10+ năm kinh nghiệm trong lĩnh vực phần mềm doanh nghiệp.',
    avatar: '/images/team/ceo.jpg',
    linkedin: '#',
  },
  {
    id: '2',
    name: 'Trần Thị Y',
    title: 'CTO',
    bio: 'Chuyên gia về kiến trúc hệ thống và cloud infrastructure.',
    avatar: '/images/team/cto.jpg',
    linkedin: '#',
  },
  {
    id: '3',
    name: 'Lê Văn Z',
    title: 'Head of Product',
    bio: 'Thiết kế và phát triển sản phẩm SaaS cho thị trường Việt Nam.',
    avatar: '/images/team/product.jpg',
    linkedin: '#',
  },
]
```

---

## TypeScript Types

File `src/types/index.ts`:

```typescript
export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  features: string[]
  category: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string
  publishedAt: string
  category: string
  author: string
}

export interface Career {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  description: string
  requirements: string[]
  benefits: string[]
}

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  avatar: string
  linkedin: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  url?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}
```

---

## 1. Trang chủ `/`

File `src/app/page.tsx`:

```tsx
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { Partners } from '@/components/sections/partners'
import { CTA } from '@/components/sections/cta'

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

---

## 2. Sản phẩm `/products`

### Danh sách sản phẩm — `src/app/products/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Khám phá các giải pháp công nghệ của RIC Vietnam.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Sản phẩm</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Giải pháp công nghệ phù hợp cho mọi quy mô doanh nghiệp
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <AnimateOnScroll key={product.id}>
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        {product.category}
                      </Badge>
                      <CardTitle className="mt-2 flex items-center gap-2">
                        {product.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
```

### Chi tiết sản phẩm — `src/app/products/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { products } from '@/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return { title: product.name, description: product.tagline }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <Container className="py-20">
      <Link
        href="/products"
        className="text-muted-foreground hover:text-primary mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Tất cả sản phẩm
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="mt-4 text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground mt-4">{product.description}</p>

          <div className="mt-8">
            <h2 className="font-semibold">Tính năng nổi bật</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" asChild className="mt-8">
            <Link href="/contact">Liên hệ tư vấn</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
```

---

## 3. Tin tức `/news`

### Danh sách tin tức — `src/app/news/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { newsArticles } from '@/data/news'

export const metadata: Metadata = {
  title: 'Tin tức',
  description: 'Cập nhật tin tức mới nhất từ RIC Vietnam.',
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Tin tức</h1>
          <p className="text-muted-foreground mt-4 text-lg">Cập nhật mới nhất từ chúng tôi</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <AnimateOnScroll key={article.id}>
                <Link href={`/news/${article.slug}`} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary">{article.category}</Badge>
                      <h2 className="mt-2 line-clamp-2 text-lg font-semibold">{article.title}</h2>
                      <p className="text-muted-foreground mt-2 line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>
                      <div className="text-muted-foreground mt-3 flex items-center justify-between text-xs">
                        <span>{article.author}</span>
                        <time>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</time>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
```

### Chi tiết bài viết — `src/app/news/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { newsArticles } from '@/data/news'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  return (
    <Container className="max-w-3xl py-20">
      <Link
        href="/news"
        className="text-muted-foreground hover:text-primary mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Tất cả tin tức
      </Link>

      <Badge variant="secondary">{article.category}</Badge>
      <h1 className="mt-4 text-3xl font-bold">{article.title}</h1>

      <div className="text-muted-foreground mt-4 flex items-center gap-4 text-sm">
        <span>{article.author}</span>
        <span>•</span>
        <time>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</time>
      </div>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
        <Image src={article.thumbnail} alt={article.title} fill className="object-cover" />
      </div>

      {/* Nội dung bài viết - thay bằng MDX hoặc HTML thật sau */}
      <div className="prose prose-lg mt-8 max-w-none">
        <p>{article.excerpt}</p>
        <p className="text-muted-foreground">
          [Nội dung đầy đủ sẽ được điền theo Figma / bản thật]
        </p>
      </div>
    </Container>
  )
}
```

---

## 4. Tuyển dụng `/careers`

### Danh sách tuyển dụng — `src/app/careers/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Building2, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { careers } from '@/data/careers'

export const metadata: Metadata = {
  title: 'Tuyển dụng',
  description: 'Gia nhập đội ngũ RIC Vietnam - nơi công nghệ và con người cùng phát triển.',
}

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

export default function CareersPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Tuyển dụng</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Gia nhập đội ngũ & cùng nhau xây dựng tương lai
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="space-y-4">
            {careers.map((job) => (
              <AnimateOnScroll key={job.id}>
                <Link href={`/careers/${job.slug}`}>
                  <Card className="group transition-shadow hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <h2 className="group-hover:text-primary text-lg font-semibold">
                          {job.title}
                        </h2>
                        <div className="text-muted-foreground mt-2 flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <Badge variant="outline">{typeLabel[job.type]}</Badge>
                        </div>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
```

---

## 5. Liên hệ `/contact`

### `src/app/contact/page.tsx`

```tsx
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với RIC Vietnam để được tư vấn giải pháp công nghệ.',
}

const contactInfo = [
  { icon: MapPin, label: 'Địa chỉ', value: 'Số X, Đường Y, Quận Z, TP. Hồ Chí Minh' },
  { icon: Phone, label: 'Điện thoại', value: '0123 456 789' },
  { icon: Mail, label: 'Email', value: 'contact@ricvina.vn' },
  { icon: Clock, label: 'Giờ làm việc', value: 'Thứ 2 - Thứ 6: 8:00 - 17:30' },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Liên hệ</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Gửi tin nhắn</h2>
              <p className="text-muted-foreground mt-2">
                Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24 giờ.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-3 p-4">
                      <item.icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
```

### Contact Form — `src/components/forms/contact-form.tsx`

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(9, 'Số điện thoại không hợp lệ'),
  company: z.string().optional(),
  message: z.string().min(10, 'Vui lòng nhập ít nhất 10 ký tự'),
})

type ContactData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data: ContactData) {
    // Mock: giả lập gửi thành công sau 1 giây
    // TODO Phase 2: gọi API thật /api/contact với Resend
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-700">Gửi thành công!</p>
        <p className="mt-2 text-sm text-green-600">Chúng tôi sẽ liên hệ lại trong 24 giờ.</p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Gửi tin nhắn khác
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Họ và tên *</Label>
        <Input id="name" placeholder="Nguyễn Văn A" {...register('name')} />
        {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="email@company.com" {...register('email')} />
          {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" placeholder="0123 456 789" {...register('phone')} />
          {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="company">Công ty</Label>
        <Input id="company" placeholder="Tên công ty (không bắt buộc)" {...register('company')} />
      </div>

      <div>
        <Label htmlFor="message">Nội dung *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Mô tả nhu cầu của bạn..."
          {...register('message')}
        />
        {errors.message && (
          <p className="text-destructive mt-1 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
      </Button>
    </form>
  )
}
```

### Contact API Route (mock) — `src/app/api/contact/route.ts`

```typescript
// Mock API - chưa gửi email thật
// TODO Phase 2: tích hợp Resend
export async function POST() {
  return Response.json({ success: true })
}
```

---

## 6. Trang 404 — `src/app/not-found.tsx`

```tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared/container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground mt-4 text-lg">Trang bạn tìm kiếm không tồn tại</p>
      <Button asChild className="mt-8">
        <Link href="/">Về trang chủ</Link>
      </Button>
    </Container>
  )
}
```
