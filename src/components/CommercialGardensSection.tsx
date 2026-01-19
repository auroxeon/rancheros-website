'use client'

import Link from 'next/link'
import styles from './CommercialGardensSection.module.css'

export default function CommercialGardensSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Commercial Gardens</h2>
          <p className={styles.description}>
            A multi-disciplinary service, creating distinctive, individual spaces that will 
            enhance and promote your business.
          </p>
          <Link href="/commercial-gardens" className={styles.link}>
            View our commercial gardens portfolio &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

