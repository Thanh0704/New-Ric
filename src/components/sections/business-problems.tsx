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
    // Đổi nền từ bg-slate-900 sang bg-white
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Hiệu ứng ánh sáng đỏ mờ cảnh báo ở phông nền */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[120px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            {/* Chỉnh lại tag nhỏ */}
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-black tracking-widest text-red-600 uppercase">
              Business Problems
            </span>
            {/* Chỉnh text màu đen */}
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Doanh nghiệp của bạn có đang <br className="hidden md:block" />
              đối mặt với những <span className="text-red-500">rào cản</span> này?
            </h2>
            {/* Chỉnh đoạn văn màu xám nhạt */}
            <p className="text-lg font-medium text-slate-600">
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
                {/* Đổi màu nền Card, hiệu ứng hover shadow tinh tế trên nền trắng */}
                <div className="group flex h-full items-start gap-6 rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                  {/* Icon Box: Chuyển sang trắng có viền nhẹ */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-500 shadow-sm transition-colors duration-300 group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-500">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-600">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">{item.desc}</p>
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
