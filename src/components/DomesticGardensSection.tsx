'use client'

import Link from 'next/link'
import styles from './DomesticGardensSection.module.css'

export default function DomesticGardensSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Domestic Gardens</h2>
          <p className={styles.description}>
            At Rancheros we love to design gardens which exude individuality and atmosphere, 
            gardens which are beautiful to behold, yet comfortable to live in and easy to maintain.
          </p>
          <Link href="/domestic-gardens" className={styles.link}>
            View our domestic gardens portfolio &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

