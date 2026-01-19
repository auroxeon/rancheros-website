'use client'

import Link from 'next/link'
import styles from './GardenDesignCTA.module.css'

export default function GardenDesignCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>R</div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Planning a Project</h2>
            <p className={styles.text}>We&apos;d be delighted to discuss your requirements.</p>
            <Link href="/contact" className={styles.button}>
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

