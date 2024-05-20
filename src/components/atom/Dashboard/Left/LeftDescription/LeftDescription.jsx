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
      <p style={{ display: 'flex', alignItems: 'center' ,margin:'0px 0px 5px 0px', fontSize:'1.3rem'}}>
      <IoIosMail /> <span style={{ marginLeft: '10px' }}>raghvendra@iitk.ac.in</span>
</p>
<p style={{ display: 'flex', alignItems: 'center',margin:'0px 0px 5px 0px', fontSize:'1.3rem' }}>
  <FaHome /> <span style={{ marginLeft: '10px' }}>Office: ACES-325</span>
</p>
     
<p style={{ display: 'flex', alignItems: 'center',margin:'0px 0px 5px 0px' ,margin:'0px 0px 5px 0px', fontSize:'1.3rem'}}>
<MdPhone/> <span style={{ marginLeft: '10px' }}> +91-512-679-2306
</span>
</p>

      
      </div>
      <div>

      </div>
    </div>
  )
}

export default LeftDescription