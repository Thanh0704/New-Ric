import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Lightbulb,
  Handshake,
  Rocket,
  Banknote,
  HeartPulse,
  Users,
  GraduationCap,
} from 'lucide-react'
import { CareersFilter } from '@/components/careers/careers-filter'

export const metadata: Metadata = {
  title: 'Tuyển dụng',
  description:
    'Gia nhập đội ngũ RIC Việt Nam — nơi công nghệ và con người cùng phát triển. Xem các vị trí đang tuyển dụng.',
  openGraph: {
    title: 'Tuyển dụng — RIC Việt Nam',
    description: 'Gia nhập đội ngũ RIC Việt Nam — nơi công nghệ và con người cùng phát triển.',
  },
}

export default function CareersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden bg-slate-950 py-16 md:py-24 lg:py-32">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        {/* Right glow */}
        <div className="from-primary/10 absolute right-0 bottom-0 hidden h-full w-1/3 bg-gradient-to-l to-transparent blur-3xl lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-20">
          <div className="max-w-2xl space-y-8">
            <span className="border-electric/30 bg-electric/10 text-electric inline-block rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              Career at RIC Việt Nam
            </span>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
              Gia nhập đội ngũ <br />
              <span className="text-electric">RIC Việt Nam</span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300">
              Cùng chúng tôi kiến tạo tương lai số và bứt phá giới hạn công nghệ. Chúng tôi đang tìm
              kiếm những tài năng sẵn sàng thay đổi cuộc chơi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#openings"
                className="bg-primary shadow-primary/20 hover:bg-primary/90 w-full rounded-xl px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all sm:w-auto sm:min-w-50"
              >
                Xem vị trí đang tuyển
              </Link>
              <button className="w-full rounded-xl border-2 border-white/20 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto sm:min-w-50">
                Văn hóa công ty
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section className="bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Văn hóa của chúng tôi
            </h2>
            <p className="text-slate-600">Tại RIC, con người là trung tâm của sự đổi mới.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: 'Môi trường sáng tạo',
                desc: 'Không gian làm việc mở, khuyến khích những ý tưởng đột phá và tự do thể hiện bản sắc cá nhân.',
              },
              {
                icon: Handshake,
                title: 'Đồng nghiệp hỗ trợ',
                desc: 'Làm việc cùng đội ngũ chuyên gia tận tâm, luôn sẵn sàng chia sẻ kiến thức và hỗ trợ lẫn nhau.',
              },
              {
                icon: Rocket,
                title: 'Công nghệ tiên phong',
                desc: 'Tiếp cận và ứng dụng những công nghệ mới nhất như AI, Cloud Computing vào các dự án thực tế.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group hover:border-electric rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors md:p-8"
              >
                <div className="bg-electric/10 mb-6 inline-flex rounded-xl p-3">
                  <Icon className="text-electric h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-slate-50 px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 lg:flex-row">
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl">Chế độ đãi ngộ hấp dẫn</h2>
            <p className="text-slate-600">
              Chúng tôi tin rằng sự hạnh phúc và phát triển của nhân viên là nền tảng cho sự thành
              công của công ty.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Banknote,
                  title: 'Lương thưởng hấp dẫn',
                  desc: 'Mức lương cạnh tranh, thưởng dự án, hoa hồng luỹ tiến.',
                },
                {
                  icon: HeartPulse,
                  title: 'Bảo hiểm sức khỏe',
                  desc: 'Gói chăm sóc sức khỏe cao cấp cho nhân viên và người thân.',
                },
                {
                  icon: Users,
                  title: 'Team building hàng năm',
                  desc: 'Những chuyến du lịch nghỉ dưỡng và hoạt động gắn kết sôi nổi.',
                },
                {
                  icon: GraduationCap,
                  title: 'Khóa đào tạo chuyên môn',
                  desc: 'Hỗ trợ chi phí học tập và các buổi workshop định kỳ.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="bg-primary/10 mt-0.5 shrink-0 rounded-lg p-2">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="from-primary/20 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br via-slate-200 to-slate-300 shadow-2xl">
              {/* Placeholder gradient — replace with real image when available */}
              <div className="flex h-full items-center justify-center">
                <div className="space-y-3 p-8 text-center">
                  <div className="bg-primary/20 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                    <Users className="text-primary h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium text-slate-600">Đội ngũ RIC Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOB OPENINGS ── */}
      <section className="bg-white px-6 py-16 md:px-20 md:py-24" id="openings">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">Vị trí đang tuyển</h2>
              <p className="text-slate-600">
                Tìm kiếm cơ hội phù hợp và trở thành một phần của đội ngũ RIC.
              </p>
            </div>
          </div>
          <CareersFilter />
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="overflow-hidden bg-slate-50 px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center md:mb-20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Quy trình tuyển dụng</h2>
            <p className="text-slate-600">Minh bạch, nhanh chóng và tôn trọng mọi ứng viên.</p>
          </div>
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-slate-200 md:block" />
            {/* Mobile vertical stepper track */}
            <div className="absolute top-0 left-8 h-full w-0.5 bg-slate-200 md:hidden" />
            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
              {[
                {
                  step: '01',
                  title: 'Nộp hồ sơ',
                  desc: 'Gửi CV và Portfolio ấn tượng nhất của bạn qua hệ thống.',
                },
                {
                  step: '02',
                  title: 'Phỏng vấn',
                  desc: 'Trao đổi trực tiếp về kỹ năng và định hướng nghề nghiệp.',
                },
                {
                  step: '03',
                  title: 'Thử việc',
                  desc: 'Trải nghiệm môi trường làm việc thực tế và làm quen đội ngũ.',
                },
                {
                  step: '04',
                  title: 'Onboarding',
                  desc: 'Chào mừng bạn chính thức trở thành một mảnh ghép của RIC.',
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex flex-row items-start gap-6 pl-4 md:flex-col md:items-center md:pl-0 md:text-center"
                >
                  <div className="bg-primary shadow-primary/30 relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg">
                    {step}
                  </div>
                  <div className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-md md:p-6">
                    <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20 md:px-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-center md:p-16">
          <div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Chưa tìm thấy vị trí phù hợp?
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-400">
              Đừng ngần ngại gửi hồ sơ của bạn cho chúng tôi. Chúng tôi luôn chào đón những nhân tài
              muốn đồng hành cùng RIC.
            </p>
            <Link
              href="/contact"
              className="bg-electric inline-flex items-center gap-2 rounded-2xl px-10 py-5 text-xl font-black text-slate-950 shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-opacity hover:opacity-90"
            >
              Gửi CV tại đây
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
