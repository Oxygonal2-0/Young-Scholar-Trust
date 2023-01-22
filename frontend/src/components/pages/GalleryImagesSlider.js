import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const GalleryImagesSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (<>
    </>

    );
}

export default GalleryImagesSlider

{/* //   <section className='slider gallery-item-motto'>
    //     <MdOutlineKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
    //     <MdOutlineKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
    //     {SliderData.map((slide, index) => {
    //       return (
    //         <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //           {index === current && (
    //             <div className='gallery-slider-item-div'>
    //               <img src={slide.image} alt='' className='gallery-impact-image' />
    //               <div className='slide-item-title'>- {slide.title} </div>
    //             </div>      
    //           )}
    //         </div>
    //       );
    //     })}
        
    //   </section> */}