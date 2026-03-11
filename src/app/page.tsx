import { Hero } from '@/components/sections/hero'
import { VisionMission } from '@/components/sections/vision-mission'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { CTA } from '@/components/sections/cta'
import { Partners } from '@/components/sections/partners'
import { Testimonials } from '@/components/sections/testimonials'
import { StructuredData } from '@/components/shared/structured-data'
import { SITE_CONFIG } from '@/lib/constants'

export default function HomePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-975-769-323',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese',
    },
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.linkedin],
  }

  return (
    <>
      <StructuredData data={orgSchema} />
      <Hero />
      <VisionMission />
      <Features />
      <Stats />
      <CTA />
      <Partners />
      <Testimonials />
    </>
  )
}
