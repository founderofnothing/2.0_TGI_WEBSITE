import React from 'react'
import "./faculty.css"

import facultylec from "../../../../assets/class_room.webp"

const Faculty = () => {
  return (
    <div className="faculty_dtl_abt_section_wrapper">
    <h1  className="faculty_dtl_abt_section_header">Experienced Faculty</h1>
  
    <div className="faculty_dtl_abt_img_wrapper">
    <img  className='faculty_dtl_abt_img_' src={facultylec} alt="facultylec" />
  
    </div>
    <p  className="faculty_dtl_abt_section_text_field">Our dedicated faculty guide students with care and expertise, fostering academic excellence, professional growth, and confidence through quality teaching and personalized mentorship.</p>
  </div>
  
  )
}

export default Faculty
