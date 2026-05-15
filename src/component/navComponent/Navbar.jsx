import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall ,List ,X ,CaretDoubleRight} from "phosphor-react";
import logo from '../../assets/tgi_logo.svg';
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [lockedDropdown, setLockedDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  // Handle click (lock/unlock dropdown)
  const handleClick = (menu) => {
    if (lockedDropdown === menu) {
      setLockedDropdown(null);
      setOpenDropdown(null);
    } else {
      setLockedDropdown(menu);
      setOpenDropdown(menu);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setLockedDropdown(null);
    setOpenDropdown(null);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setLockedDropdown(null);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className='nav_container' ref={navRef}>

      {/* Left side */}
      <div className="lhs_nav_wrapper">
        <img className='clg_logo' src={logo} alt="logo" />
        <h1 className='logo_text_field'>Thiravium Group of Institutions</h1>
      </div>

<div className="menu_slider_wrapper">

 <List 
    className='slider_menu_icon'
    onClick={() => setIsMenuOpen(true)}
  />
  {/* Right side */}
    
<div  className={`menu_lister ${isMenuOpen ? "active" : ""}`}>
<div className="menu_close_wrapper">
      <X 
        className='slider_menu_icon'
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
      <NavLink   onClick={closeMenu}
 to='/' className='menu_item'>
        <h3 className='menu_text_field'>home</h3>
      </NavLink>

      <NavLink
        onClick={closeMenu}

      to="/about" className='menu_item'>
        <h3 className='menu_text_field'>about</h3>
      </NavLink>

      <NavLink    
 className='menu_item'>
      <div
  className="menu_dropdown_trigger"
  onMouseEnter={() => !lockedDropdown && setOpenDropdown("management")}
  onMouseLeave={() => !lockedDropdown && setOpenDropdown(null)}
  onClick={() => handleClick("management")}
>
  <h3 className='menu_text_field'>management</h3>

  {/* Dropdown */}
  {openDropdown === "management" && (
    <div className="nav_dropdown_menu">
      <div className="nav_dp_wrapper_container">
      <NavLink    onClick={closeMenu}
 to="/managment/chairman" className="dropdown_item">
        <div className="menu_dp_cards">
          <h1 className='dp_title_text'>Chairman</h1>
          {/* <div className="pfp_wrapper">
            <h4 className='dp_pfp_text'>pandiyan</h4>
            <CaretDoubleRight className='dp_pfp_icons' />
          </div> */}
        </div>
        
        </NavLink>





        <NavLink   onClick={closeMenu}
 to="/managment/director" className="dropdown_item">
        <div className="menu_dp_cards">
          <h1 className='dp_title_text'>Director</h1>
          {/* <div className="pfp_wrapper">
            <h4 className='dp_pfp_text'> Judah</h4>
            <CaretDoubleRight className='dp_pfp_icons' />
          </div> */}
        </div>
        
        </NavLink>

        <NavLink   onClick={closeMenu}
 to="/managment/Secretary" className="dropdown_item">
        <div className="menu_dp_cards">
          <h1 className='dp_title_text'>Secretary</h1>
          {/* <div className="pfp_wrapper">
            <h4 className='dp_pfp_text'>Hemalatha Pandiaraj</h4>
            <CaretDoubleRight className='dp_pfp_icons' />
          </div> */}
        </div>
        
        </NavLink>

      </div>
    




      
    </div>
  )}
</div>
      </NavLink>

      <NavLink  
  className='menu_item'>
      <div
  className="menu_item"
  onMouseEnter={() => !lockedDropdown && setOpenDropdown("institutions")}
  onMouseLeave={() => !lockedDropdown && setOpenDropdown(null)}
  onClick={() => handleClick("institutions")}
>
  <h3 className='menu_text_field'>our institutions</h3>

  {openDropdown === "institutions" && (
    <div className="sec_nav_dropdown_menu">

      <div className="sec_nav_cards_wrapper">
          <NavLink   onClick={closeMenu}
 to ="/Institutions/artsandscience" className="dropdown_item"><h3 className='sec_nav_text_field'>College of Arts and Science for Women </h3></NavLink>
      <NavLink
        onClick={closeMenu}

      to="/Institutions/nursing" className="dropdown_item"><h3  className='sec_nav_text_field'>college of nursing</h3></NavLink>
      <NavLink 
        onClick={closeMenu}

      to="/Institutions/collegeofPhysiotherapy" className="dropdown_item"><h3  className='sec_nav_text_field'>college of physiotherapy (co-ed) </h3></NavLink>
      <NavLink 
        onClick={closeMenu}

       to="/Institutions/collegeofeducation" className="dropdown_item"><h3  className='sec_nav_text_field'>College of Education </h3>
</NavLink>
<NavLink 
        onClick={closeMenu}

       to="/Institutions/paramedicalcollege" className="dropdown_item"><h3  className='sec_nav_text_field'>Thiravium Paramedical College </h3>
</NavLink>

{/* Thiravium Paramedical College */}

      </div>
    

    </div>
  )}
</div>
      </NavLink>

      <NavLink 
        onClick={closeMenu}

      className='menu_item'>
        <h3 className='menu_text_field'>courses</h3>
      </NavLink>

      <NavLink   onClick={closeMenu}
 className='menu_item'>
        <h3 className='menu_text_field'>gallery</h3>
      </NavLink>
     </div>
     {/* <div className="sec_cta_container">
      <h3 className='sec_cta_text_field'>contact</h3>
      <PhoneCall className='sec_cta_icon' />
     </div> */}
</div>
      
    </div>
  );
};

export default Navbar;