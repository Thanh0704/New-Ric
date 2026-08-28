import { Suspense } from 'react' // THÊM IMPORT NÀY
import { HomeScrollManager } from '@/components/shared/home-scroll-manager' // THÊM IMPORT NÀY
import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
// import { Solutions } from '@/components/sections/solutions'
import { ProductShowcase } from '@/components/sections/product-showcase'
import { BusinessProblems } from '@/components/sections/business-problems'
import { SolutionCategories } from '@/components/sections/solution-categories'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { DeploymentProcess } from '@/components/sections/deployment-process'

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
      <TrustedBy />
      <BusinessProblems />
      <SolutionCategories />
      {/* <Solutions /> */}
      <ProductShowcase />
      <FeaturedProjects />
      <DeploymentProcess />

      <WhyRic />
      <RegisterDemo />
    </>
  )
}
