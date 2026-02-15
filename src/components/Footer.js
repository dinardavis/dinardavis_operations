import React from "react";
import { Link } from "react-router-dom";
import { getPublicUrl } from "../utils/publicUrl";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo-link">
          <img
            src={`${getPublicUrl()}/imgs/main_logo.png`}
            alt="Dinar Davis"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Making your growing business easier to run.
          </p>
        </Link>
        <div className="footer-nav-column">
          <Link to="/" className="footer-link">
            Home
          </Link> |
          <Link to="/how-i-work" className="footer-link">
            How I Work
          </Link> |
          <Link to="/services" className="footer-link">
            Services
          </Link> |
          <Link to="/about" className="footer-link">
            About
          </Link> |
          <Link to="/contact" className="footer-link">
            Contact Me
          </Link>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Dinar Davis. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
