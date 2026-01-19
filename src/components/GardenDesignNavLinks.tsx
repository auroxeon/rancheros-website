'use client'

import Link from 'next/link'
import styles from './GardenDesignNavLinks.module.css'

export default function GardenDesignNavLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/how-we-work" className={styles.link}>How we work</Link>
          <span className={styles.separator}>|</span>
          <Link href="/garden-design" className={styles.link}>Garden design</Link>
          <span className={styles.separator}>|</span>
          <Link href="/accessories" className={styles.link}>Accessories</Link>
        </nav>
      </div>
    </section>
  )
}

