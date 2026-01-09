import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import CountUp from 'react-countup'; // Import CountUp from react-countup


const AboutSix = () => {
  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div
              className="about-two__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-two__img-box">
                <div className="about-two__img">
                  <img src="/assets/img/blog/image.png" alt="About Us" />
                </div>
                <div className="about-two__shape-1">
                  <img src="/assets/image.png" alt="Shape" />
                </div>
                <div className="about-two__count-box">
                  <div className="about-two__count-icon">
                    <span className="icon-wall"></span>
                  </div>
                  <div className="about-two__count-inner">
                    <div className="about-two__count count-box">
                      <h3 className="count-text">
                        <CountUp start={0} end={20} duration={1.5} /> {/* Counter from 0 to 20 */}
                      </h3>
                      <span className="about-two__count-plus">k</span>
                      <span className="about-two__count-plus">+</span>
                    </div>
                    <p className="about-two__count-text">Clients Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-two__right">
              <div className="section-title text-left">
                {/* <div className="section-title__tagline-box">
                  <span className="section-title__tagline">About Us</span>
                </div> */}
                <h2 className="section-title__title">
                  Eram Company Ltd
                </h2>
              </div>
              <p className="about-two__text">
                We are the leading trading companies in Saudi Arabia. We have been an established and popular 
                company with an excellent track record for the best customer satisfaction. By comprehending 
                the needs of our clients and tailoring solutions, we have consistently demonstrated the ability 
                to understand and implement fully the scope of any project.
              </p>
              <p className="about-two__text">
                Because of our continuous pursuit for recognition and devoted customer service, we have secured 
                the confidence and appreciation of our clients. By comprehending the needs of our clients and 
                tailoring solutions, we have consistently demonstrated the ability to understand and implement 
                fully the scope of any project. We recognized as the finest, most trusted and highly regarded 
                company in our field.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .about-two {
    position: relative;
    display: block;
    padding: 0 0 120px;
    z-index: 1;
}

.about-two__left {
    position: relative;
    display: block;
    margin-left: 50px;
    margin-right: 30px;
}

.about-two__img-box {
    position: relative;
    display: block;
}

.about-two__img {
    position: relative;
    display: block;
}

.about-two__img::before {
    content: "";
    position: absolute;
    left: -30px;
    top: 10px;
    right: 30px;
    bottom: -30px;
    border: 5px solid var(--maroof-base);
    border-radius: 20px;
    animation: topBottom 3s ease-in-out infinite;
}

.about-two__img img {
    width: 100%;
    border-radius: 20px;
}

.about-two__shape-1 {
    position: absolute;
    left: -22px;
    bottom: -22px;
    animation: leftRight 4s ease-in-out infinite;
}

.about-two__shape-1 img {
    width: auto;
}

.about-two__count-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    max-width: 280px;
    width: 100%;
    padding: 20px 20px 20px;
}

.about-two__count-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: var(--maroof-primary);
    border-radius: 50%;
}

.about-two__count-icon span {
    position: relative;
    display: inline-block;
    font-size: 48px;
    color: var(--maroof-base);
    transition: all 500ms linear;
    transition-delay: 0.1s;
    transform: scale(1);
}

.about-two__count-box:hover .about-two__count-icon span {
    transform: scale(0.9);
}

.about-two__count-inner {
    position: relative;
    display: block;
}

.about-two__count {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
}

.about-two__count h3 {
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
}

.about-two__count span {
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
    color: var(--maroof-black);
}

.about-two__right {
    position: relative;
    display: block;
    margin-top: 73px;
}

.about-two__right .section-title {
    margin-bottom: 20px;
}

.about-two__progress-box {
    position: relative;
    display: block;
    margin-top: 24px;
    margin-bottom: 38px;
}

.about-two__progress-box li {
    position: relative;
    display: block;
}

.about-two__progress-box li+li {
    margin-top: 21px;
}

.about-two__progress {
    position: relative;
    display: block;
}

.about-two__progress-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    color: var(--maroof-black);
    margin-bottom: 3px;
}

.about-two__progress .bar {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: rgba(var(--maroof-bdr-color-rgb), .50);
    border-radius: 3px;
}

.about-two__progress .bar-inner-one {
    position: relative;
    display: block;
    width: 85%;
    height: 5px;
    border-radius: 3px;
    background-color: var(--maroof-base);
    -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
}
.about-two__progress .bar-inner-two {
    position: relative;
    display: block;
    width: 77%;
    height: 5px;
    border-radius: 3px;
    background-color: var(--maroof-base);
    -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
}
.about-two__progress .bar-inner-three {
    position: relative;
    display: block;
    width: 95%;
    height: 5px;
    border-radius: 3px;
    background-color: var(--maroof-base);
    -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
}

.about-two__progress .count-text {
    position: absolute;
    right: -14px;
    bottom: 8px;
    color: var(--maroof-black);
    line-height: 26px;
    font-size: 20px;
    text-align: center;
    font-weight: 300;
    opacity: 1;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
}

.about-two__progress .bar-inner.counted .count-text {
    opacity: 1;
}

.about-two__progress .bar.marb-0 {
    margin-bottom: 0;
}

.about-two__btn-box {
    position: relative;
    display: block;
}

.about-two__btn {
    color: var(--maroof-white) !important;
}

.about-two__btn span {
    color: var(--maroof-white) !important;
}
      `}</style>
    </section>
  );
};

export default AboutSix;