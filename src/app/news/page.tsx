import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CalendarDays,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Megaphone,
  Users,
  ShieldCheck,
} from 'lucide-react'
import { newsArticles } from '@/data/news'

export const metadata: Metadata = {
  title: 'Tin tức & Sự kiện',
  description: 'Cập nhật tin tức và sự kiện mới nhất từ RIC Việt Nam.',
  openGraph: {
    title: 'Tin tức & Sự kiện',
    description: 'Cập nhật tin tức và sự kiện mới nhất từ RIC Việt Nam.',
  },
}

function getCategoryIcon(category: string) {
  const icons: Record<string, typeof ImageIcon> = {
    'Sự kiện': ImageIcon,
    Marketing: Megaphone,
    'Nội bộ': Users,
    'Bảo mật': ShieldCheck,
  }
  return icons[category] ?? ImageIcon
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h1 className="text-navy mb-4 text-4xl font-bold md:text-5xl dark:text-white">
            Tin tức &amp; Sự kiện
          </h1>
          <div className="bg-electric mx-auto h-1.5 w-20 rounded-full" />
        </div>
      </section>

      {/* Cards + Pagination */}
      <section className="px-6 pb-24 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => {
              const FallbackIcon = getCategoryIcon(article.category)
              return (
                <Link key={article.id} href={`/news/${article.slug}`} className="group block">
                  <article className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-800">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      {article.thumbnail ? (
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
                          <FallbackIcon className="h-12 w-12 text-slate-400" />
                        </div>
                      )}
                      <span className="bg-electric text-navy absolute top-4 left-4 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase shadow-lg">
                        {article.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-navy group-hover:text-primary mb-3 line-clamp-2 text-xl leading-tight font-bold transition-colors dark:text-white">
                        {article.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-700">
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                          <CalendarDays className="h-4 w-4" />
                          {new Date(article.publishedAt).toLocaleDateString('vi-VN')}
                        </span>
                        <span className="text-navy group-hover:text-primary flex items-center gap-1 text-sm font-bold transition-colors dark:text-white">
                          Xem thêm
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="bg-navy flex size-10 items-center justify-center rounded-lg font-bold text-white">
              1
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">
              2
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">
              3
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
