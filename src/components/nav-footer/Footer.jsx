import React from "react";
import "./style/styleFooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-text">Creado por Exequiel Maydana</h3>
      <div className="footer-contact">
        <ul className="contact">
          <li className="contact-item">
            <a href="">
              <i className="bx bxl-instagram contact-icon"></i>
            </a>
          </li>
          <li className="contact-item">
            <a href="">
              <i className="bx bxl-linkedin contact-icon"></i>
            </a>
          </li>
          <li className="contact-item">
            <a href="">
              <i className="bx bxl-twitter contact-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
