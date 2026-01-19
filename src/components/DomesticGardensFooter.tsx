'use client'

import styles from './DomesticGardensFooter.module.css'

export default function DomesticGardensFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.title}>ABOUT US</h4>
            <p className={styles.text}>
              Award-winning garden design, build and maintenance. We will bring experience, artistry 
              and discipline to your projects across London and the UK, from country gardens and city 
              refuges to ground-breaking commercial spaces.
            </p>
            <div className={styles.links}>
              <a href="/privacy-policy" className={styles.link}>Privacy policy</a>
              <span className={styles.separator}>|</span>
              <a href="/cookie-policy" className={styles.link}>Cookie policy</a>
            </div>
          </div>
          <div className={styles.col}>
            <h4 className={styles.title}>FOLLOW US</h4>
            <div className={styles.socialGrid}>
              <div className={styles.socialImage}>
                <img src="/images/20251019_112543.jpg" alt="Social post" />
              </div>
              <div className={styles.socialImage}>
                <img src="/images/Stapleton-Hall-Road-12.jpg" alt="Social post" />
              </div>
              <div className={styles.socialImage}>
                <img src="/images/Image-1---View-1.jpg" alt="Social post" />
              </div>
              <div className={styles.socialImage}>
                <img src="/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg" alt="Social post" />
              </div>
              <div className={styles.socialImage}>
                <img src="/images/20251019_120008.png" alt="Social post" />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <h4 className={styles.title}>GET IN TOUCH</h4>
            <p className={styles.text}>
              <a href="tel:+442089693399" className={styles.link}>+44 (0)20 8969 3399</a>
            </p>
            <p className={styles.text}>
              <a href="mailto:info@rancheros.co.uk" className={styles.link}>Email us</a>
            </p>
            <p className={styles.text}>
              Unit 1-2, 69 St Marks Road,<br />
              London W10 6JG
            </p>
            <p className={styles.text}>
              <a href="/newsletter" className={styles.link}>Sign up for the latest news</a>
            </p>
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.socialIcon}>
                in
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className={styles.socialIcon}>
                o
              </a>
            </div>
            <div className={styles.awards}>
              <div className={styles.award}>HOUSE & GARDEN 50</div>
              <div className={styles.award}>COUNTRY LIFE THE TOP 100</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

