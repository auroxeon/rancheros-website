'use client'

import GardenDesignHero from '@/components/GardenDesignHero'
import GardenDesignIntro from '@/components/GardenDesignIntro'
import GardenDesignContentSection from '@/components/GardenDesignContentSection'
import GardenDesignTextSection from '@/components/GardenDesignTextSection'
import GardenDesignCTA from '@/components/GardenDesignCTA'
import GardenDesignNavLinks from '@/components/GardenDesignNavLinks'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function GardenDesignPage() {
  return (
    <>
      <GardenDesignHero />
      <GardenDesignIntro />
      <GardenDesignContentSection
        heading="London's most accomplished garden design team"
        text="Our passionate and dedicated team of garden designers brings years of experience and creative vision to every project. We understand that each garden is unique, and we work closely with you to create outdoor spaces that reflect your style, enhance your lifestyle, and provide year-round beauty."
        images={[
          '/images/Stapleton-Hall-Road-12.jpg',
          '/images/Image-1---View-1.jpg'
        ]}
      />
      <GardenDesignContentSection
        heading="An expert garden design team"
        text="With over 30 years of combined experience, our trained garden designers bring a wealth of knowledge to every project. We take a personalized approach to garden design, ensuring that each space is tailored to your specific needs, preferences, and the unique characteristics of your property."
        images={[
          '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg',
          '/images/20251019_120008.png'
        ]}
      />
      <GardenDesignTextSection
        heading="That extra something"
        paragraphs={[
          "Our commitment to excellence means we bring professionalism, punctuality, and top-of-the-range design tools to every project. We understand that garden design is not just about creating beautiful spaces, but about creating spaces that work perfectly for you and your lifestyle.",
          "We offer a bespoke service where our office team provides full support throughout your project, and our garden designers work alongside you to help your garden evolve beautifully over time. From initial consultation to final installation, we're with you every step of the way."
        ]}
      />
      <GardenDesignCTA />
      <GardenDesignNavLinks />
      <DomesticGardensFooter />
    </>
  )
}


