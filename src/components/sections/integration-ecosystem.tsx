import React from 'react'
import { MessageCircle, CreditCard, Truck, Globe2, Share2, Database, Workflow } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const integrationCategories = [
  {
    name: 'Zalo & Social',
    icon: MessageCircle,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
    items: ['Zalo OA', 'Zalo ZNS', 'Zalo Mini App', 'Facebook API'],
  },
  {
    name: 'Payment & Finance',
    icon: CreditCard,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/20',
    items: ['VNPay', 'Momo', 'ZaloPay', 'Hóa đơn điện tử'],
  },
  {
    name: 'Logistics',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/20',
    items: ['Giao Hàng Nhanh', 'Viettel Post', 'VNPost', 'Ahamove'],
  },
  {
    name: 'OTA & Booking',
    icon: Globe2,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
    items: ['Agoda', 'Booking.com', 'Traveloka', 'Expedia'],
  },
]

export function IntegrationEcosystem() {
  return (
    <section
      className="bg-slate-930 relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: '#0b1329' }}
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-white/5"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-white/5"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]"></div>

      <Container className="relative z-10">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <AnimateOnScroll>
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30">
                <Workflow className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
              Khả năng tích hợp{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                không giới hạn
              </span>
            </h2>
            <p className="text-lg font-medium text-slate-400">
              RICVINA đóng vai trò là "Trái tim" kết nối mọi nền tảng vệ tinh. Dữ liệu của bạn sẽ tự
              động đồng bộ xuyên suốt từ Marketing, Bán hàng, Thanh toán đến Vận chuyển.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Lưới các nhóm tích hợp */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <AnimateOnScroll key={category.name} delay={index * 100}>
                <div
                  className={`group relative h-full rounded-3xl border ${category.borderColor} bg-slate-800/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/80`}
                >
                  {/* Icon Header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bgColor} ${category.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>

                  {/* List Items */}
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300">
                        <Share2 className={`h-4 w-4 ${category.color} opacity-70`} />
                        <span className="font-medium transition-colors group-hover:text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* API Tag */}
                  <div className="mt-8 border-t border-slate-700/50 pt-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/50 px-3 py-1 text-xs font-bold text-slate-400">
                      <Database className="h-3 w-3" /> Ready API
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-16 text-center">
            <p className="font-medium text-slate-400">
              Và hàng ngàn ứng dụng khác thông qua hệ thống{' '}
              <span className="font-bold text-white">Open API</span> của chúng tôi.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
