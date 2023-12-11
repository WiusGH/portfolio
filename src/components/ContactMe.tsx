import React from 'react';
import '../stylesheets/ContactMe.css';
import leftAnBr from '../images/LeftAnBr.png';
import rightAnBr from '../images/RightAnBr.png';

const ContactMe = () => {

  const phoneNumber = '+56935448591';

  return (
    <div className='contact-me-container' id='contact-me'>
      <div>
        <img className='side-angle' src={leftAnBr} alt='Left angled bracket' />
      </div>
      <div className='contact-me'>
        <h2>Contáctame</h2>
        <div className='contact-info'>
          <p>Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href={`tel:${phoneNumber}`}>+56 93544 8591</a></p>
          <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='https://wa.me/56935448591'>wius93@gmail.com</a></p>
          <p>LinkedIn:&nbsp;&nbsp; <a href='https://www.linkedin.com/in/wilsconidel-yanez-litwin-51271326a/'>Wilsconidel Yanez</a></p>
        </div>
      </div>
      <div>
        <img className='side-angle' src={rightAnBr} alt='Right angled bracket' />
      </div>
    </div>
  );
};

export default ContactMe;
