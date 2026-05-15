import React from 'react'
import "./featureone.css"

import wifirouter from "../../../../assets/wifi_router.webp";
const Featureone = () => {
  return (
    <div className="dtlabout_feature_section">
  <div className="dtl_aboutsection_dept_card">
    <h2 className="dtl_aboutsection_dept_card_title" >Modern Infrastructure</h2>
  </div>

  <div className="dtl_about_contant_main_wrapper">
    <h2 className="dtl_about_contant_main_titleone">wifi enabled</h2>
    <div className="dtl_img_main_hrchy">
    <img  className='dtlabout_main_contant_section_img' src={wifirouter} alt="wifirouter" />

    </div>

    <h2 className="dtl_about_contant_main_titletwo">computer lab</h2>

  </div>
  <p  className='dtlabout_main_contant_dis_para'>A Wi-Fi-enabled computer lab integrates wireless internet connectivity into the educational environment, offering numerous advantages that enhance both teaching and learning experiences.</p>
</div>
  )
}

export default Featureone
