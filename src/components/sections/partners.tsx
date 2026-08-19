import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const partners = [
  { src: '/images/partners/partner-1.png', alt: 'VNPAY' },
  { src: '/images/partners/partner-2.png', alt: 'VMG' },
  { src: '/images/partners/partner-3.png', alt: 'Zalo' },
  { src: '/images/partners/partner-4.png', alt: 'Dichvu31' },
  { src: '/images/partners/partner-5.png', alt: 'MISA' },
  { src: '/images/partners/partner-6.png', alt: 'GHTK' },
]

export function Partners() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24">
      {/* KIỂM SOÁT ANIMATION BẰNG CSS THUẦN - ĐÃ BỎ LỆNH PAUSE KHI HOVER */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `,
        }}
      />

      {/* Background họa tiết lưới mịn công nghệ */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Container className="relative z-10">
        <AnimateOnScroll>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold tracking-widest text-blue-700 uppercase shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" /> Đồng hành & Phát triển
            </div>
            <h3 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              Hợp tác chiến lược toàn diện
            </h3>
            <p className="max-w-2xl text-lg font-medium text-slate-600">
              Hệ thống kết nối sẵn sàng với các đơn vị thanh toán, vận chuyển và giải pháp số hàng
              đầu.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Khung chứa Marquee */}
        <div className="marquee-container relative overflow-hidden py-4">
          {/* Lớp mặt nạ Gradient làm mờ 2 bên mép */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

          {/* Đường chạy Logo luôn chuyển động tự động vô tận */}
          <div className="animate-infinite-scroll flex w-max items-center">
            {/* Cụm logo 1 */}
            <div className="flex items-center gap-16 pr-16">
              {partners.map((partner, idx) => (
                <div
                  key={`set1-${idx}`}
                  className="flex h-16 w-36 shrink-0 cursor-pointer items-center justify-center transition-all duration-300 hover:scale-110 md:w-44"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={176}
                    height={64}
                    className="h-full w-full object-contain drop-shadow-sm filter hover:drop-shadow-md"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Cụm logo 2 (Bản sao hoàn hảo của cụm 1) */}
            <div className="flex items-center gap-16 pr-16">
              {partners.map((partner, idx) => (
                <div
                  key={`set2-${idx}`}
                  className="flex h-16 w-36 shrink-0 cursor-pointer items-center justify-center transition-all duration-300 hover:scale-110 md:w-44"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={176}
                    height={64}
                    className="h-full w-full object-contain drop-shadow-sm filter hover:drop-shadow-md"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
