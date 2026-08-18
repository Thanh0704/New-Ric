import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRight, Target, Shield, Zap, HeartHandshake, 
  ChevronRight, Rocket, MapPin, Code2, Sparkles, Building, Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Về chúng tôi | RIC Vietnam',
  description: 'Tìm hiểu về RIC Vietnam — hệ sinh thái công nghệ đa ngành với RITECH và RIC Travel.',
}

// ----------------------------------------------------------------------
// MOCK DATA 
// ----------------------------------------------------------------------
const teamMembers = [
  { id: 1, name: 'Nguyễn Văn A', title: 'Giám đốc Điều hành (CEO)', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Trần Thị B', title: 'Giám đốc Công nghệ (CTO)', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
  { id: 3, name: 'Lê Văn C', title: 'Giám đốc RIC Travel', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'Phạm Thị D', title: 'Giám đốc Sản phẩm', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
]

const milestones = [
  { year: '2018', title: 'Khởi nguồn đam mê', desc: 'Thành lập với một nhóm nhỏ kỹ sư đam mê công nghệ, bắt đầu với các dự án gia công phần mềm nội bộ.' },
  { year: '2020', title: 'Chuyển mình mạnh mẽ', desc: 'Ra mắt hệ sinh thái RITECH với các sản phẩm Core ERP và POS, chính thức bước chân vào thị trường SaaS.' },
  { year: '2023', title: 'Mở rộng hệ sinh thái', desc: 'Sự ra đời của RIC Travel, kết nối sức mạnh công nghệ vào dịch vụ lưu trú và lữ hành cao cấp.' },
  { year: '2026', title: 'Vươn tầm quốc tế', desc: 'Phục vụ hơn 50+ tập đoàn lớn, khẳng định vị thế dẫn đầu trong mảng cung cấp nền tảng số toàn diện.' },
]

const featuredProjects = [
  {
    title: 'Hệ thống Quản trị Tập trung ERP',
    category: 'RITECH Core',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Nền tảng OTA Bookvilla',
    category: 'RIC Travel',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Kem 35',
    category: 'RITECH Solutions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30">
      
      {/* BREADCRUMB */}
      <div className="pt-28 pb-4 border-b border-slate-200 bg-white/80 backdrop-blur-md absolute top-0 w-full z-20">
        <div className="container mx-auto px-6 md:px-20 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-semibold">Về chúng tôi</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700 mb-8">
              <Sparkles className="h-4 w-4 text-cyan-600" /> Technology & Beyond
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Khai phóng <br />
              tiềm năng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">vô hạn.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-cyan-500 pl-6">
              Không chỉ là dòng code. Chúng tôi xây dựng một hệ sinh thái số nơi công nghệ hòa quyện cùng dịch vụ, kiến tạo tương lai bền vững cho mọi doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DUAL PILLARS (Ảnh đã bật nét 100%) */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cột trái: RITECH */}
            <div className="group relative w-full lg:w-1/2 h-[600px] rounded-[3rem] overflow-hidden bg-white shadow-xl border border-slate-200">
              <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="RITECH" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              {/* Lớp phủ gradient để chữ không bị chìm */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/10" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md border border-slate-100">
                  <Code2 className="h-8 w-8" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-4">RITECH Core</h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 max-w-md font-medium">
                    "Bộ não" công nghệ của hệ sinh thái. Nơi ra đời các nền tảng ERP, POS và giải pháp chuyển đổi số định hình tương lai vận hành.
                  </p>
                  <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition-all hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30">
                    Khám phá RITECH <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Cột phải: RIC TRAVEL */}
            <div className="group relative w-full lg:w-1/2 h-[600px] rounded-[3rem] overflow-hidden bg-white shadow-xl border border-slate-200 mt-0 lg:mt-24">
              <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" alt="RIC Travel" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              {/* Lớp phủ gradient để chữ không bị chìm */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/10" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-md border border-slate-100">
                  <MapPin className="h-8 w-8" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-4">RIC Travel</h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 max-w-md font-medium">
                    Mang công nghệ vào du lịch. Tổ hợp dịch vụ lữ hành, quản lý lưu trú và nền tảng OTA kiến tạo những trải nghiệm đẳng cấp quốc tế.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-6 py-3 font-bold text-cyan-700 transition-all hover:bg-cyan-50 shadow-md">
                    Khám phá Travel <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL BENTO (Ảnh thật 100% rõ nét) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Giá trị định hình DNA</h2>
            <p className="text-slate-600 text-lg max-w-2xl">Mỗi dòng code được viết ra, mỗi dịch vụ được triển khai đều bám sát 4 tôn chỉ cốt lõi không thể lay chuyển của chúng tôi.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Ô To nhất */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-lg p-10 group hover:shadow-2xl transition-all duration-300">
               <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Đổi mới" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20" />
               
               <div className="relative z-10 h-full flex flex-col justify-end">
                 <div className="mb-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md text-blue-600"><Zap className="h-7 w-7" /></div>
                 <h3 className="text-3xl font-black text-slate-900 mb-4">Đổi mới đi trước thời đại</h3>
                 <p className="text-slate-700 text-lg max-w-md font-medium">Chúng tôi không chờ đợi xu hướng, chúng tôi ứng dụng những công nghệ lõi tiên tiến nhất để định hình cách doanh nghiệp của bạn vận hành.</p>
               </div>
            </div>

            {/* Ô Nhỏ 1 */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-md p-8 group hover:shadow-xl transition-all duration-300">
               <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="Chất lượng" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30" />
               
               <div className="relative z-10 h-full flex flex-col">
                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-cyan-600"><Shield className="h-6 w-6" /></div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2 mt-auto">Chất lượng tuyệt đối</h3>
                 <p className="text-slate-700 text-sm font-medium">Hệ thống đạt chuẩn bảo mật và hiệu năng khắt khe nhất.</p>
               </div>
            </div>

            {/* Ô Nhỏ 2 */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-md p-8 group hover:shadow-xl transition-all duration-300">
               <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Đồng hành" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30" />
               
               <div className="relative z-10 h-full flex flex-col">
                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-blue-600"><HeartHandshake className="h-6 w-6" /></div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2 mt-auto">Đồng hành bền vững</h3>
                 <p className="text-slate-700 text-sm font-medium">Cam kết hỗ trợ 24/7, thành công của bạn là của chúng tôi.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TẦM NHÌN & SỨ MỆNH (Bật rõ ảnh vũ trụ) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 shadow-sm"><Eye className="h-6 w-6" /></div>
                  <h2 className="text-3xl font-black text-slate-900">Tầm nhìn</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed pl-14">
                  Trở thành tập đoàn công nghệ và dịch vụ hàng đầu khu vực, kiến tạo một hệ sinh thái số toàn diện, nơi mọi doanh nghiệp đều có thể tiếp cận và hưởng lợi từ sự phát triển của công nghệ tương lai.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-50 border border-cyan-100 rounded-xl text-cyan-600 shadow-sm"><Target className="h-6 w-6" /></div>
                  <h2 className="text-3xl font-black text-slate-900">Sứ mệnh</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed pl-14">
                  Đồng hành cùng sự phát triển của đối tác thông qua các giải pháp công nghệ tối ưu nhất. Kết nối con người với những trải nghiệm dịch vụ đẳng cấp, tiện nghi và đậm tính nhân văn.
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Sửa ảnh ở đây: Hiển thị 100% */}
              <div className="aspect-square w-full max-w-md mx-auto rounded-full border-[12px] border-white bg-slate-50 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-slate-200 group">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Vision" className="w-full h-full object-cover rounded-full transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket className="h-24 w-24 text-white drop-shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STICKY TIMELINE (Lịch sử) */}
      <section className="py-32 relative bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-20 relative items-start">
            
            <div className="w-full lg:w-5/12 lg:sticky lg:top-40 space-y-6">
              <div className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold tracking-wider text-slate-600 uppercase border border-slate-200">
                Hành trình phát triển
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Lịch sử <br/> hình thành.
              </h2>
              <p className="text-lg text-slate-600">
                Từ một khát vọng nhỏ bé, chúng tôi đã vươn mình trở thành đối tác chiến lược của hàng chục tập đoàn lớn, không ngừng mở rộng ranh giới của sự sáng tạo.
              </p>
            </div>

            <div className="w-full lg:w-7/12 relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-200 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((stone, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                    <div className="flex items-center gap-6 md:w-32 shrink-0">
                      <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-blue-600 text-white shadow-lg z-10 transition-transform group-hover:scale-110">
                        <Target className="h-5 w-5" />
                      </div>
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{stone.year}</span>
                    </div>
                    
                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:bg-white hover:shadow-xl flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{stone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{stone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ĐỘI NGŨ */}
      <section className="bg-white border-y border-slate-100 py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Khối óc chiến lược</h2>
              <p className="text-slate-600 text-lg">Những người đứng sau sự thành công của hệ sinh thái RIC.</p>
            </div>
            <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-700 border border-slate-300 bg-white rounded-full px-6 py-3 hover:bg-slate-50 hover:shadow-sm transition-all">
              Tham gia cùng chúng tôi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white cursor-pointer border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="h-full w-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-80" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-cyan-300">{member.title}</p>
                  <div className="h-1 w-0 bg-cyan-400 mt-4 transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DỰ ÁN TIÊU BIỂU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Dự án tiêu biểu</h2>
              <p className="text-slate-600 text-lg">Những dấu ấn khẳng định vị thế của RIC Việt Nam.</p>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors bg-cyan-50 px-6 py-3 rounded-full border border-cyan-200">
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-8">
                  <h5 className="text-2xl font-bold text-white mb-2">{project.title}</h5>
                  <p className="text-sm font-medium text-blue-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="container mx-auto px-6 pb-24 pt-12 md:px-20 relative">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-50 px-8 py-20 text-center border border-slate-200 shadow-xl md:px-16 md:py-32">
          
          <Building className="mx-auto mb-6 h-16 w-16 text-blue-600 relative z-10" />
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Sẵn sàng để bắt đầu hành trình của bạn?
          </h2>
          <p className="relative z-10 mx-auto max-w-2xl text-slate-600 mb-12 text-lg">
            Đội ngũ của chúng tôi luôn rộng cửa chào đón các nhân tài công nghệ, cũng như sẵn sàng tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
          </p>
          
          <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-blue-600 px-10 py-4 font-bold text-white transition-transform hover:scale-105 hover:bg-blue-700 shadow-lg shadow-blue-500/30">
              Liên hệ hợp tác
            </Link>
            <Link href="/careers" className="rounded-full border border-slate-300 bg-white px-10 py-4 font-bold text-slate-700 transition-all hover:bg-slate-100 shadow-sm">
              Cơ hội nghề nghiệp
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  )
}