import React from 'react'
import styles from './Dashboard_left.module.css'
import LeftImage from '../../atom/Dashboard/Left/LeftImage/LeftImage.jsx'
import LeftDescription from '../../atom/Dashboard/Left/LeftDescription/LeftDescription.jsx'
import LeftContacts from '../../atom/Dashboard/Left/LeftContacts/LeftContacts.jsx'
import LeftExtras from '../../atom/Dashboard/Left/LeftExtras/LeftExtras.jsx'

function Dashboard_left() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
      <div className={styles.image}>  
        <LeftImage/>
      </div>
      <div className={styles.description}>
        <LeftDescription/>
      </div>
      <div className={styles.contacts}>
        <LeftContacts/>
      </div>
      <div className={styles.extras}>
        <LeftExtras/>
      </div>
      

      </div>
     
    </div>
  )
}

export default Dashboard_left