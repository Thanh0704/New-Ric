import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Monitor, ShoppingCart, Megaphone, Headphones } from 'lucide-react'
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

const services = [
  {
    icon: Monitor,
    title: 'Hệ thống quản trị',
    description:
      'Số hóa toàn bộ quy trình quản lý doanh nghiệp trên một nền tảng duy nhất, giúp lãnh đạo đưa ra quyết định dựa trên dữ liệu thời gian thực.',
  },
  {
    icon: ShoppingCart,
    title: 'Hỗ trợ kinh doanh',
    description:
      'Cung cấp bộ công cụ thông minh hỗ trợ đội ngũ Sales và tích hợp các giải pháp thương mại điện tử hiện đại.',
  },
  {
    icon: Megaphone,
    title: 'Hệ thống truyền thông',
    description:
      'Giải pháp truyền thông đa kênh chuyên nghiệp giúp thông điệp chạm đến đúng khách hàng mục tiêu.',
  },
  {
    icon: Headphones,
    title: 'Chăm sóc khách hàng',
    description:
      'Tự động hóa quy trình chăm sóc sau bán hàng, biến mỗi giao dịch thành một trải nghiệm hài lòng tuyệt đối.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Contact info + form */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
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

      {/* Section 2: Service cards */}
      <section className="bg-white px-6 py-20 md:px-20 dark:bg-slate-900/30">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Dịch vụ chiến lược</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              Hệ sinh thái giải pháp số hóa toàn diện giúp doanh nghiệp tối ưu hóa quy trình và tăng
              trưởng bền vững.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="hover:shadow-electric/20 hover:border-electric/50 group transform cursor-pointer rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="group-hover:bg-electric/10 group-hover:text-electric mb-6 inline-flex rounded-xl bg-slate-100 p-4 text-slate-600 transition-colors duration-300 dark:bg-slate-700 dark:text-slate-400">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="group-hover:text-electric mb-3 text-xl font-bold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
