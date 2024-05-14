import React from 'react'
import styles from './Navbar.module.css'; // Import modular CSS for styling
import FacultyProfile from '../../compound/Navbar/FacultyProfile/FacultyProfile';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.faculty_container}>
       <FacultyProfile/>
      </div>
    </nav>
  );
};

export default Navbar;
