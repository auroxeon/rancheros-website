'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function PrivacyPolicyPage() {
  return (
    <>
      <GenericPageHero title="Privacy Policy" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Privacy Policy"
        description="At Rancheros Grills, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="Information We Collect"
        description="We collect information that you provide directly to us, such as when you contact us, request information, or use our services. This may include your name, email address, phone number, and any other information you choose to provide."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

