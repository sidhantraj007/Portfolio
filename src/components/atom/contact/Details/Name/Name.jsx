import React from 'react'
import styles from './Name.module.css'

const Name = () => {
  return (
    <div className={styles.container}>
      <div className={styles.names}>
        <h3 className={styles.name}>Dr. Raghvendra Kumar Chaudhary</h3>
        <p>Associate Professor</p>
      </div>
    </div>
  )
}

export default Name