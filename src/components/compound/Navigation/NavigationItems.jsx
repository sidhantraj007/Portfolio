import React from 'react'
import style from './NavigationItems.module.css'
import HomeBtn from '../../atom/NavigationButtons/HomeBtn/HomeBtn'
import Awards from '../../atom/NavigationButtons/Awards/Awards'

function NavigationItems() {
  return (
    <div className={style.container}>
        <div className={style.homebtn}>
        <HomeBtn/>
        </div>
        <div className={style.awardsbtn}>
          <Awards/>
        
          </div>
        
          <div className={style.teachings}>
          <button onClick={() => this.handleButtonClick('teaching')}>Teaching</button>
          </div>
        <div className={style.publications}>
        <button onClick={() => this.handleButtonClick('publications')}>Publications</button>
         </div>        
       
        
        </div>
  )
}

export default NavigationItems