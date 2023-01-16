import React from 'react'
// import {BsFillEnvelopeFill} from 'react-icons';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
  return (
    <>
    <div className="footer-main">
      <div style={{"margin-bottom": "25px"}}><span className="footer-main-title">CONTACT US</span></div>
      <div className="footer-main-main"> <PhoneIcon/> <span >+91 1234567890</span></div>
      <div className="footer-main-main"> <EmailIcon/> <span >Charuystg@gmail.com</span></div>
    </div>
    <div>© 2023 All Rights Reserved, Young Scholar Trust | Legal disclaimer | Sitemap | Developed By YST group</div>
    </>
  )
}

export default Footer