import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { products } from '@/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.tagline,
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [product.image],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <Container className="py-20">
      <Link
        href="/products"
        className="text-muted-foreground hover:text-primary mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Tất cả sản phẩm
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="mt-4 text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground mt-4">{product.description}</p>

          <div className="mt-8">
            <h2 className="font-semibold">Tính năng nổi bật</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/80 mt-8 inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </Container>
  )
}
