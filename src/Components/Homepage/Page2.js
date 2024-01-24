import React, { Component } from 'react'
import '../Homepage/Page2.css'
import homepagebg2 from '../Images/homepagebg2.png'
import { Link } from 'react-router-dom'
import HomeArrow from '../Images/HomeArrow.svg'

export class Page2 extends Component {
    render() {
        return (
            <body>
                <div className='Home-containerpage2'>
                    <div className="Home-containerpage2-Box">
                        <div className="Home-col1page2">
                            <img className="homepagebg2" src={homepagebg2} alt='homepagebg2' />
                        </div>
                        <div className="Home-col2page2">
                            <div className="Home-col2page2-Box">
                                <h1><strong>Benefits for Corporate</strong></h1>
                                <p><img src={HomeArrow} alt=''/>Access to IIT Roorkee's World-renowned resources.</p>
                                <p><img src={HomeArrow} alt=''/>Cost-effective & high-quality solutions.</p>
                                <p><img src={HomeArrow} alt=''/>Deeper and fresher solutions from academy experts.</p>
                                <p><img src={HomeArrow} alt=''/>Effective Identification of potential employees.</p>
                                <Link to='/Event'>  View Resources</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Page2