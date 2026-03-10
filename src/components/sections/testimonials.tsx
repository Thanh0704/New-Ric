import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Khách hàng nói gì về chúng tôi"
          description="Hơn 100 doanh nghiệp đã tin tưởng và đồng hành cùng RIC Vietnam."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <AnimateOnScroll key={item.id}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">&ldquo;{item.content}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {item.title}, {item.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
