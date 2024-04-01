import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <Link to="#" className="logo">
          <i className="fas fa-utensils"></i>CustomBite.
        </Link>
        <nav className="navbar">
          <Link to="#home" className="active">
            Home
          </Link>
          <Link to="#dishes">Dishes</Link>
          <Link to="#about">About</Link>
          <Link to="#menu">Menu</Link>
          <Link to="/createuser">Signup</Link> 
          
          <Link to="#order">Order</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link to="#" className="fas fa-heart"></Link>
          <Link to="#" className="fas fa-shopping-cart"></Link>
        </div>
      </header>
      <form action="" id="search-form">
        <input type="search" placeholder="Search..." name="" id="search-box"></input>
        <label htmlFor="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" id="close"></i>
      </form>
    </div>
  );
}
