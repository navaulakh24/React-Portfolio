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
    export default function Portfolio() {   
        
        return(
            <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">
        
              <div class="section-title">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
        
              {/* <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div> */}
        
              <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    
                    <img src="../assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
    
                  </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
        }