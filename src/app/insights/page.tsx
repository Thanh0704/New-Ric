'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, ChevronRight, Calendar, Search } from 'lucide-react'

// Dữ liệu bài viết mẫu (Sếp có thể thêm bớt tùy ý)
const allInsights = [
  {
    id: 1,
    category: 'Góc nhìn Quản trị',
    title: 'Vì sao có CRM nhưng nhân viên vẫn dùng Excel?',
    desc: 'Phân tích nguyên nhân đứt gãy trong quá trình triển khai và cách để nhân viên thực sự "yêu" hệ thống mới.',
    image: '/images/solutions/ric-message.jpg',
    link: '/insights/tai-sao-nhan-vien-dung-excel',
    date: '22/08/2026',
  },
  {
    id: 2,
    category: 'Cẩm nang CĐS',
    title: '3 giai đoạn trưởng thành trong chuyển đổi số của doanh nghiệp',
    desc: 'Doanh nghiệp của bạn đang ở mức độ nào? Định vị để có bước đi chính xác, tránh lãng phí nguồn lực.',
    image: '/images/solutions/ric-erp.jpg',
    link: '/insights/3-giai-doan-truong-thanh',
    date: '15/08/2026',
  },
  {
    id: 3,
    category: 'Tư vấn Giải pháp',
    title: 'Khi nào doanh nghiệp cần CRM? Có cần ERP không?',
    desc: '5 dấu hiệu cho thấy doanh nghiệp đang vận hành quá thủ công và cần sự can thiệp của phần mềm quản trị.',
    image: '/images/solutions/ricio.jpg',
    link: '/insights/khi-nao-can-crm-erp',
    date: '10/08/2026',
  },
  {
    id: 4,
    category: 'Góc nhìn Quản trị',
    title: 'Xây dựng văn hóa dữ liệu (Data-driven) từ con số 0',
    desc: 'Làm thế nào để thay đổi thói quen ra quyết định dựa trên cảm tính sang dựa trên dữ liệu thực tế.',
    image: '/images/solutions/ecom.jpg',
    link: '/insights/xay-dung-van-hoa-du-lieu',
    date: '05/08/2026',
  },
  {
    id: 5,
    category: 'Cẩm nang CĐS',
    title: 'Tự động hóa quy trình (BPA): Bắt đầu từ đâu?',
    desc: 'Hướng dẫn từng bước để tự động hóa các quy trình lặp đi lặp lại, tiết kiệm hàng ngàn giờ làm việc mỗi tháng.',
    image: '/images/solutions/ric-affiliate.jpg',
    link: '/insights/tu-dong-hoa-quy-trinh',
    date: '01/08/2026',
  },
  {
    id: 6,
    category: 'Tư vấn Giải pháp',
    title: 'Omnichannel: Bán hàng đa kênh không chỉ là có mặt ở mọi nơi',
    desc: 'Bí quyết đồng bộ dữ liệu và trải nghiệm khách hàng xuyên suốt từ Online đến Offline.',
    image: '/images/solutions/zhub.jpg',
    link: '/insights/omnichannel-ban-hang-da-kenh',
    date: '28/07/2026',
  },
]

const categories = ['Tất cả', 'Góc nhìn Quản trị', 'Cẩm nang CĐS', 'Tư vấn Giải pháp']

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const filteredInsights =
    activeCategory === 'Tất cả'
      ? allInsights
      : allInsights.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 1. BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white py-4">
        <div className="container mx-auto px-6 text-sm font-medium text-slate-500 md:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-slate-900">RIC Insights</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER SECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center md:px-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-black tracking-widest text-blue-700 uppercase">
            <BookOpen className="h-4 w-4" /> Thư viện tri thức
          </span>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            RIC Insights & Stories
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600">
            Cập nhật những xu hướng công nghệ mới nhất, bí quyết quản trị doanh nghiệp và các bài
            học thực chiến từ quá trình chuyển đổi số.
          </p>
        </div>
      </section>

      {/* 3. BỘ LỌC CATEGORY */}
      <section className="sticky top-20 z-30 border-y border-slate-200 bg-white/80 py-4 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-20">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DANH SÁCH BÀI VIẾT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20">
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredInsights.map((item) => (
                <div
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <p className="mb-6 flex-1 text-slate-600">{item.desc}</p>
                    <Link
                      href={item.link}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                    >
                      Đọc tiếp{' '}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center text-slate-400">
              <Search className="mx-auto mb-6 h-16 w-16 opacity-20" />
              <p className="text-xl font-medium">Đang cập nhật thêm bài viết cho danh mục này.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
