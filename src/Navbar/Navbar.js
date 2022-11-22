import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"><b style={{fontSize: "30px"}}>O</b>nard</span>
      <div className={`nav-items ${isOpen && "open"}`} id="NavbarLink">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a>
      </div>
      <div   
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
