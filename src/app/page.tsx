'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import ContentSections from '@/components/ContentSections'
import '../styles/globals.css'

export default function Home() {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const loadHTML = async () => {
      try {
        console.log('[PAGE] Loading body-clean.html...')
        const res = await fetch('/body-clean.html', { 
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        
        let text = await res.text()
        console.log('[PAGE] HTML loaded, length:', text.length)
        
        if (text.length === 0) {
          throw new Error('HTML file is empty')
        }
        
        // Remove style tags from HTML (CSS is now in standalone.css and CSS modules)
        let processedHtml = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        
        // Remove the header section (we'll use the Header component instead)
        const headerEndMatch = processedHtml.match(/<\/header>/i)
        if (headerEndMatch && headerEndMatch.index !== undefined) {
          processedHtml = processedHtml.substring(headerEndMatch.index + headerEndMatch[0].length)
        }
        
        // Replace video source with file.mp4
        // The video is in a wix-video custom element with data-video-info JSON
        // The JSON is URL-encoded in HTML: &quot; instead of "
        
        // Replace URLs in data-video-info JSON (handle URL-encoded quotes &quot;)
        // Pattern: "url":"video/.../file.mp4" or &quot;url&quot;:&quot;video/.../file.mp4&quot;
        processedHtml = processedHtml.replace(
          /(&quot;|"|')url(&quot;|"|'):(&quot;|"|')([^"']*?)video\/[^\/]+\/[^\/]+\/mp4\/file\.mp4([^"']*?)(&quot;|"|')/gi,
          '$1url$2:$3$4/file.mp4$5$6'
        )
        
        // Also replace just the video path patterns
        processedHtml = processedHtml.replace(
          /video\/[^\/]+\/[^\/]+\/mp4\/file\.mp4/g,
          '/file.mp4'
        )
        
        // Replace video element src if it exists
        processedHtml = processedHtml.replace(
          /<video([^>]*?)src=["'][^"']*["']([^>]*?)>/gi,
          '<video$1 src="/file.mp4"$2>'
        )
        
        // Add video source to video element if it doesn't have one (video element is empty)
        processedHtml = processedHtml.replace(
          /<video([^>]*?)(?<!src=)([^>]*?)>/gi,
          (match, before, after) => {
            // Only add src if it doesn't already exist
            if (!match.includes('src=')) {
              return `<video${before} src="/file.mp4"${after}>`
            }
            return match
          }
        )
        
        // Change button text from "Start Now" to "Begin your journey"
        // Replace in the HTML string - target the correct button
        processedHtml = processedHtml.replace(
          /Start Now/gi,
          'Begin your journey'
        )
        
        // Also replace in the aria-label attribute
        processedHtml = processedHtml.replace(
          /aria-label=["']Start Now["']/gi,
          'aria-label="Begin your journey"'
        )
        
        // Also replace "Begin Your Bespoke Garden Journey" if it exists
        processedHtml = processedHtml.replace(
          /Begin Your Bespoke Garden Journey/gi,
          'Begin your journey'
        )
        
        processedHtml = processedHtml.replace(
          /aria-label=["']Begin Your Bespoke Garden Journey["']/gi,
          'aria-label="Begin your journey"'
        )
        
        setHtml(processedHtml)
        setLoading(false)
        
        console.log('[PAGE] ✅ HTML ready, length:', processedHtml.length)
      } catch (err: any) {
        console.error('[PAGE] ❌ Error loading HTML:', err)
        setError(err.message || 'Unknown error')
        setLoading(false)
      }
    }

    loadHTML()
  }, [])
  
  // Process HTML after it's loaded to fix hero section and add classes
  useEffect(() => {
    if (html && typeof document !== 'undefined') {
      // Wait for DOM to be ready
      const processDOM = () => {
        // Fix hero section positioning
        const heroSection = document.getElementById('comp-kbgaghri')
        if (heroSection) {
          heroSection.classList.add('hero-section')
          // Ensure hero section is properly sized and centered
          heroSection.style.setProperty('display', 'flex', 'important')
          heroSection.style.setProperty('align-items', 'center', 'important')
          heroSection.style.setProperty('justify-content', 'flex-start', 'important')
          heroSection.style.setProperty('min-height', '100vh', 'important')
          heroSection.style.setProperty('height', '100vh', 'important')
        }
        
        // Fix content container positioning
        const contentContainer = document.querySelector('.comp-kbgaghri-container, .comp-kbgaghri-overflow-wrapper')
        if (contentContainer) {
          const container = contentContainer as HTMLElement
          container.style.setProperty('display', 'flex', 'important')
          container.style.setProperty('flex-direction', 'column', 'important')
          container.style.setProperty('align-items', 'flex-start', 'important')
          container.style.setProperty('justify-content', 'center', 'important')
          container.style.setProperty('width', '100%', 'important')
          container.style.setProperty('height', '100%', 'important')
          container.style.setProperty('min-height', '100%', 'important')
          container.style.setProperty('margin', '0 auto', 'important')
          container.style.setProperty('padding-top', '200px', 'important') // Move content down by 200px
          container.style.setProperty('z-index', '1000', 'important')
          container.style.setProperty('position', 'relative', 'important')
        }
        
        // Fix parent container that holds text and button
        const textContainer = document.getElementById('comp-meep2lnp')
        if (textContainer) {
          textContainer.style.setProperty('display', 'flex', 'important')
          textContainer.style.setProperty('flex-direction', 'column', 'important')
          textContainer.style.setProperty('align-items', 'flex-start', 'important')
          textContainer.style.setProperty('justify-content', 'center', 'important')
          textContainer.style.setProperty('width', '100%', 'important')
          textContainer.style.setProperty('gap', '0', 'important')
          textContainer.style.setProperty('position', 'relative', 'important')
          textContainer.style.setProperty('z-index', '1000', 'important')
          // Ensure button spacing is controlled by margin-top, not gap
        }
        
        // Fix video element - ensure it's using file.mp4 and playing
        // Use a flag to prevent multiple video setup attempts
        if (!(window as any).__videoSetupDone) {
          const wixVideo = document.querySelector('#videoContainer_comp-kbgaghri') as HTMLElement
          const video = document.querySelector('#comp-kbgaghri_video') as HTMLVideoElement
          const bgMedia = document.querySelector('#bgMedia_comp-kbgaghri') as HTMLElement
          
          // Set video container z-index FIRST before video loads
          if (bgMedia) {
            bgMedia.style.setProperty('z-index', '1', 'important')
            bgMedia.style.setProperty('position', 'absolute', 'important')
          }
          
          if (wixVideo) {
            wixVideo.style.setProperty('z-index', '1', 'important')
            wixVideo.style.setProperty('position', 'absolute', 'important')
            wixVideo.style.setProperty('pointer-events', 'none', 'important')
            // Remove wix-video custom element behavior by removing its data attribute
            wixVideo.removeAttribute('data-video-info')
          }
          
          if (video) {
            console.log('[PAGE] Found video element, current src:', video.src)
            
            // Set video z-index to be below text
            video.style.setProperty('z-index', '1', 'important')
            video.style.setProperty('position', 'absolute', 'important')
            video.style.setProperty('pointer-events', 'none', 'important')
            
            // Always set video source to file.mp4
            const videoPath = '/file.mp4'
            
            // Ensure video is visible
            video.style.setProperty('display', 'block', 'important')
            video.style.setProperty('visibility', 'visible', 'important')
            video.style.setProperty('opacity', '1', 'important')
            
            // Set video attributes for autoplay and loop FIRST
            video.muted = true
            video.loop = true
            video.autoplay = true
            video.playsInline = true
            video.setAttribute('autoplay', 'autoplay')
            video.setAttribute('loop', 'loop')
            video.setAttribute('muted', 'muted')
            video.setAttribute('playsinline', 'playsinline')
            video.setAttribute('preload', 'auto')
            
            // Remove any existing source elements
            const existingSources = video.querySelectorAll('source')
            existingSources.forEach(src => src.remove())
            
            // Set video source - force reload
            video.src = ''
            video.setAttribute('src', videoPath)
            video.src = videoPath
            
            // Add source element
            const source = document.createElement('source')
            source.src = videoPath
            source.type = 'video/mp4'
            video.appendChild(source)
            
            console.log('[PAGE] Video source set to:', videoPath, 'Current src:', video.src)
            
            // Force video to load and display
            video.load()
            
            // Hide the poster image only after video starts playing
            const posterImg = document.querySelector('#comp-kbgaghri_img')
            if (posterImg) {
              const hidePoster = () => {
                (posterImg as HTMLElement).style.setProperty('display', 'none', 'important')
              }
              // Wait for video to start playing before hiding poster
              video.addEventListener('playing', hidePoster, { once: true })
              // Fallback: hide after video loads
              video.addEventListener('loadeddata', () => {
                setTimeout(hidePoster, 500)
              }, { once: true })
            }
            
            // Ensure video plays - only once
            const playVideo = async () => {
              if ((video as any).__playAttempted) return
              ;(video as any).__playAttempted = true
              
              try {
                if (video.readyState === 0) {
                  video.load()
                  await new Promise(resolve => {
                    video.addEventListener('loadeddata', resolve, { once: true })
                    setTimeout(resolve, 1000)
                  })
                }
                
                video.currentTime = 0
                await video.play()
                console.log('[PAGE] ✅ Video playing:', video.src, 'readyState:', video.readyState)
              } catch (err) {
                console.log('[PAGE] Video autoplay prevented, will play on interaction:', err)
                const playOnInteraction = () => {
                  video.play().catch(console.error)
                  document.removeEventListener('click', playOnInteraction)
                  document.removeEventListener('scroll', playOnInteraction)
                  document.removeEventListener('touchstart', playOnInteraction)
                }
                document.addEventListener('click', playOnInteraction, { once: true })
                document.addEventListener('scroll', playOnInteraction, { once: true })
                document.addEventListener('touchstart', playOnInteraction, { once: true })
              }
            }
            
            // Try to play - only once
            video.load()
            if (video.readyState >= 2) {
              playVideo()
            } else {
              video.addEventListener('loadeddata', playVideo, { once: true })
              video.addEventListener('canplay', playVideo, { once: true })
              setTimeout(playVideo, 500)
            }
            
            ;(window as any).__videoSetupDone = true
          } else {
            console.log('[PAGE] ❌ Video element not found')
          }
        }
        
        // Process text elements - ensure they're always visible
        // Add animation classes to text elements - target nested elements
        const text1 = document.getElementById('comp-meep2lny3')
        const text2 = document.getElementById('comp-meep2lo22')
          
          // Wrap text in character spans for animation (based on luxury-gardens-hero reference)
        const wrapChars = (element: HTMLElement) => {
          const text = element.textContent || ''
          if (!text.trim()) return
          
          // Clear existing content
          element.innerHTML = ''
          
          // Wrap each character in a span
          Array.from(text).forEach((char, idx) => {
            const span = document.createElement('span')
            span.className = 'char'
            span.textContent = char === ' ' ? '\u00A0' : char
            span.style.setProperty('--delay', `${idx * 0.05}s`)
            element.appendChild(span)
          })
        }
        
        if (text1) {
          console.log('[PAGE] ✅ Found text1 element:', text1)
          text1.classList.add('hero__text-1')
          
          // Ensure parent container is visible and positioned
          text1.style.setProperty('visibility', 'visible', 'important')
          text1.style.setProperty('display', 'block', 'important')
          text1.style.setProperty('position', 'relative', 'important')
          text1.style.setProperty('z-index', '1000', 'important')
          text1.style.setProperty('opacity', '1', 'important')
          text1.style.setProperty('opacity', '', 'important') // Remove opacity to allow animation
          text1.style.setProperty('margin-top', '150px', 'important')
          text1.style.setProperty('pointer-events', 'none', 'important')
          
          // Find the actual text element and wrap characters
          const textElement1 = text1.querySelector('h3, .wixui-rich-text__text, span') || text1
          if (textElement1 && textElement1.textContent) {
            wrapChars(textElement1 as HTMLElement)
          }
          
          // Apply styles to all nested text elements
          const textElements1 = text1.querySelectorAll('h3, span, .wixui-rich-text__text')
          textElements1.forEach((el: Element) => {
            const htmlEl = el as HTMLElement
            if (htmlEl.textContent && htmlEl.textContent.trim() || 
                htmlEl.classList.contains('wixui-rich-text__text') || 
                htmlEl.tagName === 'H3') {
              htmlEl.style.setProperty('color', '#f2f2f2', 'important')
              htmlEl.style.setProperty('font-family', "'Playfair Display', 'Cormorant', serif", 'important')
              htmlEl.style.setProperty('font-style', 'normal', 'important')
              htmlEl.style.setProperty('font-weight', '400', 'important')
              htmlEl.style.setProperty('font-size', '29px', 'important')
              htmlEl.style.setProperty('line-height', '40px', 'important')
              htmlEl.style.setProperty('text-transform', 'uppercase', 'important')
              htmlEl.style.setProperty('letter-spacing', '0.08em', 'important')
              htmlEl.style.setProperty('text-shadow', '0 2px 8px rgba(0, 0, 0, 0.5)', 'important')
            }
          })
        } else {
          console.log('[PAGE] ❌ text1 element not found')
        }
        
        if (text2) {
          console.log('[PAGE] ✅ Found text2 element:', text2)
          text2.classList.add('hero__text-2')
          
          // Ensure parent container is visible and positioned - ALWAYS visible
          text2.style.setProperty('visibility', 'visible', 'important')
          text2.style.setProperty('display', 'block', 'important')
          text2.style.setProperty('position', 'relative', 'important')
          text2.style.setProperty('z-index', '1000', 'important')
          text2.style.setProperty('opacity', '1', 'important')
          text2.style.setProperty('margin-top', '100px', 'important')
          text2.style.setProperty('pointer-events', 'none', 'important')
          
          // Force visibility on all child elements
          const allChildren2 = text2.querySelectorAll('*')
          allChildren2.forEach((child: Element) => {
            const el = child as HTMLElement
            el.style.setProperty('visibility', 'visible', 'important')
            el.style.setProperty('display', 'block', 'important')
            el.style.setProperty('opacity', '1', 'important')
          })
          
          // Find the actual text element and wrap characters
          const textElement2 = text2.querySelector('h2, .wixui-rich-text__text, span') || text2
          if (textElement2 && textElement2.textContent) {
            // Only wrap if text exists and hasn't been wrapped already
            if (!textElement2.querySelector('.char')) {
              wrapChars(textElement2 as HTMLElement)
            }
          }
          
          // Apply styles to all nested text elements
          const textElements2 = text2.querySelectorAll('h2, span, .wixui-rich-text__text, .char')
          textElements2.forEach((el: Element) => {
            const htmlEl = el as HTMLElement
            if (htmlEl.textContent && htmlEl.textContent.trim() || 
                htmlEl.classList.contains('wixui-rich-text__text') || 
                htmlEl.classList.contains('char') ||
                htmlEl.tagName === 'H2') {
              htmlEl.style.setProperty('color', '#f2f2f2', 'important')
              htmlEl.style.setProperty('font-family', "'Playfair Display', 'Cormorant', serif", 'important')
              htmlEl.style.setProperty('font-style', 'normal', 'important')
              htmlEl.style.setProperty('font-weight', '400', 'important')
              if (!htmlEl.classList.contains('char')) {
                htmlEl.style.setProperty('font-size', '76px', 'important')
                htmlEl.style.setProperty('line-height', '91px', 'important')
              }
              htmlEl.style.setProperty('text-transform', 'uppercase', 'important')
              htmlEl.style.setProperty('letter-spacing', '0.08em', 'important')
              htmlEl.style.setProperty('text-shadow', '0 2px 8px rgba(0, 0, 0, 0.5)', 'important')
              htmlEl.style.setProperty('visibility', 'visible', 'important')
              htmlEl.style.setProperty('opacity', '1', 'important')
            }
          })
        } else {
          console.log('[PAGE] ❌ text2 element not found')
        }
        
        // Add animation to button and update text - target the correct button (comp-meep2loa10)
        const button = document.getElementById('comp-meep2loa10')
        if (button) {
          console.log('[PAGE] ✅ Found button element:', button)
          button.classList.add('hero__button-animated')
          
          // Remove/hide button icon
          const buttonIcon = button.querySelector('.wixui-button__icon, [data-testid="stylablebutton-icon"], svg')
          if (buttonIcon) {
            console.log('[PAGE] ✅ Found button icon, removing it')
            buttonIcon.remove()
          }
          
          // Ensure button is visible and positioned below text, aligned left
          button.style.setProperty('visibility', 'visible', 'important')
          button.style.setProperty('display', 'inline-block', 'important')
          button.style.setProperty('opacity', '1', 'important')
          button.style.setProperty('animation', 'fadeIn 0.8s ease-out 1.2s forwards', 'important')
          button.style.setProperty('margin-left', '0', 'important')
          button.style.setProperty('margin-right', 'auto', 'important')
          button.style.setProperty('margin-top', '50px', 'important')
          button.style.setProperty('margin-bottom', '0', 'important')
          button.style.setProperty('position', 'relative', 'important')
          button.style.setProperty('z-index', '2', 'important')
          button.style.setProperty('width', 'auto', 'important')
          button.style.setProperty('max-width', '100%', 'important')
          button.style.setProperty('padding', '8px 16px', 'important')
          button.style.setProperty('border-radius', '20px', 'important')
          button.style.setProperty('background', 'rgba(255, 255, 255, 0.2)', 'important')
          button.style.setProperty('backdrop-filter', 'blur(10px)', 'important')
          button.style.setProperty('border', 'none', 'important')
          
          // Also ensure the button's parent doesn't have conflicting styles
          const buttonParent = button.parentElement
          if (buttonParent) {
            buttonParent.style.setProperty('display', 'flex', 'important')
            buttonParent.style.setProperty('flex-direction', 'column', 'important')
            buttonParent.style.setProperty('gap', '0', 'important')
          }
          
          // Update button text to "Begin your journey"
          const buttonLabel = button.querySelector('.wixui-button__label, .w4Vxx6, [data-testid="linkElement"] .wixui-button__label, [data-testid="stylablebutton-label"], span')
          if (buttonLabel) {
            console.log('[PAGE] ✅ Found button label, updating text')
            buttonLabel.textContent = 'Begin your journey'
            const labelEl = buttonLabel as HTMLElement
            labelEl.style.setProperty('margin', '0', 'important')
            labelEl.style.setProperty('padding', '0', 'important')
            labelEl.style.setProperty('color', '#ffffff', 'important')
            labelEl.style.setProperty('font-size', '14px', 'important')
          } else {
            console.log('[PAGE] ⚠️ Button label not found, trying direct text update')
            // Try to find any text node
            const linkElement = button.querySelector('[data-testid="linkElement"]')
            if (linkElement) {
              const label = linkElement.querySelector('.wixui-button__label, .w4Vxx6, span, [data-testid="stylablebutton-label"]')
              if (label) {
                label.textContent = 'Begin your journey'
                console.log('[PAGE] ✅ Updated button text via linkElement')
              }
            }
            // Try direct textContent update
            if (button.textContent && button.textContent.includes('Start Now')) {
              button.textContent = button.textContent.replace('Start Now', 'Begin your journey')
              console.log('[PAGE] ✅ Updated button text via textContent')
            }
          }
          
          // Also update aria-label
          const buttonLink = button.querySelector('[aria-label], a[aria-label], [data-testid="linkElement"]')
          if (buttonLink) {
            buttonLink.setAttribute('aria-label', 'Begin your journey')
          }
        } else {
          console.log('[PAGE] ❌ Button element comp-meep2loa10 not found, searching for alternatives...')
          // Try to find button by text content
          const allButtons = document.querySelectorAll('[id*="comp-meep2lo"], [class*="wixui-button"]')
          console.log('[PAGE] Found', allButtons.length, 'potential button elements')
          allButtons.forEach((btn, idx) => {
            console.log(`[PAGE] Button ${idx}:`, btn.id, btn.className, btn.textContent?.substring(0, 50))
          })
        }
        
        // Also handle the other button (comp-meep2lo81) if it exists
        const button2 = document.getElementById('comp-meep2lo81')
        if (button2) {
          const buttonLabel2 = button2.querySelector('.wixui-button__label, [data-testid="stylablebutton-label"]')
          if (buttonLabel2) {
            buttonLabel2.textContent = 'Begin your journey'
          }
          const buttonLink2 = button2.querySelector('a[aria-label]')
          if (buttonLink2) {
            buttonLink2.setAttribute('aria-label', 'Begin your journey')
          }
        }
        
        // Fix phone number
        const phone = document.getElementById('comp-meepnqmt')
        if (phone) {
          phone.classList.add('hero__phone')
          if (!phone.style.animation) {
            phone.style.opacity = '0'
            phone.style.animation = 'fadeIn 0.8s ease-out 1.4s forwards'
          }
        }
      }
      
      // Try immediately and also after a delay - but only process video once
      processDOM()
      setTimeout(processDOM, 100)
      setTimeout(processDOM, 500)
      
      // Use MutationObserver to catch when elements are added or modified
      const observer = new MutationObserver((mutations) => {
        let shouldReprocess = false
        mutations.forEach((mutation) => {
          // Check for added nodes
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const el = node as HTMLElement
              if (el.id === 'comp-meep2lny3' || el.id === 'comp-meep2lo22' || el.id === 'comp-meep2loa10' || el.id === 'comp-kbgaghri_video') {
                shouldReprocess = true
              }
              // Check nested elements
              if (el.querySelector && (el.querySelector('#comp-meep2lny3') || el.querySelector('#comp-meep2lo22') || el.querySelector('#comp-meep2loa10'))) {
                shouldReprocess = true
              }
            }
          })
          
          // Check for attribute changes that might hide elements
          if (mutation.type === 'attributes') {
            const target = mutation.target as HTMLElement
            if (target.id === 'comp-meep2lny3' || target.id === 'comp-meep2lo22' || target.id === 'comp-kbgaghri_video') {
              // Re-apply visibility if element gets hidden
              if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
                const text1 = document.getElementById('comp-meep2lny3')
                const text2 = document.getElementById('comp-meep2lo22')
                const video = document.getElementById('comp-kbgaghri_video') as HTMLVideoElement
                
                if (text1) {
                  text1.style.setProperty('visibility', 'visible', 'important')
                  text1.style.setProperty('display', 'block', 'important')
                  text1.style.setProperty('opacity', '1', 'important')
                }
                if (text2) {
                  text2.style.setProperty('visibility', 'visible', 'important')
                  text2.style.setProperty('display', 'block', 'important')
                  text2.style.setProperty('opacity', '1', 'important')
                }
                if (video) {
                  video.style.setProperty('display', 'block', 'important')
                  video.style.setProperty('visibility', 'visible', 'important')
                  video.style.setProperty('opacity', '1', 'important')
                }
              }
            }
          }
        })
        if (shouldReprocess) {
          processDOM()
        }
      })
      
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      })
      
      // Keep observer running longer to catch late changes
      setTimeout(() => observer.disconnect(), 10000)
    }
  }, [html])

  if (loading) {
    return (
      <div style={{
        padding: '50px',
        textAlign: 'center',
        fontSize: '24px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        background: '#f5f5f5'
      }}>
        <div>Loading website...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        padding: '50px',
        textAlign: 'center',
        fontSize: '24px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        background: '#fff5f5'
      }}>
        <div style={{ marginBottom: '20px', color: 'red' }}>❌ Error</div>
        <div style={{ fontSize: '16px', color: '#666' }}>{error}</div>
      </div>
    )
  }

  if (!html) {
    return (
      <div style={{
        padding: '50px',
        textAlign: 'center',
        fontSize: '24px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        No content to display
      </div>
    )
  }

  return (
    <>
      <Hero />
      <ContentSections />
    </>
  )
}
