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
        heading="Heritage & Innovation"
        text="Each model is inspired by traditional Argentinian asado cooking, offering an authentic experience with adjustable height grates, V-shaped grill channels, and robust firebrick-lined fireboxes for perfect heat control. For those seeking something truly unique, Rancheros Elite Grills offers bespoke, one-of-a-kind designs, custom-built to match individual preferences and outdoor spaces."
        images={[
          '/images/Stapleton-Hall-Road-12.jpg',
          '/images/Image-1---View-1.jpg'
        ]}
      />
      <GardenDesignContentSection
        heading="Product Range"
        text="Whether a statement piece for a luxury outdoor kitchen or a high-performance grill for the serious pitmaster, our creations fuse heritage, innovation, and exclusivity. From single-chamber parrillas perfect for intimate gatherings to twin-chamber systems for entertaining at scale, every grill is engineered with motorsport-grade precision."
        images={[
          '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg',
          '/images/20251019_120008.png'
        ]}
      />
      <GardenDesignTextSection
        heading="Bespoke Excellence"
        paragraphs={[
          "Every exceptional space deserves an exceptional grill. Our bespoke service creates one-of-a-kind parrillas tailored to your architectural vision, entertaining needs, and aesthetic preferences. Custom finishes, smart home integration, and performance features limited only by imagination.",
          "From initial consultation through design, fabrication, and white-glove installation, we ensure every detail reflects your exacting standards. Our process combines precision engineering with artisan craftsmanship, delivering grills that are both functional masterpieces and architectural statements."
        ]}
      />
      <GardenDesignCTA />
      <GardenDesignNavLinks />
      <DomesticGardensFooter />
    </>
  )
}


