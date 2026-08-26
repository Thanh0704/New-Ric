import React from 'react'
import { Clock, Database, ServerCrash, TrendingDown, ArrowDown } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const problems = [
  {
    id: '01',
    title: 'Vận hành thủ công',
    desc: 'Phụ thuộc quá nhiều vào sức người, giấy tờ và tin nhắn rải rác. Tốn kém thời gian và sai sót liên tục xảy ra.',
    icon: Clock,
    alertColor: 'text-rose-500',
    alertBg: 'bg-rose-50',
    borderColor: 'group-hover:border-rose-200',
  },
  {
    id: '02',
    title: 'Dữ liệu phân tán',
    desc: 'Mỗi bộ phận dùng một phần mềm riêng. Dữ liệu rời rạc, không đồng bộ, lãnh đạo không có cái nhìn tổng thể.',
    icon: Database,
    alertColor: 'text-orange-500',
    alertBg: 'bg-orange-50',
    borderColor: 'group-hover:border-orange-200',
  },
  {
    id: '03',
    title: 'Thiếu nền tảng công nghệ',
    desc: 'Hệ thống cũ kỹ, chắp vá, khó mở rộng tính năng khi quy mô doanh nghiệp tăng trưởng đột phá.',
    icon: ServerCrash,
    alertColor: 'text-amber-500',
    alertBg: 'bg-amber-50',
    borderColor: 'group-hover:border-amber-200',
  },
  {
    id: '04',
    title: 'Chi phí cao, hiệu quả thấp',
    desc: 'Chi tiền cho nhiều công cụ marketing và quản lý nhưng không đo lường được ROI, tỷ lệ rớt phễu khách hàng cao.',
    icon: TrendingDown,
    alertColor: 'text-red-600',
    alertBg: 'bg-red-50',
    borderColor: 'group-hover:border-red-200',
  },
]

export function BusinessProblems() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Decor (Tạo cảm giác nhiễu loạn nhẹ tượng trưng cho rắc rối) */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-rose-500/5 blur-[80px]"></div>

      <Container className="relative z-10">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 uppercase md:text-4xl">
              Doanh nghiệp của bạn đang gặp khó khăn?
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Những "nút thắt" đang âm thầm cản trở đà tăng trưởng và làm rò rỉ lợi nhuận của bạn
              mỗi ngày.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 4 KHỐI VẤN ĐỀ */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.id} delay={index * 100}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 ${item.borderColor}`}
                >
                  {/* Vạch màu cảnh báo bên trái (Kiểu UI Dashboard Alert) */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1.5 bg-slate-200 transition-colors duration-300 group-hover:bg-current"
                    style={{ color: 'inherit' }}
                  >
                    <div
                      className={`h-full w-full opacity-0 transition-opacity group-hover:opacity-100 ${item.alertBg}`}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.alertBg} ${item.alertColor} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-100">{item.id}</span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-medium text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* LỜI DẪN DẮT XUỐNG KHỐI GIẢI PHÁP */}
        <div className="text-center">
          <AnimateOnScroll delay={400}>
            <div className="inline-flex flex-col items-center justify-center">
              <p className="mb-4 text-lg font-bold text-slate-700">
                RICVINA mang đến hệ sinh thái giúp bạn giải quyết triệt để những vấn đề trên.
              </p>
              <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <ArrowDown className="h-5 w-5" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
