'use client'

import HowWeWorkHero from '@/components/HowWeWorkHero'
import HowWeWorkIntro from '@/components/HowWeWorkIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function HowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkIntro />
      <HowWeWorkSection
        heading="Bespoke Excellence, Start to Finish"
        description="Every Rancheros grill begins with conversation. We work closely with architects, designers, and discerning homeowners to understand your vision, space, and culinary aspirations. Our process combines precision engineering with artisan craftsmanship, ensuring every detail reflects your exacting standards."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Precision Engineering & Artisan Craftsmanship"
        description="From initial consultation through design, fabrication, and white-glove installation, we ensure excellence at every touchpoint. Our grills are engineered with motorsport-grade precision, combining traditional Argentinian asado heritage with modern innovation to deliver uncompromising quality in materials, craftsmanship, and design."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

