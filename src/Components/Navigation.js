import React from 'react';
import {Link} from 'react-router-dom';
import './css.files/Navbar.css';
function Navigation(){
    return (
        <div className="vertical-nav bg-dark">
           
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className='nav-link'to="/">Home</Link>
                </li>
                <li className="nav-item">
                   <Link className='nav-link'to="/services">Services</Link>
                </li>
                <li className="nav-item">
                   <Link className='nav-link'to="/about">About</Link>
                </li>
                <li className="nav-item">
                   <Link className='nav-link'to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'to ='/LoginPage'>Admin-Login</Link>
                </li>
            </ul>

        </div>
    
    );
}
export default Navigation;