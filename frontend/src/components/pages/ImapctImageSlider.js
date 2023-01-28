import React, { useState } from 'react';
import { SliderData } from './SliderData';
import myProfilePhoto from '../../assets/myPhoto.jpg';
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
      <section className='slider item-motto1'>
        <MdOutlineKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
        <MdOutlineKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div>
                  <img src={myProfilePhoto} alt='' className='impact-image' />
                  <div className='slide-item-thought'> "I am writing to express my deepest gratitude for all the support you have provided to me and my family. Your financial assistance has been a lifesaver and has allowed us to overcome some of the toughest challenges we have faced. But your support has been about more than just money. Your kindness, compassion, and willingness to listen and understand our situation has meant the world to us. You have been a true partner in our journey and for that, we will always be grateful. Thank you for all that you do. Your generosity and support have made a profound impact on our lives, and we will never forget it. And a special thanks to Nandu Sir and Vijaya Ma’am, I wanted to take a moment to express my heartfelt gratitude for the love and care you have shown me. You have treated me like your own child and I couldn't have asked for a better role model and mentor. Your wisdom and guidance have helped me navigate through some of the toughest times in my life and I am forever grateful for your unwavering support. You have always been there for me, listening and offering words of encouragement when I needed it the most. I truly appreciate the time and effort you put into being a part of my life, and for always making me feel like I am a part of your family. Your love and kindness have made a profound impact on me and I will always treasure the memories we have shared together. Thank you for being an amazing parent figure and for everything you do. I am truly blessed to have you in my life."</div>
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