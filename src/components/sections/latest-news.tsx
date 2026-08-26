import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const featuredArticle = {
  tag: 'Phân tích & Chiến lược',
  title: 'Chuyển đổi số không phải là mua phần mềm, mà là thay đổi tư duy vận hành',
  desc: 'Rất nhiều doanh nghiệp thất bại khi áp dụng công nghệ chỉ vì quá tập trung vào tính năng mà bỏ quên yếu tố cốt lõi: Quy trình và Con người. Khám phá bí quyết triển khai phần mềm B2B thành công từ chuyên gia RICVINA.',
  image: '/images/solutions/ecom.jpg',
  date: '24/08/2026',
  link: '/insights/tu-duy-chuyen-doi-so',
}

const recentArticles = [
  {
    tag: 'Góc nhìn Quản trị',
    title: 'Vì sao có CRM nhưng nhân viên Sale vẫn âm thầm dùng Excel?',
    date: '20/08/2026',
    link: '/insights/tai-sao-nhan-vien-dung-excel',
  },
  {
    tag: 'Tư vấn Giải pháp',
    title: 'Khi nào doanh nghiệp thực sự cần ERP? 5 dấu hiệu cảnh báo.',
    date: '15/08/2026',
    link: '/insights/khi-nao-can-erp',
  },
  {
    tag: 'Marketing Automation',
    title: 'Kịch bản nuôi dưỡng khách hàng qua Zalo ZNS tăng 30% tỷ lệ chốt.',
    date: '10/08/2026',
    link: '/insights/kich-ban-zns',
  },
]

export function LatestNews() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <AnimateOnScroll className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              RIC INSIGHTS
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-600">
              Kiến thức, xu hướng và cẩm nang vận hành doanh nghiệp.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <Link
              href="/insights"
              className="hidden items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 font-bold text-slate-700 transition-all hover:border-blue-600 hover:text-blue-600 md:inline-flex"
            >
              Đi tới Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* BÀI VIẾT ĐINH (Nằm bên Trái, 7 Cột) */}
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <Link href={featuredArticle.link} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    {featuredArticle.tag}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-500">
                    <Calendar className="h-4 w-4" /> {featuredArticle.date}
                  </div>
                  <h3 className="mb-4 text-2xl leading-tight font-black text-slate-900 transition-colors group-hover:text-blue-600 md:text-3xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="line-clamp-3 text-base leading-relaxed font-medium text-slate-600">
                    {featuredArticle.desc}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* DANH SÁCH BÀI VIẾT MỚI (Nằm bên Phải, 5 Cột) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="mb-6 border-b-2 border-slate-900 pb-4">
              <h4 className="flex items-center gap-2 text-lg font-black text-slate-900 uppercase">
                <BookOpen className="h-5 w-5 text-blue-600" /> Bài viết mới nhất
              </h4>
            </div>

            <div className="flex flex-col gap-6">
              {recentArticles.map((article, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                  <Link
                    href={article.link}
                    className="group block border-b border-slate-200 pb-6 last:border-0 last:pb-0"
                  >
                    <span className="mb-2 block text-xs font-bold tracking-wider text-blue-600 uppercase">
                      {article.tag}
                    </span>
                    <h5 className="mb-3 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {article.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <Calendar className="h-3.5 w-3.5" /> {article.date}
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Nút Mobile CTA */}
            <Link
              href="/insights"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition-all hover:bg-slate-50 md:hidden"
            >
              Xem toàn bộ Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
