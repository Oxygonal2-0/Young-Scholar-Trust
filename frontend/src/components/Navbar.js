import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../Navbar.css';
import '../Responsive.css';
import { FaBars, FaTimes } from "react-icons/fa";
import {MdOutlineKeyboardArrowDown } from 'react-icons/md';

const handleClick = () =>
{
  var list_items = document.getElementById('navbar-list-items').classList;
  if(list_items[1] === 'hide-navbar')
  {
    list_items.remove('hide-navbar');
    list_items.add('show-navbar');
  }
  else{
    list_items.remove('show-navbar');
    list_items.add('hide-navbar');
  }
}


const removeNavbar = (index) => {
  var list_items = document.getElementById('navbar-list-items').classList;
  list_items.remove('show-navbar');
  list_items.add('hide-navbar'); 
  var li_items = document.getElementsByClassName('li-link');
  for (let i = 0; i < li_items.length; i++) {
    li_items[i].classList.remove('active-link');
  }
  console.log(index)
  li_items[index].classList.add('active-link');
}

const Navbar = () => {
  return (
    <div className='navbar-outline navbar-tabs-text'>
      <div>Young Scholar Trust</div>
      <div className='navbar-list-items-div'>
        <ul className='navbar-list-items hide-navbar' id='navbar-list-items'>
          <li><Link to="about" className='li-link' onClick={() => removeNavbar(0)}>About</Link></li>
          <li><Link to="what-we-do" className='li-link' onClick={() => removeNavbar(1)}>What we do</Link></li>
          <li><Link to="impact" className='li-link' onClick={() => removeNavbar(2)}>Impacts</Link></li>
          <li><Link to="gallery" className='li-link' onClick={() => removeNavbar(3)}>Gallery</Link></li>
          {/* <li><span className='get-involved-title-span li-link' onClick={removeNavbar}><span>Get Involved</span><button className='get-involved-arrow'><MdOutlineKeyboardArrowDown/></button></span></li> */}
          <li><span className='get-involved-title li-link' onClick={removeNavbar}>Get Involved <ul className='get-involved-tabs'><li><Link to="join-student" className='involved-link'>As a Student</Link></li><li><Link to="join-member" className='involved-link'>As a Member</Link></li></ul></span></li>
          <li><Link to="contact" className='li-link' onClick={() => removeNavbar(5)}>Contact Us</Link></li>
          <li><Link to="faq" className='li-link' onClick={() => removeNavbar(6)}>FAQ</Link></li>
        </ul>
      </div>
      <div className='navbar-list-items-bars' onClick={handleClick}><FaBars className='navbar-list-items-bars-icon' /></div>
    </div>
  )
}

export default Navbar