import React from 'react'
import { CheckCircle2, Search, Lightbulb, Cog, GraduationCap, Headphones } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const reasons = [
  'Đội ngũ chuyên gia giàu kinh nghiệm',
  'Giải pháp tối ưu - Công nghệ hiện đại',
  'Cam kết chất lượng - Bảo mật cao',
  'Đồng hành lâu dài cùng doanh nghiệp',
]

const stats = [
  { value: '5+', label: 'Năm kinh nghiệm' },
  { value: '100+', label: 'Dự án thành công' },
  { value: '50+', label: 'Khách hàng tin tưởng' },
  { value: '99%', label: 'Khách hàng hài lòng' },
]

const steps = [
  {
    id: '01',
    title: 'Tư vấn & Phân tích',
    desc: 'Bắt bệnh chính xác, hiểu rõ bài toán doanh nghiệp.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Đề xuất Giải pháp',
    desc: 'Thiết kế hệ thống tối ưu hiệu năng và chi phí nhất.',
    icon: Lightbulb,
  },
  {
    id: '03',
    title: 'Triển khai Code',
    desc: 'Phát triển, kiểm thử và đưa hệ thống lên Cloud.',
    icon: Cog,
  },
  {
    id: '04',
    title: 'Bàn giao & Đào tạo',
    desc: 'Hướng dẫn chi tiết, đảm bảo nhân sự làm chủ công nghệ.',
    icon: GraduationCap,
  },
  {
    id: '05',
    title: 'Bảo hành Trọn đời',
    desc: 'Giám sát 24/7, hỗ trợ kỹ thuật và nâng cấp liên tục.',
    icon: Headphones,
  },
]

export function RicvinaStandard() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-12 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-600/10 blur-[150px]"></div>

      <Container className="relative z-10">
        <div className="mb-12 flex flex-col gap-8 md:mb-24 lg:flex-row lg:items-center lg:gap-24">
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-[9px] font-bold tracking-widest text-blue-400 uppercase shadow-sm md:mb-6 md:px-4 md:text-xs">
                Tiêu chuẩn Ricvina
              </div>
              <h2 className="mb-5 text-2xl font-black tracking-tight text-white sm:text-3xl md:mb-8 md:text-5xl lg:leading-[1.1]">
                Giải pháp xứng tầm. <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Cam kết bền vững.
                </span>
              </h2>

              <ul className="flex flex-col gap-2.5 md:gap-4">
                {reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-2.5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-900/20 md:gap-4 md:rounded-2xl md:p-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white md:h-10 md:w-10">
                      <CheckCircle2 className="h-3 w-3 md:h-5 md:w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 transition-colors group-hover:text-white sm:text-sm md:text-base">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] md:rounded-3xl md:p-8">
                    <span className="mb-1 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-2xl font-black text-transparent drop-shadow-lg transition-all duration-500 group-hover:to-cyan-400 sm:text-3xl md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase transition-colors group-hover:text-cyan-400 sm:text-[10px]">
                      {stat.label}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mb-10 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent md:mb-20"></div>

        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-16">
          <AnimateOnScroll>
            <h2 className="mb-2 text-xl font-black tracking-tight text-white sm:text-2xl md:mb-4 md:text-4xl">
              Lộ trình triển khai tinh gọn
            </h2>
            <p className="px-4 text-xs font-medium text-slate-400 sm:text-sm md:text-lg">
              Mọi dự án đều được vận hành qua 5 bước tiêu chuẩn, đảm bảo đúng tiến độ, tối ưu chi
              phí.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute top-12 right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent lg:block"></div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="group relative z-10 flex flex-col items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-[1rem] border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] md:mb-6 md:h-24 md:w-24 md:rounded-3xl">
                      <Icon className="h-6 w-6 text-slate-400 transition-colors group-hover:text-cyan-400 md:h-10 md:w-10" />
                      <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-950 text-[9px] font-black text-cyan-400 shadow-md md:-top-3 md:-right-3 md:h-8 md:w-8 md:text-xs">
                        {step.id}
                      </div>
                    </div>

                    <h3 className="mb-1.5 px-2 text-sm font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-base md:mb-3 md:text-lg">
                      {step.title}
                    </h3>
                    <p className="px-4 text-[11px] leading-relaxed font-medium text-slate-400 md:px-2 md:text-sm">
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
