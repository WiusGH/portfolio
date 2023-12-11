import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <li><a href='#about'>Sobre mi</a></li>
      <li><a href='#projects'>Proyectos</a></li>
      <li><a href='#contact-me'>Contáctame</a></li>
    </div>
  );
};

export default Header;
