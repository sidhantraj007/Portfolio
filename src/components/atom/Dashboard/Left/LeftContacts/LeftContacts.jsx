import React from 'react'
import styles from './LeftContacts.module.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";


function LeftContacts() {
  return (
    <div className={styles.container}>
      <div className={styles.InIcon}>
      <FaLinkedinIn className={styles.ic} />
      </div>
      <div className={styles.GmailIcon}>
      <TiSocialGooglePlus className={styles.i} />
      </div>
      <div className={styles.scopus}>
       <h2 className={styles.h}>Scopus</h2>
      </div>

    </div>
  )
}

export default LeftContacts