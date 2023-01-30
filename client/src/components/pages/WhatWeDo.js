import React from 'react'
import imageBackground from '../../assets/nature4.jpg';
import Footer from '../Footer.js';
import ImageSlider from './ImageSlider.js';
import { SliderData } from './SliderData.js';

const WhatWeDo = () => {
  return (
    <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>What we do</span>
            <div className='tab-detail-grid'>
              <div className='item'>
                <h3 className='heading-title'>Overview</h3>
                <p className='about-overview-p'>We are a dedicated group of individuals who wanted to make a difference in the lives of young people. We knew that education was the key to unlocking one's full potential, and we wanted to ensure that no one was left behind.</p>
                <p className='about-overview-p'>Thus, we created a scholarship program that would sponsor students in their second year of college. These students were chosen based on their academic potential and their financial need. As the sponsors of the program, we would follow the progress of the students through term letters and reports, and provide financial assistance of Rs 25,000 each year for three years.</p>
                <p className='about-overview-p'>We organized weekly classes online for the students, with the aim of helping them develop their language skills. We assigned mentors to guide and support them, and invited guest speakers to talk about a wide range of topics, from acupressure to developing a positive mindset.</p>
                <p className='about-overview-p'>We also invited some of our past students to come and share their experiences and advice on how to make the most of college and face the challenges of work life after graduation. Thanks to our efforts, many of these students were able to achieve their dreams and make a positive impact on the world. We were proud to have played a small but important role in their success.</p>
              </div>
              <div className='item'>
                <div className='image-slider-impact'>
                  {<ImageSlider slides={SliderData} />}
                </div>
              </div>
            </div>
          </div>
          {<Footer/>}
        </div> 
      </div>
  )
}

export default WhatWeDo