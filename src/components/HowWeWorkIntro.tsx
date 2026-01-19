'use client'

import styles from './HowWeWorkIntro.module.css'

export default function HowWeWorkIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Every Rancheros grill begins with conversation. We work closely with architects, designers, 
          and discerning homeowners to understand your vision, space, and culinary aspirations.
        </p>
        <p className={styles.text}>
          Our process combines precision engineering with artisan craftsmanship. From initial consultation 
          through design, fabrication, and white-glove installation, we ensure every detail reflects your 
          exacting standards.
        </p>
      </div>
    </section>
  )
}

