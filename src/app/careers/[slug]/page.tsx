import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Banknote,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { careers } from '@/data/careers'

interface Props {
  params: Promise<{ slug: string }>
}

const typeLabel: Record<string, string> = {
  'full-time': 'Toàn thời gian',
  'part-time': 'Bán thời gian',
  contract: 'Hợp đồng',
}

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const career = careers.find((c) => c.slug === slug)
  if (!career) return {}
  return { title: career.title, description: career.description }
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  const career = careers.find((c) => c.slug === slug)
  if (!career) notFound()

  const relatedCareers = careers.filter((c) => c.id !== career.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        <Link
          href="/careers"
          className="group mb-12 inline-flex items-center gap-3 text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors group-hover:border-blue-200">
            <ArrowLeft className="h-4 w-4" />
          </div>
          Quay lại danh sách
        </Link>

        {/* ── SPLIT SCREEN LAYOUT ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* ── CỘT TRÁI (STICKY HEADER) ── */}
          <div className="flex flex-col lg:sticky lg:top-12 lg:col-span-5 lg:h-[calc(100vh-6rem)]">
            <div className="mb-auto space-y-6">
              <span className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-black tracking-widest text-white uppercase shadow-lg">
                {career.department}
              </span>
              <h1 className="text-4xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {career.title}
              </h1>

              <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 font-medium text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Bộ phận</p>
                    <p>{career.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 font-medium text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Địa điểm</p>
                    <p>{career.location}</p>
                  </div>
                </div>
                {career.salary && (
                  <div className="flex items-center gap-4 font-medium text-slate-600">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <Banknote className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Mức lương</p>
                      <p>{career.salary}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4 font-medium text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Loại hình</p>
                    <p>{typeLabel[career.type]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút Ứng tuyển cố định bên dưới cột trái - ĐÃ ĐƯỢC ĐỘ THÀNH NÚT LĂN */}
            <div className="relative z-10 mt-8 flex w-full">
              {/* LƯU Ý: Đảm bảo đường dẫn /careers/apply đúng với cấu trúc thư mục của bạn */}
              <Link
                href={`/careers/apply?position=${career.title}`}
                className="group relative flex w-full items-center rounded-full border-2 border-slate-900 bg-white p-1.5 transition-colors"
              >
                {/* LỚP KHÓA VIỀN */}
                <div className="pointer-events-none absolute inset-1.5 overflow-hidden rounded-full">
                  {/* QUẢ BÓNG LĂN */}
                  <div className="absolute top-0 left-0 h-full w-12 rounded-full bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
                </div>

                {/* Vòng tròn Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-white">
                  <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0" />
                </div>

                {/* Dòng chữ */}
                <span className="relative z-10 flex-1 pr-12 text-center text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  Ứng tuyển ngay
                </span>
              </Link>
            </div>
          </div>

          {/* ── CỘT PHẢI (SCROLLING CONTENT) ── */}
          <div className="space-y-16 pb-20 lg:col-span-7">
            {/* Description */}
            <div className="group rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl md:p-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-slate-900">
                <span className="h-2 w-8 rounded-full bg-blue-600 transition-all group-hover:w-12" />{' '}
                Mô tả công việc
              </h2>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                {career.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="group rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl md:p-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-slate-900">
                <span className="h-2 w-8 rounded-full bg-blue-600 transition-all group-hover:w-12" />{' '}
                Yêu cầu ứng viên
              </h2>
              <ul className="space-y-6">
                {career.requirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl p-4 text-lg font-medium text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="group rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl md:p-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-slate-900">
                <span className="h-2 w-8 rounded-full bg-emerald-500 transition-all group-hover:w-12" />{' '}
                Quyền lợi
              </h2>
              <ul className="space-y-6">
                {career.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl p-4 text-lg font-medium text-slate-600 transition-colors hover:bg-emerald-50/50"
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vị trí liên quan (Hiển thị dạng thẻ ngang) */}
            {relatedCareers.length > 0 && (
              <div className="pt-8">
                <h3 className="mb-8 text-xl font-black text-slate-900">Có thể bạn quan tâm</h3>
                <div className="flex flex-col gap-4">
                  {relatedCareers.map((related) => (
                    <Link
                      key={related.id}
                      href={`/careers/${related.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    >
                      <div>
                        <p className="mb-1 text-xs font-bold tracking-widest text-slate-400 uppercase transition-colors group-hover:text-blue-500">
                          {related.department}
                        </p>
                        <p className="text-lg font-black text-slate-900">{related.title}</p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-blue-600">
                        <ArrowRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
