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
        heading="Annual Membership Experience"
        description="Welcome Package includes custom-engraved asado knife set, premium organic charcoal or wood sourced from Patagonia, leather-bound recipe and pairing journal with curated content from master grillers and sommeliers, and access card engraved with your name and unique membership number."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Exclusive Events & Quarterly Boxes"
        description="Every three months, members receive rare South American spice blends, chimichurri variants, dry rubs, small-batch Malbec or Torrontés pairings, artisan cured meats, and limited-edition grilling tools. Plus access to exclusive events like Sol & Smoke summer retreats and La Noche del Fuego winter dining series."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

