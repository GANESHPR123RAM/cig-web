import React from 'react'
import '../FooterComponent/footer.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'
import email from '../ContactUs/svg/email.svg'

function FooterContainer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="/">Story</a></li>
              <li><a href="/">Clients</a></li>
              <li><a href="/">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/">Marketing</a></li>
              <li><a href="/">Consulting</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Design</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> Contact Us</h4>
            <ul>
              <li><a href="/">United States</a></li>
              <li><a href="/">United Kingdom</a></li>
              <li><a href="/">Australia</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className="footer-col" style={{color:'white',fontSize:'16px',fontWeight:'50'}}>
            <h4>Address</h4>
            <img src={logo} alt='logo' className='ftlogo' />
            CORPORATE INTERACTION CLUB
            <br />
            Ground Floor, Student Activity Center <br />
            IIT Roorkee, Roorkee <br />
            Uttarakhand, India - 247667
           cig@iitr.ac.in
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
    </footer>
    // <div className="footerContainer">
    //   <div className="footerRow1">
    //     <div className="footerpart1">
    //       <div className="footerCol">
    //         <div className="footerCol1">
    //           <p>
    //             About Us
    //           </p>
    //           <a href='/'>Story</a>
    //           <a href='/'>Clients</a>
    //           <a href='/'>Testimonials</a>
    //         </div>
    //         <div className="footerCol2">
    //           <p>
    //             Services
    //           </p>
    //           <a href='/'>Marketing</a>
    //           <a href='/'>Consulting</a>
    //           <a href='/'>Development</a>
    //           <a href='/'>Design</a>
    //         </div>
    //         <div className="footerCol3">
    //           <p>
    //             Contact Us
    //           </p>
    //           <a href='/'>United States</a>
    //           <a href='/'>United Kingdom</a>
    //           <a href='/'>Australia</a>
    //           <a href='/'>Support</a>
    //         </div>
    //         <div className="footerCol4">
    //         </div>
    //       </div>
    //       <div className="footerRow">
    //         <img src={logo} alt='logo' className='ftlogo' />
    //         CORPORATE INTERACTION CLUB
    //         <br />
    //         Ground Floor, Student Activity Center <br/>
    //         IIT Roorkee, Roorkee <br/>
    //         Uttarakhand, India - 247667
    //       </div>
    //     </div>

    //     <div className="footerpart2">
    //       <div className="address">
    //         <div className='map'>
    //           <iframe className='mapin' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.941259598978!2d77.89787421540963!3d29.865967833935947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36c210c7d2b%3A0x43a317fe732508db!2sCIG%20IITR!5e0!3m2!1sen!2sin!4v1680548354157!5m2!1sen!2sin"
    //             title="CIG Office" allowFullScreen loading="lazy" ></iframe>
    //         </div>
    //       </div>
    //       <div className="contactright">
    //         <h4>Contact Us</h4>
    //         <div>
    //           <form action="/" method="POST">
    //             <div className="form">
    //               <div className="formcss">
    //                 <input
    //                   name="Name"
    //                   className="inputbox"
    //                   type="text"
    //                   placeholder="Name"
    //                 />
    //                 <input
    //                   name="Number"
    //                   className="inputbox"
    //                   type="text"
    //                   placeholder="Contact"
    //                 />
    //                 <input
    //                   name="Email"
    //                   className="inputbox"
    //                   type="email"
    //                   placeholder="Email ID"
    //                 />
    //               </div>
    //               <div className="massageBox">
    //                 <textarea
    //                   name="Message"
    //                   className="textarea"
    //                   id=""
    //                   cols="30"
    //                   rows="6"
    //                 >
    //                   Message
    //                 </textarea>
    //                 <button type="submit" className="formbutton">
    //                   Send Message
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footerRow2">
    //     <hr />
    //     <p className="copyright">@copyright | CORPORATE INTERACTION CLUB</p>
    //   </div>
    // </div>


  )
}

export default FooterContainer

