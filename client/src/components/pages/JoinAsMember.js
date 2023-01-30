import React from 'react'
import imageBackground from '../../assets/nature7.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from '../Footer.js';
import Countries from '../Countries';

const JoinAsMember = () => {
  return (
    <>
     <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>Contact Us</span>
            <div className='tab-detail-grid'>
              <div className='item'>
                <p>You can get in touch at the addresses and telephone numbers mentioned or fill in the form to contact us.</p>
              </div>
              <div className='item'>
                <div className="contact-main-right"> <PhoneIcon className='pl-3'/> <span className='pl-1' style={{"border":"none"}}></span>+91 1234567890 <EmailIcon className='pl-3'/> <span className='pl-1' style={{"border":"none"}}></span>Charuystg@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="contact-form-outline">
            <div className="contact-form-title">Write to us</div>
            <div className="contact-form-mandatory-field">* Fields are mandatory</div>
            <form action="">
            <div className="contact-grid">
              <div className="contact-grid-item contact-grid-title mt-4">
                Full Name*
              </div>
              <div className="contact-grid-item  mt-4">
                <input className='form-control'></input>
              </div>
              <div className="contact-grid-item contact-grid-title  mt-4">
                Email*
              </div>
              <div className="contact-grid-item  mt-4">
                <input className='form-control'></input>
              </div>
              <div className="contact-grid-item contact-grid-title  mt-4">
                Country*
              </div>
              <div className="contact-grid-item  mt-4">
                {<Countries/>}
              </div>
              <div className="contact-grid-item contact-grid-title mt-4">
                State
              </div>
              <div className="contact-grid-item mt-4">
                <input className='form-control'></input>
              </div>
              <div className="contact-grid-item contact-grid-title mt-4">
                City
              </div>
              <div className="contact-grid-item mt-4">
                <input className='form-control'></input>
              </div>
              <div className="contact-grid-item contact-grid-title mt-4">
                Occupation*
              </div>
              <div className="contact-grid-item mt-4">
                <input className='form-control'></input>
              </div>
              <div className="contact-grid-item contact-grid-title mt-4">
                Message*
              </div>
              <div className="contact-grid-item mt-4">
                <textarea className='form-control'></textarea>
              </div>
            </div>
            </form>
            <div className="submit-div">
            <button className='submit'>Submit</button>
            </div>
              
          </div>
          {<Footer/>}
        </div> 
      </div>
    </>
  )
}

export default JoinAsMember