import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "phosphor-react";


import './aboutsection.css'
import { NavLink } from 'react-router-dom';
const AboutSection = () => {
  const textRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
  
      // TITLE ANIMATION
      gsap.from(".abt_title_text", {
  
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
  
        scrollTrigger: {
          trigger: ".about_container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
  
      });
  
  
  
  
      // SMALL PARA ANIMATION
      gsap.from(".abt_sml_text_para", {
  
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
  
        scrollTrigger: {
          trigger: ".abt_sml_text_para",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
  
      });
  
  
  
  
      // WRAP WORDS
      textRef.current.forEach((element) => {
  
        if (!element) return;
  
        const wrapWords = (node) => {
  
          if (node.nodeType === 3) {
  
            const words = node.textContent
              .split(" ")
              .map(word => `<span class="word">${word}</span>`)
              .join(" ");
  
            const span = document.createElement("span");
  
            span.innerHTML = words;
  
            node.replaceWith(span);
  
          }
  
          else if (node.nodeType === 1) {
  
            [...node.childNodes].forEach(child => wrapWords(child));
  
          }
  
        };
  
        wrapWords(element);
  
      });
  
  
  
  
      // WORD SELECTION
      const firstWords =
        textRef.current[0].querySelectorAll(".word");
  
      const secondWords =
        textRef.current[1].querySelectorAll(".word");
  
  
  
  
      // TIMELINE
      const tl = gsap.timeline({

        scrollTrigger: {
      
          trigger: ".abt_sec_para_wrapper",

  start: "top 70%",

  end: "center 45%",

  scrub: 1,
        }
      
      });
      
      
  
  
      tl.from(firstWords, {

        opacity: 0,
      
        y: 18,
      
        stagger: 0.04,
      
        ease: "power2.out",
      
        duration: 2,
      
      })
      
      
      
      
      // SECOND PARA
      .from(secondWords, {
      
        opacity: 0,
      
        y: 18,
      
        stagger: 0.035,
      
        ease: "power2.out",
      
        duration: 1.8,
      
      }, "+=0.3");
  
  
    });
  
    return () => ctx.revert();
  
  }, []);

  return (
    <div className='about_container'>
      <h2 className='abt_title_text'>about</h2>
      <div className="abt_lhs_wrapper">
        <p className='abt_sml_text_para'>dedicated to academic excellence,character formation,and the empowerment of women.</p>
        <div className="abt_sec_para_wrapper">
        <h2 className='abt_big_dis' ref={(el) => textRef.current[0] = el}>Guided by the ideals of knowledge, discipline,and empowerment,  <span className='abt_big_dis_hlg'>  to promote academic excellence and holistic development among young women.</span> The institution firmly believes that education is a powerful tool for personal growth and social transformation</h2>
        <h2 className='abt_big_dis'  ref={(el) => textRef.current[1] = el}>Through its commitment to quality higher education, the college aims to nurture responsible citizens who contribute meaningfully to society.</h2>
    

        <div className="abt_cta_wrapper">
      <NavLink to="/about" className="abt_cta_text_field"> see more</NavLink>
      <ArrowRight className="abt_cta_icon"/>
      </div>

      </div>
      </div>
     
      
     
 


    </div>
  )
}

export default AboutSection
