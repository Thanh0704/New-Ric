'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Target,
  Eye,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  Workflow,
  Network,
} from 'lucide-react'

// ==============================================================================
// 🔥 KHAI BÁO TYPESCRIPT (Trị triệt để lỗi Unexpected any)
// ==============================================================================
type Milestone = {
  year: string
  title: string
  desc: string
}

type CoreValue = {
  title: string
  desc: string
  icon: React.ElementType
}

type Stat = {
  value: string
  label: string
  suffix?: string
}

// ==============================================================================
// 📦 MOCK DATA CẤP ĐỘ DOANH NGHIỆP: CÂU CHUYỆN & GIÁ TRỊ CỐT LÕI (BẢN MỞ RỘNG)
// ==============================================================================
const MILESTONES: Milestone[] = [
  {
    year: '2018',
    title: 'Khởi nguồn & Nhận diện cuộc khủng hoảng "Silo dữ liệu"',
    desc: 'Đội ngũ sáng lập RICVINA bao gồm các chuyên gia kiến trúc hệ thống từng làm việc tại các tập đoàn công nghệ đa quốc gia, đã nhận ra một lỗ hổng chí mạng của thị trường SME Việt Nam. Các doanh nghiệp đang bị mắc kẹt giữa hai thái cực: Sử dụng các phần mềm SaaS rời rạc, rẻ tiền nhưng dẫn đến dữ liệu phân mảnh (Data Silos); hoặc phải gánh chi phí khổng lồ để triển khai ERP ngoại nhập nhưng lại thiếu tính linh hoạt (Agility). Ý tưởng về một Hệ sinh thái All-in-One, chuẩn quốc tế nhưng am hiểu luồng vận hành nội địa chính thức được thai nghén.',
  },
  {
    year: '2020',
    title: 'Bối cảnh đại dịch & Sự ra đời của RIC ECOM',
    desc: 'Đại dịch Covid-19 đóng vai trò như một chất xúc tác buộc các doanh nghiệp phải đẩy nhanh quá trình đưa điểm bán lên môi trường số. RICVINA chớp thời cơ tung ra RIC ECOM - Nền tảng lõi thương mại điện tử kết hợp cùng ZHUB (Trung tâm hội thoại hợp nhất). Hệ thống đã giúp hàng trăm chuỗi bán lẻ đứng vững qua đại dịch nhờ khả năng tự động hóa luồng chốt đơn đa kênh (Omni-channel) và xử lý mượt mà hàng nghìn lượt truy cập đồng thời (High Concurrency) mà không nghẽn mạng.',
  },
  {
    year: '2022',
    title: 'Đại phẫu Kiến trúc: Chuyển dịch lên Microservices & Cloud Native',
    desc: 'Khi tệp khách hàng vượt mốc 200 doanh nghiệp vừa và lớn, bài toán chịu tải (Scalability) trở nên cấp thiết. Đội ngũ R&D của RICVINA quyết định tái cấu trúc toàn bộ mã nguồn monolithic cũ sang mô hình kiến trúc vi dịch vụ (Microservices Architecture), chạy 100% trên nền tảng điện toán đám mây Cloud Native. Cuộc đại phẫu này cho phép các phân hệ hoạt động độc lập, đảm bảo cam kết chất lượng dịch vụ (SLA) với thời gian Uptime lên tới 99.99% ngay cả trong những kỳ Mega Sale bùng nổ traffic.',
  },
  {
    year: '2024',
    title: 'Mở rộng Hệ sinh thái: RIC ERP, Affiliate & Phân hệ chống giả',
    desc: 'Không dừng lại ở thương mại điện tử, RICVINA chính thức hoàn thiện bức tranh quản trị tổng thể bằng việc phát hành RIC ERP (Liên thông Kế toán - Hàng hóa - Nhân sự). Đồng thời, tháo gỡ điểm nghẽn lớn nhất của các nhà sản xuất với giải pháp RIC TRUST (Truy xuất nguồn gốc & Chống giả đa lớp) và RIC AFFILIATE (Xử lý ma trận hoa hồng cho hàng vạn đại lý phân phối). Mọi luồng dữ liệu giờ đây chảy về một nguồn duy nhất (Single Source of Truth).',
  },
  {
    year: '2026 (Hiện tại)',
    title: 'Kỷ nguyên dữ liệu chủ động & Trí tuệ nhân tạo (AI)',
    desc: 'RICVINA 2.0 ra mắt, đánh dấu bước chuyển mình từ một hệ thống "Ghi nhận dữ liệu thụ động" sang "Tư vấn ra quyết định chủ động". Bằng việc tích hợp các mô hình Machine Learning và nền tảng dữ liệu khách hàng (CDP), hệ thống của chúng tôi giờ đây có khả năng vẽ ra chân dung khách hàng 360 độ, dự báo nhu cầu tồn kho và cá nhân hóa trải nghiệm (Hyper-personalization), giúp Ban Lãnh đạo tối ưu hóa chỉ số ROI và LTV (Giá trị vòng đời khách hàng).',
  },
]

const CORE_VALUES: CoreValue[] = [
  {
    title: 'Bảo mật Zero Trust & Toàn vẹn Dữ liệu',
    desc: 'Trong kỷ nguyên số, dữ liệu là sinh mệnh. Chúng tôi áp dụng triết lý bảo mật &quot;Zero Trust&quot; (Không tin tưởng bất kỳ ai). Mọi luồng truy xuất dữ liệu trong hệ thống RICVINA đều được mã hóa End-to-End, sao lưu thời gian thực, đáp ứng các tiêu chuẩn khắt khe nhất như ISO/IEC 27001 và GDPR.',
    icon: ShieldCheck,
  },
  {
    title: 'Kiến trúc linh hoạt (API-First & Scalability)',
    desc: 'Một hệ thống tốt không được phép trở thành vật cản khi doanh nghiệp muốn mở rộng quy mô x10, x100 lần. Với phương pháp thiết kế API-First và kiến trúc Microservices, RICVINA cho phép doanh nghiệp dễ dàng đấu nối với các phần mềm bên thứ 3 (ERP toàn cầu, CRM, HRM) mà không phá vỡ lõi vận hành.',
    icon: Network,
  },
  {
    title: 'Lấy tăng trưởng (ROI) làm hệ quy chiếu',
    desc: 'Chúng tôi từ chối việc &quot;bán phần mềm rồi bỏ mặc&quot;. Định vị của RICVINA là một đối tác chiến lược. Thành công của sản phẩm không đo bằng số lượng tính năng, mà được đo đếm bằng những chỉ số thực tế: Giảm bao nhiêu % chi phí nhân sự? Tăng bao nhiêu % tỷ lệ chuyển đổi? Tối ưu luồng tiền như thế nào?',
    icon: TrendingUp,
  },
  {
    title: 'Quy trình chuẩn hóa (SOP-Driven)',
    desc: 'Công nghệ chỉ là công cụ, quy trình mới là cốt lõi. Mọi phân hệ của RICVINA đều được xây dựng dựa trên sự đúc kết từ hàng trăm bộ SOP (Quy trình chuẩn hoạt động) của các tập đoàn hàng đầu. Phần mềm của chúng tôi giúp doanh nghiệp ép vào khuôn khổ kỷ luật, giảm thiểu tối đa rủi ro từ yếu tố con người.',
    icon: Workflow,
  },
]

const STATS: Stat[] = [
  { value: '500', suffix: '+', label: 'Tập đoàn & SME tin dùng' },
  { value: '15', suffix: '+', label: 'Module chuyên sâu' },
  { value: '99.99', suffix: '%', label: 'Cam kết Uptime SLA' },
  { value: '50', suffix: 'M+', label: 'Request xử lý mỗi ngày' },
]

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-cyan-500/30 selection:text-slate-900">
      {/* ==========================================
          1. HERO SECTION (Tối màu, cảm hứng vĩ mô)
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 right-0 h-150 w-150 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-150 w-150 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Trang chủ
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="#" className="transition-colors hover:text-cyan-400">
              Về RIC
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-400">Câu chuyện của chúng tôi</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-md">
              <Award className="h-4 w-4" /> Báo cáo Năng lực & Tầm nhìn
            </div>

            <h1 className="mb-8 text-4xl leading-tight font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Kiến tạo{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hạ tầng số lõi
              </span>{' '}
              <br className="hidden md:block" />
              cho doanh nghiệp Việt.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              RICVINA ra đời với một sứ mệnh duy nhất: Xóa bỏ rào cản công nghệ, cung cấp hệ sinh
              thái quản trị toàn diện, giúp doanh nghiệp bứt phá khỏi sự cồng kềnh, phân mảnh để vận
              hành tinh gọn và ra quyết định dựa trên dữ liệu (Data-driven).
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. STATS (Con số biết nói)
          ========================================== */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl md:grid-cols-4 md:gap-8 md:p-12">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="border-r border-slate-100 text-center last:border-0 last:pr-0 md:text-left"
              >
                <div className="mb-2 text-4xl font-black text-slate-900 md:text-5xl">
                  {stat.value}
                  <span className="text-cyan-600">{stat.suffix}</span>
                </div>
                <p className="text-[11px] font-bold tracking-wide text-slate-500 uppercase md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SỨ MỆNH & TẦM NHÌN (Mission & Vision)
          ========================================== */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-10 md:p-14">
              <div className="pointer-events-none absolute top-0 right-0 h-100 w-100 translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Target className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="mb-6 text-3xl font-black text-white">Sứ mệnh (Mission)</h2>
                <p className="text-lg leading-relaxed font-medium text-slate-300">
                  Trở thành &quot;Bộ não điều phối&quot; (Digital Core) vững chắc cho mọi hoạt động
                  kinh doanh. Chúng tôi cung cấp các công cụ quản trị tinh gọn, tự động hóa luồng
                  quy trình phức tạp và biến dữ liệu thô thành các báo cáo trí tuệ kinh doanh
                  (Business Intelligence) phục vụ Ban điều hành.
                </p>
              </div>
            </div>

            <div className="rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl md:p-14">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="mb-6 text-3xl font-black text-slate-900">Tầm nhìn (Vision)</h2>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                Đến năm 2030, RICVINA định hướng trở thành Hệ sinh thái nền tảng SaaS/ERP B2B số 1
                tại khu vực Đông Nam Á. Chúng tôi tiên phong trong việc chuẩn hóa kiến trúc dữ liệu,
                mang những công nghệ tinh hoa nhất của thế giới đóng gói vào các giải pháp dễ triển
                khai nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. GIÁ TRỊ CỐT LÕI (Core Values)
          ========================================== */}
      <section className="border-t border-slate-200 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-5xl">
              Giá trị Kiến trúc & Vận hành
            </h2>
            <p className="text-lg leading-relaxed font-medium text-slate-500">
              Đây không chỉ là những khẩu hiệu marketing. Đây là hệ quy chiếu nghiêm ngặt cho mọi
              dòng code chúng tôi viết ra và mọi bản vẽ kiến trúc giải pháp chúng tôi tư vấn cho đối
              tác.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-start gap-8 rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl md:flex-row md:p-10"
                >
                  <div className="inline-flex shrink-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-colors group-hover:border-cyan-100 group-hover:bg-cyan-50">
                    <Icon className="h-10 w-10 text-slate-700 group-hover:text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="mb-4 text-2xl leading-snug font-black text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-base leading-relaxed font-medium text-slate-600">
                      {value.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. LỊCH SỬ PHÁT TRIỂN (Timeline)
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="mb-20 md:flex md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-black md:text-5xl">
                Lộ trình kiến tạo hệ sinh thái
              </h2>
              <p className="text-lg leading-relaxed font-medium text-slate-400">
                Quá trình chuyển đổi từ một công cụ đơn lẻ thành một nền tảng vận hành lõi (Core
                Engine). Sự tiến hóa của RICVINA luôn bám sát và đi trước những điểm đứt gãy của thị
                trường.
              </p>
            </div>
            <div className="mt-8 hidden md:mt-0 md:block">
              <TrendingUp className="h-20 w-20 text-cyan-500/20" />
            </div>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative ml-4 space-y-20 border-l-2 border-slate-800 pl-8 md:ml-8 md:pl-16">
            {MILESTONES.map((stone, idx) => (
              <div key={idx} className="group relative">
                {/* Timeline Dot */}
                <div className="absolute top-1 -left-10.25 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-transform group-hover:scale-125 md:-left-18.25" />
                <span className="mb-3 block text-xl font-black tracking-wider text-cyan-400">
                  {stone.year}
                </span>
                <h3 className="mb-5 text-2xl leading-tight font-black text-white md:text-3xl">
                  {stone.title}
                </h3>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                  <p className="max-w-4xl text-lg leading-relaxed font-medium text-slate-300">
                    {stone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. CTA CHIẾN LƯỢC
          ========================================== */}
      <section className="relative overflow-hidden bg-cyan-600 py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 text-center md:px-20">
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            Đã đến lúc nâng cấp kiến trúc hệ thống của bạn?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-cyan-100">
            Hàng trăm tập đoàn và chuỗi phân phối đã bứt phá nhờ chuyển đổi số với nền tảng lõi đúng
            đắn. Hãy để chúng tôi đồng hành cùng sự tăng trưởng của bạn.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-slate-800"
          >
            Trò chuyện với Kiến trúc sư R&D <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
