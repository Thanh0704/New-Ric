'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Search,
  FileText,
  Download,
  Eye,
  BookOpen,
  FileJson,
  BookMarked,
  Layers,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react'

// ==============================================================================
// 🔥 KHAI BÁO TYPESCRIPT
// ==============================================================================
type Category = {
  id: string
  label: string
  icon: React.ElementType
}

type DocumentItem = {
  id: string
  categoryId: string
  product: string
  type: string
  size: string
  pages: number
  title: string
  desc: string
  downloadUrl: string
  readUrl: string
}

// ==============================================================================
// 📦 MOCK DATA: DANH MỤC & TÀI LIỆU
// ==============================================================================
const CATEGORIES: Category[] = [
  { id: 'all', label: 'Tất cả tài liệu', icon: Layers },
  { id: 'guide', label: 'Hướng dẫn sử dụng', icon: BookOpen },
  { id: 'sop', label: 'Tài liệu Nghiệp vụ ', icon: FileText },
  { id: 'ebook', label: 'Ebook & Whitepaper', icon: BookMarked },
  { id: 'api', label: 'Tài liệu API & Tích hợp', icon: FileJson },
]

const DOCUMENTS: DocumentItem[] = [
  // --- SOP & NGHIỆP VỤ ---
  {
    id: 'doc-1',
    categoryId: 'sop',
    product: 'RIC ERP',
    type: 'PDF',
    size: '12.5 MB',
    pages: 145,
    title: 'Sổ tay Vận hành RIC ERP: Phân hệ Kế toán & Tài chính (Bản 2026)',
    desc: 'Tài liệu hướng dẫn chi tiết dành cho Kế toán trưởng và Ban Giám đốc. Bao gồm quy trình thiết lập hệ thống tài khoản, tự động hóa đối soát dòng tiền đa cổng thanh toán, hạch toán công nợ tự động...',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-2',
    categoryId: 'sop',
    product: 'RIC ERP',
    type: 'PDF',
    size: '8.2 MB',
    pages: 86,
    title: 'SOP Nghiệp vụ Quản trị Kho bãi & Chuỗi cung ứng tiên tiến',
    desc: 'Quy trình chuẩn hoạt động (SOP) được RICVINA đúc kết từ hơn 500 doanh nghiệp bán lẻ và sản xuất. Hướng dẫn cách áp dụng phương pháp FIFO/LIFO, quản lý tồn kho theo lô/date, và thiết lập định mức...',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-3',
    categoryId: 'sop',
    product: 'RIC AFFILIATE',
    type: 'PDF',
    size: '5.4 MB',
    pages: 62,
    title: 'Quy trình Xây dựng & Tính toán Ma trận Hoa hồng Đa tầng',
    desc: 'Bản vẽ chi tiết cách thiết lập luật chia hoa hồng cho mạng lưới Cộng tác viên/Đại lý. Tránh rủi ro lạm chi và quản trị dòng tiền minh bạch.',
    downloadUrl: '#',
    readUrl: '#',
  },

  // --- HƯỚNG DẪN SỬ DỤNG ---
  {
    id: 'doc-4',
    categoryId: 'guide',
    product: 'ZHUB',
    type: 'PDF',
    size: '5.1 MB',
    pages: 62,
    title: 'Tài liệu Cấu hình ZHUB: Tích hợp Zalo OA, Fanpage & Webchat',
    desc: 'Hướng dẫn từng bước (Step-by-step) cách kết nối các kênh giao tiếp mạng xã hội vào trung tâm hội thoại ZHUB. Cách thiết lập kịch bản chatbot tự động phân luồng Ticket cho nhân viên CSKH.',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-5',
    categoryId: 'guide',
    product: 'RIC ECOM',
    type: 'PDF',
    size: '9.8 MB',
    pages: 112,
    title: 'Cẩm nang Vận hành Website Thương mại điện tử RIC ECOM',
    desc: 'Hướng dẫn đẩy sản phẩm hàng loạt, cấu hình chương trình khuyến mãi (Flash Sale, Voucher), và đồng bộ tồn kho với hệ thống POS tại cửa hàng vật lý.',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-6',
    categoryId: 'guide',
    product: 'RIC MESSAGE',
    type: 'PDF',
    size: '3.2 MB',
    pages: 45,
    title: 'Hướng dẫn thiết lập chiến dịch Zalo ZNS & SMS Automation',
    desc: 'Cách tạo template tin nhắn chuẩn Zalo, thiết lập kịch bản gửi tin tự động (chúc mừng sinh nhật, nhắc nhở thanh toán, đánh giá dịch vụ).',
    downloadUrl: '#',
    readUrl: '#',
  },

  // --- API & TÍCH HỢP ---
  {
    id: 'doc-7',
    categoryId: 'api',
    product: 'RIC GATEWAY',
    type: 'JSON/PDF',
    size: '2.1 MB',
    pages: 120,
    title: 'Tài liệu Tích hợp RESTful API & Webhook (Version 2.4)',
    desc: 'Bản đặc tả API (API Reference) đầy đủ dành cho Developers. Bao gồm cơ chế Authentication (OAuth2.0, Bearer Token), Rate Limits, và danh sách Endpoints của phân hệ Đơn hàng, Khách hàng.',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-8',
    categoryId: 'api',
    product: 'RIC TRUST',
    type: 'PDF',
    size: '4.5 MB',
    pages: 55,
    title: 'Hướng dẫn Tích hợp Mã vạch QR Code vào Dây chuyền Sản xuất',
    desc: 'Tài liệu kỹ thuật hướng dẫn đấu nối phần mềm RIC TRUST với các dòng máy in mã vạch công nghiệp, cơ chế mã hóa dữ liệu lô sản xuất thời gian thực.',
    downloadUrl: '#',
    readUrl: '#',
  },

  // --- EBOOK & WHITEPAPER ---
  {
    id: 'doc-9',
    categoryId: 'ebook',
    product: 'WHITEPAPER',
    type: 'PDF',
    size: '18.5 MB',
    pages: 85,
    title: 'Báo cáo: Tương lai của ERP và Trí tuệ nhân tạo (AI) 2026-2030',
    desc: 'Sách trắng (Whitepaper) phân tích xu hướng chuyển đổi số của các tập đoàn hàng đầu. Cách AI đang thay đổi cách chúng ta dự báo tồn kho và quản trị dòng tiền.',
    downloadUrl: '#',
    readUrl: '#',
  },
  {
    id: 'doc-10',
    categoryId: 'ebook',
    product: 'EBOOK',
    type: 'PDF',
    size: '15.2 MB',
    pages: 110,
    title: 'Cẩm nang Xóa bỏ Silo Dữ liệu: Từ lý thuyết đến thực tiễn',
    desc: 'Phân tích "điểm đau" của sự phân mảnh dữ liệu giữa các phòng ban. Lộ trình 5 bước giúp doanh nghiệp SME dịch chuyển lên hệ thống ERP hợp nhất.',
    downloadUrl: '#',
    readUrl: '#',
  },
]

// ==============================================================================
// ⚙️ CẤU HÌNH PHÂN TRANG (CHỈ DÀNH CHO LAPTOP)
// ==============================================================================
const ITEMS_PER_PAGE = 2

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // State phân trang (Dành cho Laptop)
  const [currentPage, setCurrentPage] = useState(1)
  // State chấm tròn (Dành cho Mobile)
  const [activeSlide, setActiveSlide] = useState(0)

  // 1. LỌC TÀI LIỆU
  const filteredDocs = DOCUMENTS.filter((doc) => {
    const matchCategory = activeCategory === 'all' || doc.categoryId === activeCategory
    const matchSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.product.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  // 2. TÍNH TOÁN PHÂN TRANG (Cắt 2 bài cho Laptop)
  const totalPages = Math.ceil(filteredDocs.length / ITEMS_PER_PAGE)
  const currentDocs = filteredDocs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  // 3. HÀM BẮT SỰ KIỆN VUỐT (Chỉ kích hoạt trên Mobile)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const scrollPosition = target.scrollLeft
    const itemWidth = target.scrollWidth / filteredDocs.length
    const newIndex = Math.round(scrollPosition / itemWidth)
    if (newIndex !== activeSlide) {
      setActiveSlide(newIndex)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-500/30">
      {/* ==========================================
          HERO SECTION TÌM KIẾM
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 text-white md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 text-center md:px-20">
          <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:mb-6 md:text-xs">
            <Link href="/" className="transition-colors hover:text-blue-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">Tài nguyên</span>
          </div>
          <h1 className="mb-4 text-3xl font-black md:mb-6 md:text-5xl lg:text-6xl">
            Thư viện & Tài liệu
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm font-medium text-slate-400 md:mb-10 md:text-lg">
            Truy cập toàn bộ tài liệu hướng dẫn, quy trình SOP chuẩn và API Documentation của hệ
            sinh thái RICVINA.
          </p>

          <div className="relative mx-auto max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
              <Search className="h-4 w-4 text-slate-400 md:h-5 md:w-5" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu, Ebook, API..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
                setActiveSlide(0)
              }}
              className="w-full rounded-full bg-white py-3 pr-4 pl-12 text-sm font-medium text-slate-900 shadow-2xl focus:ring-4 focus:ring-blue-500/20 focus:outline-hidden md:py-4 md:pr-6 md:pl-14 md:text-base"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTENT & LAYOUT
          ========================================== */}
      <section className="overflow-hidden py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4 lg:gap-10">
            {/* SIDEBAR BỘ LỌC */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:col-span-1">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:rounded-[2rem] md:p-4">
                <h3 className="mb-2 px-2 py-2 text-center text-[10px] font-black tracking-widest text-slate-400 uppercase md:px-4 md:py-3 md:text-xs lg:text-left">
                  Danh mục tài liệu
                </h3>

                <div className="flex flex-wrap justify-center gap-2 pb-2 lg:flex-col lg:flex-nowrap lg:justify-start lg:space-y-1 lg:pb-0">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon
                    const isActive = activeCategory === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id)
                          setCurrentPage(1)
                          setActiveSlide(0)
                        }}
                        className={`flex grow items-center justify-center gap-2 rounded-xl px-3 py-2 text-[11px] font-bold transition-all md:gap-3 md:rounded-2xl md:px-4 md:py-3 md:text-sm lg:grow-0 lg:justify-start ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 md:h-5 md:w-5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`}
                        />
                        <span>{cat.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Hộp hỗ trợ */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 md:rounded-[2rem] md:p-8">
                <h4 className="mb-2 font-black text-blue-900 md:mb-3">Cần hỗ trợ trực tiếp?</h4>
                <p className="mb-4 text-xs leading-relaxed font-medium text-blue-700/80 md:mb-6 md:text-sm">
                  Nếu bạn không tìm thấy tài liệu cần thiết, đội ngũ kỹ thuật của chúng tôi luôn sẵn
                  sàng hỗ trợ 24/7.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 md:text-sm"
                >
                  Mở Ticket Hỗ trợ <ArrowRight className="ml-1.5 h-3 w-3 md:ml-2 md:h-4 md:w-4" />
                </Link>
              </div>
            </div>

            {/* DANH SÁCH TÀI LIỆU & PHÂN TRANG */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between md:mb-8">
                <h2 className="text-xl font-black text-slate-900 md:text-2xl">
                  {CATEGORIES.find((c) => c.id === activeCategory)?.label || 'Tất cả tài liệu'}
                </h2>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-400 shadow-sm md:px-4 md:py-1.5 md:text-sm">
                  {filteredDocs.length} Tài liệu
                </span>
              </div>

              {filteredDocs.length > 0 ? (
                <div className="relative">
                  {/* =======================================================
                      📱 KHỐI 1: GIAO DIỆN MOBILE (Chỉ hiện trên Mobile - md:hidden)
                      Mở full danh sách `filteredDocs`, Cuộn ngang, Có thanh chấm tròn
                      ======================================================= */}
                  <div className="md:hidden">
                    <div
                      onScroll={handleScroll}
                      className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-4"
                    >
                      {/* Dùng filteredDocs để load FULL tài liệu trên mobile */}
                      {filteredDocs.map((doc) => (
                        <div
                          key={doc.id}
                          className="group flex w-[75vw] shrink-0 snap-start flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-xl sm:w-88"
                        >
                          <div className="shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50">
                              <FileText className="h-6 w-6 text-slate-400 group-hover:text-blue-500" />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                              <span className="text-blue-600">{doc.product}</span>
                              <span className="flex items-center gap-1">
                                <FileText className="h-3 w-3" /> {doc.type} • {doc.size}
                              </span>
                            </div>
                            <h3 className="mb-2 text-lg leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600">
                              {doc.title}
                            </h3>
                            <p className="mb-5 line-clamp-3 text-sm leading-relaxed font-medium text-slate-600">
                              {doc.desc}
                            </p>
                          </div>

                          <div className="flex shrink-0 flex-row gap-2">
                            <Link
                              href={doc.downloadUrl}
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-blue-600"
                            >
                              <Download className="h-4 w-4" /> Tải về
                            </Link>
                            <Link
                              href={doc.readUrl}
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50"
                            >
                              <Eye className="h-4 w-4" /> Đọc Online
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DOT INDICATOR (Luôn hiện trên Mobile nếu nhiều hơn 1 bài) */}
                    {filteredDocs.length > 1 && (
                      <div className="mt-4 flex items-center justify-center gap-2">
                        {filteredDocs.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === activeSlide ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* =======================================================
                      💻 KHỐI 2: GIAO DIỆN LAPTOP (Chỉ hiện trên Laptop - hidden md:flex)
                      Chỉ load `currentDocs` (2 bài/trang), Xếp Dọc, Có phân trang
                      ======================================================= */}
                  <div className="hidden md:flex md:flex-col md:gap-6">
                    {/* Dùng currentDocs để load đúng 2 bài trên Laptop */}
                    {currentDocs.map((doc) => (
                      <div
                        key={doc.id}
                        className="group flex flex-row gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-xl"
                      >
                        <div className="shrink-0">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50">
                            <FileText className="h-8 w-8 text-slate-400 group-hover:text-blue-500" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="mb-3 flex items-center gap-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
                            <span className="text-blue-600">{doc.product}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <FileText className="h-3 w-3" /> {doc.type} • {doc.size}
                            </span>
                          </div>
                          <h3 className="mb-3 text-2xl leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600">
                            {doc.title}
                          </h3>
                          <p className="mb-6 text-base leading-relaxed font-medium text-slate-600">
                            {doc.desc}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-col gap-3">
                          <Link
                            href={doc.downloadUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-600"
                          >
                            <Download className="h-4 w-4" /> Tải về
                          </Link>
                          <Link
                            href={doc.readUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50"
                          >
                            <Eye className="h-4 w-4" /> Đọc Online
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white py-16 text-center md:rounded-[3rem] md:py-32">
                  <Search className="mb-4 h-12 w-12 text-slate-200 md:mb-6 md:h-16 md:w-16" />
                  <h3 className="mb-2 text-xl font-black text-slate-900 md:text-2xl">
                    Không tìm thấy tài liệu
                  </h3>
                  <p className="text-sm font-medium text-slate-500 md:text-base">
                    Vui lòng thử lại với từ khóa hoặc danh mục khác.
                  </p>
                </div>
              )}

              {/* ==========================================
                  THANH ĐIỀU HƯỚNG PHÂN TRANG (CHỈ DÀNH CHO LAPTOP)
                  ========================================== */}
              {totalPages > 1 && (
                <div className="mt-12 hidden items-center justify-center gap-2 md:flex">
                  <button
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1))
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
                        }}
                        className={`h-12 w-12 rounded-xl text-base font-black shadow-sm transition-all ${
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
                    }}
                    disabled={currentPage === totalPages}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                  >
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
