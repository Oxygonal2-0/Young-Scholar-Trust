import React from 'react'
import imageBackground from '../../assets/nature2.jpg';
import Footer from '../Footer.js';

const About = () => {
  return (
      <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>About Young Scholar Trust</span>
            <div className='tab-detail-grid'>
              <div className='item'>
                <h3 className='heading-title'>Overview</h3>
                <p className='about-overview-p'>In 2011, we had an idea to help a few students who came from financially difficult backgrounds. So, we gave scholarships to 4 students. In the course of interaction with them, we realized the need for mentoring... on many fronts, like  communication skills, general knowledge, confidence building and awareness of opportunities</p>
                <p className='about-overview-p'>The very next year, many family members joined us, the next year friends joined in. In 2017 we registered as an NGO called <b>Young Scholar Trust</b>. The SBI CAP joined us.</p>
              </div>
              <div className='item'>
                <div className='item-motto'>
                  If you wish to help a man, never think what that man’s attitude should be towards you. If you want to do a great or a good work, do not trouble to think what the result will be.
                  <p>- Swami Vivekananda</p>
                </div>
              </div>
            </div>
          </div>
          {<Footer/>}
        </div> 
      </div>
  )
}

export default About

{/* <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>About Young Scholar Trust</span>
            <div className='tab-detail-grid'>
              <div className='item'>
                <h3 className='heading-title'>Overview</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, necessitatibus. Rerum modi odit dolorem accusamus, nemo cum autem quia molestiae qui harum corrupti reiciendis! Officia, fugit ipsa! Dolorem, facere, molestiae culpa ipsum ad a at eligendi, eum consequuntur dignissimos nihil perspiciatis iusto! Nobis sint placeat voluptate accusantium, veniam quasi facere?</p>
              </div>
              <div className='item'>
                <div className='item-motto'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum maiores dolore nobis corrupti temporibus, totam ullam sit, quibusdam nemo magni aperiam accusantium alias, ut inventore! Eum harum quasi laboriosam quaerat mollitia numquam molestias porro ad, in dolore, dolor perferendis inventore at eius, molestiae voluptates! Neque id nesciunt quidem voluptates molestias.
                  <p>- Oxygonal</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}