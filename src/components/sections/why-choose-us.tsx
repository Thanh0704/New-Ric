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
    // THAY ĐỔI MÀU NỀN: Gradient trái qua phải (to-r) đồng bộ với Header
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-24 lg:py-32">
      {/* --- ÁNH SÁNG ẢO (AMBIENT GLOW) --- */}
      <div className="pointer-events-none absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-600/10 blur-[150px]"></div>

      <Container className="relative z-10">
        {/* =========================================
            PHẦN 1: WHY CHOOSE US (TẠI SAO CHỌN RIC)
            ========================================= */}
        <div className="mb-24 flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* CỘT TRÁI: Nội dung */}
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase shadow-sm">
                Tiêu chuẩn Ricvina
              </div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-white md:text-5xl lg:leading-[1.1]">
                Giải pháp xứng tầm. <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Cam kết bền vững.
                </span>
              </h2>

              <ul className="flex flex-col gap-4">
                {reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-900/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-base font-semibold text-slate-300 transition-colors group-hover:text-white">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* CỘT PHẢI: Thẻ Thống Kê (Glassmorphism) */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <span className="mb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-4xl font-black text-transparent drop-shadow-lg transition-all duration-500 group-hover:to-cyan-400 md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase transition-colors group-hover:text-cyan-400">
                      {stat.label}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* --- ĐƯỜNG CHIA CẮT MỜ --- */}
        <div className="mx-auto mb-20 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* =========================================
            PHẦN 2: PROCESS (QUY TRÌNH TRIỂN KHAI)
            ========================================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              Lộ trình triển khai tinh gọn
            </h2>
            <p className="text-lg font-medium text-slate-400">
              Mọi dự án đều được vận hành qua 5 bước tiêu chuẩn, đảm bảo đúng tiến độ, tối ưu chi
              phí và không phát sinh rủi ro.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Đường tia laser nối các bước (Chỉ hiện trên Desktop) */}
          <div className="absolute top-12 right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent lg:block"></div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="group relative z-10 flex flex-col items-center text-center">
                    {/* Icon Box */}
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <Icon className="h-10 w-10 text-slate-400 transition-colors group-hover:text-cyan-400" />

                      {/* Cục số 01, 02... nằm góc */}
                      <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-950 text-xs font-black text-cyan-400 shadow-md">
                        {step.id}
                      </div>
                    </div>

                    <h3 className="mb-3 px-2 text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                      {step.title}
                    </h3>
                    <p className="px-2 text-sm leading-relaxed font-medium text-slate-400">
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
