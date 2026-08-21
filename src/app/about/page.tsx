import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Target,
  Shield,
  Zap,
  HeartHandshake,
  ChevronRight,
  Rocket,
  MapPin,
  Code2,
  Sparkles,
  Building,
  Eye,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Về chúng tôi | RIC Vietnam',
  description:
    'Tìm hiểu về RIC Vietnam — hệ sinh thái công nghệ đa ngành với RITECH và RIC Travel.',
}

// ----------------------------------------------------------------------
// MOCK DATA
// ----------------------------------------------------------------------
const teamMembers = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    title: 'Giám đốc Điều hành (CEO)',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    title: 'Giám đốc Công nghệ (CTO)',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Lê Văn C',
    title: 'Giám đốc RIC Travel',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    title: 'Giám đốc Sản phẩm',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
  },
]

const milestones = [
  {
    year: '2018',
    title: 'Khởi nguồn đam mê',
    desc: 'Thành lập với một nhóm nhỏ kỹ sư đam mê công nghệ, bắt đầu với các dự án gia công phần mềm nội bộ.',
  },
  {
    year: '2020',
    title: 'Chuyển mình mạnh mẽ',
    desc: 'Ra mắt hệ sinh thái RITECH với các sản phẩm Core ERP và POS, chính thức bước chân vào thị trường SaaS.',
  },
  {
    year: '2023',
    title: 'Mở rộng hệ sinh thái',
    desc: 'Sự ra đời của RIC Travel, kết nối sức mạnh công nghệ vào dịch vụ lưu trú và lữ hành cao cấp.',
  },
  {
    year: '2026',
    title: 'Vươn tầm quốc tế',
    desc: 'Phục vụ hơn 50+ tập đoàn lớn, khẳng định vị thế dẫn đầu trong mảng cung cấp nền tảng số toàn diện.',
  },
]

const featuredProjects = [
  {
    title: 'Hệ thống Quản trị Tập trung ERP',
    category: 'RITECH Core',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Nền tảng OTA Bookvilla',
    category: 'RIC Travel',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Kem 35',
    category: 'RITECH Solutions',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30">
      {/* BREADCRUMB */}
      <div className="absolute top-0 z-20 w-full border-b border-slate-200 bg-white/80 pt-28 pb-4 backdrop-blur-md">
        <div className="container mx-auto px-6 text-sm font-medium text-slate-500 md:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-slate-900">Về chúng tôi</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] bg-[size:40px_40px]" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-bold tracking-widest text-cyan-700 uppercase">
              <Sparkles className="h-4 w-4 text-cyan-600" /> Technology & Beyond
            </div>
            <h1 className="mb-8 text-5xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
              Khai phóng <br />
              tiềm năng{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                vô hạn.
              </span>
            </h1>
            <p className="max-w-2xl border-l-4 border-cyan-500 pl-6 text-xl leading-relaxed text-slate-600 md:text-2xl">
              Không chỉ là dòng code. Chúng tôi xây dựng một hệ sinh thái số nơi công nghệ hòa quyện
              cùng dịch vụ, kiến tạo tương lai bền vững cho mọi doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DUAL PILLARS (Ảnh đã bật nét 100%) */}
      <section className="bg-white py-24">
        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Cột trái: RITECH */}
            <div className="group relative h-[600px] w-full overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl lg:w-1/2">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="RITECH"
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              {/* Lớp phủ gradient để chữ không bị chìm */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/10" />

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 shadow-md">
                  <Code2 className="h-8 w-8" />
                </div>
                <div className="relative z-10">
                  <h2 className="mb-4 text-4xl font-black text-slate-900">RITECH Core</h2>
                  <p className="mb-8 max-w-md text-lg leading-relaxed font-medium text-slate-700">
                    "Bộ não" công nghệ của hệ sinh thái. Nơi ra đời các nền tảng ERP, POS và giải
                    pháp chuyển đổi số định hình tương lai vận hành.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/30"
                  >
                    Khám phá RITECH <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Cột phải: RIC TRAVEL */}
            <div className="group relative mt-0 h-[600px] w-full overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl lg:mt-24 lg:w-1/2">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
                  alt="RIC Travel"
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              {/* Lớp phủ gradient để chữ không bị chìm */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/10" />

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-cyan-600 shadow-md">
                  <MapPin className="h-8 w-8" />
                </div>
                <div className="relative z-10">
                  <h2 className="mb-4 text-4xl font-black text-slate-900">RIC Travel</h2>
                  <p className="mb-8 max-w-md text-lg leading-relaxed font-medium text-slate-700">
                    Mang công nghệ vào du lịch. Tổ hợp dịch vụ lữ hành, quản lý lưu trú và nền tảng
                    OTA kiến tạo những trải nghiệm đẳng cấp quốc tế.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-6 py-3 font-bold text-cyan-700 shadow-md transition-all hover:bg-cyan-50"
                  >
                    Khám phá Travel <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL BENTO (Ảnh thật 100% rõ nét) */}
      <section className="border-y border-slate-100 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-5xl">
              Giá trị định hình DNA
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Mỗi dòng code được viết ra, mỗi dịch vụ được triển khai đều bám sát 4 tôn chỉ cốt lõi
              không thể lay chuyển của chúng tôi.
            </p>
          </div>

          <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-3">
            {/* Ô To nhất */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-2xl md:col-span-2 md:row-span-2">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                  alt="Đổi mới"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20" />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="mb-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-3xl font-black text-slate-900">
                  Đổi mới đi trước thời đại
                </h3>
                <p className="max-w-md text-lg font-medium text-slate-700">
                  Chúng tôi không chờ đợi xu hướng, chúng tôi ứng dụng những công nghệ lõi tiên tiến
                  nhất để định hình cách doanh nghiệp của bạn vận hành.
                </p>
              </div>
            </div>

            {/* Ô Nhỏ 1 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                  alt="Chất lượng"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-auto mb-2 text-xl font-bold text-slate-900">
                  Chất lượng tuyệt đối
                </h3>
                <p className="text-sm font-medium text-slate-700">
                  Hệ thống đạt chuẩn bảo mật và hiệu năng khắt khe nhất.
                </p>
              </div>
            </div>

            {/* Ô Nhỏ 2 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Đồng hành"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="mt-auto mb-2 text-xl font-bold text-slate-900">
                  Đồng hành bền vững
                </h3>
                <p className="text-sm font-medium text-slate-700">
                  Cam kết hỗ trợ 24/7, thành công của bạn là của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TẦM NHÌN & SỨ MỆNH (Bật rõ ảnh vũ trụ) */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-blue-600 shadow-sm">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Tầm nhìn</h2>
                </div>
                <p className="pl-14 text-lg leading-relaxed text-slate-600">
                  Trở thành tập đoàn công nghệ và dịch vụ hàng đầu khu vực, kiến tạo một hệ sinh
                  thái số toàn diện, nơi mọi doanh nghiệp đều có thể tiếp cận và hưởng lợi từ sự
                  phát triển của công nghệ tương lai.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-cyan-600 shadow-sm">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Sứ mệnh</h2>
                </div>
                <p className="pl-14 text-lg leading-relaxed text-slate-600">
                  Đồng hành cùng sự phát triển của đối tác thông qua các giải pháp công nghệ tối ưu
                  nhất. Kết nối con người với những trải nghiệm dịch vụ đẳng cấp, tiện nghi và đậm
                  tính nhân văn.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Sửa ảnh ở đây: Hiển thị 100% */}
              <div className="group relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-full border-[12px] border-white bg-slate-50 shadow-2xl shadow-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Vision"
                  className="h-full w-full rounded-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
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
      <section className="relative border-t border-slate-100 bg-white py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="relative flex flex-col items-start gap-20 lg:flex-row">
            <div className="w-full space-y-6 lg:sticky lg:top-40 lg:w-5/12">
              <div className="inline-block rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-xs font-bold tracking-wider text-slate-600 uppercase">
                Hành trình phát triển
              </div>
              <h2 className="text-4xl leading-tight font-black text-slate-900 md:text-6xl">
                Lịch sử <br /> hình thành.
              </h2>
              <p className="text-lg text-slate-600">
                Từ một khát vọng nhỏ bé, chúng tôi đã vươn mình trở thành đối tác chiến lược của
                hàng chục tập đoàn lớn, không ngừng mở rộng ranh giới của sự sáng tạo.
              </p>
            </div>

            <div className="relative w-full lg:w-7/12">
              <div className="absolute top-4 bottom-4 left-[27px] hidden w-px bg-slate-200 md:block" />

              <div className="space-y-12">
                {milestones.map((stone, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col gap-6 md:flex-row md:gap-12"
                  >
                    <div className="flex shrink-0 items-center gap-6 md:w-32">
                      <div className="z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-blue-600 text-white shadow-lg transition-transform group-hover:scale-110 md:flex">
                        <Target className="h-5 w-5" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-black text-transparent">
                        {stone.year}
                      </span>
                    </div>

                    <div className="flex-1 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:bg-white hover:shadow-xl">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">{stone.title}</h3>
                      <p className="leading-relaxed text-slate-600">{stone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ĐỘI NGŨ */}
      <section className="border-y border-slate-100 bg-white py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-5xl">
                Khối óc chiến lược
              </h2>
              <p className="text-lg text-slate-600">
                Những người đứng sau sự thành công của hệ sinh thái RIC.
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:shadow-sm md:flex"
            >
              Tham gia cùng chúng tôi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover opacity-90 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-80" />

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-8 transition-transform duration-500 group-hover:translate-y-0">
                  <h4 className="mb-1 text-2xl font-bold text-white">{member.name}</h4>
                  <p className="text-sm font-medium text-cyan-300">{member.title}</p>
                  <div className="mt-4 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DỰ ÁN TIÊU BIỂU */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-5xl">
                Dự án tiêu biểu
              </h2>
              <p className="text-lg text-slate-600">
                Những dấu ấn khẳng định vị thế của RIC Việt Nam.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-6 py-3 font-bold text-cyan-600 transition-colors hover:text-cyan-700"
            >
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative aspect-square overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-8">
                  <h5 className="mb-2 text-2xl font-bold text-white">{project.title}</h5>
                  <p className="text-sm font-medium text-blue-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="relative container mx-auto px-6 pt-12 pb-24 md:px-20">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-50 px-8 py-20 text-center shadow-xl md:px-16 md:py-32">
          <Building className="relative z-10 mx-auto mb-6 h-16 w-16 text-blue-600" />
          <h2 className="relative z-10 mx-auto mb-6 max-w-3xl text-4xl leading-tight font-black text-slate-900 md:text-6xl">
            Sẵn sàng để bắt đầu hành trình của bạn?
          </h2>
          <p className="relative z-10 mx-auto mb-12 max-w-2xl text-lg text-slate-600">
            Đội ngũ của chúng tôi luôn rộng cửa chào đón các nhân tài công nghệ, cũng như sẵn sàng
            tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {/* Nút chính: Liên hệ hợp tác */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Liên hệ hợp tác
            </Link>

            {/* Nút phụ: Cơ hội nghề nghiệp */}
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-4 text-base font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50"
            >
              Cơ hội nghề nghiệp
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
