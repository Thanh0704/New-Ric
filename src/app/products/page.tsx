'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, CheckCircle2, LayoutGrid, Cloud, ShieldCheck, 
  Zap, Database, Smartphone, Settings, Users, BarChart3,
  ShoppingCart, Briefcase, ChevronRight, Globe, Lock, Search, 
  CreditCard, Boxes, Truck, Code2, Server, Command, Sparkles, Rocket
} from 'lucide-react'

// ----------------------------------------------------------------------
// MOCK DATA 
// ----------------------------------------------------------------------
const productCategories = [
  { id: 'all', label: 'Tất cả Giải pháp' },
  { id: 'erp', label: 'Quản trị Doanh nghiệp (ERP)' },
  { id: 'retail', label: 'Bán lẻ & Điểm bán (POS)' },
  { id: 'hr', label: 'Quản trị Nhân sự (HRM)' },
]

const products = [
  {
    id: 'ricvina-erp',
    category: 'erp',
    name: 'Ricvina Enterprise ERP',
    tagline: 'Hệ điều hành số toàn diện',
    desc: 'Phá vỡ rào cản dữ liệu giữa các phòng ban. Hệ thống cung cấp bức tranh tài chính và vận hành minh bạch theo thời gian thực cho Ban lãnh đạo.',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: 'blue',
    features: ['Quản trị Tài chính - Kế toán', 'Quản trị Chuỗi cung ứng (SCM)', 'Quản trị Bán hàng (CRM)', 'Báo cáo BI Thông minh']
  },
  {
    id: 'ricvina-pos',
    category: 'retail',
    name: 'Ricvina POS Core',
    tagline: 'Bán lẻ siêu tốc tại điểm bán',
    desc: 'Phần mềm quản lý bán hàng tại quầy được tối ưu hóa cho tốc độ xử lý. Hỗ trợ đa phương thức thanh toán và đồng bộ dữ liệu ngay cả khi ngắt kết nối mạng.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    color: 'cyan',
    features: ['Thanh toán < 2s', 'Chế độ Offline thông minh', 'Quản lý ca & Phân quyền', 'Tích hợp thanh toán QR Code']
  },
  {
    id: 'ricvina-hr',
    category: 'hr',
    name: 'Ricvina HR Master',
    tagline: 'Số hóa vòng đời nhân sự',
    desc: 'Hệ thống C&B (Lương thưởng) linh hoạt, đáp ứng mọi bài toán chấm công phức tạp nhất, kết hợp đánh giá KPI/OKR rõ ràng.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: 'indigo',
    features: ['Chấm công GPS / FaceID', 'Tính lương tự động', 'Đánh giá năng lực 360', 'Cổng thông tin nhân sự']
  },
  {
    id: 'ricvina-inventory',
    category: 'erp',
    name: 'Ricvina Inventory Hub',
    tagline: 'Kiểm soát kho vận thông minh',
    desc: 'Giải pháp quản lý kho hàng với công nghệ quét mã vạch và RFID, tự động cảnh báo tồn kho tối thiểu và gợi ý kế hoạch nhập hàng.',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    color: 'emerald',
    features: ['Quản lý đa kho/chi nhánh', 'Kiểm kê bằng Mobile App', 'Theo dõi Lô/Hạn sử dụng', 'Tối ưu định mức vật tư']
  },
  {
    id: 'ricvina-omnichannel',
    category: 'retail',
    name: 'Omnichannel E-commerce',
    tagline: 'Bán hàng đa kênh đồng nhất',
    desc: 'Kết nối và đồng bộ tồn kho, đơn hàng từ Facebook, Shopee, TikTok, Website về một giao diện quản lý duy nhất.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    color: 'violet',
    features: ['Đồng bộ sản phẩm 1 click', 'Quản lý tin nhắn tập trung', 'Báo cáo doanh thu đa kênh', 'Tích hợp đơn vị vận chuyển']
  },
  {
    id: 'ricvina-cloud',
    category: 'erp',
    name: 'Ricvina Private Cloud',
    tagline: 'Hạ tầng máy chủ độc lập',
    desc: 'Cung cấp không gian lưu trữ riêng biệt trên nền tảng điện toán đám mây cho các tập đoàn lớn, đảm bảo hiệu năng và bảo mật tối đa.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    color: 'slate',
    features: ['Bảo mật chuẩn ISO 27001', 'Uptime 99.99%', 'Tự động Backup hàng ngày', 'Băng thông không giới hạn']
  }
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

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
      {/* CSS cho hiệu ứng Marquee (Trượt vô hạn) */}
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />

      {/* 1. BREADCRUMB - Đã thu hẹp khoảng trắng pt-28 thành pt-8 */}
      <div className="pt-8 pb-4 border-b border-slate-200 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-20 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-semibold">Sản phẩm & Giải pháp</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24 border-b border-slate-100 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)]" />
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-100/60 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-20 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 mb-8 transition-transform hover:scale-105">
            <Sparkles className="h-4 w-4 text-blue-600" /> Hệ sinh thái chuẩn mực
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
            Chuyển đổi số <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              toàn diện & sâu sắc.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mx-auto max-w-3xl mb-12 font-medium">
            Phá vỡ ranh giới dữ liệu, tự động hóa luồng công việc và kiến tạo lợi thế cạnh tranh tuyệt đối với bộ giải pháp công nghệ từ Ricvina.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#solutions" className="inline-flex justify-center items-center gap-2 rounded-full bg-slate-900 px-10 py-5 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              Khám phá giải pháp <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INFINITE LOGO MARQUEE (Băng chuyền logo đối tác trượt vô hạn) */}
      <section className="border-b border-slate-100 bg-slate-50 overflow-hidden py-8">
        <div className="container mx-auto px-6 md:px-20 mb-6 text-center">
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">Tích hợp sẵn sàng với các nền tảng hàng đầu</p>
        </div>
        {/* Vùng trượt */}
        <div className="relative flex overflow-x-hidden w-full group">
          {/* Lớp phủ mờ 2 bên mép */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          <div className="animate-marquee gap-16 md:gap-24 items-center whitespace-nowrap pl-16 md:pl-24">
            {/* Tạo ra 2 cụm logo giống nhau để nối đuôi trượt vô hạn */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 text-slate-400">
                <span className="text-2xl md:text-3xl font-black flex items-center gap-2"><CreditCard className="h-8 w-8" /> VNPAY</span>
                <span className="text-2xl md:text-3xl font-black flex items-center gap-2"><Globe className="h-8 w-8" /> SHOPEE</span>
                <span className="text-2xl md:text-3xl font-black flex items-center gap-2"><Server className="h-8 w-8" /> AWS CLOUD</span>
                <span className="text-2xl md:text-3xl font-black flex items-center gap-2"><Truck className="h-8 w-8" /> GHTK</span>
                <span className="text-2xl md:text-3xl font-black flex items-center gap-2"><Code2 className="h-8 w-8" /> MISA API</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN PRODUCTS SECTION WITH STICKY TABS & APP-STORE CARDS */}
      <section id="solutions" className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-20">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Hệ sinh thái Ricvina</h2>
            <p className="text-slate-500 text-xl max-w-2xl font-medium">Mọi bài toán vận hành phức tạp nhất của doanh nghiệp đều được giải quyết trên một nền tảng duy nhất.</p>
          </div>

          {/* Sticky Tab Navigation (Ghim trên màn hình khi cuộn) */}
          <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl py-6 mb-10 -mx-6 px-6 md:mx-0 md:px-0 border-b border-slate-100 flex overflow-x-auto no-scrollbar gap-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
            {productCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* App-Store Style Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProducts.map((product) => {
              const theme = colorMap[product.color]
              return (
                <div key={product.id} className="group flex flex-col rounded-[2.5rem] bg-white border border-slate-200 p-2 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-slate-300 transition-all duration-500">
                  
                  {/* Image Header (Inset inside card) */}
                  <div className="relative h-[300px] w-full rounded-[2rem] overflow-hidden bg-slate-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Glass Badge */}
                    <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-xl">
                      <div className={`h-2 w-2 rounded-full ${theme.accent} animate-pulse`} />
                      {productCategories.find(c => c.id === product.category)?.label}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text}`}>
                        <product.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{product.name}</h3>
                        <p className={`font-bold mt-1 ${theme.text}`}>{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                      {product.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mt-auto">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 ${theme.text}`} />
                          <span className="text-slate-700 font-semibold text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <Link href={`/products/${product.id}`} className="text-slate-900 font-bold hover:underline underline-offset-4 decoration-2 decoration-slate-300 flex items-center gap-2">
                        Khám phá chi tiết
                      </Link>
                      <Link href={`/products/${product.id}`} className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all group-hover:bg-blue-600">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center text-slate-400">
              <Search className="h-16 w-16 mx-auto mb-6 opacity-20" />
              <p className="text-xl font-medium">Đang cập nhật thêm giải pháp trong danh mục này.</p>
            </div>
          )}

        </div>
      </section>

      {/* 5. KHỐI CẮT CẢNH NỀN TỐI (Dark Mode Breakout - API & Architecture) */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-600/20 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-300">
                <Command className="h-4 w-4 text-cyan-400" /> Sức mạnh cốt lõi
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Kiến trúc mở rông. <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tích hợp không giới hạn.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Sản phẩm của Ricvina được xây dựng trên nền tảng vi dịch vụ (Microservices), sẵn sàng kết nối luồng dữ liệu thời gian thực thông qua hệ thống Open API mạnh mẽ.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-2 border-slate-800 pl-6">
                  <div className="text-3xl font-black text-white mb-2">99.9%</div>
                  <p className="text-slate-400 font-medium">Uptime hệ thống</p>
                </div>
                <div className="border-l-2 border-slate-800 pl-6">
                  <div className="text-3xl font-black text-white mb-2">&lt; 50ms</div>
                  <p className="text-slate-400 font-medium">Độ trễ truy vấn API</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Box mô phỏng màn hình Code Terminal */}
              <div className="aspect-[4/3] w-full rounded-[2rem] border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden flex flex-col">
                {/* Header Terminal */}
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs font-mono text-slate-500">ricvina_api_config.json</span>
                </div>
                {/* Body Terminal Code */}
                <div className="font-mono text-sm leading-loose text-slate-300">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">RicvinaAPI</span> = <span className="text-yellow-300">new</span> <span className="text-emerald-400">SystemCore</span>({`{`}</p>
                  <p className="pl-6"><span className="text-slate-400">auth:</span> <span className="text-orange-300">'OAuth2.0'</span>,</p>
                  <p className="pl-6"><span className="text-slate-400">encryption:</span> <span className="text-orange-300">'AES-256-GCM'</span>,</p>
                  <p className="pl-6"><span className="text-slate-400">endpoints:</span> [{` `}</p>
                  <p className="pl-12"><span className="text-orange-300">'/api/v1/erp/sync'</span>,</p>
                  <p className="pl-12"><span className="text-orange-300">'/api/v1/pos/transactions'</span></p>
                  <p className="pl-6">]</p>
                  <p>{`});`}</p>
                  <br />
                  <p className="text-slate-500">{'// Tích hợp thanh toán & Vận chuyển'}</p>
                  <p><span className="text-blue-400">await</span> RicvinaAPI.<span className="text-emerald-400">connectPartners</span>({`['VNPAY', 'GHTK']`});</p>
                  <p className="text-green-400 mt-4">{">>"} Connection established successfully. Status: 200 OK</p>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -bottom-8 -left-8 p-6 rounded-[2rem] bg-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.5)] border border-blue-500 animate-bounce">
                <Database className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-8 -right-8 p-6 rounded-[2rem] bg-cyan-500 shadow-[0_20px_50px_rgba(6,182,212,0.5)] border border-cyan-400 animate-pulse">
                <Cloud className="h-10 w-10 text-white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="container mx-auto px-6 py-32 md:px-20 relative bg-white">
        <div className="relative overflow-hidden rounded-[4rem] bg-slate-50 px-8 py-24 text-center border border-slate-200 shadow-2xl md:px-16 md:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
          
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-blue-600 text-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] mb-8 relative z-10 rotate-12 transition-transform hover:rotate-0">
            <Rocket className="h-12 w-12" />
          </div>
          
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Sẵn sàng nâng cấp <br/> hệ thống vận hành?
          </h2>
          <p className="relative z-10 mx-auto max-w-2xl text-slate-600 mb-12 text-xl font-medium">
            Để lại thông tin, đội ngũ kỹ sư của chúng tôi sẽ phân tích và thiết lập một hệ thống demo phù hợp nhất với mô hình của bạn.
          </p>
          
          <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-slate-900 px-12 py-5 font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]">
              Yêu cầu Demo 1:1
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  )
}