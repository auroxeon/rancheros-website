'use client'

import styles from './DomesticGardensIntro.module.css'

export default function DomesticGardensIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Our dynamic and award-winning gardening team specialises in the design and build of 
            groundbreaking domestic gardens for residential and private homes. Bring your vision 
            to life with Rancheros.
          </p>
        </div>
      </div>
      <div className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Rancheros creates outside spaces which work perfectly for you: which enhance your lifestyle, 
            which provide harmony between house and garden, which present focal points from your house 
            and frame views from the wider land or cityscape. To ensure that your garden continues to 
            evolve and thrive we offer a garden maintenance service fulfilled by trained horticulturalists.
          </p>
        </div>
      </div>
    </section>
  )
}

