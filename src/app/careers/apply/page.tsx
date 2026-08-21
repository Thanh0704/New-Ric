'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  UploadCloud,
  Briefcase,
  User,
  Mail,
  Phone,
  Send,
  FileText,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

export default function ApplyPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Khai báo state cho các input
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    message: '',
  })

  // Xử lý khi chọn file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  // Xử lý cập nhật text input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Xử lý gửi Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert('Vui lòng đính kèm CV của bạn!')

    setIsSubmitting(true)

    // Đóng gói dữ liệu gửi đi (có chứa File)
    const data = new FormData()
    data.append('name', formData.name)
    data.append('position', formData.position)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('message', formData.message)
    data.append('cv', file)

    try {
      const response = await fetch('/api/send-cv', {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Có lỗi xảy ra khi gửi hồ sơ. Vui lòng thử lại!')
      }
    } catch (error) {
      alert('Không thể kết nối đến máy chủ.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-500/30">
      <div className="relative z-20 border-b border-slate-200 bg-white pt-8 pb-4">
        <div className="container mx-auto px-6 text-sm font-medium text-slate-500 md:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/careers" className="transition-colors hover:text-blue-600">
              Tuyển dụng
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-slate-900">Gửi hồ sơ</span>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-16 md:px-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Briefcase className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Gửi hồ sơ ứng tuyển
            </h1>
            <p className="text-lg font-medium text-slate-500">
              RIC Vietnam luôn mở cửa chào đón các tài năng công nghệ gia nhập đội ngũ.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-[2rem] border border-green-100 bg-green-50 p-12 text-center shadow-xl">
              <CheckCircle2 className="mx-auto mb-6 h-20 w-20 text-green-500" />
              <h2 className="mb-4 text-3xl font-black text-slate-900">Gửi hồ sơ thành công!</h2>
              <p className="mb-8 text-lg font-medium text-slate-600">
                Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại RIC Vietnam. Phòng Nhân sự (HR) sẽ
                xem xét CV và liên hệ lại với bạn qua Email hoặc Số điện thoại trong thời gian sớm
                nhất.
              </p>
              <Link
                href="/careers"
                className="inline-flex rounded-full bg-slate-900 px-8 py-3.5 font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
              >
                Quay lại trang Tuyển dụng
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-12"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-4 pl-12 font-medium text-slate-900 transition-colors focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Vị trí ứng tuyển <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <select
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pr-4 pl-12 font-medium text-slate-900 transition-colors focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
                    >
                      <option value="">Chọn vị trí...</option>
                      <option value="Frontend">Lập trình viên Frontend (ReactJS/NextJS)</option>
                      <option value="Backend">Lập trình viên Backend (NodeJS/Java)</option>
                      <option value="BA">Chuyên viên Phân tích nghiệp vụ (BA)</option>
                      <option value="Sales">Chuyên viên Kinh doanh phần mềm (B2B Sales)</option>
                      <option value="Hồ sơ mở">Hồ sơ mở (Vị trí khác)</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email liên hệ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-4 pl-12 font-medium text-slate-900 transition-colors focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-4 pl-12 font-medium text-slate-900 transition-colors focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Tải lên CV của bạn (PDF) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition-colors hover:border-blue-500 hover:bg-blue-50">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    {file ? (
                      <div className="flex flex-col items-center text-blue-600">
                        <FileText className="mb-3 h-10 w-10" />
                        <span className="w-full px-4 text-center font-bold break-words">
                          {file.name}
                        </span>
                        <span className="mt-1 text-sm text-slate-500">Nhấn để chọn file khác</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-slate-500">
                        <UploadCloud className="mb-3 h-10 w-10 text-slate-400" />
                        <span className="text-center font-bold text-slate-700">
                          Kéo thả hoặc bấm vào đây để tải lên
                        </span>
                        <span className="mt-1 text-center text-sm">
                          Hỗ trợ định dạng: PDF, DOC, DOCX (Tối đa 5MB)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Thư giới thiệu / Ghi chú thêm
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hãy chia sẻ ngắn gọn về bản thân hoặc định hướng nghề nghiệp của bạn..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-900 transition-colors focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-10 border-t border-slate-100 pt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/40 disabled:opacity-70 disabled:hover:translate-y-0 md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Đang gửi hồ sơ...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
                      Nộp hồ sơ ứng tuyển
                    </>
                  )}
                </button>
                <p className="mt-4 text-xs font-medium text-slate-400">
                  Mọi thông tin và CV của bạn sẽ được bảo mật tuyệt đối.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
