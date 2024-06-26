import React from 'react'
import styles from './JournalText.module.css'  
import items from '../../../../../contents/Publications/Journals/Journals'

const Journals = () => {

  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <h1 className={styles.jr}>Journals</h1>
        </div>
        <div className={styles.journals}>
        <ol className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.l} key={index}>{item}</li>
        ))}
      </ol>

        </div>
   
    </div>
  )
}

export default Journals