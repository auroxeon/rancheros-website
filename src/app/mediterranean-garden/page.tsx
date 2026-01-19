'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function MediterraneanGardenPage() {
  return (
    <>
      <GenericPageHero title="Mediterranean Garden" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Mediterranean Garden"
        description="Discover our Mediterranean-inspired outdoor spaces featuring Rancheros grills. These designs blend traditional Mediterranean aesthetics with modern luxury, creating stunning environments for outdoor cooking and entertaining."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Design Excellence"
        description="Our Mediterranean garden designs incorporate natural materials, warm color palettes, and architectural elements that complement our precision-engineered grills, creating cohesive outdoor living spaces."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

