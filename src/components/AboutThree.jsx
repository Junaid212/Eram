import React from "react";
import { Link } from "react-router-dom";

const AboutThree = () => {
  return (
    <div className="about-area-1 space-top">
      <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Eram"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Eram"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-7 text-xl-center">
            <div className="about-thumb3 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/wcu-3.png" alt="Eram" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-30">
                <span className="sub-title"></span>
                <h2 className="sec-title">Instrumentation Tube Fitting</h2>
                {/* <p className="sec-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                </p> */}
              </div>
              <div className="row gy-4 justify-content-md-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-md-auto">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        <b>TUBE SIZE:</b> 1/16" OD TO 2" OD, 2MM OD TO 50 MM OD
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <b>MATERIAL GRADES:</b> SS 304, SS 316, BRASS, SPECIAL ALLOYS
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <b>THREAD:</b> NPT, BSP, BSPT, UNF, ISO, SAE ETC.
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <b>PRESSURE RATING:</b> 6000S1 FOR STANLESS STEEL, 300/1000/3000PSI FOR BRASS
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-md-auto col-lg-6">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Quick Service Times
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Free Trade Appraisal
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Genuine spare parts
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Unbeatable savings!
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              {/* <div className="btn-wrap mt-40">
                <Link to="/about" className="btn style2">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
