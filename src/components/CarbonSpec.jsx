import React from "react";
import { Link } from "react-router-dom";

const CarbonSpec = () => {
  return (
    <div className="pricing-area-2 space-top">   
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">About</span>
              <h2 className="sec-title">
                Carbon Steel Pipes{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="/assets/img/bg/title-bg-shape.png"
                  alt="Eram"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="/assets/img/icon/picing-icon_2-1.svg" alt="Eram" />
                </div>
                <h4 className="pricing-card_title">Product</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">Alloy Steel</h3>
                {/* <h6 className="pricing-card_currency">Eram is perceiving customer satisfaction at the utmost level by our competitive prices and our on-time deliveries.</h6> */}
                <div className="checklist style2">
                     <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Size Range: 1/4" - 16"
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Standards: ASTM A335 P5, P9, P11, P12, P22
                    </li>
                    {/* <li>
                      <i className="fas fa-angle-double-right" />
                      Return Account 30%
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      For 15 days
                    </li> */}
                  </ul>
                  
                </div>
                {/* <Link className="btn" to="/about">
                  Get This Plan
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2 pricing-card-active">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="/assets/img/icon/picing-icon_2-2.svg" alt="Eram" />
                </div>
                <h4 className="pricing-card_title">Product</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">High Temperature Carbon Steel</h3>
                {/* <h6 className="pricing-card_currency">We ensure our effective and proactive customer service and personalized responsiveness to our valued customers and continuously improving our skills.</h6> */}
                <div className="checklist style2">
                 <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Seamless: SCH 20, STD, 30, 40, 60, XS, 80, 160, XXS
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Size Range: 1/2" - 24"
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Standards: ASTM A53/A106, API 5L GR. A/B
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Welded: 24" - 72" (Longitudinal/Spiral)
                    </li>
                  </ul>
                </div>
                {/* <Link className="btn" to="/about">
                  Get This Plan
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="/assets/img/icon/picing-icon_2-3.svg" alt="Eram" />
                </div>
                <h4 className="pricing-card_title">Product</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">Low Temperature Carbon Steel</h3>
                {/* <h6 className="pricing-card_currency">1.00/USD</h6> */}
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Seamless: SCH 20, STD, 40, 80
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Size Range: 1/4" - 16"
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Standards: ASTM A333, A671 GR.3, GR.6
                    </li>
                    {/* <li>
                      <i className="fas fa-angle-double-right" />
                      For 15 days
                    </li> */}
                  </ul>
                </div>
                {/* <Link className="btn" to="/about">
                  Get This Plan
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonSpec;
