import React from 'react'
import { ShieldCheck, Layers, Headset, Gem } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const reasons = [
  {
    id: 1,
    title: 'Hệ sinh thái All-in-One',
    desc: 'Không cần chắp vá nhiều phần mềm rời rạc. RICVINA cung cấp mọi công cụ quản trị trên một nền tảng duy nhất, đảm bảo dữ liệu xuyên suốt 100%.',
    icon: Layers,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    id: 2,
    title: 'Bảo mật dữ liệu cấp độ cao',
    desc: 'Hệ thống máy chủ Cloud đạt chuẩn quốc tế. Dữ liệu doanh nghiệp được mã hóa đa lớp và phân quyền truy cập cực kỳ nghiêm ngặt.',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    id: 3,
    title: 'Đồng hành cùng chuyên gia Việt',
    desc: 'Đội ngũ hỗ trợ 100% người Việt, thấu hiểu sâu sắc văn hóa và bài toán của doanh nghiệp bản địa. Cam kết hỗ trợ kỹ thuật 24/7.',
    icon: Headset,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    id: 4,
    title: 'Tối ưu ROI, Không phí ẩn',
    desc: 'Chi phí minh bạch ngay từ ngày đầu. Giải pháp giúp doanh nghiệp tiết kiệm đến 40% chi phí vận hành ẩn chỉ sau 6 tháng áp dụng.',
    icon: Gem,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
]

export function WhyRic() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Hiệu ứng Background Tinh tế */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* CỘT TRÁI: TIÊU ĐỀ */}
          <div className="w-full lg:w-1/3">
            <AnimateOnScroll>
              <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-black tracking-widest text-blue-400 uppercase">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Lợi thế <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  vượt trội
                </span>
              </h2>
              <p className="mb-8 text-lg font-medium text-slate-400">
                Hơn 500+ doanh nghiệp đã tin tưởng lựa chọn RICVINA không chỉ vì phần mềm tốt, mà vì
                sự cam kết đồng hành bền vững.
              </p>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">500+</span>
                  <span className="text-sm text-slate-400">Khách hàng</span>
                </div>
                <div className="w-px bg-slate-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">98%</span>
                  <span className="text-sm text-slate-400">Tỷ lệ hài lòng</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CỘT PHẢI: LƯỚI TÍNH NĂNG */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {reasons.map((item, index) => {
                const Icon = item.icon
                return (
                  <AnimateOnScroll key={item.id} delay={index * 100}>
                    <div className="group h-full rounded-[2rem] border border-slate-700/50 bg-slate-800/50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/20">
                      <div
                        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor} transition-transform group-hover:scale-110`}
                      >
                        <Icon className={`h-7 w-7 ${item.color}`} />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
