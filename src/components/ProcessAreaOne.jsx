import React from "react";

const ProcessAreaOne = () => {
  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
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
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Why Eram</span>
              <h2 className="sec-title">
                We Can Creat More Than You Expect
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-1.svg" alt="Eram" />
              </div>
              <h4 className="process-card-title">Our Mission</h4>
              <p className="process-card-text">
                Eram is perceiving customer satisfaction at the utmost level by our 
                competitive prices and our on-time deliveries. We ensure our effective
                 and proactive customer service and personalized responsiveness to our
                  valued customers and continuously improving our skills.
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-2.svg" alt="Eram" />
              </div>
              <h4 className="process-card-title">Our Vision</h4>
              <p className="process-card-text">
                Eram is recognized in the entire Saudi Arabia with excellence in defining 
                the standards of “CUSTOMER SERVICE” and being appreciated with our business
                 standards. We will realize this mission by setting the highest standards
                  in customer service, integrity, and responsiveness in the industry
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-3.svg" alt="Eram" />
              </div>
              <h4 className="process-card-title">Our Values</h4>
              <p className="process-card-text">
                Safety, Integrity, Transparency, and Community Relations, we at Eram make a
                 major effort to develop an ongoing dialogue and assistance with the local residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaOne;
