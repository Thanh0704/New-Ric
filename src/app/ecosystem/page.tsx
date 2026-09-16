'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Database,
  Store,
  MessageSquare,
  Send,
  Network,
  ShieldCheck,
  // Đã xóa import Building bị thừa ở đây
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  Lock,
  Workflow,
} from 'lucide-react'

// ==============================================================================
// 🔥 KHAI BÁO TYPESCRIPT
// ==============================================================================
type EcosystemValue = {
  title: string
  desc: string
  icon: React.ElementType
}

type ProductModule = {
  id: string
  name: string
  tag: string
  desc: string
  icon: React.ElementType
  features: string[]
  theme: {
    bg: string
    text: string
    border: string
    glow: string
  }
}

// ==============================================================================
// 📦 MOCK DATA: HỆ SINH THÁI SẢN PHẨM RICVINA
// ==============================================================================
const ECOSYSTEM_VALUES: EcosystemValue[] = [
  {
    title: 'Dữ liệu Tập trung (Single Source of Truth)',
    desc: 'Xóa bỏ hoàn toàn "Silo dữ liệu". Từ Kế toán, Kho bãi, CSKH đến Bán hàng đều truy xuất và cập nhật trên một nền tảng dữ liệu duy nhất, Real-time 100%.',
    icon: Database,
  },
  {
    title: 'Liên kết Không độ trễ (Zero Latency)',
    desc: 'Các phân hệ được thiết kế theo kiến trúc Microservices, giao tiếp qua API nội bộ tốc độ cao. Một đơn hàng phát sinh, tồn kho và công nợ nhảy số ngay lập tức.',
    icon: Zap,
  },
  {
    title: 'Bảo mật Cấp doanh nghiệp',
    desc: 'Phân quyền phân tầng cực sâu (RBAC). Dữ liệu được mã hóa đa lớp, tự động sao lưu và đáp ứng các tiêu chuẩn khắt khe về An toàn thông tin quốc tế.',
    icon: Lock,
  },
]

const PRODUCTS: ProductModule[] = [
  {
    id: 'ric-erp',
    name: 'RIC ERP',
    tag: 'Core Engine (Trái tim hệ thống)',
    desc: 'Nền tảng Quản trị Doanh nghiệp tổng thể. Trục xương sống liên thông toàn bộ luồng Tài chính - Kế toán, Nhân sự (HRM), và Chuỗi cung ứng (SCM).',
    icon: Layers,
    features: [
      'Báo cáo dòng tiền (Cashflow) & Đối soát tự động',
      'Quản trị Tồn kho đa chi nhánh (FIFO/LIFO)',
      'Phân quyền nhân sự Role-Based Access Control',
    ],
    theme: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100',
      glow: 'shadow-[0_0_30px_rgba(37,99,235,0.1)]',
    },
  },
  {
    id: 'ric-ecom',
    name: 'RIC ECOM',
    tag: 'Omni-channel Commerce',
    desc: 'Nền tảng Thương mại điện tử lõi. Quản lý đồng bộ hàng ngàn SKU sản phẩm, xử lý luồng đơn hàng đa kênh từ Website, App đến điểm bán Offline (POS).',
    icon: Store,
    features: [
      'Xử lý High Concurrency (Chịu tải mùa Sale)',
      'Đồng bộ tồn kho Real-time với RIC ERP',
      'Tích hợp Cổng thanh toán & Đơn vị vận chuyển',
    ],
    theme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-100',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.1)]',
    },
  },
  {
    id: 'zhub',
    name: 'ZHUB',
    tag: 'Unified Chat Hub',
    desc: 'Trung tâm Hội thoại hợp nhất. Gom toàn bộ tin nhắn từ Zalo OA, Fanpage, Website về một màn hình duy nhất. Tự động hóa phân luồng CSKH bằng AI.',
    icon: MessageSquare,
    features: [
      'Hợp nhất Multi-channel vào 1 Dashboard',
      'Gán Tag, chia luồng Ticket tự động cho Agent',
      'Theo dõi SLA thời gian phản hồi của nhân viên',
    ],
    theme: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100',
      glow: 'shadow-[0_0_30px_rgba(147,51,234,0.1)]',
    },
  },
  {
    id: 'ric-message',
    name: 'RIC MESSAGE',
    tag: 'Marketing Automation',
    desc: 'Hệ thống tương tác khách hàng tự động. Thiết lập các kịch bản (Trigger) để gửi Zalo ZNS, SMS chăm sóc khách hàng theo từng điểm chạm cá nhân hóa.',
    icon: Send,
    features: [
      'Nuôi dưỡng khách hàng tự động (Drip Campaigns)',
      'Tích hợp API gửi tin Zalo ZNS tốc độ cao',
      'Thống kê tỷ lệ chuyển đổi (Conversion Tracking)',
    ],
    theme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-100',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.1)]',
    },
  },
  {
    id: 'ric-affiliate',
    name: 'RIC AFFILIATE',
    tag: 'Partner Management',
    desc: 'Giải pháp quản trị mạng lưới Đại lý & Cộng tác viên. Tự động hóa việc tính toán ma trận hoa hồng đa tầng cực kỳ phức tạp mà không sợ sai sót.',
    icon: Network,
    features: [
      'Công cụ tính toán Commission Engine siêu tốc',
      'Portal minh bạch doanh thu cho Cộng tác viên',
      'Hệ thống Tracking Link & Chống gian lận (Fraud)',
    ],
    theme: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-100',
      glow: 'shadow-[0_0_30px_rgba(249,115,22,0.1)]',
    },
  },
  {
    id: 'ric-trust',
    name: 'RIC TRUST',
    tag: 'Brand Protection',
    desc: 'Hệ thống định danh và bảo vệ thương hiệu số 1. Mã hóa QR Code đa lớp giúp chống hàng giả, thu thập dữ liệu người dùng cuối và cảnh báo lấn kênh đại lý.',
    icon: ShieldCheck,
    features: [
      'Định danh Unique ID cho từng đơn vị sản phẩm',
      'Bản đồ cảnh báo lấn kênh vùng miền Real-time',
      'Biến người dùng cuối thành khách hàng thân thiết',
    ],
    theme: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-100',
      glow: 'shadow-[0_0_30px_rgba(225,29,72,0.1)]',
    },
  },
]

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/30 selection:text-slate-900">
      {/* ==========================================
          1. HERO SECTION (Khẳng định vị thế All-in-One)
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        {/* Glow Effects tối ưu Tailwind */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/15 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 text-center md:px-20">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="#" className="transition-colors hover:text-cyan-400">
              Về RIC
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-400">Hệ sinh thái</span>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-md">
              <Workflow className="h-4 w-4" /> The Unified Enterprise Core
            </div>

            <h1 className="mb-8 text-4xl leading-tight font-black tracking-tight text-white md:text-5xl lg:text-7xl">
              Mọi nghiệp vụ. Một nền tảng. <br />
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Dữ liệu xuyên suốt.
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              Không còn nỗi lo tích hợp chắp vá hay thất thoát thông tin. Hệ sinh thái RICVINA cung
              cấp trọn bộ công cụ từ vận hành, bán hàng đến Marketing, tất cả chạy trên một trục cơ
              sở dữ liệu duy nhất.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. GIÁ TRỊ KIẾN TRÚC (The "Why")
          ========================================== */}
      <section className="relative z-20 -mt-12 mb-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {ECOSYSTEM_VALUES.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 md:p-10"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-slate-950 p-4 shadow-sm">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-xl leading-snug font-black text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-medium text-slate-600">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CHI TIẾT HỆ SINH THÁI (Product Grid)
          ========================================== */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-5xl">
              Khám phá Hệ sinh thái RICVINA
            </h2>
            <p className="text-lg leading-relaxed font-medium text-slate-500">
              Các phân hệ phần mềm được thiết kế độc lập (Microservices) để linh hoạt triển khai,
              nhưng lại liên kết hoàn hảo với nhau thành một khối thống nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {PRODUCTS.map((prod) => {
              const Icon = prod.icon
              return (
                <div
                  key={prod.id}
                  className={`group relative flex flex-col rounded-[3rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-slate-800 hover:bg-slate-900 md:p-12 ${prod.theme.glow} hover:shadow-2xl`}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div
                      className={`inline-flex rounded-3xl p-5 transition-colors ${prod.theme.bg} border group-hover:border-white/10 group-hover:bg-white/10 ${prod.theme.border}`}
                    >
                      <Icon
                        className={`h-10 w-10 transition-colors ${prod.theme.text} group-hover:text-cyan-400`}
                      />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[10px] font-black tracking-widest uppercase transition-colors ${prod.theme.bg} ${prod.theme.text} ${prod.theme.border} group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-slate-300`}
                    >
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-black text-slate-900 transition-colors group-hover:text-white">
                    {prod.name}
                  </h3>

                  <p className="mb-8 text-base leading-relaxed font-medium text-slate-600 transition-colors group-hover:text-slate-400">
                    {prod.desc}
                  </p>

                  <div className="mt-auto mb-10 space-y-4">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${prod.theme.text} group-hover:text-cyan-500`}
                        />
                        <span className="text-sm leading-tight font-semibold text-slate-700 transition-colors group-hover:text-slate-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-8 transition-colors group-hover:border-white/10">
                    <Link
                      href={`/products/${prod.id}`}
                      className={`inline-flex items-center text-sm font-bold transition-colors ${prod.theme.text} group-hover:text-cyan-400`}
                    >
                      Nghiên cứu tính năng chi tiết{' '}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CTA CHIẾN LƯỢC (Tư vấn Kiến trúc)
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 left-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="rounded-[3rem] border border-white/10 bg-linear-to-br from-cyan-900/40 to-blue-900/40 p-10 text-center shadow-2xl backdrop-blur-xl md:p-20">
            <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
              Bạn không biết nên bắt đầu từ module nào?
            </h2>
            {/* Đã sửa lỗi unescaped entities: thay ngoặc kép bằng &quot; */}
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-slate-300">
              Tùy thuộc vào quy mô và &quot;điểm đau&quot; hiện tại, các chuyên gia kiến trúc của
              chúng tôi sẽ thiết kế cho bạn một lộ trình triển khai (Roadmap) đi từ lõi ra, đảm bảo
              tiết kiệm chi phí và tỷ lệ thành công 100%.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-cyan-500 px-10 py-5 text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all hover:scale-105 hover:bg-cyan-400"
            >
              Yêu cầu tư vấn Kiến trúc hệ thống
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
