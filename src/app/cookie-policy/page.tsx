'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function CookiePolicyPage() {
  return (
    <>
      <GenericPageHero title="Cookie Policy" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Cookie Policy"
        description="This cookie policy explains how Rancheros Grills uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="How We Use Cookies"
        description="We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, though this may affect website functionality."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

