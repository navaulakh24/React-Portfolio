import React from "react";

function Header({ currentPage, handlePageChange }) {
 // const isActive = (page) => page === currentPage ? 'active' : '';
      //class="fixed-top"
  return (
    <header id="header" >
    <div class="container-fluid d-flex justify-content-start align-items-center">
      <h1 class="logo me-auto me-lg-0 display-inline"><a href="/">Navdeep Aulakh</a></h1>
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="active" href="#about">About Me</a></li>
          <li><a  href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      </div>
  </header>
 );
}

export default Header;
