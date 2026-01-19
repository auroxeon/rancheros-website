'use client'

import CommercialGardensHero from '@/components/CommercialGardensHero'
import CommercialGardensIntro from '@/components/CommercialGardensIntro'
import GardenDesignContentSection from '@/components/GardenDesignContentSection'
import GardenDesignTextSection from '@/components/GardenDesignTextSection'
import GardenDesignCTA from '@/components/GardenDesignCTA'
import GardenDesignNavLinks from '@/components/GardenDesignNavLinks'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function CommercialGardensPage() {
  return (
    <>
      <CommercialGardensHero />
      <CommercialGardensIntro />
      <GardenDesignContentSection
        heading="London's leading commercial garden specialists"
        text="Our experienced team specializes in creating stunning commercial garden spaces that enhance business environments. From rooftop terraces and restaurant courtyards to hotel gardens and office landscapes, we deliver designs that impress clients and create lasting impact."
        images={[
          '/images/Stapleton-Hall-Road-12.jpg',
          '/images/Image-1---View-1.jpg'
        ]}
      />
      <GardenDesignContentSection
        heading="Expert commercial garden solutions"
        text="With extensive experience in commercial projects, we understand the unique requirements of business environments. Our commercial garden designs combine aesthetic appeal with practical functionality, creating spaces that support your business objectives and enhance your brand identity."
        images={[
          '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg',
          '/images/20251019_120008.png'
        ]}
      />
      <GardenDesignTextSection
        heading="Commercial garden excellence"
        paragraphs={[
          "Our commercial garden services are tailored to meet the specific needs of businesses, ensuring that every project delivers both visual impact and practical benefits. We work closely with commercial clients to understand their brand, their space, and their objectives.",
          "From initial consultation through to completion and ongoing maintenance, we provide a comprehensive service that ensures your commercial garden space continues to enhance your business for years to come."
        ]}
      />
      <GardenDesignCTA />
      <GardenDesignNavLinks />
      <DomesticGardensFooter />
    </>
  )
}

