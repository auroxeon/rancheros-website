'use client'

import styles from './GardenMaintenanceHero.module.css'

export default function GardenMaintenanceHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Garden Maintenance"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Garden Maintenance</h1>
      </div>
    </section>
  )
}

