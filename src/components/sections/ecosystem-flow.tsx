'use client'

import React from 'react'
import {
  Megaphone,
  ShoppingCart,
  Cog,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import Link from 'next/link'

const growthSteps = [
  {
    id: '01',
    title: 'Tiếp cận & Thu hút',
    desc: 'Tự động hóa kịch bản tiếp thị, mở rộng phễu khách hàng qua đa kênh.',
    icon: Megaphone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
    tools: ['RIC Message', 'RIC Affiliate'],
  },
  {
    id: '02',
    title: 'Chốt Sale & Chuyển đổi',
    desc: 'Tối ưu hóa hành trình mua hàng, tăng tỷ lệ chuyển đổi thành doanh thu.',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    tools: ['RIC ECOM', 'RICIO'],
  },
  {
    id: '03',
    title: 'Quản trị & Vận hành',
    desc: 'Xử lý đơn hàng, kiểm soát tồn kho, tài chính và chống thất thoát.',
    icon: Cog,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    tools: ['RIC ERP', 'RIC TRUST'],
  },
  {
    id: '04',
    title: 'CSKH & Giữ chân',
    desc: 'Gom mọi tương tác về một nơi, chăm sóc khách hàng bằng AI để tạo mua lại.',
    icon: HeartHandshake,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
    tools: ['ZHUB (Unified Chat)'],
  },
]

export function EcosystemFlow() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-black tracking-widest text-blue-700 shadow-sm">
              Value Chain
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Vòng lặp vận hành <span className="text-blue-600">không điểm mù</span>
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Lần đầu tiên, mọi hoạt động từ Marketing, Bán hàng, Vận hành đến CSKH được luân chuyển
              mượt mà trên cùng một hệ sinh thái. Không còn dữ liệu bị gãy khúc.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Luồng 4 bước (Grid Layout) */}
        <div className="relative">
          {/* Đường gạch nối liền mạch chạy ngang (Chỉ hiện ở Desktop) */}
          <div className="absolute top-12 right-[12%] left-[12%] hidden h-1 border-t-2 border-dashed border-slate-300 lg:block"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {growthSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50">
                    {/* Số Thứ Tự & Icon */}
                    <div className="mb-8 flex items-center justify-between">
                      <div
                        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${step.bgColor} ${step.color} shadow-inner`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-4xl font-black text-slate-100 transition-colors group-hover:text-slate-200">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="mb-4 text-xl font-black text-slate-900">{step.title}</h3>
                    <p className="mb-8 flex-1 text-sm leading-relaxed font-medium text-slate-600">
                      {step.desc}
                    </p>

                    {/* Danh sách công cụ giải quyết cho bước này */}
                    <div className="mt-auto rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <p className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                        Công cụ đảm nhiệm:
                      </p>
                      <ul className="space-y-2">
                        {step.tools.map((tool, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm font-bold text-slate-700"
                          >
                            <CheckCircle2 className={`h-4 w-4 ${step.color}`} />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>

        <AnimateOnScroll delay={600}>
          <div className="mt-20 flex flex-col items-center justify-center gap-6 text-center sm:flex-row">
            <Link
              href="/register"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              Đăng ký dùng thử toàn bộ hệ thống
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
