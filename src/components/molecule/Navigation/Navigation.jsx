import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css'; // Import CSS

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className={styles.navbar}>
      <Link 
        to="/home" 
        className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}
      >
        Home
      </Link>
      <Link 
        to="/contacts" 
        className={`${styles.navLink} ${location.pathname === '/contacts' ? styles.active : ''}`}
      >
        Contact
      </Link>
      <Link 
        to="/publications" 
        className={`${styles.navLink} ${location.pathname === '/publications' ? styles.active : ''}`}
      >
        Publications
      </Link>
    </nav>
  );
};

export default Navigation;
