import React from 'react'
import style from './Contacts.module.css'
import ContactDetails from '../../compound/Contact/ContactDetails/ContactDetails'
import ContactMap from '../../compound/Contact/ContactMap/ContactMap.jsx'
import ContactHead from '../../compound/Contact/ContactHead/ContactHead.jsx'

function Contact() {
  return (
   <div className={style.a}>
   
         <div className={style.heading}>
        <ContactHead/>
    </div>
        <div className={style.container}>
   
        <div className={style.contactdetails}>
            <ContactDetails/>
        </div>
        <div className={style.map}>
            <ContactMap/>
            </div>
        </div>
   </div>
    
  )
}

export default Contact