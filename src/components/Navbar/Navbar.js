import React, { useState } from 'react';
import logo from '../../../public/images/logo.svg';
import close from '../../../public/images/icon-close-menu.svg';
import hamburger from '../../../public/images/icon-hamburger.svg';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showResponsiveModal = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className='hero-container'>
        <div className='hero-box'>
          <div className='navbar navbar-container'>
            <a href='#'>
              <img
                src={logo}
                alt='logo'
                width='100%'
                height='100%'
                draggable={false}
              ></img>
            </a>

            <nav>
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
                  <a
                    href='#'
                    className='nav-link'
                    onClick={() => alert('Hello')}
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>

            {open ? (
              <div className='nav-modal'>
                <div className='nav-modal-container'>
                  <div className='nav-modal-body'>
                    <ul>
                      <li>
                        <a href='/'> About </a>
                      </li>

                      <li>
                        <a href='/'> Discover </a>
                      </li>

                      <li>
                        <a href='/'> Get Started </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}

            <div className='hamburger' onClick={() => showResponsiveModal()}>
              {open ? (
                <img src={close} alt='close-icon'></img>
              ) : (
                <img src={hamburger} alt='ham-icon'></img>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
