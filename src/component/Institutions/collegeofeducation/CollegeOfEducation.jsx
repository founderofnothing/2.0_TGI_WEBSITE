import axios from "axios";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { CaretDown } from "phosphor-react";
import collegeofeducation from "../../../assets/collegeofeducation.webp"
import subimgedu from "../../../assets/subclgedu.webp"
import subimgedu2 from "../../../assets/subclgedu2.webp"
import './collegeofeducation.css'
import collegeodeduprinc from "../../../assets/principal_collegeofedu.webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const CollegeOfEducation = () => {
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
  
          `${import.meta.env.VITE_API_URL}/wp-json/tgi/v1/institutions/college-of-education?t=${Date.now()}`,
  
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
    
        const split = new SplitType(".collegeofeducation_int_header", {
          types: "words"
        });
    
        // =========================
        // INITIAL STATES
        // =========================
    
        gsap.set(".collegeofeducation_int_cover_img", {
          scale: 1.08,
          opacity: 0
        });
    
        gsap.set(split.words, {
          yPercent: 120,
          opacity: 0
        });
    
        gsap.set([
          ".collegeofeducation_int_header_title",
          ".collegeofeducation_int_para_title"
        ], {
          y: 60,
          opacity: 0
        });
    
        gsap.set(".collegeofeducation_int_sub_img", {
          y: -220,
          scale: 0.15,
          borderRadius: "100%",
          opacity: 0
        });
    
        gsap.set(".collegeofeducation_int_Principal_header", {
          x: -120,
          opacity: 0
        });
    
        gsap.set([
          ".collegeofeducation_int_Principal_dis_para",
          ".collegeofeducation_int_Principal_aurthor"
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
    
        .to(".collegeofeducation_int_cover_img", {
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
    
        .to(".collegeofeducation_int_header_title", {
          y: 0,
          opacity: 1,
          duration: 1
        }, "-=0.5")
    
        .to(".collegeofeducation_int_para_title", {
          y: 0,
          opacity: 1,
          duration: 1
        }, "-=0.8");
    
        // =========================
        // MAIN TITLE SWIPE LEFT
        // STARTS ONLY AFTER READING
        // =========================
    
        gsap.to(".collegeofeducation_int_header", {
    
          xPercent: isMobile ? -60 : -120,
    
          opacity: 0.1,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".collegeofeducation_int_top_wrapper",
    
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
            trigger: ".collegeofeducation_int_top_wrapper",
    
            start: isMobile ? "top -60%" : "top -75%",
    
            end: "bottom top",
    
            scrub: 2.5,
    
            invalidateOnRefresh: true
          }
    
        });
    
        contentTl
    
        .to(".collegeofeducation_int_header_title", {
    
          x: isMobile ? 40 : 140,
    
          opacity: 0.5,
    
          ease: "none",
    
          duration: 1
    
        })
    
        .to(".collegeofeducation_int_para_title", {
    
          x: isMobile ? 60 : 200,
    
          opacity: 0,
    
          ease: "none",
    
          duration: 1
    
        }, "-=0.7");
    
        // =========================
        // SMALL IMAGE MORPH
        // =========================
    
        gsap.to(".collegeofeducation_int_sub_img", {
    
          y: 0,
    
          scale: 1,
    
          opacity: 1,
    
          borderRadius: "12px",
    
          stagger: 0.2,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".sml_collegeofeducation_int_imgwrapper",
    
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
    
        gsap.to(".collegeofeducation_int_cover_img", {
    
          yPercent: isMobile ? 8 : 18,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".collegeofeducation_int_top_wrapper",
    
            start: isMobile ? "top -55%" : "top -70%",
    
            end: "bottom top",
    
            scrub: 2,
    
            invalidateOnRefresh: true
          }
    
        });
    
        // =========================
        // PRINCIPAL HEADER REVEAL
        // =========================
    
        gsap.to(".collegeofeducation_int_Principal_header", {
    
          x: 0,
    
          opacity: 1,
    
          ease: "power3.out",
    
          scrollTrigger: {
            trigger: ".collegeofeducation_int_Principal_wrapper",
    
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
          ".collegeofeducation_int_Principal_dis_para",
          ".collegeofeducation_int_Principal_aurthor"
        ], {
    
          x: isMobile ? 120 : 320,
    
          opacity: 0,
    
          ease: "none",
    
          scrollTrigger: {
            trigger: ".collegeofeducation_int_Principal_wrapper",
    
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


    <div ref={container} className='collegeofeducation_container'>
       <h1 className='collegeofeducation_int_header'>college of education</h1>
 
 <div className="collegeofeducation_int_top_wrapper">


 <div className="collegeofeducation_int_layout_container">
 <div className="collegeofeducation_int_lhs_img_wrapper">
    <img  className='collegeofeducation_int_cover_img' src={collegeofeducation} alt="college of collegeofeducation" />

  </div>
  <div className="lhs_collegeofeducation_int_content_wrapper">
    <h3 className="collegeofeducation_int_header_title">“Shaping Future Educators with Knowledge and Values”</h3>
    <p className="collegeofeducation_int_para_title">The College of Education prepares students to become skilled and dedicated teachers through modern teaching methods, practical training, and strong professional values, shaping educators who can inspire young minds and make a positive impact in education.</p>
  <div className="sml_collegeofeducation_int_imgwrapper">
    <img  className='collegeofeducation_int_sub_img' src={subimgedu} alt="college of collegeofeducation" />
    <img  className='collegeofeducation_int_sub_img' src={subimgedu2} alt="college of collegeofeducation" />

  </div>
  </div>

 </div>

  
 </div>

 <div className="collegeofeducation_int_Principal_wrapper">

    <h1  className="collegeofeducation_int_Principal_header">Principal's Desk</h1>
    <div className="collegeofeducation_int_princ_card">

{/* principal img cards */}
<div className="collegeofeducation_int_principal_pfp_wrapper">
<img  className='collegeofeducation_int_Principal_img_pfp' src={collegeodeduprinc} alt="collegeofeducation" />
<p className="collegeofeducation_int_Principal_pfp">Dr.S.Pattammal M.A., M.A., M.phil., M.Ed., Ph.D., NET.,</p>
</div>
<div className="collegeofeducation_int_princ_card_sub">
<p  className="collegeofeducation_int_Principal_dis_para">At our College of Education, we prepare skilled and passionate educators through practical training and modern teaching methods, helping students become confident professionals who inspire and guide future generations.</p>
 <p className="collegeofeducation_int_Principal_aurthor">-Principal's message</p>
</div>

    </div>
 
  </div>
  

    <div className="collegeofeducationInstitutionLister_course_wrapper">
    {
     institutionData?.courses?.map((course) => (

        <div
          key={course.id}
          className={`collegeofeducation_course_card ${openCard === course.id ? "active_card" : ""}`}
          onClick={() =>
            handleCourseNavigate(
              institutionData.slug,
              course.slug
            )
          }
        >

          <div className="course_card_top">

            <h3 className='collegeofeducationLister_course_title'>{course.title}</h3>

            <CaretDown
              
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

export default CollegeOfEducation
