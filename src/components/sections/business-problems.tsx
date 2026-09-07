import React from 'react'
// TỐI ƯU: Bổ sung icon ChevronsRight làm chỉ dẫn vuốt
import { Clock, Database, ServerCrash, TrendingDown, ArrowDown, ChevronsRight } from 'lucide-react'
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
    <section className="relative overflow-hidden bg-slate-900 bg-gradient-to-br from-blue-900 to-slate-900 py-12 md:py-24 lg:py-32">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/20 blur-[150px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-16">
          <AnimateOnScroll>
            <h2 className="mb-2 text-2xl font-black tracking-tight text-white uppercase sm:text-3xl md:mb-4 lg:text-4xl">
              Doanh nghiệp của bạn đang gặp khó khăn?
            </h2>
            <p className="px-2 text-sm font-medium text-slate-300 sm:text-base md:text-lg">
              Những "nút thắt" đang âm thầm cản trở đà tăng trưởng và làm rò rỉ lợi nhuận của bạn
              mỗi ngày.
            </p>
          </AnimateOnScroll>
        </div>

        {/* CHỈ DẪN VUỐT NGANG (Chỉ hiện trên điện thoại) */}
        <AnimateOnScroll>
          <div className="mb-3 flex items-center justify-end gap-1.5 px-2 text-[10px] font-black tracking-widest text-cyan-400 uppercase md:hidden">
            Vuốt để xem <ChevronsRight className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </AnimateOnScroll>

        {/* TỐI ƯU GIAO DIỆN: Đổi snap-center thành snap-start để căn lề trái chuẩn hơn, tạo khoảng trống cho thẻ tiếp theo lấp ló */}
        <div className="hide-scrollbar -mx-4 mb-10 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-6 md:mx-0 md:mb-16 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              // TỐI ƯU: Đổi từ w-[85vw] xuống w-[78vw] để thẻ kế tiếp thò ra nhiều hơn
              <div
                key={item.id}
                className="w-[78vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink md:snap-align-none"
              >
                <AnimateOnScroll delay={index * 100}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-900/40 md:rounded-3xl md:p-8">
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/10 transition-colors duration-300 group-hover:bg-cyan-400 md:w-1.5"></div>

                    <div className="relative z-10">
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

        <div className="text-center">
          <AnimateOnScroll delay={400}>
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
