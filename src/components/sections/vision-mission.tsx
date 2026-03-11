import { Eye, MousePointer2 } from 'lucide-react'

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-32 md:px-20">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-[#00FFFF]/20 blur-[120px]" />
      <div className="bg-primary/20 absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-20 space-y-4 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#00FFFF] uppercase">
            Vươn tới tương lai
          </span>
          <h2 className="text-4xl font-black text-white md:text-5xl">Tầm nhìn & Sứ mệnh</h2>
        </div>

        <div className="relative flex min-h-[500px] flex-col justify-center">
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Vision card */}
            <div className="z-20 w-full lg:absolute lg:top-0 lg:left-0 lg:w-[60%]">
              <div className="rounded-[2.5rem] border border-l-4 border-white/20 border-l-[#00FFFF] bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] md:p-12">
                <div className="mb-6 flex items-center gap-6">
                  <div className="rounded-2xl border border-[#00FFFF]/30 bg-[#00FFFF]/20 p-4 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                    <Eye className="h-10 w-10 text-[#00FFFF]" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-white">Tầm nhìn</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium text-slate-100 md:text-xl">
                  Trong 5-10 năm tới, RIC Việt Nam hướng tới việc xây dựng một hệ sinh thái công
                  nghệ chuẩn mực, nơi mọi doanh nghiệp vừa và nhỏ đều có thể tiếp cận và làm chủ các
                  giải pháp hỗ trợ kinh doanh hiện đại nhất để vươn tầm quốc tế.
                </p>
                <p className="mt-6 text-sm text-slate-300 italic">
                  RIC hướng tới hệ sinh thái công nghệ chuẩn mực toàn cầu.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="z-10 mt-8 w-full lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[60%]">
              <div className="border-r-primary rounded-[2.5rem] border border-r-4 border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(92,152,215,0.3)] md:p-12 lg:translate-y-12">
                <div className="mb-6 flex items-center justify-end gap-6 lg:flex-row-reverse">
                  <div className="border-primary/30 bg-primary/20 rounded-2xl border p-4 shadow-[0_0_15px_rgba(92,152,215,0.3)]">
                    <MousePointer2 className="text-primary h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-white">Sứ mệnh</h3>
                </div>
                <p className="text-right text-lg leading-relaxed font-medium text-slate-100 md:text-xl">
                  Chúng tôi không ngừng sáng tạo để biến những giải pháp phần mềm phức tạp thành
                  những công cụ dễ sử dụng, hiệu quả cao, giúp doanh nghiệp Việt tối ưu hóa nguồn
                  lực và gắn kết cộng đồng khách hàng bền vững.
                </p>
                <p className="mt-6 text-right text-sm text-slate-300 italic">
                  Đơn giản hóa sức mạnh công nghệ cho mọi doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
