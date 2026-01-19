'use client'

import GardenMaintenanceHero from '@/components/GardenMaintenanceHero'
import GardenMaintenanceIntro from '@/components/GardenMaintenanceIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function GardenMaintenancePage() {
  return (
    <>
      <GardenMaintenanceHero />
      <GardenMaintenanceIntro />
      <HowWeWorkSection
        heading="London's most accomplished garden maintenance team"
        description="Our passionate and dedicated team of horticulturalists brings years of experience and expertise to every garden. We understand that each garden is unique, and we work closely with you to ensure your outdoor space continues to thrive and evolve beautifully throughout the seasons."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="An expert gardening team"
        description="With over 30 years of combined experience, our trained horticulturalists bring a wealth of knowledge to every maintenance project. We take a personalized approach to garden care, ensuring that each space receives the attention it needs to flourish year-round."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

