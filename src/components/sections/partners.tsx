import Image from 'next/image'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const partners = [
  { src: '/images/partners/partner-1.png', alt: 'Partner 1' },
  { src: '/images/partners/partner-2.png', alt: 'Partner 2' },
  { src: '/images/partners/partner-3.png', alt: 'Partner 3' },
  { src: '/images/partners/partner-4.png', alt: 'Partner 4' },
  { src: '/images/partners/partner-5.png', alt: 'Partner 5' },
  { src: '/images/partners/partner-6.png', alt: 'Partner 6' },
]

export function Partners() {
  return (
    <section className="border-y border-slate-100 py-14 dark:border-slate-800">
      <Container>
        <AnimateOnScroll>
          <p className="mb-10 text-center text-xs font-bold tracking-widest text-slate-400 uppercase">
            TRUSTED BY
          </p>
        </AnimateOnScroll>

        {/* Marquee track */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-16">
            {/* Render twice for seamless loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="flex h-14 w-36 shrink-0 items-center justify-center opacity-80 transition-all duration-300 hover:opacity-100"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={56}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
