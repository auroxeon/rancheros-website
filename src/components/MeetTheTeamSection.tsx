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
            Our team of world-class garden designers, landscape architects, and dedicated gardeners 
            bring passion, creativity, and innovation to every project. We work together with one 
            shared aim: to craft spaces that inspire and delight.
          </p>
          <Link href="/meet-the-team" className={styles.link}>
            Meet our team &gt;
          </Link>
        </div>
      </div>
      <div className={styles.imageHalf}>
        <img 
          src="/images/meet-the-team.jpg" 
          alt="Meet the team"
          className={styles.image}
        />
      </div>
    </section>
  )
}

