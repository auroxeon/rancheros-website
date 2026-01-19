'use client'

import GenericPageHero from '@/components/GenericPageHero'
import GenericPageIntro from '@/components/GenericPageIntro'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import DomesticGardensFooter from '@/components/DomesticGardensFooter'

export default function NewsletterPage() {
  return (
    <>
      <GenericPageHero title="Newsletter" />
      <GenericPageIntro />
      <HowWeWorkSection
        heading="Stay Connected"
        description="Sign up for our newsletter to receive the latest updates on new products, exclusive offers, grilling tips, and special events. Join our community of barbecue enthusiasts and stay informed about all things Rancheros."
        image="/images/Stapleton-Hall-Road-12.jpg"
        imagePosition="right"
      />
      <HowWeWorkSection
        heading="What You'll Receive"
        description="Our newsletter brings you curated content including product launches, seasonal grilling guides, maintenance tips, and invitations to exclusive events. We respect your privacy and you can unsubscribe at any time."
        image="/images/Image-1---View-1.jpg"
        imagePosition="left"
      />
      <DomesticGardensFooter />
    </>
  )
}

