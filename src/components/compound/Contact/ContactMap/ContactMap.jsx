import React from 'react'
import style from './ContactMap.module.css'
import Map from '../../../atom/contact/Map/Map'

function ContactMap() {
  return (
    <div className={style.container}>
        <Map/>
    </div>
  )
}

export default ContactMap