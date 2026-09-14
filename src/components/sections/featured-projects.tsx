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
    // TỐI ƯU MOBILE: Giảm py-24 xuống py-16
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <AnimateOnScroll>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-black tracking-widest text-blue-700 uppercase shadow-sm md:mb-4 md:px-4 md:py-1.5 md:text-sm">
              <ShieldCheck className="h-4 w-4" /> Bảng vàng thành tích
            </span>
            {/* TỐI ƯU MOBILE: text-2xl */}
            <h2 className="mb-3 text-2xl font-black tracking-tight text-slate-900 md:mb-4 md:text-4xl">
              CHỨNG MINH BẰNG KẾT QUẢ
            </h2>
            <p className="text-base font-medium text-slate-600 md:text-lg">
              Không chỉ là phần mềm, chúng tôi mang đến sự tăng trưởng có thể đo lường được cho hàng
              trăm doanh nghiệp.
            </p>
          </AnimateOnScroll>
        </div>

        {/* TỐI ƯU MOBILE: gap-6 */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <Link
                href={featuredProject.href}
                className="group relative block h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-slate-200 md:rounded-[2rem]"
              >
                {/* TỐI ƯU MOBILE: Aspect ratio giữ form ảnh không bị bóp méo */}
                <div className="relative aspect-4/5 w-full overflow-hidden sm:aspect-4/3 lg:aspect-auto lg:h-100">
                  {' '}
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent"></div>{' '}
                  {/* TỐI ƯU MOBILE: p-5 thay vì p-8 */}
                  <div className="absolute right-0 bottom-0 left-0 p-5 md:p-8">
                    <span className="mb-2 inline-block rounded-lg bg-blue-600 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase md:mb-3 md:text-xs">
                      {featuredProject.category}
                    </span>
                    <h3 className="mb-2 text-xl font-black text-white md:mb-3 md:text-2xl lg:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-xs font-medium text-slate-300 sm:text-sm md:mb-6 md:line-clamp-3 md:text-base">
                      {featuredProject.desc}
                    </p>

                    {/* TỐI ƯU MOBILE: flex-wrap để các thẻ metrics rớt dòng nếu màn hẹp */}
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/20 px-3 py-1.5 backdrop-blur-md md:gap-3 md:px-4 md:py-2"
                        >
                          <metric.icon className="h-5 w-5 text-emerald-400 md:h-6 md:w-6" />
                          <div>
                            <p className="text-base font-black text-white md:text-xl">
                              {metric.value}
                            </p>
                            <p className="text-[9px] font-bold text-slate-200 uppercase md:text-[10px]">
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

          <div className="flex flex-col gap-4 md:gap-6 lg:col-span-5">
            {otherProjects.map((project, index) => (
              <AnimateOnScroll key={index} delay={index * 150}>
                {/* TỐI ƯU MOBILE: Dùng h-auto thay vì h-32 để linh hoạt chiều cao */}
                <Link
                  href={project.href}
                  className="group flex h-auto min-h-25 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-2 backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100 md:min-h-32 md:gap-4 md:rounded-2xl md:p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 md:h-24 md:w-1/3 md:rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 py-1 pr-2 md:py-2 md:pr-4">
                    <span className="mb-1 block text-[9px] font-bold tracking-wider text-blue-600 uppercase md:text-[10px]">
                      {project.category}
                    </span>
                    <h4 className="line-clamp-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 md:text-base">
                      {project.title}
                    </h4>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll delay={450}>
              <Link
                href="/projects"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 md:h-16 md:rounded-2xl md:text-base"
              >
                Xem toàn bộ 100+ Dự án <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
