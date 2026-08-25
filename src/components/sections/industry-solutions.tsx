import React from 'react'
import { ShoppingBag, Building2, Factory, ArrowRight, Plus } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import Link from 'next/link'

const industries = [
  {
    id: 'retail',
    title: 'Bán lẻ & E-Commerce',
    desc: 'Giải quyết bài toán tồn kho đa kênh, thất thoát đơn hàng và tự động hóa quy trình chăm sóc khách hàng mua lẻ.',
    icon: ShoppingBag,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    // Gợi ý combo sản phẩm
    combo: ['RIC ECOM', 'RIC Message'],
  },
  {
    id: 'hospitality',
    title: 'Khách sạn & Resort',
    desc: 'Tối đa hóa công suất phòng, quản lý booking trực tiếp và nâng cao trải nghiệm lưu trú của khách du lịch.',
    icon: Building2,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    combo: ['RICIO', 'ZHUB', 'RIC Message'],
  },
  {
    id: 'manufacturing',
    title: 'Sản xuất & Phân phối',
    desc: 'Quản trị chuỗi cung ứng khép kín, kiểm soát mạng lưới đại lý và ngăn chặn triệt để tình trạng bán lấn tuyến.',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    combo: ['RIC ERP', 'RIC TRUST', 'RIC AFFILIATE'],
  },
]

export function IndustrySolutions() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-black tracking-widest text-slate-600 uppercase shadow-sm">
              Giải pháp chuyên biệt
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              May đo cho từng <span className="text-blue-600">ngành nghề</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600">
              Mỗi lĩnh vực có một đặc thù riêng. RIC kết hợp các sản phẩm lõi và module vệ tinh để
              tạo ra những bộ giải pháp "vừa vặn" nhất với mô hình của bạn.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.id} delay={index * 150}>
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50">
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bgColor} ${item.color}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Nội dung */}
                  <h3 className="mb-4 text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mb-8 flex-1 text-base leading-relaxed font-medium text-slate-600">
                    {item.desc}
                  </p>

                  {/* Combo Gợi ý */}
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <p className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Combo đề xuất:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.combo.map((product, idx) => (
                        <React.Fragment key={idx}>
                          <span className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">
                            {product}
                          </span>
                          {idx !== item.combo.length - 1 && (
                            <Plus className="h-4 w-4 text-slate-300" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Xem thêm các ngành nghề khác <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
