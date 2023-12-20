
import './App.css';
import FooterContainer from './Components/FooterComponent/FooterContainer.js';
import Homepage from './Components/Homepage/Homepage.js';
import Navigationbar from './Components/NavbarComponent/Navigationbar.js';
import Cards from './Components/Aboutpage/cards.js'
import IndexResourcesc from './Components/resources/IndexResourcesc.js'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="App">
        <React.Fragment>
          <Navigationbar />
        </React.Fragment>
        
        <Routes>
        <Route path='/Home' element={ <Homepage />}>

</Route>
          <Route path='/AboutUs' element={<Cards />}>

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
