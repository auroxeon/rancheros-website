'use client'

import styles from './GardenDesignHero.module.css'

export default function GardenDesignHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Grills"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Grills</h1>
      </div>
    </section>
  )
}

