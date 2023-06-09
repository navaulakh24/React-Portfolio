import React from 'react';

export default function Resume() {
    
    return(
        <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Resume</h2>
            <p>
            {/* <a href='file:///C:/Users/navde/Downloads/NavAulakhResume.pdf' target='_blank' >
                Click here to open resume
              </a> */}
            </p>
          </div>
  
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Front-end Proficiencies</h4>
                <p><em></em></p>
                <p>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap</li>
                  <li>Progressive Web Applications</li>
                </p>
              </div>

              <div class="resume-item">
                <h4>Back-end Proficiencies</h4>
                <p><em></em></p>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>IndexeDB</li>
                <li>MVC</li>
                <li>MERN</li>
                <li>GraphQL</li>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )};