import React, { Component } from 'react'
import '../Homepage/Page2.css'
import homepagebg2 from '../Images/homepagebg2.png'

export class Page2 extends Component {
    render() {
        return (
            <div className='containerpage2'>
                <div className="col1page2">
                    <img className="homepagebg2" src={homepagebg2} alt='homepagebg2' />
                </div>
                <div className="col2page2">
                <h1><strong>   Benefits for Corporate</strong></h1>
                    <ul>
                        <li>&#129170; Access to IIT Roorkee's World-renowned resources. </li>
                        <li>&#129170; Cost-effective & high-quality solutions.</li>
                        <li>&#129170; Deeper and fresher solutions from academy experts.</li>
                        <li>&#129170; Effective Identification of potential employees.</li>
                    </ul>
                    <a href='/'>View Resources</a>
                </div>
            </div>
        )
    }
}

export default Page2