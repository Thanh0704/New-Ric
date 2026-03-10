import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Building2, CheckCircle2, Gift } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { Card, CardContent } from '@/components/ui/card'
import { careers } from '@/data/careers'

interface Props {
  params: Promise<{ slug: string }>
}

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const career = careers.find((c) => c.slug === slug)
  if (!career) return {}
  return {
    title: career.title,
    description: career.description,
    openGraph: {
      title: career.title,
      description: career.description,
    },
  }
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  const career = careers.find((c) => c.slug === slug)
  if (!career) notFound()

  return (
    <Container className="max-w-3xl py-20">
      <Link
        href="/careers"
        className="text-muted-foreground hover:text-primary mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Tất cả vị trí
      </Link>

      <h1 className="text-3xl font-bold">{career.title}</h1>
      <div className="text-muted-foreground mt-4 flex flex-wrap gap-3 text-sm">
        <span className="flex items-center gap-1">
          <Building2 className="h-4 w-4" />
          {career.department}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {career.location}
        </span>
        <Badge variant="outline">{typeLabel[career.type]}</Badge>
      </div>

      <p className="text-muted-foreground mt-6 leading-relaxed">{career.description}</p>

      <Card className="mt-8">
        <CardContent className="p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <CheckCircle2 className="text-primary h-5 w-5" />
            Yêu cầu
          </h2>
          <ul className="mt-4 space-y-2">
            {career.requirements.map((req) => (
              <li key={req} className="text-muted-foreground flex items-start gap-3 text-sm">
                <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                {req}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Gift className="text-primary h-5 w-5" />
            Quyền lợi
          </h2>
          <ul className="mt-4 space-y-2">
            {career.benefits.map((benefit) => (
              <li key={benefit} className="text-muted-foreground flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium"
        >
          Ứng tuyển ngay
        </Link>
      </div>
    </Container>
  )
}
