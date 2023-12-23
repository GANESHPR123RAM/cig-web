import React, { Component } from 'react'
import '../Homepage/Page3.css'
import homepagebg3 from '../Images/homepagebg3.png'
import { Link } from 'react-router-dom'

export class Page3 extends Component {
    render() {
        return (
            <div className='containerpage3'>
                <div className="col1page3">
                <h1><strong>   Benefits for Academia</strong></h1>
                    <ul>
                        <li>&#129170; Access to IIT Roorkee's World-renowned resources. </li>
                        <li>&#129170; Cost-effective & high-quality solutions.</li>
                        <li>&#129170; Deeper and fresher solutions from academy experts.</li>
                        <li>&#129170; Effective Identification of potential employees.</li>
                    </ul>
                    <Link to='/Event'>View Resources</Link>
                </div>
                <div className="col2page3">
                    <img  className="homepagebg3" src={homepagebg3} alt='homepagebg3' />
                </div>
            </div>
        )
    }
}

export default Page3