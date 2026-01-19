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
        heading="Communication"
        description="Our approach to client outcomes is sensitive to client needs, diligent interpretation of briefs, and transformation into bespoke space. The well-oiled machine of our back-office team (base camp) handles administration, customer service, scheduling, and finances. Rancheros is a friendly, caring, family-run company offering first-class service. Excellent industry links."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Innovative solutions"
        description="With three decades of experience tackling a broad range of garden and landscape projects, from contemporary cutting-edge urban sites to country estates, rooftop terraces, boutique hotels, and destination restaurants. Our success comes from creative intelligence, an obsessive attention to detail and an ability to deliver within budget and on schedule."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

