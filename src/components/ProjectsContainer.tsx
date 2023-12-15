import React from 'react';
import '../stylesheets/ProjectsContainer.css';
import Project from './Project.tsx';
import leftSqBr from '../images/LeftSqBr.png';
import rightSqBr from '../images/RightSqBr.png';
import projects from './ProjectsData.tsx';

const Projects = () => {
  return (
    <div className='projects-main-container' id='projects'>
      <div>
        <img className='side-bracket' src={leftSqBr} alt='Left bracket' />
      </div>
      <div>
        <h2>Proyectos</h2>
        <div className='projects-container'>
        {projects.map((project) => (
        <Project
          image={project.image}
          alt={project.alt}
          description={project.description}
        />
      ))}
        </div>
      </div>
      <div>
        <img className='side-bracket' src={rightSqBr} alt='Right bracket' />
      </div>
    </div>
  );
};

export default Projects;
