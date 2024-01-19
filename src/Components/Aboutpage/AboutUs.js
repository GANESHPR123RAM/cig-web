import React, { useState } from 'react'
import Card from './Cards'
import Buttons from './Buttons'
import data from './Data'
import './AboutUs.css'
import AboutFirst from './AboutFirst'
import Administrative from './Administrative'
import Student from './Student'
import HeadOf from './HeadOf'

function AboutUs() {
    const [item, setItems] = useState(data)
    const menuItems = [...new Set(data.map((d) => d.category))]
    const filterItems = (cat) => {
        const newItems = data.filter((newval) => newval.category === cat)
        setItems(newItems)
    }
    return (
        <>
            <AboutFirst />
            <Administrative />
            <Student />
            <HeadOf />
            <Card item={item} />

        </>
    )
}
export default AboutUs