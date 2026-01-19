'use client'

import styles from './HowWeWorkHero.module.css'

export default function HowWeWorkHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="How We Work"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>How we Work</h1>
      </div>
    </section>
  )
}

