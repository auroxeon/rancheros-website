'use client'

import styles from './ContentSections.module.css'

export default function ContentSections() {
  const sections = [
    {
      id: 1,
      image: '/images/Stapleton-Hall-Road-12.jpg',
      imageAlt: 'Luxury garden design',
      text: 'At Luxury Gardens, we specialise in award-winning luxury garden design, creating breathtaking outdoor spaces for over twenty years. Working across London, Surrey, Sussex, and Kent, we design and build everything from stunning, entertaining gardens to Mediterranean courtyards, Victorian hideaways, and sprawling country gardens.',
      imagePosition: 'right' as const
    },
    {
      id: 2,
      image: '/images/Image-1---View-1.jpg',
      imageAlt: 'Contemporary garden design',
      text: 'Our award-winning designers thoughtfully craft every garden, blending timeless beauty with meticulous attention to detail. Each project is unique, reflecting the individual style and needs of our clients while maintaining the highest standards of quality and craftsmanship.',
      imagePosition: 'left' as const
    },
    {
      id: 3,
      image: '/images/3e2d76_8ced13bb3e534ca5b6caf20b72a07e43_mv2.jpg',
      imageAlt: 'Mediterranean garden',
      text: 'From the initial garden design ideas to the complete landscaping and build process, we provide comprehensive, hands-on support at every step, ensuring the vision is brought to life with care and dedication. Our bespoke luxury garden design services focus on creating unique, individual outdoor spaces.',
      imagePosition: 'right' as const
    },
    {
      id: 4,
      image: '/images/3e2d76_b152c3383508494eaf6001cd4a427182_mv2.jpg',
      imageAlt: 'Victorian garden design',
      text: 'We are proud to have been awarded the Best of Houzz Winner award for 2024 and 2025, which recognises our ongoing commitment to excellence, quality, and client satisfaction. Our portfolio showcases a diverse range of styles and approaches to luxury garden design.',
      imagePosition: 'left' as const
    },
    {
      id: 5,
      image: '/images/11062b_c2780c3293f848ae9991ed650c7fe2da_mv2.png',
      imageAlt: 'Country garden design',
      text: 'Whether you are looking for a contemporary outdoor living space, a traditional English garden, or something entirely unique, our team of experienced designers and landscapers will work with you to create the perfect outdoor environment for your home.',
      imagePosition: 'right' as const
    }
  ]

  return (
    <>
      {/* Content Sections 1-5 */}
      {sections.map((section) => (
        <section key={section.id} className={styles.contentSection}>
          <div className={`${styles.sectionContainer} ${section.imagePosition === 'left' ? styles.imageLeft : styles.imageRight}`}>
            {section.imagePosition === 'left' && (
              <div className={styles.imageHalf}>
                <img src={section.image} alt={section.imageAlt} className={styles.image} />
              </div>
            )}
            <div className={styles.textHalf}>
              <p className={styles.text}>{section.text}</p>
            </div>
            {section.imagePosition === 'right' && (
              <div className={styles.imageHalf}>
                <img src={section.image} alt={section.imageAlt} className={styles.image} />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Contact Form Section */}
      <section className={`${styles.contentSection} ${styles.contactSection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.textHalf}>
            <h2 className={styles.contactTitle}>Get In Touch</h2>
            <p className={styles.text}>
              Ready to transform your outdoor space? Contact us today to discuss your luxury garden design project. Our team is here to help bring your vision to life with expert design and exceptional craftsmanship.
            </p>
            <p className={styles.text}>
              We work across London, Surrey, Sussex, and Kent, creating beautiful outdoor spaces that enhance your lifestyle and add value to your property.
            </p>
          </div>
          <div className={styles.formHalf}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" name="name" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <input type="tel" id="phone" name="phone" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" rows={5} className={styles.textarea} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Luxury Gardens</h3>
              <p className={styles.footerText}>
                Award-winning luxury garden design across London, Surrey, Sussex, and Kent.
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubtitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="/" className={styles.footerLink}>Home</a></li>
                <li><a href="/garden-design" className={styles.footerLink}>Grills Design</a></li>
                <li><a href="/about-us" className={styles.footerLink}>About Us</a></li>
                <li><a href="/contact" className={styles.footerLink}>Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubtitle}>Portfolio</h4>
              <ul className={styles.footerLinks}>
                <li><a href="/mediterranean-garden" className={styles.footerLink}>Mediterranean Garden</a></li>
                <li><a href="/organic-garden-design" className={styles.footerLink}>Organic Garden</a></li>
                <li><a href="/kent-garden-design" className={styles.footerLink}>Kent Entertaining Garden</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubtitle}>Contact</h4>
              <p className={styles.footerText}>
                Phone: 01892 489 423<br />
                Email: info@luxurygardens.co.uk
              </p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} Luxury Gardens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

