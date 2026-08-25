'use client'

import React, { useState } from 'react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import {
  Zap,
  Shield,
  Server,
  Headphones,
  Database,
  Link as LinkIcon,
  Cpu,
  TrendingUp,
  Search,
  Settings,
  Rocket,
  HeartHandshake,
} from 'lucide-react'

// --- DATA CỦA 3 TABS ---
const tabData = [
  {
    id: 'core',
    label: 'Công nghệ cốt lõi',
    items: [
      {
        icon: Server,
        title: 'Hạ tầng Cloud',
        desc: 'Kiến trúc Microservices độc lập, đảm bảo hệ thống luôn ổn định ngay cả khi lượng truy cập tăng đột biến.',
      },
      {
        icon: Zap,
        title: 'Tốc độ tối ưu',
        desc: 'Trải nghiệm mượt mà không độ trễ. Tối ưu hóa truy vấn dữ liệu giúp tiết kiệm thời gian vận hành.',
      },
      {
        icon: Shield,
        title: 'Bảo mật đa tầng',
        desc: 'Mã hóa dữ liệu 256-bit, phân quyền chi tiết đến từng nhân viên, ngăn chặn rò rỉ thông tin.',
      },
      {
        icon: Headphones,
        title: 'Hỗ trợ 24/7',
        desc: 'Đội ngũ kỹ thuật trực tiếp hỗ trợ, xử lý sự cố nhanh chóng, không qua các lớp tổng đài máy móc.',
      },
    ],
  },
  {
    id: 'journey',
    label: 'Lộ trình số hóa',
    items: [
      {
        icon: Database,
        title: '1. Số hóa dữ liệu',
        desc: 'Chuyển đổi toàn bộ giấy tờ, file Excel rời rạc lên một hệ thống lưu trữ tập trung duy nhất.',
      },
      {
        icon: LinkIcon,
        title: '2. Kết nối quy trình',
        desc: 'Phá vỡ rào cản giữa các phòng ban. Sales, Kho, Kế toán làm việc trên cùng một luồng thông tin.',
      },
      {
        icon: Cpu,
        title: '3. Tự động hóa',
        desc: 'Hệ thống tự động chấm công, tính lương, lên đơn, trừ tồn kho, gửi tin nhắn chăm sóc khách hàng.',
      },
      {
        icon: TrendingUp,
        title: '4. Mở rộng (Scale)',
        desc: 'Dựa trên báo cáo Real-time, ban lãnh đạo tự tin đưa ra quyết định mở rộng chi nhánh, scale up doanh thu.',
      },
    ],
  },
  {
    id: 'deploy',
    label: 'Quy trình triển khai',
    items: [
      {
        icon: Search,
        title: '1. Khảo sát (Discover)',
        desc: 'Chuyên gia RIC trực tiếp phân tích luồng vận hành, tìm ra "điểm nghẽn" của doanh nghiệp.',
      },
      {
        icon: Settings,
        title: '2. Thiết lập (Configure)',
        desc: 'May đo hệ thống, phân quyền và tùy biến các module sao cho khớp 100% với thực tế vận hành.',
      },
      {
        icon: Rocket,
        title: '3. Triển khai (Deploy)',
        desc: 'Đào tạo nhân sự sử dụng, chuyển giao công nghệ và chính thức đưa hệ thống vào Go-live.',
      },
      {
        icon: HeartHandshake,
        title: '4. Đồng hành (Scale)',
        desc: 'Liên tục tối ưu hệ thống, update tính năng mới và đồng hành cùng quá trình tăng trưởng của khách hàng.',
      },
    ],
  },
]

export function WhyRic() {
  const [activeTab, setActiveTab] = useState(tabData[0].id)

  // Lấy dữ liệu của tab đang active
  const currentTabData = tabData.find((tab) => tab.id === activeTab)

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm font-black tracking-widest text-slate-300 uppercase">
              Why Choose RIC
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-5xl">
              Lựa chọn <span className="text-blue-500">thực chiến</span> cho doanh nghiệp B2B
            </h2>
            <p className="text-lg font-medium text-slate-400">
              Không chỉ cung cấp phần mềm, chúng tôi mang đến một lộ trình chuyển đổi số bài bản và
              đồng hành cùng sự phát triển của bạn.
            </p>
          </AnimateOnScroll>
        </div>

        {/* --- THANH ĐIỀU HƯỚNG TABS --- */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-2 backdrop-blur-md">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 md:text-base ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- NỘI DUNG CỦA TABS (Hiển thị dạng Grid) --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {currentTabData?.items.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="group relative h-full rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/20">
                  {/* Icon Box */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-blue-500 ring-1 ring-slate-700 transition-colors group-hover:bg-blue-500 group-hover:text-white group-hover:ring-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Text Content */}
                  <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed font-medium text-slate-400">
                    {item.desc}
                  </p>

                  {/* Đường nối mờ ảo giữa các bước (Chỉ hiện ở màn hình to) */}
                  {index !== currentTabData.items.length - 1 && (
                    <div className="absolute top-14 -right-3 hidden h-px w-6 bg-slate-700 transition-colors group-hover:bg-blue-500 lg:block"></div>
                  )}
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
