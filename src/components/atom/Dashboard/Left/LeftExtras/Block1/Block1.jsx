import React from 'react'
import styles from './Block_A.module.css'
// import React from 'react';
// import { MdBook } from 'react-icons/md'; // Import the MdBook component
import { FaBook } from "react-icons/fa";



function Block1() {
  return (
    <div className={styles.container}> 
    <div className={styles.icon}>
      < FaBook style={{ color: 'black', fontSize: 24, padding: '10px' }} />
    </div>
    <div className={styles.number}>
      <p style={{ color: 'black', fontSize: 24, padding: '10px' }}>275</p>

    </div>
    <div className={styles.text}>
<h4 className={styles.head}>Publications</h4>
    </div>
     
    </div>

  )
}

export default Block1