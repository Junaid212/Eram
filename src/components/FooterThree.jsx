import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(/assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logo">
            <Link to="/">
              <img src="/assets/img/icon/14.png" alt="Eram" style={{height:"80px"}}/>
            </Link>
          </div>
          <h3 className="footer-top-title text-white">
            Subscribe our newsletter for updates
          </h3>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email Address"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  Eram is a purpose-driven, modern contracting company committed to professionalism, seamless processes, and value-driven spaces for every individual.
                </p>
                <div className="social-btn style3">
                  <Link to="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/scaffolding">Home</Link>
                    </li>
                    <li>
                      <Link to="/scaffolding/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/scaffolding/products">Systems</Link>
                    </li>
                    <li>
                      <Link to="/scaffolding/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/scaffolding/scaffolding-material-sales">Scaffolding Material Sales & Rental</Link>
                    </li>
                    <li>
                      <Link to="/scaffolding/scaffolding-tools-accessories-supply">Scaffolding Tools & Accessories Supply</Link>
                    </li>
                    <li>
                      <Link to="/scaffolding/consulting-design-inspection">Consulting, Design & Inspection Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        Al Jubail, Saudi Arabia
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link to="tel:+966 557639443">+966 557639443</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link to="mailto:info@eramltd.com">
                          info@eramltd.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Eram</Link> 2026 | All Rights Reserved
              </p>
            </div>
            {/* <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Tarms &amp; Condition</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
