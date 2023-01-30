import React from 'react';
import imageBackground from '../../assets/nature2.jpg';
import Footer from '../Footer.js';
import GalleryImagesSlider from './GalleryImagesSlider';
import { SliderData } from './SliderData';

const Gallery = () => {
  return (
    <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span className='gallery-span'>Gallery</span>
            <h3 className='gallery-heading-title'>Our previous batches</h3>
            <div className='image-slider-impact'>
              {<GalleryImagesSlider slides={SliderData} />}
            </div>
          </div>
          {<Footer/>}
        </div> 
      </div>
  )
}

export default Gallery