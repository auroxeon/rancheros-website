'use client'

import styles from './GardenBuildHero.module.css'

export default function GardenBuildHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Garden Build & Project Management"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Garden Build</h1>
      </div>
    </section>
  )
}

