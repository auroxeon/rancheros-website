'use client'

import GardenBuildHero from '@/components/GardenBuildHero'
import GardenBuildIntro from '@/components/GardenBuildIntro'
import GardenBuildSection1 from '@/components/GardenBuildSection1'
import GardenBuildSection2 from '@/components/GardenBuildSection2'
import GardenBuildCTA from '@/components/GardenBuildCTA'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function GardenBuildPage() {
  return (
    <>
      <GardenBuildHero />
      <GardenBuildIntro />
      <GardenBuildSection1 />
      <GardenBuildSection2 />
      <GardenBuildCTA />
      <DomesticGardensFooter />
    </>
  )
}

