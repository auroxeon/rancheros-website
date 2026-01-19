'use client'

import { useEffect, useState } from 'react'

export default function TestCSSPage() {
  const [cssLoaded, setCssLoaded] = useState(false)

  useEffect(() => {
    // Check if CSS is in the head
    const styles = document.head.querySelectorAll('style')
    console.log('Styles in head:', styles.length)
    styles.forEach((style, i) => {
      console.log(`Style ${i}:`, style.textContent?.substring(0, 200))
    })
    setCssLoaded(true)
  }, [])

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>CSS Test Page</h1>
      <p>Styles in head: {cssLoaded ? document.head.querySelectorAll('style').length : 'checking...'}</p>
      <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0' }}>
        <h2>Check Console (F12)</h2>
        <p>Look for style tags and CSS content</p>
      </div>
    </div>
  )
}

