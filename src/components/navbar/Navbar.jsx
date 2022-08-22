import React from 'react';
import Logo from '../../assets/kasaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='navbar'>
      <a href='/'>
        <img src={Logo} alt='logo' />
      </a>
      <nav>
        <ul className='list'>
          <li className='links underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='links'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
