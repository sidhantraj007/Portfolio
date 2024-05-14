import React from 'react';
import logo from '../../../../assets/logo.png'
import styles from './NavbarLogo.module.css'

function NavbarLogo() {
  return (
     <div className={styles.container}> {/* New class for the second container */}
    <img src={logo} alt="Faculty logo" className={styles.facultyLogo} />
    </div>
  );
}

export default NavbarLogo;
