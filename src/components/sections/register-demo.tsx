'use client'

import React, { useState } from 'react'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { CheckCircle2, Send } from 'lucide-react'

export function RegisterDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    // TỐI ƯU MOBILE: Giảm py-20 xuống py-16
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-32">
      <div className="pointer-events-none absolute -top-40 left-0 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/40 blur-[100px]"></div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1800px] lg:w-[96%] lg:px-12">
        {/* TỐI ƯU MOBILE: gap-10 thay vì gap-16 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-24">
          <AnimateOnScroll>
            <div>
              <span className="mb-3 block text-xs font-bold tracking-widest text-blue-600 uppercase md:mb-4 md:text-sm">
                // Bắt đầu ngay hôm nay
              </span>
              {/* TỐI ƯU MOBILE: text-3xl */}
              <h2 className="mb-4 text-3xl leading-tight font-extrabold text-slate-900 md:mb-6 md:text-5xl lg:text-6xl">
                Trải nghiệm kỷ nguyên <br className="hidden md:block" /> công nghệ số
              </h2>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:mb-10 md:text-xl">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và thiết kế cho
                doanh nghiệp bạn một bản demo giải pháp hoàn toàn miễn phí, bám sát thực tế vận
                hành.
              </p>

              <ul className="space-y-4 md:space-y-5">
                {[
                  'Tư vấn chiến lược chuyển đổi số 1-1 miễn phí',
                  'Trải nghiệm thực tế các tính năng của hệ thống',
                  'Phân tích và tối ưu hóa quy trình doanh nghiệp',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 md:items-center md:gap-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-500 md:mt-0 md:h-7 md:w-7" />
                    <span className="text-base font-medium md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            {/* TỐI ƯU MOBILE: p-6 md:p-12 */}
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/50 md:rounded-[2.5rem] md:p-12 lg:ml-auto">
              <div className="mb-8 text-left md:mb-10">
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Đăng ký Demo</h3>
                <p className="mt-2 text-sm text-slate-500 md:mt-3 md:text-base">
                  Thông tin của bạn được bảo mật tuyệt đối.
                </p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center md:rounded-3xl md:p-10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/30 md:mb-6 md:h-20 md:w-20">
                    <CheckCircle2 className="h-8 w-8 text-white md:h-10 md:w-10" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-slate-900 md:mb-3 md:text-2xl">
                    Đăng ký thành công!
                  </h4>
                  <p className="text-sm text-slate-600 md:text-base">
                    Cảm ơn bạn. Chuyên viên của chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700 md:mt-8 md:text-base"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-700 md:mb-3"
                    >
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 md:rounded-2xl md:px-5 md:py-4 md:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-700 md:mb-3"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Nhập số điện thoại liên hệ"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 md:rounded-2xl md:px-5 md:py-4 md:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700 md:mb-3"
                    >
                      Email doanh nghiệp *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="ví dụ: admin@congty.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 md:rounded-2xl md:px-5 md:py-4 md:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-700 disabled:opacity-70 md:mt-8 md:gap-3 md:rounded-2xl md:px-8 md:py-5 md:text-base"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'LIÊN HỆ TƯ VẤN'}
                    {!isSubmitting && (
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-5 md:w-5" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
