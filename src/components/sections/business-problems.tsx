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
        {/* WRAPPER TỔNG: Giữ khoảng trống cuộn pb-[15vh] cho Mobile, nhưng Laptop thì xóa (md:pb-0) */}
        <div className="relative w-full pb-[15vh] md:pb-0">
          {/* 1. TIÊU ĐỀ: 
              - Mobile: Đứng im ở top-10vh
              - Laptop (md:): Trả về relative, hủy sticky, canh giữa chuẩn chỉ */}
          <div className="sticky top-[10vh] z-10 mb-[10vh] md:relative md:top-auto md:z-auto md:mx-auto md:mb-16 md:max-w-3xl md:text-center">
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

          {/* 2. CÁC THẺ: 
              - Mobile: dạng block xếp dọc để cuộn sticky
              - Laptop (md:): Trở về cấu trúc Grid lưới 2 cột / 4 cột */}
          <div className="block md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {problems.map((item, index) => {
              const Icon = item.icon

              // CÁC BIẾN CHỈ DÀNH RIÊNG CHO MOBILE
              const mobileStickyTops = ['top-[26vh]', 'top-[27vh]', 'top-[28vh]', 'top-[29vh]']
              const mobileZIndexes = ['z-20', 'z-30', 'z-40', 'z-50']
              const mobileMargins = index === 0 ? 'mt-0' : 'mt-[40vh]' // Tạo khoảng cách vuốt giữa các thẻ

              return (
                <div
                  key={item.id}
                  className={`sticky ${mobileStickyTops[index]} ${mobileZIndexes[index]} ${mobileMargins} w-full md:relative md:top-auto md:z-auto md:mt-0 md:h-full [&>*]:h-full`}
                  /* LỜI GIẢI THÍCH LỖI LAPTOP: 
                     Đoạn "md:relative md:top-auto md:z-auto md:mt-0" sẽ XÓA TOÀN BỘ hiệu ứng cuộn xếp lớp trên Laptop.
                     Đoạn "md:h-full [&>*]:h-full" sẽ ÉP các khối dài bằng nhau tăm tắp, sửa cái lỗi ở ảnh sếp gửi.
                  */
                >
                  <AnimateOnScroll delay={index * 100}>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 md:bg-white/5 md:p-8 md:shadow-2xl md:hover:-translate-y-2 md:hover:border-cyan-400/50 md:hover:bg-white/10 md:hover:shadow-cyan-900/40">
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

        {/* 3. PHẦN CHỐT: Đi ngay sau cái Wrapper trên */}
        <div className="relative z-10 mt-16 text-center md:mt-24">
          <AnimateOnScroll delay={100}>
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
