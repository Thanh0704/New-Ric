import React from 'react'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    no: '01',
    title: 'Khảo sát & Tư vấn',
    desc: 'Đội ngũ chuyên gia tiến hành phân tích sâu bài toán vận hành và nhu cầu thực tế của từng doanh nghiệp.',
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    border: 'border-blue-200',
  },
  {
    no: '02',
    title: 'Xây dựng giải pháp',
    desc: 'Thiết kế kiến trúc hệ thống dữ liệu, tối ưu quy trình và lên demo giao diện cá nhân hóa.',
    icon: Lightbulb,
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
    border: 'border-cyan-200',
  },
  {
    no: '03',
    title: 'Triển khai & Tích hợp',
    desc: 'Lập trình, tích hợp mượt mà vào hệ thống sẵn có (CRM/ERP) và kiểm thử chất lượng nghiêm ngặt.',
    icon: Code2,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    border: 'border-indigo-200',
  },
  {
    no: '04',
    title: 'Bàn giao & Đồng hành',
    desc: 'Đào tạo nhân sự sử dụng thành thạo, bàn giao mã nguồn và hỗ trợ kỹ thuật liên tục 24/7.',
    icon: Rocket,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    border: 'border-emerald-200',
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-24">
      {/* Background họa tiết mờ */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-bold tracking-widest text-slate-600 uppercase">
            Phương thức làm việc
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Quy trình triển khai chuẩn mực
          </h2>
          <p className="text-lg font-medium text-slate-600">
            Mọi dự án đều được tuân thủ nghiêm ngặt theo 4 bước cốt lõi, đảm bảo tiến độ, tối ưu chi
            phí và mang lại hiệu quả vượt trội.
          </p>
        </div>

        <div className="relative">
          {/* Đường line nét đứt kết nối các bước (Chỉ hiện trên màn hình lớn) */}
          <div className="absolute top-[45px] right-[10%] left-[10%] z-0 hidden h-0.5 border-t-2 border-dashed border-slate-200 lg:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative pt-4">
                {/* Icon nổi ở trên */}
                <div className="relative z-10 mb-8 flex flex-col items-center">
                  <div
                    className={`h-24 w-24 rounded-[2rem] ${step.bg} ${step.border} flex items-center justify-center border-2 bg-white shadow-xl shadow-slate-200/50 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110`}
                  >
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  {/* Số đếm nhỏ ở dưới Icon */}
                  <div className="mt-4 rounded-full bg-slate-900 px-4 py-1 text-xs font-black text-white shadow-md">
                    BƯỚC {step.no}
                  </div>
                </div>

                {/* Thẻ Nội dung */}
                <div className="h-full rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-300 group-hover:border-slate-200 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-slate-200/50">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="leading-relaxed font-medium text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
