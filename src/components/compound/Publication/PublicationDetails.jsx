import React, { useState } from 'react';
import styles from './PublicationsDetails.module.css'
import Books from '../../atom/Publications/TabsDetails/Books/Books';
import Journals from '../../atom/Publications/TabsDetails/Journals/Journals';
import Confrences from '../../atom/Publications/TabsDetails/Confrences/Confrences';

const PublicationDetails = () => {
    const [toggle, setToggle] = useState(1);

    const updateToggle = (id) => {
        setToggle(id);
    }

    return (
        <div className={styles.container}>
          <div className={styles.data}>
          <div className={styles.button}>
          <ul className={styles.un}>
                <li className={styles.bn} onClick={() => updateToggle(1)}>Books</li>
                <li className={styles.bn} onClick={() => updateToggle(2)}>Journals</li>
                <li className={styles.bn} onClick={() => updateToggle(3)}>Conferences</li>
            </ul>
        

          </div>
          <div className={styles.content}>
          <div className={toggle === 1 ? styles.content : styles.hide}>
               <div className={styles.text}> 
                    <Books/>
                </div>
                </div>

                <div className={toggle === 2 ? styles.content : styles.hide}>
           
               <div className={styles.text3}>
                <Journals/>
               </div>

            
          </div>
          <div className={toggle === 3 ? styles.content : styles.hide}>
                <div className={styles.text2}>
                    <Confrences/>
                </div>
        
            </div>
    
            </div>
           
           
        </div>
        </div>
    );
}

export default PublicationDetails;
