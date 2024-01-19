import React from 'react'
import Event from '../Images/Event.png'
import './EventPage1.css'

function EventPage1() {
    return (
        <div className="Eventbox">
            <div className="Eventcontainer">
                <div className="EventCol1">
                    <div className="Event-textcomponent">
                        <p className='Event-titleline'>EVENTS</p>
                        <div className="Event-containt">
                            Corporate Interactions Group (CIG) is a student body of IITR founded on <strong>01st October 2015</strong> that works for creating and nurturing excellent relationships with industries catering to technological and research needs of industry and walking together towards innovating our society that is mutually beneficial to both IIT Roorkee and the industries.
                        </div>
                    </div>
                </div>
                <div className="EventBoxCol2">
                    <img src={Event} alt='png' className='Eventpng' />
                </div>
            </div>
        </div>
    )
}

export default EventPage1