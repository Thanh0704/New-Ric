import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/shared/container'
import { StructuredData } from '@/components/shared/structured-data'
import { SITE_CONFIG } from '@/lib/constants'
import { newsArticles } from '@/data/news'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.thumbnail,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  }

  return (
    <Container className="max-w-3xl py-20">
      <StructuredData data={articleSchema} />
      <Link
        href="/news"
        className="text-muted-foreground hover:text-primary mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Tất cả tin tức
      </Link>

      <Badge variant="secondary">{article.category}</Badge>
      <h1 className="mt-4 text-3xl font-bold">{article.title}</h1>

      <div className="text-muted-foreground mt-4 flex items-center gap-4 text-sm">
        <span>{article.author}</span>
        <span>•</span>
        <time>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</time>
      </div>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
        <Image src={article.thumbnail} alt={article.title} fill className="object-cover" />
      </div>

      <div className="prose prose-lg mt-8 max-w-none">
        <p>{article.excerpt}</p>
        <p className="text-muted-foreground">
          [Nội dung đầy đủ sẽ được điền theo Figma / bản thật]
        </p>
      </div>
    </Container>
  )
}
