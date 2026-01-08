import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const MarqueeOne = () => {
  return (
    <div className=" bg-smoke" style={{padding:'50px 0 50px 0'}}>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee>
              <div className="item">
                <Link to="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="Eram"
                  />
                  <span>We earn loyalty for our work</span>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="Eram"
                  />
                  <span className="text-stroke">listen to what customers want</span>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="Eram"
                  />
                  <span>We earn loyalty for our work</span>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <img
                    src="assets/img/icon/marquee-icon-1-1.svg"
                    alt="Eram"
                  />
                  <span className="text-stroke">listen to what customers want</span>
                </Link>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
