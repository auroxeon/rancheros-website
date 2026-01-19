'use client'

import styles from './GardenBuildSection2.module.css'

export default function GardenBuildSection2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.text}>
            Our garden construction teams are trained to the highest level and have the skills to 
            build and manage gardens of all shapes and sizes. The build stage is when the magic 
            starts to unfold and your dream starts to become a reality.
          </p>
          <p className={styles.text}>
            See our garden contractors at work below where our landscapers construct steps in this 
            stately garden. Our experienced team brings years of expertise to every project, ensuring 
            quality craftsmanship and attention to detail.
          </p>
          <p className={styles.text}>
            We work closely with garden designers to bring their visions to life, transforming 
            concepts into beautiful, functional outdoor spaces that enhance your property and lifestyle.
          </p>
          <p className={styles.text}>
            From initial site preparation through to final landscaping touches, our project managers 
            coordinate every aspect of the build process, ensuring smooth execution and timely completion.
          </p>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <img 
              src="/images/Image-1---View-1.jpg" 
              alt="Garden project 1"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img 
              src="/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg" 
              alt="Garden project 2"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

