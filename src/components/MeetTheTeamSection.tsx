'use client'

import Link from 'next/link'
import styles from './MeetTheTeamSection.module.css'

export default function MeetTheTeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.textHalf}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Meet the Team</h2>
          <p className={styles.description}>
            Our dynamic team brings together expertise from two worlds: the Argentinian polo culture 
            where fire, horsemanship, and gathering define excellence; and the razor-sharp precision 
            of high-performance motorsport engineering.
          </p>
          <Link href="/meet-the-team" className={styles.link}>
            Meet our team &gt;
          </Link>
        </div>
      </div>
      <div className={styles.imageHalf}>
        <img 
          src="/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg" 
          alt="Meet the team"
          className={styles.image}
        />
      </div>
    </section>
  )
}

