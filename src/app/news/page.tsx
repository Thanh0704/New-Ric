import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { newsArticles } from '@/data/news'

export const metadata: Metadata = {
  title: 'Tin tức',
  description: 'Cập nhật tin tức mới nhất từ RIC Vietnam.',
  openGraph: {
    title: 'Tin tức',
    description: 'Cập nhật tin tức mới nhất từ RIC Vietnam.',
  },
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Tin tức</h1>
          <p className="text-muted-foreground mt-4 text-lg">Cập nhật mới nhất từ chúng tôi</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <AnimateOnScroll key={article.id}>
                <Link href={`/news/${article.slug}`} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary">{article.category}</Badge>
                      <h2 className="mt-2 line-clamp-2 text-lg font-semibold">{article.title}</h2>
                      <p className="text-muted-foreground mt-2 line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>
                      <div className="text-muted-foreground mt-3 flex items-center justify-between text-xs">
                        <span>{article.author}</span>
                        <time>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</time>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
