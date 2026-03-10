import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Khám phá các giải pháp công nghệ của RIC Vietnam.',
  openGraph: {
    title: 'Sản phẩm',
    description: 'Khám phá các giải pháp công nghệ của RIC Vietnam.',
  },
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Sản phẩm</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Giải pháp công nghệ phù hợp cho mọi quy mô doanh nghiệp
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <AnimateOnScroll key={product.id}>
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        {product.category}
                      </Badge>
                      <CardTitle className="mt-2 flex items-center gap-2">
                        {product.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                    </CardHeader>
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
