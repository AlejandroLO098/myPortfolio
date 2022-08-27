import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import("./Footer.css");

export const Footer = () => {
  console.log(Link);
  return (
    <footer className="footer-container">
      <div className="footer-wrap">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">About </h1>
              <a className="link" to="/sigin">
                Blog
              </a>
              <a className="link" to="/sigin">
                Contact
              </a>
              <a className="link" to="/sigin">
                Suppliers
              </a>
              <a className="link" to="/sigin">
                Affiliates & Partners
              </a>
              <a className="link" to="/sigin">
                Terms of Service
              </a>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Legal & Privacy</h1>
              <a className="link" to="/sigin">
                Conditions of Use
              </a>
              <a className="link" to="/sigin"></a>
              <a className="link" to="/sigin">
                Privacy Policy
              </a>
              <a className="link" to="/sigin">
                Cookie Preferences
              </a>
              <a className="link" to="/sigin">
                GA Privacy
              </a>
            </div>
          </div>
          {/* <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Contact Us</h1>
              <a className="link" to="/sigin">
                Contact
              </a>
              <a className="link" to="/sigin">
                Support
              </a>
              <a className="link" to="/sigin">
                Destinations
              </a>
              <a className="link" to="/sigin">
                Sponsorships
              </a>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Legal & Privacy</h1>
              <a className="link" to="/sigin">
                GA Privacy Rights
              </a>
              <a className="link" to="/sigin">
                Cookie Preferneces
              </a>
              <a className="link" to="/sigin">
                Conditions of Use
              </a>
              <a className="link" to="/sigin">
                Privacy Policy
              </a>
            </div>
          </div> */}
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <a to="/" className="l-link">
              Alegandro Lopez
            </a>
            <small className="web-rights">
              Alejandro Lopez &copy; {new Date().getFullYear()} All rights
              reserved.
            </small>
            <div className="social-icons">
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className="social-icon-links"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                className="social-icon-links"
                href="https://www.linkedin.com/in/alejandro-lopez001/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
