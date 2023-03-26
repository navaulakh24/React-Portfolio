import React from "react";
import PropTypes from 'prop-types';

const ProjectContainer = ({ project }) => {
  const { name, image, description, github, deployed } = project;


  return (
    <div className='project'>
      <img className='proImage' src={image} alt="Project logo" />
      <h3 className="project_name">{name}</h3>
      <p className='project__description'>{description}</p>
      <a href={github} target="_blank" rel="noreferrer"> Github</a>
      <a href={deployed} target="_blank" rel="noreferrer"> Deployed</a>
    </div>
  );
};

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    deployed: PropTypes.string,
  }).isRequired,
};

export default ProjectContainer;