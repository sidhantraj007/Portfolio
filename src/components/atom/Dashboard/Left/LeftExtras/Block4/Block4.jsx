import React from 'react'
import styles from './Block4.module.css'
// import { MdBook } from 'react-icons/md'; // Import the MdBook component
import { FaBook } from "react-icons/fa";



function Block4() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      <FaBook style={{ color: 'black', fontSize: 24, padding: '10px' , color:'#800001'}}/>
    </div>
    <div className={styles.number}>
      <p style={{ color: 'black', fontSize: 24, padding: '10px', color:'#800001' }}>3500</p>

    </div>
    <div className={styles.text}>
      <h4 className={styles.head}>Citations</h4>

    </div>
    </div>
  )
}

export default Block4