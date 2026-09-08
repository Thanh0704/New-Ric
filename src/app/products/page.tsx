'use client'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  Cloud,
  ShieldCheck,
  Database,
  Users,
  ShoppingCart,
  Briefcase,
  ChevronRight,
  Globe,
  Search,
  CreditCard,
  Truck,
  Code2,
  Server,
  Command,
  Sparkles,
  Rocket,
  Megaphone,
  MessageCircle,
  Clock,
  Terminal,
} from 'lucide-react'

// --- DATA SẢN PHẨM GIỮ NGUYÊN ---
const productCategories = [
  { id: 'all', label: 'Tất cả Giải pháp' },
  { id: 'sales', label: 'Bán hàng & Thương mại' },
  { id: 'marketing', label: 'Marketing & Tương tác' },
  { id: 'management', label: 'Quản trị chuyên ngành' },
  { id: 'security', label: 'Bảo vệ thương hiệu' },
]

const products = [
  {
    id: 'ecom',
    category: 'sales',
    name: 'ECOM',
    tagline: 'Bán hàng & thương mại điện tử',
    desc: 'Nền tảng bán hàng và thương mại điện tử toàn diện, giúp tối ưu hóa quy trình kinh doanh và tăng trưởng doanh thu vượt bậc.',
    icon: ShoppingCart,
    image: '/images/solutions/ecom.jpg',
    color: 'blue',
    comingSoon: false,
    features: [
      'Quản lý bán hàng đa kênh',
      'Tích hợp vận chuyển & thanh toán',
      'Quản lý kho hàng tự động',
      'Báo cáo doanh thu thời gian thực',
    ],
  },
  {
    id: 'ric-affiliate',
    category: 'sales',
    name: 'RIC AFFILIATE',
    tagline: 'Mạng lưới bán hàng & cộng tác viên',
    desc: 'Hệ thống quản lý Affiliate mạnh mẽ, giúp doanh nghiệp dễ dàng mở rộng và kiểm soát mạng lưới hàng ngàn cộng tác viên.',
    icon: Users,
    image: '/images/solutions/ric-affiliate.jpg',
    color: 'emerald',
    comingSoon: false,
    features: [
      'Tính hoa hồng tự động',
      'Cổng Portal riêng cho CTV',
      'Theo dõi Link Affiliate',
      'Quản lý cấp bậc & thưởng',
    ],
  },
  {
    id: 'ric-message',
    category: 'marketing',
    name: 'RIC MESSAGE MARKETING',
    tagline: 'Marketing Automation / Customer Engagement',
    desc: 'Tự động hóa các chiến dịch Marketing và CSKH qua tin nhắn, cá nhân hóa trải nghiệm để giữ chân khách hàng lâu dài.',
    icon: Megaphone,
    image: '/images/solutions/ric-message.jpg',
    color: 'cyan',
    comingSoon: false,
    features: [
      'Kịch bản tự động hóa',
      'Gửi SMS & Zalo ZNS hàng loạt',
      'Phân tập khách hàng chi tiết',
      'Thống kê chiến dịch trực quan',
    ],
  },
  {
    id: 'ric-trust',
    category: 'security',
    name: 'RIC TRUST',
    tagline: 'Chống hàng giả + chống bán lấn kênh',
    desc: 'Bảo vệ uy tín thương hiệu tuyệt đối với hệ thống mã hóa QR chống giả và cảnh báo kịp thời các hành vi bán phá giá, lấn kênh.',
    icon: ShieldCheck,
    image: '/images/solutions/ric-trust.jpg',
    color: 'violet',
    comingSoon: false,
    features: [
      'Tem QR Code động định danh',
      'Truy xuất nguồn gốc sản phẩm',
      'Hệ thống cảnh báo lấn kênh',
      'App quét mã cho người dùng',
    ],
  },
  {
    id: 'ricio',
    category: 'management',
    name: 'RICIO',
    tagline: 'CRM + PMS cho Villa/Hotel/Resort',
    desc: 'Giải pháp chuyển đổi số chuyên biệt cho ngành lưu trú. Quản lý đặt phòng, chăm sóc khách hàng và vận hành buồng phòng tập trung.',
    icon: Briefcase,
    image: '/images/solutions/ricio.jpg',
    color: 'indigo',
    comingSoon: false,
    features: [
      'Sơ đồ phòng (PMS) trực quan',
      'Lưu trữ thông tin khách hàng (CRM)',
      'Quản lý dọn phòng/bảo trì',
      'Tích hợp kênh OTA',
    ],
  },
  {
    id: 'zhub',
    category: 'marketing',
    name: 'ZHUB',
    tagline: 'Unified Chat / Conversation Hub',
    desc: 'Nền tảng giao tiếp hợp nhất, gom toàn bộ tin nhắn từ Fanpage, Zalo, Website về một màn hình duy nhất để xử lý siêu tốc.',
    icon: MessageCircle,
    image: '/images/solutions/zhub.jpg',
    color: 'slate',
    comingSoon: true,
    features: [
      'Hộp thư hợp nhất (Omnichannel)',
      'Tự động phân bổ hội thoại',
      'Tích hợp Chatbot AI',
      'Gắn tag & phân loại khách hàng',
    ],
  },
  {
    id: 'ric-erp',
    category: 'management',
    name: 'RIC ERP',
    tagline: 'KDL Quản trị doanh nghiệp theo module',
    desc: 'Hệ thống quản trị doanh nghiệp toàn diện. Lắp ghép các module linh hoạt theo đúng nhu cầu và quy mô phát triển của từng công ty.',
    icon: LayoutGrid,
    image: '/images/solutions/ric-erp.jpg',
    color: 'slate',
    comingSoon: true,
    features: [
      'Kế toán - Tài chính',
      'Quản trị nhân sự (HRM)',
      'Quản trị chuỗi cung ứng (SCM)',
      'Báo cáo quản trị (BI)',
    ],
  },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    if (categoryFromUrl) {
      const isValidCategory = productCategories.some((cat) => cat.id === categoryFromUrl)
      if (isValidCategory) {
        setActiveCategory(categoryFromUrl)
        setTimeout(() => {
          document
            .getElementById('solutions')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [categoryFromUrl])

  const filteredProducts =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen selection:bg-cyan-500/30">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* PHẦN 1: HERO & MARQUEE */}
      <div className="relative overflow-hidden bg-[#060913] text-slate-200">
        <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-blue-900/20 blur-[150px]" />
        <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-900/15 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] bg-[size:64px_64px]" />

        <div className="relative z-20 border-b border-white/5 pt-8 pb-4">
          <div className="container mx-auto px-6 text-xs font-medium tracking-wide text-slate-500 uppercase md:px-20">
            <div className="flex items-center gap-2">
              <Link href="/" className="transition-colors hover:text-cyan-400">
                Trang chủ
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-300">Sản phẩm & Giải pháp</span>
            </div>
          </div>
        </div>

        <section className="relative z-10 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="container mx-auto max-w-5xl px-6 text-center md:px-20">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-bold tracking-widest text-cyan-400 uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Sparkles className="h-4 w-4" /> Hệ sinh thái chuẩn mực
            </div>
            <h1 className="mb-8 text-5xl leading-tight font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              Định hình lại <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                tương lai doanh nghiệp.
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              Xóa bỏ mọi rào cản dữ liệu. Tự động hóa quy trình. Kiến tạo lợi thế cạnh tranh tuyệt
              đối với các giải pháp phần mềm kiến trúc mở từ Ricvina.
            </p>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/5 bg-white/[0.02] py-8 backdrop-blur-md">
          <div className="container mx-auto mb-6 px-6 text-center md:px-20">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Mở rộng không giới hạn với các đối tác công nghệ
            </p>
          </div>
          <div className="group relative flex w-full overflow-x-hidden opacity-60 transition-opacity duration-500 hover:opacity-100">
            <div className="absolute top-0 bottom-0 left-0 z-10 w-40 bg-gradient-to-r from-[#060913] to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 z-10 w-40 bg-gradient-to-l from-[#060913] to-transparent" />
            <div className="animate-marquee items-center gap-20 pl-20 whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-20 text-slate-400">
                  <span className="flex items-center gap-3 text-2xl font-black tracking-tighter">
                    <CreditCard className="h-8 w-8" /> VNPAY
                  </span>
                  <span className="flex items-center gap-3 text-2xl font-black tracking-tighter">
                    <Globe className="h-8 w-8" /> SHOPEE
                  </span>
                  <span className="flex items-center gap-3 text-2xl font-black tracking-tighter">
                    <Server className="h-8 w-8" /> AWS CLOUD
                  </span>
                  <span className="flex items-center gap-3 text-2xl font-black tracking-tighter">
                    <Truck className="h-8 w-8" /> GHTK
                  </span>
                  <span className="flex items-center gap-3 text-2xl font-black tracking-tighter">
                    <Code2 className="h-8 w-8" /> MISA API
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PHẦN 2: MAIN PRODUCTS */}
      <section id="solutions" className="relative z-10 bg-slate-50 py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-20">
          {/* =========================================================
              ĐÃ SỬA: Cấu trúc xếp dọc (flex-col) vĩnh viễn. 
              Tiêu đề ở trên, khối nút Lọc ở dưới kéo dài tự do.
              ========================================================= */}
          <div className="mb-10 flex flex-col md:mb-16">
            <div className="mb-6 max-w-3xl px-2 md:px-0">
              <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 md:mb-4 md:text-5xl">
                Khám phá Giải pháp
              </h2>
              <p className="text-[15px] font-medium text-slate-600 md:text-lg">
                Lựa chọn module phù hợp để giải quyết triệt để bài toán vận hành của bạn.
              </p>
            </div>

            {/* Thanh lọc dàn hàng ngang bên dưới */}
            <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:snap-none md:flex-wrap md:overflow-visible md:px-0">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 snap-start rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${
                    activeCategory === cat.id
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-cyan-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/10 md:rounded-3xl"
              >
                {/* ẢNH & BADGES */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-100 md:h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.comingSoon ? 'opacity-50 grayscale' : ''}`}
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[9px] font-bold tracking-widest text-slate-900 uppercase shadow-sm backdrop-blur-md md:top-5 md:left-5 md:gap-2 md:px-3 md:py-1.5 md:text-[10px]">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                    {productCategories.find((c) => c.id === product.category)?.label}
                  </div>
                  {product.comingSoon && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[9px] font-bold tracking-widest text-amber-600 uppercase shadow-sm md:top-5 md:right-5 md:gap-1.5 md:px-3 md:py-1.5 md:text-[10px]">
                      <Clock className="animate-spin-slow h-2.5 w-2.5 md:h-3 md:w-3" /> Sắp ra mắt
                    </div>
                  )}
                </div>

                {/* TEXT & PADDING */}
                <div className="flex flex-1 flex-col p-5 pt-4 md:p-8 md:pt-6">
                  <div className="mb-3 flex items-center gap-3 md:mb-5 md:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-100 md:h-12 md:w-12 md:rounded-2xl">
                      <product.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg leading-tight font-black text-slate-900 md:text-xl">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-bold tracking-wider text-cyan-600 uppercase md:text-xs">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Ẩn bớt text description trên Mobile */}
                  <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed font-medium text-slate-600 md:mb-8 md:line-clamp-none md:text-sm">
                    {product.desc}
                  </p>

                  <ul className="mt-auto mb-5 space-y-2 md:mb-8 md:space-y-3">
                    {product.features.map((feat, i) => (
                      <li
                        key={i}
                        // Ẩn 2 tính năng dưới cùng trên Mobile
                        className={`flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2 md:gap-3 md:rounded-xl md:p-2.5 ${i >= 2 ? 'hidden md:flex' : ''}`}
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500 md:h-4 md:w-4" />
                        <span className="text-[12px] font-semibold text-slate-700 md:text-sm">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-slate-100 pt-4 md:pt-6">
                    {product.comingSoon ? (
                      <Link
                        href={`/contact?interest=${product.id}`}
                        className="group/btn flex w-full items-center justify-between rounded-xl bg-amber-50 px-3 py-2.5 text-[13px] font-bold text-amber-600 transition-colors hover:bg-amber-500 hover:text-white md:px-4 md:py-3 md:text-sm"
                      >
                        <span>Đăng ký nhận tin</span>
                        <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Link>
                    ) : (
                      <Link
                        href={`/products/${product.id}`}
                        className="group/btn flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5 text-[13px] font-bold text-slate-900 transition-all hover:bg-cyan-600 hover:text-white hover:shadow-lg hover:shadow-cyan-600/30 md:px-4 md:py-3 md:text-sm"
                      >
                        <span>Khám phá chi tiết</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 md:h-4 md:w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-slate-400" />
              <p className="font-medium text-slate-600">
                Chưa có giải pháp nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PHẦN 3 & 4 */}
      <section className="relative z-10 bg-[#080C17] py-24 text-slate-200 lg:py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase">
                <Terminal className="h-4 w-4" /> Dành cho Developer
              </div>
              <h2 className="mt-6 mb-6 text-4xl leading-tight font-black tracking-tight text-white md:text-5xl">
                Kiến trúc Microservices.
                <br />
                Tích hợp chỉ với <span className="text-cyan-400">vài dòng code.</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed font-medium text-slate-400">
                Mở khóa toàn bộ sức mạnh của hệ sinh thái Ricvina thông qua Open API. Tài liệu rõ
                ràng, SDK mạnh mẽ, tích hợp ngay lập tức vào hạ tầng hiện tại của bạn.
              </p>

              <div className="flex gap-8">
                <div>
                  <div className="mb-1 text-3xl font-black text-white">99.9%</div>
                  <p className="text-sm font-medium text-slate-500">Uptime SLA</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="mb-1 text-3xl font-black text-white">&lt;50ms</div>
                  <p className="text-sm font-medium text-slate-500">Độ trễ API</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl border border-slate-800 bg-[#0D1117] shadow-2xl shadow-cyan-900/20">
              <div className="flex items-center gap-2 rounded-t-2xl border-b border-slate-800 bg-[#161B22] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-xs font-medium text-slate-500">
                  ricvina-integration.ts
                </span>
              </div>
              <div className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-slate-300">
                <p>
                  <span className="text-[#FF7B72]">import</span> {`{ RicvinaCore }`}{' '}
                  <span className="text-[#FF7B72]">from</span>{' '}
                  <span className="text-[#A5D6FF]">'@ricvina/sdk'</span>;
                </p>
                <br />
                <p>
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#79C0FF]">api</span> ={' '}
                  <span className="text-[#FF7B72]">new</span>{' '}
                  <span className="text-[#D2A8FF]">RicvinaCore</span>({`{`}
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">apiKey</span>: process.env.
                  <span className="text-[#79C0FF]">RICVINA_API_KEY</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">environment</span>:{' '}
                  <span className="text-[#A5D6FF]">'production'</span>
                </p>
                <p>{`});`}</p>
                <br />
                <p>
                  <span className="text-[#8B949E]">
                    // Đồng bộ dữ liệu bán hàng đa kênh tự động
                  </span>
                </p>
                <p>
                  <span className="text-[#FF7B72]">await</span> api.
                  <span className="text-[#79C0FF]">erp</span>.
                  <span className="text-[#D2A8FF]">syncOrders</span>({`{`}
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">channels</span>: [
                  <span className="text-[#A5D6FF]">'shopee'</span>,{' '}
                  <span className="text-[#A5D6FF]">'tiktok'</span>,{' '}
                  <span className="text-[#A5D6FF]">'website'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">autoFulfill</span>:{' '}
                  <span className="text-[#79C0FF]">true</span>
                </p>
                <p>{`});`}</p>
                <br />
                <p>
                  <span className="text-[#79C0FF]">console</span>.
                  <span className="text-[#D2A8FF]">log</span>(
                  <span className="text-[#A5D6FF]">'🚀 Systems are perfectly synced!'</span>);
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-8 py-20 text-center shadow-xl md:px-16 md:py-24">
            <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100 blur-[80px]" />

            <h2 className="relative z-10 mx-auto mb-4 max-w-2xl text-4xl leading-tight font-black text-slate-900 md:text-5xl">
              Sẵn sàng chuyển đổi số cùng Ricvina?
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg font-medium text-slate-600">
              Trải nghiệm hệ sinh thái phần mềm cao cấp, được may đo riêng cho mô hình kinh doanh
              của bạn.
            </p>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-600/30"
            >
              Yêu cầu bản Demo 1:1 <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ProductsContent />
    </Suspense>
  )
}
