// FacultyProfileInfo.jsx
import React from 'react';
import styles from './FacultyProfileInfo.module.css'

// Import data from the corresponding content.js file
import facultyData from '../../../../contents/navbar/facultyData.js'

const FacultyProfileInfo = () => {
  return ( 
      <div className={styles.container}> {/* New class for the first container */}
      <div className={styles.name}>
      <h1>{facultyData.name}</h1>
      </div>
      <div className={styles.title}>
      <p>{facultyData.title}</p>
      </div>
      <div className={styles.department}>
      <p>{facultyData.department}</p>
      </div>
      <div className={styles.affiliation}>
      <p>{facultyData.affiliation}</p>
      </div>
      </div>
      
  );
};

export default FacultyProfileInfo;
