'use client'

import DomesticGardensHero from '@/components/DomesticGardensHero'
import DomesticGardensIntro from '@/components/DomesticGardensIntro'
import DomesticGardensGallery from '@/components/DomesticGardensGallery'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function DomesticGardensPage() {
  return (
    <>
      <DomesticGardensHero />
      <DomesticGardensIntro />
      <DomesticGardensGallery />
      <DomesticGardensFooter />
    </>
  )
}

