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
    <>
      <StructuredData data={articleSchema} />

      {/* Header */}
      <section className="px-6 pt-12 pb-8 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/news"
            className="text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại tin tức
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="bg-electric text-navy inline-block rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase shadow-sm">
              {article.category}
            </span>
            <h1 className="text-navy mt-4 text-3xl leading-tight font-black md:text-4xl lg:text-5xl dark:text-white">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime} phút đọc
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main: Article + Sidebar */}
      <section className="px-6 pb-24 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Article body */}
            <div className="lg:col-span-2">
              {/* Hero image */}
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
                    <CategoryFallbackIcon category={article.category} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-10 space-y-6">
                <p className="text-lg leading-relaxed font-medium text-slate-700 dark:text-slate-300">
                  {article.excerpt}
                </p>
                {paragraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tag row */}
              <div className="mt-10 flex items-center gap-2 border-t border-slate-100 pt-8 dark:border-slate-800">
                <Tag className="h-4 w-4 text-slate-400" />
                <span className="text-xs text-slate-400">Chủ đề:</span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400">
                  {article.category}
                </span>
              </div>

              {/* Prev / Next nav */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {prevArticle ? (
                  <Link
                    href={`/news/${prevArticle.slug}`}
                    className="group hover:border-primary/30 flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                  >
                    <ArrowLeft className="text-primary mt-0.5 h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Bài trước
                      </p>
                      <p className="group-hover:text-primary mt-1 line-clamp-2 text-sm font-semibold text-slate-700 transition-colors dark:text-slate-300">
                        {prevArticle.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextArticle ? (
                  <Link
                    href={`/news/${nextArticle.slug}`}
                    className="group hover:border-primary/30 flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5 text-right transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex-1">
                      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Bài tiếp
                      </p>
                      <p className="group-hover:text-primary mt-1 line-clamp-2 text-sm font-semibold text-slate-700 transition-colors dark:text-slate-300">
                        {nextArticle.title}
                      </p>
                    </div>
                    <ArrowRight className="text-primary mt-0.5 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Related articles */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-navy mb-5 font-bold dark:text-slate-100">Bài viết liên quan</h3>
                <div className="space-y-5">
                  {relatedArticles.map((related) => {
                    return (
                      <Link
                        key={related.id}
                        href={`/news/${related.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                          {related.thumbnail ? (
                            <Image
                              src={related.thumbnail}
                              alt={related.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
                              <CategoryFallbackIcon
                                category={related.category}
                                className="h-6 w-6 text-slate-400"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="group-hover:text-primary line-clamp-2 text-sm leading-snug font-semibold text-slate-700 transition-colors dark:text-slate-300">
                            {related.title}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                            <CalendarDays className="h-3 w-3" />
                            {new Date(related.publishedAt).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold">Đặt lịch tư vấn</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Có câu hỏi về giải pháp số hóa? Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ
                  bạn.
                </p>
                <Link
                  href="/contact"
                  className="bg-electric text-navy mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:opacity-90"
                >
                  Liên hệ ngay
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
