'use client'

import styles from './GardenDesignIntro.module.css'

export default function GardenDesignIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Our award-winning garden design team creates bespoke outdoor spaces that seamlessly 
            blend with your home and lifestyle. From initial concept to final installation, we 
            bring your vision to life with Rancheros.
          </p>
        </div>
      </div>
      <div className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Every garden design project begins with understanding your needs, your space, and 
            your aspirations. We combine creative vision with practical expertise to deliver 
            gardens that are both beautiful and functional, designed to evolve and thrive for 
            years to come.
          </p>
        </div>
      </div>
    </section>
  )
}

