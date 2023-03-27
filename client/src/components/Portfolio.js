// import React from 'react';
// import ProjectContainer from './ProjectContainer';

// const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginTop: '50px'
//     }
//   }
// export default function Project() {
//     const projectArray = [
//         {
//             name: "Space Quest",
//             image: "deuheh",
//             description: "This was the first project in my bootcamp",
//             github: "https://github.com/Connor812/Space-Quest",
//             deployed: "https://connor812.github.io/Space-Quest/",
//         },
//         {
//             name: "Freshest Tomatoes",
//             image: "deuheh",
//             description: "This was my second project in the bootcamp",
//             github: "https://github.com/porteous89/project-2-fresh-tomatoes",
//             deployed: "https://project-2-fresh-tomatoes.herokuapp.com/",
//         },
//         {
//             name: "Demo Portfolio",
//             image: "deuheh",
//             description: "This is the first version of my bootcamp portfolio",
//             github: "https://github.com/navaulakh24/My-Profile",
//             deployed: "https://navaulakh24.github.io/My-Profile/",
//         },
//         {
//             name: "My Text Editor",
//             image: "deuheh",
//             description: "This was my second project in the bootcamp",
//             github: "https://github.com/navaulakh24/PWA-Text-Editor",
//             deployed: "https://damp-headland-65466.herokuapp.com/",
//         },
//     ];
//     return (
//         <div style={styles.container}>
//           <h1>Project</h1>
//           {projectArray.map((project) => {
//             return (
//               <ProjectContainer project={project} />
//             )
//           })}
//         </div>
//       );
    
//     }

import React from 'react';
import img1 from '../assets/img/portfolio/portfolio-1.jpg';
import img2 from '../assets/img/portfolio/portfolio-2.jpg';
import img3 from '../assets/img/portfolio/portfolio-3.jpg';
import img4 from '../assets/img/portfolio/portfolio-4.jpg';

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
    }
  ]
    return(
        <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
    
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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