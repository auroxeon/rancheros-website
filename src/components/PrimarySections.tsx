'use client'

import styles from './ContentSections.module.css'

const sections = [
  {
    id: 1,
    image: '/images/Stapleton-Hall-Road-12.jpg',
    imageAlt: 'Luxury garden design',
    text: 'At Luxury Gardens, we specialise in award-winning luxury garden design, creating breathtaking outdoor spaces for over twenty years. Working across London, Surrey, Sussex, and Kent, we design and build everything from stunning, entertaining gardens to Mediterranean courtyards, Victorian hideaways, and sprawling country gardens.',
    imagePosition: 'right' as const
  },
  {
    id: 2,
    image: '/images/Image-1---View-1.jpg',
    imageAlt: 'Contemporary garden design',
    text: 'Our award-winning designers thoughtfully craft every garden, blending timeless beauty with meticulous attention to detail. Each project is unique, reflecting the individual style and needs of our clients while maintaining the highest standards of quality and craftsmanship.',
    imagePosition: 'left' as const
  },
  {
    id: 3,
    image: '/images/3e2d76_8ced13bb3e534ca5b6caf20b72a07e43_mv2.jpg',
    imageAlt: 'Mediterranean garden',
    text: 'From the initial garden design ideas to the complete landscaping and build process, we provide comprehensive, hands-on support at every step, ensuring the vision is brought to life with care and dedication. Our bespoke luxury garden design services focus on creating unique, individual outdoor spaces.',
    imagePosition: 'right' as const
  }
]

export default function PrimarySections() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className={styles.contentSection}>
          <div
            className={`${styles.sectionContainer} ${
              section.imagePosition === 'left' ? styles.imageLeft : styles.imageRight
            }`}
          >
            {section.imagePosition === 'left' && (
              <div className={styles.imageHalf}>
                <img src={section.image} alt={section.imageAlt} className={styles.image} />
              </div>
            )}
            <div className={styles.textHalf}>
              <p className={styles.text}>{section.text}</p>
            </div>
            {section.imagePosition === 'right' && (
              <div className={styles.imageHalf}>
                <img src={section.image} alt={section.imageAlt} className={styles.image} />
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  )
}


