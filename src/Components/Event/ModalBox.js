import React, { useState } from 'react'
import './Modal.css';
import Pupup from './Popup'
import UKUMEVENT from '../Images/UKUM-EVENT.png'
import IndustrailVisit from '../Images/Industrail-Visit.png'
import InstituteResearchDay from '../Images/Institute-Research-day.png'
function ModalBox() {

    const [modal1, setmodal1] = useState(false)
    const [modal2, setmodal2] = useState(false)
    const [modal3, setmodal3] = useState(false)


    const togglemodal1 = () => {
        setmodal1(!modal1)
    }

    const togglemodal2 = () => {
        setmodal2(!modal2)
    }

    const togglemodal3 = () => {
        setmodal3(!modal3)
    }

    return (
        <div className='events-pop-up'>
            <div className='events-pop-up-heading'>
                <h1>Events </h1>
            </div>
            <div className="events-pop-up-cards">
                <div className="events-pop-up-cards-1">
                    <div className="events-pop-up-cards-1-content-1">
                        <img src={UKUMEVENT} alt='case study' className='events-pop-up-cards-1-img'></img>
                        <span className='events-pop-up-cards-1-topic'>Uttarakhand Udyog Mahotsava</span>
                    </div>
                    <div className="events-pop-up-cards-1-btns">
                        <button className="events-pop-up-cards-1-btns-details" onClick={togglemodal1}>Details</button>
                    </div>
                </div>

                <div className="events-pop-up-cards-2">
                    <div className="events-pop-up-cards-2-content-2">
                        <img src={IndustrailVisit} alt='case study' className='events-pop-up-cards-1-img'></img>
                        <span className='events-pop-up-cards-2-topic'>Industrail visit</span>
                    </div>
                    <div className="events-pop-up-cards-2-btns">
                        <button className="events-pop-up-cards-2-btns-details" onClick={togglemodal2}>Details</button>
                    </div>
                </div>

                <div className="events-pop-up-cards-3">
                    <div className="events-pop-up-cards-3-content-3">
                        <img src={InstituteResearchDay} alt='case study' className='events-pop-up-cards-1-img'></img>
                        <span className='events-pop-up-cards-3-topic'>Institute Research day</span>
                    </div>
                    <div className="events-pop-up-cards-3-btns">
                        <button className="events-pop-up-cards-3-btns-details" onClick={togglemodal3}>Details</button>
                    </div>
                </div>

                {modal1 && (
                    <Pupup passfunction={togglemodal1}></Pupup>
                )}

                {/* {modal2 && (
                    <MUN passfunction={togglemodal2}></MUN>
                )}

                {modal3 && (
                    <Nukkadnatak passfunction={togglemodal3}></Nukkadnatak>
                )} */}


            </div>


        </div>

    )

}

export default ModalBox
