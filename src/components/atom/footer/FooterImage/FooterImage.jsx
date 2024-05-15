import React from 'react'
import footer from '../../../../assets/footer.jpg'
import styles from './FooterImage.module.css'

export default function FooterImage() {
  return (
    <div className={styles.container}>
      <img src={footer} alt='Footer' className={styles.imge}/>
    </div>
  )
}
