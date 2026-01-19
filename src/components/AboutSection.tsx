'use client'

import Link from 'next/link'
// Using regular img tag for external images
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&h=1200&q=80"
              alt="Classical, contemporary garden with a Tuscan olive tree"
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.contentColumn}>
          <h1 className={styles.heading}>
            Timeless Luxury Garden Design. Outdoor Living that Elevates the Everyday
          </h1>
          
          <div className={styles.text}>
            <p>
              At Luxury Gardens, we specialise in award-winning luxury garden design, creating 
              breathtaking outdoor spaces for over twenty years. Working across London, Surrey, 
              Sussex, and Kent, we design and build everything from stunning, entertaining gardens 
              to Mediterranean courtyards, Victorian hideaways, and sprawling country gardens.
            </p>
            
            <p>
              Our award-winning designers thoughtfully craft every garden, blending timeless beauty 
              with meticulous attention to detail. Explore some of our signature gardens in our{' '}
              <Link href="/garden-portfolio" className={styles.link}>
                Garden Portfolio
              </Link>.
            </p>
            
            <p>
              From the initial garden design ideas to the complete landscaping and build process, 
              we provide comprehensive, hands-on support at every step, ensuring the vision is 
              brought to life with care and dedication. Our{' '}
              <Link href="/garden-design" className={styles.link}>
                bespoke luxury garden design services
              </Link>{' '}
              focus on creating unique, individual outdoor spaces that blend function, beauty, and 
              timeless style. Discover more about our philosophy and team on our{' '}
              <Link href="/about-us" className={styles.link}>
                About Us
              </Link>{' '}
              page.
            </p>
            
            <p>
              We are also proud to have been awarded the Best of Houzz Winner award for 2024 and 
              2025, which recognises our ongoing commitment to excellence, quality, and client 
              satisfaction.{' '}
              <Link href="/contact" className={styles.link}>
                Ready to transform your garden?
              </Link>
            </p>
          </div>
          
          <a href="tel:01892489923" className={styles.phoneButton}>
            <svg width="20" height="20" viewBox="0 0 200 200" fill="currentColor">
              <path d="M151.569 118.788a80.618 80.618 0 0 1-17.694-4.429c-6.259-2.364-13.376-.839-18.149 3.903l-6.221 6.252A102.071 102.071 0 0 1 75.47 90.318l6.23-6.26c4.706-4.783 6.225-11.942 3.873-18.23a81.74 81.74 0 0 1-4.414-17.823c-1.196-8.502-8.498-14.864-16.985-14.864l-.168.001H44.173c-.509 0-1.024.024-1.529.07-4.572.415-8.711 2.595-11.653 6.139-2.943 3.546-4.337 8.031-3.917 12.694 2.225 21.051 9.455 41.57 20.891 59.308 10.391 16.434 24.527 30.639 40.848 41.06 17.597 11.468 37.919 18.733 58.844 21.017.515.046 1.036.069 1.553.069h.06c9.478-.039 17.159-7.823 17.121-17.337v-19.879c.191-8.752-6.159-16.267-14.822-17.495z"/>
            </svg>
            01892 489 923
          </a>
        </div>
      </div>
    </section>
  )
}

