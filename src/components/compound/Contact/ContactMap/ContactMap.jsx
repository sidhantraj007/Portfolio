import React from 'react'
import style from './ContactMap.module.css'
import MyMap from '../../../atom/contact/Map/MyMap'

function ContactMap() {
  return (
    <div className={style.container}>
        <MyMap/>
    </div>
  )
}

export default ContactMap