import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      // Lớp bọc ngoài cùng: Chiều cao tối thiểu 90vh trên mobile và full màn hình trên Desktop
      className="relative flex min-h-[90vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat lg:min-h-screen"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }} // BẠN NHỚ THAY ẢNH NỀN THẬT XỊN VÀO ĐÂY NHÉ
    >
      {/* Lớp Overlay tối màu để làm nổi chữ trắng lên */}
      <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>

      {/* Hiệu ứng Gradient mờ dần từ dưới lên để nối mượt với section bên dưới */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center md:px-12 lg:px-20">
        {/* Trust Badge (Huy hiệu uy tín) - Căn giữa, viền kính mờ (Glassmorphism) */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
          </span>
          Nền tảng quản trị toàn diện cho doanh nghiệp
        </div>

        {/* Tiêu đề chính */}
        <h1 className="mb-6 max-w-4xl text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
          Chuyển đổi số <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            thực chiến & hiệu quả
          </span>
        </h1>

        {/* Mô tả phụ */}
        <p className="mb-12 max-w-2xl text-lg leading-relaxed font-medium text-slate-200 md:text-xl">
          RICVINA cung cấp hệ sinh thái phần mềm B2B SaaS mạnh mẽ, giúp doanh nghiệp tối ưu vận
          hành, tăng trưởng doanh thu và bứt phá trong kỷ nguyên số.
        </p>

        {/* Cụm 2 nút Call-to-Action */}
        <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          {/* NÚT 1: Nút lăn hiệu ứng (Màu trắng nổi bật) */}
          <Link
            href="/products"
            className="group relative inline-flex items-center rounded-full border-2 border-white bg-white p-1.5 transition-colors"
          >
            <div className="pointer-events-none absolute inset-1.5 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full w-12 rounded-full bg-blue-600 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
            </div>
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-slate-900 transition-colors duration-500 group-hover:text-white">
              <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0" />
            </div>
            <span className="relative z-10 pr-6 pl-3 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
              Khám phá hệ sinh thái
            </span>
          </Link>

          {/* NÚT 2: Liên hệ tư vấn (Hiệu ứng kính mờ Glassmorphism) */}
          <Link
            href="/contact"
            className="inline-flex h-[64px] items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-8 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
          >
            Liên hệ tư vấn
          </Link>
        </div>

        {/* Social Proof (Bằng chứng xã hội) căn giữa */}
        <div className="flex flex-col items-center gap-4 text-sm font-semibold text-slate-300 sm:flex-row">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-slate-200 shadow-sm"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Khách hàng"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p>
            Tự hào đồng hành cùng <span className="font-bold text-white">500+</span> doanh nghiệp
            Việt.
          </p>
        </div>
      </div>
    </section>
  )
}
