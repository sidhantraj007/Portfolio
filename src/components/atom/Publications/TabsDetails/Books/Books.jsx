import React from 'react'
import styles from './Books.module.css'
import books from '../../../../../contents/Publications/Books/journal'
import image from '../../../../../assets/image3.webp'


const Books = () => {
  return (
    <div className={styles.container}>
       <div className={styles.books}>
       <div className={styles.head}>
          <h1 className={styles.book}>Book</h1>
        </div>
       <div className={styles.desc}>
       <div className={styles.description}>
        <p className={styles.pi}>Circularly Polarized Dielectric Resonator Antennas</p>
        <p className={styles.p}>ISBN: 9781630818173, Artech House, London, United Kingdom, 2021.</p>
       
       
       </div>
       <div >
         <img className={styles.imagee} src={image} alt='book'/>

       </div>
       </div>

      </div> 
      <div className={styles.journals}>
        <div className={styles.head2}>
          <h1 className={styles.sj}>Selected Journals</h1>
        </div>
        <div className={styles.details}>
        <ul className={styles.list}>
        {books.map((item, index) => (
          <li className={styles.l} key={index}>{item}</li>
        ))}
      </ul>

        </div>

      </div>

    </div>
  )
}

export default Books