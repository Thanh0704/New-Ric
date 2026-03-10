import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Building2, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { careers } from '@/data/careers'

export const metadata: Metadata = {
  title: 'Tuyển dụng',
  description: 'Gia nhập đội ngũ RIC Vietnam - nơi công nghệ và con người cùng phát triển.',
  openGraph: {
    title: 'Tuyển dụng',
    description: 'Gia nhập đội ngũ RIC Vietnam - nơi công nghệ và con người cùng phát triển.',
  },
}

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

export default function CareersPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Tuyển dụng</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Gia nhập đội ngũ & cùng nhau xây dựng tương lai
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="space-y-4">
            {careers.map((job) => (
              <AnimateOnScroll key={job.id}>
                <Link href={`/careers/${job.slug}`}>
                  <Card className="group transition-shadow hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <h2 className="group-hover:text-primary text-lg font-semibold">
                          {job.title}
                        </h2>
                        <div className="text-muted-foreground mt-2 flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <Badge variant="outline">{typeLabel[job.type]}</Badge>
                        </div>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
