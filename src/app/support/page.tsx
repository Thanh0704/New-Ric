'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Search,
  ChevronDown,
  ChevronLeft,
  LifeBuoy,
  PhoneCall,
  MessageCircle,
} from 'lucide-react'

// ==============================================================================
// 🔥 KHAI BÁO TYPESCRIPT
// ==============================================================================
type Category = {
  id: string
  label: string
}

type FAQ = {
  id: string
  categoryId: string
  question: string
  answer: React.ReactNode
}

// ==============================================================================
// 📦 MOCK DATA: DANH MỤC & CÂU HỎI THƯỜNG GẶP
// ==============================================================================
const CATEGORIES: Category[] = [
  { id: 'all', label: 'Tất cả câu hỏi' },
  { id: 'account', label: 'Tài khoản & Bảo mật' },
  { id: 'api', label: 'Tích hợp & API' },
  { id: 'billing', label: 'Gói cước & Thanh toán' },
  { id: 'troubleshoot', label: 'Khắc phục sự cố' },
]

const FAQS: FAQ[] = [
  // --- TÀI KHOẢN & BẢO MẬT ---
  {
    id: 'faq-1',
    categoryId: 'account',
    question: 'Làm thế nào để thiết lập bảo mật 2 lớp (2FA) cho tài khoản Quản trị viên?',
    answer: (
      <p>
        Sự an toàn của dữ liệu là ưu tiên hàng đầu. Để bật 2FA, sếp vui lòng truy cập{' '}
        <strong>Cài đặt &gt; Bảo mật &gt; Xác thực 2 bước</strong>. Hệ thống hỗ trợ nhận mã qua ứng
        dụng Google Authenticator hoặc nhận mã OTP trực tiếp qua Zalo ZNS/SMS. Khuyến nghị áp dụng
        bắt buộc (Force 2FA) cho toàn bộ tài khoản cấp C-Level.
      </p>
    ),
  },
  {
    id: 'faq-2',
    categoryId: 'account',
    question: 'Tôi muốn phân quyền cho nhân viên Kho chỉ xem được tồn kho chi nhánh của họ?',
    answer: (
      <p>
        RIC ERP được thiết kế với cơ chế phân quyền đa tầng (Role-Based Access Control). Bạn có thể
        vào <strong>Quản trị nhân sự &gt; Vai trò (Roles)</strong>, tạo một quyền mới và giới hạn
        phạm vi truy cập dữ liệu (Data Scope) theo chi nhánh cụ thể. Nhân viên đó sẽ hoàn toàn không
        nhìn thấy số liệu của các chi nhánh khác.
      </p>
    ),
  },
  {
    id: 'faq-3',
    categoryId: 'account',
    question: 'Cách thu hồi quyền truy cập của nhân sự khi họ nghỉ việc?',
    answer: (
      <p>
        Khi có nhân sự nghỉ việc, bạn chỉ cần chuyển trạng thái tài khoản của họ sang{' '}
        <strong>&quot;Vô hiệu hóa&quot; (Deactivated)</strong>. Toàn bộ phiên đăng nhập trên tất cả
        các thiết bị sẽ lập tức bị đăng xuất. Mọi lịch sử thao tác của nhân sự này vẫn được lưu trữ
        nguyên vẹn để phục vụ đối soát.
      </p>
    ),
  },
  {
    id: 'faq-4',
    categoryId: 'account',
    question: 'Hệ thống có ghi lại lịch sử thao tác (Log) của người dùng không?',
    answer: (
      <p>
        Có. Tính năng <strong>Audit Trail (Nhật ký hệ thống)</strong> tự động ghi nhận mọi thao tác:
        Ai làm gì, vào thời gian nào, trên máy tính nào (địa chỉ IP). Tính năng này đặc biệt hữu ích
        cho Kế toán trưởng khi cần truy vết các lệnh sửa/xóa chứng từ tài chính.
      </p>
    ),
  },

  // --- TÍCH HỢP & API ---
  {
    id: 'faq-5',
    categoryId: 'api',
    question: 'Hệ thống RIC ERP có tích hợp được với phần mềm kế toán MISA không?',
    answer: (
      <p>
        Hoàn toàn được. RIC ERP cung cấp sẵn Plugin tích hợp MISA SME và MISA AMIS. Hệ thống sẽ tự
        động đẩy các bút toán doanh thu, công nợ và phiếu xuất/nhập kho sang MISA theo thời gian
        thực (Real-time), giúp bộ phận kế toán loại bỏ 100% thao tác nhập liệu thủ công.
      </p>
    ),
  },
  {
    id: 'faq-6',
    categoryId: 'api',
    question: 'Webhook trên ZHUB có hỗ trợ retry (thử lại) khi endpoint của tôi bị sập không?',
    answer: (
      <p>
        Có. Cơ chế Webhook của ZHUB áp dụng thuật toán Exponential Backoff. Nếu server của bạn phản
        hồi lỗi (Status 5xx) hoặc timeout, ZHUB sẽ tự động thử gửi lại (retry) tối đa 5 lần trong
        vòng 24 giờ tiếp theo để đảm bảo bạn không bị mất bất kỳ bản ghi dữ liệu nào.
      </p>
    ),
  },
  {
    id: 'faq-7',
    categoryId: 'api',
    question: 'Giới hạn tốc độ gọi API (Rate Limit) của RIC GATEWAY là bao nhiêu?',
    answer: (
      <p>
        Mặc định, các gói Enterprise được cấp hạn mức <strong>100 requests/giây</strong> cho mỗi API
        Key. Nếu doanh nghiệp của bạn đang chạy các chiến dịch Flash Sale cần lưu lượng lớn hơn, vui
        lòng liên hệ bộ phận hỗ trợ kỹ thuật để được mở rộng băng thông tạm thời.
      </p>
    ),
  },

  // --- GÓI CƯỚC & THANH TOÁN ---
  {
    id: 'faq-8',
    categoryId: 'billing',
    question: 'Chính sách tính phí vượt ngưỡng (Overages) đối với API Call được tính như thế nào?',
    answer: (
      <p>
        RICVINA không khóa hệ thống khi bạn dùng vượt gói. Thay vào đó, chi phí vượt ngưỡng sẽ được
        tính theo chu kỳ thanh toán tiếp theo với mức giá niêm yết là{' '}
        <strong>15.000 VNĐ / 1.000 API Calls</strong>. Hệ thống sẽ tự động gửi email cảnh báo khi
        bạn sử dụng đạt 80% dung lượng.
      </p>
    ),
  },
  {
    id: 'faq-9',
    categoryId: 'billing',
    question: 'Tôi có thể nâng cấp/hạ cấp gói (Upgrade/Downgrade) giữa kỳ thanh toán không?',
    answer: (
      <p>
        Bạn hoàn toàn có thể <strong>Nâng cấp</strong> bất cứ lúc nào. Chi phí sẽ được tính bù trừ
        (Pro-rated) theo số ngày còn lại. Việc <strong>Hạ cấp</strong> sẽ chỉ có hiệu lực vào chu kỳ
        thanh toán tiếp theo để đảm bảo dữ liệu hiện tại của bạn không bị ảnh hưởng.
      </p>
    ),
  },
  {
    id: 'faq-10',
    categoryId: 'billing',
    question: 'RICVINA có hỗ trợ xuất hóa đơn VAT điện tử cho doanh nghiệp không?',
    answer: (
      <p>
        Chắc chắn có. Toàn bộ các khoản thanh toán gia hạn phần mềm SaaS đều được xuất hóa đơn điện
        tử tự động và gửi về email Kế toán của doanh nghiệp chậm nhất trong vòng 24h làm việc.
      </p>
    ),
  },

  // --- KHẮC PHỤC SỰ CỐ ---
  {
    id: 'faq-11',
    categoryId: 'troubleshoot',
    question: 'Kênh Zalo ZNS báo lỗi "Từ chối gửi tin" trên RIC MESSAGE, tôi phải làm gì?',
    answer: (
      <p>
        Lỗi này thường xảy ra do Template ZNS của bạn chứa từ khóa cấm hoặc khách hàng đã chặn tin
        nhắn từ Zalo OA. Bạn vui lòng kiểm tra lại <strong>Mã lỗi (Error Code)</strong> trả về trong
        phần Lịch sử gửi tin, hoặc tải lại bản Mẫu ZNS mới nhất đã được Zalo phê duyệt.
      </p>
    ),
  },
  {
    id: 'faq-12',
    categoryId: 'troubleshoot',
    question: 'Trạng thái đơn hàng trên RIC ECOM không đồng bộ về kho ERP?',
    answer: (
      <p>
        Hãy kiểm tra lại phần Cấu hình Kho (Mapping) giữa ECOM và ERP. Đôi khi mã SKU sản phẩm trên
        Website không trùng khớp với mã SKU trong kho vật lý. Vào mục{' '}
        <strong>Cấu hình &gt; Đồng bộ dữ liệu</strong> và nhấn nút &quot;Đồng bộ lại toàn bộ&quot;.
      </p>
    ),
  },
  {
    id: 'faq-13',
    categoryId: 'troubleshoot',
    question: 'Làm sao để khôi phục dữ liệu lỡ tay xóa nhầm trên hệ thống?',
    answer: (
      <p>
        Đừng quá lo lắng! Mọi dữ liệu khi bị xóa sẽ được đưa vào{' '}
        <strong>Thùng rác (Recycle Bin)</strong> và lưu trữ trong 30 ngày. Quản trị viên cấp cao có
        thể vào khu vực này để khôi phục (Restore) lại nguyên trạng bản ghi chỉ với 1 cú click
        chuột.
      </p>
    ),
  },
]

// ==============================================================================
// ⚙️ CẤU HÌNH PHÂN TRANG
// ==============================================================================
const ITEMS_PER_PAGE = 5

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // 1. LỌC CÂU HỎI
  const filteredFaqs = FAQS.filter((faq) => {
    const matchCategory = activeCategory === 'all' || faq.categoryId === activeCategory
    const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  // 2. TÍNH TOÁN PHÂN TRANG
  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE)
  const currentFaqs = filteredFaqs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  // 3. XỬ LÝ ACCORDION
  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-500/30">
      {/* ==========================================
          1. HERO SECTION TÌM KIẾM
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 text-center md:px-20">
          <div className="mb-6 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-blue-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">Trung tâm Hỗ trợ</span>
          </div>
          <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            Bạn cần giúp đỡ điều gì?
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-slate-400">
            Tra cứu nhanh các tình huống nghiệp vụ hoặc kết nối trực tiếp với đội ngũ kỹ sư giải
            pháp của RICVINA.
          </p>

          <div className="relative mx-auto max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm lỗi Zalo, Phân quyền, Tích hợp MISA..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
                setExpandedId(null)
              }}
              className="w-full rounded-full bg-white py-4 pr-6 pl-14 font-medium text-slate-900 shadow-2xl focus:ring-4 focus:ring-blue-500/20 focus:outline-hidden"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FAQ & LỌC (CÓ PHÂN TRANG)
          ========================================== */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg leading-relaxed font-medium text-slate-500">
              Tổng hợp các câu hỏi và tình huống nghiệp vụ phổ biến nhất trong quá trình vận hành hệ
              sinh thái phần mềm RICVINA.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* SIDEBAR DANH MỤC */}
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id)
                          setCurrentPage(1)
                          setExpandedId(null)
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-6 py-4 font-bold transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span>{cat.label}</span>
                        {isActive ? (
                          <ChevronRight className="h-5 w-5 text-blue-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-slate-300" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* DANH SÁCH CÂU HỎI & PHÂN TRANG */}
            <div className="lg:col-span-8">
              {currentFaqs.length > 0 ? (
                <>
                  <div className="space-y-4">
                    {currentFaqs.map((faq) => {
                      const isExpanded = expandedId === faq.id
                      return (
                        <div
                          key={faq.id}
                          className={`rounded-2xl border bg-white transition-all duration-300 ${
                            isExpanded
                              ? 'border-blue-200 shadow-md'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="flex w-full items-start justify-between gap-6 p-6 text-left focus:outline-hidden"
                          >
                            <span
                              className={`text-base leading-snug font-black transition-colors md:text-lg ${
                                isExpanded ? 'text-blue-700' : 'text-slate-900'
                              }`}
                            >
                              {faq.question}
                            </span>
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                                isExpanded
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-slate-50 text-slate-400'
                              }`}
                            >
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="mt-2 border-t border-slate-100 px-6 pt-2 pb-6 leading-relaxed font-medium text-slate-600">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setCurrentPage((p) => Math.max(1, p - 1))
                          setExpandedId(null)
                        }}
                        disabled={currentPage === 1}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      {Array.from({ length: totalPages }).map((_, index) => {
                        const pageNumber = index + 1
                        const isActive = pageNumber === currentPage
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => {
                              setCurrentPage(pageNumber)
                              setExpandedId(null)
                            }}
                            className={`h-12 w-12 rounded-xl font-black shadow-sm transition-all ${
                              isActive
                                ? 'border border-blue-600 bg-blue-600 text-white'
                                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        )
                      })}

                      <button
                        onClick={() => {
                          setCurrentPage((p) => Math.min(totalPages, p + 1))
                          setExpandedId(null)
                        }}
                        disabled={currentPage === totalPages}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center rounded-[2rem] border border-slate-200 bg-white py-20 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                    <Search className="h-8 w-8 text-slate-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-black text-slate-900">
                    Không tìm thấy câu trả lời
                  </h3>
                  <p className="font-medium text-slate-500">
                    Thử sử dụng từ khóa khác hoặc gửi yêu cầu hỗ trợ trực tiếp.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. KHỐI LIÊN HỆ TRỰC TIẾP (STICKY STACKING CARDS CHUẨN UX)
          ========================================== */}
      <section className="border-t border-slate-200 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
              Đội ngũ chuyên gia kỹ thuật và tư vấn viên của RICVINA luôn sẵn sàng đồng hành cùng
              doanh nghiệp của bạn ở bất kỳ cấp độ nào.
            </p>
          </div>

          {/* 💡 THAY ĐỔI LỚN NHẤT: Dùng flex-col kết hợp gap-[15vh] trên Mobile để đảm bảo chúng chung 1 trục cuộn.
              Vào Laptop (md:) thì tự động bung ra lại thành Grid 3 cột xếp ngang */}
          <div className="relative flex flex-col gap-[15vh] pb-10 md:grid md:grid-cols-3 md:gap-8 md:pb-0">
            {/* 💡 Card 1: z-10, sticky top-24 */}
            <div className="sticky top-24 z-10 flex flex-col rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-sm transition-all md:relative md:top-auto md:z-auto md:hover:shadow-xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <LifeBuoy className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-black text-slate-900">
                Hỗ trợ Kỹ thuật (Gửi Ticket)
              </h3>
              <p className="mb-8 leading-relaxed font-medium text-slate-600">
                Giải quyết các vấn đề liên quan đến lỗi phần mềm, gián đoạn kết nối API hoặc cấu
                hình hệ thống.
              </p>

              <div className="mt-auto mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="mb-2 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Cam kết chất lượng (SLA)
                </span>
                <p className="text-sm font-bold text-slate-700">
                  Thời gian phản hồi: Dưới 30 phút (Hỗ trợ 24/7 đối với sự cố P1)
                </p>
              </div>

              <button className="w-full rounded-xl border border-blue-200 bg-blue-50 py-4 font-bold text-blue-600 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                Tạo Ticket Mới
              </button>
            </div>

            {/* 💡 Card 2: z-20, CÙNG ĐIỂM DỪNG top-24 ĐỂ ĐÈ KÍN BƯNG LÊN CARD 1. Tăng shadow-2xl để hiệu ứng 3D đổ bóng rõ ràng hơn */}
            <div className="sticky top-24 z-20 flex flex-col rounded-[2.5rem] border border-emerald-100 bg-white p-8 shadow-2xl shadow-emerald-900/10 transition-all md:relative md:top-auto md:z-auto md:-translate-y-4 md:shadow-md md:hover:shadow-2xl md:hover:shadow-emerald-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-black tracking-wider text-emerald-700 uppercase">
                Phản hồi nhanh
              </div>
              <div className="mt-2 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <PhoneCall className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-black text-slate-900">Tổng đài Hotline</h3>
              <p className="mb-8 leading-relaxed font-medium text-slate-600">
                Đường dây nóng dành riêng cho các vấn đề khẩn cấp, cần can thiệp hệ thống ngay lập
                tức.
              </p>

              <div className="mt-auto mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="mb-2 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Cam kết chất lượng (SLA)
                </span>
                <p className="text-sm font-bold text-slate-700">
                  Hoạt động: Trong giờ hành chính (8h00 - 18h00, T2 - T7)
                </p>
              </div>

              <button className="w-full rounded-xl border border-emerald-200 bg-emerald-50 py-4 font-bold text-emerald-700 transition-colors hover:border-emerald-600 hover:bg-emerald-600 hover:text-white">
                Gọi 1900 1000
              </button>
            </div>

            {/* 💡 Card 3: z-30, VẪN LÀ top-24 ĐỂ ĐÈ KÍN LÊN CARD 2. Cùng bóng đổ mạnh như Card 2 */}
            <div className="sticky top-24 z-30 flex flex-col rounded-[2.5rem] border border-purple-100 bg-white p-8 shadow-2xl shadow-purple-900/10 transition-all md:relative md:top-auto md:z-auto md:shadow-sm md:hover:shadow-xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-black text-slate-900">Tư vấn Chuyên gia 1:1</h3>
              <p className="mb-8 leading-relaxed font-medium text-slate-600">
                Cần tư vấn mở rộng module, nâng cấp gói cước hoặc thiết kế lại luồng quy trình vận
                hành.
              </p>

              <div className="mt-auto mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="mb-2 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Cam kết chất lượng (SLA)
                </span>
                <p className="text-sm font-bold text-slate-700">
                  Thời gian sắp xếp cuộc gọi: Trong vòng 24 giờ làm việc
                </p>
              </div>

              <button className="w-full rounded-xl border border-purple-200 bg-purple-50 py-4 font-bold text-purple-600 transition-colors hover:border-purple-600 hover:bg-purple-600 hover:text-white">
                Đặt lịch gọi
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
