import React from 'react'
import styles from './Publications.module.css'
import PublicationDetails from '../../compound/Publication/PublicationDetails'

const Publications = () => {
  return (
    <div className={styles.container}>
      <PublicationDetails/>

    </div>
  )
}

export default Publications