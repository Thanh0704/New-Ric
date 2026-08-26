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
  {
    value: '5+',
    label: 'Năm kinh nghiệm',
  },
  {
    value: '100+',
    label: 'Dự án thành công',
  },
  {
    value: '50+',
    label: 'Khách hàng tin tưởng',
  },
  {
    value: '99%',
    label: 'Khách hàng hài lòng',
  },
]

export function WhyRic() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* CỘT TRÁI: TIÊU ĐỀ & CAM KẾT (CHECKLIST) */}
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <h2 className="mb-8 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                VÌ SAO CHỌN RICVINA?
              </h2>

              <ul className="flex flex-col gap-5">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" />
                    <span className="text-lg font-medium text-slate-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* CỘT PHẢI: LƯỚI 4 CON SỐ THỐNG KÊ */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-2 hover:border-blue-100">
                    <span className="mb-2 text-4xl font-black text-blue-600 md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold tracking-wide text-slate-500 uppercase">
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
