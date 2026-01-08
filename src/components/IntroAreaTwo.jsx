import React from "react";
import { Link } from "react-router-dom";

const IntroAreaTwo = () => {
  return (
    <div
      className="intro-area-2 space mt-0 "
      style={{
        backgroundImage: "url(assets/img/elect/75.webp)",
        backgroundSize: "cover",
      }}
    >
            <div className="  title-area text-center">
              <span className="sub-title">Why Choose Us</span>
              <h2 className=" sec-title text-white">Responsibly creating value for a shared future</h2>
            </div>
      <div className="container pb-100">
        
        <div className="row gy-30 justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/elect/71.webp" alt="Eram" />
              </div>
              <div className="details">
                <h3>Transparency</h3>
                <p>
                  We value our customers and offer a highly transparent experience and provide 
                  top-quality products. Our team members collaborate and innovate to find creative.
                </p>
                {/* <Link className="btn style-border3" to="/service">
                  Buy Part’s <i className="fas fa-arrow-right ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/elect/72.webp" alt="Eram" />
              </div>
              <div className="details">
                <h3>Ethical</h3>
                <p>
                  We strive to operate in accordance with the rules and standards for the right 
                  conduct for engineering and environmental professionals. 
                </p>
                {/* <Link className="btn style-border3" to="/service">
                  Sell Your Part’s <i className="fas fa-arrow-right ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/elect/73.webp" alt="Eram" />
              </div>
              <div className="details">
                <h3>Professionalism</h3>
                <p>
                  We strive to provide the best quality and professionalism 
                  on every project we make! We hold our work and service to the 
                  highest standards every time
                </p>
                {/* <Link className="btn style-border3" to="/service">
                  Book Services <i className="fas fa-arrow-right ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/elect/74.webp" alt="Eram" />
              </div>
              <div className="details">
                <h3>Customer-Friendly</h3>
                <p>
                  Our customer is our top priority. We believe in exceeding customer needs 
                  and expectations and work hard to build long-term, mutually beneficial business.
                </p>
                {/* <Link className="btn style-border3" to="/service">
                  Book Services <i className="fas fa-arrow-right ms-2" />
                </Link> */}
              </div>
            </div>
5          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAreaTwo;
