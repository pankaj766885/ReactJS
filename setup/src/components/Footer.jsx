import React from "react";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <h1 className="logo">MyLogo</h1>

          <hr />

          <h3>Contact Information</h3>

          <p className="privacy">Privacy Policy</p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <h4>SITE MAP</h4>

          <ul>
            <li>My business</li>
            <li>My products</li>
            <li>My services</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-right">
          <div className="subscribe">
            <input
              type="email"
              placeholder="Email address"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2026
      </div>
    </footer>
  );
};

export default Footer;
