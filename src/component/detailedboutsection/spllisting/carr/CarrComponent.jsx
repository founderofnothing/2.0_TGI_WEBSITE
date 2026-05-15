import React from 'react'
import "./carrcomponent.css"

import carrdlr from "../../../../assets/block_img.webp"
const CarrComponent = () => {
  return (
    <div className="carr_dtl_abt_container">
  <div className="lhs_carr_dlt_abt_wrapper">
  <img  className='carr_dtl_abt_img_' src={carrdlr} alt="carrdlr" />

  </div>
  <div className="rhs_carr_dlt_abt_wrapper">
    <h1 className="rhs_carr_dlt_abt_header">Career-Focused Learning</h1>
    <p className="rhs_carr_dlt_abt_para_text">Skill-based education
Practical exposure and training
Focus on communication and leadership Preparation for real-world challenges</p>
  </div>

</div>
  )
}

export default CarrComponent
