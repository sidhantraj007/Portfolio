import React from 'react';
import styles from './LeftImage.module.css'
import image from '../../../../../assets/image.jpg'

function LeftImage() {
  return (
     <div className={styles.container}> 
    <img src={image} alt="image" className={styles.image}/>
    </div>
  );
}

export default LeftImage;
