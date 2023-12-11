import React from 'react';
import '../stylesheets/Projects.css';
import Project from './Project.tsx';
import leftSqBr from '../images/LeftSqBr.png';
import rightSqBr from '../images/RightSqBr.png';

const Projects = () => {
  return (
    <div className='projects-main-container' id='projects'>
      <div>
        <img className='side-bracket' src={leftSqBr} alt='Left bracket' />
      </div>
      <div>
        <h2>Proyectos</h2>
        <div className='projects-container'>
          <Project
            image='https://picsum.photos/200'
            alt='Project'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Project
            image='https://picsum.photos/300'
            alt='Project'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Project
            image='https://picsum.photos/400'
            alt='Project'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
        </div>
      </div>
      <div>
        <img className='side-bracket' src={rightSqBr} alt='Right bracket' />
      </div>
    </div>
  );
};

export default Projects;
