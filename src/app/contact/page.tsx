import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với RIC Vietnam để được tư vấn giải pháp công nghệ.',
  openGraph: {
    title: 'Liên hệ',
    description: 'Liên hệ với RIC Vietnam để được tư vấn giải pháp công nghệ.',
  },
}

const contactItems = [
  {
    icon: MapPin,
    label: 'Văn phòng Hà Nội',
    value: '38 Thâm Tâm, Yên Hoà, Hà Nội, Việt Nam',
  },
  { icon: Phone, label: 'Hotline tư vấn', value: '+84 (0) 123 456 789' },
  { icon: Mail, label: 'Email hỗ trợ', value: 'contact@ric.vn' },
]

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Contact info + form */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-300 grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {' '}
          {/* Left: info + map */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="bg-primary/10 text-primary inline-block rounded px-3 py-1 text-xs font-bold tracking-widest uppercase">
                Liên hệ trực tiếp
              </span>
              <h1 className="text-4xl font-black text-slate-900 md:text-5xl dark:text-slate-100">
                Kết nối cùng
                <br />
                <span className="text-primary">RIC Việt Nam</span>
              </h1>
              <p className="max-w-md text-slate-600 dark:text-slate-400">
                Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng doanh nghiệp của bạn trong hành
                trình chuyển đổi số.
              </p>
            </div>

            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-primary shrink-0 rounded-xl border border-slate-100 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.label}</h4>
                    <p className="mt-1 text-sm text-slate-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-inner dark:border-slate-800">
              <iframe
                src="https://maps.google.com/maps?q=38+Th%C3%A2m+T%C3%A2m%2C+Y%C3%AAn+Ho%C3%A0%2C+H%C3%A0+N%E1%BB%99i%2C+Vi%E1%BB%87t+Nam&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí văn phòng RIC Việt Nam"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          {/* Right: form card */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Gửi yêu cầu cho chúng tôi
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
