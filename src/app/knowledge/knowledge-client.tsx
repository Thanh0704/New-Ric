'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  Download,
  PlayCircle,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const categories = ['Tất cả', 'E-book', 'Bài viết', 'Video', 'Chưa phân loại']

export default function KnowledgeClient({ resources }: { resources: any[] }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [searchQuery, setSearchQuery] = useState('')

  // 1. STATE CHO PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Chốt cứng 6 bài 1 trang theo ý sếp!

  // Logic Lọc bài viết
  const filteredResources = resources.filter((item) => {
    const matchCategory = activeCategory === 'Tất cả' || item.category === activeCategory
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  // 2. RESET VỀ TRANG 1 NẾU NGƯỜI DÙNG TÌM KIẾM HOẶC ĐỔI DANH MỤC
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  // 3. TÍNH TOÁN DỮ LIỆU CỦA TRANG HIỆN TẠI
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage)
  const currentResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ebook':
        return <BookOpen className="h-4 w-4" />
      case 'template':
        return <Download className="h-4 w-4" />
      case 'video':
        return <PlayCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-20">
      {/* 1. HERO & SEARCH */}
      <section className="bg-slate-900 py-20 text-center text-white lg:py-28">
        <div className="container mx-auto px-6 md:px-20">
          <span className="mb-6 inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-bold text-blue-400">
            RIC Knowledge Base
          </span>
          <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            Nâng tầm <span className="text-blue-400">quản trị doanh nghiệp</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-slate-400">
            Tuyển tập cẩm nang, biểu mẫu và kiến thức thực chiến giúp doanh nghiệp của bạn tối ưu
            vận hành và bứt phá doanh thu.
          </p>
          <div className="mx-auto flex max-w-2xl items-center rounded-2xl bg-white/10 p-2 backdrop-blur-md focus-within:ring-2 focus-within:ring-blue-500">
            <Search className="ml-4 h-6 w-6 text-slate-400" />
            <input
              type="text"
              placeholder="Bạn đang tìm kiếm kiến thức gì?"
              className="w-full bg-transparent px-4 py-3 text-white placeholder-slate-400 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-20">
          {/* Lọc Categories */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid hiển thị tài nguyên - Đã đổi thành currentResources */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-12">
            {currentResources.length > 0 ? (
              currentResources.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl sm:flex-row"
                >
                  <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100 sm:aspect-auto sm:w-2/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex w-full flex-col p-6 sm:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
                        {getTypeIcon(item.type)} {item.category}
                      </span>
                      <span className="text-xs font-medium text-slate-400">{item.readTime}</span>
                    </div>
                    <h3 className="mb-3 text-xl leading-tight font-black text-slate-900 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed font-medium text-slate-500">
                      {item.description}
                    </p>
                    <div className="mt-auto border-t border-slate-100 pt-4">
                      <Link
                        href={`/knowledge/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                      >
                        Đọc tiếp <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-lg font-medium text-slate-500">
                  Không tìm thấy kết quả nào phù hợp.
                </p>
              </div>
            )}
          </div>

          {/* 4. THANH ĐIỀU HƯỚNG PHÂN TRANG HIỆN ĐẠI */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <span className="text-sm font-bold text-slate-600">
                Trang {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
