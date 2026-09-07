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
        <div className="mx-auto mb-8 md:mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="mb-2 md:mb-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">
              Doanh nghiệp của bạn đang gặp khó khăn?
            </h2>
            <p className="px-2 text-sm font-medium text-slate-300 sm:text-base md:text-lg">
              Những "nút thắt" đang âm thầm cản trở đà tăng trưởng và làm rò rỉ lợi nhuận của bạn
              mỗi ngày.
            </p>
          </AnimateOnScroll>
        </div>

        {/* TỐI ƯU GIAO DIỆN CHỐT HẠ: Đã bỏ lớp sương mờ, chỉ giữ lại hiệu ứng vuốt và thẻ lấp ló (w-[75vw]) */}
        <div className="-mx-4 mb-10 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-6 hide-scrollbar md:mx-0 md:mb-16 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="w-[75vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink md:snap-align-none"
              >
                <AnimateOnScroll delay={index * 100}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-900/40 md:rounded-3xl md:p-8">
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/10 transition-colors duration-300 group-hover:bg-cyan-400 md:w-1.5"></div>

                    <div className="relative z-10">
                      <div className="mb-4 flex items-center justify-between md:mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-cyan-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl">
                          <Icon className="h-6 w-6 md:h-7 md:w-7" />
                        </div>
                        <span className="text-3xl font-black text-white/