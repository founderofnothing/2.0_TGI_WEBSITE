// import React from 'react'
// import "./singlecoursepage.css"
// const SingleCoursepage = () => {
//   return (
//     <div className="single_coursepage_container">
//         <div className="lhs_sngl_wrapper">
//     {/* <img  className='collegeofphysiotherapy_int_sub_img' src={subimgphy} alt="college of collegeofphysiotherapy" /> */}

//         </div>

//         <div className="rhs_sngl_wrapper">
//             <h1 className="single_course_title_header">
//                 b.com ca
//             </h1>
//             <p className='sngl_course_dis_para'>
//                 In this Great Institute, our Students are surrounded by Astonishing resources – a learned and caring faculty, a well – Stocked library, superb sports facilities and Extra – curricular opportunities covering every conceivable interact from Entrepreneurship to community service. They have complete freedom to Explore and to Learn about 
//                 </p>
            
//         </div>
//     </div>
//   )
// }

// export default SingleCoursepage

import React, { useEffect, useState } from 'react';
import "./singlecoursepage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleCoursepage = () => {

  // ==========================================
  // GET URL PARAMS
  // ==========================================

  const { institutionSlug, courseSlug } = useParams();


  // ==========================================
  // STATES
  // ==========================================

  const [courseData, setCourseData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // ==========================================
  // FETCH SINGLE COURSE
  // ==========================================

  useEffect(() => {

    const fetchSingleCourse = async () => {

      try {

        console.log("FETCHING SINGLE COURSE...");

        const response = await axios.get(

          `${import.meta.env.VITE_API_URL}/wp-json/tgi/v1/institutions/${institutionSlug}/courses/${courseSlug}?t=${Date.now()}`,

          {
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }

        );

        console.log("SINGLE COURSE DATA:", response.data);

        setCourseData(response.data);

      } catch (error) {

        console.log("FULL ERROR:", error);

        setError(error);

      } finally {

        setLoading(false);

      }

    };

    fetchSingleCourse();

  }, [institutionSlug, courseSlug]);


  // ==========================================
  // LOADING UI
  // ==========================================

  if (loading) {

    return (

      <div className="single_coursepage_container">

        <h1>Loading...</h1>

      </div>

    );

  }


  // ==========================================
  // ERROR UI
  // ==========================================

  if (error) {

    return (

      <div className="single_coursepage_container">

        <h1>Something went wrong...</h1>

      </div>

    );

  }


  // ==========================================
  // JSX
  // ==========================================

  return (

    <div className="single_coursepage_container">

      {/* ========================================== */}
      {/* LEFT SIDE */}
      {/* ========================================== */}

      <div className="lhs_sngl_wrapper">

        {/* OPTIONAL COURSE IMAGE */}

        {/* 
        <img
          className='single_course_img'
          src={courseImage}
          alt={courseData?.course?.title}
        />
        */}

      </div>


      {/* ========================================== */}
      {/* RIGHT SIDE */}
      {/* ========================================== */}

      <div className="rhs_sngl_wrapper">

        {/* INSTITUTION NAME */}

        <p className="single_course_institution_name">


        </p>


        {/* COURSE TITLE */}

        <h1 className="single_course_title_header">

          {courseData?.course?.title}

        </h1>


        {/* COURSE DESCRIPTION */}

        <p className='sngl_course_dis_para'>

          {courseData?.course?.description}

        </p>

      </div>

    </div>

  );

};

export default SingleCoursepage;


// tester