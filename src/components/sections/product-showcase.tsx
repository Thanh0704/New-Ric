'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BellRing, ChevronRight, ChevronLeft, Lock } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// 1. DATA 5 SẢN PHẨM CHÍNH (Hiển thị trên Carousel)
const mainProducts = [
  {
    id: 'ecom',
    title: 'RIC ECOM',
    tagline: 'Nền tảng TMĐT',
    desc: 'Hệ thống bán hàng đa kênh đồng bộ, bứt phá doanh thu với trải nghiệm mượt mà.',
    price: 'Sẵn sàng',
    bgColor: 'bg-blue-50', // Màu nền cho khối text bên trong
    textColor: 'text-blue-900',
    image: '/images/solutions/ecom.jpg',
    link: '/products/ric-ecom',
  },
  {
    id: 'ricio',
    title: 'RICIO',
    tagline: 'Hospitality PMS',
    desc: 'Tự động hóa hoàn toàn quy trình Booking và quản lý cho chuỗi Khách sạn, Resort.',
    price: 'Sẵn sàng',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-900',
    image: '/images/solutions/ricio.jpg',
    link: '/products/ricio',
  },
  {
    id: 'trust',
    title: 'RIC TRUST',
    tagline: 'Chống hàng giả',
    desc: 'Bảo vệ thương hiệu bằng công nghệ mã hóa QR Code nhiều lớp, kiểm soát hàng hóa.',
    price: 'Sẵn sàng',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-900',
    image: '/images/solutions/ric-trust.jpg',
    link: '/products/ric-trust',
  },
  {
    id: 'message',
    title: 'RIC MESSAGE',
    tagline: 'Marketing Auto',
    desc: 'Nuôi dưỡng khách hàng tự động qua kịch bản Zalo ZNS và SMS Brandname.',
    price: 'Sẵn sàng',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    image: '/images/solutions/ric-message.jpg',
    link: '/products/ric-message',
  },
  {
    id: 'affiliate',
    title: 'RIC AFFILIATE',
    tagline: 'Quản lý đối tác',
    desc: 'Xây dựng mạng lưới cộng tác viên, tự động đối soát hoa hồng minh bạch.',
    price: 'Sẵn sàng',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-900',
    image: '/images/solutions/ric-affiliate.jpg',
    link: '/products/ric-affiliate',
  },
]

// 2. DATA 2 SẢN PHẨM COMING SOON (Hiển thị nhỏ bên dưới)
const comingSoonProducts = [
  {
    id: 'erp',
    title: 'RIC ERP',
    tagline: 'Quản trị tổng thể doanh nghiệp',
    image: '/images/solutions/ric-erp.jpg',
  },
  {
    id: 'zhub',
    title: 'ZHUB (AI Chat)',
    tagline: 'Hộp thoại CSKH hợp nhất đa kênh',
    image: '/images/solutions/zhub.jpg', // Sếp thêm ảnh cho zhub
  },
]

export function ProductShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Hàm bấm nút trượt trái/phải cho Carousel
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* KHÚC CSS ẨN THANH CUỘN XẤU XÍ CỦA TRÌNH DUYỆT */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <Container className="mb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimateOnScroll>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white uppercase md:text-5xl">
              HỆ SINH THÁI <br /> SẢN PHẨM
            </h2>
            <p className="max-w-xl text-lg font-medium text-slate-400">
              Công cụ mạnh mẽ, giao diện trực quan. Vuốt để khám phá các giải pháp chuyển đổi số
              hàng đầu.
            </p>
          </AnimateOnScroll>

          {/* Nút điều hướng Carousel (Trái/Phải) */}
          <AnimateOnScroll delay={200}>
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-blue-600"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-blue-600"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>

      {/* =========================================
          KHỐI 1: CAROUSEL 5 SẢN PHẨM (Style Card-in-card)
          ========================================= */}
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 md:px-12 lg:gap-10"
      >
        {/* Thêm 1 thẻ rỗng nhỏ ở đầu để căn lề đẹp hơn */}
        <div className="w-[1vw] shrink-0 md:w-[5vw]"></div>

        {mainProducts.map((product) => (
          <Link
            href={product.link}
            key={product.id}
            className="group relative flex h-[500px] w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-[2.5rem] bg-white p-2.5 shadow-2xl shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2 md:h-[560px] md:w-[380px]"
          >
            {/* Lớp màu nền bo góc nhốt Text bên trong (Giống hình tham chiếu) */}
            <div
              className={`relative z-10 flex h-3/5 w-full flex-col rounded-[2rem] p-6 md:p-8 ${product.bgColor}`}
            >
              <span
                className={`mb-3 inline-table w-max rounded-full bg-white/60 px-3 py-1 text-xs font-black tracking-wider uppercase ${product.textColor}`}
              >
                {product.tagline}
              </span>
              <h3 className={`mb-4 text-3xl font-black md:text-4xl ${product.textColor}`}>
                {product.title}
              </h3>
              <p
                className={`line-clamp-3 text-sm leading-relaxed font-medium opacity-80 ${product.textColor}`}
              >
                {product.desc}
              </p>

              {/* Nút mũi tên chéo góc (Đặc trưng của ảnh sếp gửi) */}
              <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-blue-600">
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>

            {/* Lớp ảnh phần mềm nằm đè ở nửa dưới (Mockup) */}
            <div className="absolute right-0 bottom-0 h-[45%] w-[90%] overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] border-4 border-white bg-slate-200 shadow-xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-top"
              />
            </div>
          </Link>
        ))}

        {/* Thẻ rỗng ở cuối để không bị sát lề */}
        <div className="w-[1vw] shrink-0 md:w-[5vw]"></div>
      </div>

      {/* =========================================
          KHỐI 2: 2 SẢN PHẨM COMING SOON (Nhỏ & Nằm dưới)
          ========================================= */}
      <Container>
        <AnimateOnScroll delay={300}>
          <div className="mt-8 rounded-[2.5rem] border border-slate-800 bg-slate-800/50 p-6 backdrop-blur-sm lg:p-10">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-sm font-black tracking-widest text-slate-500 uppercase">
                Sản phẩm sắp ra mắt (Coming Soon)
              </h3>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col items-center gap-6 rounded-3xl border border-slate-700/50 bg-slate-900/50 p-4 transition-all hover:border-slate-600 md:flex-row"
                >
                  {/* Ảnh thu nhỏ bị làm mờ xám */}
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-800 md:w-32">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-50 grayscale transition-all group-hover:opacity-80 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="h-6 w-6 text-white/50" />
                    </div>
                  </div>

                  {/* Nội dung bên phải */}
                  <div className="flex w-full flex-1 flex-col justify-between py-2">
                    <div>
                      <h4 className="mb-1 text-xl font-black text-white">{product.title}</h4>
                      <p className="mb-4 text-sm font-medium text-slate-400">{product.tagline}</p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex w-max items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 transition-colors hover:bg-orange-500 hover:text-white"
                    >
                      <BellRing className="h-4 w-4" /> Đăng ký nhận thông báo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
