import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation';
import LoginButton from './Components/LoginButton';
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
       <Router>
        <Navigation/>
          <Routes>
            <Route path='/Loginpage'Component={<LoginButton/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
