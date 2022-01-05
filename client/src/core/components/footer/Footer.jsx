import React from "react";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our information</h3>
          <ul className="footer__list">
            <li>8555, Glen Str, Pretoria, 0196</li>
            <li>Gauteng, South Africa</li>
            <li>+27 00 000 0000</li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About Us</h3>

          <ul className="footer__links">
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Copy Right
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Product</h3>

          <ul className="footer__links">
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Road bikes
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Mountain bikes
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Electric
              </a>
            </li>
            <li>
              <a
                href="wotchy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>

          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-facebook"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-twitter"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        &#169;2022 Wotchy. All rigths reserved
      </span>
    </footer>
  );
};

export default Footer;
