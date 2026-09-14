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
  Sparkles,
  Briefcase,
} from 'lucide-react'
import { CareersFilter } from '@/components/careers/careers-filter'

export const metadata: Metadata = {
  title: 'Tuyển dụng',
  description: 'Gia nhập đội ngũ RIC Việt Nam — nơi công nghệ và con người cùng phát triển.',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-500 selection:text-white">
      {/* ── CUSTOM ANIMATIONS ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.5); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(37, 99, 235, 0); }
          100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-reverse 7s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `,
        }}
      />

      {/* ── HERO: BANNER ẢNH NỀN CHUYÊN NGHIỆP ── */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden pt-40 pb-32">
        {/* Ảnh nền (Có thể thay bằng ảnh công ty thực tế) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80')",
          }}
        />

        {/* Lớp Overlay tối màu giúp nổi bật chữ */}
        <div className="absolute inset-0 z-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Icon trôi nổi đã được chuyển sang hiệu ứng kính (Glassmorphism) để hợp với nền ảnh */}
          <div className="animate-float mb-8 inline-flex h-16 w-16 rotate-12 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
            <Sparkles className="h-8 w-8 text-blue-300" />
          </div>

          <h1 className="max-w-3xl text-3xl leading-snug font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Cùng chúng tôi kiến tạo tương lai số và bứt phá giới hạn công nghệ.
          </h1>

          <p className="mt-6 text-base font-medium text-blue-100 md:text-lg">
            Gia nhập đội ngũ <span className="font-bold text-white">RIC Việt Nam</span>
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-white/30" />{' '}
            <Link
              href="#openings"
              className="group flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-blue-300"
            >
              Khám phá vị trí{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>
      </section>

      {/* ── CULTURE: THẺ TRÔI NỔI ĐAN XEN ── */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            <div className="mb-10 flex flex-col justify-center space-y-4 pr-8 md:mb-0">
              <span className="text-xs font-black tracking-widest text-blue-500 uppercase">
                Môi trường
              </span>
              <h2 className="text-3xl leading-tight font-black text-slate-900">
                Văn hóa <br />
                của chúng tôi
              </h2>
              <p className="font-medium text-slate-500">
                Tại RIC, con người là trung tâm của sự đổi mới.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
              {[
                {
                  icon: Lightbulb,
                  title: 'Sáng tạo',
                  desc: 'Không gian làm việc mở, tự do thể hiện bản sắc.',
                  delay: 'animate-float',
                },
                {
                  icon: Handshake,
                  title: 'Hỗ trợ',
                  desc: 'Đội ngũ chuyên gia tận tâm, luôn sẵn sàng chia sẻ.',
                  delay: 'animate-float-delayed mt-0 sm:mt-12',
                },
                {
                  icon: Rocket,
                  title: 'Tiên phong',
                  desc: 'Ứng dụng công nghệ AI, Cloud vào dự án thực tế.',
                  delay: 'animate-float sm:col-span-2 sm:w-1/2 sm:mx-auto',
                },
              ].map(({ icon: Icon, title, desc, delay }, idx) => (
                <div
                  key={idx}
                  className={`${delay} group relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-colors hover:border-blue-300`}
                >
                  <div className="pointer-events-none absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-linear-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />{' '}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 shadow-sm transition-colors duration-500 group-hover:bg-blue-600">
                    <Icon className="h-6 w-6 text-slate-600 transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed font-medium text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS: GIAO DIỆN MẢNG MÀU (COLOR BLOCKING) ── */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-slate-900 p-10 md:p-16">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]" />

          <div className="relative z-10 flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-4 text-3xl font-black text-white">
                Đãi ngộ <br />
                hấp dẫn
              </h2>
              <p className="mb-8 leading-relaxed font-medium text-slate-400">
                Sự hạnh phúc và phát triển của nhân viên là nền tảng cho sự thành công của công ty.
              </p>
              <div className="flex h-32 w-32 animate-[spin_10s_linear_infinite] items-center justify-center rounded-full border border-slate-700">
                <Sparkles className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/3">
              {[
                {
                  icon: Banknote,
                  title: 'Lương thưởng',
                  desc: 'Cạnh tranh, thưởng dự án, hoa hồng.',
                  bg: 'bg-white/5 hover:bg-white/10',
                },
                {
                  icon: HeartPulse,
                  title: 'Bảo hiểm',
                  desc: 'Chăm sóc sức khỏe cao cấp cho nhân viên.',
                  bg: 'bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30',
                },
                {
                  icon: Users,
                  title: 'Team building',
                  desc: 'Du lịch nghỉ dưỡng và hoạt động gắn kết.',
                  bg: 'bg-white/5 hover:bg-white/10',
                },
                {
                  icon: GraduationCap,
                  title: 'Đào tạo',
                  desc: 'Hỗ trợ chi phí học tập và workshop.',
                  bg: 'bg-white/5 hover:bg-white/10',
                },
              ].map(({ icon: Icon, title, desc, bg }, idx) => (
                <div
                  key={idx}
                  className={`${bg} group cursor-default rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2`}
                >
                  <Icon className="mb-4 h-8 w-8 text-blue-400 transition-transform group-hover:scale-110" />
                  <p className="mb-2 text-lg font-bold text-white">{title}</p>
                  <p className="text-sm text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOB OPENINGS ── */}
      <section className="px-6 py-20" id="openings">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-end justify-between border-b border-slate-200 pb-8 md:flex-row">
            <div>
              <h2 className="mb-2 text-3xl font-black text-slate-900">Vị trí đang mở</h2>
              <p className="font-medium text-slate-500">
                Tìm kiếm cơ hội phù hợp với năng lực của bạn.
              </p>
            </div>
            <div className="animate-pulse-ring hidden h-4 w-4 rounded-full bg-blue-600 md:flex" />
          </div>
          <CareersFilter />
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="border-y border-slate-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-16 text-3xl font-black text-slate-900">Quy trình gia nhập</h2>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="absolute top-10 right-12 left-12 hidden h-px border-b border-dashed border-slate-300 bg-slate-200 md:block" />

            {[
              { step: '01', title: 'Nộp hồ sơ', desc: 'Gửi CV và Portfolio ấn tượng nhất.' },
              { step: '02', title: 'Phỏng vấn', desc: 'Trao đổi về kỹ năng và định hướng.' },
              { step: '03', title: 'Thử việc', desc: 'Trải nghiệm môi trường thực tế.' },
              { step: '04', title: 'Onboarding', desc: 'Chính thức trở thành mảnh ghép RIC.' },
            ].map(({ step, title, desc }, idx) => (
              <div key={idx} className="group relative z-10 flex flex-col items-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-slate-200 bg-slate-50 text-xl font-black text-slate-300 shadow-blue-500/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl">
                  {step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
                <p className="px-4 text-sm font-medium text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (Đã thiết kế lại hiệu ứng Nút lăn theo mẫu Haravan) ── */}
      <section className="px-6 py-24">
        {/* Ở đây giữ nguyên group cũ cho thẻ to */}
        <div className="group relative mx-auto max-w-4xl">
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl transition-opacity duration-700 group-hover:opacity-40" />{' '}
          <div className="relative rounded-[3rem] border border-slate-200 bg-white p-12 text-center shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 md:p-20">
            <Briefcase className="mx-auto mb-6 h-12 w-12 text-blue-600" />
            <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">
              Chưa tìm thấy vị trí phù hợp?
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-medium text-slate-500">
              Đừng ngần ngại gửi hồ sơ mở. Chúng tôi luôn chào đón những nhân tài đam mê công nghệ.
            </p>

            <div className="flex justify-center">
              {/* NÚT ĐỒNG BỘ: Sử dụng "group/btn" để cô lập hiệu ứng, không bị kích hoạt chéo bởi thẻ cha */}
              <Link
                href="/careers/apply"
                className="group/btn relative inline-flex items-center rounded-full border-2 border-slate-900 bg-white p-1.5 transition-colors"
              >
                {/* LỚP KHÓA VIỀN: Lớp này trùng khít với phần khoảng trống để màu đen lan tỏa KHÔNG đè lên viền trắng */}
                <div className="pointer-events-none absolute inset-1.5 overflow-hidden rounded-full">
                  {/* QUẢ BÓNG LĂN: Kéo giãn chiều ngang từ trái sang phải */}
                  <div className="absolute top-0 left-0 h-full w-12 rounded-full bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/btn:w-full" />
                </div>

                {/* Vòng tròn Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-white">
                  <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-500 ease-out group-hover/btn:translate-x-1 group-hover/btn:rotate-0" />
                </div>

                {/* Dòng chữ: Lúc đầu đen, hover thì chữ nổi thành màu trắng */}
                <span className="relative z-10 pr-6 pl-3 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover/btn:text-white">
                  Gửi CV ngay
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
