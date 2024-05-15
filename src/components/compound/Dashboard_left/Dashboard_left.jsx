import React from 'react'
import styles from '../Dashboard_left/Dashboard_left.module.css'
import LeftImage from '../../atom/Dashboard/Left/LeftImage/LeftImage.jsx'
import LeftDescription from '../../atom/Dashboard/Left/LeftDescription/LeftDescription.jsx'
import LeftContacts from '../../atom/Dashboard/Left/LeftContacts/LeftContacts.jsx'
import LeftExtras from '../../atom/Dashboard/Left/LeftExtras/LeftExtras.jsx'

function Dashboard_left() {
  return (
    <div className={styles.container}>
      <div>  
        <LeftImage/>
      </div>
      <div className={styles.left}>
        <LeftDescription/>
      </div>
      <div>
        <LeftContacts/>
      </div>
      <div>
        <LeftExtras/>
      </div>
      
    </div>
  )
}

export default Dashboard_left