'use client'

import styles from './HowWeWorkSection.module.css'

interface HowWeWorkSectionProps {
  heading: string
  description: string
  image: string
  imagePosition: 'left' | 'right'
}

export default function HowWeWorkSection({
  heading,
  description,
  image,
  imagePosition
}: HowWeWorkSectionProps) {
  return (
    <section className={styles.section}>
      {imagePosition === 'left' ? (
        <>
          <div className={styles.imageHalf}>
            <img src={image} alt={heading} className={styles.image} />
          </div>
          <div className={styles.textHalf}>
            <div className={styles.content}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.textHalf}>
            <div className={styles.content}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
          <div className={styles.imageHalf}>
            <img src={image} alt={heading} className={styles.image} />
          </div>
        </>
      )}
    </section>
  )
}
