import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer__logo">RJ SONU KD</div>
      <ul className="permalinks">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Experience</Link>
        </li>
        <li>
          <Link>Service</Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>Testimonials</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      <div className="footer__socials">
       
        
        
        <Link to = 'https://facebook.com/'> <FaFacebookF /></Link>
        <Link to = 'https://instagram.com/'> <FiInstagram /></Link>
        <Link to = 'https://twitter.com/'> <IoLogoTwitter /></Link>
      </div>
      <div className="footer__copyright">
        <small>&copy; nocopyright@SKD</small>
      </div>
    </footer>
  );
}
