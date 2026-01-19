'use client'

import styles from './CommercialGardensHero.module.css'

export default function CommercialGardensHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Commercial Gardens"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Commercial Gardens</h1>
      </div>
    </section>
  )
}

