import React from 'react';
import styles from './FacultyProfile.module.css'; // Import CSS as object
import NavbarLogo from '../../../atom/navbar/NavbarLogo/NavbarLogo.jsx'
// Import data from the corresponding content.js file
//import facultyData from '../../../../contents/navbar/facultyData.js'; // Replace with the actual file path
import FacultyProfileInfo from '../../../atom/navbar/FacultyProfileInfo/FacultyProfileInfo.jsx';
import Links from '../../../atom/navbar/Links/Links.jsx';

const FacultyProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <NavbarLogo/>
      </div>
<div className={styles.right_container}>
<FacultyProfileInfo/>
</div>

    </div>

  );
};

export default FacultyProfile;
