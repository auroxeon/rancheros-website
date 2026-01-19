'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function AboutUsPage() {
  return (
    <>
      <GenericPageHero title="About Us" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Our Story"
        description="Rancheros was born at the intersection of heritage, performance, and innovation. Our life has always existed between two worlds: the Argentinian polo culture where fire, horsemanship, and gathering define excellence; and the razor-sharp precision of high-performance motorsport engineering."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Our Philosophy"
        description="The precision in tacent disciplines and engineering and the nuances of live fire cooking over the years as the moth survives have shaped our approach. We believe the finest outdoor cooking experiences demand uncompromising quality—in materials, craftsmanship, and design."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

