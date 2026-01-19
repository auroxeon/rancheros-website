'use client'

import Link from 'next/link'
import styles from './HowWeWorkSection.module.css'

export default function HowWeWorkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageHalf}>
        <img 
          src="/images/how-we-work.jpg" 
          alt="How we work"
          className={styles.image}
        />
      </div>
      <div className={styles.textHalf}>
        <div className={styles.content}>
          <h2 className={styles.heading}>How we work</h2>
          <p className={styles.description}>
            We pride ourselves on our unique approach, our enthusiasm, our communication and our commitment. 
            From our team of world-class creative garden designers and landscape architects to our experienced 
            project managers and dedicated gardeners, we work together with one shared aim: to craft spaces 
            that inspire and delight, always breaking new ground.
          </p>
          <Link href="/how-we-work" className={styles.link}>
            More about how we work &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

