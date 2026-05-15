import React from 'react'
import "./featurethree.css"

import books from "../../../../assets/books_img.webp"

const Featurethree = () => {
  return (
    <div className="dtlabout_feature_section_three">
  <h1  className="dtlabout_feature_section_three_header">Big Library</h1>
  <div className="dtlabout_feature_imgthree_secwrapper">
    <p className="dtlabout_feature_thr_dis_fieldone">There is a Large Library with a Vast collection of books.</p>
    <div className="dtl_abt_feature_bookimg_wrapper">
    <img  className='dtlabout_main_three_contant_section_img' src={books} alt="books" />

    </div>

    <p className="dtlabout_feature_thr_dis_fieldtwo">Labelled racks are provided for easy identification</p>

  </div>
</div>
  )
}

export default Featurethree
