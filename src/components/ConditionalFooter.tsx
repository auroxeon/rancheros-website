'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide default footer on pages that have their own footer
  if (pathname?.includes('/domestic-gardens') || pathname?.includes('/garden-design') || pathname?.includes('/how-we-work') || pathname?.includes('/garden-build') || pathname?.includes('/commercial-gardens') || pathname?.includes('/meet-the-team') || pathname?.includes('/garden-maintenance')) {
    return null
  }
  
  return <Footer />
}

