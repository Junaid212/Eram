import React from "react";
import { Link } from "react-router-dom";

const CTAOne = () => {
  return (
    <div className="cta-area-1 " style={{ marginBottom: "0px" }}>
      <div className="cta1-bg-thumb">
        <img src="/assets/img/bg/37.webp" alt="Eram"/>
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                {/* <span className="sub-title style2 text-white">Contact us</span> */}
                <h2 className="sec-title text-white mb-0">
                  Power End Spare Parts Bearings - Main Bearing For Mud Pumps
                </h2>
                <span className=" text-white">Main bearings for mud pumps were mounted on the crankshaft of the mud pumps. The bearings we supplied covers main bearing, eccentric bearing, crosshead bearing & pinion shaft bearing, which are used for popular triplex mud pumps worldwide.</span>
              </div>
            </div>
            {/* <div className="col-md-auto">
              <div className="title-area mb-0">
                <Link className="btn" to="/mechanical/contact">
                  View More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAOne;
