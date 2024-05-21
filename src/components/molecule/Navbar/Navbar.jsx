import React from 'react'
import styles from './Navbar.module.css'; // Import modular CSS for styling
import FacultyProfile from '../../compound/Navbar/FacultyProfile/FacultyProfile';
import Navigation from '../Navigation/Navigation';

const Navbar = () => {
  return (
    <div className={styles.nav}> 
    <nav className={styles.navbar}>
    <div className={styles.faculty_container}>
     <FacultyProfile/>
    </div>
  </nav>
  <div className={styles.navigation}>
    <Navigation/>
  </div>
  </div>

   
  );
};

export default Navbar;
