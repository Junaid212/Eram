import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const HeroFour = () => {
  return (
    <div className="hero-wrapper hero-3">
      <div className="hero-3-slider global-carousel">
        <Swiper
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/scaff/94.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="hero-style3">
                      <span className="sub-title text-white">
                        Walking Boards & Planks
                      </span>
                      <h1 className="hero-title text-white">
                        Efficient Formwork Seamless Construction Innovative
                      </h1>
                      {/* <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Vestibulum rhoncus nisl ac gravida porta. Mauris eu
                        sapien lacus. Etiam molestie justo neque, in convallis
                        massa tempus in.
                      </p> */}
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link to="/about" className="btn">
                          Learn More
                        </Link>
                        {/* <div className="call-media-wrap">
                          <div className="icon">
                            <img src="assets/img/icon/phone-1.svg" alt="Eram" />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/scaff/95.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <span className="sub-title text-white">
                        Table Formwork System
                      </span>
                      <h1 className="hero-title text-white">
                        Predision Panels Perfect Structures Efficient
                      </h1>
                      {/* <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Vestibulum rhoncus nisl ac gravida porta. Mauris eu
                        sapien lacus. Etiam molestie justo neque, in convallis
                        massa tempus in.
                      </p> */}
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link to="/about" className="btn">
                          Learn More
                        </Link>
                        {/* <div className="call-media-wrap">
                          <div className="icon">
                            <img src="assets/img/icon/phone-1.svg" alt="Eram" />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/scaff/96.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <span className="sub-title text-white">
                        Panel Systems for Wall & Column Formwork
                      </span>
                      <h1 className="hero-title text-white">
                        Steady Steps Safe Workspaces Durable
                      </h1>
                      {/* <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Vestibulum rhoncus nisl ac gravida porta. Mauris eu
                        sapien lacus. Etiam molestie justo neque, in convallis
                        massa tempus in.
                      </p> */}
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link to="/about" className="btn">
                          Learn More
                        </Link>
                        {/* <div className="call-media-wrap">
                          <div className="icon">
                            <img src="assets/img/icon/phone-1.svg" alt="Eram" />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/scaff/97.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <span className="sub-title text-white">
                        Scaffolding Tubes, Couplers & Joint Access Systems
                      </span>
                      <h1 className="hero-title text-white">
                        Strong Foundation Secure Heights Reliable
                      </h1>
                      {/* <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Vestibulum rhoncus nisl ac gravida porta. Mauris eu
                        sapien lacus. Etiam molestie justo neque, in convallis
                        massa tempus in.
                      </p> */}
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link to="/about" className="btn">
                          Learn More
                        </Link>
                        {/* <div className="call-media-wrap">
                          <div className="icon">
                            <img src="assets/img/icon/phone-1.svg" alt="Eram" />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <style>{`
          @media (min-width: 1200px) {
          .hero-slide{
            height: 800px;
          }
          }
          .hero-title{
            font-size: 70px;
          }

          @media (max-width: 768px) {
            .hero-title{
              font-size: 40px;
            }
              .hero-style3 {
  padding: 350px 0 65px;
          }
          }
          `}</style>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroFour;
