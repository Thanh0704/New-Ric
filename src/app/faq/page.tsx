import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaqClient } from '@/components/faq/faq-client'

export const metadata: Metadata = {
  title: 'Câu hỏi thường gặp',
  description:
    'Câu hỏi thường gặp về dịch vụ, kỹ thuật, bảo mật và hỗ trợ khách hàng của RIC Việt Nam.',
  openGraph: {
    title: 'Câu hỏi thường gặp — RIC Việt Nam',
    description: 'Câu hỏi thường gặp về dịch vụ, kỹ thuật và hỗ trợ của RIC Việt Nam.',
  },
}

export default function FaqPage() {
  return (
    <div className="bg-privacy-bg min-h-screen">
      <div className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-black text-slate-900 uppercase md:text-5xl">
              Câu hỏi thường gặp
            </h1>
            <div className="bg-electric mx-auto mb-10 h-1.5 w-20 rounded-full" />
          </div>

          {/* Interactive: search + tabs + accordion */}
          <FaqClient />

          {/* CTA */}
          <div className="mt-20 flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:flex-row md:p-12">
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
                Không tìm thấy câu trả lời?
              </h2>
              <p className="text-slate-500">
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-primary hover:shadow-primary/30 flex shrink-0 items-center gap-2 rounded-xl px-10 py-4 font-bold text-white transition-all hover:opacity-90 hover:shadow-xl"
            >
              Liên hệ ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
