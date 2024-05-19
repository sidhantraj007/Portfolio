import React from 'react'
import styles from './Block3.module.css'
import { FaGraduationCap } from "react-icons/fa";


function Block3() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      <FaGraduationCap style={{ color: 'black', fontSize: 30, padding: '10px' }} />
    </div>
    <div className={styles.number}>
    <p style={{ color: 'black', fontSize:28, padding: '10px' }}>11</p>

    </div>
    <div className={styles.text}>
      <h4 className={styles.head}>PhD Guided</h4>

    </div>
    </div>
  )
}

export default Block3