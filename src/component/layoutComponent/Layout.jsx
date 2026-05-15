import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../navComponent/Navbar'
import Footer from '../footerComponent/Footer'


import './Layout.css'
const Layout = ( ) => {
  return (
    <div className='layout_container'>
      <Navbar/>

      <main className='layout_component_main'>
      <Outlet />
      </main>

      <Footer/>
    </div>
  )
}

export default Layout
