import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import our_campus from "../../assets/our_campus.webp";
import { ArrowUp } from "phosphor-react";

import './detailedabout.css'
import {CaretRight} from "phosphor-react";

// img 
// top about section img

import abtsecimg from "../../assets/top_view_campus.webp";



import Featureone from "./feature/featureone/Featureone";
import Featuretwo from "./feature/featuretwo/Featuretwo";
import Featurethree from "./feature/featurethree/Featurethree";

// import SafeEnv from "./spllisting/ssenv/SafeEnv";
import CarrComponent from "./spllisting/carr/CarrComponent";


import Faculty from "./spllisting/faculty/Faculty";
import Specialenv from "./spllisting/specialenv/specialenv";
// import SafeEnv from "./spllisting/ssenv/Safeenv";

// import Secretary from"../../assets/Secretary.webp";
// import Director  from"../../assets/Director.jpg";
// import Chairman from "../../assets/chairman.webp"



const DetailedAbout = () => {
gsap.registerPlugin(ScrollTrigger);


useEffect(() => {

  gsap.from(".DetailedAbout_mng_card", {
    x: 120,
    opacity: 0,
    scale: 0.95,
    stagger: 0.25,
    ease: "none",

    scrollTrigger: {
      trigger: ".DetailedAbout_mng_cards",
      start: "top 85%",
      end: "top 30%",
      scrub: 1,
    }
  });

}, []);


  return (
    <div className='DetailedAbout_container'>
   <div className="top_detailabout_section_wrapper">

    <div className="lhs_nav_dtlabout_container">
    <h1 className="dtlabout_text_header">about us</h1>
    <div className="dtlabout_cta_wrapper">
<ArrowUp/>

<p className="dtlabout_cta_text_field">scroll down</p>
</div>

    </div>
    <div className="dtlabout_text_wrapper">
<p className="dtlabout_text_dis_para">Thiravium Group of Institutions is a trusted centre of learning with over 30 years of excellence in education. </p>
<p className="dtlabout_text_dis_para">The group is committed to providing quality education across multiple disciplines, ensuring that students receive both knowledge and practical </p>
    </div>
    <img  className='dtlabout_section_img' src={abtsecimg} alt="campus_drone_shot" />

<p className="dtlabout_text_exp_discription">
Guided by the ideals of knowledge, discipline, and empowerment, Thiravium College of Arts and Science for Women strives to promote academic excellence and holistic development among young women. The institution firmly believes that education is a powerful tool for personal growth and social transformation
</p>



 </div>

{/* feature container */}
<Featureone/>
<Featuretwo/>
<Featurethree/>

<Faculty/>
<Specialenv/>
<CarrComponent/>











    </div>
  )
}

export default DetailedAbout


