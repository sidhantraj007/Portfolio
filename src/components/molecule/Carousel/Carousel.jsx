import React from 'react'
import style from './Carousel.module.css'
import { ImageSlider } from '../../compound/Carousel/ImageSlider'
import { SliderData } from '../../compound/Carousel/SliderData'
export default function Carousel() {
  return (
    <div className={style.Box}>
      <div className={style.container}>
        <ImageSlider slides={SliderData}/>

      </div>
    </div>
  )
}
