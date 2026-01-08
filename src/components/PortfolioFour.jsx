import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const PortfolioFour = () => {
  const portfolioItems = [
  { id: 1, image: "assets/img/scaff/101.webp", title: "Cuplock System", link: "/cuplock-system" },
  { id: 2, image: "assets/img/scaff/102.webp", title: "Kwikstage & Ringlock Systems", link: "/kwikstage-ringlock-systems" },
  { id: 3, image: "assets/img/scaff/103.webp", title: "Scaffolding Tubes, Couplers & Joint Access Systems", link: "/scaffolding-tubes-couplers-joint-access" },
  { id: 5, image: "assets/img/scaff/104.webp", title: "Walking Boards & Planks (Wooden & Steel)", link: "/walking-boards-planks" },
  { id: 6, image: "assets/img/scaff/105.webp", title: "Table Formwork Systems", link: "/table-formwork-systems" },
  { id: 7, image: "assets/img/scaff/106.webp", title: "Aluminium System Scaffolds & Ladders", link: "/aluminium-system-scaffolds-ladders" },
  { id: 8, image: "assets/img/scaff/107.webp", title: "Panel Systems for Wall & Column Framework", link: "/panel-systems-for-wall-column" },
  { id: 9, image: "assets/img/scaff/108.webp", title: "Tower Scaffolds (Fixed & Mobile)", link: "/tower-scaffolds" },
  { id: 10, image: "assets/img/scaff/109.webp", title: "Cantilever Frame & Korean Frame Systems", link: "/cantilever-frame-korean-frame" },
];

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">Other</span>
              <h2 className="sec-title">
                Scaffolding Systems{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Eram"
                />
              </h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="title-area">
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
      <div className="container-fluid p-0">
        <div className="row global-carousel gx-30 portfolio-slider1">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            spaceBetween={30}
            centeredSlides
            slidesPerView={1}
            slidesPerGroup={1}
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
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
            {/* <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="assets/img/portfolio/2-1.png" alt="Eram" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="/project-details">Innovate Grow Succeed</Link>
                      </h4>
                    </div>
                    <Link to="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="assets/img/portfolio/2-2.png" alt="Eram" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="/project-details">Innovate Grow Succeed</Link>
                      </h4>
                    </div>
                    <Link to="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="assets/img/portfolio/2-3.png" alt="Eram" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="/project-details">Innovate Grow Succeed</Link>
                      </h4>
                    </div>
                    <Link to="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="assets/img/portfolio/2-2.png" alt="Eram" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="/project-details">Innovate Grow Succeed</Link>
                      </h4>
                    </div>
                    <Link to="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="assets/img/portfolio/2-3.png" alt="Eram" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="/project-details">Innovate Grow Succeed</Link>
                      </h4>
                    </div>
                    <Link to="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    {<img src={item.image} alt="Eram" />}
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to={item.link}>{item.title}</Link>
                      </h4>
                    </div>
                    <Link to={item.link} className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFour;
