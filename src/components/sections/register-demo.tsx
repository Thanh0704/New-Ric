'use client'

import React, { useState } from 'react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { CheckCircle2, Send } from 'lucide-react'

export function RegisterDemo() {
  // Quản lý trạng thái form (Giống việc xử lý Request trong Laravel)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Giả lập thời gian gửi API (Sau này bạn thay bằng Axios gọi về Laravel API)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <section
      // bg-fixed giúp tạo hiệu ứng Parallax (ảnh đứng im khi cuộn chuột) cực kỳ đẹp mắt
      className="relative bg-cover bg-fixed bg-center py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/hero/form-dk.jpg')" }} // Hãy thay bằng ảnh nền công nghệ tương lai của bạn
    >
      {/* Lớp phủ mờ (Overlay) màu xanh đen đậm để làm nổi bật chữ và form */}
      <div className="absolute inset-0 bg-[#0b1329]/80 backdrop-blur-[2px]"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* NỬA BÊN TRÁI: NỘI DUNG CONTENT */}
          <AnimateOnScroll>
            <div className="text-white">
              <span className="mb-4 block text-sm font-bold tracking-widest text-[#3b82f6] uppercase">
                // Bắt đầu ngay hôm nay
              </span>
              <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl">
                Trải nghiệm kỷ nguyên công nghệ số cùng RIC Việt Nam
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và thiết kế cho
                doanh nghiệp bạn một bản demo giải pháp hoàn toàn miễn phí, bám sát thực tế vận
                hành.
              </p>

              {/* Danh sách các lợi ích (Checklist) */}
              <ul className="space-y-4">
                {[
                  'Tư vấn chiến lược chuyển đổi số 1-1 miễn phí',
                  'Trải nghiệm thực tế các tính năng của hệ thống',
                  'Phân tích và tối ưu hóa quy trình doanh nghiệp',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-6 w-6 text-[#3b82f6]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* NỬA BÊN PHẢI: KHỐI FORM ĐĂNG KÝ (HIỆU ỨNG GLASSMORPHISM) */}
          <AnimateOnScroll>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg md:p-10">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-white">Đăng ký Demo</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </div>

              {isSuccess ? (
                // Màn hình hiển thị khi đăng ký thành công
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-white">Đăng ký thành công!</h4>
                  <p className="text-slate-300">
                    Cảm ơn bạn. Chuyên viên của chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-bold text-[#3b82f6] transition-colors hover:text-white"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                // Form điền thông tin
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 transition-all outline-none focus:border-[#3b82f6] focus:bg-white/10 focus:ring-1 focus:ring-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Nhập số điện thoại liên hệ"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 transition-all outline-none focus:border-[#3b82f6] focus:bg-white/10 focus:ring-1 focus:ring-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email doanh nghiệp *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="ví dụ: admin@congty.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 transition-all outline-none focus:border-[#3b82f6] focus:bg-white/10 focus:ring-1 focus:ring-[#3b82f6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-8 py-4 font-bold text-white transition-all hover:bg-[#2563eb] disabled:opacity-70"
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
