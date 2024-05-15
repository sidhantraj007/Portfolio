import React from 'react'
import styles from './Dashboard.module.css'
import Dashboard_Right from '../../../components/compound/Dashboard_Right/Dashboard_Right'
import Dashboard_left from '../../compound/Dashboard_left/Dashboard_left'

const Dashboard =()=> {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <Dashboard_left/>
        </div>
        <div className={styles.right}>
        <Dashboard_Right/>
        </div>
    </div>
  )
}

export default Dashboard