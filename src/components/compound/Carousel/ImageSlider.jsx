import React, {useState} from 'react'
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
// import SliderAtomComponent from '../SliderAtomComponent/SliderAtomComponent';
import SliderAtomComponent from '../../atom/Carousel/SliderAtomComponent';
import style from './ImageSlider.module.css'

export const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    } 


  return (
    <div className={style.container}>
        <FaArrowAltCircleLeft className={style.left_arrow} onClick={prevSlide}/>
        {/* <FaArrowAltCircleRight className={style.right_arrow} onClick={nextSlide}/> */}
        <div className={style.slides}>
        {SliderData.map((slide, index)=>{
        return(
            <div className={style.images} >
             <div>{index ===current&&(<SliderAtomComponent image={slide.image} className={style.img}/>)}</div>
             {/* <div> {index ===(current+1) &&(<SliderAtomComponent image={slide.image} className={style.img}/>)}</div>
             <div>{index ===(current+2)&&(<SliderAtomComponent image={slide.image} className={style.img}/>)}</div> */}
            </div>
            )
        })}
        </div>
        <FaArrowAltCircleRight className={style.right_arrow} onClick={nextSlide}/>
    </div>
  )
}
