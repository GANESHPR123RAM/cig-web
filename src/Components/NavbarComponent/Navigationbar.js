import React, { useState } from 'react'
import '../NavbarComponent/Navigationbar.css';
import logo from '../Images/logo.svg'
import { Link } from 'react-router-dom';

function Navigationbar() {
  const [HamburgerManu, setHamburgerManu] = useState(false)
  const closeHamburger = () => setHamburgerManu(false)
  const openWindow = () => {
    window.open("https://medium.com/@cig_59196");
  };
  const Manu = () => {
    return (
      <div className="Hamburger" HamburgerManu={HamburgerManu}>
        <div className="HamburgerMenu">
          <div className="NavPage">
            <Link className="nav-item nav-link active" onClick={closeHamburger} to="/Home">Home <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active " onClick={closeHamburger} to="/AboutUs">About <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" onClick={closeHamburger} to="/Resources">Resources <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" onClick={closeHamburger} to="/Event">Event<span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" onClick={closeHamburger} to="/Contact">Contact <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" onClick={closeHamburger} to="https://medium.com/@cig_59196">Blog <span className="sr-only"></span></Link>
          </div>
          <button onClick={closeHamburger} className='closenav mx-2'><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
      </div>
    );

  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-plate">
        <div className="logo">
          <img className='logoImgNav' src={logo} alt='logo' />
        </div>
        {/* <Link to="/NavPage"> */}
        <button className="navbar-toggler responsive-button mx-3" onClick={() => setHamburgerManu(true)} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* </Link> */}
        <div className="collapse navbar-collapse logo-component" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active mx-4" to="/Home">Home <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active mx-4" to="/AboutUs">About <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active mx-4" to="/Resources">Resources <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active mx-4" to="/Event">Event<span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active mx-4" to="/Contact">Contact <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active mx-4" to="/Contact" onClick={openWindow}>Blog <span className="sr-only"></span></Link>
          </div>
        </div>
      </nav>
      {HamburgerManu && <Manu closeHamburger={closeHamburger} />}

    </>
  )

}

export default Navigationbar


