import { Zap, Shield, BarChart3, Headphones, Cloud, Settings } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const features = [
  {
    icon: Zap,
    title: 'Hiệu suất cao',
    description: 'Hệ thống xử lý nhanh, tối ưu cho hàng nghìn người dùng đồng thời.',
  },
  {
    icon: Shield,
    title: 'Bảo mật tuyệt đối',
    description: 'Mã hóa dữ liệu end-to-end, tuân thủ tiêu chuẩn bảo mật quốc tế.',
  },
  {
    icon: BarChart3,
    title: 'Báo cáo thông minh',
    description: 'Dashboard trực quan, báo cáo tự động với AI phân tích dữ liệu.',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ mọi lúc, mọi nơi.',
  },
  {
    icon: Cloud,
    title: 'Đám mây linh hoạt',
    description: 'Triển khai trên cloud hoặc on-premise, mở rộng không giới hạn.',
  },
  {
    icon: Settings,
    title: 'Tùy biến dễ dàng',
    description: 'Cấu hình linh hoạt theo quy trình riêng của từng doanh nghiệp.',
  },
]

export function Features() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Tại sao chọn RIC Vietnam?"
          description="Chúng tôi cung cấp giải pháp công nghệ toàn diện, giúp doanh nghiệp tối ưu vận hành và tăng trưởng bền vững."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <AnimateOnScroll key={feature.title}>
              <div className="rounded-xl border p-6 transition-shadow hover:shadow-lg">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
