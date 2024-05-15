import React from 'react';
import styles from './LeftImage.module.css'

function LeftImage() {
  return (
     <div className={styles.container}> {/* New class for the second container */}
    <img src={image} alt="image" className={styles.facultyLogo} />
    </div>
  );
}

export default LeftImage;
