import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const HeroScaffold = () => {
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
                backgroundImage: "url(assets/img/elect/54.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Eram"
                          />
                          Eram Company Ltd
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        One stop solution for all your electrical needs
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
                backgroundImage: "url(assets/img/elect/55.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Eram"
                          />
                          Eram Company Ltd
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Smart power solutions for every project
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
                backgroundImage: "url(assets/img/elect/56.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Eram"
                          />
                          Eram Company Ltd
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Innovative solutions for your Electrical needs
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
                backgroundImage: "url(assets/img/elect/57.webp)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Eram"
                          />
                          Eram Company Ltd
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Electrical materials for every application
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

export default HeroScaffold;
