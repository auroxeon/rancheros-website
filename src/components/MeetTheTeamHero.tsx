'use client'

import styles from './MeetTheTeamHero.module.css'

export default function MeetTheTeamHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt="Meet the Team"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Meet the Team</h1>
      </div>
    </section>
  )
}

