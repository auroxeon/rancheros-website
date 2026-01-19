'use client'

import styles from './GardenDesignTextSection.module.css'

interface GardenDesignTextSectionProps {
  heading: string
  paragraphs: string[]
}

export default function GardenDesignTextSection({
  heading,
  paragraphs
}: GardenDesignTextSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.textContent}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.text}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

