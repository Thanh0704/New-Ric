'use client'

import React, { useState } from 'react'
import { Container } from '@/components/shared/container'
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
    <section
      className="relative bg-cover bg-fixed bg-center py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/hero/form-dk.jpg')" }}
    >
      {/* LỚP PHỦ MỜ ẢO: Chỉ 40% màu tối + mờ nhẹ 2px để giữ trọn vẹn nét đẹp của ảnh */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <AnimateOnScroll>
            <div className="text-white">
              <span className="mb-4 block text-sm font-bold tracking-widest text-blue-200 uppercase">
                // Bắt đầu ngay hôm nay
              </span>
              <h2 className="mb-6 text-3xl leading-tight font-extrabold drop-shadow-md md:text-4xl lg:text-5xl">
                Trải nghiệm kỷ nguyên công nghệ số cùng RIC Việt Nam
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-100 drop-shadow-sm">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và thiết kế cho
                doanh nghiệp bạn một bản demo giải pháp hoàn toàn miễn phí, bám sát thực tế vận
                hành.
              </p>

              <ul className="space-y-4">
                {[
                  'Tư vấn chiến lược chuyển đổi số 1-1 miễn phí',
                  'Trải nghiệm thực tế các tính năng của hệ thống',
                  'Phân tích và tối ưu hóa quy trình doanh nghiệp',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white drop-shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl backdrop-blur-lg md:p-10">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900">Đăng ký Demo</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-slate-900">Đăng ký thành công!</h4>
                  <p className="text-slate-600">
                    Cảm ơn bạn. Chuyên viên của chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Nhập số điện thoại liên hệ"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Email doanh nghiệp *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="ví dụ: admin@congty.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 disabled:opacity-70"
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
      </Container>
    </section>
  )
}
