import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const chars = el.querySelectorAll('span.char');
    chars.forEach((char, i) => {
      char.style.setProperty('--delay', `${i * 0.05}s`);
    });
  }, []);

  const headline = 'award-winning garden design';
  const subHeadline = 'luxury gardens';

  const wrapChars = (text) =>
    Array.from(text).map((c, idx) => (
      <span key={idx} className="char">{c === ' ' ? '\u00A0' : c}</span>
    ));

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <img src="/images/hero-garden-wide.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <div ref={textRef} className={styles.headline}>
          {wrapChars(headline)}
        </div>
        <div className={styles.subHeadline}>
          {wrapChars(subHeadline)}
        </div>
      </div>
    </section>
  );
};

export default Hero;
