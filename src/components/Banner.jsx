import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Banner = ()=> {
    return (
        <div className="banner">
<div class="wrap">
  <div class="wrapv">
    <div class="vertical">
      <img src="assets/img/icon/13.png" alt="Eram"/>
    </div>
  </div>
          <div className="portfolio-area-1 overflow-hidden" id="portfolio-area-1">
                
                <div className="container-fluid ">
                  <div className="row global-carousel gx-10 ">
                    <Swiper
                      loop={true}
                      navigation={{
                        nextEl: ".portfolio-button-next",
                        prevEl: ".portfolio-button-prev",
                      }}
                      spaceBetween={10}
                      centeredSlides
                      slidesPerView={1}
                      slidesPerGroup={1}
                      speed={2000}
                      // pagination={{ clickable: true }}
                      autoplay={{
                        delay: 1000, // Changed to 1 second (1000ms)
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                      }}
                      className="mySwiper"
                      modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]} // Added Autoplay module
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                        1400: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/icon/16.png" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Quality Materials,
Unmatched
Performance
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/20.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Flanges that Fit, Flanges that Last - Choose Quality First
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/21.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Flowing Excellence Stainless Steel Pipes for Your Needs
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/22.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Secure Connections, Trusted Fasteners – Your Safety First
                                </h4>
                                {/* <span className="portfolio-card-details_subtitle">
                                  VoIP Services
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/23.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Strength, Integrity, Reliability – Trust Our Forged Fittings
                                </h4>
                                {/* <span className="portfolio-card-details_subtitle">
                                  VoIP Services
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/24.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Customized Solutions, Endless Potential – Choose Our Fabrication
                                </h4>
                                {/* <span className="portfolio-card-details_subtitle">
                                  VoIP Services
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/25.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  On Time, Every Time – Unlocking Logistics Perfection
                                </h4>
                                {/* <span className="portfolio-card-details_subtitle">
                                  VoIP Services
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div className="portfolio-card style2">
                            <div className="portfolio-card-thumb">
                              <img src="assets/img/bg/26.webp" alt="Eram" id="img"/>
                            </div>
                            <div className="portfolio-card-details">
                              <div className="media-left">
                                <h4 className="portfolio-card-details_title">
                                  Maintaining Efficiency Sustaining Success Choose Us
                                </h4>
                                {/* <span className="portfolio-card-details_subtitle">
                                  VoIP Services
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="container">
                  <div className="row justify-content-between align-items-end">
                    <div className="col-sm-auto">
                      <div className="title-area" id='title-area' style={{marginTop:'50px'}}>
                        <div className="icon-box">
                          <button className="slick-arrow default portfolio-button-next">
                            <i className="fas fa-arrow-left" />
                          </button>
                          <button className="slick-arrow default portfolio-button-prev">
                            <i className="fas fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
</div>
<style>{`


.vertical {
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -ms-transform-origin: right top 0;
  -moz-transform-origin: right top 0;
  -webkit-transform-origin: right top 0;
  transform-origin: right top 0;
   font-family: "Londrina Outline", sans-serif;
   font-style: normal;
  right: 95%;
  color: #ffb8c2;
  padding-top: 1vw;
  padding-right: 0vw;
  font-size: 20vw;
  white-space: nowrap;
  text-transform: uppercase;
  cursor: vertical-text;
  position: absolute;
  display: block;
  height: auto;
  direction: rtl;
  z-index: -11 !important;
  background: #FB2808;
  height: 500px;
  width: 850px;
}

.wrap {
  width: 100vw;
}
.wrapv {
  background: rgba(255, 255, 255, 0.5);
  z-index: -5;
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 10vw;
}
  #portfolio-area-1{
  margin-left: 300px;
  margin-right: -220px;
  }
  .portfolio-card .portfolio-card-thumb #img{
    border-radius: 0px;
    height: 550px;
    width: 460px !important;
  }
.portfolio-card.style2 .portfolio-card-details_title{
background: red;
color: white;
}


    @media (max-width: 768px) {
     .wrap{
     width: full;
    //  height: 400px;
     margin-left: -220px;
     }
    .vertical {
  padding-top: 2vw;
  padding-right: 20vw;
  font-size: 20vw;
  height: 230px;
  width: 760px;
}
#title-area{
    margin-top: 30px !important;
}
}

`}</style>
        </div>
    )
}
export default Banner