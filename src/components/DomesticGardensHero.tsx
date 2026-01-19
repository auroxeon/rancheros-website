'use client'

import styles from './DomesticGardensHero.module.css'

export default function DomesticGardensHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Domestic Gardens"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Domestic Gardens</h1>
      </div>
    </section>
  )
}

