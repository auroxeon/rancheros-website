export default function SimplePage() {
  return (
    <div style={{ padding: '50px', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '32px' }}>Simple Test Page</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        If you can see this, Next.js is working correctly.
      </p>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        The issue is likely with the HTML content loading or CSS not applying.
      </p>
      <a href="/" style={{ display: 'block', marginTop: '30px', color: 'blue', textDecoration: 'underline' }}>
        ← Back to Home
      </a>
    </div>
  )
}




