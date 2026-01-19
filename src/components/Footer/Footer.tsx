import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.title}>Rancheros Grills</h4>
            <p className={styles.text}>
              Pantiles Chambers<br/>
              85 High Street, Tunbridge Wells<br/>
              Kent, TN1 1XP<br/>
              <a className={styles.link} href="tel:0189248923">01892 489 923</a><br/>
              <a className={styles.link} href="mailto:design@luxurygardendesign.co.uk">design@luxurygardendesign.co.uk</a>
            </p>
          </div>
          <div className={styles.col}>
            <h4 className={styles.title}>Explore</h4>
            <ul className={styles.list}>
              <li><a className={styles.link} href="/">Home</a></li>
              <li><a className={styles.link} href="/about-us">About Us</a></li>
              <li><a className={styles.link} href="/garden-portfolio">Portfolio</a></li>
              <li><a className={styles.link} href="/contact">Contact Us</a></li>
              <li><a className={styles.link} href="/news">News</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.title}>Follow Us</h4>
            <ul className={styles.list}>
              <li><a className={styles.link} href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
              <li><a className={styles.link} href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
              <li><a className={styles.link} href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li>
              <li><a className={styles.link} href="https://pinterest.com" target="_blank" rel="noopener">Pinterest</a></li>
              <li><a className={styles.link} href="https://houzz.com" target="_blank" rel="noopener">Houzz</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.title}>Legal</h4>
            <ul className={styles.list}>
              <li><a className={styles.link} href="/privacy-policy">Privacy Policy</a></li>
              <li><a className={styles.link} href="/accessibility-statement">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Rancheros Grills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
