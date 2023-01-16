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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, necessitatibus. Rerum modi odit dolorem accusamus, nemo cum autem quia molestiae qui harum corrupti reiciendis! Officia, fugit ipsa! Dolorem, facere, molestiae culpa ipsum ad a at eligendi, eum consequuntur dignissimos nihil perspiciatis iusto! Nobis sint placeat voluptate accusantium, veniam quasi facere?</p>
              </div>
              <div className='item'>
                <div className='item-motto'>
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