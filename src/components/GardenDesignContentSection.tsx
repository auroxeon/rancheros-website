'use client'

import styles from './GardenDesignContentSection.module.css'

interface GardenDesignContentSectionProps {
  heading: string
  text: string
  images: string[]
  imagePosition?: 'left' | 'right'
}

export default function GardenDesignContentSection({
  heading,
  text,
  images,
  imagePosition = 'left'
}: GardenDesignContentSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.imageGrid}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img src={image} alt={`${heading} ${index + 1}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

