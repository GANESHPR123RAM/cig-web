import React from 'react'
import './NavPage.css'
import { Link } from 'react-router-dom';

function NavPage() {
  return (
    <div className="NavPage">
      <Link className="nav-item nav-link active" to="/Home"><strong>Home </strong><span className="sr-only"></span></Link>
      <Link className="nav-item nav-link active" to="/AboutUs"><strong>About</strong> <span className="sr-only"></span></Link>
      <Link className="nav-item nav-link active" to="/Resources"><strong>Resources</strong> <span className="sr-only"></span></Link>
      <Link className="nav-item nav-link active" to="/Event"><strong>Event</strong><span className="sr-only"></span></Link>
      {/* <Link className="nav-item nav-link active" to="/Contact"><strong>Contact </strong><span className="sr-only"></span></Link> */}
      <Link className="nav-item nav-link active" to="https://medium.com/@cig_59196">Blog <span className="sr-only"></span></Link>
    </div>
  )
}

export default NavPage