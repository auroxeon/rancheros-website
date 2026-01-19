'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function GardenPortfolioPage() {
  return (
    <>
      <GenericPageHero title="Portfolio" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Our Portfolio"
        description="Explore our collection of exceptional Rancheros grill installations. From luxury residential outdoor kitchens to commercial hospitality spaces, each project showcases our commitment to precision engineering, artisan craftsmanship, and architectural excellence."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Bespoke Excellence"
        description="Every grill in our portfolio is a unique creation, tailored to the specific vision, space, and culinary aspirations of our clients. We work closely with architects, designers, and discerning homeowners to bring exceptional outdoor cooking experiences to life."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

