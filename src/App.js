import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import LoginPage from  './Components/LoginPage';
import DonorRegistration from './Components/DonerData/DonerRegistration';
function App() {
  return (
    <div className="App">
       <Router>
        <Navigation/>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path ='/LoginPage'element={<LoginPage/>}/>
            <Route path ='/donarRegistration' element={<DonorRegistration/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
