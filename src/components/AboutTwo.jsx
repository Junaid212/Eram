import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/normal/47.webp" alt="Eram" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/48.webp" alt="Eram" />
                <style>{`
                  .about-img-2 {
                    height: 407px !important;
                    padding: 0 250px 0 20px;
                  }
                    @media (max-width: 768px) {
                      .about-img-2 {
                        padding: 0 0px 0 20px;
                      }
                    }
                `}</style>
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="Eram" />
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
                    <img src="assets/img/icon/about_icon2-2.png" alt="Eram" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">10</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Experiences</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">Welcome To Eram Company Ltd</span>
                <h2 className="sec-title">
                  We envision a future that is promising and progressive{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Eram"
                  />
                </h2>
                <p className="sec-text">
                  Having this emotion, we are strategically running every lap in the 
                  various areas with other such competitors and firmly endeavoring to
                   become a leader amongst all. Our inspiration began with creating 
                   spaces for every individual, and it motivates us to build those 
                   spaces with great value addition.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  {/* <img src="assets/img/icon/about_icon2-3.svg" alt="Eram" /> */}
                </div>
                <div className="about-feature-wrap-details">
                  {/* <h5 className="about-feature-title">
                    Elite Automotive Service
                  </h5> */}
                  <p className="about-feature-text" style={{color:'red'}}>
                    Eram emerged as a new age company with a real purpose to build professionalism in the contracting industry. The founders had envisioned creating a system where in the entire process shall be smooth and hassle-free for all its stakeholders.
                  </p>
                </div>
              </div>
              {/* <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="Eram" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Pro Drive Garage</h5>
                  <p className="about-feature-text">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed{" "}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
