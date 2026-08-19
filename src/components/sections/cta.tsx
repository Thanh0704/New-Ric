import React from 'react'
import { Rocket, Handshake, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Rocket,
    title: 'Đầu tư & Phát triển',
    description:
      'Chúng tôi không ngừng đầu tư vào các công nghệ lõi (AI, Cloud, Big Data) để mang lại lợi thế cạnh tranh cho khách hàng.',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    border: 'border-blue-200',
  },
  {
    icon: Handshake,
    title: 'Đồng hành & Cam kết',
    description:
      'RIC cam kết đồng hành cùng doanh nghiệp từ khâu lên ý tưởng đến khi triển khai và vận hành ổn định.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    border: 'border-emerald-200',
  },
  {
    icon: ShieldCheck,
    title: 'Đối tác Tin cậy',
    description:
      'Hàng trăm doanh nghiệp đã tin tưởng lựa chọn RIC là đối tác chiến lược dài hạn trong kỷ nguyên số.',
    color: 'text-violet-600',
    bg: 'bg-violet-100',
    border: 'border-violet-200',
  },
]

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* KHỐI 3 GIÁ TRỊ CỐT LÕI (PILLARS) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50"
            >
              <div
                className={`h-16 w-16 rounded-2xl ${pillar.bg} ${pillar.border} mb-8 flex items-center justify-center border transition-transform duration-500 group-hover:scale-110`}
              >
                <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
              </div>
              <h3 className="mb-4 font-sans text-2xl font-black text-slate-900">{pillar.title}</h3>
              <p className="leading-relaxed font-medium text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
