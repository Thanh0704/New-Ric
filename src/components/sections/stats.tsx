import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const stats = [
  { value: '100+', label: 'Khách hàng doanh nghiệp' },
  { value: '50+', label: 'Dự án triển khai' },
  { value: '99.9%', label: 'Uptime hệ thống' },
  { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
]

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <Container>
        <AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
