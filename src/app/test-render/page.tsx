'use client'

export default function TestRender() {
  return (
    <div style={{
      padding: '50px',
      fontSize: '24px',
      minHeight: '100vh',
      background: 'lightblue'
    }}>
      <h1>✅ TEST PAGE WORKS</h1>
      <p>If you see this, React is working.</p>
      <p>Now test the main page at <a href="/">/</a></p>
    </div>
  )
}

