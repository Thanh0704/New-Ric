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
  Star,
} from 'lucide-react'
import { newsArticles as originalNewsArticles } from '@/data/news'

// Danh sách ảnh phụ trợ chất lượng cao từ Unsplash
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
]

// Tự động lấp đầy ảnh cho các bài bị thiếu
const enhancedArticles = originalNewsArticles.map((article, index) => ({
  ...article,
  thumbnail: article.thumbnail || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
}))

// Bài viết giả lập lấp ô trống cuối cùng
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
  const featuredArticle = newsArticles[0]
  const regularArticles = newsArticles.slice(1)

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24 md:pt-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Tin tức & Sự kiện
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Cập nhật những xu hướng công nghệ mới nhất và những câu chuyện chuyển đổi số thành công
            từ chuyên gia RIC Việt Nam.
          </p>
        </div>

        {featuredArticle && (
          <Link
            href={`/news/${featuredArticle.slug}`}
            className="group mb-12 flex w-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-2xl hover:ring-[#3b82f6]/30 lg:mb-16 lg:flex-row dark:bg-slate-900 dark:ring-slate-800"
          >
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden lg:h-[450px] lg:w-[60%]">
              {featuredArticle.thumbnail ? (
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3b82f6]/10 to-blue-100 dark:from-slate-800 dark:to-slate-900">
                  {(() => {
                    const FallbackIcon = getCategoryIcon(featuredArticle.category)
                    return (
                      <FallbackIcon className="h-24 w-24 text-[#3b82f6]/40 dark:text-slate-600" />
                    )
                  })()}
                </div>
              )}
              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black tracking-widest text-[#3b82f6] uppercase shadow-sm backdrop-blur-md dark:bg-slate-900/90">
                <Star className="h-4 w-4 fill-current" />
                Bài mới nhất
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:w-[40%] lg:p-12">
              <span className="mb-4 inline-block w-fit rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-wider text-[#3b82f6] uppercase dark:bg-blue-900/20">
                {featuredArticle.category}
              </span>
              <h2 className="mb-5 text-3xl leading-tight font-black text-slate-900 transition-colors group-hover:text-[#3b82f6] md:text-4xl dark:text-white">
                {featuredArticle.title}
              </h2>
              <p className="mb-8 line-clamp-3 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <CalendarDays className="h-5 w-5" />
                  <span>{new Date(featuredArticle.publishedAt).toLocaleDateString('vi-VN')}</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-bold text-[#3b82f6]">
                  Đọc ngay{' '}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularArticles.map((article) => {
            const FallbackIcon = getCategoryIcon(article.category)

            return (
              <Link
                key={article.id}
                href={article.slug === '#' ? '#' : `/news/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"
              >
                <div className="relative h-60 w-full shrink-0 overflow-hidden">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800">
                      <FallbackIcon className="h-12 w-12 text-slate-400" />
                    </div>
                  )}
                  <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-900 uppercase shadow-sm backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-4 line-clamp-3 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white">
                    {article.title}
                  </h3>
                  <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-[#3b82f6] font-bold text-white shadow-md shadow-blue-500/20">
            1
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
            2
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
            3
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
