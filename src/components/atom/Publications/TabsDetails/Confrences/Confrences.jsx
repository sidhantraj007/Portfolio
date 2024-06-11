import React from 'react'
import styles from './Confrences.module.css'
// import confrence from '../../../../../contents/Publications/confrences/confrence'
import confrence from '../../../../../contents/Publications/Con/Con.js'

const Confrences = () => {
  return (
    <div className={styles.container}>
       < div className={styles.head}>
      <h1 className={styles.jr}>Conferences</h1>
        </div>
        <div className={styles.journals}>
        <ol className={styles.list}>
        {confrence.map((item, index) => (
          <li className={styles.l} key={index}>{item}</li>
        ))}
      </ol>

        </div>

    </div>
  )
}

export default Confrences