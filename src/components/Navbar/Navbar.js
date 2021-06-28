import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>crowdfund</h2>

      <div>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#'> About </a>
          </li>

          <li className='nav-item'>
            <a href='#'> Discover </a>
          </li>

          <li className='nav-item'>
            <a href='#'> Get Started </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
