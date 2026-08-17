import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  User,
  Tag,
  ImageIcon,
  Megaphone,
  Users,
  ShieldCheck,
} from 'lucide-react'
import { StructuredData } from '@/components/shared/structured-data'
import { SITE_CONFIG } from '@/lib/constants'
import { newsArticles as originalNewsArticles } from '@/data/news'

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
]

const enhancedArticles = originalNewsArticles.map((article, index) => ({
  ...article,
  thumbnail: article.thumbnail || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
}))

const mockArticle = {
  id: 999,
  slug: 'chuyen-doi-so-nganh-ban-le',
  title: 'Chuyển đổi số ngành bán lẻ: Bắt đầu từ đâu?',
  excerpt:
    'Hướng dẫn từng bước cho các chủ cửa hàng truyền thống muốn ứng dụng công nghệ để tối ưu hóa quy trình vận hành và quản lý.',
  category: 'Sự kiện',
  publishedAt: '2026-08-15T00:00:00Z',
  thumbnail:
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop',
  author: 'Admin RIC',
  content:
    'Trong bối cảnh thị trường cạnh tranh gay gắt, các doanh nghiệp bán lẻ truyền thống đang phải đối mặt với nhiều thách thức từ việc quản lý tồn kho, chăm sóc khách hàng đến tối ưu hóa chi phí vận hành. Chuyển đổi số không còn là lựa chọn mà là con đường bắt buộc để sinh tồn và phát triển.\n\nBước đầu tiên và quan trọng nhất là trang bị một hệ thống quản lý bán hàng đa kênh (Omnichannel) kết hợp với ERP. Điều này giúp đồng bộ dữ liệu từ online đến offline, quản lý kho hàng theo thời gian thực và mang lại trải nghiệm mua sắm liền mạch cho khách hàng.',
}

const newsArticles = [...enhancedArticles, mockArticle]

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
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : [],
    },
  }
}

function CategoryFallbackIcon({
  category,
  className = 'h-16 w-16 text-slate-400',
}: {
  category: string
  className?: string
}) {
  if (category === 'Marketing') return <Megaphone className={className} />
  if (category === 'Nội bộ') return <Users className={className} />
  if (category === 'Bảo mật') return <ShieldCheck className={className} />
  return <ImageIcon className={className} />
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = newsArticles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null
  const relatedArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3)

  const paragraphs = article.content.split('\n\n').filter(Boolean)
  const readTime = Math.max(3, Math.ceil(article.content.split(' ').length / 200))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.thumbnail,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: SITE_CONFIG.name },
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <StructuredData data={articleSchema} />

      <section className="px-4 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#3b82f6] dark:text-slate-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Quay lại tin tức
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-wider text-[#3b82f6] uppercase dark:bg-blue-900/20">
              {article.category}
            </span>
            <h1 className="mt-6 text-3xl leading-tight font-black text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
              {article.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
                  <User className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </div>
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime} phút đọc
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-800">
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <CategoryFallbackIcon category={article.category} />
                  </div>
                )}
              </div>

              <article className="mt-12 space-y-8">
                <p className="text-xl leading-relaxed font-medium text-slate-800 dark:text-slate-200">
                  {article.excerpt}
                </p>
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-lg leading-loose text-slate-600 dark:text-slate-400">
                    {para}
                  </p>
                ))}
              </article>

              <div className="mt-12 flex items-center gap-3 border-t border-slate-200 pt-8 dark:border-slate-800">
                <Tag className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-500">Chủ đề:</span>
                <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  {article.category}
                </span>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {prevArticle ? (
                  <Link
                    href={`/news/${prevArticle.slug}`}
                    className="group flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#3b82f6] hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      Bài trước
                    </div>
                    <p className="mt-3 line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}

                {nextArticle ? (
                  <Link
                    href={`/news/${nextArticle.slug}`}
                    className="group flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 text-right transition-all hover:border-[#3b82f6] hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-center justify-end gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Bài tiếp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-3 line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white">
                      {nextArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-6 text-lg font-black text-slate-900 dark:text-white">
                  Bài viết liên quan
                </h3>
                <div className="space-y-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/news/${related.slug}`}
                      className="group flex gap-4"
                    >
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                        {related.thumbnail ? (
                          <Image
                            src={related.thumbnail}
                            alt={related.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <CategoryFallbackIcon
                              category={related.category}
                              className="h-6 w-6 text-slate-400"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="line-clamp-2 text-sm leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-slate-200">
                          {related.title}
                        </p>
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {new Date(related.publishedAt).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#3b82f6] opacity-20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#3b82f6] opacity-20 blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-black">Nhận tư vấn ngay</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Bài viết đã gợi mở ý tưởng cho doanh nghiệp của bạn? Hãy để chuyên gia RIC Việt
                    Nam giúp bạn hiện thực hóa chúng.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-[#2563eb]"
                  >
                    Đặt lịch Demo miễn phí
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
