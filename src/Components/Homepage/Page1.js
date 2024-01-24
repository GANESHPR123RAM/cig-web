import React from 'react'
import '../Homepage/Page1.css'
import home_bg_2 from '../Images/home_bg_2.png'

function Page1() {
  const HomeopenWindow1 = () => {
    window.open("https://www.linkedin.com/company/corporate-interactions-group/");
  };
  return (
    <>
      <body>
        <div className="HomepageContainer">
          <div className="HomepageContainerBox">
            <div className="Homepage-col1page1">
              <div className="Homepage-headingpage1">
                <p className='Homepage-containtpage1'><strong>Bridging the gap between<br />
                  <span><h1>Corporate</h1> and <h1>Academia</h1></span>  </strong>
                </p>
                <p className="Homepage-containtpage2">
                  By providing a platform for academia and<br />
                  industry to interact. CIG proffers to<br />
                  <strong> Connect | Collaborate | Innovate.</strong>
                </p>

                <a href="#" onClick={HomeopenWindow1}>
                  <button type="button" className=" HomepageBTN">Let’s Collaborate</button>
                </a>
              </div>
            </div>
            <div className="Homepage-col2page1">
              <img className='page1bg' src={home_bg_2} alt='homepagebg' />
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Page1