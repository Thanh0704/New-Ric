import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, TrendingUp, Users, Settings } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Dữ liệu 3 sản phẩm trọng tâm (Spotlight)
const spotlights = [
  {
    id: 'crm',
    tag: 'Tăng trưởng doanh thu',
    title: 'RIC CRM - Tự động hóa phễu bán hàng',
    description:
      'Không bỏ lỡ bất kỳ data nào. Theo dõi toàn bộ hành trình khách hàng từ lúc tiếp cận đến khi chốt deal và chăm sóc sau bán.',
    features: [
      'Quản lý Lead & Cơ hội bán hàng (Pipeline)',
      'Tích hợp Zalo ZCA & Tổng đài',
      'Báo cáo doanh thu theo nhân viên/đội nhóm',
    ],
    metric: 'Tăng 35% tỷ lệ chốt Deal',
    image: '/images/solutions/ecom.jpg', // THAY ẢNH MOCKUP GIAO DIỆN CRM VÀO ĐÂY
    link: '/products/crm',
    icon: TrendingUp,
    reverse: false, // Ảnh bên trái, chữ bên phải
  },
  {
    id: 'erp',
    tag: 'Tối ưu vận hành',
    title: 'RIC ERP - Quản trị nguồn lực toàn diện',
    description:
      'Đập bỏ các "ốc đảo dữ liệu" giữa các phòng ban. Kết nối luồng thông tin từ Mua hàng, Kho bãi, Sản xuất đến Kế toán tài chính trên một nền tảng duy nhất.',
    features: [
      'Kiểm soát hàng tồn kho đa vị trí thời gian thực',
      'Quản lý dòng tiền, công nợ tự động',
      'Hệ thống báo cáo quản trị (BI) cho C-Level',
    ],
    metric: 'Giảm 40% chi phí vận hành ẩn',
    image: '/images/solutions/ric-erp.jpg', // THAY ẢNH MOCKUP GIAO DIỆN ERP VÀO ĐÂY
    link: '/products/erp',
    icon: Settings,
    reverse: true, // Chữ bên trái, ảnh bên phải
  },
  {
    id: 'hrm',
    tag: 'Phát triển con người',
    title: 'RIC HRM - Số hóa nghiệp vụ nhân sự',
    description:
      'Tạm biệt bảng chấm công Excel. Giải phóng bộ phận HR khỏi các tác vụ thủ công để tập trung vào việc thu hút và giữ chân nhân tài.',
    features: [
      'Chấm công GPS/FaceID qua Mobile App',
      'Tính lương tự động (Payroll) chuẩn xác 100%',
      'Đánh giá hiệu suất KPI/OKR minh bạch',
    ],
    metric: 'Tiết kiệm 80% thời gian làm lương',
    image: '/images/solutions/ric-message.jpg', // THAY ẢNH MOCKUP GIAO DIỆN HRM VÀO ĐÂY
    link: '/products/hrm',
    icon: Users,
    reverse: false, // Ảnh bên trái, chữ bên phải
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
                    {/* Badge hiển thị Metric (Chỉ số nổi bật) */}
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
