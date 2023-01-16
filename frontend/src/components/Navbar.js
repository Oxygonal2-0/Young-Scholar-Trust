import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-outline navbar-tabs-text'>
      <div>Navbar Logo</div>
      <div>
        <ul className='navbar-list-items'>
          <li><Link to="about" className='li-link'>About</Link></li>
          <li><Link to="what-we-do" className='li-link'>What we do</Link></li>
          <li><Link to="our-work" className='li-link'>Our Work</Link></li>
          <li><Link to="impact" className='li-link'>Impacts</Link></li>
          <li><Link to="gallery" className='li-link'>Gallery</Link></li>
          {/* <li><Link to="" className='li-link'>Get Involved</Link></li> */}
          <li><span className='get-involved-title li-link'>Get Involved <ul className='get-involved-tabs'><li><Link to="join-student" className='involved-link'>As a Student</Link></li><li><Link to="join-member" className='involved-link'>As a Member</Link></li></ul></span></li>
          <li><Link to="contact" className='li-link'>Contact Us</Link></li>
          <li><Link to="faq" className='li-link'>FAQ</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar