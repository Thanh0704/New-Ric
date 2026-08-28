import React from 'react'
import Link from 'next/link'
import { Briefcase, ShoppingBag, Smartphone, Settings, ArrowRight } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const categories = [
  {
    id: 'management',
    title: 'Giải pháp quản lý',
    desc: 'Tối ưu quy trình vận hành, quản lý dữ liệu hiệu quả và minh bạch.',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'ecommerce',
    title: 'Giải pháp E-commerce',
    desc: 'Xây dựng nền tảng bán hàng đa kênh chuyên nghiệp, linh hoạt.',
    icon: ShoppingBag,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    id: 'mobile',
    title: 'Ứng dụng di động',
    desc: 'Trải nghiệm mượt mà, kết nối khách hàng và nhân sự mọi lúc mọi nơi.',
    icon: Smartphone,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    id: 'custom',
    title: 'Giải pháp tùy biến',
    desc: 'Đo ni đóng giày, đáp ứng trọn vẹn đặc thù của từng ngành nghề.',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
]

export function SolutionCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-[120px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              GIẢI PHÁP CỦA CHÚNG TÔI
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Đa dạng giải pháp – Tối ưu theo nhu cầu doanh nghiệp
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.id} delay={index * 100}>
                <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                  <div
                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${item.bgColor} ${item.color} border border-slate-100 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-10 w-10" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed font-medium text-slate-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <div className="text-center">
          <AnimateOnScroll delay={400}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              Xem tất cả giải pháp <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
