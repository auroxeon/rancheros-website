'use client'

import styles from './HowWeWorkHero.module.css'

interface GenericPageHeroProps {
  title: string
}

export default function GenericPageHero({ title }: GenericPageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/20251019_112543.jpg" 
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  )
}

