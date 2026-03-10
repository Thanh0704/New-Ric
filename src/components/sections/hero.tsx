'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-gradient-to-b py-24 sm:py-32">
      <Container className="text-center">
        <AnimateOnScroll>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Giải pháp công nghệ <span className="text-primary">toàn diện</span> cho doanh nghiệp
            Việt Nam
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Tối ưu vận hành, tăng trưởng doanh thu với hệ thống quản lý thông minh. Được tin dùng
            bởi hơn 100 doanh nghiệp trên cả nước.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/products" className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}>
              Khám phá sản phẩm
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
