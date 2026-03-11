'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll className="z-10 flex flex-col gap-8">
            <div className="space-y-4">
              <span className="bg-primary/10 text-primary inline-block rounded px-3 py-1 text-xs font-bold tracking-widest uppercase">
                Đối tác Chuyển đổi số
              </span>
              <h1 className="text-5xl leading-[1.1] font-black tracking-tight md:text-7xl">
                Tiên phong chuyển đổi số cùng <span className="text-primary">RIC Việt Nam</span>
              </h1>
              <p className="max-w-lg text-lg text-slate-600 dark:text-slate-400">
                Đối tác tin cậy đồng hành cùng doanh nghiệp trong kỷ nguyên công nghệ. Chúng tôi
                cung cấp giải pháp Marketing và Phát triển phần mềm toàn diện.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8 py-4 text-lg font-bold text-slate-900 hover:shadow-[0_0_20px_rgba(92,152,215,0.4)]',
                )}
              >
                Tư vấn ngay
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-xl border-2 border-slate-200 px-8 py-4 text-lg font-bold',
                )}
              >
                Khám phá giải pháp
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-200 shadow-2xl dark:bg-slate-800">
              <Image
                src="/images/hero/hero.png"
                alt="RIC Việt Nam - Giải pháp Chuyển đổi số"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white p-6 shadow-xl md:block dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <p className="text-xs text-slate-500">Tăng trưởng bền vững</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
      <div className="bg-primary/5 absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
    </section>
  )
}
