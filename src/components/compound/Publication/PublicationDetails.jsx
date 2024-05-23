import React from 'react'
import styles from './PublicationsDetails.module.css'
import Tabs from '../../atom/Publications/Tabs/Tabs'
const PublicationDetails = () => {
  return (
    <div className={styles.container}>
        <div className={styles.tabs}>
        <Tabs/>

        </div>
        {/* <div className={styles.content}>
          

        </div> */}
    </div>
  )
}

export default PublicationDetails