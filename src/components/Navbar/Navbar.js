import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-box'>
          <div className='navbar navbar-container'>
            <a href='#'>
              <img
                src='/public/images/logo.svg'
                alt='logo'
                width='100%'
                height='100%'
                draggable={false}
              ></img>
            </a>
            <div className='nav-list'>
              <ul>
                <li className='nav-item'>
                  <a href='#' className='nav-link'>
                    About
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='#' className='nav-link'>
                    Discover
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='#' className='nav-link'>
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
            <input type='checkbox' id='menu-btn' />
            <label for='menu-btn' className='menu-label'>
              <div className='hamburger'>
                <img src='/public/images/icon-hamburger.svg'></img>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
