import { Suspense } from 'react' // THÊM IMPORT NÀY
import { HomeScrollManager } from '@/components/shared/home-scroll-manager' // THÊM IMPORT NÀY
import { Hero } from '@/components/sections/hero'
import { Solutions } from '@/components/sections/solutions'
// import { Features } from '@/components/sections/features'
import { BusinessProblems } from '@/components/sections/business-problems'
// import { Stats } from '@/components/sections/stats'
// import { Process } from '@/components/sections/process'
import { SolutionJourneys } from '@/components/sections/solution-journeys'
import { ProductSpotlight } from '@/components/sections/product-spotlight'
import { IntegrationEcosystem } from '@/components/sections/integration-ecosystem'
import { Insights } from '@/components/sections/insights'
import { DeliveryModel } from '@/components/sections/delivery-model'
import { WhyRic } from '@/components/sections/why-ric'
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
      <Solutions />
      <BusinessProblems />
      <SolutionJourneys />
      <ProductSpotlight />
      <IntegrationEcosystem />
      <Insights />
      <DeliveryModel />
      <WhyRic />
      <RegisterDemo />
    </>
  )
}
