import type { Metadata } from 'next'
import { Inter, Montserrat, Open_Sans, Nunito, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
// All CSS modules are imported via globals.css
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', weight: ['300', '400', '500', '600', '700', '800'], display: 'swap' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', weight: ['200', '300', '400', '500', '600', '700', '800', '900'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '500', '600', '700', '800', '900'], display: 'swap' })

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
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${openSans.variable} ${nunito.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" sizes="192x192" href="/logo-icon.png" type="image/png"/>
        <link rel="shortcut icon" href="/logo-icon.png" type="image/png"/>
        <link rel="apple-touch-icon" href="/logo-icon.png" type="image/png"/>
      </head>
      <body className="responsive">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
