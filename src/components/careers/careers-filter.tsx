'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Building2, Banknote, ArrowRight } from 'lucide-react'
import { careers } from '@/data/careers'

const FILTERS = ['Tất cả', 'Công nghệ', 'Marketing', 'Sales']

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

export function CareersFilter() {
  const [activeFilter, setActiveFilter] = useState('Tất cả')

  const filtered =
    activeFilter === 'Tất cả' ? careers : careers.filter((c) => c.department === activeFilter)

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? 'bg-electric rounded-full px-5 py-2 text-sm font-bold text-slate-900'
                : 'hover:border-primary/40 hover:text-primary rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600 transition-colors'
            }
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Job cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((job) => (
          <div
            key={job.id}
            className="group hover:border-primary/30 flex flex-col justify-between gap-6 rounded-xl border border-slate-200 p-6 transition-all hover:shadow-xl sm:flex-row sm:items-center"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                  {job.department}
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                  {typeLabel[job.type]}
                </span>
              </div>
              <h3 className="group-hover:text-primary text-lg font-bold text-slate-900 transition-colors">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {job.location}
                </span>
                {job.salary && (
                  <span className="flex items-center gap-1.5">
                    <Banknote className="h-4 w-4 shrink-0" />
                    {job.salary}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 shrink-0" />
                  {job.department}
                </span>
              </div>
            </div>
            <Link
              href={`/careers/${job.slug}`}
              className="bg-primary inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Ứng tuyển
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
