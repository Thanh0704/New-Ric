import React from 'react'
import Link from 'next/link'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Hero() {
  return (
    <section
      // TỐI ƯU MOBILE: Dùng min-h-[100svh] để fix lỗi Safari che mất phần dưới, padding pt-28 cho mobile nhường chỗ cho header
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-16 lg:min-h-screen lg:pt-24 lg:pb-32"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center lg:flex-row">
          {/* TỐI ƯU MOBILE: Ép text-center trên mobile, lên lg mới text-left */}
          <div className="w-full text-center lg:w-2/3 lg:text-left">
            <AnimateOnScroll>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100/80 px-4 py-1.5 text-xs font-bold text-blue-800 shadow-sm backdrop-blur-md lg:mb-6 lg:text-sm">
                <ShieldCheck className="h-4 w-4" /> Đồng hành cùng doanh nghiệp Việt
              </div>

              {/* TỐI ƯU MOBILE: Chữ h1 nhỏ lại (text-4xl) và ép leading-tight để khoảng cách dòng sát lại */}
              <h1 className="mb-4 text-4xl leading-tight font-black tracking-tight text-slate-900 drop-shadow-md sm:text-5xl md:text-6xl lg:mb-6 lg:leading-[1.1]">
                Chuyển đổi số <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  bền vững & hiệu quả
                </span>
              </h1>

              {/* TỐI ƯU MOBILE: Giảm text xuống base, margin bottom nhỏ lại */}
              <p className="mb-8 text-base leading-relaxed font-semibold text-slate-800 drop-shadow-sm md:text-xl lg:mb-10 lg:max-w-2xl">
                RICVINA cung cấp hệ sinh thái công nghệ toàn diện, giúp doanh nghiệp tối ưu vận
                hành, nâng cao trải nghiệm khách hàng và tăng tốc doanh thu đột phá.
              </p>

              {/* TỐI ƯU MOBILE: flex-col để 2 nút xếp chồng lên nhau trên điện thoại, w-full để nút kéo dài hết màn hình */}
              <div className="flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-auto sm:flex-row sm:px-0 lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:scale-105 hover:bg-blue-700 sm:w-auto"
                >
                  Khám phá giải pháp <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white/70 px-8 font-bold text-slate-800 shadow-lg backdrop-blur-md transition-all hover:border-blue-600 hover:bg-white hover:text-blue-600 sm:w-auto"
                >
                  <PlayCircle className="h-5 w-5" /> Liên hệ tư vấn
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
