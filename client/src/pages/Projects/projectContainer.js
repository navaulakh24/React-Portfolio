import React from "react";
import uniqid from "uniqid";
import './projectContainer.css';

const ProjectContainer = ({project}) => (
    <div className='project'>
        <img className='project-image' src={project.image} alt="logo" />
        <h3 className='project-name'>{project.name}</h3>
        <p className='project-description'>{project.description}</p>
        {project.stack && (
            <ul className='project-stack'>
                {project.stack.map((tech) => (
                    <li key={uniqid()} className='project-stack-item'>{item}</li>
                ))}
            </ul>
        )}
        {project.sourceCode && (
            <a href={project.sourceCode} aria-label= 'source code' className='link link--icon'>
                <a href={project.sourceCode}><i class='fab fa-github social-icon'></i></a>
            </a>
        )}
        {project.livePreview && (
            <a href={project.livePreview} aria-label= 'live preview' className='link link--icon'>
                <a href={project.livePreview}>
                    <i class='fab fa-desktop social-icon'></i></a>
                </a>
        )}
    </div>
)

export default ProjectContainer;