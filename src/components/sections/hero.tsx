import React from 'react'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative flex h-[70vh] min-h-[550px] w-full items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl text-left">
          <h1 className="mb-4 text-4xl leading-tight font-bold text-white uppercase md:text-5xl">
            Đồng hành chuyển đổi số
          </h1>

          <p className="mb-8 text-base text-gray-200 md:text-lg">
            Giải pháp công nghệ hàng đầu cho doanh nghiệp hiện đại trong kỷ nguyên 4.0
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-[#3b82f6] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#2563eb]"
            >
              Khám phá ngay
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
