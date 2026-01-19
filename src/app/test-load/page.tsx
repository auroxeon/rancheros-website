'use client'

export default function TestLoadPage() {
  return (
    <div style={{
      padding: '50px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>✅ Test Page Loaded Successfully!</h1>
        <p style={{ fontSize: '20px', marginBottom: '30px' }}>
          If you can see this page, Next.js is working correctly.
        </p>
        
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '20px',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Server Status:</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <li>✅ Next.js server is running</li>
            <li>✅ React is rendering</li>
            <li>✅ Client-side JavaScript is working</li>
            <li>✅ CSS styling is applied</li>
          </ul>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '20px',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Next Steps:</h2>
          <ol style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <li>Check browser console (F12) for any errors</li>
            <li>Check Network tab to see resource loading</li>
            <li>Navigate to <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '3px' }}>/</code> to test main page</li>
          </ol>
        </div>

        <div style={{ marginTop: '30px' }}>
          <a 
            href="/" 
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#667eea',
              padding: '15px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px'
            }}
          >
            → Go to Main Website
          </a>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          <strong>Debug Info:</strong>
          <div style={{ marginTop: '10px' }}>
            <div>Current URL: {typeof window !== 'undefined' ? window.location.href : 'SSR'}</div>
            <div>Timestamp: {new Date().toISOString()}</div>
            <div>User Agent: {typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'SSR'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

