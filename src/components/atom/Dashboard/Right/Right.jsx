import React from 'react'
import Styles from './Right.module.css'
import RightTextContent from '../../../../contents/dashboard/RightTextContent.jsx'
import ResearchInterests from '../../../../contents/dashboard/ResearchInterests.jsx'

function Right() {
  return (
    <div className={Styles.container}>
      <div className={Styles.upper}>
      <RightTextContent/>     
      </div>
      <div className={Styles.lower}>
        <ResearchInterests/>

      </div>
    </div>
  )
}

export default Right