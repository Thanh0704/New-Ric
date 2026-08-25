'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  MessageSquare,
  Inbox,
  Network,
  ShieldCheck,
  Hotel,
  Database,
  Blocks,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/shared/container'

const mainProducts = [
  {
    id: 'ecom',
    category: 'E-Commerce',
    title: 'RIC ECOM',
    desc: 'Giải pháp Bán hàng & thương mại điện tử đa kênh toàn diện. Đồng bộ tồn kho, đơn hàng và khách hàng từ mọi nền tảng về một mối duy nhất.',
    icon: ShoppingCart,
    image: '/images/solutions/ecom.jpg',
    href: '/products/ecom',
    features: [
      'Quản lý đơn hàng đa kênh',
      'Báo cáo doanh thu Real-time',
      'Tích hợp vận chuyển tự động',
    ],
  },
  {
    id: 'erp',
    category: 'Management',
    title: 'RIC ERP',
    desc: 'Quản trị doanh nghiệp tổng thể theo module linh hoạt. Chuẩn hóa quy trình tài chính, kế toán và chuỗi cung ứng cho doanh nghiệp quy mô lớn.',
    icon: Database,
    image: '/images/solutions/ric-erp.jpg',
    href: '/products/ric-erp',
    features: ['Tài chính - Kế toán', 'Quản trị chuỗi cung ứng', 'Quản lý nhân sự (HRM)'],
  },
  {
    id: 'affiliate',
    category: 'Affiliate',
    title: 'RIC AFFILIATE',
    desc: 'Hệ thống Mạng lưới bán hàng & quản lý cộng tác viên. Tự động hóa việc tính toán hoa hồng và đối soát với hàng ngàn đối tác.',
    icon: Network,
    image: '/images/solutions/ric-affiliate.jpg',
    href: '/products/ric-affiliate',
    features: [
      'Quản lý hoa hồng tự động',
      'Hệ thống link giới thiệu',
      'Báo cáo hiệu suất Affiliate',
    ],
  },
  {
    id: 'trust',
    category: 'Security',
    title: 'RIC TRUST',
    desc: 'Giải pháp Chống hàng giả và chống bán lấn kênh. Bảo vệ uy tín thương hiệu và kiểm soát chặt chẽ luồng phân phối hàng hóa trên thị trường.',
    icon: ShieldCheck,
    image: '/images/solutions/ric-trust.jpg',
    href: '/products/ric-trust',
    features: ['Mã QR chống giả mã hóa', 'Cảnh báo vi phạm khu vực', 'Truy xuất nguồn gốc'],
  },
  {
    id: 'ricio',
    category: 'Hospitality',
    title: 'RICIO',
    desc: 'Hệ thống CRM và PMS chuyên sâu cho Villa/Resort. Tối ưu công suất phòng, quản lý booking và chăm sóc khách lưu trú chuyên nghiệp.',
    icon: Hotel,
    image: '/images/solutions/ricio.jpg',
    href: '/products/ricio',
    features: ['Quản lý sơ đồ phòng (PMS)', 'Booking Engine trực tiếp', 'CRM khách du lịch'],
  },
]

const extensionModules = [
  {
    id: 'message',
    title: 'RIC Message',
    desc: 'Marketing Automation. Tự động hóa kịch bản chăm sóc qua Zalo ZNS/SMS, bám đuổi khách hàng theo phễu.',
    icon: MessageSquare,
    href: '/products/ric-message',
  },
  {
    id: 'zhub',
    title: 'ZHUB',
    desc: 'Hộp thoại hợp nhất. Gom tin nhắn đa kênh (Zalo, FB, Web) về một nơi, phân bổ AI Chatbot và nhân viên CSKH.',
    icon: Inbox,
    href: '/products/zhub',
  },
]

export function Solutions() {
  const [activeTab, setActiveTab] = useState(mainProducts[0].id)
  const activeProduct = mainProducts.find((p) => p.id === activeTab)

  return (
    <section className="bg-slate-900 py-24 lg:py-32">
      <Container>
        {/* --- HEADER --- */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-black tracking-widest text-blue-400 uppercase">
            <Blocks className="h-4 w-4" /> Hệ sinh thái giải pháp
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            Nền tảng quản trị <span className="text-blue-500">lõi</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-400">
            Bứt phá giới hạn vận hành với 5 giải pháp phần mềm chuyên sâu, thiết kế riêng cho từng
            đặc thù nghiệp vụ của doanh nghiệp bạn.
          </p>
        </div>

        {/* --- KHU VỰC 1: INTERACTIVE TABS --- */}
        <div className="mb-24 flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* CỘT TRÁI: Menu 5 Sản phẩm */}
          <div className="flex w-full flex-col gap-3 lg:w-1/3">
            {mainProducts.map((product) => {
              const Icon = product.icon
              const isActive = activeTab === product.id
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-blue-500/50 bg-slate-800 shadow-lg shadow-blue-900/20'
                      : 'border-transparent bg-slate-800/30 hover:bg-slate-800/80 hover:shadow-md'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-blue-500"></div>
                  )}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-700 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-black transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`mt-1 text-xs font-bold tracking-wider uppercase transition-colors ${
                        isActive ? 'text-blue-400' : 'text-slate-500'
                      }`}
                    >
                      {product.category}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* CỘT PHẢI: Màn hình hiển thị chi tiết sản phẩm */}
          {activeProduct && (
            <div className="w-full lg:w-2/3">
              <div className="relative h-full min-h-[450px] overflow-hidden rounded-[2.5rem] border border-slate-700/50 bg-slate-900 shadow-2xl transition-all duration-500">
                {/* --- ĐÃ SỬA KHU VỰC ẢNH NỀN --- */}
                <div className="absolute inset-0 z-0">
                  <Image
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    // Đổi object-cover thành object-right để ảnh dạt sang phải, bỏ lớp mờ opacity
                    className="animate-in fade-in zoom-in object-cover object-right duration-700"
                  />
                  {/* Gradient che phủ: Trái đen 95% (để đọc chữ) nhạt dần sang Phải (để khoe ảnh) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
                </div>

                {/* Nội dung thông tin nổi lên trên */}
                <div className="animate-in fade-in slide-in-from-right-8 relative z-10 flex h-full flex-col p-8 duration-500 md:p-12">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30">
                    <activeProduct.icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-4 text-4xl font-black text-white md:text-5xl">
                    {activeProduct.title}
                  </h3>
                  <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-slate-300">
                    {activeProduct.desc}
                  </p>

                  <ul className="mb-10 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
                    {activeProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base font-semibold text-white drop-shadow-md"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href={activeProduct.href}
                      className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900/50"
                    >
                      Xem chi tiết sản phẩm <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- KHU VỰC 2: 2 MODULE MỞ RỘNG (Nằm ngang bên dưới) --- */}
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900/50 p-8 ring-1 ring-white/5 md:p-12">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 bg-blue-600/10 blur-[100px]"></div>

          <div className="relative z-10 mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm font-bold text-slate-300">
              <Zap className="h-4 w-4 text-amber-400" /> Add-on Modules
            </div>
            <h3 className="mt-4 text-2xl font-black text-white md:text-3xl">
              Tích hợp sức mạnh, tối đa chuyển đổi
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {extensionModules.map((module) => {
              const Icon = module.icon
              return (
                <Link
                  key={module.id}
                  href={module.href}
                  className="group flex flex-col items-start gap-6 rounded-3xl bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/80 hover:ring-1 hover:ring-blue-500/50 sm:flex-row md:p-8"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                      {module.title}
                    </h4>
                    <p className="text-sm leading-relaxed font-medium text-slate-400 group-hover:text-slate-300">
                      {module.desc}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
