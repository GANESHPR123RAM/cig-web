import React from 'react'
import '../Homepage/Homepage.css'
import Page1 from '../Homepage/Page1.js'
import Page2 from '../Homepage/Page2.js'
import Page3 from '../Homepage/Page3.js'
import CarouselData from '../Homepage/CarouselData.js'
function Homepage() {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <div className="carouselbox">
      <CarouselData />
      </div>
    </>
  )
}

export default Homepage