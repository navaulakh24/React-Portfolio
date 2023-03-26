// import React from 'react';

// function About() {
//   return (
//     <section id="about">
//       <h2>About Me</h2>
//       <img src="developer_photo.jpg" alt="Developer Photo" />
//       <p>Short bio about the developer.</p>
//     </section>
//   );
// }

// export default About; 
import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="about__header">
        {/* <img className='about__profile-image' src={profileImage} alt="Profile" /> */}
        <h1 className='about__title'>Navdeep Aulakh</h1>
        <p className='about__subtitle'>Full-Stack Developer</p>
      </div>
      <div className='about__description'>
        <p>Passionate about creating technology that improves people's lives, contributing to open-source, and building community.</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="about__social">
        <a href="" className="about__social-link"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/navaulakh24" className="about__social-link"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
}

export default About;