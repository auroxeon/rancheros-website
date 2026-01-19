'use client'

import styles from './MeetTheTeamIntro.module.css'

export default function MeetTheTeamIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Our dynamic and award-winning team brings together expertise in garden design, 
            construction, and maintenance. With years of experience creating exceptional outdoor 
            spaces, we are passionate about delivering outstanding results for every client.
          </p>
        </div>
      </div>
      <div className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            From our skilled designers and project managers to our expert construction teams and 
            horticulturalists, every member of the Rancheros team is dedicated to excellence. 
            We work collaboratively to bring your garden vision to life.
          </p>
        </div>
      </div>
    </section>
  )
}

