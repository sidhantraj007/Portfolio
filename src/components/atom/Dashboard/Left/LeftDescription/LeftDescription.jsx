import React from 'react';
import styles from './LeftDescription.module.css'
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaHome } from 'react-icons/fa';


function LeftDescription() {
  return (
    <div className={styles.container}>
      <div className={styles.mail}>
      <p className={styles.desc}>
      <IoIosMail />raghvendra@iitk.ac.in
</p>
<p className={styles.desc}>
  <FaHome /> Office: ACES-325
</p>
     
<p className={styles.desc}>
<MdPhone/> +91-512-679-2306

</p>

      
      </div>
      <div>

      </div>
    </div>
  )
}

export default LeftDescription