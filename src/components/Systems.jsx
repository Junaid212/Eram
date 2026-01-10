import React from "react";
import { Link } from "react-router-dom";

const Systems = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Systems</span>
              <h2 className="sec-title">
                Constructing
Your Success,
One Project at a Time{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="/assets/img/bg/title-bg-shape.png"
                  alt="Eram"
                />
              </h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6 ">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/27.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-1.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/fabrication">Cuplock System</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/fabrication" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/28.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-2.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/civil-mechanical">Kwikstage & Ringlock Systems</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/civil-mechanical" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/29.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/material-supply">Scaffolding Tubes, Couplers & Joint Access Systems</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/material-supply" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/30.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/warehousing">Walking Boards & Planks (Wooden & Steel)</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/warehousing" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/31.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/maintenance">Table Formwork Systems</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/maintenance" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/32.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/technical-support">Aluminium System Scaffolds & Ladders</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/technical-support" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/32.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/technical-support">Panel Systems for Wall & Column Formwork</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/technical-support" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/32.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/technical-support">Tower Scaffolds (Fixed & Mobile)</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/technical-support" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/service/32.webp)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="/assets/img/icon/service-icon_1-3.svg" alt="Eram" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/mechanical/technical-support">Cantilever Frame & Korean Frame Systems</Link>
                  </h4>
                  {/* <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p> */}
                </div>
              </div>
              <Link to="/mechanical/technical-support" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
             
        </div>
      </div>
    </div>
  );
};

export default Systems;
