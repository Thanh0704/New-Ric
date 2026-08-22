import React from 'react'
import { AlertTriangle, FileSpreadsheet, TrendingDown, UserMinus } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Dữ liệu nội dung: Các nỗi đau của doanh nghiệp
const problems = [
  {
    id: 1,
    icon: FileSpreadsheet,
    title: 'Vận hành thủ công, rời rạc',
    desc: 'Nhân viên tốn hàng giờ mỗi ngày để nhập liệu thủ công trên Excel, giấy tờ. Thông tin truyền đạt qua các nhóm chat cá nhân dễ bị trôi và sai sót.',
  },
  {
    id: 2,
    icon: UserMinus,
    title: 'Thất thoát dữ liệu khách hàng',
    desc: 'Data khách hàng nằm rải rác ở máy tính cá nhân của Sales. Khi nhân viên nghỉ việc, doanh nghiệp mất luôn cả thông tin và lịch sử chăm sóc.',
  },
  {
    id: 3,
    icon: TrendingDown,
    title: 'Khó đo lường, quyết định cảm tính',
    desc: 'Thiếu hệ thống báo cáo thời gian thực (Real-time). Ban lãnh đạo phải đợi đến cuối tháng mới có số liệu, dẫn đến phản ứng chậm trước thị trường.',
  },
  {
    id: 4,
    icon: AlertTriangle,
    title: 'Chi phí ẩn phình to',
    desc: 'Quy trình đứt gãy, các phòng ban thiếu đồng bộ. Tỷ lệ chuyển đổi thấp, chi phí vận hành ngày càng tăng nhưng không thể truy vết nguyên nhân.',
  },
]

export function BusinessProblems() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Hiệu ứng ánh sáng đỏ mờ cảnh báo ở phông nền */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[120px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-black tracking-widest text-red-500 uppercase">
              Business Problems
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
              Doanh nghiệp của bạn có đang <br className="hidden md:block" />
              đối mặt với những <span className="text-red-400">rào cản</span> này?
            </h2>
            <p className="text-lg font-medium text-slate-400">
              Chuyển đổi số không còn là lựa chọn, mà là vấn đề sống còn. Đừng để những phương thức
              vận hành cũ cản bước đà tăng trưởng của bạn.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Lưới hiển thị các Vấn đề */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.id} delay={index * 100}>
                <div className="group flex h-full items-start gap-6 rounded-[2rem] border border-slate-800 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-slate-800 hover:shadow-2xl hover:shadow-red-900/20">
                  {/* Icon Box */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-700 text-slate-300 transition-colors duration-300 group-hover:bg-red-500/10 group-hover:text-red-400">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-300">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
