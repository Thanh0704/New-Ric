import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const featuredProject = {
  title: 'Hệ thống ERP & Quản trị chuỗi 50+ siêu thị',
  category: 'Enterprise Retail',
  desc: 'Chuyển đổi số toàn diện quy trình cung ứng, bán hàng và kế toán. Loại bỏ 100% giấy tờ thủ công, đồng bộ dữ liệu Real-time giữa các chi nhánh.',
  image: '/images/solutions/ric-erp.jpg',
  metrics: [
    { label: 'Tăng trưởng', value: '+150%', icon: TrendingUp },
    { label: 'Tiết kiệm TG', value: '40%', icon: Clock },
  ],
  href: '/projects/chuoi-sieu-thi',
}

const otherProjects = [
  {
    title: 'Hệ sinh thái Mini App & Zalo ZNS CSKH',
    category: 'F&B Chain',
    image: '/images/solutions/ric-message.jpg',
    href: '/projects/fnb',
  },
  {
    title: 'Nền tảng Booking & Quản lý Resort cao cấp',
    category: 'Hospitality',
    image: '/images/solutions/ricio.jpg',
    href: '/projects/resort',
  },
  {
    title: 'Giải pháp chống giả & QR Code truy xuất',
    category: 'Manufacturing',
    image: '/images/solutions/ric-trust.jpg',
    href: '/projects/chong-gia',
  },
]

export function FeaturedProjects() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-black tracking-widest text-blue-700 uppercase shadow-sm">
              <ShieldCheck className="h-4 w-4" /> Bảng vàng thành tích
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              CHỨNG MINH BẰNG KẾT QUẢ
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Không chỉ là phần mềm, chúng tôi mang đến sự tăng trưởng có thể đo lường được cho hàng
              trăm doanh nghiệp.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <Link
                href={featuredProject.href}
                className="group relative block h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[400px]">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                  <div className="absolute right-0 bottom-0 left-0 p-8">
                    <span className="mb-3 inline-block rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                      {featuredProject.category}
                    </span>
                    <h3 className="mb-3 text-2xl font-black text-white md:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-sm font-medium text-slate-300 md:text-base">
                      {featuredProject.desc}
                    </p>

                    <div className="flex gap-4">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/20 px-4 py-2 backdrop-blur-md"
                        >
                          <metric.icon className="h-6 w-6 text-emerald-400" />
                          <div>
                            <p className="text-xl font-black text-white">{metric.value}</p>
                            <p className="text-[10px] font-bold text-slate-200 uppercase">
                              {metric.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {otherProjects.map((project, index) => (
              <AnimateOnScroll key={index} delay={index * 150}>
                <Link
                  href={project.href}
                  className="group flex h-32 items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-3 backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100"
                >
                  <div className="relative h-full w-1/3 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 py-2 pr-4">
                    <span className="mb-1 block text-[10px] font-bold tracking-wider text-blue-600 uppercase">
                      {project.category}
                    </span>
                    <h4 className="line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {project.title}
                    </h4>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll delay={450}>
              <Link
                href="/projects"
                className="flex h-16 w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 font-bold text-slate-700 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
              >
                Xem toàn bộ 100+ Dự án <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
