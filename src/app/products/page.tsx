'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  LayoutGrid,
  ShieldCheck,
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
  Sparkles,
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
    name: 'RIC ECOM',
    tagline: 'NỀN TẢNG TMĐT',
    desc: 'Hệ thống bán hàng đa kênh đồng bộ, bứt phá doanh thu với trải nghiệm mượt mà.',
    icon: ShoppingCart,
    image: '/images/solutions/ecom.jpg',
    color: 'blue',
    comingSoon: false,
  },
  {
    id: 'ric-affiliate',
    category: 'sales',
    name: 'RIC AFFILIATE',
    tagline: 'MẠNG LƯỚI BÁN HÀNG',
    desc: 'Hệ thống quản lý Affiliate mạnh mẽ, mở rộng và kiểm soát hàng ngàn cộng tác viên.',
    icon: Users,
    image: '/images/solutions/ric-affiliate.jpg',
    color: 'emerald',
    comingSoon: false,
  },
  {
    id: 'ric-message',
    category: 'marketing',
    name: 'RIC MESSAGE',
    tagline: 'MARKETING AUTOMATION',
    desc: 'Tự động hóa chiến dịch CSKH qua tin nhắn, cá nhân hóa trải nghiệm người dùng.',
    icon: Megaphone,
    image: '/images/solutions/ric-message.jpg',
    color: 'cyan',
    comingSoon: false,
  },
  {
    id: 'ric-trust',
    category: 'security',
    name: 'RIC TRUST',
    tagline: 'CHỐNG HÀNG GIẢ',
    desc: 'Bảo vệ uy tín thương hiệu với QR chống giả và cảnh báo kịp thời các hành vi lấn kênh.',
    icon: ShieldCheck,
    image: '/images/solutions/ric-trust.jpg',
    color: 'violet',
    comingSoon: false,
  },
  {
    id: 'ricio',
    category: 'management',
    name: 'RICIO',
    tagline: 'CRM + PMS LƯU TRÚ',
    desc: 'Giải pháp số chuyên biệt cho ngành lưu trú. Quản lý đặt phòng và buồng phòng tập trung.',
    icon: Briefcase,
    image: '/images/solutions/ricio.jpg',
    color: 'indigo',
    comingSoon: false,
  },
  {
    id: 'zhub',
    category: 'marketing',
    name: 'ZHUB',
    tagline: 'UNIFIED CHAT HUB',
    desc: 'Nền tảng giao tiếp hợp nhất, gom tin nhắn từ Fanpage, Zalo, Website về một màn hình.',
    icon: MessageCircle,
    image: '/images/solutions/zhub.jpg',
    color: 'slate',
    comingSoon: true,
  },
  {
    id: 'ric-erp',
    category: 'management',
    name: 'RIC ERP',
    tagline: 'QUẢN TRỊ THEO MODULE',
    desc: 'Hệ thống quản trị doanh nghiệp toàn diện. Lắp ghép module linh hoạt theo nhu cầu.',
    icon: LayoutGrid,
    image: '/images/solutions/ric-erp.jpg',
    color: 'slate',
    comingSoon: true,
  },
]

// CHỈ GIỮ LẠI MÀU CHO BADGE (PILL), BỎ HOÀN TOÀN MÀU NỀN CARD
const themeMap: Record<string, { badgeBg: string; badgeText: string }> = {
  blue: { badgeBg: 'bg-cyan-500/30 border-cyan-400/30', badgeText: 'text-cyan-300' },
  emerald: { badgeBg: 'bg-emerald-500/30 border-emerald-400/30', badgeText: 'text-emerald-300' },
  cyan: { badgeBg: 'bg-cyan-500/30 border-cyan-400/30', badgeText: 'text-cyan-300' },
  violet: { badgeBg: 'bg-violet-500/30 border-violet-400/30', badgeText: 'text-violet-300' },
  indigo: { badgeBg: 'bg-indigo-500/30 border-indigo-400/30', badgeText: 'text-indigo-300' },
  slate: { badgeBg: 'bg-slate-500/30 border-slate-400/30', badgeText: 'text-slate-300' },
}

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState('all')

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== activeCategory) {
      const isValidCategory = productCategories.some((cat) => cat.id === categoryFromUrl)

      if (isValidCategory) {
        // ĐÃ FIX LỖI: Bọc setActiveCategory vào setTimeout (Callback) để né lỗi "gọi trực tiếp" của React
        const stateTimer = setTimeout(() => {
          setActiveCategory(categoryFromUrl)
        }, 0)

        // Vẫn giữ nguyên logic đợi 300ms rồi cuộn trang mượt mà
        const scrollTimer = setTimeout(() => {
          document
            .getElementById('solutions')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)

        // Dọn dẹp cả 2 bộ đếm để bộ nhớ web luôn sạch sẽ
        return () => {
          clearTimeout(stateTimer)
          clearTimeout(scrollTimer)
        }
      }
    }
  }, [categoryFromUrl, activeCategory])

  useEffect(() => {
    // ĐÃ FIX LỖI: Bọc lệnh set state vào Callback (setTimeout 0ms)
    const indexTimer = setTimeout(() => {
      setActiveIndex(0)
    }, 0)

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }

    // Dọn dẹp rác bộ nhớ
    return () => clearTimeout(indexTimer)
  }, [activeCategory])

  const filteredProducts =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    const itemElement = container.children[0] as HTMLElement
    if (!itemElement) return
    const itemWidth = itemElement.offsetWidth
    const gap = 16
    const newIndex = Math.round(scrollLeft / (itemWidth + gap))
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < filteredProducts.length) {
      setActiveIndex(newIndex)
    }
  }

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
        <div className="pointer-events-none absolute -top-1/5 left-[-10%] h-200 w-200 rounded-full bg-blue-900/20 blur-[150px]" />
        <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-150 w-150 rounded-full bg-cyan-900/15 blur-[120px]" />
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
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                tương lai doanh nghiệp.
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              Xóa bỏ mọi rào cản dữ liệu. Tự động hóa quy trình. Kiến tạo lợi thế cạnh tranh tuyệt
              đối với các giải pháp phần mềm kiến trúc mở từ Ricvina.
            </p>
          </div>
        </section>
        <section className="relative z-10 border-t border-white/5 bg-white/2 py-8 backdrop-blur-md">
          <div className="container mx-auto mb-6 px-6 text-center md:px-20">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Mở rộng không giới hạn với các đối tác công nghệ
            </p>
          </div>
          <div className="group relative flex w-full overflow-x-hidden opacity-60 transition-opacity duration-500 hover:opacity-100">
            <div className="absolute top-0 bottom-0 left-0 z-10 w-40 bg-linear-to-r from-[#060913] to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 z-10 w-40 bg-linear-to-l from-[#060913] to-transparent" />
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

      {/* =========================================================
          PHẦN 2: MAIN PRODUCTS 
          ========================================================= */}
      <section id="solutions" className="relative z-10 bg-[#0A0F1C] py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-20">
          <div className="mb-10 flex flex-col md:mb-16">
            <div className="mb-6 max-w-3xl px-2 md:px-0">
              <h2 className="mb-3 text-3xl font-black tracking-tight text-white md:mb-4 md:text-5xl">
                Khám phá Giải pháp
              </h2>
              <p className="text-[15px] font-medium text-slate-400 md:text-lg">
                Lựa chọn module phù hợp để giải quyết triệt để bài toán vận hành của bạn.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 px-2 md:flex md:flex-wrap md:gap-3 md:px-0">
              {productCategories.map((cat, index) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex min-h-10 w-full items-center justify-center rounded-full px-3 py-2 text-center text-[12px] leading-tight font-bold transition-all duration-300 md:w-auto md:px-5 md:py-2.5 md:text-sm ${
                    activeCategory === cat.id
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  } ${index === 0 ? 'col-span-2 md:col-span-1' : ''} `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mx-4 md:mx-0">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:grid md:snap-none md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            >
              {filteredProducts.map((product) => {
                const theme = themeMap[product.color] || themeMap.blue

                return (
                  <div
                    key={product.id}
                    // ĐÃ SỬA: Card nền kính trong suốt, chỉ hắt sáng (shadow) khi hover, không nhúc nhích dịch chuyển
                    className="group relative flex w-[85vw] shrink-0 snap-center flex-col rounded-[2rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)] md:min-h-135 md:w-auto md:shrink"
                  >
                    <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.5rem] border border-white/5 bg-linear-to-b from-white/10 to-transparent shadow-inner md:min-h-135 md:rounded-[2rem]">
                      {' '}
                      <div className="flex flex-1 flex-col px-5 pt-5 md:px-8 md:pt-8">
                        <span
                          className={`mb-4 inline-flex w-max items-center rounded-full border px-3 py-1 text-[9px] font-black tracking-widest uppercase shadow-sm md:mb-5 md:px-4 md:py-1.5 md:text-[10px] ${theme.badgeBg} ${theme.badgeText}`}
                        >
                          {product.tagline}
                        </span>

                        <h3 className="mb-2 text-2xl font-black tracking-tight text-white md:mb-4 md:text-4xl">
                          {product.name}
                        </h3>

                        <p className="text-[13px] leading-relaxed font-medium text-white/80 md:text-[15px]">
                          {product.desc}
                        </p>

                        <div className="mt-auto pt-6 pb-4 md:pb-6">
                          {product.comingSoon ? (
                            <Link
                              href={`/contact?interest=${product.id}`}
                              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-900 transition-shadow hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] md:px-6 md:text-sm"
                            >
                              Đăng ký nhận tin <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            </Link>
                          ) : (
                            <Link
                              href={`/products/${product.id}`}
                              // ĐÃ SỬA: Nút bấm tĩnh, chỉ đổi màu nền/viền và phát sáng shadow khi rê chuột qua Card (group-hover)
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] md:px-6 md:text-sm"
                            >
                              Khám phá <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="relative pl-5 md:pl-8">
                        <div className="relative aspect-16/11 w-full overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border-t border-l border-white/20 bg-slate-900 shadow-2xl md:rounded-tl-[2rem] md:rounded-br-[2rem]">
                          {' '}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            // ĐÃ SỬA: Ảnh hoàn toàn đứng im, ko zoom scale
                            className="object-cover object-top-left"
                          />
                          {/* Lớp phủ sáng lên khi hover */}
                          <div className="absolute inset-0 bg-slate-950/20 transition-colors duration-500 group-hover:bg-transparent" />
                          {product.comingSoon && (
                            // Không che ảnh, chỉ có lớp nền đen rất mỏng (bg-slate-900/10) để chữ không bị chìm
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px]">
                              <div className="flex items-center gap-1.5 rounded-full bg-amber-500/80 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase shadow-sm">
                                <Clock className="h-3 w-3 md:h-4 md:w-4" /> Sắp ra mắt
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {filteredProducts.length > 1 && (
            <div className="mt-4 flex justify-center gap-1.5 md:hidden">
              {filteredProducts.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-6 bg-cyan-600' : 'w-1.5 bg-slate-600'
                  }`}
                />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-slate-500" />
              <p className="font-medium text-slate-400">
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
                  <span className="text-[#A5D6FF]">&apos;@ricvina/sdk&apos;</span>;
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
                  <span className="text-[#A5D6FF]">&apos;production&apos;</span>
                </p>
                <p>{`});`}</p>
                <br />
                <p>
                  <span className="text-[#8B949E]">
                    {`// Đồng bộ dữ liệu bán hàng đa kênh tự động`}
                  </span>
                </p>
                <p>
                  <span className="text-[#FF7B72]">await</span> api.
                  <span className="text-[#79C0FF]">erp</span>.
                  <span className="text-[#D2A8FF]">syncOrders</span>({`{`}
                </p>
                <p className="pl-4">
                  <span className="text-[#79C0FF]">channels</span>: [
                  <span className="text-[#A5D6FF]">&apos;shopee&apos;</span>,{' '}
                  <span className="text-[#A5D6FF]">&apos;tiktok&apos;</span>,{' '}
                  <span className="text-[#A5D6FF]">&apos;website&apos;</span>],
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
                  <span className="text-[#A5D6FF]">
                    &apos;🚀 Systems are perfectly synced!&apos;
                  </span>
                  );
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#060913] py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0F1423] px-8 py-20 text-center shadow-xl md:px-16 md:py-24">
            <div className="pointer-events-none absolute top-0 left-1/2 h-75 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/30 blur-[80px]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-2xl text-4xl leading-tight font-black text-white md:text-5xl">
              Sẵn sàng chuyển đổi số cùng Ricvina?
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg font-medium text-slate-400">
              Trải nghiệm hệ sinh thái phần mềm cao cấp, được may đo riêng cho mô hình kinh doanh
              của bạn.
            </p>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-bold text-white transition-shadow hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-600/30"
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
    <Suspense fallback={<div className="min-h-screen bg-[#0A0F1C]" />}>
      <ProductsContent />
    </Suspense>
  )
}
