import { Monitor, ShoppingCart, Megaphone, Headphones } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const services = [
  {
    icon: Monitor,
    title: 'Hệ thống Quản trị',
    description:
      'Số hóa toàn bộ quy trình quản lý doanh nghiệp trên một nền tảng duy nhất, giúp lãnh đạo đưa ra quyết định dựa trên dữ liệu thời gian thực.',
  },
  {
    icon: ShoppingCart,
    title: 'Hệ thống Hỗ trợ kinh doanh',
    description:
      'Cung cấp bộ công cụ thông minh hỗ trợ đội ngũ Sales và tích hợp các giải pháp thương mại điện tử hiện đại.',
  },
  {
    icon: Megaphone,
    title: 'Hệ thống Truyền thông',
    description:
      'Giải pháp truyền thông đa kênh chuyên nghiệp giúp thông điệp chạm đến đúng khách hàng mục tiêu.',
  },
  {
    icon: Headphones,
    title: 'Hệ thống Chăm sóc khách hàng',
    description:
      'Tự động hóa quy trình chăm sóc sau bán hàng, biến mỗi giao dịch thành một trải nghiệm hài lòng tuyệt đối.',
  },
]

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Dịch vụ chiến lược"
          description="Hệ sinh thái giải pháp số hóa toàn diện giúp doanh nghiệp tối ưu hóa quy trình và tăng trưởng bền vững."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="group hover:border-electric hover:shadow-electric/20 transform rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="group-hover:bg-electric/10 group-hover:text-electric mb-6 inline-flex rounded-xl bg-slate-100 p-4 text-slate-600 transition-colors duration-300 dark:bg-slate-700 dark:text-slate-400">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="group-hover:text-electric mb-3 text-xl font-bold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
