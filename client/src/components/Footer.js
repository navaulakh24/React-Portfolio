// import React from "react";

// function Footer() {
//   return (
// <ul className= "nav nav-tabs">
//     <li className="nav-item">
//         <a className={currentPage === 'GitHub' ? 'nav-link active' : 'nav-link'} href="/">GitHub</a>
//     </li>
//     <li className="nav-item">
//         <a className={currentPage === 'LinkdIn' ? 'nav-link active' : 'nav-link'} href="/">LinkedIn</a>
//     </li>
//     <li className="nav-item">
//         <a className={currentPage === 'Email' ? 'nav-link active' : 'nav-link'} href="/">navdeep_aulakh24@hotmail.com</a>
//     </li>
//     <li>
//         <a className={currentPage === 'Phone' ? 'nav-link active' : 'nav-link'} href="/">416-749-2503</a>
//     </li>
// </ul>
//   );
// }

// export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>Developer's Name</p>
      <ul>
        <li><a href="https://github.com/navaulakh24">GitHub</a></li>
        <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
        <li><a href="#">Third Platform</a></li>
      </ul>
    </footer>
  );
}

export default Footer;