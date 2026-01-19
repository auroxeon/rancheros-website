'use client'

import Link from 'next/link'
import styles from './CommercialGardensSection.module.css'

export default function CommercialGardensSection() {
  return (
    <section className={styles.section}>
      <div className={styles.textHalf}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Designers</h2>
          <p className={styles.description}>
            Craft Culinary Sanctuaries. Interior and garden designers work with Rancheros to transform 
            outdoor cooking into ceremonial luxury experiences. We bring cohesion between indoor elegance 
            and outdoor authenticity.
          </p>
          <Link href="/commercial-gardens" className={styles.link}>
            Explore designer collaborations &gt;
          </Link>
        </div>
      </div>
      <div className={styles.imageHalf}>
        <img 
          src="/images/Stapleton-Hall-Road-12.jpg" 
          alt="Designers"
          className={styles.image}
        />
      </div>
    </section>
  )
}

