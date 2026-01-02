import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
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
                  alt="Fixturbo"
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
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Fabrication</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Civil & Mechanical Contracts</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Project Material Supply Management</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Warehousing, Marshalling, & Logistics</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Maintenance, Repair, & Overhaul</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/icon/17.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Technical Support & Value Added Services</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
             
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
