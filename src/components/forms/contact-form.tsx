'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const contactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(9, 'Số điện thoại không hợp lệ'),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Vui lòng nhập ít nhất 10 ký tự'),
})

type ContactData = z.infer<typeof contactSchema>

const labelClass =
  'ml-1 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400'
const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'
const errorClass = 'mt-1 ml-1 text-xs text-red-500'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('') // Thêm state để bắt lỗi kết nối

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })

  // ĐÃ SỬA: Hàm gửi dữ liệu thực tế đến API
  async function onSubmit(data: ContactData) {
    setSubmitError('') // Xóa lỗi cũ trước khi gửi

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        // Gửi thành công
        setSubmitted(true)
        reset()
      } else {
        // Lỗi từ backend (VD: sai mật khẩu email, lỗi server)
        setSubmitError(result.message || 'Có lỗi xảy ra khi gửi. Vui lòng thử lại.')
      }
    } catch (error) {
      // Lỗi mạng hoặc không gọi được API
      setSubmitError('Lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-700">Gửi thành công!</p>
        <p className="mt-2 text-sm text-green-600">Chúng tôi sẽ liên hệ lại trong 24 giờ.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-xl border border-green-300 px-6 py-2 text-sm font-semibold text-green-700 transition-all hover:bg-green-100"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelClass}>
            Họ và tên *
          </label>
          <input
            id="name"
            placeholder="Nguyễn Văn A"
            className={inputClass}
            {...register('name')}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@company.com"
            className={inputClass}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="phone" className={labelClass}>
            Số điện thoại *
          </label>
          <input
            id="phone"
            placeholder="0123 456 789"
            className={inputClass}
            {...register('phone')}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className={labelClass}>
            Công ty
          </label>
          <input
            id="company"
            placeholder="Tên công ty (không bắt buộc)"
            className={inputClass}
            {...register('company')}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>Dịch vụ quan tâm</label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value ?? ''} onValueChange={field.onChange}>
              <SelectTrigger className="focus-visible:ring-primary h-auto w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus-visible:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <SelectValue placeholder="Chọn dịch vụ..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hệ thống quản trị (ERP) ">Hệ thống quản trị (ERP)</SelectItem>
                <SelectItem value="Chăm sóc khách hàng (CRM) ">
                  Chăm sóc khách hàng (CRM)
                </SelectItem>
                <SelectItem value="Marketing kĩ thuật số  ">Marketing kĩ thuật số</SelectItem>
                <SelectItem value="Phát triển phần mềm">Phát triển phần mềm</SelectItem>
                <SelectItem value="Thương mại điện tử">Thương mại điện tử</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className={labelClass}>
          Nội dung *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Mô tả nhu cầu của bạn..."
          className={inputClass}
          {...register('message')}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* Hiển thị thông báo lỗi API nếu có */}
      {submitError && (
        <div className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-600">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-electric w-full cursor-pointer rounded-xl py-4 text-lg font-bold text-slate-900 transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] active:scale-[0.99] disabled:opacity-60"
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu ngay'}
      </button>

      <p className="mt-4 text-center text-[10px] tracking-widest text-slate-400 uppercase">
        Cam kết bảo mật thông tin 100%
      </p>
    </form>
  )
}
