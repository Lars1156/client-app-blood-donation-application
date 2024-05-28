import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
       <Router>
        <Navigation/>
       </Router>
    </div>
  );
}

export default App;
