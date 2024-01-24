import React, { Component } from 'react'
import '../Homepage/Page3.css'
import homepagebg3 from '../Images/homepagebg3.png'
import { Link } from 'react-router-dom'
import HomeArrow from '../Images/HomeArrow.svg'

export class Page3 extends Component {
    render() {
        return (
            <body>
                <div className='Home-containerpage-third'>
                    <div className="Home-containerpage-third-Box">
                        <div className="Home-col2page-third">
                            <img className="homepagebg3" src={homepagebg3} alt='homepagebg3' />
                        </div>
                        <div className="Home-col1page-third">
                            <h1><strong>Benefits for Academia</strong></h1>
                            <p><img src={HomeArrow} alt=''/>Access to IIT Roorkee's World-renowned resources. </p>
                            <p><img src={HomeArrow} alt=''/>Cost-effective & high-quality solutions.</p>
                            <p><img src={HomeArrow} alt=''/>Deeper and fresher solutions from academy experts.</p>
                            <p><img src={HomeArrow} alt=''/>Effective Identification of potential employees.</p>
                            <Link to='/Event'>View Resources</Link>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Page3