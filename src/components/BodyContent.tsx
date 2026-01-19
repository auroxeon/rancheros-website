'use client'

import { useEffect } from 'react'
import SiteContainer from './SiteContainer'

export default function BodyContent() {
  useEffect(() => {
    // Scroll bar width calculation script from original
    const div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)
    const scrollbarWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)
    if (scrollbarWidth > 0) {
      document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
    }
  }, [])

  return (
    <>
      <svg data-dom-store style={{ display: 'none' }}>
        <defs id="dom-store-defs"></defs>
      </svg>
      <SiteContainer />
    </>
  )
}

