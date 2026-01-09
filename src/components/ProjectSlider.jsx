import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const ProjectSlider = () => {
  return (
    <div className="hero-wrapper space-bottom" id="hero">
      <div className="container global-carousel">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="hero-6 hero-slide" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/project/115.webp" alt="Eram" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Operation & Maintenance Services</span>
                <h1 className="hero-title">Sustaining Performance, Maximizing Efficiency</h1>
                <div className="btn-group">
                  <Link to="/shop" className="btn style2 style-radius">
                    Learn More
                  </Link>
                  {/* <span className="offer-tag">Up to 20% Off</span> */}
                </div>
              </div>
            </div>
          </div>
        </div> 
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-6 hero-slide" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/project/116.webp" alt="Eram" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Engineering Consultancy & Inspection Services</span>
                <h1 className="hero-title">Insightful Engineering, Flawless Execution</h1>
                <div className="btn-group">
                  <Link to="/shop" className="btn style2 style-radius">
                    Learn More
                  </Link>
                  {/* <span className="offer-tag">Up to 20% Off</span> */}
                </div>
              </div>
            </div>
          </div>
        </div> 
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-6 hero-slide" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/project/117.webp" alt="Eram" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Project Support Services</span>
                <h1 className="hero-title">Empowering Projects, Ensuring Success</h1>
                <div className="btn-group">
                  <Link to="/shop" className="btn style2 style-radius">
                    Learn More
                  </Link>
                  {/* <span className="offer-tag">Up to 20% Off</span> */}
                </div>
              </div>
            </div>
          </div>
        </div> 
          </SwiperSlide>
        </Swiper>
        {/*==============================
                Intro Area  
                ==============================*/}
                <div className="row gx-30 gy-30">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="hero-intro-card"
                      style={{ backgroundColor: "#F2F2EF" }}
                    >
                      <div className="intro-card-img" style={{height:'265px', width:'100% !important'}}>
                        <img src="assets/img/project/118.webp" alt="Eram" />
                      </div>
                      <div className="intro-card-details">
                        <h6 className="intro-card-subtitle">Service</h6>
                        <h4 className="intro-card-title">
                          <Link to="#">Project Support Services</Link>
                        </h4>
                        <Link to="/shop" className="btn style5 style-radius">
                          About
                          <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="hero-intro-card"
                      style={{ backgroundColor: "rgba(221, 76, 100, 0.3)" }}
                    >
                      <div className="intro-card-img">
                        <img src="assets/img/project/119.webp" alt="Eram" />
                      </div>
                      <div className="intro-card-details">
                        <h6 className="intro-card-subtitle">Service</h6>
                        <h4 className="intro-card-title">
                          <Link to="#">Engineering Consultancy & Inspection Services</Link>
                        </h4>
                        <Link to="/shop" className="btn style5 style-radius">
                          About
                          <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="hero-intro-card bg-theme">
                      <div className="intro-card-img">
                        <img src="assets/img/project/120.webp" alt="Eram" />
                      </div>
                      <div className="intro-card-details">
                        <h6 className="intro-card-subtitle text-white">
                          Service
                        </h6>
                        <h4 className="intro-card-title text-white">
                          <Link to="#">Operation & Maintenance (O&M) Services</Link>
                        </h4>
                        <Link to="/shop" className="btn style5 style-radius">
                          About
                          <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
      <style>{`
      .hero-title {
        font-size: 4rem;
      }
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
        }
      `}</style>
    </div>
  );
};

export default ProjectSlider;
