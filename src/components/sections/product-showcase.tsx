'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BellRing, ChevronRight, ChevronLeft, Lock } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const mainProducts = [
  {
    id: 'ecom',
    title: 'RIC ECOM',
    tagline: 'Nền tảng TMĐT',
    desc: 'Hệ thống bán hàng đa kênh đồng bộ, bứt phá doanh thu với trải nghiệm mượt mà.',
    image: '/images/solutions/ecom.jpg',
    link: '/products/ric-ecom',
  },
  {
    id: 'ricio',
    title: 'RICIO',
    tagline: 'Hospitality PMS',
    desc: 'Tự động hóa hoàn toàn quy trình Booking và quản lý cho chuỗi Khách sạn, Resort.',
    image: '/images/solutions/ricio.jpg',
    link: '/products/ricio',
  },
  {
    id: 'trust',
    title: 'RIC TRUST',
    tagline: 'Chống hàng giả',
    desc: 'Bảo vệ thương hiệu bằng công nghệ mã hóa QR Code nhiều lớp, kiểm soát hàng hóa.',
    image: '/images/solutions/ric-trust.jpg',
    link: '/products/ric-trust',
  },
  {
    id: 'message',
    title: 'RIC MESSAGE',
    tagline: 'Marketing Auto',
    desc: 'Nuôi dưỡng khách hàng tự động qua kịch bản Zalo ZNS và SMS Brandname.',
    image: '/images/solutions/ric-message.jpg',
    link: '/products/ric-message',
  },
  {
    id: 'affiliate',
    title: 'RIC AFFILIATE',
    tagline: 'Quản lý đối tác',
    desc: 'Xây dựng mạng lưới cộng tác viên, tự động đối soát hoa hồng minh bạch.',
    image: '/images/solutions/ric-affiliate.jpg',
    link: '/products/ric-affiliate',
  },
]

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
    image: '/images/solutions/zhub.jpg',
  },
]

export function ProductShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-br from-blue-900 to-slate-900 py-24 lg:py-32">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* Glow Effects Y HỆT KHỐI WHYRIC: Tạo ánh sáng ngọc lam và xanh dương ở 2 góc */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/30 blur-[150px]"></div>

      <Container className="relative z-10 mb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimateOnScroll>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white uppercase md:text-5xl">
              HỆ SINH THÁI <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                SẢN PHẨM
              </span>
            </h2>
            <p className="max-w-xl text-lg font-medium text-slate-300">
              Công cụ mạnh mẽ, giao diện trực quan. Vuốt để khám phá các giải pháp chuyển đổi số
              hàng đầu.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>

      <div
        ref={scrollContainerRef}
        className="hide-scrollbar relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 md:px-12 lg:gap-10"
      >
        <div className="w-[1vw] shrink-0 md:w-[5vw]"></div>

        {mainProducts.map((product) => (
          <Link
            href={product.link}
            key={product.id}
            className="group relative flex h-[500px] w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2.5 shadow-2xl shadow-black/50 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 md:h-[560px] md:w-[380px]"
          >
            <div className="relative z-10 flex h-3/5 w-full flex-col rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-6 md:p-8">
              <span className="mb-3 inline-table w-max rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3 py-1 text-xs font-black tracking-wider text-cyan-300 uppercase backdrop-blur-md">
                {product.tagline}
              </span>
              <h3 className="mb-4 text-3xl font-black text-white md:text-4xl">{product.title}</h3>
              <p className="line-clamp-3 text-sm leading-relaxed font-medium text-slate-300">
                {product.desc}
              </p>

              <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-white">
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>

            <div className="absolute right-0 bottom-0 z-0 h-[45%] w-[90%] overflow-hidden rounded-tl-[2rem] rounded-br-[2.25rem] border-4 border-white/10 bg-slate-900 shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-top opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Link>
        ))}

        <div className="w-[1vw] shrink-0 md:w-[5vw]"></div>
      </div>

      <Container className="relative z-10">
        <AnimateOnScroll delay={300}>
          <div className="mt-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-sm font-black tracking-widest text-cyan-400 uppercase">
                Sản phẩm sắp ra mắt (Coming Soon)
              </h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-500/30 hover:bg-white/10 md:flex-row"
                >
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 md:w-32">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-40 grayscale transition-all group-hover:opacity-70 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="h-6 w-6 text-white/50" />
                    </div>
                  </div>

                  <div className="flex w-full flex-1 flex-col justify-between py-2">
                    <div>
                      <h4 className="mb-1 text-xl font-black text-white">{product.title}</h4>
                      <p className="mb-4 text-sm font-medium text-slate-400">{product.tagline}</p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex w-max items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-colors hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
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
