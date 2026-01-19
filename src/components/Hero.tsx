'use client'

import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const chars = el.querySelectorAll('span.char')
    chars.forEach((char, i) => {
      ;(char as HTMLElement).style.setProperty('--delay', `${i * 0.05}s`)
    })
  }, [])

  const headline = 'We work in harmony with nature and the seasons, creating landscapes that immerse, re-energise and bring new perspectives'
  const subHeadline = ''

  const wrapChars = (text: string) =>
    Array.from(text).map((c, idx) => (
      <span key={idx} className="char">{c === ' ' ? '\u00A0' : c}</span>
    ))

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <video
          src="/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>
      <div className={styles.content}>
        <div ref={textRef} className={styles.headline}>
          {wrapChars(headline)}
        </div>
      </div>
    </section>
  )
}

export default Hero
