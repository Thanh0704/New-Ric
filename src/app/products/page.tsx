import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description:
    'Chúng tôi cung cấp hệ sinh thái phần mềm chuẩn mực, giúp doanh nghiệp tối ưu hóa vận hành, bứt phá doanh thu và kiến tạo lợi thế cạnh tranh số.',
  openGraph: {
    title: 'Sản phẩm RIC Việt Nam — Giải pháp Công nghệ Toàn diện',
    description:
      'Chúng tôi cung cấp hệ sinh thái phần mềm chuẩn mực, giúp doanh nghiệp tối ưu hóa vận hành, bứt phá doanh thu và kiến tạo lợi thế cạnh tranh số.',
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F5F7] px-6 py-24 md:px-20 md:py-32 dark:bg-slate-900">
        <div className="bg-grid-pattern absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <div className="space-y-6">
            <span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase">
              Danh mục sản phẩm
            </span>
            <h1 className="text-4xl leading-tight font-black text-slate-900 md:text-6xl dark:text-white">
              Giải pháp Công nghệ <br className="hidden md:block" />
              Toàn diện cho Doanh nghiệp
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Chúng tôi cung cấp hệ sinh thái phần mềm chuẩn mực, giúp doanh nghiệp tối ưu hóa vận
              hành, bứt phá doanh thu và kiến tạo lợi thế cạnh tranh số.
            </p>
          </div>
        </div>
      </section>

      {/* Product sections */}
      <div className="dark:bg-background-dark bg-white">
        {products.map((product, index) => {
          const isEven = index % 2 === 0
          const blobClasses = [
            'bg-primary/10 absolute -right-6 -bottom-6 h-32 w-32 rounded-full blur-3xl',
            'bg-electric/10 absolute -top-6 -left-6 h-32 w-32 rounded-full blur-3xl',
            'bg-primary/5 pointer-events-none absolute inset-0 rounded-2xl',
            'bg-primary/5 absolute -bottom-6 -left-6 h-32 w-32 rounded-full blur-3xl',
          ]

          const imageEl = (
            <div className={isEven ? 'relative order-2 lg:order-1' : 'relative'}>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={blobClasses[index]} />
            </div>
          )

          const textEl = (
            <div
              className={isEven ? 'order-1 flex flex-col gap-6 lg:order-2' : 'flex flex-col gap-6'}
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <p
                  className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="text-electric h-5 w-5 shrink-0 fill-current" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="bg-primary mt-4 w-fit rounded-lg px-8 py-3 font-bold text-white transition-all hover:shadow-lg"
              >
                Đăng ký tư vấn
              </Link>
            </div>
          )

          return (
            <AnimateOnScroll key={product.id}>
              <section
                className={`border-b border-slate-100 px-6 py-24 last:border-b-0 md:px-20 dark:border-slate-800 ${
                  isEven ? '' : 'bg-slate-50 dark:bg-slate-900/30'
                }`}
              >
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
                  {isEven ? (
                    <>
                      {imageEl}
                      {textEl}
                    </>
                  ) : (
                    <>
                      {textEl}
                      {imageEl}
                    </>
                  )}
                </div>
              </section>
            </AnimateOnScroll>
          )
        })}
      </div>
    </>
  )
}
