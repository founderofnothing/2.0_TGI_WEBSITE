import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ArrowRight,ArrowLeft} from "phosphor-react";
import { NavLink } from "react-router-dom";
import imgone from "../../assets/physiotherapycollege.webp";
import imgtwo from "../../assets/artsandscience.webp";
import imgfour from "../../assets/collegeof_nursing.webp";
import imgthree from "../../assets/collegeofeducation.webp";
import imgfive from "../../assets/paramedic.webp"
import "./ourinstitution.css"

const OurInstitutions = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
  
  
  
  
      // HEADER REVEAL
      gsap.from(".OurInstitution_header_title", {
  
        y: 80,
  
        opacity: 0,
  
        duration: 1.2,
  
        ease: "power3.out",
  
        scrollTrigger: {
  
          trigger: ".OurInstitution_container",
  
          start: "top 90%",
  
          end: "top 55%",
  
          scrub: 1,
  
        }
  
      });
  
  
  
  
  
  
  
  
      // EACH CARD ANIMATION
      gsap.utils.toArray(".our_int_card").forEach((card) => {
  
        const title =
          card.querySelector(".our_int_card_title");
  
        const para =
          card.querySelector(".our_int_card_dis");
  
        const img =
          card.querySelector(".our_int_img_banner");
  
        const subtext =
          card.querySelector(".our_int_card_subtext");
  
  
  
  
        const tl = gsap.timeline({
  
          scrollTrigger: {
  
            trigger: card,
  
            start: "top 85%",
  
            end: "top 35%",
  
            scrub: 1,
  
          }
  
        });
  
  
  
  
  
  
  
        // TITLE
        tl.from(title, {
  
          y: 60,
  
          opacity: 0,
  
          duration: 1,
  
          ease: "power3.out",
  
        })
  
  
  
  
  
  
  
        // DESCRIPTION
        .from(para, {
  
          x: -80,
  
          opacity: 0,
  
          duration: 1,
  
          ease: "power2.out",
  
        }, "-=0.6")
  
  
  
  
  
  
  
  
        // IMAGE
        .from(img, {
  
          scale: 1.15,
  
          y: 100,
  
          opacity: 0,
  
          duration: 1.4,
  
          ease: "power3.out",
  
        }, "-=0.5")
  
  
  
  
  
  
  
  
        // SUBTEXT
        .from(subtext, {
  
          y: 40,
  
          opacity: 0,
  
          duration: 0.8,
  
          ease: "power2.out",
  
        }, "-=0.8");
  
      });
  
  
  
  
  
  
  
  
  
      // CTA ICON FLOAT
      gsap.to(".our_int_cards_icons", {
  
        y: -6,
  
        repeat: -1,
  
        yoyo: true,
  
        duration: 1.4,
  
        ease: "power1.inOut",
  
      });
  
  
  
  
    });
  
    return () => ctx.revert();
  
  }, []);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  };

  return (
    <div className='OurInstitution_container'>
      <h1 className='OurInstitution_header_title'>our institution</h1>

      <div className="our_int_cards_wrapper"  ref={sliderRef}>
      

      


      <NavLink to="/Institutions/collegeofeducation" className="our_int_card">
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >collegeofeducation</h3>
        <h6 className='our_int_card_dis'>The College of Education prepares students to become skilled and dedicated teachers. It focuses on modern teaching methods, practical training,</h6>
      </div>

     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section">
      <img  className='our_int_img_banner' src={imgthree} alt="college of nursing" />

      </div>
      <h3 className='our_int_card_subtext'>“Shaping Future Educators with Knowledge”</h3>
     </div>
     

      </NavLink>


      <NavLink to="/Institutions/nursing" className="our_int_card">
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >college of nursing</h3>
        <h6 className='our_int_card_dis'>The College of Nursing is committed to training students in the field of healthcare with a strong focus on compassion and service.</h6>
      </div>

     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section">
      <img  className='our_int_img_banner' src={imgfour} alt="college of education" />

      </div>
      <h3 className='our_int_card_subtext'>“Care, Compassion, and Commitment to Health”</h3>
     </div>
     

      </NavLink>


      <NavLink to='/Institutions/artsandscience' className="our_int_card">
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >Arts and Science College for Women</h3>
        <h6 className='our_int_card_dis'>Thiravium College of Arts and Science for Women is dedicated to empowering young women through quality higher education. The college offers a wide range of programmes.</h6>
      </div>

     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section">
      <img  className='our_int_img_banner' src={imgtwo} alt="college of arts and science" />

      </div>
      <h3 className='our_int_card_subtext'>“Empowering Women Through Education”</h3>
     </div>
     

      </NavLink>

      <NavLink to='/Institutions/paramedicalcollege' className="our_int_card">
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >college of paramedicalcollege</h3>
        <h6 className='our_int_card_dis'>At Thiravium College of Paramedical Sciences, we prepare students with practical knowledge, clinical skills, and compassionate care to excel in the healthcare field.</h6>
      </div>

      {/* img section */}
     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section">
      <img  className='para_our_int_img_banner' src={imgfive} alt="college of paramedic" />
      </div>
      <h3 className='our_int_card_subtext'>“Precision in Imaging, Excellence in Care.”</h3>
     </div>
     {/* <div className="our_int_cards_move_cta_wrapper">
     <ArrowLeft className="our_int_cards_icons" />
     <ArrowRight className="our_int_cards_icons" />
     </div> */}

      </NavLink>



      <NavLink to='/Institutions/collegeofPhysiotherapy' className="our_int_card">
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >college of physiotherapy</h3>
        <h6 className='our_int_card_dis'>The College of Physiotherapy provides quality education in physical rehabilitation and therapy. It offers both theoretical learning and practical training to help students understand patient care and recovery</h6>
      </div>

      {/* img section */}
     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section">
      <img  className='our_int_img_banner' src={imgone} alt="college of physiotherapy" />
      </div>
      <h3 className='our_int_card_subtext'>“Restoring Health, Improving Lives”</h3>
     </div>
     {/* <div className="our_int_cards_move_cta_wrapper">
     <ArrowLeft className="our_int_cards_icons" />
     <ArrowRight className="our_int_cards_icons" />
     </div> */}

      </NavLink>

      </div>


      





      <div className="our_int_cards_move_cta_wrapper">
     <ArrowLeft className="our_int_cards_icons"   onClick={scrollLeft} />
     <ArrowRight className="our_int_cards_icons" onClick={scrollRight} />
     </div>
     
    </div>
  )
}

export default OurInstitutions


// edu ,nrs ,artsans servce ,para phy