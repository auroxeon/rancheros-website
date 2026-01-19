'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function AccessibilityStatementPage() {
  return (
    <>
      <GenericPageHero title="Accessibility Statement" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Accessibility Commitment"
        description="Rancheros Grills is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve these goals."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Our Standards"
        description="We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. We welcome your feedback on the accessibility of our website and are committed to making improvements where needed."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

