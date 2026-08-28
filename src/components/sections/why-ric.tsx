import React from 'react'
import { CheckCircle2 } from 'lucide-react'
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

export function WhyRic() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-br from-blue-900 to-slate-900 py-24 lg:py-32">
      {/* Hiệu ứng vệt sáng (Glow) để tạo chiều sâu không gian */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/30 blur-[150px]"></div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* CỘT TRÁI: Nội dung */}
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <h2 className="mb-10 text-3xl font-black tracking-tight text-white md:text-5xl lg:leading-tight">
                VÌ SAO CHỌN <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  RICVINA?
                </span>
              </h2>

              <ul className="flex flex-col gap-4">
                {reasons.map((reason, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-900/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className="text-lg font-semibold text-blue-50 transition-colors group-hover:text-white">
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
                  <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-900/40">
                    {/* Vệt sáng chạy xẹt qua khi hover */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

                    {/* Con số cực lớn và gradient */}
                    <span className="mb-3 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-5xl font-black text-transparent drop-shadow-lg md:text-6xl">
                      {stat.value}
                    </span>

                    {/* Tiêu đề thẻ */}
                    <span className="text-xs font-black tracking-widest text-cyan-400 uppercase">
                      {stat.label}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
