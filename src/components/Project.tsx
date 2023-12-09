import React from 'react';
import '../stylesheets/Project.css';

const Project = ( { image, alt, description } ) => {
  return (
    <div className='project'>
      <img src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
