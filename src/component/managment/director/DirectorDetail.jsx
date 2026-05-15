import React from 'react'
import './directordetail.css'
import director from "../../../assets/Director.jpg";


const DirectorDetail = () => {
  return (
    <div className='directordetail_container'>
    <div className="lhs_directordetail_container">
     <div className="img_wrapper_chairmandetail">
     <img  className='img_director_detail_container' src={director} alt="Description" />
     </div>
    </div>
    <div className="rhs_directordetail_container">
    <h1 className="directordetail_info_pfp_title">Dr. P. Immanuel Judah MBBS., MDRD., </h1>
          <h1 className='directordetail_info_title_text'>
          Director 
          </h1>
 
          <h3 className='directordetail_message_short_dis'>It gives me great pleasure to welcome you to Thiravium Group of Institutions,
             <span className='directordetail_message_short_dis_hlg'>where knowledge grows, aspirations take shape,</span>
             and futures are built with care.</h3>
 
 
              <p className='directordetail_message_para' >
              At Thiravium Group of Institutions, we believe education is not just about books and classrooms. It is about building confidence, character, and preparing students for the modern world. Our institution was founded to provide quality education and better opportunities for students in this region.
              </p>
              <p  className='directordetail_message_para'>
              We provide a learning environment that encourages curiosity, innovation, and excellence. Every student is guided to discover their talents and grow into a confident, responsible, and successful individual.
              </p>
 
 
    </div>
 
       
     </div>
  )
}

export default DirectorDetail
