import Link from 'next/link'
import { Quote } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Testimonials() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <AnimateOnScroll>
          <Quote className="text-primary mx-auto mb-6 h-12 w-12" />
          <h2 className="mx-auto mb-10 max-w-4xl text-2xl leading-relaxed font-medium text-slate-800 italic md:text-3xl dark:text-slate-200">
            &ldquo;Giải pháp của RIC Việt Nam đã giúp quy trình quản lý của chúng tôi rút ngắn 40%
            thời gian vận hành và tăng doanh thu vượt ngoài mong đợi trong năm vừa qua.&rdquo;
          </h2>
          <div className="flex flex-col items-center">
            <div className="border-primary/20 mb-4 size-16 overflow-hidden rounded-full border-2 bg-slate-300" />
            <p className="font-bold">Phạm Hiếu</p>
            <p className="text-sm text-slate-500">
              Trưởng phòng Marketing -{' '}
              <Link
                href="https://dichvu3t.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Dichvu3T.com
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
