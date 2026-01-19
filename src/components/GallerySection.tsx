'use client'

import styles from './GallerySection.module.css'

export default function GallerySection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&q=80',
      alt: 'Luxury swimming pool in a garden with a modern white rendered house'
    },
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&q=80',
      alt: 'Contemporary garden design'
    },
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&q=80',
      alt: 'Mediterranean courtyard garden'
    },
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&q=80',
      alt: 'Victorian garden design'
    }
  ]

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Explore our Award-Winning Gardens</h2>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <button className={styles.viewButton}>View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

