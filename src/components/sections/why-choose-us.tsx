import React from 'react'
import { Search, Lightbulb, Cog, GraduationCap, Headphones } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Vệt sáng ngăn cách */}
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
        <div className="mx-auto h-[120px] w-[80%] max-w-4xl bg-gradient-to-b from-cyan-400/20 to-transparent blur-2xl"></div>
      </div>

      {/* Grid line background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:40px_40px]"></div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[150px]"></div>

      <Container className="relative z-10">
        {/* TIÊU ĐỀ LỘ TRÌNH ĐƯỢC CĂN GIỮA */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
          <AnimateOnScroll>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-cyan-400 uppercase shadow-sm md:mb-6 md:px-5 md:py-2 md:text-xs">
              Tiêu chuẩn Ricvina
            </div>
            <h2 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl">
              Lộ trình triển khai{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                tinh gọn
              </span>
            </h2>
            <p className="px-4 text-sm font-medium text-slate-300 md:text-lg">
              Mọi dự án đều được vận hành qua 5 bước tiêu chuẩn, đảm bảo đúng tiến độ, tối ưu chi
              phí.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative mx-auto max-w-6xl px-2 md:px-0">
          {/* =========================================================
              TRỤC TIMELINE NGANG (CHỈ HIỆN TRÊN LAPTOP)
              ========================================================= */}
          <div className="absolute top-[3.5rem] right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent lg:block"></div>

          {/* =========================================================
              TRỤC TIMELINE DỌC (CHỈ HIỆN TRÊN MOBILE)
              ========================================================= */}
          <div className="absolute top-[1.75rem] bottom-[1.75rem] left-[2.25rem] z-0 w-[2px] bg-gradient-to-b from-cyan-400/80 via-cyan-400/20 to-transparent md:hidden"></div>

          <div className="relative z-10 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="group relative flex flex-row items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
                    {/* ICON - TRẠM DỪNG */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-cyan-500/30 bg-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 md:mb-6 md:h-28 md:w-28 md:rounded-3xl md:bg-slate-900/50 md:group-hover:-translate-y-2 md:group-hover:border-cyan-500/50 md:group-hover:bg-cyan-500/20 md:group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <Icon className="h-6 w-6 text-cyan-400 transition-colors duration-300 md:h-12 md:w-12 md:text-slate-300 md:group-hover:text-cyan-400" />
                      <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-900 text-[9px] font-black text-cyan-400 shadow-md md:-top-3 md:-right-3 md:h-8 md:w-8 md:text-sm">
                        {step.id}
                      </div>
                    </div>

                    {/* NỘI DUNG */}
                    <div className="flex-1 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-cyan-500/30 md:rounded-none md:border-transparent md:bg-transparent md:p-0 md:backdrop-blur-none md:hover:border-transparent md:hover:bg-transparent">
                      <h3 className="mb-1.5 text-sm font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-base md:mb-3 md:text-lg">
                        {step.title}
                      </h3>
                      <p className="text-[11px] leading-relaxed font-medium text-slate-400 md:px-2 md:text-sm">
                        {step.desc}
                      </p>
                    </div>
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
