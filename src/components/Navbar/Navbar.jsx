import React from "react";
import "./Navbar.css";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOrganisers = () => {
    navigate("/organisers");
  };
  const handleEvents = () => {
    navigate("/categories");
  };
  return (
    <div class="header">
      <header class="header-content">
        <a href="#logo" class="logo">
          {/* <img src="./images/StudySyn.svg" alt="logoImage" class="logo-icon" /> */}
          <span class="logo-text">ProfferNet</span>
        </a>

        <nav class="nav">
          <a onClick={handleEvents} class="nav-link">
            Event
          </a>
          <a href="#volunters" class="nav-link">
            Volunters
          </a>
          <a onClick={handleOrganisers} class="nav-link">
            Organisers
          </a>
        </nav>
        <div className="credentials">
          <a href="#signin" class="contact-button">
            Signin
          </a>
          {/* <a href="#signup" class="contact-button">
            Signup
          </a> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
