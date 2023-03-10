import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';


const ImageSlider = ({ slides }) => {
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

  return (
    <section className='slider item-motto'>
      <MdOutlineKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
      <MdOutlineKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <div>
                <img src={slide.image} alt='' className='image' />
                <div className='slide-item-thought'>"{slide.thought}"</div>
                <div className='slide-item-title'>- {slide.title} </div>
              </div>      
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
