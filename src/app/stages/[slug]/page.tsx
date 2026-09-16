'use client'

import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Activity,
  Crosshair,
  Building2,
  PieChart,
  Workflow,
  Network,
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'

// ==============================================================================
// 🔥 KHAI BÁO KIỂU DỮ LIỆU ĐỂ TRỊ LỖI ESLINT "Unexpected any"
// ==============================================================================
type Diagnostic = {
  title: string
  desc: string
  icon: React.ElementType
}

type Architecture = {
  product: string
  role: string
  impact: string
  image: string
}

type StageData = {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  theme: string
  color: {
    gradient: string
    accent: string
    bgLight: string
    border: string
  }
  overview: string
  diagnostics: Diagnostic[]
  strategy: {
    title: string
    description: string
    steps: string[]
  }
  architecture: Architecture[]
  metrics: string[]
}

// ==============================================================================
// 📦 MOCK DATA CHUYÊN SÂU: CHUẨN BÁO CÁO TƯ VẤN CHIẾN LƯỢC CẤP CAO
// ==============================================================================
const stageDetails: Record<string, StageData> = {
  start: {
    id: 'start',
    title: 'Giai đoạn: Bắt đầu số hóa',
    subtitle: 'Chuyển đổi từ mô hình truyền thống sang nền tảng số',
    icon: Target,
    theme: 'blue',
    color: {
      gradient: 'from-blue-900 via-slate-900 to-slate-950',
      accent: 'text-blue-400',
      bgLight: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    overview:
      'Trong giai đoạn này, doanh nghiệp thường vận hành dựa trên kinh nghiệm cá nhân, sổ sách thủ công hoặc các file Excel rời rạc. Khi lượng khách hàng bắt đầu tăng, mô hình truyền thống bộc lộ rõ rệt sự cồng kềnh, độ trễ thông tin cao và rủi ro thất thoát dữ liệu nghiêm trọng. Việc thiết lập một "Bộ lõi số hóa" (Digital Core) ngay từ đầu là yếu tố sống còn để tạo đà tăng trưởng mà không bị gãy vỡ hệ thống.',
    diagnostics: [
      {
        title: 'Silo Dữ liệu & Thất thoát',
        desc: 'Thông tin khách hàng và đơn hàng nằm rải rác trên Zalo cá nhân, sổ tay, Excel. Khó kiểm soát, dễ mất mát khi nhân sự nghỉ việc.',
        icon: ShieldAlert,
      },
      {
        title: 'Nút thắt năng suất',
        desc: 'Thời gian xử lý một đơn hàng kéo dài qua nhiều khâu thủ công (check tồn kho, lên đơn, gọi ship), gây lãng phí nguồn lực.',
        icon: Activity,
      },
      {
        title: 'Trải nghiệm khách hàng rời rạc',
        desc: 'Khách hàng phải chờ đợi lâu để được phản hồi. Thiếu các điểm chạm chuyên nghiệp (Website, App) để xây dựng niềm tin.',
        icon: Crosshair,
      },
    ],
    strategy: {
      title: 'Chiến lược tháo gỡ (The Pivot)',
      description:
        'Ưu tiên hàng đầu không phải là áp dụng những công nghệ phức tạp, mà là "Chuẩn hóa" và "Tập trung hóa". Doanh nghiệp cần một hệ thống lõi đủ đơn giản để nhân sự dễ dàng thích nghi, nhưng đủ chặt chẽ để mọi luồng dữ liệu (Sản phẩm - Tồn kho - Đơn hàng - Khách hàng) chảy về một mối.',
      steps: [
        'Số hóa toàn bộ danh mục sản phẩm và đồng bộ kho bãi.',
        'Mở rộng các kênh bán hàng Online (Omnichannel) được quản lý tập trung.',
        'Định danh và bảo vệ thương hiệu ngay từ những sản phẩm đầu tiên tung ra thị trường.',
      ],
    },
    architecture: [
      {
        product: 'RIC ECOM',
        role: 'Nền tảng Thương mại lõi (Commerce Core)',
        impact:
          'Cung cấp hệ thống quản trị trung tâm. Tự động hóa luồng xử lý đơn hàng đa kênh (Web, Zalo Mini App). Xóa bỏ 100% tình trạng lệch tồn kho.',
        image: '/images/solutions/ecom.jpg',
      },
      {
        product: 'RIC TRUST',
        role: 'Lá chắn Bảo vệ Thương hiệu',
        impact:
          'Gắn mã định danh QR độc nhất cho từng sản phẩm. Ngăn chặn hàng giả ngay từ trong trứng nước và thu thập dữ liệu End-user đầu tiên.',
        image: '/images/solutions/ric-trust.jpg',
      },
    ],
    metrics: [
      'Tự động hóa 100% luồng đơn hàng',
      'Giảm 90% sai sót đối soát',
      'Kiến tạo kênh Digital Sales đầu tiên',
    ],
  },

  automate: {
    id: 'automate',
    title: 'Giai đoạn: Tự động hóa quy trình',
    subtitle: 'Giải phóng sức lao động, tối ưu hóa điểm chạm khách hàng',
    icon: Zap,
    theme: 'purple',
    color: {
      gradient: 'from-purple-900 via-slate-900 to-slate-950',
      accent: 'text-purple-400',
      bgLight: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
    overview:
      'Doanh nghiệp đã có tệp khách hàng ổn định và dòng tiền dương. Tuy nhiên, sự tăng trưởng về lượng kéo theo tình trạng "phình to" bộ máy nhân sự CSKH và Sales. Chi phí vận hành tăng tuyến tính theo doanh thu. Việc dựa vào sức người để gửi thông báo, nhắc lịch, hay trực chat nhiều kênh khiến chất lượng dịch vụ đi xuống, khách hàng bị bỏ lỡ (Drop-off).',
    diagnostics: [
      {
        title: 'Quá tải điểm chạm giao tiếp',
        desc: 'Tin nhắn đổ về từ Fanpage, Zalo OA, Website làm nhân viên bị ngợp, dẫn đến phản hồi chậm trễ và đánh rơi Lead tiềm năng.',
        icon: Network,
      },
      {
        title: 'Tỷ lệ khách hàng quay lại (Retention) thấp',
        desc: 'Thiếu các chiến dịch chăm sóc lại (Re-marketing) có tính cá nhân hóa. Khách mua một lần rồi đi vì không được nuôi dưỡng.',
        icon: PieChart,
      },
      {
        title: 'Chi phí Marketing lãng phí',
        desc: 'Gửi SMS hàng loạt chi phí cao nhưng tỷ lệ chuyển đổi thấp. Chưa khai thác được sức mạnh của Automation Marketing.',
        icon: Activity,
      },
    ],
    strategy: {
      title: 'Chiến lược tháo gỡ (The Pivot)',
      description:
        'Chuyển dịch từ "Phản ứng thụ động" sang "Tương tác chủ động & Tự động". Áp dụng công nghệ để gom các luồng giao tiếp về một trung tâm (Hub), đồng thời thiết lập các kịch bản máy học (Trigger-based) để hệ thống tự động chăm sóc khách hàng thay cho con người.',
      steps: [
        'Hợp nhất toàn bộ các kênh Chat về một màn hình điều khiển duy nhất.',
        'Thiết lập kịch bản gửi tin tự động (Zalo ZNS) theo vòng đời khách hàng.',
        'Áp dụng AI và phân quyền thông minh để điều phối công việc cho đội ngũ Sales/CSKH.',
      ],
    },
    architecture: [
      {
        product: 'ZHUB',
        role: 'Trung tâm Hội thoại hợp nhất (Unified Chat Hub)',
        impact:
          'Gom Zalo, Fanpage, Webchat về 1 nền tảng. Tự động chia luồng chat cho nhân viên. Theo dõi sát sao SLA (Thời gian phản hồi) của từng nhân sự.',
        image: '/images/solutions/zhub.jpg',
      },
      {
        product: 'RIC MESSAGE',
        role: 'Hạ tầng Marketing Automation',
        impact:
          'Kích hoạt hệ thống nuôi dưỡng khách hàng tự động qua Zalo ZNS/SMS. Gửi tin nhắn cá nhân hóa đúng người, đúng thời điểm, tiết kiệm 80% thời gian.',
        image: '/images/solutions/ric-message.jpg',
      },
    ],
    metrics: [
      'Tăng tỷ lệ phản hồi < 5 phút lên 99%',
      'Tăng 40% tỷ lệ quay lại mua hàng',
      'Giảm 60% khối lượng công việc thủ công',
    ],
  },

  scale: {
    id: 'scale',
    title: 'Giai đoạn: Mở rộng & Tăng trưởng',
    subtitle: 'Quản trị quy mô lớn, ra quyết định dựa trên dữ liệu',
    icon: TrendingUp,
    theme: 'emerald',
    color: {
      gradient: 'from-emerald-900 via-slate-900 to-slate-950',
      accent: 'text-emerald-400',
      bgLight: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    overview:
      'Đây là cấp độ vận hành phức tạp nhất. Doanh nghiệp mở rộng chuỗi, phát triển hàng ngàn Đại lý/Cộng tác viên. Cấu trúc tổ chức phân tầng phức tạp kéo theo dòng chảy tài chính, hàng hóa và nhân sự khổng lồ. Vấn đề cốt lõi lúc này là "Tầm nhìn quản trị" (Visibility) và "Quản trị rủi ro" (Risk Management). Các hệ thống phần mềm rời rạc trước đây bắt đầu xung đột và tạo ra những lỗ hổng thất thoát lớn.',
    diagnostics: [
      {
        title: 'Mù mờ trong bức tranh Tài chính - Vận hành',
        desc: 'Ban Lãnh đạo không có báo cáo Real-time. Số liệu từ phòng Sale, Kho và Kế toán luôn vênh nhau, mất nhiều ngày để đối soát.',
        icon: Building2,
      },
      {
        title: 'Khủng hoảng quản lý Kênh phân phối',
        desc: 'Hệ thống hàng nghìn Cộng tác viên/Đại lý hoạt động thiếu minh bạch. Khó khăn trong việc chia hoa hồng đa tầng, dẫn đến kiện cáo và rời bỏ.',
        icon: Workflow,
      },
      {
        title: 'Xung đột và lấn kênh (Channel Conflict)',
        desc: 'Hiện tượng bán phá giá, tuồn hàng chéo vùng diễn ra phức tạp, đe dọa trực tiếp đến sự tồn vong của hệ thống phân phối.',
        icon: ShieldAlert,
      },
    ],
    strategy: {
      title: 'Chiến lược tháo gỡ (The Pivot)',
      description:
        'Cần một cuộc đại phẫu về Kiến trúc hệ thống thông tin (Enterprise Architecture). Xóa bỏ hoàn toàn các phần mềm đơn lẻ để tiến lên nền tảng Quản trị tổng thể (ERP). Đồng thời số hóa bộ máy vận hành mạng lưới phân phối để tạo ra sự minh bạch tuyệt đối, lấy niềm tin của mạng lưới làm đòn bẩy tăng trưởng.',
      steps: [
        'Triển khai ERP để liên thông dữ liệu Tài chính - Kho bãi - Nhân sự theo thời gian thực.',
        'Xây dựng hệ thống lõi tính toán hoa hồng (Commission Engine) xử lý hàng triệu giao dịch chính xác.',
        'Đẩy mạnh công cụ Tracking định danh luồng hàng hóa từ nhà máy đến tay người dùng cuối.',
      ],
    },
    architecture: [
      {
        product: 'RIC ERP',
        role: 'Nền tảng Quản trị Doanh nghiệp Tổng thể',
        impact:
          'Cấu trúc module linh hoạt. Trái tim của toàn bộ bộ máy, cung cấp Dashboard quản trị 360 độ cho Ban Giám đốc ra quyết định ngay lập tức.',
        image: '/images/solutions/ric-erp.jpg',
      },
      {
        product: 'RIC AFFILIATE',
        role: 'Hệ thống Quản trị Mạng lưới Phân phối',
        impact:
          'Tự động hóa ma trận hoa hồng đa tầng phức tạp. Cung cấp Portal minh bạch cho hàng vạn Cộng tác viên theo dõi doanh số và thu nhập.',
        image: '/images/solutions/ric-affiliate.jpg',
      },
    ],
    metrics: [
      'Hệ thống hóa 100% quy trình liên phòng ban',
      'Báo cáo quản trị thời gian thực (Real-time BI)',
      'Mở rộng không giới hạn mạng lưới CTV',
    ],
  },
}

export default function StageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const stage = stageDetails[slug]

  if (!stage) {
    notFound()
  }

  const StageIcon = stage.icon

  return (
    <main className="min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      {/* Ẩn thanh cuộn */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* ==========================================
          1. HERO SECTION (TƯ VẤN CẤP CAO)
          ========================================== */}
      <section
        className={`relative overflow-hidden bg-linear-to-b ${stage.color.gradient} pt-32 pb-32 text-white md:pt-40`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="mb-16 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-white">
              Ricvina
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Phân tích Giai đoạn</span>
            <ChevronRight className="h-3 w-3" />
            <span className={stage.color.accent}>{stage.id}</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-md">
                <StageIcon className={`h-5 w-5 ${stage.color.accent}`} />
                <span className="text-sm font-bold tracking-widest text-white uppercase">
                  Phân tích chuyên sâu
                </span>
              </div>

              <h1 className="mb-6 text-5xl leading-[1.1] font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                {stage.title.split(': ')[1]}
              </h1>
              <p className={`mb-10 text-2xl font-medium ${stage.color.accent}`}>{stage.subtitle}</p>

              <div className="mb-10 h-1 w-20 rounded-full bg-white/20" />

              <p className="text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
                {stage.overview}
              </p>
            </div>

            <div className="lg:col-span-4 lg:mt-24">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
                  Mục tiêu chuyển đổi số
                </h3>
                <ul className="space-y-5">
                  {stage.metrics.map((metric: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className={`h-6 w-6 shrink-0 ${stage.color.accent}`} />
                      <span className="leading-tight font-semibold text-white">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. CHẨN ĐOÁN DOANH NGHIỆP (DIAGNOSTICS)
          ========================================== */}
      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900">
                Chẩn đoán Nút thắt vận hành
              </h2>
              {/* 🔥 ĐÃ FIX LỖI react/no-unescaped-entities: Dùng &quot; thay cho ngoặc kép thường */}
              <p className="text-lg font-medium text-slate-500">
                Nhận diện chính xác &quot;điểm đau&quot; là bước đầu tiên để kiến trúc lại hệ thống.
                Ở giai đoạn này, hệ thống của bạn thường xuất hiện các triệu chứng sau:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stage.diagnostics.map((diag: Diagnostic, idx: number) => {
              const DiagIcon = diag.icon
              return (
                <div
                  key={idx}
                  className="group rounded-[2rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mb-8 inline-flex rounded-2xl p-4 ${stage.color.bgLight} ${stage.color.accent}`}
                  >
                    <DiagIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-slate-900">{diag.title}</h3>
                  <p className="text-base leading-relaxed font-medium text-slate-600">
                    {diag.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CHIẾN LƯỢC THÁO GỠ & KIẾN TRÚC GIẢI PHÁP
          ========================================== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          {/* Strategy Path */}
          <div className="mb-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-500 uppercase">
                <Lightbulb className="h-4 w-4" /> Định hướng chiến lược
              </div>
              <h2 className="mb-6 text-4xl leading-tight font-black text-slate-900">
                {stage.strategy.title}
              </h2>
              <p className="mb-10 text-lg leading-relaxed font-medium text-slate-600">
                {stage.strategy.description}
              </p>
              <div className="space-y-6 border-l-2 border-slate-100 pl-6">
                {stage.strategy.steps.map((step: string, idx: number) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute top-1 -left-7.75 h-3 w-3 rounded-full border-2 bg-white ${stage.color.accent.replace('text-', 'border-')}`}
                      style={{ borderColor: 'currentColor' }}
                    />
                    <p className="text-lg font-semibold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-[3rem] p-10 lg:p-14 ${stage.color.bgLight} border ${stage.color.border}`}
            >
              <h3 className={`mb-8 text-2xl font-black ${stage.color.accent}`}>
                Nguyên tắc thiết kế hệ thống
              </h3>
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h4 className="mb-2 font-bold text-slate-900">
                    1. Khả năng mở rộng (Scalability)
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    Hệ thống phải chịu tải được sự bùng nổ dữ liệu x10 lần mà không cần đập đi xây
                    lại.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h4 className="mb-2 font-bold text-slate-900">
                    2. Dữ liệu tập trung (Single Source of Truth)
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    Mọi báo cáo, quyết định phải được truy xuất từ một nguồn dữ liệu duy nhất và
                    chính xác.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Mapping */}
          <div className="border-t border-slate-100 pt-24">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900">
                Kiến trúc Hệ sinh thái đề xuất
              </h2>
              <p className="text-lg font-medium text-slate-500">
                Để thực thi chiến lược trên, RICVINA đề xuất tổ hợp các phân hệ phần mềm sau đóng
                vai trò lõi vận hành cho doanh nghiệp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {stage.architecture.map((arch: Architecture, idx: number) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900"
                >
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-20">
                    <Image
                      src={arch.image}
                      alt={arch.product}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex h-full min-h-100 flex-col justify-end bg-linear-to-t from-slate-950 via-slate-900/90 to-transparent p-10">
                    {' '}
                    <span
                      className={`mb-4 w-max rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase backdrop-blur-md ${stage.color.accent}`}
                    >
                      Module {idx + 1}
                    </span>
                    <h3 className="mb-2 text-3xl font-black text-white">{arch.product}</h3>
                    <p className="mb-4 text-lg font-bold text-slate-300">{arch.role}</p>
                    <p className="mb-8 leading-relaxed font-medium text-slate-400">{arch.impact}</p>
                    <Link
                      href={`/products/${arch.product.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center text-sm font-bold text-white hover:text-slate-300"
                    >
                      Nghiên cứu kiến trúc module <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CTA CHUYÊN GIA
          ========================================== */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 text-center md:px-20">
          <div
            className={`mx-auto max-w-4xl rounded-[3rem] bg-linear-to-br p-12 md:p-20 ${stage.color.gradient} relative overflow-hidden shadow-2xl`}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
                Đặt lịch đánh giá Trưởng thành số
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-medium text-slate-300">
                Đội ngũ kiến trúc sư giải pháp của RICVINA sẵn sàng phân tích hệ thống hiện tại và
                thiết kế mô hình quy trình chuẩn (To-Be Model) cho doanh nghiệp của bạn.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-10 py-4 font-bold text-slate-900 shadow-xl transition-all hover:scale-105"
              >
                Gặp gỡ chuyên gia tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
