import React from 'react';
import styles from './FooterContent.module.css'
import { Link, useLocation } from 'react-router-dom';
import FooterLink from '../../atom/footer/FooterLink/FooterLink';

const FooterContent = () => {
  console.log(styles);
  return (
    <div className={styles.container}>

<Link className={styles.ft} to="/home">
        Home
      </Link>
      <span className={styles.line}> | </span>
      <Link className={styles.ft}
        to="/contacts"
      >
        Webmail
      </Link>
      <span className={styles.line}> | </span>
      <Link className={styles.ft}
        to="/publications" 
      >
        EE
      </Link>
      <span className={styles.line}> | </span>
      <Link className={styles.ft}
        to="/contacts"
      >
        IIT Kanpur
      </Link>
      <span className={styles.line}> | </span>
      
      <p className={styles.ft}>Last Update: April 29, 2024</p>
    </div>
  );
};

export default FooterContent;
