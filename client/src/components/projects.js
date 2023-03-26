// export default Projects;
import React from 'react';
import  Project  from './Portfolio';
// import ProjectContainer from './ProjectContainer';

const Projects = () => {

  return (
    <section id='projects' className='projects section'>
      <div className='container'>
        <h2 className='section__title'>Projects</h2>
        <div className='row'>
          <Project/>
        </div>
      </div>
    </section>
  );
};

export default Projects;