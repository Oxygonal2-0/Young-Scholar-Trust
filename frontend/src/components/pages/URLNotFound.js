import React from 'react';
import Navbar from '../Navbar';
import urlNotFound from '../../assets/URLNOTFOUND.png';
import Footer from '../Footer.js';

const URLNotFound = () => {
  return (
    <>
    <Navbar/>
    <div className='url-not-found-div'><img src={urlNotFound} alt="URL NOT FOUND" /></div>
    <Footer/>
    </>
  )
}

export default URLNotFound