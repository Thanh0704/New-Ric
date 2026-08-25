import { Suspense } from 'react' // THÊM IMPORT NÀY
import { HomeScrollManager } from '@/components/shared/home-scroll-manager' // THÊM IMPORT NÀY
import { Hero } from '@/components/sections/hero'
import { Solutions } from '@/components/sections/solutions'
import { BusinessProblems } from '@/components/sections/business-problems'
// import { IndustrySolutions } from '@/components/sections/industry-solutions'
import { Insights } from '@/components/sections/insights'
import { WhyRic } from '@/components/sections/why-ric'
import { EcosystemFlow } from '@/components/sections/ecosystem-flow'

import { RegisterDemo } from '@/components/sections/register-demo'
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
      {/* ĐẶT TRẠM THU SÓNG VÀO ĐÂY 👇 */}
      <Suspense fallback={null}>
        <HomeScrollManager />
      </Suspense>
      {/* 👆 */}

      <Hero />
      <BusinessProblems />
      <Solutions />
      <EcosystemFlow />
      <Insights />
      <WhyRic />
      <RegisterDemo />
    </>
  )
}
