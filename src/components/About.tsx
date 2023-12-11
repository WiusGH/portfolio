import React from 'react';
import '../stylesheets/About.css';
import leftPare from '../images/LeftPr.png';
import rightPare from '../images/RightPr.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div>
        <img className='side-paren' src={leftPare} alt='Left parenthesis'/>
      </div>
      <div>
        <h2>Sobre mi</h2>
        <div className='about-info'>
          <p>Soy venezolano, tengo 30 años y soy trilingüe (Inglés e italiano). Me gustan mucho los idiomas, deportes extremos y ejercicios físicos. Soy programador/desarrollador web y puedo crear simples sitios web como los de un emprendimiento pequeño que solo quiera exhibir sus servicios o productos como también aplicaciones web más complejas que permitan agregar ítems a un carrito y comprar con pagos en línea.</p>
        </div>
      </div>
      <div>
      <img className='side-paren' src={rightPare} alt='Right parenthesis'/>
      </div>
    </div>
  );
};

export default About;
