'use client'

import styles from './GardenBuildSection1.module.css'

export default function GardenBuildSection1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.text}>
            Rancheros build gardens for domestic clients in restricted London homes to larger 
            luxury gardens in the counties as well as manage commercial projects for various 
            business types.
          </p>
          <p className={styles.text}>
            Our head of construction and project managers oversee the day-to-day management of 
            each job and are experienced in all aspects of constructing a garden from trellising 
            to steps, paving to water features, pergolas to fire pits.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/Image-1---View-1.jpg" 
            alt="Garden construction"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

