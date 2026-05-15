import React from 'react'
import './Secretarydetail.css'


import Secretary from '../../../assets/Secretary.webp'

const SecretaryDetail = () => {
  return (
    <div className='Secretarydetail_container'>
    <div className="lhs_Secretarydetail_container">
     <div className="img_wrapper_Secretarydetail">
     <img  className='img_Secretary_detail_container' src={Secretary} alt="Secretary_img" />
     </div>
    </div>
    <div className="rhs_Secretarydetail_container">
    <h1 className="Secretarydetail_info_pfp_title">Dr. Hemalatha Pandiaraj MBBS.</h1>
          <h1 className='Secretarydetail_info_title_text'>
          Secretary  
          </h1>
 
          <h3 className='Secretarydetail_message_short_dis'>As a women's institution, we are committed to developing
             <span className='Secretarydetail_message_short_dis_hlg'>confident,independent,and responsible individuals </span>
             who lead with knowledge and integrity. I wish every student a bright and successful future.</h3>
 
 
              <p className='Secretarydetail_message_para' >
              It gives me great joy to see our students succeed and proudly acknowledge the role of our institution in their achievements. Their growth and accomplishments inspire us to continue our journey with greater commitment and dedication. 
              </p>
              <p  className='Secretarydetail_message_para'>
              I encourage all our students to make the best use of the opportunities provided. Active participation in co-curricular and extra-curricular activities will help you discover your potential, build confidence, and develop leadership qualities. 
              </p>
 
 
    </div>
 
       
     </div>
  )
}

export default SecretaryDetail
