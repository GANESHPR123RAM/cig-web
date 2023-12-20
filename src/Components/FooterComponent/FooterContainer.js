import React from 'react'
import '../FooterComponent/footer.css'
import logo from '../Images/logo.svg'

function FooterContainer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Story</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
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

