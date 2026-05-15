import React from 'react'
import {MapPin ,EnvelopeSimple,Copyright,YoutubeLogo,FacebookLogo,InstagramLogo} from "phosphor-react";
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_container'>
      {/* footer wrapper */}
      <div className="hig_ftr_wrapper">
      <div className="lhs_footer_wrapper">
      <h2 className='ftr_int_title'>Thiravium Group of Institutions</h2>
      <div className="lhs_ftr_address_wrapper">
 <MapPin className='ftr_icons' /> 

        <h3 className='lhs_ftr_address_text'> Kailasapatti, Periyakulam, 
,Theni Dt - 625 605
 Tamil Nadu, India</h3>
      </div>

      <div className="lhs_gmail_wrapper">
      <EnvelopeSimple  className='ftr_icons'/>
      <h3  className='lhs_ftr_mail_address_text'>  admininfo@thiraviumgroup.com
        </h3>
      </div>
    </div>
{/* ftr mid wrapper */}
<div className="mid_footer_wrapper">
<h2 className='mid_ftr_header_text_field'>Our Institutions</h2>

  <h2 className='mid_ftr_text_field'>College of Arts & Science</h2>
  <h2  className='mid_ftr_text_field'> College of Education</h2>
  <h2  className='mid_ftr_text_field'>  College of Nursing</h2>
  <h2  className='mid_ftr_text_field'> College of Physiotherapy</h2>


</div>

<div className="fnl_footer_wrapper">
<h2 className='fnl_ftr_header_text_field'>Our Institutions</h2>

  <h2 className='fnl_ftr_text_field'>Online Application</h2>
  <h2  className='fnl_ftr_text_field'>Gallery</h2>
  <h2  className='fnl_ftr_text_field'> Student Feedback</h2>
  <h2  className='fnl_ftr_text_field'>Contact Us</h2>


</div>
      </div>



<div className="btm_ftr_wrapper">
  <div className="lhs_btm_ftr_wrapper">
  <Copyright className='ftr_btm_icons' />
    <h2 className='lhs_btm_ftr_text'>2026 Thiravium College of Arts and Science for Women. All Rights Reserved.</h2>
  </div>
  <div className="social_media_link_wrapper">
  <YoutubeLogo className='ftr_btm_icons' /> 
  <FacebookLogo className='ftr_btm_icons' /> 
  <InstagramLogo className='ftr_btm_icons' />
  </div>
</div>
    

    </div>
  )
}

export default Footer


{/* <PhoneCallIcon size={32} /> */}

 <MapPin /> 
{/*  */}
{/* <EnvelopeSimpleIcon size={32} /> */}
{/**/}
{/* */}
{/*  */}

{/* 📧 Email: info@thiraviumcollege.com  */}

    {/* Kailasapatti, Periyakulam, 
Theni District,Theni Dt - 625 605
 Tamil Nadu, India  */}