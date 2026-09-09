'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BellRing, ChevronRight, ChevronLeft, Lock } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const mainProducts = [
  {
    id: 'ecom',
    title: 'RIC ECOM',
    tagline: 'Nền tảng TMĐT',
    desc: 'Hệ thống bán hàng đa kênh đồng bộ, bứt phá doanh thu với trải nghiệm mượt mà.',
    image: '/images/solutions/ecom.jpg',
    link: '/products/ecom', // Chú ý link chuẩn là /products/ecom
    color: 'blue',
  },
  {
    id: 'ricio',
    title: 'RICIO',
    tagline: 'Hospitality PMS',
    desc: 'Tự động hóa hoàn toàn quy trình Booking và quản lý cho chuỗi Khách sạn, Resort.',
    image: '/images/solutions/ricio.jpg',
    link: '/products/ricio',
    color: 'indigo',
  },
  {
    id: 'trust',
    title: 'RIC TRUST',
    tagline: 'Chống hàng giả',
    desc: 'Bảo vệ thương hiệu bằng công nghệ mã hóa QR Code nhiều lớp, kiểm soát hàng hóa.',
    image: '/images/solutions/ric-trust.jpg',
    link: '/products/ric-trust',
    color: 'violet',
  },
  {
    id: 'message',
    title: 'RIC MESSAGE',
    tagline: 'Marketing Auto',
    desc: 'Nuôi dưỡng khách hàng tự động qua kịch bản Zalo ZNS và SMS Brandname.',
    image: '/images/solutions/ric-message.jpg',
    link: '/products/ric-message',
    color: 'cyan',
  },
  {
    id: 'affiliate',
    title: 'RIC AFFILIATE',
    tagline: 'Quản lý đối tác',
    desc: 'Xây dựng mạng lưới cộng tác viên, tự động đối soát hoa hồng minh bạch.',
    image: '/images/solutions/ric-affiliate.jpg',
    link: '/products/ric-affiliate',
    color: 'emerald',
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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 py-12 md:py-24 lg:py-32">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-[150px]"></div>

      <Container className="relative z-10 mb-6 lg:mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimateOnScroll>
            <h2 className="mb-2 text-2xl font-black tracking-tight text-white uppercase sm:text-3xl md:mb-4 lg:text-5xl">
              HỆ SINH THÁI <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                SẢN PHẨM
              </span>
            </h2>
            <p className="max-w-xl text-sm font-medium text-slate-300 sm:text-base lg:text-lg">
              Công cụ mạnh mẽ, giao diện trực quan. Vuốt để khám phá các giải pháp chuyển đổi số
              hàng đầu.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="hidden gap-4 md:flex">
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
        className="hide-scrollbar relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-12 sm:px-6 md:gap-6 md:px-12 lg:gap-10"
      >
        <div className="w-[2vw] shrink-0 md:w-[5vw]"></div>

        {mainProducts.map((product) => (
          <Link
            href={product.link}
            key={product.id}
            className="group relative flex h-[460px] w-[85vw] max-w-[320px] shrink-0 snap-center flex-col rounded-[2rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)] sm:w-[320px] md:h-[540px] md:w-[380px] md:rounded-[2.5rem] md:p-3"
          >
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/10 to-transparent shadow-inner md:rounded-[2rem]">
              <div className="flex flex-1 flex-col px-5 pt-5 md:px-8 md:pt-8">
                <span className="mb-4 inline-flex w-max items-center rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3 py-1 text-[9px] font-black tracking-widest text-cyan-300 uppercase shadow-sm md:mb-5 md:px-4 md:py-1.5 md:text-[10px]">
                  {product.tagline}
                </span>

                <h3 className="mb-2 text-2xl font-black tracking-tight text-white md:mb-4 md:text-4xl">
                  {product.title}
                </h3>

                <p className="text-[13px] leading-relaxed font-medium text-white/80 md:text-[15px]">
                  {product.desc}
                </p>

                <div className="mt-auto pb-4 md:pb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] md:px-6 md:text-sm">
                    Khám phá{' '}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
                  </div>
                </div>
              </div>

              <div className="relative pl-5 md:pl-8">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border-t border-l border-white/20 bg-slate-900 shadow-2xl md:rounded-tl-[2rem] md:rounded-br-[2rem]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-left-top"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {comingSoonProducts.map((product) => (
          <div
            key={`mobile-soon-${product.id}`}
            className="group relative flex h-[460px] w-[85vw] max-w-[320px] shrink-0 snap-center flex-col rounded-[2rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)] sm:w-[320px] md:hidden"
          >
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/10 to-transparent shadow-inner">
              <div className="flex flex-1 flex-col px-5 pt-5">
                <span className="mb-4 inline-flex w-max items-center rounded-full border border-slate-500/50 bg-slate-500/20 px-3 py-1 text-[9px] font-black tracking-widest text-slate-300 uppercase shadow-sm">
                  {product.tagline}
                </span>

                <h3 className="mb-2 text-2xl font-black tracking-tight text-white">
                  {product.title}
                </h3>

                <p className="text-[13px] leading-relaxed font-medium text-white/80">
                  Sản phẩm đang trong quá trình phát triển và hoàn thiện.
                </p>

                <div className="mt-auto pb-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-900 transition-shadow hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  >
                    <BellRing className="h-3 w-3" /> Đăng ký nhận tin
                  </Link>
                </div>
              </div>

              {/* ĐÃ SỬA MOBILE: Ảnh hiện rõ, bỏ kính mờ và đen trắng */}
              <div className="relative pl-5">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border-t border-l border-white/20 bg-slate-900 shadow-2xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-500 group-hover:bg-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-900 uppercase shadow-sm">
                      <Lock className="h-3 w-3" /> Sắp ra mắt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[2vw] shrink-0 md:w-[5vw]"></div>
      </div>

      <Container className="relative z-10 hidden md:block">
        <AnimateOnScroll delay={300}>
          <div className="mt-2 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:mt-8 md:rounded-[2.5rem] md:p-6 lg:p-10">
            <div className="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
              <h3 className="text-[10px] font-black tracking-widest text-cyan-400 uppercase sm:text-xs md:text-sm">
                Sắp ra mắt (Coming Soon)
              </h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {comingSoonProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-cyan-500/30 hover:bg-white/10 sm:flex-row sm:gap-6 sm:p-4"
                >
                  {/* ĐÃ SỬA LAPTOP: Bỏ hiệu ứng đen trắng để ảnh hiện rõ nét */}
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg border border-white/10 bg-slate-900 sm:h-28 sm:w-32">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-60 transition-all group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                  <div className="flex w-full flex-1 flex-col justify-between py-1 text-center sm:text-left">
                    <div>
                      <h4 className="mb-1 text-lg font-black text-white sm:text-xl">
                        {product.title}
                      </h4>
                      <p className="mb-3 text-xs font-medium text-slate-400 sm:mb-4 sm:text-sm">
                        {product.tagline}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold text-white transition-colors hover:border-cyan-500 hover:bg-cyan-500 hover:text-white sm:mx-0 sm:w-max sm:rounded-xl sm:text-xs"
                    >
                      <BellRing className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" /> Đăng ký nhận thông báo
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
