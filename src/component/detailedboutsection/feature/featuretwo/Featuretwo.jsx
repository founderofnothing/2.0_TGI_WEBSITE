import React from 'react'
import "./Featuretwo.css"

import computerlab from "../../../../assets/dummymac.png"
const Featuretwo = () => {
  return (
    <div className="feature_content_wrapper">
 <div className="dtlabout_feature_section_two">
<img  className='dtlabout_main_sec_contant_section_img' src={computerlab} alt="computerlab" />
<div className="dtlabout_feature_text_section">
  <h1 className="dtlabout_feature_sec_text_header">Fully Equipped Laboratory</h1>
  <p className="dtlabout_feature_sec_text_dis_para">A facility that is comprehensively furnished with all necessary tools, instruments, and resources required to conduct specific experiments, research, or educational activities effectively and safely.</p>
</div>
</div>
    </div>
   
  )
}

export default Featuretwo
