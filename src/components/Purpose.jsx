import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

// Remove the import statements since images are in public folder
// No imports needed for public folder images

export default function Purpose({
  subTitle = 'Eram Company Ltd',
  title = 'Serving You with Passion and Precision',
  text = 'Eram emerged as a new age company with a real purpose to build professionalism in the contracting industry. The founders had envisioned creating a system where in the entire process shall be smooth and hassle-free for all its stakeholders.',
  trustedClientsCount = 4000,
  trustedClientsImages = [
    'assets/img/icon/18.png',  // Direct path from public folder
    'assets/img/icon/19.png',  // Direct path from public folder
    'assets/img/icon/20.png'   // Direct path from public folder
  ],
  imgList = [
    'assets/img/intro/33.webp',
    'assets/img/intro/34.webp',
    'assets/img/intro/35.webp'
  ]
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Banner Two Start */}
      <section className="banner-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="banner-two__left wow fadeInLeft" data-wow-delay="100ms">
                <div className="banner-two__title-box">
                  <p className="banner-two__sub-title">{subTitle}</p>
                  <h2 className="banner-two__title">{title}</h2>
                </div>
                <p className="banner-two__text">{text}</p>
                <div className="banner-two__btn-and-video-box">
                  <div className="banner-two__btn-box">
                    <p>Our inspiration began with creating spaces for every individual, and it motivates us to build those spaces with great value addition.</p>
                  </div>
                  {/* <div className="banner-two__video-link">
                    <button 
                      className="video-popup"
                      onClick={() => setIsOpen(true)}
                    >
                      <div className="banner-two__video-icon">
                        <span className="fas fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </button>
                    <h4 className="banner-two__video-text">See How It Works</h4>
                  </div> */}
                </div>
                <div className="banner-two__trusted-clients">
                  {/* <ul className="list-unstyled banner-two__trusted-clients-list">
                    {trustedClientsImages.map((image, index) => (
                      <li key={index}>
                        <div className="banner-two__trusted-clients-img">
                          <img src={image} alt={`Trusted Client ${index + 1}`} />
                        </div>
                      </li>
                    ))}
                  </ul> */}
                  
                  <div className="banner-two__trusted-clients-content">
                    <div className="banner-two__trusted-clients-count">
                      {/* <div className="banner-two__count count-box">
                        <CountUp end={trustedClientsCount} duration={1.5} />
                        <span>+</span>
                      </div> */}
                      {/* <p className="banner-two__trusted-clients-text">Our inspiration began with creating spaces for every individual, and it motivates us to build those spaces with great value addition.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="banner-two__right wow fadeInRight" data-wow-delay="300ms">
                <div className="banner-two__shape-1"></div>
                <div className="banner-two__shape-2"></div>
                <ul className="list-unstyled banner-two__img-list">
                  {imgList.map((image, index) => (
                    <li key={index}>
                      <div className="banner-two__img-single">
                        <img src={image} alt={`img ${index + 1}`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
      .banner-two {
    position: relative;
    display: block;
    background-color: var(--maroof-white);
    overflow: hidden;
    padding: 120px 0 85px;
    z-index: 1;
}

.banner-two__left {
    position: relative;
    display: block;
    margin-top: 10px;
}

.banner-two__title-box {
    position: relative;
    display: block;
    margin-bottom: 20px;
}

.banner-two__sub-title {
    position: relative;
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    color: red;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid gray;
    padding: 8px 23px 6px;
    border-radius: 14px;
}

.banner-two__title {
    font-size: 70px;
    font-weight: 900;
    line-height: 80px;
    margin-top: 13px;
    
}

.banner-two__text {
    color: var(--maroof-black);
}

.banner-two__btn-and-video-box {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 41px;
    margin-bottom: 31px;
}

.banner-two__btn-box p{
    position: relative;
    display: block;
    color: red;
}

.banner-two__video-link {
    position: relative;
    display: flex;
    align-items: center;
}
button.video-popup {
    padding: 0px;
    border-radius: 50%;
}

.banner-two__video-icon {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: var(--maroof-black);
    background-color: transparent;
    border: 1px solid var(--maroof-black);
    border-radius: 50%;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    z-index: 1;
}

.banner-two__video-icon:hover {
    background-color: var(--maroof-base);
    border: 1px solid var(--maroof-base);
    color: var(--maroof-white);
}

.banner-two__video-link .ripple,
.banner-two__video-icon .ripple:before,
.banner-two__video-icon .ripple:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -ms-box-shadow: 0 0 0 0 rgba(var(--maroof-black-rgb), 0.6);
    -o-box-shadow: 0 0 0 0 rgba(var(--maroof-black-rgb), 0.6);
    -webkit-box-shadow: 0 0 0 0 rgba(var(--maroof-black-rgb), 0.6);
    box-shadow: 0 0 0 0 rgba(var(--maroof-black-rgb), 0.6);
    -webkit-animation: ripple 3s infinite;
    animation: ripple 3s infinite;
}

.banner-two__video-icon .ripple:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    content: "";
    position: absolute;
}

.banner-two__video-icon .ripple:after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    content: "";
    position: absolute;
}

.banner-two__video-text {
    position: relative;
    display: block;
    font-size: 20px;
    color: var(--maroof-black);
    line-height: 20px;
    font-weight: 300;
    margin-left: 15px;
    
}

.banner-two__trusted-clients {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.banner-two__trusted-clients-list {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.banner-two__trusted-clients-list li {
    position: relative;
    display: block;
}

.banner-two__trusted-clients-list li+li {
    margin-left: -10px;
}

.banner-two__trusted-clients-img {
    position: relative;
    display: block;
    height: 54px;
    width: 54px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
}

.banner-two__trusted-clients-img img {
    width: 100%;
    border-radius: 50%;
    border: 2px solid var(--maroof-white);
}

.banner-two__trusted-clients-content {
    position: relative;
    display: block;
}

.banner-two__trusted-clients-count {
    position: relative;
    display: block;
    margin-left: 18px;
}

.banner-two__count {
    position: relative;
    display: flex;
    align-items: center;
}

.banner-two__count h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
}

.banner-two__count span {
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
}

.banner-two__right {
    position: relative;
    display: block;
    margin-left: -9px;
}

.banner-two__shape-1 {
    position: absolute;
    top: -591px;
    left: 98px;
    width: 258px;
    height: 880px;
    background: linear-gradient(188.79deg, #E63A27 -60.65%, rgba(230, 58, 39, 0) 62.78%);
    border-radius: 133px;
    transform: rotate(-154.04deg);
    z-index: -1;
}

.banner-two__shape-2 {
    position: absolute;
    bottom: -550px;
    right: 78px;
    width: 258px;
    height: 880px;
    background: linear-gradient(178.73deg, #E63A27 -36.87%, rgba(230, 58, 39, 0) 56.32%);
    border-radius: 133px;
    transform: rotate(25.96deg);
    z-index: -1;
}

.banner-two__img-list {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.banner-two__img-list li {
    position: relative;
    display: block;
}

.banner-two__img-single {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 20px;
    border: 5px solid var(--maroof-white);
    max-width: 190px;
    width: 100%;
}

.banner-two__img-single img {
    width: 100%;
    border-radius: 20px;
}

.banner-two__img-list li:nth-child(2) .banner-two__img-single {
    border-radius: 5px;
    border: 6px solid var(--maroof-white);
    max-width: 230px;
}

.banner-two__img-list li:nth-child(2) .banner-two__img-single img {
    border-radius: 5px;
}
    @media (max-width: 768px) {
    .banner-two__img-list {
    flex-wrap: nowrap
    }
    .banner-two__title {
        font-size: 30px;
    font-weight: 900;
    line-height: 40px;
    }
    .banner-two {
    padding: 50px 0 50px;
}
      }
 @media (min-width: 1024px) {
    .banner-two__img-list {
    flex-wrap: nowrap
    }
      }
      `}</style>
    </>
  );
}