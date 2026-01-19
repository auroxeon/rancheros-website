'use client'

import styles from './GardenBuildSection1.module.css'

export default function GardenBuildSection1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.text}>
            Every Rancheros grill is custom-built to your specifications, whether for residential 
            outdoor kitchens or commercial hospitality spaces. Our project managers oversee every 
            aspect of installation, from site preparation to final commissioning.
          </p>
          <p className={styles.text}>
            Our experienced team handles everything from architectural integration and custom fabrication 
            to smart home connectivity and performance testing. We ensure your grill installation is 
            seamless, precise, and exceeds expectations.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/Image-1---View-1.jpg" 
            alt="Garden construction"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

