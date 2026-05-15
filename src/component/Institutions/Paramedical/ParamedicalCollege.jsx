import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import paramedicalclg from "../../../assets/paramedic.webp";
import subclgpara from "../../../assets/subpara1.webp";
import subclgpara2 from "../../../assets/subpara2.webp"
import { CaretDown } from "phosphor-react";
import "./Paramedicalcollege.css"
import princeofparamedical from "../../../assets/principal_paramedical.webp"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ParamedicalCollege = () => {
  const navigate = useNavigate();

  

    const [openCard, setOpenCard] = useState(null)
    const [institutionData, setInstitutionData] = useState(null);
  const [loading, setLoading] = useState(true);
    const container = useRef(null)
   
  
    // clck sngl page function 
    const handleCourseNavigate = (institutionSlug, courseSlug) => {

      navigate(`/Institutions/${institutionSlug}/${courseSlug}`);
    
    };

    useEffect(() => {

        const fetchInstitutionData = async () => {
      
          try {
      
            console.log("FETCH STARTED");
      
            const response = await axios.get(
      
              `${import.meta.env.VITE_API_URL}/wp-json/tgi/v1/institutions/paramedical?t=${Date.now()}`,
      
              {
                headers: {
                  "Cache-Control": "no-cache",
                  Pragma: "no-cache",
                  Expires: "0",
                },
              }
      
            );
      
            console.log("API SUCCESS:", response.data);
      
            setInstitutionData(response.data);
      
          } catch (error) {
      
            console.log("FULL ERROR:", error);
      
          } finally {
      
            setLoading(false);
      
          }
      
        };
      
        fetchInstitutionData();
      
      }, []);
    const handleCardToggle = (id) => {
      setOpenCard(openCard === id ? null : id)
    }
  
    useLayoutEffect(() => {
  
      const ctx = gsap.context(() => {
    
        const isMobile = window.innerWidth < 768;
    
        // =========================
        // SPLIT TEXT
        // =========================
    
        const split = new SplitType(".paramedicalcollege_int_header", {
          types: "words"
        });
    
        // =========================
        // INITIAL STATES
        // =========================
    
        gsap.set(".paramedicalcollege_int_cover_img", {
          scale: 1.08,
          opacity: 0
        });
    
        gsap.set(split.words, {
          yPercent: 120,
          opacity: 0
        });
    
        gsap.set([
          ".paramedicalcollege_int_header_title",
          ".paramedicalcollege_int_para_title"
        ], {
          y: 60,
          opacity: 0
        });
    
        gsap.set(".paramedicalcollege_int_sub_img", {
          y: -220,
          scale: 0.15,
          borderRadius: "100%",
          opacity: 0
        });
    
        gsap.set(".paramedicalcollege_int_Principal_header", {
          x: -120,
          opacity: 0
        });
    
        gsap.set([
          ".paramedicalcollege_int_Principal_dis_para",
          ".paramedicalcollege_int_Principal_aurthor"
        ], {
          x: 0,
          opacity: 1
        });
    
        // =========================
        // HERO INTRO
        // =========================
    
        const heroTl = gsap.timeline({
          defaults: {
            ease: "power3.out"
          }
        });
    
        heroTl
    
        .to(".paramedicalcollege_int_cover_img", {
          scale: 1,
          opacity: 1,
          duration: 1.4
        })
    
        .to(split.words, {
          yPercent: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1
        }, "-=0.7")
    
        .to(".paramedicalcollege_int_header_title", {
          y: 0,
          opacity: 1,
          duration: 1
        }, "-=0.5")
    
        .to(".paramedicalcollege_int_para_title", {
          y: 0,
          opacity: 1,
          duration: 1
        }, "-=0.8");
    
        // =========================
        // MAIN TITLE SWIPE LEFT
        // STARTS ONLY AFTER READING
        // =========================
    
        gsap.to(".paramedicalcollege_int_header", {
    
          xPercent: isMobile ? -60 : -120,
    
          opacity: 0.1,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".paramedicalcollege_int_top_wrapper",
    
            start: isMobile ? "top -65%" : "top -80%",
    
            end: "bottom top",
    
            scrub: 2,
    
            invalidateOnRefresh: true
          }
    
        });
    
        // =========================
        // CONTENT SLIDE RIGHT
        // DELAYED FOR READABILITY
        // =========================
    
        const contentTl = gsap.timeline({
    
          scrollTrigger: {
            trigger: ".paramedicalcollege_int_top_wrapper",
    
            start: isMobile ? "top -60%" : "top -75%",
    
            end: "bottom top",
    
            scrub: 2.5,
    
            invalidateOnRefresh: true
          }
    
        });
    
        contentTl
    
        .to(".paramedicalcollege_int_header_title", {
    
          x: isMobile ? 40 : 140,
    
          opacity: 0.5,
    
          ease: "none",
    
          duration: 1
    
        })
    
        .to(".paramedicalcollege_int_para_title", {
    
          x: isMobile ? 60 : 200,
    
          opacity: 0,
    
          ease: "none",
    
          duration: 1
    
        }, "-=0.7");
    
        // =========================
        // SMALL IMAGE MORPH
        // =========================
    
        gsap.to(".paramedicalcollege_int_sub_img", {
    
          y: 0,
    
          scale: 1,
    
          opacity: 1,
    
          borderRadius: "12px",
    
          stagger: 0.2,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".sml_paramedicalcollege_int_imgwrapper",
    
            start: isMobile ? "top 88%" : "top 92%",
    
            end: isMobile ? "top 55%" : "top 35%",
    
            scrub: 2,
    
            invalidateOnRefresh: true
          }
    
        });
    
        // =========================
        // COVER IMAGE PARALLAX
        // STARTS LATER
        // =========================
    
        gsap.to(".paramedicalcollege_int_cover_img", {
    
          yPercent: isMobile ? 8 : 18,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".paramedicalcollege_int_top_wrapper",
    
            start: isMobile ? "top -55%" : "top -70%",
    
            end: "bottom top",
    
            scrub: 2,
    
            invalidateOnRefresh: true
          }
    
        });
    
        // =========================
        // PRINCIPAL HEADER REVEAL
        // =========================
    
        gsap.to(".paramedicalcollege_int_Principal_header", {
    
          x: 0,
    
          opacity: 1,
    
          ease: "power3.out",
    
          scrollTrigger: {
            trigger: ".paramedicalcollege_int_Principal_wrapper",
    
            start: isMobile ? "top 88%" : "top 82%",
    
            end: isMobile ? "top 55%" : "top 45%",
    
            scrub: 2,
    
            invalidateOnRefresh: true
          }
    
        });
    
        // =========================
        // PRINCIPAL CONTENT
        // STARTS AFTER READING
        // =========================
    
        gsap.to([
          ".paramedicalcollege_int_Principal_dis_para",
          ".paramedicalcollege_int_Principal_aurthor"
        ], {
    
          x: isMobile ? 120 : 320,
    
          opacity: 0,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".paramedicalcollege_int_Principal_wrapper",
    
            start: isMobile ? "top 15%" : "top 5%",
    
            end: "bottom top",
    
            scrub: 3,
    
            invalidateOnRefresh: true
          }
    
        });
    
      }, container);
    
      return () => ctx.revert();
    
    }, []);
  return (
    <div ref={container} className='paramedicalcollege_container'>
    {/* <img  className='img_paramedicalcollege_container' src={paramedicalcollegecollege} alt="college of paramedicalcollege" /> */}

 <h1 className='paramedicalcollege_int_header'>college of paramedicalcollege</h1>

 <div className="paramedicalcollege_int_top_wrapper">


 <div className="paramedicalcollege_int_layout_container">
 <div className="paramedicalcollege_int_lhs_img_wrapper">
    <img  className='paramedicalcollege_int_cover_img' src={paramedicalclg} alt="college of paramedicalcollege" />

  </div>
  <div className="lhs_paramedicalcollege_int_content_wrapper">
    <h3 className="paramedicalcollege_int_header_title">“Precision in Imaging, Excellence in Care.” </h3>
    <p className="paramedicalcollege_int_para_title">The B.Sc. Radiology programme is designed to provide students with in-depth knowledge of medical imaging and diagnostic techniques. It combines theoretical learning with practical training to help students understand modern imaging technologies used in healthcare.</p>
  <div className="sml_paramedicalcollege_int_imgwrapper">
    <img  className='paramedicalcollege_int_sub_img' src={subclgpara} alt="college of paramedicalcollege" />
    <img  className='paramedicalcollege_int_sub_img' src={subclgpara2} alt="college of paramedicalcollege" />

  </div>
  </div>

 </div>

  
 </div>

 <div className="paramedicalcollege_int_Principal_wrapper">

    <h1  className="paramedicalcollege_int_Principal_header">Principal's Desk</h1>
    <div className="paramedicalcollege_int_princ_card">

{/* principal img cards */}
<div className="paramedicalcollege_college_int_principal_pfp_wrapper">
<img  className='paramedicalcollege_college_int_Principal_img_pfp' src={princeofparamedical} alt="paramedicalcollegecollege" />
<p className="paramedicalcollege_college_int_Principal_pfp">Dr. P. Immanuel Judah MBBS., MDRD.,</p>
</div>
<div className="paramedicalcollege_int_princ_card_sub">
<p  className="paramedicalcollege_int_Principal_dis_para">We believe that precision, responsibility, and dedication are essential qualities for a radiology professional. Our aim is to guide students to become competent and confident individuals who can contribute meaningfully to the healthcare sector. </p>
 <p className="paramedicalcollege_int_Principal_aurthor">-Principal's message</p>
</div>

    </div>
 
  </div>
  

    <div className="paramedicalcollege_course_wrapper">
    {
     institutionData?.courses?.map((course) => (

        <div
          key={course.id}
          className={`paramedicalcollege_course_card ${openCard === course.id ? "active_card" : ""}`}
          onClick={() =>
            handleCourseNavigate(
              institutionData.slug,
              course.slug
            )
          }
        >

          <div className="course_card_top">

            <h3 className='paramedicalcollege_course_title'>{course.title}</h3>

            <CaretDown
          onClick={() => handleCardToggle(course.id)}
              
              className='nrs_course_card_icons'
              // className={openCard === course.id ? "rotate_icon" : ""}
            />

          </div>

          {
            openCard === course.id && (
              <p className="course_reveal_para">
                {course.description}
              </p>
            )
          }

        </div>

      ))
    }

     
    </div>

  </div>
  )
}

export default ParamedicalCollege



