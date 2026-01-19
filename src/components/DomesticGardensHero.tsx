'use client'

import styles from './DomesticGardensHero.module.css'

export default function DomesticGardensHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Architects"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Architects</h1>
      </div>
    </section>
  )
}

