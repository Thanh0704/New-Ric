'use client' // Cần có dòng này vì sử dụng useState và useEffect để theo dõi sự kiện cuộn

import { useState, useEffect, useRef } from 'react'
import { Monitor, ShoppingCart, Megaphone, Headphones } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const services = [
  {
    id: '[1]',
    title: 'Hệ thống Quản trị',
    category: 'TIỆN NGHI DỊCH VỤ',
    description:
      'Số hóa toàn bộ quy trình quản lý doanh nghiệp trên một nền tảng duy nhất, giúp lãnh đạo đưa ra quyết định dựa trên dữ liệu thời gian thực. Một hệ thống mạnh mẽ được thiết kế tối ưu hóa.',
    image: '/images/solutions/1.jpg',
  },
  {
    id: '[2]',
    title: 'Hệ thống Hỗ trợ kinh doanh',
    category: 'TIỆN NGHI CĂN HỘ',
    description:
      'Cung cấp bộ công cụ thông minh hỗ trợ đội ngũ Sales và tích hợp các giải pháp thương mại điện tử hiện đại. Mang lại hiệu quả kinh doanh vượt trội.',
    image: '/images/solutions/2.jpg',
  },
  {
    id: '[3]',
    title: 'Hệ thống Truyền thông',
    category: 'TIỆN ÍCH CỘNG ĐỒNG',
    description:
      'Giải pháp truyền thông đa kênh chuyên nghiệp giúp thông điệp chạm đến đúng khách hàng mục tiêu. Lan tỏa thông điệp mạnh mẽ và nhanh chóng.',
    image: '/images/solutions/3.jpg',
  },
  {
    id: '[4]',
    title: 'Hệ thống Chăm sóc khách hàng',
    category: 'MÔI TRƯỜNG THOÁNG MÁT',
    description:
      'Tự động hóa quy trình chăm sóc sau bán hàng, biến mỗi giao dịch thành một trải nghiệm hài lòng tuyệt đối cho mọi đối tác và khách hàng.',
    image: '/images/solutions/4.jpg',
  },
]

export function Stats() {
  // State lưu index của bức ảnh đang được hiển thị hoạt họa (mặc định là 0 - ảnh đầu tiên)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      // Lấy danh sách các khối chữ bên phải
      const items = containerRef.current.querySelectorAll('.content-item')
      const triggerPoint = window.innerHeight / 2 // Điểm kích hoạt đổi ảnh nằm ở giữa màn hình

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        // Nếu phần đỉnh của khối chữ vượt qua giữa màn hình và phần đáy chưa đi qua hết
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <Container>
        {/* Phần tiêu đề tổng */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
            Dịch vụ chiến lược
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
            Hệ sinh thái giải pháp số hóa toàn diện giúp doanh nghiệp tối ưu hóa quy trình và tăng
            trưởng bền vững.
          </p>
        </div>

        {/* BẮT ĐẦU CHIA ĐÔI LAYOUT */}
        <div
          ref={containerRef}
          className="relative flex flex-col gap-12 lg:flex-row lg:items-start"
        >
          {/* NỬA BÊN TRÁI: ẢNH BANNER FIXED (STICKY) */}
          <div className="sticky top-28 hidden h-[60vh] w-full overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-900 shadow-2xl lg:block lg:w-1/2">
            {services.map((item, index) => (
              <div
                key={item.title}
                // Hiệu ứng mờ dần (Opacity) giữa các bức ảnh dựa vào activeIndex
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0'
                }`}
                style={{ backgroundImage: `url('${item.image}')` }}
              />
            ))}
            {/* Lớp phủ tinh tế cho ảnh */}
            <div className="absolute inset-0 bg-slate-950/10" />
          </div>

          {/* NỬA BÊN PHẢI: KHỐI CHỨA NỘI DUNG CONTENT CUỘN DỌC */}
          <div className="w-full space-y-[40vh] pb-[30vh] lg:w-1/2 lg:pl-12">
            {services.map((item, index) => (
              <div
                key={item.title}
                // Thêm class 'content-item' để JS nhận diện vị trí cuộn
                className={`content-item flex min-h-[35vh] flex-col justify-center border-l-2 pl-6 transition-all duration-500 md:pl-10 ${
                  index === activeIndex
                    ? 'translate-x-2 border-[#3b82f6] opacity-100 dark:border-[#3b82f6]'
                    : 'border-slate-200 opacity-40 dark:border-slate-800'
                }`}
              >
                {/* Số thứ tự phân đoạn */}
                <span
                  className={`mb-2 block text-xl font-bold tracking-wider transition-colors ${
                    index === activeIndex ? 'text-[#3b82f6]' : 'text-slate-400'
                  }`}
                >
                  {item.id}
                </span>

                {/* Danh mục phụ */}
                <span className="mb-3 block text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {item.category}
                </span>

                {/* Tiêu đề dịch vụ */}
                <h3 className="mb-4 text-2xl leading-tight font-extrabold text-slate-900 md:text-3xl dark:text-white">
                  {item.title}
                </h3>

                {/* Mô tả chi tiết */}
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
