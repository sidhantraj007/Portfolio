import React, { useState } from 'react';
import styles from './Tabs.module.css';
import Journals from '../TabsDetails/Journals/Journals';

const Tabs = () => {
    const [toggle, setToggle] = useState(1);

    const updateToggle = (id) => {
        setToggle(id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.btn}>
            <ul >
                <li className={styles.bn} onClick={() => updateToggle(1)}>Books</li>
                <li className={styles.bn} onClick={() => updateToggle(2)}>Journals</li>
                <li className={styles.bn} onClick={() => updateToggle(3)}>Confrences</li>
            </ul>
            </div>
            {/* <div className={styles.txt}> */}
            <div className={toggle === 1 ? styles.show : styles.content}>
               <div className={styles.html}>
               <h1 style={{display:'flex', justifyContent:'start' , alignItems:'center', margin:'20px 20px 20px 20px'}}>Books</h1>
                <div className={styles.text}>
               

                </div>
               </div>
            </div>
            <div className={toggle === 2 ? styles.show : styles.content}>
                <div className={styles.css}>
                <h1 style={{display:'flex', justifyContent:'start' , alignItems:'center', margin:'20px 20px 20px 20px'}}>Journals</h1>
               <div className={styles.text3}>
                <Journals/>
            
               </div>

                </div>
                
            </div>
            <div className={toggle === 3 ? styles.show : styles.content}>
                <div className={styles.javascript}>
                <h1 style={{display:'flex', justifyContent:'start' , alignItems:'center', margin:'20px 20px 20px 20px'}}>Confrences</h1>
                <div className={styles.text2}>
        

                </div>
{/* </div>       */}
      </div>

            </div>
            
           
        </div>
    );
}

export default Tabs;
