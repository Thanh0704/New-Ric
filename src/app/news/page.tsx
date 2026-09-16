'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Newspaper,
  Tag,
  TrendingUp,
  Building2,
  Mail,
  Rss,
} from 'lucide-react'

// ==============================================================================
// 📰 MOCK DATA CHUYÊN SÂU: TIN TỨC & SỰ KIỆN CẤP DOANH NGHIỆP
// ==============================================================================
const CATEGORIES = [
  'Tất cả',
  'Thông cáo báo chí',
  'Cập nhật Công nghệ',
  'Sự kiện',
  'Kiến thức chuyên môn',
]

const newsData = [
  {
    id: 'news-featured-1',
    title:
      'RICVINA chính thức ra mắt Hệ sinh thái Chuyển đổi số Toàn diện 2.0: Tích hợp AI và Tự động hóa lõi',
    excerpt:
      'Đánh dấu cột mốc quan trọng trong năm tài chính, RICVINA giới thiệu phiên bản 2.0 cho toàn bộ hệ sinh thái phần mềm. Bản cập nhật mang đến năng lực xử lý dữ liệu lớn (Big Data) và ứng dụng trí tuệ nhân tạo để đưa ra các dự báo vận hành, giúp doanh nghiệp SME tiết kiệm đến 40% chi phí ẩn.',
    category: 'Thông cáo báo chí',
    date: '14 Tháng 9, 2026',
    readTime: '5 phút đọc',
    image: '/images/solutions/ric-erp.jpg', // Sếp thay bằng ảnh thực tế sau
    featured: true,
  },
  {
    id: 'news-1',
    title:
      'Ký kết hợp tác chiến lược cùng AWS Cloud: Nâng tầm hạ tầng bảo mật dữ liệu cấp doanh nghiệp',
    excerpt:
      'Thỏa thuận hợp tác chiến lược giữa RICVINA và Amazon Web Services (AWS) đảm bảo 100% dữ liệu khách hàng được lưu trữ trên hạ tầng Cloud đạt chuẩn bảo mật quốc tế ISO 27001, cam kết Uptime 99.99%.',
    category: 'Thông cáo báo chí',
    date: '10 Tháng 9, 2026',
    readTime: '3 phút đọc',
    image: '/images/solutions/zhub.jpg',
  },
  {
    id: 'news-2',
    title: 'RIC ERP Cập nhật Phân hệ Kế toán: Tự động hóa đối soát dòng tiền và hóa đơn điện tử',
    excerpt:
      'Bản cập nhật quý 3 của RIC ERP mang đến tính năng đối soát dòng tiền từ đa cổng thanh toán (VNPAY, Momo, Banking) hoàn toàn tự động, giải phóng hàng trăm giờ làm việc cho bộ phận kế toán mỗi tháng.',
    category: 'Cập nhật Công nghệ',
    date: '05 Tháng 9, 2026',
    readTime: '4 phút đọc',
    image: '/images/solutions/ecom.jpg',
  },
  {
    id: 'news-3',
    title:
      'Hội thảo chuyên đề: "Giải mã bài toán Omni-channel và Quản trị chuỗi cung ứng ngành Bán lẻ"',
    excerpt:
      'Hơn 500 CEO và Giám đốc Vận hành (COO) đã tham dự sự kiện do RICVINA tổ chức để thảo luận về lộ trình số hóa chuỗi cung ứng, chống đứt gãy luồng hàng hóa trong kỷ nguyên bán lẻ đa kênh.',
    category: 'Sự kiện',
    date: '28 Tháng 8, 2026',
    readTime: '6 phút đọc',
    image: '/images/solutions/ric-affiliate.jpg',
  },
  {
    id: 'news-4',
    title: 'Báo cáo: Xu hướng cá nhân hóa trải nghiệm khách hàng thông qua Dữ liệu tập trung (CDP)',
    excerpt:
      'Chuyên gia phân tích dữ liệu từ RICVINA công bố Whitepaper mới nhất về cách các thương hiệu hàng đầu sử dụng nền tảng dữ liệu khách hàng (CDP) để tăng 35% tỷ lệ chuyển đổi đơn hàng.',
    category: 'Kiến thức chuyên môn',
    date: '15 Tháng 8, 2026',
    readTime: '8 phút đọc',
    image: '/images/solutions/ric-message.jpg',
  },
  {
    id: 'news-5',
    title: 'Giải pháp RIC TRUST được vinh danh trong Top 10 Công nghệ Chống giả xuất sắc nhất',
    excerpt:
      'Tại lễ trao giải Tech Awards 2026, giải pháp tem mã hóa QR đa lớp RIC TRUST đã xuất sắc vượt qua nhiều đối thủ để nhận giải thưởng danh giá nhờ khả năng chống lấn kênh vượt trội.',
    category: 'Thông cáo báo chí',
    date: '02 Tháng 8, 2026',
    readTime: '3 phút đọc',
    image: '/images/solutions/ric-trust.jpg',
  },
  {
    id: 'news-6',
    title: 'Phát hành API Gateway Mở rộng: Cho phép đấu nối liền mạch với các phần mềm bên thứ 3',
    excerpt:
      'RICVINA chính thức mở cổng API thế hệ mới (RESTful & GraphQL), cho phép đội ngũ IT của khách hàng dễ dàng tích hợp hệ thống của RIC với các phần mềm ERP, CRM hoặc HRM đang có sẵn.',
    category: 'Cập nhật Công nghệ',
    date: '20 Tháng 7, 2026',
    readTime: '5 phút đọc',
    image: '/images/solutions/ricio.jpg',
  },
]

export default function NewsAndEventsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const featuredArticle = newsData.find((news) => news.featured)

  const filteredNews = newsData
    .filter((news) => !news.featured) // Loại bài featured ra khỏi danh sách lưới
    .filter((news) => activeCategory === 'Tất cả' || news.category === activeCategory)

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/30">
      {/* ==========================================
          1. HEADER & FEATURED ARTICLE (BÀI ĐINH)
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-400">Tin tức & Sự kiện</span>
          </div>

          <div className="mb-16 md:mb-24">
            <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Trung tâm Báo chí <br className="hidden md:block" />
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & Cập nhật Công nghệ
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-slate-400 md:text-xl">
              Cập nhật những thông cáo mới nhất về sản phẩm, sự kiện doanh nghiệp và các góc nhìn
              chuyên sâu từ chuyên gia kiến trúc giải pháp RICVINA.
            </p>
          </div>

          {/* Featured Article Card */}
          {featuredArticle && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 transition-all hover:border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 w-full overflow-hidden lg:h-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 to-transparent lg:hidden" />
                </div>

                <div className="relative z-10 flex flex-col justify-center bg-slate-900/90 p-8 backdrop-blur-md md:p-12 lg:bg-transparent lg:bg-linear-to-l lg:from-slate-900 lg:to-slate-900/95 lg:p-16">
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-400">
                      <Newspaper className="h-3.5 w-3.5" /> Nổi bật
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="h-3.5 w-3.5" /> {featuredArticle.date}
                    </span>
                  </div>

                  <h2 className="mb-6 text-2xl leading-tight font-black text-white transition-colors group-hover:text-cyan-400 md:text-4xl">
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="before:absolute before:inset-0"
                    >
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="mb-8 line-clamp-3 text-base leading-relaxed font-medium text-slate-400 md:text-lg">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold text-cyan-400">
                    Đọc toàn bộ bài viết{' '}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          2. NEWS FEED & FILTER
          ========================================== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-20">
          {/* Bộ lọc Chuyên mục */}
          <div className="mb-12 flex items-center justify-between border-b border-slate-200 pb-6">
            <div className="no-scrollbar flex w-full gap-2 overflow-x-auto pb-2 md:gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lưới Tin tức (News Grid) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {filteredNews.length > 0 ? (
              filteredNews.map((news) => (
                <article
                  key={news.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    href={`/news/${news.id}`}
                    className="relative block h-56 w-full overflow-hidden"
                  >
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badge Category trên ảnh */}
                    <div className="absolute top-4 left-4 z-10 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
                      {news.category}
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex items-center gap-4 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {news.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {news.readTime}
                      </span>
                    </div>

                    <h3 className="mb-4 line-clamp-3 text-xl leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600">
                      <Link href={`/news/${news.id}`}>{news.title}</Link>
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed font-medium text-slate-500">
                      {news.excerpt}
                    </p>

                    <div className="mt-auto">
                      <div className="mb-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-blue-100" />
                      <Link
                        href={`/news/${news.id}`}
                        className="inline-flex items-center text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                      >
                        Chi tiết{' '}
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center font-medium text-slate-500">
                <Newspaper className="mx-auto mb-4 h-12 w-12 text-slate-300" />
                Chưa có bài viết nào trong chuyên mục này.
              </div>
            )}
          </div>

          {/* Phân trang (Pagination Mock) */}
          {filteredNews.length > 0 && (
            <div className="mt-16 flex justify-center">
              <button className="rounded-full border border-slate-200 bg-white px-8 py-3 font-bold text-slate-600 shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white">
                Tải thêm bài viết
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          3. ĐĂNG KÝ BẢN TIN (NEWSLETTER CTA)
          ========================================== */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="relative overflow-hidden rounded-[3rem] bg-blue-600 p-10 shadow-2xl md:p-16 lg:p-20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/20 blur-[80px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md">
                  <Rss className="h-4 w-4" /> Bản tin công nghệ
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                  Không bỏ lỡ xu hướng chuyển đổi số.
                </h2>
                <p className="text-lg leading-relaxed font-medium text-blue-100">
                  Nhận trực tiếp vào hộp thư báo cáo chuyên sâu, phân tích case-study và thông tin
                  cập nhật sản phẩm từ RICVINA hàng tháng.
                </p>
              </div>

              <div className="flex w-full max-w-md items-center rounded-2xl bg-white p-2 shadow-xl transition-shadow focus-within:ring-4 focus-within:ring-blue-500/30">
                <div className="pl-4 text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="Nhập email doanh nghiệp của bạn..."
                  className="flex-1 border-none bg-transparent px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-hidden"
                />
                <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
