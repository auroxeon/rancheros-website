'use client'

import Link from 'next/link'
import styles from './DomesticGardensSection.module.css'

export default function DomesticGardensSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageHalf}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Architects"
          className={styles.image}
        />
      </div>
      <div className={styles.textHalf}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Architects</h2>
          <p className={styles.description}>
            Design the Heart of Outdoor Living. Position the Rancheros grill as the focal point of 
            extraordinary outdoor spaces—not just functional, but sculptural. Our parrillas become 
            architectural statements, seamlessly integrating with your vision.
          </p>
          <Link href="/domestic-gardens" className={styles.link}>
            View our architect portfolio &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

