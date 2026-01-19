'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
  onClick?: () => void
}

interface NavigationProps {
  items: NavItem[]
}

export default function Navigation({ items }: NavigationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className={styles.nav} ref={navRef} aria-label="Main Navigation">
      <ul className={styles.navList} role="menubar">
        {items.map((item, idx) => (
          <li key={item.label} className={styles.navItem} role="none">
            {item.children ? (
              <div className={styles.dropdown}>
                <button
                  className={styles.navLink}
                  aria-haspopup="true"
                  aria-expanded={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  onMouseEnter={() => setOpenIndex(idx)}
                  onFocus={() => setOpenIndex(idx)}
                >
                  {item.label}
                  <svg className={styles.chevron} width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                <div 
                  className={`${styles.dropdownPanel} ${openIndex === idx ? styles.dropdownPanelOpen : ''}`}
                  onMouseLeave={() => setOpenIndex(null)}
                  role="menu"
                  aria-label={item.label}
                >
                  {item.children.map((sub) => (
                    <Link 
                      key={sub.label} 
                      href={sub.href || '#'} 
                      className={styles.dropdownLink} 
                      role="menuitem"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.onClick ? (
              <button
                type="button"
                className={`${styles.navLink} ${styles.navLinkAction}`}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ) : (
              <Link
                href={item.href || '#'}
                className={`${styles.navLink} ${item.label === 'Home' ? styles.navLinkHome : ''}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

