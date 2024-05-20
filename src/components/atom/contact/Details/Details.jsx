import React from 'react'
import style from './Details.module.css'
// import RightTextContent from '../../../../contents/dashboard/RightTextContent'
import Name from '../Details/Name/Name'
import Address from './Address/Address'
import Phone from './Phone/Phone'

function Details() {
  return (
    <div className={style.container}>

          <div className={style.name}>
          <Name/>
         
        </div> 
        <div className={style.address}>
          <Address/>
        </div>
        <div className={style.phone}>
          <Phone/>
        </div>  
    </div>
  )
}

export default Details