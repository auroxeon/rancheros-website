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
        heading="Craft Culinary Sanctuaries"
        text="Interior and garden designers work with Rancheros to transform outdoor cooking into ceremonial luxury experiences. We bring cohesion between indoor elegance and outdoor authenticity, curating chef&apos;s pantry zones, edible gardens, and courtyard-style grilling sanctuaries."
        images={[
          '/images/Stapleton-Hall-Road-12.jpg',
          '/images/Image-1---View-1.jpg'
        ]}
      />
      <GardenDesignContentSection
        heading="Designer Collaborations"
        text="From sourcing luxury outdoor furniture to designing immersive landscapes with native South American flora, every touchpoint reflects considered, layered design that honors the ritual of fire and gathering. Our grills become the centerpiece of extraordinary outdoor spaces."
        images={[
          '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg',
          '/images/20251019_120008.png'
        ]}
      />
      <GardenDesignTextSection
        heading="That extra something"
        paragraphs={[
          "Our commitment to excellence means we bring professionalism, punctuality, and top-of-the-range design tools to every project. We understand that outdoor cooking design is not just about creating beautiful spaces, but about creating spaces that work perfectly for you and your lifestyle.",
          "We offer a bespoke service where our office team provides full support throughout your project, and our designers work alongside you to help your outdoor space evolve beautifully over time. From initial consultation to final installation, we&apos;re with you every step of the way."
        ]}
      />
      <GardenDesignCTA />
      <GardenDesignNavLinks />
      <DomesticGardensFooter />
    </>
  )
}

