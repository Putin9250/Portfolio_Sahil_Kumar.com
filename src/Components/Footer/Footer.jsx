import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="back-top flexCenter">
        <a href="#Home">Back To Top</a>
      </div>
      <hr />
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Sahil Kumar</h3>
            <p>
              Web Developer focused on performance,
              <br />
              accessibility, and scalable impact
            </p>
          </div>

          <div className="footer-center">
            <p>
              <strong>Phone:</strong>+91-9582586200
            </p>
            <p>
              <strong>Email:</strong> sahil24042005@gmail.com
            </p>
            <p>
              <strong>Location:</strong> New Delhi, India
            </p>
          </div>

          <div className="footer-right">
            <p>
              Connect with me:{" "}
              <a href="https://www.linkedin.com/in/putin1/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </footer>
      <hr />
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Sahil Kumar. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
