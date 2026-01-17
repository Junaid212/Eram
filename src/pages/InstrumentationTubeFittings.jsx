import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutThree from "../components/AboutThree";
const InstrumentationTubeFittings = () => {
    let [active, setActive] = useState(true);
        useEffect(() => {
          setTimeout(function () {
            setActive(false);
          }, 2000);
        }, []);
    
      return (
        <>
        {/* Preloader */}
          {active === true && <Preloader />}
    
          {/* Header one */}
          <HeaderOne/>
          <Breadcrumb title={"Instrumentation Tube Fitting"} />
          <AboutThree />
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_2-1.png" alt="Eram" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_2-2.png" alt="Eram" />
              </div>
              {/* <div className="about-counter-wrap jump-reverse">
                <img src="/assets/img/icon/about_icon2-1.svg" alt="Eram" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Trusted Customer</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src="/assets/img/icon/about_icon2-2.png" alt="Eram" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">10</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Experiences</h4>
              </div> */}
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">Welcome To Eram Company Ltd</span>
                {/* <h2 className="sec-title">
                  We envision a future that is promising and progressive{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="/assets/img/bg/title-bg-shape.png"
                    alt="Eram"
                  />
                </h2>
                <p className="sec-text">
                  Having this emotion, we are strategically running every lap in the 
                  various areas with other such competitors and firmly endeavoring to
                   become a leader amongst all. Our inspiration began with creating 
                   spaces for every individual, and it motivates us to build those 
                   spaces with great value addition.
                </p> */}
              </div>
              <div className="about-feature-wrap style-shadow ">
                <div className="icon">
                  <img src="/assets/img/icon/about_icon2-3.svg" alt="Eram" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title" >
                    Pressure Gauges - liquid Filled - Bottom Mount
                  </h5>
                  <p className="about-feature-text" >
                    For service requireing a waterproof, steamproof or weatherproof gauge, 
                    with the added problems of pulsation and vibration This pressure gauge 
                    has shock absorbing polyglide movement plus liquid filling to absorb 
                    effect of vibration and pulsation.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="/assets/img/icon/about_icon2-4.svg" alt="Eram" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Pressure Gauges - Dry Gauge - Bottom Mount</h5>
                  <p className="about-feature-text">
                    Ideal for indicationg pressure above atmospheric. Usable on air, gas, water or 
                    any Other pressure medium which does not attack bronze. Install protective syphon 
                    when used on stam.v{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<PortfolioTwo />
    <FooterAreaTwo />

    </>
  );
};

export default InstrumentationTubeFittings;
