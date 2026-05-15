import React from 'react'
import "./specialenv.css";
import ssenv from "../../../../assets/unity.webp";
const Specialenv = () => {
  return (
    <div className="ss_env_container">
    <div className="ssev_layout_cont">
    <img  className='ssenv_dtl_abt_img_' src={ssenv} alt="ssenv" />
 
  <div className="ssenv_dtl_abt_text_wrapper">
   
  <h1 className="ssenv_dtl_abt_section_header">Safe & Supportive Environment</h1>
  <p  className="ssenv_dtl_abt_section_text_para">Secure campus for women students Friendly and inclusive atmosphere Individual attention and mentoring Encouragement for personal growth</p>
 
  </div>
    </div>
 
 
  </div>
  )
}

export default Specialenv
