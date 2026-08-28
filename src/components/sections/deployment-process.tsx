import React from 'react'
import { Search, Lightbulb, Cog, GraduationCap, Headphones } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const steps = [
  {
    id: '01',
    title: 'Tư vấn & phân tích',
    desc: 'Hiểu rõ nhu cầu và bài toán của doanh nghiệp.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Đề xuất giải pháp',
    desc: 'Đề xuất giải pháp phù hợp và tối ưu chi phí nhất.',
    icon: Lightbulb,
  },
  {
    id: '03',
    title: 'Triển khai',
    desc: 'Phát triển, kiểm thử và chính thức triển khai hệ thống.',
    icon: Cog,
  },
  {
    id: '04',
    title: 'Đào tạo & bàn giao',
    desc: 'Đào tạo sử dụng chi tiết và bàn giao toàn bộ hệ thống.',
    icon: GraduationCap,
  },
  {
    id: '05',
    title: 'Hỗ trợ & đồng hành',
    desc: 'Hỗ trợ kỹ thuật, nâng cấp và phát triển dài lâu.',
    icon: Headphones,
  },
]

export function DeploymentProcess() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              QUY TRÌNH TRIỂN KHAI
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Minh bạch, chuyên nghiệp và đồng hành sát sao cùng doanh nghiệp ở mọi giai đoạn.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute top-10 right-[10%] left-[10%] hidden h-0.5 border-t-2 border-dashed border-slate-200 lg:block"></div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-white bg-white shadow-xl shadow-slate-200 transition-transform duration-300 hover:scale-110 hover:border-blue-200">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>

                    <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-sm font-black text-blue-700">
                      {step.id}
                    </span>

                    <h3 className="mb-3 px-2 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="px-4 text-sm font-medium text-slate-600">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
