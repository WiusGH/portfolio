import React from 'react';
import '../stylesheets/Intro.css';
import leftCurly from '../images/LeftCrBr.png'
import rightCurly from '../images/RightCrBr.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <img className='side-curly' src={leftCurly} alt='Side element' />
      </div>
      <div>
        <img className='profile-pic' src='' alt='Profile pic' />
        <h1>Wilsconidel Yanez</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div>
        <img className='side-curly' src={rightCurly} alt='Side element' />
      </div>
    </div>
  );
};

export default Intro;
