'use client'

export default function TestHTMLPage() {
  const testHTML = `
    <div style="padding: 50px; background: #f0f0f0; min-height: 100vh;">
      <h1 style="color: red; font-size: 32px;">HTML Injection Test</h1>
      <p style="font-size: 18px; margin-top: 20px;">
        This tests if dangerouslySetInnerHTML works.
      </p>
      <div style="background: yellow; padding: 20px; margin-top: 20px;">
        <p>If you see this yellow box, HTML injection is working!</p>
      </div>
      <a href="/" style="display: block; margin-top: 30px; color: blue; text-decoration: underline;">
        ← Back to Home
      </a>
    </div>
  `

  return <div dangerouslySetInnerHTML={{ __html: testHTML }} />
}




