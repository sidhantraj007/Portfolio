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
        <Link to="https://x.com/?lang=en" style={{ display: 'flex', alignItems: 'center' ,margin:'0px 20px 5px 0px', color:'white', fontSize:'1.8rem'}} >
    <FaTwitter />
    </Link>
     </div>

        <div>
        <Link to="https://support.google.com/mail/answer/56256?hl=en" style={{ display: 'flex', alignItems: 'center' ,margin:'0px 20px 5px 0px', color:'white', fontSize:'1.8rem'}}>
    <TiSocialGooglePlus />
    </Link>
        </div>
        <div>
        <Link to="https://in.linkedin.com/" style={{ display: 'flex', alignItems: 'center' ,margin:'0px 20px 5px 0px', color:'white', fontSize:'1.6rem'}}>
    <FaLinkedinIn />
    </Link>
        </div>
        <div>
        <Link to="https://www.scopus.com/search/form.uri?display=basic&zone=header&origin=#basic" style={{ display: 'flex', alignItems: 'center' ,margin:'0px 20px 5px 0px', color:'white', fontSize:'1.6rem'}}> Scopus
    </Link>
    
        </div>

        
   
   
   
   


    </div>
  </div>
  )
}

export default Links