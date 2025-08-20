import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import './Footer.css'; // Optional: external CSS for more control

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">All Rights Reserved &copy; {new Date().getFullYear()} | Adil</h5>
        <div className="footer-links mb-3">
          <Link to="/about" className="footer-link">About</Link>
          <span className="mx-2">|</span>
          <Link to="/contact" className="footer-link">Contact</Link>
          <span className="mx-2">|</span>
          <Link to="/policy" className="footer-link">Privacy Policy</Link>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
