'use client'

import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Award winning garden design</h1>
          <div className={styles.text}>
            <p className={styles.intro}>
              <strong>Rancheros</strong> is an award-winning garden design and landscaping company 
              which designs, builds and maintains luxury gardens across London and the UK. A highly 
              skilled team of gardeners with a reputation for bringing passion, creativity and 
              innovation to every project, always delivering to an exacting standard.
            </p>
            <p>
              From country gardens, city homes, to ground-breaking commercial spaces, whatever the 
              scale, we collaborate with our clients, remain connected to nature and the seasons, 
              then design gardens that inspire and are a source of great joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

