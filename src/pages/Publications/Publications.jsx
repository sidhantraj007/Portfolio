import React from 'react'
import styles from './Publications.module.css'
import Publication from '../../components/molecule/Publications/Publication'
import Footer from '../../components/molecule/Footer/Footer'
import Navbar from '../../components/molecule/Navbar/Navbar'

const Publications = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
        <Publication />
        <Footer/>
    </div>
  )
}

export default Publications