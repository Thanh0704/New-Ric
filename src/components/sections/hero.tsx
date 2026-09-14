import React from 'react'
import Link from 'next/link'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Hero() {
  return (
    <section
      className="relative flex min-h-svh items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24 pb-12 lg:min-h-screen lg:pt-24 lg:pb-32"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full text-center lg:w-2/3 lg:text-left">
            <AnimateOnScroll>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100/80 px-3 py-1.5 text-[11px] font-bold text-blue-800 shadow-sm backdrop-blur-md sm:text-sm lg:mb-6">
                <ShieldCheck className="h-4 w-4" /> Đồng hành cùng doanh nghiệp Việt
              </div>

              {/* TỐI ƯU: Đưa về text-3xl cho Mobile, thêm leading-[1.2] để không rớt dòng xấu */}
              <h1 className="mb-4 text-3xl leading-[1.2] font-black tracking-tight text-slate-900 drop-shadow-md sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
                Chuyển đổi số <br />
                <span className="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  {' '}
                  bền vững & hiệu quả
                </span>
              </h1>

              {/* TỐI ƯU: Đưa về text-sm cho Mobile */}
              <p className="mb-8 px-2 text-sm leading-relaxed font-semibold text-slate-800 drop-shadow-sm sm:px-0 sm:text-base md:text-xl lg:mb-10 lg:max-w-2xl">
                RICVINA cung cấp hệ sinh thái công nghệ toàn diện, giúp doanh nghiệp tối ưu vận
                hành, nâng cao trải nghiệm khách hàng và tăng tốc doanh thu đột phá.
              </p>

              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:px-0 lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:scale-105 hover:bg-blue-700 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
                >
                  Khám phá giải pháp <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white/70 px-6 text-sm font-bold text-slate-800 shadow-lg backdrop-blur-md transition-all hover:border-blue-600 hover:bg-white hover:text-blue-600 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
                >
                  <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5" /> Liên hệ tư vấn
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
