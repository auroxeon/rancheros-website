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
      {
        label: "Grills Design",
        href: "/garden-design"
      },
      {
        label: "Outdoor Living Designers",
        children: [
          { label: "Landscape Designers", href: "/landscape-designers" },
          { label: "Architects", href: "/architects" },
          { label: "Garden Designers", href: "/garden-designers" },
          { label: "Homeowners", href: "/homeowners" },
          { label: "Developers", href: "/developers" },
        ],
      },
      {
        label: "Our Products",
        children: [
          { label: "Single Grills", href: "/single-grills" },
          { label: "Double Grills", href: "/double-grills" },
          { label: "Accessories", href: "/accessories" },
          { label: "Bespoke", href: "/bespoke" },
          { label: "Services", href: "/services" },
        ],
      },
      {
        label: "About Us",
        children: [
          { label: "About", href: "/about" },
          { label: "News", href: "/news" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
        ],
      },
      { label: "Circulo del Fuego Club", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Login", onClick: handleLoginClick },
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
