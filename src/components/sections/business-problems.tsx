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
  },
  {
    id: '02',
    title: 'Dữ liệu phân tán',
    desc: 'Mỗi bộ phận dùng một phần mềm riêng. Dữ liệu rời rạc, không đồng bộ, lãnh đạo không có cái nhìn tổng thể.',
    icon: Database,
  },
  {
    id: '03',
    title: 'Thiếu nền tảng công nghệ',
    desc: 'Hệ thống cũ kỹ, chắp vá, khó mở rộng tính năng khi quy mô doanh nghiệp tăng trưởng đột phá.',
    icon: ServerCrash,
  },
  {
    id: '04',
    title: 'Chi phí cao, hiệu quả thấp',
    desc: 'Chi tiền cho nhiều công cụ marketing và quản lý nhưng không đo lường được ROI, tỷ lệ rớt phễu khách hàng cao.',
    icon: TrendingDown,
  },
]

export function BusinessProblems() {
  return (
    <section className="relative bg-slate-900 bg-gradient-to-br from-blue-900 to-slate-900 py-12 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/20 blur-[150px]"></div>
      </div>

      <Container className="relative z-10">
        {/* =========================================================
            ĐÃ SỬA LOGIC: Bọc Tiêu đề và 4 cái thẻ vào chung 1 Wrapper.
            Nhờ vậy, khi cuộn hết thẻ số 4, toàn bộ khối này sẽ bị kéo trượt lên trên, 
            không còn nằm lỳ lại để đè vào đoạn text ở dưới nữa.
            ========================================================= */}
        <div className="relative w-full">
          {/* 1. Phần Tiêu đề (Đứng im ở top 10vh) */}
          <div className="sticky top-[10vh] z-0 mb-12 md:relative md:top-auto md:z-auto md:mx-auto md:mb-16 md:max-w-3xl md:text-center">
            <AnimateOnScroll>
              <h2 className="mb-2 text-center text-2xl font-black tracking-tight text-white uppercase sm:text-3xl md:mb-4 lg:text-4xl">
                Doanh nghiệp của bạn đang gặp khó khăn?
              </h2>
              <p className="px-2 text-center text-sm font-medium text-slate-300 sm:text-base md:text-lg">
                Những "nút thắt" đang âm thầm cản trở đà tăng trưởng và làm rò rỉ lợi nhuận của bạn
                mỗi ngày.
              </p>
            </AnimateOnScroll>
          </div>

          {/* 2. Phần 4 Thẻ (Trượt lên và xếp chồng) */}
          <div className="relative z-10 flex flex-col gap-[20vh] pb-[10vh] md:grid md:grid-cols-2 md:gap-6 md:pb-0 lg:grid-cols-4">
            {problems.map((item, index) => {
              const Icon = item.icon

              const stickyTopClasses = ['top-[28vh]', 'top-[30vh]', 'top-[32vh]', 'top-[34vh]']

              return (
                <div
                  key={item.id}
                  className={`sticky ${stickyTopClasses[index]} z-10 h-full w-full md:relative md:top-auto md:z-auto [&>*]:h-full`}
                >
                  <AnimateOnScroll delay={index * 100}>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 md:bg-white/5 md:p-8 md:shadow-2xl md:hover:-translate-y-2 md:hover:border-cyan-400/50 md:hover:bg-white/10 md:hover:shadow-cyan-900/40">
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/10 transition-colors duration-300 group-hover:bg-cyan-400 md:w-1.5"></div>

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-4 flex items-center justify-between md:mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-cyan-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl">
                            <Icon className="h-6 w-6 md:h-7 md:w-7" />
                          </div>
                          <span className="text-3xl font-black text-white/10 transition-colors group-hover:text-cyan-400/30 md:text-4xl">
                            {item.id}
                          </span>
                        </div>

                        <h3 className="mb-2 text-lg font-bold text-white md:mb-3 md:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed font-medium text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              )
            })}
          </div>
        </div>
        {/* === KẾT THÚC WRAPPER === */}

        {/* 3. Phần chốt Sale ở dưới cùng (Cuộn lên bình thường theo dòng chảy) 
            Đã tăng thêm mt-16 để có khoảng nghỉ mượt mà sau khi 4 thẻ biến mất
        */}
        <div className="relative z-20 mt-16 text-center md:mt-0">
          <AnimateOnScroll delay={150}>
            <div className="inline-flex flex-col items-center justify-center">
              <p className="mx-auto mb-3 max-w-[280px] text-sm font-bold text-white sm:max-w-full md:mb-4 md:text-lg">
                RICVINA mang đến hệ sinh thái giúp bạn giải quyết triệt để những vấn đề trên.
              </p>
              <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/20 text-cyan-400 md:h-10 md:w-10">
                <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
