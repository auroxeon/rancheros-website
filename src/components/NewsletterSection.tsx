'use client'

import { useState } from 'react'
import styles from './NewsletterSection.module.css'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', { email, firstName, lastName })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>SIGN UP TO OUR NEWSLETTER</h2>
          <p className={styles.subtitle}>Stay up-to-date with what we do …</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

