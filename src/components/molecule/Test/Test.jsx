import React from 'react'
import styles from './Test.module.css'

export const Test = ({data}) => {
  return (
    <div className={styles.container}> crousal
        {data.map((item,idx)=>{
            return(
                // <img src={item.src} alt={item.alt} key={idx}/>
                <div></div>
            );
        }
        
        )}

    </div>
  )
}
