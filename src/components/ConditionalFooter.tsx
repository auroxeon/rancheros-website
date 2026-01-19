'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide default footer on pages that have their own footer
  if (pathname?.includes('/domestic-gardens') || pathname?.includes('/garden-design')) {
    return null
  }
  
  return <Footer />
}

