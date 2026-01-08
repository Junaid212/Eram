import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
  return (
    <div className="about-area-1 space-top">
      <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="Eram"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="Eram"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-7 text-xl-center">
            <div className="about-thumb3 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/elect/58.webp" alt="Eram" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-30">
                <span className="sub-title">About Eram</span>
                <h2 className="sec-title">Efficient, Effective & Exceptional Trading Solutions</h2>
                <p className="sec-text">
                  We are the leading trading companies in Saudi Arabia. We have been an established and
                   popular company with an excellent track record for the best customer satisfaction. 
                   By comprehending the needs of our clients and tailoring solutions, we have consistently 
                   demonstrated the ability to understand and implement fully the scope of any project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
