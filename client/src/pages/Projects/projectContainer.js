import React from "react";
import PropTypes from 'prop-types';
import '.././Projects/projects.css';

const ProjectContainer = ({ project }) => {
  const { image, name, description, stack, sourceCode, livePreview } = project;

  const renderStack = () => (
    <ul className='project__stack'>
      {stack.map((item) => (
        <li key={item} className='project__stack-item'>
          {item}
        </li>
      ))}
    </ul>
  );

  const renderLink = (url, label, icon) => (
    <a href={url} aria-label={label} className='link link--icon'>
      <i className={icon}></i>
    </a>
  );

  return (
    <div className='project'>
      <img className='proImage' src={image} alt="Project logo" />
      <h3 className="project_name">{name}</h3>
      <p className='project__description'>{description}</p>
      {stack && renderStack()}
      {sourceCode && renderLink(sourceCode, 'Source code', 'fab fa-github social-icon')}
      {livePreview && renderLink(livePreview, 'Live preview', 'fab fa-desktop social-icon')}
    </div>
  );
};

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
  }).isRequired,
};

export default ProjectContainer;