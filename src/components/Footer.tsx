import React from 'react';
import '../stylesheets/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Wilsconidel Yanez © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
