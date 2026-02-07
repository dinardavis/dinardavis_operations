import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/imgs/main_logo.png" alt="Dinar Davis" className="logo" />
               <p className="logo-text">Operations &<br></br>Infrastructure</p>
            </Link>
          </div>
         
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-i-work"
              className={`nav-link ${isActive("/how-i-work") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              How I Work
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="header-right">
            <a
              href="https://www.linkedin.com/in/dinardavis/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
            <Link
              to="/contact"
              className={`contact-btn ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
