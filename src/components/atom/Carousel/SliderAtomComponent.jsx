import React from 'react'
import style from './SliderAtomComponent.module.css'
export default function SliderAtomComponent({image}) {
    console.log(image)
  return (
   <div className={style.container}>
    <div className={style.image}>
    <img src={image} alt="" />
    </div>

   </div>
  )
}
