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
    // THAY ĐỔI: Chuyển hoàn toàn sang nền sáng (bg-slate-50) để bật lên so với khối Tối ở trên
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Vệt sáng trang trí nền nhẹ nhàng */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/40 blur-[100px]"></div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1800px] lg:w-[96%] lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* CỘT TRÁI: TEXT (Chữ Đen/Xám đậm sang trọng) */}
          <AnimateOnScroll>
            <div>
              <span className="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase">
                // Bắt đầu ngay hôm nay
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
                Trải nghiệm kỷ nguyên <br /> công nghệ số
              </h2>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và thiết kế cho
                doanh nghiệp bạn một bản demo giải pháp hoàn toàn miễn phí, bám sát thực tế vận
                hành.
              </p>

              <ul className="space-y-5">
                {[
                  'Tư vấn chiến lược chuyển đổi số 1-1 miễn phí',
                  'Trải nghiệm thực tế các tính năng của hệ thống',
                  'Phân tích và tối ưu hóa quy trình doanh nghiệp',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-slate-700">
                    <CheckCircle2 className="h-7 w-7 shrink-0 text-blue-500" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* CỘT PHẢI: FORM ĐĂNG KÝ (Nền trắng tinh, đổ bóng mịn) */}
          <AnimateOnScroll>
            <div className="relative ml-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12">
              <div className="mb-10 text-left">
                <h3 className="text-3xl font-bold text-slate-900">Đăng ký Demo</h3>
                <p className="mt-3 text-base text-slate-500">
                  Thông tin của bạn được bảo mật tuyệt đối.
                </p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-green-200 bg-green-50 p-10 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/30">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="mb-3 text-2xl font-bold text-slate-900">Đăng ký thành công!</h4>
                  <p className="text-slate-600">
                    Cảm ơn bạn. Chuyên viên của chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-base font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-3 block text-sm font-bold text-slate-700">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-3 block text-sm font-bold text-slate-700">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Nhập số điện thoại liên hệ"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-3 block text-sm font-bold text-slate-700">
                      Email doanh nghiệp *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="ví dụ: admin@congty.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-700 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'LIÊN HỆ TƯ VẤN'}
                    {!isSubmitting && (
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
