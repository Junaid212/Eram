import React from "react";
import { Link } from "react-router-dom";

const ScaffService = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Constructing
Your Success,
One Project at a Time{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Eram"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6 ">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/scaff/98.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Scaffolding Material Sales & Rental</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/fabrication" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/scaff/99.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/civil-mechanical">Scaffolding Tools & Accessories Supply</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/civil-mechanical" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/scaff/100.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/material-supply">Consulting, Design & Inspection Services</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/material-supply" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
             
        </div>
      </div>
    </div>
  );
};

export default ScaffService;
