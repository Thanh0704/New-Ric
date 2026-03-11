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
  return {
    title: career.title,
    description: career.description,
    openGraph: {
      title: `${career.title} — RIC Việt Nam`,
      description: career.description,
    },
  }
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  const career = careers.find((c) => c.slug === slug)
  if (!career) notFound()

  const relatedCareers = careers.filter((c) => c.id !== career.id).slice(0, 3)

  return (
    <>
      {/* ── HEADER ── */}
      <section className="px-6 pt-12 pb-8 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/careers"
            className="text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
          >
            <ArrowLeft className="h-4 w-4" />
            Tất cả vị trí
          </Link>

          <div className="mt-6 space-y-4">
            <span className="bg-electric text-navy inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              {career.department}
            </span>
            <h1 className="text-navy text-3xl leading-tight font-black tracking-tight md:text-5xl">
              {career.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Building2 className="text-primary h-4 w-4" />
                {career.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="text-primary h-4 w-4" />
                {career.location}
              </span>
              {career.salary && (
                <span className="flex items-center gap-1.5">
                  <Banknote className="text-primary h-4 w-4" />
                  {career.salary}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="text-primary h-4 w-4" />
                {typeLabel[career.type]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 pb-24 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* ── LEFT: detail ── */}
            <div className="space-y-10 lg:col-span-2">
              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">Mô tả công việc</h2>
                <p className="leading-relaxed text-slate-600">{career.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">Yêu cầu ứng viên</h2>
                <ul className="space-y-3">
                  {career.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-electric mt-0.5 h-5 w-5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">Quyền lợi</h2>
                <ul className="space-y-3">
                  {career.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prev / next nav */}
              {relatedCareers.length > 0 && (
                <div className="border-t border-slate-100 pt-8">
                  <p className="mb-4 text-sm font-semibold tracking-widest text-slate-400 uppercase">
                    Vị trí khác
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {relatedCareers.slice(0, 2).map((related) => (
                      <Link
                        key={related.id}
                        href={`/careers/${related.slug}`}
                        className="group hover:border-primary/30 rounded-xl border border-slate-200 p-4 transition-all hover:shadow-md"
                      >
                        <p className="text-primary text-xs font-semibold tracking-widest uppercase">
                          {related.department}
                        </p>
                        <p className="group-hover:text-primary mt-1 line-clamp-1 font-semibold text-slate-900 transition-colors">
                          {related.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">{related.location}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Related positions */}
              {relatedCareers.length > 0 && (
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-bold text-slate-900">Vị trí liên quan</h3>
                  <ul className="space-y-4">
                    {relatedCareers.map((related) => (
                      <li key={related.id}>
                        <Link
                          href={`/careers/${related.slug}`}
                          className="group flex items-start justify-between gap-3"
                        >
                          <div>
                            <p className="group-hover:text-primary line-clamp-2 text-sm font-semibold text-slate-900 transition-colors">
                              {related.title}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {related.location} · {related.salary ?? typeLabel[related.type]}
                            </p>
                          </div>
                          <ArrowRight className="group-hover:text-primary mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="mb-2 text-lg font-bold">Sẵn sàng ứng tuyển?</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Gửi CV của bạn và chúng tôi sẽ liên hệ trong 2 ngày làm việc.
                </p>
                <Link
                  href="/contact"
                  className="bg-electric text-navy flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90"
                >
                  Ứng tuyển ngay
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
