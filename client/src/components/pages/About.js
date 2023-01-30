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
                {/* <p className='about-overview-p'>In 2011, we had an idea to help a few students who came from financially difficult backgrounds. So, we gave scholarships to 4 students. In the course of interaction with them, we realized the need for mentoring... on many fronts, like  communication skills, general knowledge, confidence building and awareness of opportunities</p> */}
                {/* <p className='about-overview-p'>The very next year, many family members joined us, the next year friends joined in. In 2017 we registered as an NGO called <b>Young Scholar Trust</b>. The SBI CAP joined us.</p> */}
                <p className='about-overview-p'>We had an idea to help a few students who came from financially difficult backgrounds. We wanted to make a difference in their lives and provide them with the support they needed to succeed. So, in <i>2011</i>, we gave scholarships to 4 students.</p>
                <p className='about-overview-p'>As we interacted with the students, we realized the need for mentoring in areas such as communication skills, general knowledge, confidence building, and awareness of opportunities. The students needed more than just financial assistance, they needed guidance and support.</p>
                <p className='about-overview-p'>The next year, family members of the original group joined in, and the year after that, friends joined in too. We were growing and making a bigger impact in the lives of the students we were helping. In 2017, we officially registered as an NGO called <b>Young Scholar Trust</b>.</p>
                <p className='about-overview-p'>The State Bank of India's Central Assistance for Programs <b>(SBI CAP)</b> also joined in support of our mission to provide scholarships and mentorship to students from financially difficult backgrounds. Together, we were making a significant difference in the lives of many young students and helping them achieve their dreams.</p>
                <p className='about-overview-p'>The students who received the scholarships and mentorship from Young Scholar Trust were able to overcome their financial difficulties and achieve their educational goals. They were able to secure good jobs and build better lives for themselves and their families. Our efforts have truly changed the lives of many students and their families.</p>
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