'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function OrganicGardenDesignPage() {
  return (
    <>
      <GenericPageHero title="Organic Garden" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Organic Garden Design"
        description="Explore our organic garden designs that integrate Rancheros grills with sustainable, natural landscapes. These spaces celebrate the connection between outdoor cooking and the natural environment."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Sustainable Luxury"
        description="Our organic garden designs combine eco-friendly practices with luxury outdoor cooking experiences, creating spaces that are both beautiful and environmentally conscious."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

