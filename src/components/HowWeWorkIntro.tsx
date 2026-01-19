'use client'

import styles from './HowWeWorkIntro.module.css'

export default function HowWeWorkIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Rancheros offers a fully integrated, bespoke garden service for all manner of spaces, 
          both domestic and commercial. We cover every stage of the development process from design, 
          to installation, through to maintenance. Our highly skilled and experienced teams deliver 
          endless pleasure, both practically and aesthetically.
        </p>
        <p className={styles.text}>
          Our three departments Garden design, Project management and garden build and Garden 
          maintenance work closely together but also independently.
        </p>
      </div>
    </section>
  )
}

