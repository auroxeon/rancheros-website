'use client'

import { useCallback, useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo on far left */}
          <div className="navbar__logo">
            <Link href="/">
              <img 
                src="/rancheros-logo.png" 
                alt="Rancheros"
                className="navbar__logo-img"
              />
            </Link>
          </div>

          {/* Right side: Get in touch button and burger menu */}
          <div className="navbar__right">
            <Link href="/contact" className="navbar__get-in-touch">
              Get in touch
            </Link>
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
          </div>
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
