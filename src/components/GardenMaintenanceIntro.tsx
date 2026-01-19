'use client'

import styles from './GardenMaintenanceIntro.module.css'

export default function GardenMaintenanceIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Rancheros&apos; garden maintenance team nurtures an eclectic portfolio of luxurious gardens 
          throughout London. From rooftop terraces, family gardens and sleek courtyards, to exclusive 
          restaurants, hotels and offices, our expertly trained team of horticulturalists will ensure 
          your gardens are looking their best all year round.
        </p>
      </div>
    </section>
  )
}

