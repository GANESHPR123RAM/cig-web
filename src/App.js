
import './App.css';
import FooterContainer from './Components/FooterComponent/FooterContainer.js';
import Homepage from './Components/Homepage/Homepage.js';
import Navigationbar from './Components/NavbarComponent/Navigationbar.js';
import AboutUs from './Components/Aboutpage/AboutUs.js'
import IndexResourcesc from './Components/resources/IndexResourcesc.js'
import ContactUs from './Components/ContactUs/ContactUs.js'
import Event from './Components/Event/Event.js'



import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <React.Fragment>
          <Navigationbar />
        </React.Fragment>
        <Routes>
        <Route path='/Home' element={<Homepage />}>
          </Route>
          <Route path='/' element={< Navigate to='Home' />}>
          </Route>
          <Route path='/Event' element={<Event />}>
          </Route>
          <Route path='/AboutUs' element={<AboutUs />}>
          </Route>
          <Route path='/Contact' element={<ContactUs />}>
          </Route>
          <Route path='/Resources' element={<div className="resourcesc">
            <IndexResourcesc />
          </div>}>
          </Route>
        </Routes>
        <React.Fragment>
          <FooterContainer />
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;
