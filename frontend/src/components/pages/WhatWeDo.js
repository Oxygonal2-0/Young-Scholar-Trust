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
                <p className='about-overview-p'>Each sponsor comes in to educate one student.  The sponsor follows the progress through term letters from the student, as well as our reports.  Normally we take students in second year and finance them for three years, by providing rs 25000 each year</p>
                <p className='about-overview-p'>We have weekly classes online. The students are assigned mentors to take up language skills.  We have also have guest lectures who cover a variety of topics from acupressure to developing a positive mind set.</p>
                <p className='about-overview-p'>Some of our ex students come in to give advice on how to make the most of college and face work life after that</p>
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