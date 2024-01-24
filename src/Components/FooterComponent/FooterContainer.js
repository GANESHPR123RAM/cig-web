
import React from 'react'
import '../FooterComponent/footer.css'


function FooterContainer() {
  const openWindow1 = () => {
    window.open("https://www.facebook.com/cig.iitroorkee/");
  };
  const openWindow2 = () => {
    window.open("https://twitter.com/cig_iitr?lang=en");
  };
  const openWindow3 = () => {
    window.open("https://www.instagram.com/cig_iitr?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==");
  };
  const openWindow4 = () => {
    window.open("https://www.linkedin.com/company/corporate-interactions-group/");
  };
  return (
    <div className="footerContainer">
      <div className="footerRow1">
        <div className="footerpart1">
          <div className="footerCol">
            <div className="footerCol1">
              <h4>About Us</h4>
              <p><a href="/">Story</a></p>
              <p><a href="/">Clients</a></p>
              <p><a href="/">Testimonials</a></p>
            </div>
            <div className="footerCol1">
              <h4>Services</h4>
              <p><a href="/">Marketing</a></p>
              <p><a href="/">Consulting</a></p>
              <p><a href="/">Development</a></p>
              <p><a href="/">Design</a></p>
            </div>
            <div className="footerCol1">
              <h4> Contact Us</h4>
              <p><a href="/">United States</a></p>
              <p><a href="/">United Kingdom</a></p>
              <p><a href="/">Australia</a></p>
              <p><a href="/">Support</a></p>
            </div>
            <div className="Footer-social-links">
              <h4> social</h4>
              <p><a href="#" onClick={openWindow1}><i className="fab fa-facebook-f"></i></a>&nbsp; Facebook</p>
              <p><a href="#" onClick={openWindow2}><i className="fab fa-twitter"></i></a>&nbsp;Twitter</p>
              <p><a href="#" onClick={openWindow3}><i className="fab fa-instagram"></i></a>&nbsp;Instagram</p>
              <p><a href="#"><i className="fab fa-linkedin-in" onClick={openWindow4}></i></a>&nbsp;linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyRight">
        Copyright © 2024 CIG IITR All Rights Reserved.
      </div>
    </div>
  )
}

export default FooterContainer

