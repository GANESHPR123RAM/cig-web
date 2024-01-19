import React from 'react'
import '../Homepage/Homepage.css'
import Page1 from '../Homepage/Page1.js'
import Page2 from '../Homepage/Page2.js'
import Page3 from '../Homepage/Page3.js'
import CarouselData from '../Homepage/CarouselData.js'
import Collab from './collab.js'
function Homepage() {
  return (
    <>
      
        <Page1 />
        <Page2 />
        <Page3 />
        <div id="col" className='collab'>
          <div className='text-center  mb-3 textdiv ' style={{ fontSize: '2vmax' }}><strong>Successful Collaborations</strong> </div>
          <Collab />
        </div>
        <CarouselData />
    
    </>
  )
}

export default Homepage