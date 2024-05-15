import React from 'react'
import styles from './LeftExtras.module.css'
import Block1 from './Block1/Block1.jsx'
import Block2 from './Block2/Block2.jsx'
import Block3 from './Block3/Block3.jsx'
import Block4 from './Block4/Block4.jsx'
function LeftExtras() {
  return (
    <div className={styles.container}>
      <div className={styles.row}> 
      <div className={styles.block1}><Block1/></div>
      <div className={styles.block2}><Block2/></div>
      </div>
      <div className={styles.column}>
        <div className={styles.block3}><Block3/></div>
        <div className={styles.block4}><Block4/></div>
      </div>
     
    </div>
  )
}

export default LeftExtras