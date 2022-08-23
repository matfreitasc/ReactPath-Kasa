import React, { useEffect } from 'react';
import Logo from '../../assets/kasaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  // get the current path
  const path = window.location.pathname;
  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.list li');
    navbarLinks.forEach((link) => {
      if (link.firstChild.getAttribute('href') === path) {
        link.classList.add('underline');
        // reload the page when the path changes
      } else {
        link.classList.remove('underline');
      }
    });
  }, [path]);
  return (
    <header className='navbar'>
      <a href='/'>
        <img src={Logo} alt='logo' />
      </a>
      <nav>
        <ul className='list'>
          <li className='links'>
            <a href='/'>Home</a>
          </li>
          <li className='links'>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
