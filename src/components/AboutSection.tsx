'use client'

import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>The Pinnacle of Outdoor Cooking</h1>
          <div className={styles.text}>
            <p className={styles.intro}>
              Rancheros was born at the intersection of heritage, performance, and innovation. Our life 
              has always existed between two worlds: the Argentinian polo culture where fire, horsemanship, 
              and gathering define excellence; and the razor-sharp precision of high-performance motorsport 
              engineering.
            </p>
            <p>
              The precision in tacent disciplines and engineering and the nuances of live fire cooking 
              over the years as the moth survives have shaped our approach. Presenting one barbecue designed 
              for the 21st century.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

