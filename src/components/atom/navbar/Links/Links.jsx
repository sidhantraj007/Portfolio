import React from 'react'
import styles from './Links.module.css'
import { Link } from 'react-router-dom';
// import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

const Links = () => {
  return (
    <div className={styles.container}>
    <div className={styles.links}>
        <div>
        <Link to="https://x.com/?lang=en"  className={styles.lin} >
    <FaTwitter />
    </Link>
     </div>

        <div>
        <Link to="https://support.google.com/mail/answer/56256?hl=engit " className={styles.lin}>
    <TiSocialGooglePlus />
    </Link>
        </div>
        <div>
        <Link to="https://in.linkedin.com/" className={styles.lin}>
    <FaLinkedinIn />
    </Link>
        </div>
        <div>
        <Link to="https://www.scopus.com/search/form.uri?display=basic&zone=header&origin=#basic"className={styles.lin}> <p>Scopus</p>
    </Link>
    
        </div>

        
   
   
   
   


    </div>
  </div>
  )
}

export default Links