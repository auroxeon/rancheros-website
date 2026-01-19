'use client'

import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLoginClick = useCallback(() => {
    setIsLoginModalOpen(true)
  }, [])

  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Domestic Gardens", href: "/domestic-gardens" },
      { label: "Commercial Gardens", href: "/commercial-gardens" },
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "How we Work", href: "/how-we-work" },
      { label: "Garden Design", href: "/garden-design" },
      { label: "Garden Build", href: "/garden-build" },
      { label: "Garden Maintenance", href: "/garden-maintenance" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Get in touch", href: "/contact" },
    ],
    [handleLoginClick]
  )

  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={openMobileMenu}
          >
            <span className="navbar__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          {/* Logo on far left */}
          <div className="navbar__logo">
            <Link href="/">
              <img 
                src="/logo-icon.png" 
                alt="Rancheros Grills"
                width={117}
                height={81}
              />
            </Link>
          </div>

          {/* Navigation in center */}
          <Navigation items={navItems} />
        </div>
      </header>

      <MobileNavigation 
        items={navItems}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Login/Register Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}
