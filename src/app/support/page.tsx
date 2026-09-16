'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Search,
  MessageCircle,
  PhoneCall,
  LifeBuoy,
  ChevronDown,
  ArrowRight,
  Server,
} from 'lucide-react'

// ==============================================================================
// 🛠️ MOCK DATA: BỘ CÂU HỎI THƯỜNG GẶP (FAQ) & KÊNH HỖ TRỢ B2B
// ==============================================================================
const FAQ_CATEGORIES = [
  { id: 'all', label: 'Tất cả câu hỏi' },
  { id: 'account', label: 'Tài khoản & Bảo mật' },
  { id: 'integration', label: 'Tích hợp & API' },
  { id: 'billing', label: 'Gói cước & Thanh toán' },
  { id: 'troubleshooting', label: 'Khắc phục sự cố' },
]

const FAQS = [
  {
    id: 'faq-1',
    category: 'account',
    question: 'Làm thế nào để thiết lập bảo mật 2 lớp (2FA) cho tài khoản Quản trị viên?',
    answer:
      'Để bảo vệ dữ liệu doanh nghiệp, RICVINA bắt buộc bật 2FA cho cấp độ Admin. Bạn truy cập vào Cài đặt Hệ thống > Bảo mật > Xác thực 2 yếu tố. Hệ thống hỗ trợ Google Authenticator, Microsoft Authenticator hoặc SMS OTP. Với gói Enterprise, chúng tôi hỗ trợ tích hợp SSO (Single Sign-On) qua Azure AD hoặc Google Workspace.',
  },
  {
    id: 'faq-2',
    category: 'integration',
    question: 'Hệ thống RIC ERP có tích hợp được với phần mềm kế toán MISA không?',
    answer:
      'Có. RICVINA cung cấp API Gateway chuẩn RESTful để đấu nối trực tiếp với MISA SME và MISA AMIS. Dữ liệu đơn hàng, phiếu thu/chi và đối soát công nợ sẽ được đồng bộ Real-time. Vui lòng truy cập "Thư viện tài liệu" để xem API Documentation hoặc liên hệ chuyên viên kỹ thuật để được cấp App ID và Secret Key.',
  },
  {
    id: 'faq-3',
    category: 'troubleshooting',
    question: 'Kênh Zalo ZNS báo lỗi "Từ chối gửi tin" trên RIC MESSAGE, tôi phải làm gì?',
    answer:
      'Lỗi này thường xảy ra khi Template ZNS của bạn chưa được Zalo duyệt, hoặc tài khoản Zalo OA không đủ số dư. Vui lòng kiểm tra lại trạng thái Template trong tab "Cấu hình ZNS". Nếu Template đã duyệt, hãy đảm bảo số dư ví ZCA (Zalo Cloud Account) lớn hơn 0. Khuyến nghị thiết lập cảnh báo số dư tự động trên hệ thống.',
  },
  {
    id: 'faq-4',
    category: 'billing',
    question: 'Chính sách tính phí vượt ngưỡng (Overages) đối với API Call được tính như thế nào?',
    answer:
      'Mỗi gói cước (Standard/Professional/Enterprise) đều có định mức API Call/tháng nhất định (Ví dụ: Gói Pro là 500,000 requests/tháng). Nếu vượt quá số lượng này, hệ thống sẽ không tự động ngắt kết nối mà sẽ tính phí Overages là 15đ/request. Chi phí này sẽ được tổng hợp vào hóa đơn tháng tiếp theo.',
  },
  {
    id: 'faq-5',
    category: 'account',
    question: 'Tôi muốn phân quyền cho nhân viên Kho chỉ xem được tồn kho chi nhánh của họ?',
    answer:
      'RICVINA hỗ trợ phân quyền cực kỳ chi tiết theo mô hình RBAC (Role-Based Access Control). Bạn vào Quản trị nhân sự > Phân quyền vai trò > Thêm Role mới (Nhân viên Kho chi nhánh). Tại tab "Dữ liệu truy cập", hãy check vào ô "Chỉ xem dữ liệu theo chi nhánh trực thuộc".',
  },
  {
    id: 'faq-6',
    category: 'integration',
    question: 'Webhook trên ZHUB có hỗ trợ retry (thử lại) khi endpoint của tôi bị sập không?',
    answer:
      'Có. Cơ chế Webhook của ZHUB có tích hợp tính năng Exponential Backoff. Nếu server của bạn trả về mã lỗi 5xx hoặc timeout, hệ thống sẽ tự động gửi lại payload tối đa 5 lần với thời gian trễ tăng dần (1m, 5m, 15m, 1h, 6h). Bạn có thể theo dõi log các lần retry tại Dashboard > Webhook Logs.',
  },
]

const SUPPORT_CHANNELS = [
  {
    title: 'Hỗ trợ Kỹ thuật (Gửi Ticket)',
    desc: 'Giải quyết các vấn đề liên quan đến lỗi phần mềm, gián đoạn kết nối API hoặc cấu hình hệ thống.',
    sla: 'Thời gian phản hồi: Dưới 30 phút (Hỗ trợ 24/7 đối với sự cố P1)',
    icon: LifeBuoy,
    action: 'Tạo Ticket Mới',
    link: '#',
    theme: 'bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-500',
  },
  {
    title: 'Tổng đài Hotline',
    desc: 'Đường dây nóng dành riêng cho các vấn đề khẩn cấp, cần can thiệp hệ thống ngay lập tức.',
    sla: 'Hoạt động: Trong giờ hành chính (8h00 - 18h00, T2 - T7)',
    icon: PhoneCall,
    action: 'Gọi 1900 1000',
    link: 'tel:19001000',
    theme: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:border-emerald-500',
  },
  {
    title: 'Tư vấn Chuyên gia 1:1',
    desc: 'Cần tư vấn mở rộng module, nâng cấp gói cước hoặc thiết kế lại luồng quy trình vận hành.',
    sla: 'Thời gian sắp xếp cuộc gọi: Trong vòng 24 giờ làm việc',
    icon: MessageCircle,
    action: 'Đặt lịch gọi',
    link: '/contact',
    theme: 'bg-purple-50 text-purple-600 border-purple-200 hover:border-purple-500',
  },
]

export default function SupportCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1') // Mở sẵn câu đầu tiên

  // Logic lọc FAQ
  const filteredFaqs = FAQS.filter((faq) => {
    const matchCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/30">
      {/* ==========================================
          1. HERO & SMART SEARCH
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-linear-to-b from-blue-600/10 to-transparent" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative z-10 container mx-auto px-6 text-center md:px-20">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-400">Trung tâm hỗ trợ</span>
          </div>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Chúng tôi có thể giúp gì cho bạn?
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-slate-400 md:text-xl">
            Tìm kiếm giải pháp nhanh chóng trong cơ sở tri thức của chúng tôi hoặc liên hệ trực tiếp
            với đội ngũ kỹ thuật.
          </p>

          {/* Thanh tìm kiếm trung tâm */}
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Nhập câu hỏi, mã lỗi, hoặc từ khóa cần tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-2 border-transparent bg-white py-5 pr-6 pl-16 text-lg font-medium text-slate-900 placeholder-slate-400 shadow-2xl transition-all focus:border-cyan-500 focus:outline-hidden"
            />
          </div>

          {/* Quick Topics */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              Chủ đề phổ biến:
            </span>
            {['Thiết lập 2FA', 'Tích hợp API', 'Tính phí Overages', 'Phân quyền'].map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchQuery(topic)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          2. TRẠM TRẠNG THÁI HỆ THỐNG (SYSTEM STATUS) - Tăng độ Trust B2B
          ========================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-6 py-4 md:px-20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-sm font-bold text-slate-700">
                Tất cả hệ thống đang hoạt động bình thường
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Server className="h-4 w-4" /> Uptime: 99.99%
              </span>
              <Link
                href="#"
                className="flex items-center gap-1 font-bold text-cyan-600 hover:text-cyan-700"
              >
                Xem trang trạng thái <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CÂU HỎI THƯỜNG GẶP (FAQ ACCORDION)
          ========================================== */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Bộ lọc bên trái */}
            <div className="w-full shrink-0 lg:w-1/3">
              <h2 className="mb-6 text-3xl font-black text-slate-900">Câu hỏi thường gặp</h2>
              <p className="mb-8 leading-relaxed font-medium text-slate-500">
                Tổng hợp các câu hỏi và tình huống nghiệp vụ phổ biến nhất trong quá trình vận hành
                hệ sinh thái phần mềm RICVINA.
              </p>

              <div className="flex flex-col gap-2">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id)
                      setSearchQuery('')
                    }}
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 font-bold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-lg'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 ${activeCategory === cat.id ? 'text-white' : 'text-slate-400'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Danh sách FAQ Accordion bên phải */}
            <div className="w-full lg:w-2/3">
              {filteredFaqs.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {filteredFaqs.map((faq) => {
                    const isOpen = openFaqId === faq.id
                    return (
                      <div
                        key={faq.id}
                        className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                          isOpen
                            ? 'border-cyan-500 shadow-[0_10px_30px_rgba(6,182,212,0.1)]'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                          className="flex w-full items-start justify-between gap-4 p-6 text-left focus:outline-hidden"
                        >
                          <span
                            className={`text-lg font-black transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}
                          >
                            {faq.question}
                          </span>
                          <div
                            className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-100 text-cyan-600' : 'bg-slate-100 text-slate-400'}`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="mt-2 border-t border-slate-100 px-6 pt-4 pb-6 leading-relaxed font-medium text-slate-600">
                              {' '}
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-20 text-center">
                  <Search className="mb-4 h-12 w-12 text-slate-300" />
                  <p className="text-lg font-bold text-slate-900">Không tìm thấy câu hỏi phù hợp</p>
                  <p className="mt-2 font-medium text-slate-500">
                    Vui lòng thử từ khóa khác hoặc liên hệ trực tiếp với chúng tôi.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. KÊNH HỖ TRỢ (CONTACT CHANNELS) VỚI SLA
          ========================================== */}
      <section className="border-t border-slate-200 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-5xl">
              Bạn vẫn cần sự trợ giúp?
            </h2>
            <p className="text-lg font-medium text-slate-500">
              Đội ngũ chuyên gia kỹ thuật và tư vấn viên của RICVINA luôn sẵn sàng đồng hành cùng
              doanh nghiệp của bạn ở bất kỳ cấp độ nào.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {SUPPORT_CHANNELS.map((channel, idx) => {
              const Icon = channel.icon
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col rounded-[2rem] border p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${channel.theme.split(' ')[2]} bg-white`}
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${channel.theme.split(' ')[0]} ${channel.theme.split(' ')[1]}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-slate-900">{channel.title}</h3>
                  <p className="mb-6 flex-1 leading-relaxed font-medium text-slate-600">
                    {channel.desc}
                  </p>
                  <div className="mb-8 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="mb-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      Cam kết chất lượng (SLA)
                    </p>
                    <p className="text-sm font-semibold text-slate-700">{channel.sla}</p>
                  </div>
                  {/* 🔥 ĐÃ FIX LỖI: Sửa </button> thành </Link> */}
                  <Link
                    href={channel.link}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 font-bold transition-colors ${channel.theme.split(' ')[0]} ${channel.theme.split(' ')[1]} ${channel.theme.split(' ')[2]} hover:bg-transparent`}
                  >
                    {channel.action}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
