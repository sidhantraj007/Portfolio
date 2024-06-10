import React from 'react';
import logo1 from '../../../../assets/logo1.png'
import styles from './NavbarLogo.module.css'

function NavbarLogo() {
  return (
     <div className={styles.container}> {/* New class for the second container */}
    <img src={logo1} alt="Faculty logo" className={styles.facultyLogo} />
    </div>
  );
}

export default NavbarLogo;
