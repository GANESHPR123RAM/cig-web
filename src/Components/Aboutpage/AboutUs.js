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
            <div className="container-fluid box">
                <div className="row">
                    <h1 className='text-center col-12 fw-bold my-3 mb-5'>Administrative Body</h1>
                    <div className="Cardbox">
                        <Administrative />
                    </div>
                </div>
            </div>
            <div className="container-fluid box ">
                <div className="row">
                    <h1 className='text-center col-12 fw-bold my-3 mb-5'>Student Body</h1>
                    <div className="Cardbox">
                        <Student />
                    </div>
                </div>
            </div>
            <div className="container-fluid box ">
                <div className="row">
                    <div className="Cardbox">
                        <HeadOf />
                    </div>
                </div>
            </div>
            <div className="container-fluid box">
                <div className="row">
                    <h1 className='text-center col-12 fw-bold my-3 mb-5'>Team-Members</h1>
                    <div className="Cardbox">
                        <div className="buttonbox col-12 fw-bold my-3 mb-5">
                            <Buttons
                                menuItems={menuItems}
                                filterItems={filterItems}
                                setItems={setItems}
                            />
                        </div>
                        <Card item={item} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs