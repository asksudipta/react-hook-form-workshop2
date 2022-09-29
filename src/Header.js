import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark text-white">
        
         
 <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
               <Link className='nav-link' to="/">Welcome</Link>
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/home">Home</Link>
              </li>
             <li className="nav-item">
             <Link className='nav-link' to="/person">Person</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/about">About Us</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
      <li> <button class="btn btn-info navbar-btn">SignUp</button></li>
      
    </ul>
          </div>
        </nav>
        
    );
};

export default Header;