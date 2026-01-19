'use client'

import Link from 'next/link'
import styles from './GardenBuildCTA.module.css'

export default function GardenBuildCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Planning a Project
        </p>
        <p className={styles.contactText}>
          To discuss a project please contact installation@rancheros.co.uk
        </p>
      </div>
    </section>
  )
}

