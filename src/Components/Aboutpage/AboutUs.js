import React from 'react'
import Card from './Cards'
import './AboutUs.css'
import AboutFirst from './AboutFirst'
import Administrative from './Administrative'
import Student from './Student'
import HeadOf from './HeadOf'

function AboutUs() {
 
    return (
        <>
            <AboutFirst />
            <Administrative />
            <Student />
            <HeadOf />
            <Card  />

        </>
    )
}
export default AboutUs