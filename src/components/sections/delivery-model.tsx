import React from 'react'
import { Search, Settings, Rocket, TrendingUp, ChevronRight } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const steps = [
  {
    id: '01',
    phase: 'Discover',
    title: 'Khảo sát & Phân tích',
    desc: 'Chuyên gia RICVINA làm việc trực tiếp để phân tích bài toán, nỗi đau và quy trình hiện tại của doanh nghiệp.',
    icon: Search,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: '02',
    phase: 'Configure',
    title: 'Thiết lập & May đo',
    desc: 'Cấu hình hệ thống, phân quyền chuẩn xác theo đúng nghiệp vụ đặc thù đã được thống nhất từ bước khảo sát.',
    icon: Settings,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    id: '03',
    phase: 'Deploy',
    title: 'Đào tạo & Triển khai',
    desc: 'Đưa hệ thống vào thực tế, đào tạo nhân sự sử dụng (Onboarding) đảm bảo 100% đội ngũ áp dụng thành thạo.',
    icon: Rocket,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: '04',
    phase: 'Scale',
    title: 'Đo lường & Mở rộng',
    desc: 'Theo dõi chỉ số Real-time, tinh chỉnh quy trình liên tục và sẵn sàng mở rộng tính năng khi doanh nghiệp tăng trưởng.',
    icon: TrendingUp,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
]

export function DeliveryModel() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-black tracking-widest text-emerald-600 uppercase">
              Delivery Model
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Lộ trình triển khai <span className="text-emerald-500">chuẩn mực</span>
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Đập tan nỗi lo "mua phần mềm về đắp chiếu". Chúng tôi cam kết đồng hành cùng doanh
              nghiệp từ lúc lên ý tưởng đến khi ra kết quả thực tế.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative">
          {/* Đường gạch ngang nền kết nối các bước (Chỉ hiện trên Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-slate-100 lg:block"></div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1

              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="relative z-10 flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-200">
                    {/* Icon Phase */}
                    <div
                      className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${step.bgColor} ${step.color}`}
                    >
                      <Icon className="h-10 w-10" />
                    </div>

                    {/* Mũi tên chỉ hướng (Nằm ngoài Box, chỉ hiện trên Desktop) */}
                    {!isLast && (
                      <div className="absolute top-1/2 -right-6 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 shadow-sm lg:block">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                    )}

                    <span className="mb-2 text-xs font-black tracking-widest text-slate-400 uppercase">
                      Bước {step.id} • {step.phase}
                    </span>
                    <h3 className="mb-4 text-xl font-black text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed font-medium text-slate-600">
                      {step.desc}
                    </p>
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
