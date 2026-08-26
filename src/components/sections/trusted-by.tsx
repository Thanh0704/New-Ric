import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

// Em thêm vài đối tác giả định để dải scroll nhìn dài và đẹp hơn
// Sếp nhớ thay bằng ảnh thật sau nhé
const partners = [
  { name: 'Viettel', logo: '/images/partners/viettel.svg' },
  { name: 'VNPT', logo: '/images/partners/vnpt.svg' },
  { name: 'Vinhomes', logo: '/images/partners/vinhomes.svg' },
  { name: 'MB Bank', logo: '/images/partners/mb.svg' },
  { name: 'Shopee', logo: '/images/partners/shopee.svg' },
  { name: 'FPT', logo: '/images/partners/fpt.svg' },
  { name: 'Techcombank', logo: '/images/partners/techcombank.svg' },
]

// Nhân bản mảng lên nhiều lần để tạo hiệu ứng chạy vòng lặp mượt mà không bị đứt quãng
const scrollingPartners = [...partners, ...partners, ...partners]

export function TrustedBy() {
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-16 md:py-20">
      {/* 1. KHOẢNG CSS ĐỂ TẠO ANIMATION CHẠY NGANG TỰ ĐỘNG */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } /* Dịch chuyển chính xác 1/3 vì mảng được nhân 3 */
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused; /* Dừng lại khi di chuột vào */
        }
      `,
        }}
      />

      <Container>
        <AnimateOnScroll>
          <div className="mx-auto mb-12 text-center">
            <h3 className="text-sm font-black tracking-widest text-slate-400 uppercase">
              HƠN <span className="text-blue-600">100+ TẬP ĐOÀN VÀ DOANH NGHIỆP</span> ĐÃ TIN CHỌN
            </h3>
          </div>
        </AnimateOnScroll>
      </Container>

      {/* 2. DẢI LOGO CHẠY TỰ ĐỘNG */}
      {/* Hiệu ứng mask-image tạo độ mờ (fade) ở 2 bên mép trái phải màn hình */}
      <div
        className="relative mx-auto w-full max-w-7xl"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="animate-marquee items-center gap-8 pl-8 md:gap-16 md:pl-16">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex h-16 w-32 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-transparent bg-white transition-all duration-300 hover:border-slate-100 hover:bg-slate-50 hover:shadow-sm md:h-20 md:w-40"
              title={partner.name}
            >
              {/* Lớp hiển thị ảnh Logo */}
              <div className="relative h-8 w-24 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10 md:w-32">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Box hiển thị text dự phòng (khi sếp chưa có ảnh) */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-xs font-bold text-slate-400 opacity-50 transition-opacity group-hover:opacity-0">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
