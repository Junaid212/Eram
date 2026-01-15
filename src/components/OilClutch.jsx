import React from "react";
import { Link } from "react-router-dom";

const OilClutch = () => {
  return (
    <div className="pricing-area-2 space-top">   
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              {/* <span className="sub-title">Investment Plan</span> */}
              <h2 className="sec-title">
                Oil field Clutch{" "}
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
                  {/* <img src="/assets/img/icon/picing-icon_2-1.svg" alt="Eram" /> */}
                </div>
                <h4 className="pricing-card_title">LT/AVB/CB Pneumatic Clutch</h4>
              </div>
              <div className="pricing-card-details">
                {/* <h3 className="pricing-card_price">MIN 500/USD</h3> */}
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Feature </b>
                    </li> 
                    <h6 className="pricing-card_currency">Large transmitted torque, steady joint, easy to install, vibration absorption</h6>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Type </b>
                    </li> 
                    <h6 className="pricing-card_currency">LT300/100, LT500/125T, LT600/125T, LT700/135CBC</h6>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Use </b>
                    </li> 
                    <h6 className="pricing-card_currency">Drawwork, linkage unit,compond transmission unit</h6>
                     
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
                  {/* <img src="/assets/img/icon/picing-icon_2-2.svg" alt="Eram" /> */}
                </div>
                <h4 className="pricing-card_title">Common Pneumatic Clutch</h4>
              </div>
              <div className="pricing-card-details">
                {/* <h3 className="pricing-card_price">MIN 600/USD</h3> */}
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Material</b>: Iron and Rubber
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Type</b>: Ventilated clutch-brake
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Advantage</b>: Guaranteed Performance
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Export market</b>: All over the world
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <b>Certificate</b>: ISO 9001:2000
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
                  {/* <img src="/assets/img/icon/picing-icon_2-3.svg" alt="Eram" /> */}
                </div>
                <h4 className="pricing-card_title">Types</h4>
              </div>
              <div className="pricing-card-details">
                {/* <h3 className="pricing-card_price">MIN 1000/USD</h3> */}
                {/* <h6 className="pricing-card_currency">1.00/USD</h6> */}
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Diaphragm Pneumatic Clutch
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Ventilation Pneumatic Clutch
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Pneumatic Tyre For Clutch,Rubber Air Bag
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Friction Disc for Clutch
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Clutch Friction Wheel Hub
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Spring Leaf for Clutch
                    </li>
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

export default OilClutch;
