import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const partners = [
  { name: 'Viettel', logo: '/images/partners/viettel.svg' },
  { name: 'VNPT', logo: '/images/partners/vnpt.svg' },
  { name: 'Vinhomes', logo: '/images/partners/vinhomes.svg' },
  { name: 'MB Bank', logo: '/images/partners/mb.svg' },
  { name: 'Shopee', logo: '/images/partners/shopee.svg' },
  { name: 'FPT', logo: '/images/partners/fpt.svg' },
  { name: 'Techcombank', logo: '/images/partners/techcombank.svg' },
]

const scrollingPartners = [...partners, ...partners, ...partners]

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-12">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } 
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

      <Container>
        <AnimateOnScroll>
          <div className="mx-auto mb-10 text-center">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              ĐƯỢC HƠN <span className="text-blue-600">100+ DOANH NGHIỆP</span> TIN TƯỞNG
            </h3>
          </div>
        </AnimateOnScroll>
      </Container>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="animate-marquee items-center gap-12 pl-12">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex h-16 w-32 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              title={partner.name}
            >
              <div className="relative h-10 w-28 opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-dashed border-slate-200 text-xs font-bold text-slate-400 opacity-50 transition-opacity group-hover:opacity-0">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
