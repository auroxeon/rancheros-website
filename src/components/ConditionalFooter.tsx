'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide default footer on domestic-gardens page (has its own footer)
  if (pathname?.includes('/domestic-gardens')) {
    return null
  }
  
  return <Footer />
}

