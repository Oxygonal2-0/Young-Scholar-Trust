import React from 'react'
import imageBackground from '../../assets/nature1.jpg';
import Footer from '../Footer.js';

import ImapctImageSlider from './ImapctImageSlider';
import { SliderData } from './SliderData.js';

const Impact = () => {
  return (
    <>
    <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>Impacts</span>
            <div className='image-slider-impact'>
                {<ImapctImageSlider slides={SliderData} />}
            </div>
            
          </div>
          {<Footer/>}
        </div> 
      </div>
    </>
  )
}

export default Impact