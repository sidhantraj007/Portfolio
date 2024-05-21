import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // Import CSS

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/contacts" className={styles.navLink}>Contacts</Link>
    </nav>
  );
};

export default Navigation;
