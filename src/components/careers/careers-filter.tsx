'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Banknote,
  ArrowUpRight,
  Code2,
  Megaphone,
  LineChart,
  Briefcase,
} from 'lucide-react'
import { careers } from '@/data/careers'

const FILTERS = ['Tất cả', 'Công nghệ', 'Marketing', 'Sales']

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

// Hàm tự động chọn Icon tương ứng với từng phòng ban
const getDeptIcon = (dept: string) => {
  switch (dept) {
    case 'Công nghệ':
      return Code2
    case 'Marketing':
      return Megaphone
    case 'Sales':
      return LineChart
    default:
      return Briefcase
  }
}

export function CareersFilter() {
  const [activeFilter, setActiveFilter] = useState('Tất cả')

  const filtered =
    activeFilter === 'Tất cả' ? careers : careers.filter((c) => c.department === activeFilter)

  return (
    <div className="w-full">
      {/* ── BỘ LỌC KIỂU SEGMENTED CONTROL ── */}
      <div className="mb-12 flex justify-start">
        <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-sm">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ── DANH SÁCH VỊ TRÍ DẠNG LƯỚI (GRID 2 CỘT) VỚI ANIMATION ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((job) => {
          const DeptIcon = getDeptIcon(job.department)

          return (
            <Link
              key={job.id}
              href={`/careers/${job.slug}`}
              className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]"
            >
              {/* Lớp nền gradient mờ ảo quét qua khi hover */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50/0 via-blue-50/40 to-blue-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* 1. Header Card: Icon Trái & Mũi Tên Phải */}
              <div className="relative z-10 flex items-start justify-between">
                {/* Icon bộ phận thay đổi màu và lơ lửng khi hover */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-blue-600/30 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-600 group-hover:shadow-lg">
                  <DeptIcon className="h-7 w-7 text-slate-400 transition-colors duration-500 group-hover:text-white" />
                </div>

                {/* NÚT CTA BÊN PHẢI VỚI HIỆU ỨNG SHOOTING ARROW */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:shadow-md">
                  {/* Mũi tên cũ bay ra ngoài */}
                  <div className="group-hover:translate-x-150% group-hover:-translate-y-150% absolute transition-transform duration-500">
                    {' '}
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                  </div>
                  {/* Mũi tên mới màu trắng bay từ góc trái dưới lên */}
                  <div className="-translate-x-150% translate-y-150% absolute transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                    {' '}
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* 2. Nội dung chính: Tên & Bộ phận */}
              <div className="relative z-10 mt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black tracking-widest text-blue-600 uppercase">
                    {job.department}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-xs font-bold text-slate-500">{typeLabel[job.type]}</span>
                </div>

                {/* Tiêu đề có hiệu ứng trượt nhẹ */}
                <h3 className="text-2xl font-black text-slate-900 transition-all duration-500 group-hover:translate-x-2 group-hover:text-blue-700">
                  {job.title}
                </h3>
              </div>

              {/* 3. Footer: Địa điểm & Lương */}
              <div className="relative z-10 mt-2 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-5 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-blue-600/70">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                {job.salary && (
                  <span className="flex items-center gap-1.5 transition-colors group-hover:text-blue-600/70">
                    <Banknote className="h-4 w-4" />
                    {job.salary}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
