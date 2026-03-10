'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(9, 'Số điện thoại không hợp lệ'),
  company: z.string().optional(),
  message: z.string().min(10, 'Vui lòng nhập ít nhất 10 ký tự'),
})

type ContactData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data: ContactData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-700">Gửi thành công!</p>
        <p className="mt-2 text-sm text-green-600">Chúng tôi sẽ liên hệ lại trong 24 giờ.</p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Gửi tin nhắn khác
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Họ và tên *</Label>
        <Input id="name" placeholder="Nguyễn Văn A" {...register('name')} />
        {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="email@company.com" {...register('email')} />
          {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" placeholder="0123 456 789" {...register('phone')} />
          {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="company">Công ty</Label>
        <Input id="company" placeholder="Tên công ty (không bắt buộc)" {...register('company')} />
      </div>

      <div>
        <Label htmlFor="message">Nội dung *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Mô tả nhu cầu của bạn..."
          {...register('message')}
        />
        {errors.message && (
          <p className="text-destructive mt-1 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
      </Button>
    </form>
  )
}
