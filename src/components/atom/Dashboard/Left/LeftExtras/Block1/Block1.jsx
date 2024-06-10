import React from 'react'
import styles from './Block_A.module.css'
// import React from 'react';
// import { MdBook } from 'react-icons/md'; // Import the MdBook component
import { FaBold, FaBook } from "react-icons/fa";



function Block1() {
  return (
    <div className={styles.container}> 
    <div className={styles.icon}>
      < FaBook style={{  fontSize: 24, padding: '10px' , color:'#800001'}} />
    </div>
    <div className={styles.number}>
      <p style={{ fontSize: 24, padding: '10px' , color:'#800001', font:'FaBold'}}>275</p>

    </div>
    <div className={styles.text}>
<h4 className={styles.head}>Publications</h4>
    </div>
     
    </div>

  )
}

export default Block1