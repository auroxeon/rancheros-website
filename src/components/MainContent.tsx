'use client'

import { useEffect, useState, useRef } from 'react'

export default function MainContent() {
  const [mainHtml, setMainHtml] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const hasFetched = useRef<boolean>(false)

  useEffect(() => {
    // Prevent duplicate fetches in React Strict Mode
    if (hasFetched.current) {
      return
    }
    hasFetched.current = true

    console.log('MainContent: Starting fetch...')
    // Load the main content HTML
    const controller = new AbortController()
    
    fetch('/main-content-only.html', { signal: controller.signal })
      .then((res) => {
        console.log('MainContent: Response status:', res.status)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.text()
      })
      .then((html) => {
        console.log('MainContent: HTML loaded, length:', html.length)
        console.log('MainContent: First 200 chars:', html.substring(0, 200))
        // Don't convert class to className - dangerouslySetInnerHTML uses raw HTML
        setMainHtml(html)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('MainContent: Fetch aborted')
          return
        }
        console.error('MainContent: Failed to load:', err)
        setError(err.message)
        setLoading(false)
      })

    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort()
    }
  }, [])

  if (loading) {
    return <div style={{ padding: '20px', background: '#f0f0f0', minHeight: '200px', color: 'black' }}>Loading content...</div>
  }

  if (error) {
    return <div style={{ padding: '20px', background: '#ffebee', color: 'red', minHeight: '200px' }}>Error loading content: {error}</div>
  }

  if (!mainHtml) {
    return <div style={{ padding: '20px', background: '#fff3cd', minHeight: '200px', color: 'black' }}>No content available</div>
  }

  console.log('MainContent: Rendering HTML, length:', mainHtml.length)

  return (
    <main id="PAGE_SECTIONSc1dmp" className="PAGE_SECTIONSc1dmp c1rIl3" data-main-content-parent="true" style={{ minHeight: '200px', visibility: mainHtml ? 'visible' : 'hidden' }}>
      <div dangerouslySetInnerHTML={{ __html: mainHtml }} />
    </main>
  )
}
