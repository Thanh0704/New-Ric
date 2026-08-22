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
} from 'lucide-react'

// ----------------------------------------------------------------------
// DATA SẢN PHẨM RICVINA THỰC TẾ
// ----------------------------------------------------------------------
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

// TÁCH PHẦN NỘI DUNG CHÍNH RA MỘT COMPONENT RIÊNG ĐỂ DÙNG useSearchParams
function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')

  const [activeCategory, setActiveCategory] = useState('all')

  // Đọc URL khi trang vừa load xong và tự động cuộn trang
  useEffect(() => {
    if (categoryFromUrl) {
      // Kiểm tra xem mã trên URL có khớp với danh mục nào không, nếu có thì tự động nhảy tab
      const isValidCategory = productCategories.some(cat => cat.id === categoryFromUrl)
      if (isValidCategory) {
        setActiveCategory(categoryFromUrl)
        
        // Tự động cuộn mượt mà xuống khối "solutions"
        setTimeout(() => {
          const solutionSection = document.getElementById('solutions')
          if (solutionSection) {
            solutionSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 300) // Đợi 300ms để Next.js render xong
      }
    }
  }, [categoryFromUrl])

  const filteredProducts =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  const colorMap: Record<string, any> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', accent: 'bg-blue-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', accent: 'bg-cyan-600' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', accent: 'bg-indigo-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', accent: 'bg-emerald-600' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', accent: 'bg-violet-600' },
    slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', accent: 'bg-slate-700' },
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      {/* 1. BREADCRUMB */}
      <div className="relative z-20 border-b border-slate-200 bg-white pt-8 pb-4">
        <div className="container mx-auto px-6 text-sm font-medium text-slate-500 md:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-slate-900">Sản phẩm & Giải pháp</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)] bg-[size:60px_60px]" />
        <div className="pointer-events-none absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-100/60 blur-[120px]" />

        <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center md:px-20">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold tracking-widest text-slate-600 uppercase shadow-sm transition-transform hover:scale-105">
            <Sparkles className="h-4 w-4 text-blue-600" /> Hệ sinh thái chuẩn mực
          </div>
          <h1 className="mb-8 text-5xl leading-[1.05] font-black tracking-tight text-slate-900 md:text-7xl lg:text-[5.5rem]">
            Chuyển đổi số <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              toàn diện & sâu sắc.
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-medium text-slate-500 md:text-2xl">
            Phá vỡ ranh giới dữ liệu, tự động hóa luồng công việc và kiến tạo lợi thế cạnh tranh
            tuyệt đối với bộ giải pháp công nghệ từ Ricvina.
          </p>
        </div>
      </section>

      {/* 3. INFINITE LOGO MARQUEE */}
      <section className="overflow-hidden border-b border-slate-100 bg-slate-50 py-8">
        <div className="container mx-auto mb-6 px-6 text-center md:px-20">
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
            Tích hợp sẵn sàng với các nền tảng hàng đầu
          </p>
        </div>
        <div className="group relative flex w-full overflow-x-hidden">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="animate-marquee items-center gap-16 pl-16 whitespace-nowrap md:gap-24 md:pl-24">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 text-slate-400 md:gap-24">
                <span className="flex items-center gap-2 text-2xl font-black md:text-3xl">
                  <CreditCard className="h-8 w-8" /> VNPAY
                </span>
                <span className="flex items-center gap-2 text-2xl font-black md:text-3xl">
                  <Globe className="h-8 w-8" /> SHOPEE
                </span>
                <span className="flex items-center gap-2 text-2xl font-black md:text-3xl">
                  <Server className="h-8 w-8" /> AWS CLOUD
                </span>
                <span className="flex items-center gap-2 text-2xl font-black md:text-3xl">
                  <Truck className="h-8 w-8" /> GHTK
                </span>
                <span className="flex items-center gap-2 text-2xl font-black md:text-3xl">
                  <Code2 className="h-8 w-8" /> MISA API
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN PRODUCTS SECTION */}
      <section id="solutions" className="relative z-10 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Hệ sinh thái Ricvina
            </h2>
            <p className="max-w-2xl text-xl font-medium text-slate-500">
              Mọi bài toán vận hành phức tạp nhất của doanh nghiệp đều được giải quyết trên một nền
              tảng duy nhất.
            </p>
          </div>

          <div className="no-scrollbar -mx-6 mb-12 flex gap-2 overflow-x-auto px-6 pb-4 md:-mx-4 md:px-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`m-1 shrink-0 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'scale-105 bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const theme = colorMap[product.color]
              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm transition-all duration-500 hover:border-slate-300 hover:shadow-xl"
                >
                  <div className="relative h-[240px] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${product.comingSoon ? 'opacity-80 grayscale-[60%] group-hover:opacity-100 group-hover:grayscale-0' : ''}`}
                    />
                    <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-transparent" />

                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-900 uppercase shadow-lg backdrop-blur-md">
                      <div className={`h-1.5 w-1.5 rounded-full ${theme.accent} animate-pulse`} />
                      {productCategories.find((c) => c.id === product.category)?.label}
                    </div>

                    {product.comingSoon && (
                      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400 bg-amber-500 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg">
                        <Clock className="animate-spin-slow h-3 w-3" />
                        Sắp ra mắt
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-start gap-4">
                      <div className={`shrink-0 rounded-xl p-3 ${theme.bg} ${theme.text}`}>
                        <product.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-slate-900">
                          {product.name}
                        </h3>
                        <p className={`mt-1 text-sm font-bold ${theme.text}`}>{product.tagline}</p>
                      </div>
                    </div>

                    <p className="mb-6 line-clamp-3 text-base leading-relaxed font-medium text-slate-600">
                      {product.desc}
                    </p>

                    <div className="mt-auto mb-8 grid grid-cols-1 gap-3">
                      {product.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                        >
                          <CheckCircle2 className={`h-4 w-4 shrink-0 ${theme.text}`} />
                          <span className="text-xs font-semibold text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                      {product.comingSoon ? (
                        <>
                          <Link
                            href={`/contact?interest=${product.id}`}
                            className="text-sm font-bold text-amber-600 decoration-amber-300 decoration-2 underline-offset-4 hover:underline"
                          >
                            Đăng ký nhận tin
                          </Link>
                          <Link
                            href={`/contact?interest=${product.id}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white transition-all hover:scale-110 hover:bg-amber-600 hover:shadow-lg"
                          >
                            <Clock className="h-4 w-4" />
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href={`/products/${product.id}`}
                            className="text-sm font-bold text-slate-900 decoration-slate-300 decoration-2 underline-offset-4 hover:underline"
                          >
                            Khám phá chi tiết
                          </Link>
                          <Link
                            href={`/products/${product.id}`}
                            className="group/btn flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:scale-110 hover:bg-blue-600 hover:shadow-lg"
                          >
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center text-slate-400">
              <Search className="mx-auto mb-6 h-16 w-16 opacity-20" />
              <p className="text-xl font-medium">
                Đang cập nhật thêm giải pháp trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. KHỐI CẮT CẢNH NỀN TỐI */}
      <section className="relative mt-12 overflow-hidden bg-slate-950 py-32 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-600/20 to-transparent blur-[100px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-xs font-bold tracking-widest text-slate-300 uppercase">
                <Command className="h-4 w-4 text-cyan-400" /> Sức mạnh cốt lõi
              </div>
              <h2 className="text-4xl leading-tight font-black tracking-tight md:text-6xl">
                Kiến trúc mở rông. <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Tích hợp không giới hạn.
                </span>
              </h2>
              <p className="text-xl leading-relaxed font-medium text-slate-400">
                Sản phẩm của Ricvina được xây dựng trên nền tảng vi dịch vụ (Microservices), sẵn
                sàng kết nối luồng dữ liệu thời gian thực thông qua hệ thống Open API mạnh mẽ.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-2 border-slate-800 pl-6">
                  <div className="mb-2 text-3xl font-black text-white">99.9%</div>
                  <p className="font-medium text-slate-400">Uptime hệ thống</p>
                </div>
                <div className="border-l-2 border-slate-800 pl-6">
                  <div className="mb-2 text-3xl font-black text-white">&lt; 50ms</div>
                  <p className="font-medium text-slate-400">Độ trễ truy vấn API</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex aspect-[4/3] w-full flex-col overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-4 font-mono text-xs text-slate-500">
                    ricvina_api_config.json
                  </span>
                </div>
                <div className="font-mono text-sm leading-loose text-slate-300">
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">RicvinaAPI</span> ={' '}
                    <span className="text-yellow-300">new</span>{' '}
                    <span className="text-emerald-400">SystemCore</span>({`{`}
                  </p>
                  <p className="pl-6">
                    <span className="text-slate-400">auth:</span>{' '}
                    <span className="text-orange-300">'OAuth2.0'</span>,
                  </p>
                  <p className="pl-6">
                    <span className="text-slate-400">encryption:</span>{' '}
                    <span className="text-orange-300">'AES-256-GCM'</span>,
                  </p>
                  <p className="pl-6">
                    <span className="text-slate-400">endpoints:</span> [{` `}
                  </p>
                  <p className="pl-12">
                    <span className="text-orange-300">'/api/v1/erp/sync'</span>,
                  </p>
                  <p className="pl-12">
                    <span className="text-orange-300">'/api/v1/pos/transactions'</span>
                  </p>
                  <p className="pl-6">]</p>
                  <p>{`});`}</p>
                  <br />
                  <p className="text-slate-500">{'// Tích hợp thanh toán & Vận chuyển'}</p>
                  <p>
                    <span className="text-blue-400">await</span> RicvinaAPI.
                    <span className="text-emerald-400">connectPartners</span>({`['VNPAY', 'GHTK']`}
                    );
                  </p>
                  <p className="mt-4 text-green-400">
                    {'>>'} Connection established successfully. Status: 200 OK
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 animate-bounce rounded-[2rem] border border-blue-500 bg-blue-600 p-6 shadow-[0_20px_50px_rgba(37,99,235,0.5)]">
                <Database className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-8 -right-8 animate-pulse rounded-[2rem] border border-cyan-400 bg-cyan-500 p-6 shadow-[0_20px_50px_rgba(6,182,212,0.5)]">
                <Cloud className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="relative container mx-auto bg-white px-6 py-32 md:px-20">
        <div className="relative overflow-hidden rounded-[4rem] border border-slate-200 bg-slate-50 px-8 py-24 text-center shadow-2xl md:px-16 md:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] bg-[size:40px_40px]" />

          <div className="relative z-10 mb-8 inline-flex h-24 w-24 rotate-12 items-center justify-center rounded-[2rem] bg-blue-600 text-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] transition-transform hover:rotate-0">
            <Rocket className="h-12 w-12" />
          </div>

          <h2 className="relative z-10 mx-auto mb-6 max-w-3xl text-4xl leading-tight font-black text-slate-900 md:text-6xl">
            Sẵn sàng nâng cấp <br /> hệ thống vận hành?
          </h2>
          <p className="relative z-10 mx-auto mb-12 max-w-2xl text-xl font-medium text-slate-600">
            Để lại thông tin, đội ngũ kỹ sư của chúng tôi sẽ phân tích và thiết lập một hệ thống
            demo phù hợp nhất với mô hình của bạn.
          </p>

          <div className="relative z-10 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center rounded-full border-2 border-slate-900 bg-white p-1.5 transition-colors"
            >
              <div className="pointer-events-none absolute inset-1.5 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full w-12 rounded-full bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
              </div>

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-white">
                <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0" />
              </div>

              <span className="relative z-10 pr-6 pl-3 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                Yêu cầu Demo 1:1
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// COMPONENT CHÍNH EXPORT RA ĐƯỢC BỌC TRONG SUSPENSE (Chuẩn Next.js 13+)
export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  )
}