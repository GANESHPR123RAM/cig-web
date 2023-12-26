import React from 'react'
import AboutPagebg from '../Images/Group 3.png'
import './AboutPage1.css'
import svg1 from './svg/svg1.svg'
import svg2 from './svg/svg2.svg'
import svg3 from './svg/svg3.svg'

function AboutFirst() {
  return (<>
    <div className="page1box">
      <div className="Boxcontainer">
        <div className="BoxCol1">
          <div className="textcomponent">
            <p className='titleline'>CORPORATE INTERACTIONS GROUP</p>
            <p className='titlecomp'>Connect | Collaborate | Innovate.</p>
            <div className="containt">
              Corporate Interactions Group (CIG) is a student body of IITR founded on 01st October 2015 that works for creating and nurturing excellent relationships with industries catering to technological and research needs of industry and walking together towards innovating our society that is mutually beneficial to both IIT Roorkee and the industries.
            </div>
          </div>
        </div>
        <div className="BoxCol2">
          <img src={AboutPagebg} alt='png' className='aboutbg1' />
        </div>
      </div>
    </div>
    <div className="aboutpage2">
      <div className="underpage2">
        <div className="col1">
          <div className="imgcont1">
            <img src={svg1} alt='' id='imgabout'/>
            <h4>Mission</h4>
            <p>Building a stronger connection
              between academic & Industry via valuable collaborations.</p>
          </div>
        </div>
        <div className="col1">
          <div className="imgcont1">
            <img src={svg2} alt='' id='imgabout' />
            <h4>Vision</h4>
            <p>To make IIT Roorkee a hub of innovation, research and opportunities. </p>
          </div>
        </div>
        <div className="col1">
          <div className="imgcont1">
            <img src={svg3} alt='' id='imgabout'/>
            <h4>Objective</h4>
            <p>Knowledge Exchange Seminars Industry Interactions Events Corporate Collaborations.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AboutFirst