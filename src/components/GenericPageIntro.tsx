'use client'

import styles from './HowWeWorkIntro.module.css'

interface GenericPageIntroProps {
  text?: string
}

export default function GenericPageIntro({ text }: GenericPageIntroProps) {
  const defaultText = "Every Rancheros grill begins with conversation. We work closely with architects, designers, and discerning homeowners to understand your vision, space, and culinary aspirations."
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          {text || defaultText}
        </p>
      </div>
    </section>
  )
}

