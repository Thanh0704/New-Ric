import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Quote, TrendingUp } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Dữ liệu bài viết Insights (Lấy chuẩn theo outline của sếp)
const insights = [
  {
    id: 1,
    tag: 'Góc nhìn Quản trị',
    title: 'Vì sao có CRM nhưng nhân viên vẫn dùng Excel?',
    desc: 'Phân tích nguyên nhân đứt gãy trong quá trình triển khai và cách để nhân viên thực sự "yêu" hệ thống mới.',
    image: '/images/solutions/ric-message.jpg', // THAY ẢNH THẬT
    link: '/insights/tai-sao-nhan-vien-dung-excel',
  },
  {
    id: 2,
    tag: 'Cẩm nang CĐS',
    title: '3 giai đoạn trưởng thành trong chuyển đổi số của doanh nghiệp',
    desc: 'Doanh nghiệp của bạn đang ở mức độ nào? Định vị để có bước đi chính xác, tránh lãng phí nguồn lực.',
    image: '/images/solutions/ric-erp.jpg', // THAY ẢNH THẬT
    link: '/insights/3-giai-doan-truong-thanh',
  },
  {
    id: 3,
    tag: 'Tư vấn Giải pháp',
    title: 'Khi nào doanh nghiệp cần CRM? Có cần ERP không?',
    desc: '5 dấu hiệu cho thấy doanh nghiệp đang vận hành quá thủ công và cần sự can thiệp của phần mềm quản trị.',
    image: '/images/solutions/ricio.jpg', // THAY ẢNH THẬT
    link: '/insights/khi-nao-can-crm-erp',
  },
]

export function Insights() {
  return (
    // ĐÃ THÊM ID VÀ KHOẢNG TRỐNG SCROLL-MT-24 Ở ĐÂY 👇
    <section id="ric-insights" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <Container>
        {/* TIÊU ĐỀ CHUNG */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-black tracking-widest text-blue-700 uppercase">
              <BookOpen className="h-4 w-4" /> Insights & Stories
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Kiến thức thực chiến từ <br className="hidden md:block" />
              hàng trăm dự án thành công
            </h2>
          </AnimateOnScroll>
        </div>

        {/* PHẦN 1: CASE STUDY NỔI BẬT (FEATURED STORY) */}
        <AnimateOnScroll delay={100}>
          <div className="mb-16 overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 lg:flex">
            {/* Ảnh khách hàng/Dự án */}
            <div className="relative aspect-video w-full lg:w-1/2">
              <Image
                src="/images/solutions/ecom.jpg" // THAY ẢNH KHÁCH HÀNG THẬT VÀO ĐÂY
                alt="Case Study"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:bg-gradient-to-r"></div>
              <div className="absolute bottom-6 left-8 lg:bottom-10 lg:left-10">
                <Image
                  src="/images/logo.svg"
                  alt="Partner Logo"
                  width={120}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
            </div>

            {/* Nội dung Case Study */}
            <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <Quote className="mb-6 h-10 w-10 text-blue-200" />
              <h3 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">
                Tập đoàn X tăng trưởng 200% doanh thu Online sau 6 tháng triển khai RIC CRM
              </h3>
              <p className="mb-8 text-lg font-medium text-slate-600">
                "Hệ thống đã giúp chúng tôi số hóa toàn bộ dữ liệu khách hàng. Tỷ lệ chốt đơn của
                đội Sales tăng vọt nhờ kịch bản chăm sóc tự động mà không cần tăng thêm nhân sự."
              </p>

              <div className="mb-8 flex gap-8 border-y border-slate-100 py-6">
                <div>
                  <p className="text-3xl font-black text-blue-600">200%</p>
                  <p className="text-sm font-medium text-slate-500">Tăng trưởng DT</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-blue-600">80%</p>
                  <p className="text-sm font-medium text-slate-500">Tiết kiệm thời gian</p>
                </div>
              </div>

              <Link
                href="/case-studies/tap-doan-x"
                className="inline-flex w-fit items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
              >
                Đọc toàn bộ câu chuyện <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* PHẦN 2: DANH SÁCH INSIGHTS (ARTICLES) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 150 + 200}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur-sm">
                    {item.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h4 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="mb-6 flex-1 text-slate-600">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                  >
                    Khám phá ngay{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-transparent px-8 font-bold text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </Container>
    </section>
  )
}
