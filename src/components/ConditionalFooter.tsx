'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide default footer on pages that have their own footer
  if (pathname?.includes('/domestic-gardens') || 
      pathname?.includes('/garden-design') || 
      pathname?.includes('/how-we-work') || 
      pathname?.includes('/accessories') || 
      pathname?.includes('/commercial-gardens') || 
      pathname?.includes('/meet-the-team') || 
      pathname?.includes('/garden-maintenance') ||
      pathname?.includes('/privacy-policy') ||
      pathname?.includes('/cookie-policy') ||
      pathname?.includes('/newsletter') ||
      pathname?.includes('/about-us') ||
      pathname?.includes('/garden-portfolio') ||
      pathname?.includes('/accessibility-statement') ||
      pathname?.includes('/mediterranean-garden') ||
      pathname?.includes('/organic-garden-design') ||
      pathname?.includes('/kent-garden-design')) {
    return null
  }
  
  return <Footer />
}

