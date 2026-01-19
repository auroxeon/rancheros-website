'use client'

import styles from './MeetTheTeamGallery.module.css'

interface GalleryItem {
  id: number
  image: string
  caption: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: '/images/20251019_112543.jpg', caption: 'TEAM MEMBER 1' },
  { id: 2, image: '/images/Stapleton-Hall-Road-12.jpg', caption: 'TEAM MEMBER 2' },
  { id: 3, image: '/images/Image-1---View-1.jpg', caption: 'TEAM MEMBER 3' },
  { id: 4, image: '/images/3e2d76_f35fb02c58ea451f850da758a19e66a8f000.jpg', caption: 'TEAM MEMBER 4' },
  { id: 5, image: '/images/20251019_120008.png', caption: 'TEAM MEMBER 5' },
  { id: 6, image: '/images/3e2d76_b152c3383508494eaf6001cd4a427182_mv2.jpg', caption: 'TEAM MEMBER 6' },
  { id: 7, image: '/images/3e2d76_8ced13bb3e534ca5b6caf20b72a07e43_mv2.jpg', caption: 'TEAM MEMBER 7' },
  { id: 8, image: '/images/4751-0-new-1536x1536.jpg', caption: 'TEAM MEMBER 8' },
  { id: 9, image: '/images/4751-1-new-1536x1536.jpg', caption: 'TEAM MEMBER 9' },
  { id: 10, image: '/images/4751-2-new-1536x1536.jpg', caption: 'TEAM MEMBER 10' },
  { id: 11, image: '/images/5489-1-new-1536x1536.jpg.webp', caption: 'TEAM MEMBER 11' },
  { id: 12, image: '/images/5489-2-new-1536x1536.jpg.webp', caption: 'TEAM MEMBER 12' },
  { id: 13, image: '/images/5489-3-new-1536x1536.jpg.webp', caption: 'TEAM MEMBER 13' },
  { id: 14, image: '/images/11062b_79e4793290f44db59b5c826bb4c78d2b_mv2.png', caption: 'TEAM MEMBER 14' },
  { id: 15, image: '/images/11062b_a193068045064f4fa21b07cd12dae779_mv2.png', caption: 'TEAM MEMBER 15' },
  { id: 16, image: '/images/11062b_c2780c3293f848ae9991ed650c7fe2da_mv2.png', caption: 'TEAM MEMBER 16' },
  { id: 17, image: '/images/11062b_cef3b719166a4815b446d4dcfcb6120d_mv2.png', caption: 'TEAM MEMBER 17' },
  { id: 18, image: '/images/11062b_ef6a6ac194704911951645990055c2ce_mv2.png', caption: 'TEAM MEMBER 18' },
  { id: 19, image: '/images/11062b_fe985b889c144b348eefc7bbc67018b4_mv2.png', caption: 'TEAM MEMBER 19' },
  { id: 20, image: '/images/DSCF7069.png', caption: 'TEAM MEMBER 20' },
]

export default function MeetTheTeamGallery() {
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

