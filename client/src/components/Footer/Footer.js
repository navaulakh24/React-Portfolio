import React from "react";

function Footer() {
  return (
<ul className= "nav nav-tabs">
    <li className="nav-item">
        <a className={currentPage === 'GitHub' ? 'nav-link active' : 'nav-link'} href="/">GitHub</a>
    </li>
    <li className="nav-item">
        <a className={currentPage === 'LinkdIn' ? 'nav-link active' : 'nav-link'} href="/">LinkedIn</a>
    </li>
    <li className="nav-item">
        <a className={currentPage === 'Email' ? 'nav-link active' : 'nav-link'} href="/">navdeep_aulakh24@hotmail.com</a>
    </li>
    <li>
        <a className={currentPage === 'Phone' ? 'nav-link active' : 'nav-link'} href="/">416-749-2503</a>
    </li>
</ul>
  );
}

export default Footer;