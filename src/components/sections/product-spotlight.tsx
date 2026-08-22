import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShoppingCart, Users, Database } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// ĐÃ SỬA: Lấy đúng 3 sản phẩm có trong Database của sếp (ecom, ric-erp, zhub)
const spotlights = [
  {
    id: 'ecom',
    tag: 'Bán hàng & Thương mại',
    title: 'RIC ECOM - Nền tảng thương mại điện tử linh hoạt',
    description:
      'Được thiết kế để phục vụ bán hàng và quản trị hoạt động thương mại số. Cung cấp bộ lõi (Commerce Core) mạnh mẽ để quản lý đồng bộ từ Website, Zalo Mini App đến Native App.',
    features: [
      'Bộ lõi Commerce Core đồng bộ đa kênh',
      'Tự động hóa luồng xử lý đơn hàng',
      'Kiểm soát tồn kho Real-time',
    ],
    metric: 'Tăng 30% doanh số Online',
    image: '/images/solutions/ecom.jpg',
    link: '/products/ecom', // Link chuẩn vào [id]
    icon: ShoppingCart,
    reverse: false,
  },
  {
    id: 'ric-erp',
    tag: 'Quản trị chuyên ngành',
    title: 'RIC ERP - Quản trị doanh nghiệp theo module',
    description:
      'Đập bỏ các "ốc đảo dữ liệu" giữa các phòng ban. Kết nối luồng thông tin từ Mua hàng, Kho bãi, Sản xuất đến Kế toán tài chính trên một nền tảng duy nhất.',
    features: [
      'Cấu trúc Module lắp ghép linh hoạt',
      'Thông tin luân chuyển xuyên suốt thời gian thực',
      'Dashboard 360 cho Ban Lãnh đạo ra quyết định',
    ],
    metric: 'Giảm 40% chi phí vận hành ẩn',
    image: '/images/solutions/ric-erp.jpg',
    link: '/products/ric-erp', // Link chuẩn vào [id]
    icon: Database,
    reverse: true,
  },
  {
    id: 'zhub',
    tag: 'Marketing & Tương tác',
    title: 'ZHUB - Trung tâm hội thoại hợp nhất',
    description:
      'Unified Chat giúp gom tất cả các luồng giao tiếp với khách hàng từ Zalo, Facebook, Website về một nơi duy nhất. Chuyển đổi hội thoại thành cơ hội bán hàng hiệu quả.',
    features: [
      'Gom tin nhắn mọi kênh về một màn hình',
      'Tự động chia chat (Routing) cho nhân sự',
      'Chuyển đổi trực tiếp chat thành Lead',
    ],
    metric: '100% không bỏ sót tin nhắn',
    image: '/images/solutions/zhub.jpg',
    link: '/products/zhub', // Link chuẩn vào [id]
    icon: Users,
    reverse: false,
  },
]

export function ProductSpotlight() {
  return (
    <section className="overflow-hidden bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-slate-200 px-4 py-1.5 text-sm font-black tracking-widest text-slate-700 uppercase">
              Product Spotlight
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Giải pháp công nghệ <span className="text-blue-600">mũi nhọn</span>
            </h2>
            <p className="text-lg font-medium text-slate-600">
              Khám phá sâu hơn vào các nền tảng đang trực tiếp tạo ra sự đột phá cho hàng trăm doanh
              nghiệp tại Việt Nam.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="flex flex-col gap-24">
          {spotlights.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center gap-12 lg:flex-row ${product.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* CỘT ẢNH */}
              <div className="w-full lg:w-1/2">
                <AnimateOnScroll delay={index * 100}>
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl shadow-slate-200">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute -right-6 -bottom-6 hidden rounded-2xl bg-slate-900 p-6 text-white shadow-xl md:block lg:right-8 lg:bottom-8 lg:rounded-[2rem]">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                          <product.icon className="h-6 w-6" />
                        </div>
                        <span className="text-lg font-bold">{product.metric}</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* CỘT NỘI DUNG */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <AnimateOnScroll delay={index * 100 + 100}>
                  <span className="mb-4 inline-block font-bold text-blue-600">{product.tag}</span>
                  <h3 className="mb-6 text-3xl leading-tight font-black text-slate-900 md:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  <ul className="mb-10 space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                        <span className="text-lg font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.link}
                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30"
                  >
                    Khám phá tính năng
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
