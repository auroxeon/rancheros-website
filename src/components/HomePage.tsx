'use client'

import Hero from './Hero'
import AboutSection from './AboutSection'
import DomesticGardensSection from './DomesticGardensSection'
import CommercialGardensSection from './CommercialGardensSection'
import MeetTheTeamSection from './MeetTheTeamSection'
import NewsletterSection from './NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DomesticGardensSection />
      <CommercialGardensSection />
      <MeetTheTeamSection />
      <NewsletterSection />
    </>
  )
}

