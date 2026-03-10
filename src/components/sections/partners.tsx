import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { partners } from '@/data/partners'

export function Partners() {
  return (
    <section className="bg-muted/30 py-20">
      <Container>
        <SectionHeading
          title="Đối tác tin cậy"
          description="Hợp tác cùng các doanh nghiệp công nghệ hàng đầu Việt Nam."
        />
        <AnimateOnScroll>
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-background flex items-center justify-center rounded-lg border p-6 grayscale transition-all hover:grayscale-0"
              >
                <span className="text-muted-foreground text-sm font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
