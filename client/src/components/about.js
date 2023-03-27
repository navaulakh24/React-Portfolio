import React from 'react';
function About() {
  return (
    <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>About</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <img src="assets/img/about.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Illustrator &amp; UI/UX Designer</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> Master</li>
                <li><i class="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  </section>

    // <div className="about">
    //   <div className="about__header">
    //     {/* <img className='about__profile-image' src={profileImage} alt="Profile" /> */}
    //     <h1 className='about__title'>Navdeep Aulakh</h1>
    //     <p className='about__subtitle'>Full-Stack Developer</p>
    //   </div>
    //   <div className='about__description'>
    //     <p>Passionate about creating technology that improves people's lives, contributing to open-source, and building community.</p>
    //     <p></p>
    //     <p></p>
    //     <p></p>
    //   </div>
    //   <div className="about__social">
    //     <a href="" className="about__social-link"><i className="fab fa-linkedin-in"></i></a>
    //     <a href="https://github.com/navaulakh24" className="about__social-link"><i className="fab fa-github"></i></a>
    //   </div>
    // </div>
  );
}

export default About;