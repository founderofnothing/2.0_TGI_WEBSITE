import React from 'react'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Books ,ChalkboardTeacher ,TreeStructure ,Plugs ,CaretRight} from "phosphor-react";
import './Infrastructure.css'
const Infrastructure = () => {
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    // =========================
    // 🔹 TOP SECTION ANIMATION
    // =========================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".top_Infrastructure_wrapper",
        start: "top 80%",
        end: "top 30%",
        scrub: true, // 🔥 scroll controlled
      },
    });
  
    // 👉 Title (LEFT → center)
    tl.from(".Infrastructure_title_text", {
      x: -80,
      opacity: 0,
      ease: "none",
    });
  
    // 👉 Paragraph (BOTTOM → up)
    tl.from(".Infrastructure_title_para", {
      y: 50,
      opacity: 0,
      ease: "none",
    }, "-=0.2");
  
  
    // =========================
    // 🔹 CARDS ANIMATION
    // =========================
    gsap.from(".Infrastructure_cards", {
      x: 120, // 👉 from RIGHT
      opacity: 0,
      stagger: 0.2, // 🔥 delay between cards
      ease: "none",
      scrollTrigger: {
        trigger: ".btm_Infrastructure_wrapper",
        start: "top 85%",
        end: "top 20%",
        scrub: true, // 🔥 forward + reverse
      },
    });
  
  }, []);
  return (
    <div className='Infrastructure_container'>
      <div className="top_Infrastructure_wrapper">
        <h3 className='Infrastructure_title_text'>Modern Infrastructure</h3>
        <p className='Infrastructure_title_para'>our institution focuses on building knowledge, skills, and values for a successful future</p>
      </div>
      <div className="btm_Infrastructure_wrapper">


        <div className="Infrastructure_cards">
            <div className="rhs_Infrastructure_cirlce">
            <ChalkboardTeacher  weight="fill" />
            
            </div>
            <div className="Infrastructure_cards_text_wrapper">
            <h2 className="Infrastructure_cards_title">spacious classroom</h2>
            <p className="Infrastructure_cards_para">Spacious classrooms with smart learning facilities</p>
            </div>
           
            <CaretRight />
        </div>


        <div className="Infrastructure_cards">
            <div className="rhs_Infrastructure_cirlce">
            <Plugs  weight="fill" />
            
            </div>
            <div className="Infrastructure_cards_text_wrapper">
            <h2 className="Infrastructure_cards_title">Experienced Faculty</h2>
            <p className="Infrastructure_cards_para"> ensuring both academic excellence and professional development</p>
            </div>
           
            <CaretRight />
        </div>


        <div className="Infrastructure_cards">
            <div className="rhs_Infrastructure_cirlce">
            <TreeStructure  weight="fill" />
            
            </div>
            <div className="Infrastructure_cards_text_wrapper">
            <h2 className="Infrastructure_cards_title">modern lab</h2>
            <p className="Infrastructure_cards_para"> Well-equipped laboratories for practical training</p>
            </div>
           
            <CaretRight />
        </div>


        <div className="Infrastructure_cards">
            <div className="rhs_Infrastructure_cirlce">
            <Books  weight="fill" />
            
            </div>
            <div className="Infrastructure_cards_text_wrapper">
            <h2 className="Infrastructure_cards_title">huge library</h2>
            <p className="Infrastructure_cards_para">Library with rich academic resources Clinical</p>
            </div>
           
            <CaretRight />
        </div>
      </div>
    </div>
  )
}

export default Infrastructure


{/* <ChalkboardTeacher weight="fill" />
            <TreeStructure weight="fill" />
            <Plugs weight="fill" /> */}