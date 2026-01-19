'use client'

import styles from './MeetTheTeamIntro.module.css'

export default function MeetTheTeamIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            Our dynamic team brings together expertise from two worlds: the Argentinian polo culture 
            where fire, horsemanship, and gathering define excellence; and the razor-sharp precision 
            of high-performance motorsport engineering.
          </p>
        </div>
      </div>
      <div className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.text}>
            From our skilled engineers and craftsmen to our expert project managers and installation 
            specialists, every member of the Rancheros team is dedicated to delivering uncompromising 
            quality and exceptional service. We work collaboratively to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  )
}

