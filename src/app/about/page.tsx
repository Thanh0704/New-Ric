import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Cpu, Compass, CheckCircle2, ArrowRight, Users } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { VisionMission } from '@/components/sections/vision-mission'
import { teamMembers } from '@/data/team'

export const metadata: Metadata = {
  title: 'Về chúng tôi',
  description:
    'Tìm hiểu về RIC Vietnam — hệ sinh thái công nghệ đa ngành với RITECH và RIC Travel.',
  openGraph: {
    title: 'Về chúng tôi — RIC Vietnam',
    description: 'Tìm hiểu về lịch sử, hệ sinh thái và đội ngũ RIC Vietnam.',
  },
}

const ecosystem = [
  {
    icon: Cpu,
    title: 'RITECH',
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    features: ['Phát triển phần mềm', 'Giải pháp công nghệ'],
    description:
      'Là "bộ não" của hệ sinh thái, RITECH tập trung vào việc nghiên cứu và phát triển các nền tảng kỹ thuật số, các giải pháp công nghệ hiện đại.',
    linkText: 'Tìm hiểu RITECH',
    linkHref: '#',
    linkColor: 'text-primary',
    checkColor: 'text-[#00FFFF]',
  },
  {
    icon: Compass,
    title: 'RIC Travel',
    color: 'text-[#00FFFF]',
    bgColor: 'bg-[#00FFFF]/20',
    features: ['Tour du lịch cao cấp', 'Quản lý và vận hành hệ thống khách sạn, resort, homestay'],
    description:
      'Đơn vị lữ hành và quản lý cơ sở lưu trú hàng đầu, mang đến những hành trình trải nghiệm độc bản và dịch vụ nghỉ dưỡng tiêu chuẩn quốc tế.',
    linkText: 'Khám phá RIC Travel',
    linkHref: '#',
    linkColor: 'text-[#00FFFF]',
    checkColor: 'text-primary',
  },
]

const featuredProjects = [
  {
    title: 'Hệ thống quản trị tập trung',
    category: 'Công nghệ - RITECH',
    image: '/images/projects/project-1.jpg',
  },
  {
    title: 'Nền tảng OTA Bookvilla',
    category: 'Công nghệ - RITECH',
    image: '/images/projects/project-2.jpg',
  },
  {
    title: 'Hệ thống E-commerce thương hiệu Kem 35',
    category: 'Công nghệ - RITECH',
    image: '/images/projects/project-3.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Ecosystem Hero */}
      <section className="relative overflow-hidden py-20">
        <Container>
          <div className="mb-16 text-center">
            <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              Hệ sinh thái chiến lược
            </span>
            <h1 className="mb-6 text-4xl font-black md:text-6xl">Hệ sinh thái RIC</h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              <b>RIC Việt Nam</b> xây dựng mô hình hệ sinh thái đa ngành, tập trung vào việc tạo ra
              giá trị bền vững.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {ecosystem.map((item) => (
              <AnimateOnScroll key={item.title}>
                <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <item.icon className={`${item.color} h-24 w-24`} />
                  </div>
                  <div
                    className={`${item.bgColor} mb-6 flex size-16 items-center justify-center rounded-xl`}
                  >
                    <item.icon className={`${item.color} h-8 w-8`} />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold">{item.title}</h3>
                  <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className={`${item.checkColor} h-4 w-4`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.linkHref}
                    className={`${item.linkColor} flex items-center gap-2 font-bold transition-all hover:gap-4`}
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <VisionMission />

      {/* Brand Story */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <Container>
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                <div className="from-primary/40 absolute inset-0 bg-gradient-to-tr to-transparent" />
                <div className="bg-primary/10 flex h-full items-center justify-center">
                  <span className="text-primary text-6xl font-black opacity-20">RIC</span>
                </div>
              </div>
            </div>
            <AnimateOnScroll className="w-full lg:w-1/2">
              <h2 className="mb-6 text-3xl font-black">Câu chuyện thương hiệu</h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                <p>
                  RIC Việt Nam ra đời từ khát vọng kết nối con người và công nghệ. Chúng tôi tin
                  rằng, trong kỷ nguyên số, công nghệ không chỉ là công cụ mà còn là cầu nối để nâng
                  tầm những giá trị nhân văn và trải nghiệm truyền thống.
                </p>
                <p>
                  Bắt đầu từ một đội ngũ nhỏ các chuyên gia nhiệt huyết, RIC đã không ngừng chuyển
                  mình để trở thành một hệ sinh thái đa ngành, lấy sự hài lòng của khách hàng làm
                  kim chỉ nam cho mọi hoạt động nghiên cứu và phát triển.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div>
                    <div className="text-primary text-3xl font-black">8+</div>
                    <div className="text-sm font-medium">Năm kinh nghiệm</div>
                  </div>
                  <div>
                    <div className="text-primary text-3xl font-black">30+</div>
                    <div className="text-sm font-medium">Đối tác tin cậy</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Expert Team */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black">Đội ngũ chuyên gia</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Những người dẫn dắt RIC Việt Nam vươn xa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {teamMembers.map((member) => (
              <AnimateOnScroll key={member.id}>
                <div className="group text-center">
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h4 className="text-lg font-bold">{member.name}</h4>
                  <p className="text-sm text-slate-500">{member.title}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-900 py-20 text-white">
        <Container>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-black">Dự án tiêu biểu</h2>
              <p className="text-slate-400">Những dấu ấn khẳng định vị thế của RIC Việt Nam.</p>
            </div>
            <Link
              href="/about/projects"
              className="text-primary hidden font-bold hover:underline md:block"
            >
              Xem tất cả dự án
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <AnimateOnScroll key={project.title}>
                <div className="group relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-transparent to-transparent p-6">
                    <h5 className="text-xl font-bold">{project.title}</h5>
                    <p className="text-sm text-slate-300">{project.category}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Careers CTA */}
      <section className="py-20">
        <Container>
          <div className="bg-primary/10 flex flex-col items-center justify-between gap-12 rounded-xl p-8 md:flex-row md:p-16">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="mb-6 text-3xl font-black">Gia nhập đội ngũ RIC</h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                Chúng tôi luôn tìm kiếm những tài năng đam mê công nghệ và dịch vụ để cùng nhau kiến
                tạo tương lai. Hãy bắt đầu sự nghiệp của bạn tại một môi trường làm việc sáng tạo và
                năng động.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/careers"
                  className="bg-primary min-w-45 rounded-xl px-8 py-3 text-center font-bold text-white transition-all hover:shadow-lg"
                >
                  Xem vị trí trống
                </Link>
                <Link
                  href="/contact"
                  className="min-w-45 rounded-xl border border-slate-200 bg-white px-8 py-3 text-center font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  Gửi CV ứng tuyển
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -z-10 size-64 animate-pulse rounded-full bg-[#00FFFF]/30 blur-3xl" />
              <Users className="text-primary h-40 w-40" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
