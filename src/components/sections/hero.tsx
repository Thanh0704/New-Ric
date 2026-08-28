import React from 'react'
import Link from 'next/link'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Hero() {
  return (
    <section
      // ÉP CHIỀU CAO FULL MÀN HÌNH BẰNG CLASS: min-h-screen flex items-center
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-20 lg:pt-24 lg:pb-32"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
    >
      {/* Vẫn giữ lớp phủ để đảm bảo đọc được chữ nếu cần */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full text-center lg:w-2/3 lg:text-left">
            <AnimateOnScroll>
              {/* Badge: Nền xanh nhạt, chữ xanh đậm */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100/80 px-4 py-1.5 text-sm font-bold text-blue-800 shadow-sm backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" /> Đồng hành cùng doanh nghiệp Việt
              </div>

              {/* Tiêu đề: Đổi sang màu ĐEN ĐẬM (text-slate-900) */}
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 drop-shadow-md sm:text-5xl md:text-6xl lg:leading-[1.1]">
                Chuyển đổi số <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  bền vững & hiệu quả
                </span>
              </h1>

              {/* Đoạn mô tả: Đổi sang XÁM ĐẬM (text-slate-700) */}
              <p className="mb-10 text-lg leading-relaxed font-semibold text-slate-800 drop-shadow-sm md:text-xl">
                RICVINA cung cấp hệ sinh thái công nghệ toàn diện, giúp doanh nghiệp tối ưu vận
                hành, nâng cao trải nghiệm khách hàng và tăng tốc doanh thu đột phá.
              </p>

              {/* Nút bấm */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
