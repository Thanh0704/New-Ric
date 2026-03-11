import { Rocket, Handshake, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { cn } from '@/lib/utils'

const pillars = [
  {
    icon: Rocket,
    title: 'Đầu tư & Phát triển',
    description:
      'Chúng tôi không ngừng đầu tư vào các công nghệ lõi (AI, Cloud, Big Data) để mang lại lợi thế cạnh tranh cho khách hàng.',
  },
  {
    icon: Handshake,
    title: 'Đồng hành & Cam kết',
    description:
      'RIC cam kết đồng hành cùng doanh nghiệp từ khâu lên ý tưởng đến khi triển khai và vận hành ổn định.',
  },
  {
    icon: ShieldCheck,
    title: 'Đối tác Tin cậy',
    description: 'Hàng trăm doanh nghiệp đã tin tưởng lựa chọn RIC là đối tác chiến lược dài hạn.',
  },
]

export function CTA() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <Container>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={cn(
                  'flex flex-col gap-4',
                  index > 0 && 'border-l border-slate-200 lg:pl-12 dark:border-slate-800',
                )}
              >
                <pillar.icon className="text-primary h-10 w-10" />
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
