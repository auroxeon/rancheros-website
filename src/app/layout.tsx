import type { Metadata } from 'next'
import '../styles/globals.css'
// All CSS modules are imported via globals.css
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Rancheros Grills',
  description: 'Award-winning luxury garden design across London, Surrey, Sussex, and Kent. Creating breathtaking outdoor spaces for over twenty years.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="192x192" href="/logo-icon.png" type="image/png"/>
        <link rel="shortcut icon" href="/logo-icon.png" type="image/png"/>
        <link rel="apple-touch-icon" href="/logo-icon.png" type="image/png"/>
        {/* Google Fonts - Load before CSS to ensure fonts are available */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Nunito:wght@200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        {/* Standalone CSS - Complete Wix compatibility */}
        <link rel="stylesheet" href="/css/standalone.css" />
      </head>
      <body className="responsive">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
