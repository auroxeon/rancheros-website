'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function KentGardenDesignPage() {
  return (
    <>
      <GenericPageHero title="Kent Entertaining Garden" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Kent Entertaining Garden"
        description="Discover our Kent-based garden designs featuring Rancheros grills, perfect for entertaining. These spaces combine traditional English garden aesthetics with modern outdoor cooking capabilities."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Entertaining Excellence"
        description="Our Kent entertaining gardens are designed to host memorable gatherings, with Rancheros grills as the centerpiece. These spaces seamlessly blend functionality with timeless elegance."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

