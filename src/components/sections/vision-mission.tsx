import { Eye, MousePointer2 } from 'lucide-react'

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16 md:px-20 md:py-32">
      <div className="bg-electric/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-[120px]" />{' '}
      <div className="bg-primary/20 absolute right-1/4 bottom-1/4 h-125 w-125 rounded-full blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-300">
        <div className="mb-20 space-y-4 text-center">
          <span className="text-electric inline-block text-xs font-bold tracking-[0.2em] uppercase">
            Vươn tới tương lai
          </span>
          <h2 className="text-4xl font-black text-white md:text-5xl">Tầm nhìn & Sứ mệnh</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Vision card */}
          <div className="border-l-electric rounded-[2.5rem] border border-l-4 border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] md:p-12">
            {' '}
            <div className="mb-6 flex items-center gap-6">
              <div className="border-electric/30 bg-electric/20 rounded-2xl border p-4 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Eye className="text-electric h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white">Tầm nhìn</h3>
            </div>
            <p className="text-lg leading-relaxed font-medium text-slate-100 md:text-xl">
              Trong 5-10 năm tới, RIC Việt Nam hướng tới việc xây dựng một hệ sinh thái công nghệ
              chuẩn mực, nơi mọi doanh nghiệp vừa và nhỏ đều có thể tiếp cận và làm chủ các giải
              pháp hỗ trợ kinh doanh hiện đại nhất để vươn tầm quốc tế.
            </p>
            <p className="mt-6 text-sm text-slate-300 italic">
              RIC hướng tới hệ sinh thái công nghệ chuẩn mực toàn cầu.
            </p>
          </div>

          {/* Mission card */}
          <div className="border-r-primary rounded-[2.5rem] border border-r-4 border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(92,152,215,0.3)] md:p-12">
            <div className="mb-6 flex items-center gap-6">
              <div className="border-primary/30 bg-primary/20 rounded-2xl border p-4 shadow-[0_0_15px_rgba(92,152,215,0.3)]">
                <MousePointer2 className="text-primary h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white">Sứ mệnh</h3>
            </div>
            <p className="text-lg leading-relaxed font-medium text-slate-100 md:text-xl">
              Chúng tôi không ngừng sáng tạo để biến những giải pháp phần mềm phức tạp thành những
              công cụ dễ sử dụng, hiệu quả cao, giúp doanh nghiệp Việt tối ưu hóa nguồn lực và gắn
              kết cộng đồng khách hàng bền vững.
            </p>
            <p className="mt-6 text-sm text-slate-300 italic">
              Đơn giản hóa sức mạnh công nghệ cho mọi doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
