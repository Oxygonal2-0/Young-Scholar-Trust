import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';


const ImapctImageSlider = ({slides}) => {
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
                  <img src={slide.image} alt='' className='impact-image' />
                  <div className='slide-item-thought'> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, facere? Nulla exercitationem pariatur libero doloribus, eius labore maiores totam laboriosam consequuntur voluptas? Repudiandae porro iusto impedit doloremque. Eos libero illo id nam quibusdam hic sint consequatur cum aperiam incidunt corporis iste, quaerat vero impedit voluptas ex esse saepe! Sint, neque?"</div>
                  {/* <div className='slide-item-thought'>"{slide.thought}"</div> */}
                  <div className='slide-item-title'>- {slide.title} </div>
                </div>      
              )}
            </div>
          );
        })}
        
      </section>

    );
}

export default ImapctImageSlider