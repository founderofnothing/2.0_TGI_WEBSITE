import React from 'react'
import './chairmandetail.css'
import chairman from "../../../assets/chairman.webp"
const ChairmanDetail = () => {
  return (
    <div className='ChairmanDetail_container'>
   <div className="lhs_ChairmanDetail_container">
    <div className="img_wrapper_chairmandetail">
    <img  className='img_chairman_detail_container' src={chairman} alt="Description" />
    </div>
   </div>
   <div className="rhs_ChairmanDetail_container">
   <h1 className="ChairmanDetail_info_pfp_title">Dr. T. Pandiaraj MBBS., DMRD., </h1>
         <h1 className='ChairmanDetail_info_title_text'>
         Chairman 
         </h1>

         <h3 className='ChairmanDetail_message_short_dis'>I warmly welcome you all to the Thiravium family.
            <span className='ChairmanDetail_message_short_dis_hlg'> May the Almighty guide you and bless</span>
             you with a bright and successful future. </h3>


             <p className='ChairmanDetail_message_para' >
Thiravium Group of Institutions was founded with a vision to support the growth and future of the younger generation in this region. For many years, students faced difficulties in accessing quality higher education due to limited opportunities. The institution was established to bridge this gap and provide accessible, career-focused, and quality education that empowers students to build a better future.

             </p>
             <p  className='ChairmanDetail_message_para'>
             I strongly believe that, over the years, this institution will grow into a centre of excellence in knowledge and learning. It will not only serve the educational needs of students but also stand as 
a pioneer in setting high academic standards across the state. 
             </p>


   </div>

      
    </div>
  )
}

export default ChairmanDetail

// {/* <h1 className="ChairmanDetail_info_pfp_title">Dr. T. Pandiaraj MBBS., DMRD., </h1>
//         <h1 className='ChairmanDetail_info_title_text'>
//         Chairman 
//         </h1> */}


{/* */}

{/*  */}