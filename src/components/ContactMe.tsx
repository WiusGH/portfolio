import React from 'react';
import '../stylesheets/ContactMe.css';
import leftAnBr from '../images/LeftAnBr.png';
import rightAnBr from '../images/RightAnBr.png';

const ContactMe = () => {
  return (
    <div className='contact-me-container'>
      <div>
        <img className='side-angle' src={leftAnBr} alt='Left angled bracket' />
      </div>
      <div className='contact-me'>
        <h2>Contáctame</h2>
        <div className='contact-info'>
          <p>Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='#'>+56 93544 8591</a></p>
          <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='#'>wius93@gmail.com</a></p>
          <p>LinkedIn:&nbsp;&nbsp; <a href='#'>https://www.linkedin.com/in/wilsconidel/</a></p>
        </div>
      </div>
      <div>
        <img className='side-angle' src={rightAnBr} alt='Right angled bracket' />
      </div>
    </div>
  );
};

export default ContactMe;
