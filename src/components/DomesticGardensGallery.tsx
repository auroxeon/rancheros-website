'use client'

import styles from './DomesticGardensGallery.module.css'

interface GalleryItem {
  id: number
  image: string
  caption: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: '/images/20251019_112543.jpg', caption: 'KENSINGTON WOODLAND GARDEN' },
  { id: 2, image: '/images/Stapleton-Hall-Road-12.jpg', caption: 'HOLLAND PARK GARDEN' },
  { id: 3, image: '/images/Image-1---View-1.jpg', caption: 'NOTTING HILL TERRACED GARDEN' },
  { id: 4, image: '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg', caption: 'KENSINGTON FAMILY GARDEN' },
  { id: 5, image: '/images/20251019_120008.png', caption: 'WHITEHALL ENTERTAINING GARDEN' },
  { id: 6, image: '/images/20251019_112543.jpg', caption: 'CHELSEA COURTYARD GARDEN' },
  { id: 7, image: '/images/Stapleton-Hall-Road-12.jpg', caption: 'CHESHIRE ESTATE AND GARDENS' },
  { id: 8, image: '/images/Image-1---View-1.jpg', caption: 'NOTTING HILL FAMILY GARDEN' },
  { id: 9, image: '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg', caption: 'DEVON FAMILY HOME' },
  { id: 10, image: '/images/20251019_120008.png', caption: 'MAYFAIR GARDEN' },
  { id: 11, image: '/images/20251019_112543.jpg', caption: 'THE BRYANSTON, HYDE PARK' },
  { id: 12, image: '/images/Stapleton-Hall-Road-12.jpg', caption: 'MULTI-LAYERED KENSINGTON GARDEN' },
  { id: 13, image: '/images/Image-1---View-1.jpg', caption: 'WESTMINSTER PENTHOUSE' },
  { id: 14, image: '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg', caption: 'KENSINGTON GARDEN' },
  { id: 15, image: '/images/20251019_120008.png', caption: 'OXFORDSHIRE GARDEN' },
  { id: 16, image: '/images/20251019_112543.jpg', caption: 'MAYFAIR PENTHOUSE' },
  { id: 17, image: '/images/Stapleton-Hall-Road-12.jpg', caption: 'GLOUCESTERSHIRE MANOR HOUSE' },
  { id: 18, image: '/images/Image-1---View-1.jpg', caption: 'SOUTH KENSINGTON GARDEN' },
  { id: 19, image: '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg', caption: 'MARYLEBONE PENTHOUSE' },
  { id: 20, image: '/images/20251019_120008.png', caption: 'WIMBLEDON GARDEN' },
]

export default function DomesticGardensGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className={styles.image}
                />
              </div>
              <p className={styles.caption}>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

