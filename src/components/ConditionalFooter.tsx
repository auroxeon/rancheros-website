'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide default footer on pages that have their own footer
  if (pathname?.includes('/domestic-gardens') || pathname?.includes('/garden-design') || pathname?.includes('/how-we-work')) {
    return null
  }
  
  return <Footer />
}

