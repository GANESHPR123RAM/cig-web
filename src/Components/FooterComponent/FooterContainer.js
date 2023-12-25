import React from 'react'
import '../FooterComponent/footer.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'

function FooterContainer() {
  return (
    <div className="footerContainer">
      <div className="footerRow1">
        <div className="footerpart1">
          <div className="footerCol">
            <div className="footerCol1">
              <h4>About Us</h4>
              <ul>
                <li><a href="/">Story</a></li>
                <li><a href="/">Clients</a></li>
                <li><a href="/">Testimonials</a></li>
              </ul>
            </div>
            <div className="footerCol1">
              <h4>Services</h4>
              <ul>
                <li><a href="/">Marketing</a></li>
                <li><a href="/">Consulting</a></li>
                <li><a href="/">Development</a></li>
                <li><a href="/">Design</a></li>
              </ul>
            </div>
            <div className="footerCol1">
              <h4> Contact Us</h4>
              <ul>
                <li><a href="/">United States</a></li>
                <li><a href="/">United Kingdom</a></li>
                <li><a href="/">Australia</a></li>
                <li><a href="/">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footerRow">
            <div className="RowContent">
            <img src={logo} alt='logo' className='ftlogo' />
              CORPORATE INTERACTION CLUB
              <br />
              Ground Floor, Student Activity Center <br />
              IIT Roorkee, Roorkee <br />
              Uttarakhand, India - 247667
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="https://www.facebook.com/cig.iitroorkee/"><i className="fab fa-facebook-f"></i></Link>
                <Link to="https://twitter.com/cig_iitr?lang=en"><i className="fab fa-twitter"></i></Link>
                <Link to="https://www.instagram.com/cig_iitr?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i></Link>
                <Link to="https://www.linkedin.com/company/corporate-interactions-group/"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <footer className="footer">
    //   <div className="container">
    //     <div className="row">
    //       <div className="footer-col">
    //         <h4>About Us</h4>
    //         <ul>
    //           <li><a href="/">Story</a></li>
    //           <li><a href="/">Clients</a></li>
    //           <li><a href="/">Testimonials</a></li>
    //         </ul>
    //       </div>
    //       <div className="footer-col">
    //         <h4>Services</h4>
    //         <ul>
    //           <li><a href="/">Marketing</a></li>
    //           <li><a href="/">Consulting</a></li>
    //           <li><a href="/">Development</a></li>
    //           <li><a href="/">Design</a></li>
    //         </ul>
    //       </div>
    //       <div className="footer-col">
    //         <h4> Contact Us</h4>
    //         <ul>
    //           <li><a href="/">United States</a></li>
    //           <li><a href="/">United Kingdom</a></li>
    //           <li><a href="/">Australia</a></li>
    //           <li><a href="/">Support</a></li>
    //         </ul>
    //       </div>
    //       <div className="footer-col" style={{color:'white',fontSize:'16px',fontWeight:'50'}}>
    //         <h4>Address</h4>
    //         <img src={logo} alt='logo' className='ftlogo' />
    //         CORPORATE INTERACTION CLUB
    //         <br />
    //         Ground Floor, Student Activity Center <br />
    //         IIT Roorkee, Roorkee <br />
    //         Uttarakhand, India - 247667
    //        cig@iitr.ac.in
    //       </div>
    //       <div className="footer-col">
    //         <h4>follow us</h4>
    //         <div className="social-links">
    //           <Link to="https://www.facebook.com/cig.iitroorkee/"><i className="fab fa-facebook-f"></i></Link>
    //           <Link to="https://twitter.com/cig_iitr?lang=en"><i className="fab fa-twitter"></i></Link>
    //           <Link to="https://www.instagram.com/cig_iitr?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i></Link>
    //           <Link to="https://www.linkedin.com/company/corporate-interactions-group/"><i className="fab fa-linkedin-in"></i></Link>
    //         </div>

    //       </div>

    //     </div>
    //   </div>
    // </footer>
  )
}

export default FooterContainer

