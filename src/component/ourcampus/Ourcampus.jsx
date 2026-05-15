import React, { useEffect } from 'react'
import './ourcampus.css'
import our_campus from "../../assets/our_campus.webp";

import { ArrowRight } from "phosphor-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// our_campus
const Ourcampus = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // MAIN TIMELINE
      const tl = gsap.timeline({

        scrollTrigger: {

          trigger: ".ourcampus_container",

          start: "top 85%",

          end: "top 30%",

          scrub: 1,

        }

      });




      // TITLE ANIMATION
      tl.from(".ourcampus_title_text", {

        y: 80,

        opacity: 0,

        duration: 1.2,

        ease: "power3.out",

      })




      // LEFT DESCRIPTION
      .from(".ourcampus_dis_text_field", {

        x: -120,

        opacity: 0,

        duration: 1.2,

        ease: "power3.out",

      }, "-=0.7")




      // RIGHT PARA
      .from(".rhs_our_campus_para", {

        y: 70,

        opacity: 0,

        duration: 1,

        ease: "power2.out",

      }, "+=0.2")




      // CTA
      .from(".our_campus_cta_wrapper", {

        y: 60,

        opacity: 0,

        duration: 0.9,

        ease: "power2.out",

      }, "-=0.5");





      // IMAGE REVEAL
      gsap.from(".our_campus_img_banner", {

        scale: 1.15,

        opacity: 0,

        y: 120,

        duration: 1.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: ".img_wrapper_our_campus",

          start: "top 90%",

          end: "top 45%",

          scrub: 1,

        }

      });




    });

    return () => ctx.revert();

  }, []);





  return (
    <div className='ourcampus_container'>
        <div className="campus_layout_">
        <div className="lhs_our_campus_wrapper">
        <h1  className="ourcampus_title_text">our campus</h1>
        <h2  className="ourcampus_dis_text_field">Thiravium Group of Institutions offers a vibrant and student-friendly campus designed to support academic excellence and personal growth. With over 30 years of educational experience, we provide a space where students feel motivated, safe, and confident.</h2>
     </div>
     <div className="rhs_our_campus_wrapper">
    <p className="rhs_our_campus_para">Our campus brings together multiple disciplines under one roof focuses on building knowledge, skills, and values for a successful future.</p>

<div className="our_campus_cta_wrapper">
    <h2 className='our_campus_cta_title'>see more</h2>
    <div className="our_campus_ar_wrapper">
<ArrowRight className="our_campus_ar_icons"/>
    </div>
</div>

     </div>
        </div>
    
     <div className="img_wrapper_our_campus">
     <img  className='our_campus_img_banner' src={our_campus} alt="college of physiotherapy" />

     </div>
    </div>
  )
}

export default Ourcampus
