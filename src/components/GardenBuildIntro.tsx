'use client'

import styles from './GardenBuildIntro.module.css'

export default function GardenBuildIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Rancheros are seasoned garden project managers and garden builders having helped plan 
          and construct some of the finest gardens in London and the South East. Turn your garden 
          dream into reality with our garden builders.
        </p>
        <p className={styles.text}>
          Our garden construction teams are trained to the highest level and have the skills to 
          build and manage gardens of all shapes and sizes. The build stage is when the magic 
          starts to unfold and your dream starts to become a reality.
        </p>
        <p className={styles.text}>
          See our garden contractors at work below where our landscapers construct steps in this 
          stately garden.
        </p>
      </div>
    </section>
  )
}

