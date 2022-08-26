import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/kasaLogo.png';

function Navbar() {
  return (
    <header className='navbar'>
      <a href='/'>
        <img src={Logo} alt='logo' />
      </a>
      <nav>
        <ul className='list'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
