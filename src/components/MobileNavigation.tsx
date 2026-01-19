'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import styles from './MobileNavigation.module.css'

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
  onClick?: () => void
}

interface MobileNavigationProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

const CONTACT_PATH = '/contact'

export default function MobileNavigation({ items, isOpen, onClose }: MobileNavigationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const primaryCta = useMemo(() => items.find(item => item.href === CONTACT_PATH), [items])
  const loginItem = useMemo(() => items.find(item => item.label.toLowerCase() === 'login'), [items])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setOpenIndex(null)
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = (handler?: () => void) => {
    if (handler) {
      handler()
    }
    onClose()
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        role="presentation"
        onClick={onClose}
      />

      <aside
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.header}>
          <span className={styles.title}>Menu</span>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className={styles.menuList}>
            {items.map((item, index) => {
              const hasChildren = Boolean(item.children?.length)

              return (
                <li key={item.label} className={styles.menuItem}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className={styles.menuButton}
                        aria-expanded={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <span>{item.label}</span>
                        <span>{openIndex === index ? '−' : '+'}</span>
                      </button>

                      <div
                        className={`${styles.submenu} ${openIndex === index ? styles.submenuOpen : ''}`}
                        role="group"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className={styles.submenuLink}
                            onClick={() => handleLinkClick(child.onClick)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : item.onClick ? (
                    <button
                      type="button"
                      className={styles.menuButton}
                      onClick={() => handleLinkClick(item.onClick)}
                    >
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className={styles.menuLink}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.ctaRow}>
          {primaryCta && (
            <Link
              href={primaryCta.href!}
              className={styles.ctaPrimary}
              onClick={onClose}
            >
              Contact Us
            </Link>
          )}

          {loginItem?.onClick && (
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => handleLinkClick(loginItem.onClick)}
            >
              Login / Register
            </button>
          )}
        </div>
      </aside>
    </>
  )
}

