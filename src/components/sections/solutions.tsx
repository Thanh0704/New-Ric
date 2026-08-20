'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { Container } from '@/components/shared/container'
import {
  ArrowRight,
  Globe,
  Mail,
  Megaphone,
  MessageCircle,
  Search,
  Smartphone,
  Store,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const solutionIcons = [
  { icon: MessageCircle, label: 'ZBS' },
  { icon: Mail, label: 'SMS' },
  { icon: Megaphone, label: 'Zalo Mini App' },
  { icon: Store, label: 'Zalo OA' },
  { icon: Globe, label: 'Web' },
  { icon: Smartphone, label: 'App' },
]

const solutionsData = [
  {
    id: '01',
    category: 'E-Commerce',
    title: 'ECOM',
    desc: 'Giải pháp Bán hàng & thương mại điện tử toàn diện.',
    image: '/images/solutions/ecom.jpg', // Nhớ thay bằng tên file ảnh thật của bạn
    href: '/products',
  },
  {
    id: '02',
    category: 'Marketing',
    title: 'RIC MESSAGE MARKETING',
    desc: 'Marketing Automation và Customer Engagement hiệu quả.',
    image: '/images/solutions/ric-message.jpg',
    href: '/products',
  },
  {
    id: '03',
    category: 'Hub',
    title: 'ZHUB',
    desc: 'Unified Chat & Conversation Hub cho doanh nghiệp.',
    image: '/images/solutions/zhub.jpg',
    href: '/products',
  },
  {
    id: '04',
    category: 'Affiliate',
    title: 'RIC AFFILIATE',
    desc: 'Hệ thống Mạng lưới bán hàng & cộng tác viên.',
    image: '/images/solutions/ric-affiliate.jpg',
    href: '/products',
  },
  {
    id: '05',
    category: 'Security',
    title: 'RIC TRUST',
    desc: 'Giải pháp Chống hàng giả và chống bán lấn kênh.',
    image: '/images/solutions/ric-trust.jpg',
    href: '/products',
  },
  {
    id: '06',
    category: 'Management',
    title: 'RICIO',
    desc: 'Hệ thống CRM và PMS chuyên sâu cho villa/hotel/resort.',
    image: '/images/solutions/ricio.jpg',
    href: '/products',
  },
  {
    id: '07',
    category: 'ERP',
    title: 'RIC ERP',
    desc: 'KDL Quản trị doanh nghiệp theo module linh hoạt.',
    image: '/images/solutions/ric-erp.jpg',
    href: '/products',
  },
]

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % solutionsData.length)
  }, [])

  useEffect(() => {
    const autoPlayInterval = setInterval(next, 5000)

    // Clear (hủy) cái đồng hồ đếm ngược cũ đi
    return () => clearInterval(autoPlayInterval)
  }, [next, activeIndex]) // <--- THÊM activeIndex VÀO ĐÂY

  return (
    <section className="relative z-20 pb-0">
      <Container>
        {/* KHU VỰC 1: BOX TRẮNG VÀ SEARCH */}
        <div className="mb-0 -translate-y-1/2 transform rounded-2xl border border-slate-100 bg-white p-6 shadow-xl md:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto grid grid-cols-4 gap-4 sm:grid-cols-6">
            {solutionIcons.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex cursor-pointer flex-col items-center rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-[#3b82f6]/30 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <Icon className="mb-2 h-6 w-6 text-[#3b82f6]" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto -mt-6 mb-16 max-w-2xl md:-mt-10">
          <div className="group relative">
            <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#3b82f6]" />
            <input
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-4 pl-12 text-sm text-slate-800 shadow-md transition-all outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="Tìm kiếm giải pháp chuyển đổi số..."
              type="text"
              readOnly
            />
          </div>
        </div>

        {/* TIÊU ĐỀ ĐƯỢC CĂN GIỮA (THÊM flex flex-col items-center text-center) */}
        <AnimateOnScroll>
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase md:text-4xl dark:text-white">
              Sản phẩm nổi bật
            </h2>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-[#3b82f6]" />
          </div>
        </AnimateOnScroll>
      </Container>

      {/* KHU VỰC 2: CAROUSEL VÒM CUNG */}
      <div className="relative mt-8 flex h-[600px] w-full items-center justify-center overflow-hidden bg-[#0b1329] md:h-[700px] lg:h-[750px]">
        {/* TRỤC QUAY */}
        <div className="absolute bottom-[-150px] left-1/2 h-0 w-0 md:bottom-[-300px] lg:bottom-[-400px]">
          {solutionsData.map((item, index) => {
            const total = solutionsData.length
            const half = Math.floor(total / 2)
            let offset = index - activeIndex

            if (offset > half) offset -= total
            if (offset < -half) offset += total

            const absOffset = Math.abs(offset)
            const isActive = absOffset === 0

            const angleStep = 18
            const angle = offset * angleStep

            let opacityClass = 'opacity-0 pointer-events-none'
            let scaleClass = 'scale-50'

            if (absOffset === 0) {
              opacityClass = 'opacity-100'
              scaleClass = 'scale-110'
            } else if (absOffset === 1) {
              opacityClass = 'opacity-80'
              scaleClass = 'scale-95'
            } else if (absOffset === 2) {
              opacityClass = 'opacity-40'
              scaleClass = 'scale-80'
            } else if (absOffset === 3) {
              opacityClass = 'opacity-15'
              scaleClass = 'scale-65'
            }

            return (
              <div
                key={item.id}
                className="absolute bottom-0 left-1/2 origin-bottom transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  zIndex: 50 - absOffset,
                }}
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-28 w-28 -translate-y-[450px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-1000 sm:h-36 sm:w-36 sm:-translate-y-[550px] md:h-44 md:w-44 md:-translate-y-[750px] lg:h-56 lg:w-56 lg:-translate-y-[900px] ${opacityClass} ${scaleClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay mờ dần */}
                  <div
                    className={`absolute inset-0 bg-[#0b1329] transition-opacity duration-1000 ${
                      isActive ? 'opacity-0' : 'opacity-60 hover:opacity-30'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* KHỐI NỘI DUNG Ở GIỮA */}
        <div className="absolute bottom-10 z-20 flex w-full max-w-3xl flex-col items-center px-6 text-center md:bottom-12 lg:bottom-16">
          <span className="mb-4 text-xs font-black tracking-[0.2em] text-[#3b82f6] uppercase">
            {solutionsData[activeIndex].category}
          </span>
          <h3 className="mb-5 text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {solutionsData[activeIndex].title}
          </h3>
          <p className="mb-10 line-clamp-2 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {solutionsData[activeIndex].desc}
          </p>
          <Link
            href={solutionsData[activeIndex].href}
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black tracking-wider text-slate-900 transition-all hover:scale-105 hover:bg-[#3b82f6] hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            TÌM HIỂU CHI TIẾT
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
