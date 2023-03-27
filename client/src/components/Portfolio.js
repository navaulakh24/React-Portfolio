import React from 'react';
import img1 from '../assets/img/portfolio/Screenshot (44).png';
import img2 from '../assets/img/portfolio/Screenshot (43).png';
import img3 from '../assets/img/portfolio/Screenshot (2).png';
import img4 from '../assets/img/portfolio/Screenshot (42).png';
// import img5 from '../assets/img/portfolio/Screenshot (27).png'

export default function Portfolio() {   

  let projects = [
    {
      id:1,
      name:"Space-Quest",
      description:"This was the first project in my bootcamp",
      image:img1,
      github: "https://github.com/Connor812/Space-Quest",
      deployed: "https://connor812.github.io/Space-Quest/",
    }
    ,
    {
      id:2,
      name:"project-2-fresh-tomatoes",
      description:"This was my second project in the bootcamp",
      image:img2,
      github: "https://github.com/porteous89/project-2-fresh-tomatoes",
      deployed: "https://project-2-fresh-tomatoes.herokuapp.com/",
    },
    {
      id:3,
      name:"My-Profile",
      description:"This is the first version of my bootcamp portfolio",
      image:img3,
      github: "https://github.com/navaulakh24/My-Profile",
      deployed: "https://navaulakh24.github.io/My-Profile/",
    },
    {
      id:4,
      name:"PWA-Text-Editor",
      description:"This was a challenge project in the bootcamp",
      image:img4,
      github: "https://github.com/navaulakh24/PWA-Text-Editor",
      deployed: "https://damp-headland-65466.herokuapp.com/",
    },
    // {
    //   id:5,
    //   name:"PWA-Text-Editor",
    //   description:"This was a challenge project in the bootcamp",
    //   image:img5,
    //   github:'' ,
    //   deployed: "",
    // }
  ]
    return(
        <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
    
          <div class="section-title">
            <h2>Portfolio</h2>
          </div>
    
          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        
          {
             projects.map((single) => (
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
           
                <img src={single.image} class="img-fluid" alt="" />

                <div class="portfolio-info">
                  <h4>{single.name}</h4>
                  <p>{single.name}</p>
                  <div class="portfolio-links">
                    <a href={single.github} target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                    <a href={single.deployed} target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

))}
           </div>
        </div>
      </section>
    )
             }