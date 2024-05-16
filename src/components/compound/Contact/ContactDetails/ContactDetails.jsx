import React from 'react'
import style from './ContactDetails.module.css'
import Details from '../../../atom/contact/Details/Details'

function ContactDetails() {
  return (
    <div className={style.container}>
      <Details/>
    </div>
  )
}

export default ContactDetails