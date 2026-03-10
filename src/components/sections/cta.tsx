'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { cn } from '@/lib/utils'

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <AnimateOnScroll>
          <div className="bg-primary text-primary-foreground rounded-2xl px-8 py-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Sẵn sàng tối ưu doanh nghiệp?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Liên hệ ngay để nhận tư vấn miễn phí và demo sản phẩm phù hợp với nhu cầu của bạn.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'mt-8 gap-2')}
            >
              Liên hệ ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
