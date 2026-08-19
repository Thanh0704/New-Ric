import React from 'react'
import {
  CheckCircle2,
  XCircle,
  Wallet,
  Timer,
  Sliders,
  Headset,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

// Bổ sung thêm Icon minh họa cho từng tính năng
const features = [
  {
    icon: Wallet,
    name: 'Chi phí đầu tư ban đầu',
    ric: 'Tối ưu, trả theo quy mô sử dụng',
    old: 'Rất lớn, phải mua đứt bản quyền cứng',
  },
  {
    icon: Timer,
    name: 'Thời gian triển khai',
    ric: 'Từ 2 - 4 tuần (Có sẵn core)',
    old: 'Kéo dài từ 3 - 6 tháng',
  },
  {
    icon: Sliders,
    name: 'Khả năng tùy biến (Customization)',
    ric: 'Linh hoạt theo mô hình đặc thù',
    old: 'Bị giới hạn bởi framework đóng',
  },
  {
    icon: Headset,
    name: 'Hỗ trợ kỹ thuật & Bảo trì',
    ric: 'Cam kết SLA 99.9%, hỗ trợ 24/7',
    old: 'Phụ thuộc tiến độ và phát sinh chi phí',
  },
  {
    icon: ShieldCheck,
    name: 'Bảo mật dữ liệu',
    ric: 'Mã hóa đầu cuối, phân quyền sâu',
    old: 'Dễ phân tán thông tin, rò rỉ dữ liệu',
  },
]

export function Comparison() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Lớp nền trang trí */}
      <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-[400px] w-[400px] rounded-full bg-slate-100/50 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold tracking-widest text-blue-700 uppercase">
            <Sparkles className="h-4 w-4 text-blue-600" /> Điểm vượt trội
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Tại sao doanh nghiệp chọn <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              giải pháp từ RIC?
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Header dành cho Desktop */}
          <div className="mb-6 hidden items-end px-6 md:flex">
            <div className="w-1/3"></div>
            <div className="w-1/3 px-4 text-center">
              <span className="relative z-10 inline-flex w-full scale-110 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-lg font-black text-white shadow-xl shadow-blue-500/30">
                Hệ sinh thái RIC
              </span>
            </div>
            <div className="w-1/3 px-4 text-center">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-6 py-3 text-base font-bold text-slate-500">
                Giải pháp truyền thống
              </span>
            </div>
          </div>

          {/* Danh sách các tính năng */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group flex flex-col items-stretch overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
              >
                {/* 1. Tên tính năng */}
                <div className="flex w-full items-center gap-4 border-b border-slate-100 bg-slate-50/50 p-6 md:w-1/3 md:border-r md:border-b-0 md:bg-transparent md:p-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-bold text-slate-900">{f.name}</span>
                </div>

                {/* 2. Cột RIC (Được làm nổi bật) */}
                <div className="relative flex w-full flex-col justify-center border-b border-slate-100 bg-blue-50/40 p-6 transition-colors group-hover:bg-blue-50 md:w-1/3 md:border-r md:border-b-0 md:p-8">
                  <div className="mb-2 text-xs font-black tracking-wider text-blue-600 uppercase md:hidden">
                    Hệ sinh thái RIC
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                    <span className="text-base leading-relaxed font-bold text-blue-900">
                      {f.ric}
                    </span>
                  </div>
                </div>

                {/* 3. Cột Giải pháp cũ */}
                <div className="flex w-full flex-col justify-center bg-white p-6 transition-colors md:w-1/3 md:p-8">
                  <div className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase md:hidden">
                    Giải pháp truyền thống
                  </div>
                  <div className="flex items-start gap-3 opacity-60 transition-opacity group-hover:opacity-100">
                    <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-slate-400" />
                    <span className="text-base leading-relaxed font-medium text-slate-500">
                      {f.old}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
