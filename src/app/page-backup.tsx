'use client'

import { useEffect, useState } from 'react'

// Module loading debug tracker
const moduleLoadTracker = {
  loaded: new Set<string>(),
  failed: new Set<string>(),
  pending: new Set<string>(),
  
  log(moduleName: string, status: 'loading' | 'loaded' | 'failed', details?: any) {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] MODULE: ${moduleName} - ${status.toUpperCase()}${details ? ` - ${JSON.stringify(details)}` : ''}`
    console.log(`%c${logEntry}`, 
      status === 'loaded' ? 'color: green' : 
      status === 'failed' ? 'color: red' : 
      'color: orange'
    )
    
    if (status === 'loading') {
      this.pending.add(moduleName)
    } else if (status === 'loaded') {
      this.loaded.add(moduleName)
      this.pending.delete(moduleName)
    } else if (status === 'failed') {
      this.failed.add(moduleName)
      this.pending.delete(moduleName)
    }
    
    // Log summary every 5 modules
    if ((this.loaded.size + this.failed.size) % 5 === 0) {
      this.summary()
    }
  },
  
  summary() {
    console.log('%c=== MODULE LOAD SUMMARY ===', 'font-weight: bold; font-size: 14px')
    console.log(`Loaded: ${this.loaded.size}`, Array.from(this.loaded))
    console.log(`Failed: ${this.failed.size}`, Array.from(this.failed))
    console.log(`Pending: ${this.pending.size}`, Array.from(this.pending))
  }
}

export default function Home() {
  const [bodyHtml, setBodyHtml] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Debug: Log component render
    console.log('🏠 Home component rendering - loading:', loading, 'error:', error, 'bodyHtml length:', bodyHtml.length)
  }, [loading, error, bodyHtml])

  useEffect(() => {
    moduleLoadTracker.log('page.tsx', 'loading')
    
    // Load the full body HTML
    moduleLoadTracker.log('fetch-body-full.html', 'loading')
    fetch('/body-full.html')
      .then((res) => {
        moduleLoadTracker.log('fetch-body-full.html', res.ok ? 'loaded' : 'failed', { status: res.status })
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.text()
      })
      .then((html) => {
        moduleLoadTracker.log('parse-body-html', 'loading')
        setBodyHtml(html)
        setLoading(false)
        moduleLoadTracker.log('parse-body-html', 'loaded', { length: html.length })
        moduleLoadTracker.log('page.tsx', 'loaded')
        
        // Final summary after a delay
        setTimeout(() => {
          moduleLoadTracker.summary()
        }, 2000)
      })
      .catch((err) => {
        moduleLoadTracker.log('fetch-body-full.html', 'failed', { error: err.message })
        setError(err.message)
        setLoading(false)
        moduleLoadTracker.log('page.tsx', 'failed', { error: err.message })
        moduleLoadTracker.summary()
      })
  }, [])

  // Initialize comprehensive Wix API shim BEFORE any scripts run
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const win = window as any
    
    // Comprehensive Wix API shim - prevents all "Cannot read properties" errors
    if (!win.viewerModel) {
      win.viewerModel = {
        experiments: {},
        siteFeaturesConfigs: {},
        siteAssets: {
          clientTopology: {},
          css: {},
          js: {}
        },
        customElementNamespace: {
          mediaServices: {},
          wixCustomElements: {}
        },
        pageJson: {},
        site: {},
        commonConfig: {},
        language: 'en',
        mode: { editor: false, preview: false },
        requestUrl: window.location.href,
        siteRevision: 1,
        metaSiteId: '',
        siteId: '',
        pageId: '',
        isMobileDevice: false,
        deviceInfo: {},
        remoteWidgetStructureBuilderVersion: '1.0.0',
        blocksBuilderManifestGeneratorVersion: '1.0.0'
      }
    }
    
    // Wix tracking/analytics shims
    if (!win.fedops) {
      win.fedops = {
        appLoadStarted: () => {},
        appLoaded: () => {},
        phaseStarted: () => {},
        phaseEnded: () => {}
      }
    }
    
    // Wix BI (Business Intelligence) shim
    if (!win.bi) {
      win.bi = {
        sendBeacon: () => {},
        sendView: () => {},
        sendClick: () => {},
        sendEvent: () => {}
      }
    }
    
    // Wix session builder shim
    if (!win.sessionBuilder) {
      win.sessionBuilder = {
        build: () => ({})
      }
    }
    
    // Wix custom elements registry shim
    if (!win.customElements) {
      win.customElements = {
        define: () => {},
        get: () => null,
        whenDefined: () => Promise.resolve()
      }
    }
    
    // Wix worker shim
    if (!win.Worker) {
      win.Worker = class MockWorker {
        postMessage() {}
        terminate() {}
        addEventListener() {}
        removeEventListener() {}
      }
    }
    
    // Suppress console errors for missing Wix APIs
    const originalError = console.error
    console.error = (...args: any[]) => {
      const msg = args.join(' ')
      // Only suppress Wix-specific errors, let others through
      if (msg.includes('viewerModel') || 
          msg.includes('siteFeaturesConfigs') || 
          msg.includes('siteAssets') ||
          msg.includes('customElementNamespace') ||
          msg.includes('fedops') ||
          msg.includes('phaseStarted') ||
          msg.includes('Cannot read properties of undefined') ||
          msg.includes('Cannot destructure')) {
        // Suppress these errors
        return
      }
      originalError.apply(console, args)
    }
    
    return () => {
      console.error = originalError
    }
  }, [])
  
  useEffect(() => {
    if (!bodyHtml) return

    // Wait for DOM to be ready, then process scripts
    const processScripts = () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(bodyHtml, 'text/html')
      const scripts = Array.from(doc.querySelectorAll('script'))
      
      // Extract and inject styles first
      const styles = doc.querySelectorAll('style, link[rel="stylesheet"]')
      styles.forEach((style, index) => {
        const styleId = style.getAttribute('href') ? `style-${style.getAttribute('href')?.substring(0, 50)}` : `inline-style-${index}`
        moduleLoadTracker.log(styleId, 'loading')
        
        try {
          if (style.tagName === 'LINK') {
            const link = style as HTMLLinkElement
            const newLink = document.createElement('link')
            newLink.rel = 'stylesheet'
            newLink.href = link.href
            newLink.onload = () => moduleLoadTracker.log(styleId, 'loaded')
            newLink.onerror = () => moduleLoadTracker.log(styleId, 'failed')
            document.head.appendChild(newLink)
          } else {
            const newStyle = document.createElement('style')
            newStyle.textContent = style.textContent || style.innerHTML || ''
            document.head.appendChild(newStyle)
            moduleLoadTracker.log(styleId, 'loaded')
          }
        } catch (error: any) {
          moduleLoadTracker.log(styleId, 'failed', { error: error.message })
        }
      })

      // Execute scripts sequentially with error handling
      const executeScripts = async () => {
        for (let index = 0; index < scripts.length; index++) {
          const script = scripts[index]
          const scriptId = script.src ? `external-${script.src.substring(0, 100)}` : `inline-script-${index}`
          moduleLoadTracker.log(scriptId, 'loading')
          
          try {
            if (script.src) {
              // External script - load it
              await new Promise<void>((resolve, reject) => {
                const newScript = document.createElement('script')
                newScript.src = script.src!
                newScript.async = script.async || false
                newScript.defer = script.defer || false
                
                newScript.onload = () => {
                  moduleLoadTracker.log(scriptId, 'loaded')
                  resolve()
                }
                
                newScript.onerror = () => {
                  moduleLoadTracker.log(scriptId, 'failed', { error: 'Script load failed' })
                  resolve() // Continue even if script fails
                }
                
                document.head.appendChild(newScript)
              })
            } else {
              // Inline script - execute it with comprehensive error handling
              const scriptContent = script.textContent || script.innerHTML || ''
              if (scriptContent.trim()) {
                try {
                  // Always try to execute scripts as-is first (safest approach)
                  // Wrapping can cause syntax errors with certain script content
                  setTimeout(() => {
                    try {
                      const newScript = document.createElement('script')
                      newScript.textContent = scriptContent
                      newScript.type = 'text/javascript'
                      
                      // Add error handler to script element itself
                      newScript.onerror = () => {
                        moduleLoadTracker.log(scriptId, 'failed', { error: 'Script execution error' })
                      }
                      
                      // Use a more robust approach - execute in isolated context
                      // Create script with error suppression
                      const uniqueScriptId = `script-${Date.now()}-${Math.random()}`
                      newScript.id = uniqueScriptId
                      
                      // Add before script executes
                      const errorSuppressor = () => {
                        const originalError = window.onerror
                        window.onerror = (msg, url, line, col, error) => {
                          // Suppress syntax errors and appendChild errors from script execution
                          if (msg && typeof msg === 'string' && (
                            msg.includes('Unexpected token') ||
                            msg.includes('appendChild') ||
                            msg.includes('Failed to execute')
                          )) {
                            return true // Suppress error
                          }
                          if (originalError) {
                            return originalError(msg, url, line, col, error)
                          }
                          return false
                        }
                        
                        // Restore after script loads
                        newScript.onload = () => {
                          setTimeout(() => {
                            window.onerror = originalError
                          }, 50)
                        }
                        
                        // Also restore on error
                        newScript.onerror = () => {
                          window.onerror = originalError
                        }
                      }
                      
                      errorSuppressor()
                      document.head.appendChild(newScript)
                      
                      moduleLoadTracker.log(scriptId, 'loaded')
                    } catch (error: any) {
                      // If appendChild fails, the script content might be invalid
                      // Try to sanitize and retry, or skip
                      try {
                        // Try with a safer approach - use eval in a try-catch
                        const safeEval = new Function(scriptContent)
                        safeEval()
                        moduleLoadTracker.log(scriptId, 'loaded')
                      } catch (evalError: any) {
                        // Script can't be executed - skip it silently
                        moduleLoadTracker.log(scriptId, 'failed', { error: 'Cannot execute - skipped' })
                      }
                    }
                  }, 0)
                } catch (error: any) {
                  moduleLoadTracker.log(scriptId, 'failed', { error: error.message })
                }
              } else {
                moduleLoadTracker.log(scriptId, 'loaded') // Empty script
              }
            }
          } catch (error: any) {
            moduleLoadTracker.log(scriptId, 'failed', { error: error.message })
          }
          
          // Small delay between scripts to prevent overwhelming
          await new Promise(resolve => setTimeout(resolve, 10))
        }
      }

      // Wait a bit for DOM to settle, then execute scripts
      setTimeout(() => {
        executeScripts()
      }, 100)
    }

    // Wait for next tick to ensure DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', processScripts)
    } else {
      processScripts()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', processScripts)
    }
  }, [bodyHtml])

  // Debug: Verify content is rendered
  useEffect(() => {
    if (bodyHtml) {
      setTimeout(() => {
        const wrapper = document.getElementById('main-content-wrapper')
        if (wrapper) {
          console.log('✅ Content wrapper found')
          console.log('   Children:', wrapper.children.length)
          console.log('   HTML length:', wrapper.innerHTML.length)
          console.log('   First 200 chars:', wrapper.innerHTML.substring(0, 200))
        } else {
          console.error('❌ Content wrapper NOT found!')
        }
      }, 500)
    }
  }, [bodyHtml])

  if (loading) {
    return (
      <div style={{ 
        padding: '50px', 
        textAlign: 'center',
        minHeight: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontSize: '24px', 
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Loading website...
        </div>
        <div style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
          Loading modules... Check console (F12) for progress
        </div>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
        <div style={{ fontSize: '18px', marginBottom: '20px' }}>Error loading website</div>
        <div style={{ fontSize: '14px' }}>{error}</div>
        <div style={{ fontSize: '12px', marginTop: '20px', color: '#666' }}>
          Check console (F12) for module load details
        </div>
      </div>
    )
  }

  if (!bodyHtml) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
        <div style={{ fontSize: '18px', marginBottom: '20px' }}>No content loaded</div>
        <div style={{ fontSize: '14px' }}>bodyHtml is empty</div>
      </div>
    )
  }

  // ALWAYS render something - this should never be blank
  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      <div 
        id="module-debug-panel"
        style={{ 
          position: 'fixed', 
          top: '0', 
          right: '0', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white',
          padding: '10px', 
          zIndex: 10000,
          fontSize: '12px',
          fontFamily: 'monospace',
          maxWidth: '300px',
          maxHeight: '200px',
          overflow: 'auto'
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Module Load Status</div>
        <div>Loaded: {moduleLoadTracker.loaded.size}</div>
        <div>Failed: {moduleLoadTracker.failed.size}</div>
        <div>Pending: {moduleLoadTracker.pending.size}</div>
        <div style={{ marginTop: '10px', fontSize: '10px', color: '#aaa' }}>
          Check console (F12) for details
        </div>
      </div>
      <div 
        id="main-content-wrapper"
        style={{ 
          minHeight: '100vh', 
          width: '100%',
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#ffffff'
        }}
        dangerouslySetInnerHTML={{ 
          __html: bodyHtml ? bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') : '<div style="padding:50px;text-align:center;color:red;font-size:24px;">⚠️ Content is loading or empty</div>' 
        }} 
      />
    </div>
  )
}
