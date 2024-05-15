import React from 'react'
import style from './HomeBtn.module.css'

function HomeBtn() {
  return (
    <div className={style.container}>
        <button onClick={() => this.handleButtonClick('home')}>Home</button>
    </div>
  )
}

export default HomeBtn