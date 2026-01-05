import React from "react";
import { Link } from "react-router-dom";

const Vision2030 = () => {
  return (
    <div
      className="hero-wrapper hero-4"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/36.webp)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style4">
              <div className="title-area">
                  <span className="sub-title">VISION 2030</span>
                  <h2 className="sec-title text-white">Vision 2030 is a bold yet achievable blueprint for an ambitious nation.</h2>
                </div>
              <p className="hero-text text-white">
                 Facilities include Fabrication, Civil & Mechanical Contracts as well as technical advices and carrying out inspections.
              </p>
              <div className="btn-group">
                <Link to="https://www.sacm.org/ksa/vision2030" target="blank" className="btn">
                  Know More
                </Link>
                {/* <Link to="/service" className="btn style-border">
                  Our Service
                </Link> */}
              </div>
            </div>
          </div>
          <style>
            {`
            .hero-style4 {
    padding: 100px 0 80px;
}
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Vision2030;
