import React from 'react'
import styles from './Addres.module.css'
import { FaHome } from "react-icons/fa";


const Address = () => {
  return (
    <div className={styles.container}>
    <div className={styles.Address}>
    <p style={{ display: 'flex', alignItems: 'center' }}>
  <FaHome /> <span style={{ marginLeft: '10px' }}>Office: ACES-325</span>
</p>
        <p>
        Department of Electrical Engineering,                       
        <p>Indian Institute of Technology Kanpur,</p>
        
    Kalyanpur, Kanpur Nagar, 208016,
    <p>Uttar Pradesh, India</p>
    </p></div>
  </div>
  )
}

export default Address