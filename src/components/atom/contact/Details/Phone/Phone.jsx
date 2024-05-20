import React from 'react'
import styles from './Phone.module.css'
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Phone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Phone}>
      <p style={{ display: 'flex', alignItems: 'center' ,margin:'10px 0px 5px 0px'}}>
      <IoIosMail /> <span style={{ marginLeft: '10px' }}>raghvendra@iitk.ac.in</span>
</p>
<p style={{ display: 'flex', alignItems: 'center',margin:'0px 0px 5px 0px' }}>
<MdPhone/> <span style={{ marginLeft: '10px' }}> +91-512-679-2306 (Office)
</span>
</p>
<p style={{ display: 'flex', alignItems: 'center',margin:'0px 0px 5px 0px' }}>
<MdPhone/> <span style={{ marginLeft: '10px' }}> +91-512-259-7058 (mmWave Lab)</span>
</p>
<p style={{ display: 'flex', alignItems: 'center' ,margin:'0px 20px 5px 0px'}}>
<TbDeviceLandlinePhone /> <span style={{ marginLeft: '10px' }}>+91-512-2590063</span>
</p>
      
      
      

      </div>
    </div>
  )
}

export default Phone