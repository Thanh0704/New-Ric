import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { Partners } from '@/components/sections/partners'
import { CTA } from '@/components/sections/cta'
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
      telephone: '+84-123-456-789',
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
      <Features />
      <Stats />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  )
}
