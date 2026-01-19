'use client'

import styles from './GardenBuildSection2.module.css'

export default function GardenBuildSection2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.text}>
            Our fabrication and installation teams are trained to the highest standards, combining 
            motorsport-grade engineering precision with artisan craftsmanship. The build stage is when 
            your vision transforms into a functional masterpiece.
          </p>
          <p className={styles.text}>
            From firebrick-lined fireboxes to motorized V-grate systems, every component is precision-engineered 
            and hand-assembled. Our white-glove installation service ensures your grill is perfectly integrated 
            into your outdoor space, ready for years of exceptional cooking.
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

