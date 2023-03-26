// import React from 'react';
// import Navigation from '../Navigation';

// function Header() {
//     return (
//         <div>
//             <div>
//                 <h1>Nav Aulakh</h1>
//             </div>
//             <Navigation></Navigation>
//         </div>
//     );
// }

// export default Header;

import React from "react";
import './Header.css';

function Header({ currentPage, handlePageChange }) {
  const isActive = (page) => page === currentPage ? 'active navitems' : 'navitemsAct';

  return (
    <div className="main-container">
      <div className="container">
        <nav className="d-flex justify-content-center py-3" id="sideNav">
          <ul className="nav">
            <li className="nav-item">
              <a href="#home" onClick={() => handlePageChange('About')} className={isActive('About')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={() => handlePageChange('Projects')} className={isActive('Projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={isActive('Contact')}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="" className={isActive('Contact')}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
