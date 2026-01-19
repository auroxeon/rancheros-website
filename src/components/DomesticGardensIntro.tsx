'use client'

import styles from './DomesticGardensIntro.module.css'

export default function DomesticGardensIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Position the Rancheros grill as the focal point of extraordinary outdoor spaces—not just 
            functional, but sculptural. Our parrillas become architectural statements, seamlessly 
            integrating with your vision for open-air living pavilions, fire pit lounges, and custom enclosures.
          </p>
        </div>
      </div>
      <div className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            We collaborate with architects to create integrated architectural kitchens with chimneys, overhead 
            canopies, and textured natural materials—corten steel, volcanic stone, polished concrete—that 
            elevate the barbecue into art and architecture.
          </p>
        </div>
      </div>
    </section>
  )
}

