'use client'

import React, { useRef, useState, useEffect, MouseEvent } from 'react'
import Link from 'next/link'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Dữ liệu mẫu bài viết
const newsData = [
  {
    id: 1,
    title: 'Xu hướng Residence xanh: Lựa chọn sống bền vững của cư dân hiện đại',
    excerpt:
      'Trong bối cảnh đô thị hóa ngày càng nhanh, Residence xanh đang trở thành xu hướng sống được nhiều gia đình ưu tiên lựa chọn.',
    date: '2026-01-30',
    image: '/images/hero/hero-bg.jpg',
    slug: '/tin-tuc/xu-huong-residence-xanh',
  },
  {
    id: 2,
    title: 'Cuộc sống tại Residence: Khi "nhà" không chỉ là nơi để ở',
    excerpt:
      'Một Residence hiện đại không chỉ cung cấp chỗ ở, mà còn kiến tạo phong cách sống trọn vẹn cho cư dân từ tiện ích nội khu đến cộng đồng.',
    date: '2026-01-30',
    image: '/images/solutions/app-web-ecosystem.png',
    slug: '/tin-tuc/cuoc-song-tai-residence',
  },
  {
    id: 3,
    title: 'Vì sao Residence khép kín ngày càng được ưa chuộng?',
    excerpt:
      'An ninh và sự riêng tư đang trở thành tiêu chí hàng đầu khi lựa chọn nơi an cư. Mô hình Residence khép kín đáp ứng trọn vẹn nhu cầu này.',
    date: '2026-01-30',
    image: '/images/solutions/zalo-mini-app.png',
    slug: '/tin-tuc/vi-sao-residence-khep-kin',
  },
  {
    id: 4,
    title: 'Thiết kế Residence hiện đại: Cân bằng giữa thẩm mỹ và công năng',
    excerpt:
      'Xu hướng thiết kế hiện đại tập trung vào sự tối giản, tối ưu hóa không gian nhưng vẫn đảm bảo tính thẩm mỹ cao cấp cho từng căn hộ.',
    date: '2026-01-30',
    image: '/images/solutions/zalo-oa.png',
    slug: '/tin-tuc/thiet-ke-residence-hien-dai',
  },
]

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // States xử lý Kéo/Trượt
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)

  // State xử lý Chấm tròn (Dots)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dotCount, setDotCount] = useState(newsData.length)

  // 1. TÍNH TOÁN LẠI SỐ LƯỢNG CHẤM TRÒN DỰA TRÊN KÍCH THƯỚC MÀN HÌNH
  useEffect(() => {
    const updateLayout = () => {
      if (!carouselRef.current) return
      const item = carouselRef.current.children[0] as HTMLElement
      if (!item) return

      const itemWidth = item.offsetWidth + 24 // Chiều rộng 1 thẻ + gap
      // Tính xem màn hình hiện tại đang chứa được bao nhiêu thẻ
      const visibleItems = Math.round(carouselRef.current.clientWidth / itemWidth)

      // Số chấm = Tổng số bài - Số bài nhìn thấy + 1
      // (VD: 4 bài - 3 bài nhìn thấy + 1 = 2 chấm)
      const dots = Math.max(1, newsData.length - visibleItems + 1)
      setDotCount(dots)
    }

    updateLayout() // Chạy lần đầu
    window.addEventListener('resize', updateLayout) // Cập nhật lại khi co giãn trình duyệt
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  // 2. LẮNG NGHE SỰ KIỆN CUỘN
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return
      const itemWidth = (carouselRef.current.children[0] as HTMLElement).offsetWidth + 24
      const { scrollLeft } = carouselRef.current

      // Tính index hiện tại và đảm bảo nó không vượt qua tổng số chấm tròn
      const newIndex = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(Math.min(newIndex, dotCount - 1))
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [dotCount])

  // 3. CÁC HÀM XỬ LÝ KÉO CHUỘT
  const handleMouseDown = (e: MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeftPos(carouselRef.current.scrollLeft)
  }

  const handleMouseLeave = () => setIsDragging(false)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    carouselRef.current.scrollLeft = scrollLeftPos - walk
  }

  // 4. HÀM CLICK CHẤM TRÒN
  const scrollToDot = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = (carouselRef.current.children[0] as HTMLElement).offsetWidth + 24
      carouselRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <Container>
        <AnimateOnScroll>
          {/* ĐÃ SỬA: Tiêu đề căn giữa và bỏ 2 nút điều hướng */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Bài viết mới nhất
            </h2>
          </div>

          {/* Carousel Tin tức */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex [scrollbar-width:none] gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? 'cursor-grabbing select-none' : 'cursor-grab snap-x snap-mandatory'
            }`}
          >
            {newsData.map((news) => (
              <article
                key={news.id}
                className={`group relative w-[85vw] flex-none md:w-[45vw] lg:w-[31%] ${
                  !isDragging ? 'snap-start' : 'pointer-events-none'
                }`}
              >
                <Link href={news.slug} className="block w-full">
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${news.image}')` }}
                    />
                  </div>

                  <div>
                    <time className="mb-3 block text-sm font-medium text-slate-500 dark:text-slate-400">
                      {news.date}
                    </time>
                    <h3 className="mb-3 line-clamp-2 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#3b82f6] dark:text-white">
                      {news.title}
                    </h3>
                    <p className="line-clamp-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {news.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* ĐÃ SỬA: Chấm tròn điều hướng (Sử dụng mảng mới render theo độ rộng màn hình) */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: dotCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToDot(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-[#3b82f6]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                }`}
                aria-label={`Cuộn đến trang ${index + 1}`}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
