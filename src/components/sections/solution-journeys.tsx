import React from 'react'
import { Database, TrendingUp, Zap, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Dữ liệu Hành trình chuyển đổi
const journeys = [
  {
    id: '01',
    title: 'Số hóa & Chuẩn hóa',
    desc: 'Chuyển đổi toàn bộ quy trình giấy tờ, Excel lên môi trường số. Xây dựng nền móng vận hành minh bạch và chuẩn chỉ.',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    id: '02',
    title: 'Tập trung dữ liệu',
    desc: 'Gom mọi data từ đa kênh (Zalo, Web, ERP) về một nguồn duy nhất (Single Source of Truth), xóa bỏ tình trạng phân tán.',
    icon: Database,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-200',
  },
  {
    id: '03',
    title: 'Tự động hóa',
    desc: 'Thiết lập các kịch bản Automation cho Sales, CSKH và HR. Giải phóng nhân sự khỏi 80% các tác vụ lặp đi lặp lại.',
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
  },
  {
    id: '04',
    title: 'Tăng trưởng (Scale up)',
    desc: 'Ra quyết định chính xác dựa trên hệ thống báo cáo Real-time. Hệ thống sẵn sàng đáp ứng khi doanh nghiệp mở rộng x10.',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
  },
]

export function SolutionJourneys() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black tracking-widest text-blue-600 uppercase">
              Solution Journeys
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Hành trình giải phóng <br className="hidden md:block" />
              năng lực doanh nghiệp cùng RIC
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Không đơn thuần là cung cấp phần mềm, chúng tôi mang đến một lộ trình chuyển đổi số
              bài bản, đi từ gốc rễ vấn đề đến kết quả tăng trưởng.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Khối hiển thị Hành trình có đường kẻ nối */}
        <div className="relative">
          {/* Đường gạch ngang kết nối (Chỉ hiện trên Desktop) */}
          <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-slate-100 lg:block"></div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {journeys.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimateOnScroll key={step.id} delay={index * 150}>
                  <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Vòng tròn Icon */}
                    <div
                      className={`mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] border-4 border-white ${step.bgColor} shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:scale-110 lg:mx-0`}
                    >
                      <Icon className={`h-10 w-10 ${step.color}`} />
                    </div>

                    {/* Số thứ tự nổi bật */}
                    <span className="mb-2 text-6xl font-black text-slate-100">{step.id}</span>

                    {/* Nội dung */}
                    <h3 className="mb-4 text-xl font-black text-slate-900">{step.title}</h3>
                    <p className="text-base leading-relaxed font-medium text-slate-600">
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
