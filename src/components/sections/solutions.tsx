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
} from 'lucide-react'
import { Container } from '@/components/shared/container'

const solutionsData = [
  {
    id: '01',
    category: 'E-Commerce',
    title: 'ECOM',
    desc: 'Giải pháp Bán hàng & thương mại điện tử toàn diện.',
    icon: ShoppingCart,
    image: '/images/solutions/ecom.jpg',
    href: '/products',
    features: ['Quản lý đơn hàng đa kênh', 'Tích hợp vận chuyển', 'Báo cáo doanh thu Real-time'],
  },
  {
    id: '02',
    category: 'Marketing',
    title: 'RIC MESSAGE',
    desc: 'Marketing Automation và Customer Engagement hiệu quả.',
    icon: MessageSquare,
    image: '/images/solutions/ric-message.jpg',
    href: '/products',
    features: [
      'Gửi tin nhắn hàng loạt (ZNS/SMS)',
      'Cá nhân hóa nội dung',
      'Kịch bản Automation chăm sóc',
    ],
  },
  {
    id: '03',
    category: 'Hub',
    title: 'ZHUB',
    desc: 'Unified Chat & Conversation Hub cho doanh nghiệp.',
    icon: Inbox,
    image: '/images/solutions/zhub.jpg',
    href: '/products',
    features: ['Hộp thoại hợp nhất', 'Phân bổ nhân viên CSKH', 'Tích hợp Chatbot AI'],
  },
  {
    id: '04',
    category: 'Affiliate',
    title: 'RIC AFFILIATE',
    desc: 'Hệ thống Mạng lưới bán hàng & cộng tác viên.',
    icon: Network,
    image: '/images/solutions/ric-affiliate.jpg',
    href: '/products',
    features: [
      'Quản lý hoa hồng tự động',
      'Hệ thống link giới thiệu',
      'Báo cáo hiệu suất theo thời gian thực',
    ],
  },
  {
    id: '05',
    category: 'Security',
    title: 'RIC TRUST',
    desc: 'Giải pháp Chống hàng giả và chống bán lấn kênh.',
    icon: ShieldCheck,
    image: '/images/solutions/ric-trust.jpg',
    href: '/products',
    features: ['Mã QR chống giả mã hóa', 'Theo dõi luồng hàng hóa', 'Cảnh báo vi phạm khu vực bán'],
  },
  {
    id: '06',
    category: 'Management',
    title: 'RICIO',
    desc: 'Hệ thống CRM và PMS chuyên sâu cho villa/hotel/resort.',
    icon: Hotel,
    image: '/images/solutions/ricio.jpg',
    href: '/products',
    features: [
      'Quản lý sơ đồ phòng (PMS)',
      'Quản trị tệp khách hàng (CRM)',
      'Booking Engine trực tiếp',
    ],
  },
  {
    id: '07',
    category: 'ERP',
    title: 'RIC ERP',
    desc: 'KDL Quản trị doanh nghiệp theo module linh hoạt.',
    icon: Database,
    image: '/images/solutions/ric-erp.jpg',
    href: '/products',
    features: ['Kế toán - Tài chính', 'Quản trị chuỗi cung ứng', 'Quản trị nhân sự (HRM)'],
  },
]

export function Solutions() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id)
  const activeProduct = solutionsData.find((p) => p.id === activeTab)

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="mb-3 text-sm font-black tracking-widest text-blue-600 uppercase">
            Product Ecosystem
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Khám phá hệ sinh thái RIC
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* CỘT TRÁI: DANH SÁCH TABS */}
          <div className="flex w-full flex-col gap-3 lg:w-1/3">
            {solutionsData.map((product) => {
              const Icon = product.icon
              const isActive = activeTab === product.id
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-blue-600 bg-white shadow-lg shadow-blue-900/5'
                      : 'border-transparent hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-base font-bold ${isActive ? 'text-blue-600' : 'text-slate-900'}`}
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">{product.category}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* CỘT PHẢI: CHI TIẾT SẢN PHẨM */}
          {activeProduct && (
            <div className="w-full lg:w-2/3">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                {/* Khu vực ảnh */}
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
                      {activeProduct.category}
                    </span>
                  </div>
                </div>

                {/* Khu vực nội dung */}
                <div className="p-8 md:p-10">
                  <h3 className="mb-4 text-3xl font-black text-slate-900">{activeProduct.title}</h3>
                  <p className="mb-8 text-base font-medium text-slate-600">{activeProduct.desc}</p>

                  <ul className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {activeProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={activeProduct.href}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
                  >
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
