import React from 'react'
import styles from './Block2.module.css'
import { FaRupeeSign } from "react-icons/fa";

function Block2() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      <FaRupeeSign style={{ color: 'black', fontSize: 24, padding: '10px' }} />
    </div>
    <div className={styles.number}>
      <p style={{ color: 'black', fontSize: 24, padding: '10px' }}>48M</p>

    </div>
    <div className={styles.text}>
      <h4 className={styles.head}>Fundings</h4>

    </div>
    </div>
  )
}

export default Block2