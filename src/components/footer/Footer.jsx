import React from 'react';
import KasaLogo from '../../assets/Footer_logo.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_Center'>
        <img src={KasaLogo} alt='Kasa Logo' className='footer-logo' />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
