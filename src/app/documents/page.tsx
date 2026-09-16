'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight, // 🔥 ĐÃ THÊM: Import bổ sung icon ArrowRight bị thiếu
  Search,
  FileText,
  BookOpen,
  FileCode,
  Download,
  Eye,
  FileBox,
  Layers,
  FileArchive,
  BookMarked,
  ShieldCheck,
  Building2,
  Workflow,
  Network,
} from 'lucide-react'

// ==============================================================================
// 📚 MOCK DATA SIÊU CHI TIẾT: THƯ VIỆN TÀI LIỆU CẤP DOANH NGHIỆP
// Bao gồm: Hướng dẫn sử dụng (User Manuals), Nghiệp vụ (Whitepapers/SOP), API Docs
// ==============================================================================
const CATEGORIES = [
  { id: 'all', label: 'Tất cả tài liệu', icon: Layers },
  { id: 'manuals', label: 'Hướng dẫn sử dụng', icon: BookOpen },
  { id: 'business', label: 'Tài liệu Nghiệp vụ & SOP', icon: Building2 },
  { id: 'whitepaper', label: 'Ebook & Whitepaper', icon: BookMarked },
  { id: 'api', label: 'Tài liệu API & Tích hợp', icon: FileCode },
]

const documentData = [
  // --- RIC ERP ---
  {
    id: 'doc-erp-1',
    title: 'Sổ tay Vận hành RIC ERP: Phân hệ Kế toán & Tài chính (Bản 2026)',
    excerpt:
      'Tài liệu hướng dẫn chi tiết dành cho Kế toán trưởng và Ban Giám đốc. Bao gồm quy trình thiết lập hệ thống tài khoản, tự động hóa đối soát dòng tiền đa cổng thanh toán, hạch toán công nợ tự động và trích xuất báo cáo lưu chuyển tiền tệ (Cashflow) theo chuẩn mực kế toán Việt Nam (VAS).',
    category: 'manuals',
    product: 'RIC ERP',
    fileType: 'PDF',
    size: '12.5 MB',
    pages: '145 trang',
    icon: FileText,
  },
  {
    id: 'doc-erp-2',
    title: 'SOP Nghiệp vụ Quản trị Kho bãi & Chuỗi cung ứng tiên tiến',
    excerpt:
      'Quy trình chuẩn hoạt động (SOP) được RICVINA đúc kết từ hơn 500 doanh nghiệp bán lẻ và sản xuất. Hướng dẫn cách áp dụng phương pháp FIFO/LIFO, quản lý tồn kho theo lô/date, và thiết lập định mức tồn kho tối thiểu/tối đa cảnh báo tự động trên hệ thống ERP.',
    category: 'business',
    product: 'RIC ERP',
    fileType: 'PDF',
    size: '8.2 MB',
    pages: '86 trang',
    icon: Workflow,
  },
  // --- ZHUB ---
  {
    id: 'doc-zhub-1',
    title: 'Tài liệu Cấu hình ZHUB: Tích hợp Zalo OA, Fanpage và Website',
    excerpt:
      'Cẩm nang dành cho Admin hệ thống. Hướng dẫn từng bước (Step-by-step) cách cấp quyền ứng dụng, cấu hình Webhook để hứng tin nhắn Real-time, thiết lập bộ lọc từ khóa từ chối, và cấu hình kịch bản Chatbot AI tự động phân luồng khách hàng theo kịch bản (Decision Tree).',
    category: 'manuals',
    product: 'ZHUB',
    fileType: 'PDF',
    size: '5.1 MB',
    pages: '62 trang',
    icon: BookOpen,
  },
  {
    id: 'doc-zhub-api',
    title: 'ZHUB Developer Documentation: API Gateway & Webhook Reference',
    excerpt:
      'Tài liệu kỹ thuật chuyên sâu dành cho đội ngũ Developers. Cung cấp các Endpoint RESTful API để đồng bộ dữ liệu khách hàng (Lead) từ ZHUB sang các hệ thống CRM bên ngoài. Bao gồm chuẩn xác thực OAuth2.0, Rate Limits và cấu trúc Payload JSON mẫu.',
    category: 'api',
    product: 'ZHUB',
    fileType: 'DOCX',
    size: '2.4 MB',
    pages: '38 trang',
    icon: FileCode,
  },
  // --- RIC ECOM ---
  {
    id: 'doc-ecom-1',
    title: 'Cẩm nang Xây dựng hệ thống Omni-channel Commerce',
    excerpt:
      'Whitepaper phân tích chiến lược triển khai bán hàng đa kênh. Làm thế nào để hợp nhất trải nghiệm khách hàng từ Website, Zalo Mini App đến điểm bán Offline (POS). Giải quyết triệt để bài toán xung đột dữ liệu tồn kho khi phát sinh hàng ngàn đơn hàng cùng lúc trong các chiến dịch Mega Sale.',
    category: 'whitepaper',
    product: 'RIC ECOM',
    fileType: 'PDF',
    size: '15.8 MB',
    pages: '112 trang',
    icon: BookMarked,
  },
  // --- RIC AFFILIATE ---
  {
    id: 'doc-affiliate-1',
    title: 'Thiết kế Ma trận Hoa hồng Đa tầng trong Hệ thống Affiliate',
    excerpt:
      'Tài liệu nghiệp vụ chuyên sâu về cách xây dựng chính sách trả thưởng cho mạng lưới đại lý. Phân tích sự khác biệt giữa mô hình hoa hồng trực tiếp (Direct Commission) và hoa hồng đội nhóm (Team Bonus). Hướng dẫn thiết lập các rào cản chống gian lận (Fraud Detection) trong hệ thống RIC AFFILIATE.',
    category: 'business',
    product: 'RIC AFFILIATE',
    fileType: 'PDF',
    size: '6.7 MB',
    pages: '54 trang',
    icon: Network,
  },
  {
    id: 'doc-affiliate-2',
    title: 'Hướng dẫn sử dụng Portal dành cho Cộng tác viên (Bản End-user)',
    excerpt:
      'Tài liệu rút gọn (One-pager & Slide) doanh nghiệp có thể dùng để đào tạo trực tiếp cho mạng lưới CTV của mình. Hướng dẫn cách tạo link Affiliate, cách đọc báo cáo click/chuyển đổi, và quy trình tạo yêu cầu rút tiền (Withdrawal Request).',
    category: 'manuals',
    product: 'RIC AFFILIATE',
    fileType: 'PDF',
    size: '3.2 MB',
    pages: '25 trang',
    icon: FileBox,
  },
  // --- RIC TRUST ---
  {
    id: 'doc-trust-1',
    title: 'Quy chuẩn Triển khai Tem chống giả QR & Cảnh báo lấn kênh',
    excerpt:
      'Quy trình bảo mật dành cho nhà máy sản xuất và kho tổng. Hướng dẫn cách đồng bộ chuỗi mã định danh (Unique ID) từ hệ thống RIC TRUST sang máy in công nghiệp. Kịch bản xử lý sự cố khi hệ thống phát hiện tọa độ quét QR sai lệch với khu vực địa lý đại lý được phân bổ.',
    category: 'manuals',
    product: 'RIC TRUST',
    fileType: 'PDF',
    size: '9.4 MB',
    pages: '78 trang',
    icon: ShieldCheck,
  },
  // --- RICIO (LƯU TRÚ) ---
  {
    id: 'doc-ricio-1',
    title: 'SOP Vận hành Tiền sảnh (Front Office) & Buồng phòng Khách sạn',
    excerpt:
      'Tài liệu quy chuẩn nghiệp vụ ngành nhà hàng - khách sạn. Ứng dụng hệ thống RICIO để tăng tốc độ Check-in/Check-out xuống dưới 2 phút. Giao tiếp liên thông giữa Lễ tân và Buồng phòng (Housekeeping) qua hệ thống cảnh báo Real-time trên Mobile App.',
    category: 'business',
    product: 'RICIO',
    fileType: 'PDF',
    size: '11.0 MB',
    pages: '92 trang',
    icon: Building2,
  },
  {
    id: 'doc-ricio-api',
    title: 'Tài liệu Đồng bộ Channel Manager (OTA Integration)',
    excerpt:
      'Hướng dẫn kỹ thuật về cơ chế Mapping dữ liệu giữa RICIO PMS và các nền tảng OTA (Agoda, Booking.com, Traveloka). Cơ chế khóa phòng tự động (Auto-block) khi có booking mới nhằm ngăn chặn 100% rủi ro Overbooking.',
    category: 'api',
    product: 'RICIO',
    fileType: 'PDF',
    size: '4.5 MB',
    pages: '45 trang',
    icon: FileCode,
  },
]

export default function DocumentLibraryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Logic lọc tài liệu: Theo Category VÀ Theo từ khóa tìm kiếm
  const filteredDocs = documentData.filter((doc) => {
    const matchCategory = activeCategory === 'all' || doc.category === activeCategory
    const matchSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.product.toLowerCase().includes(searchQuery.toLowerCase())

    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/30">
      {/* ==========================================
          1. HERO & SEARCH SECTION
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 right-0 h-150 w-150 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="relative z-10 container mx-auto px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-400">Thư viện tài liệu</span>
          </div>

          <div className="mb-12 max-w-3xl">
            <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Thư viện Tài liệu & <br />
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tri thức Quản trị
              </span>
            </h1>
            <p className="text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              Truy cập hàng trăm tài liệu hướng dẫn sử dụng phần mềm, quy chuẩn nghiệp vụ (SOP) và
              kiến trúc hệ thống dành riêng cho khách hàng doanh nghiệp của RICVINA.
            </p>
          </div>

          {/* Thanh tìm kiếm khổng lồ (Hero Search) */}
          <div className="relative max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm tên tài liệu, module phần mềm, tính năng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/20 bg-white/10 py-4 pr-6 pl-14 text-lg text-white placeholder-slate-400 backdrop-blur-md transition-all focus:bg-white/15 focus:ring-2 focus:ring-cyan-500/50 focus:outline-hidden"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-cyan-400">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. MAIN CONTENT (SIDEBAR + DOCUMENT LIST)
          ========================================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* LEFT SIDEBAR: CATEGORY NAVIGATION */}
            <div className="w-full shrink-0 lg:w-1/4">
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-6 pl-2 text-xs font-black tracking-widest text-slate-400 uppercase">
                  Danh mục tài liệu
                </h3>
                <nav className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id
                    const CatIcon = cat.icon
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-bold transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <CatIcon
                          className={`h-5 w-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}
                        />
                        <span className="text-sm">{cat.label}</span>
                      </button>
                    )
                  })}
                </nav>

                <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h4 className="mb-2 font-bold text-blue-900">Cần hỗ trợ trực tiếp?</h4>
                  <p className="mb-4 text-sm leading-relaxed font-medium text-blue-700/80">
                    Nếu bạn không tìm thấy tài liệu cần thiết, đội ngũ kỹ thuật của chúng tôi luôn
                    sẵn sàng hỗ trợ 24/7.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    Mở Ticket Hỗ trợ <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT: DOCUMENT LIST */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">
                  {searchQuery
                    ? `Kết quả tìm kiếm cho "${searchQuery}"`
                    : CATEGORIES.find((c) => c.id === activeCategory)?.label}
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-500">
                  {filteredDocs.length} Tài liệu
                </span>
              </div>

              {filteredDocs.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {filteredDocs.map((doc) => {
                    const DocIcon = doc.icon
                    return (
                      <div
                        key={doc.id}
                        className="group flex flex-col items-start gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl sm:flex-row sm:items-center md:p-8"
                      >
                        {/* Icon File Left */}
                        <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:border-cyan-100 group-hover:bg-cyan-50 sm:flex">
                          <DocIcon className="h-8 w-8 text-slate-400 transition-colors group-hover:text-cyan-500" />
                        </div>

                        {/* Content Middle */}
                        <div className="flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                              {doc.product}
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                              <FileArchive className="h-3.5 w-3.5" /> {doc.fileType} • {doc.size} •{' '}
                              {doc.pages}
                            </span>
                          </div>

                          <h3 className="mb-3 line-clamp-2 text-xl leading-tight font-black text-slate-900 transition-colors group-hover:text-blue-600">
                            {doc.title}
                          </h3>
                          <p className="line-clamp-2 text-sm leading-relaxed font-medium text-slate-500 md:line-clamp-3">
                            {doc.excerpt}
                          </p>
                        </div>

                        {/* Actions Right */}
                        <div className="flex w-full shrink-0 gap-3 border-t border-slate-100 pt-4 sm:w-auto sm:flex-col sm:border-t-0 sm:pt-0">
                          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-cyan-600 sm:flex-none">
                            <Download className="h-4 w-4" /> Tải về
                          </button>
                          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 sm:flex-none">
                            <Eye className="h-4 w-4 text-slate-400" /> Đọc Online
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center rounded-[3rem] border border-dashed border-slate-200 bg-white px-6 py-32 text-center">
                  <FileText className="mb-6 h-16 w-16 text-slate-200" />
                  <h3 className="mb-3 text-2xl font-black text-slate-900">
                    Không tìm thấy tài liệu phù hợp
                  </h3>
                  <p className="mx-auto max-w-md font-medium text-slate-500">
                    Thử điều chỉnh lại từ khóa tìm kiếm hoặc chọn danh mục khác ở thanh bên trái.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('all')
                    }}
                    className="mt-8 rounded-full bg-slate-100 px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              )}

              {/* Phân trang (Pagination) */}
              {filteredDocs.length > 0 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-slate-200 text-slate-400">
                    <ChevronRight className="h-5 w-5 rotate-180" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-md">
                    1
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">
                    2
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">
                    3
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
