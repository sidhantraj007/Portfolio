import React from 'react'
import styles from './LeftContacts.module.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";


function LeftContacts() {
  return (
    <div className={styles.container}>
      <div className={styles.InIcon}>
      <FaLinkedinIn style={{ color: 'black', fontSize: 24, padding: '10px' }} />
      </div>
      <div className={styles.GmailIcon}>
      <TiSocialGooglePlus style={{ color: 'black', fontSize: 35, padding: '10px' }} />
      </div>
      <div className={styles.scopus}>
       <h2>Scopus</h2>
      </div>

    </div>
  )
}

export default LeftContacts