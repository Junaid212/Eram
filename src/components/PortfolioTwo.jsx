import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const PortfolioTwo = () => {
  const portfolioItems = [
  { id: 1, image: "/assets/img/portfolio/2-2.png", title: "Flanges", link: "/mechanical/flanges" },
  { id: 2, image: "/assets/img/portfolio/2-2.png", title: "Stainless Steel Pipes", link: "/mechanical/stainless-steel-pipes" },
  { id: 3, image: "/assets/img/portfolio/2-2.png", title: "Carbon Steel Pipes", link: "/mechanical/carbon-steel-pipes" },
  { id: 4, image: "/assets/img/portfolio/2-2.png", title: "Butt-weld fittings", link: "/mechanical/butt-weld-fittings" },
  { id: 5, image: "/assets/img/portfolio/2-2.png", title: "Forged fittings", link: "/mechanical/forged-fittings" },
  { id: 6, image: "/assets/img/portfolio/2-2.png", title: "Valves", link: "/mechanical/valves" },
  { id: 7, image: "/assets/img/portfolio/2-2.png", title: "Instrumentation Tube Fitting", link: "/mechanical/instrumentation-tube-fittings" },
  { id: 8, image: "/assets/img/portfolio/2-2.png", title: "Cast Iron Dww Pipe Fittings System", link: "/mechanical/cast-iron-dww-pipe-fittings" },
  { id: 9, image: "/assets/img/portfolio/2-2.png", title: "Fasteners", link: "/mechanical/fasteners" },
  { id: 10, image: "/assets/img/portfolio/2-2.png", title: "PVDF Pipe Fittings & Valves", link: "/mechanical/pvdf-pipe-fittings-and-valves" },
  { id: 11, image: "/assets/img/portfolio/2-2.png", title: "UPVC & CPVC", link: "/mechanical/upvc-cpvc" },
  { id: 12, image: "/assets/img/portfolio/2-2.png", title: "Scaffolding materials", link: "/mechanical/scaffolding-materials" },
  { id: 13, image: "/assets/img/portfolio/2-2.png", title: "Mud Pump and Spare Parts Assembly", link: "/mechanical/mud-pump-spares" },
  { id: 14, image: "/assets/img/portfolio/2-2.png", title: "Crank Shaft Assembly for Mud Pump", link: "/mechanical/crank-shaft-assembly-for-mud-pump" },
  { id: 15, image: "/assets/img/portfolio/2-2.png", title: "Pinion Shaft Assembly for Mud Pump", link: "/mechanical/pinion-shaft-assembly-for-mud-pump" },
  { id: 16, image: "/assets/img/portfolio/2-2.png", title: "Hydraulic Cylinder Assembly for Mud Pump", link: "//mechanicalhydraulic-cylinder-assembly-for-mud-pump" },
  { id: 17, image: "/assets/img/portfolio/2-2.png", title: "Mud Pump Fluid End Parts", link: "/mechanical/mud-pump-fluid-end-parts" },
  { id: 18, image: "/assets/img/portfolio/2-2.png", title: "Mud Pump Crosshead Assembly", link: "/mechanical/mud-pump-crosshead-assembly" },
  { id: 19, image: "/assets/img/portfolio/2-2.png", title: "Pulsation Dampener Assembly for Mud Pump", link: "/mechanical/pulsation-dampener-assembly-for-mud-pump" },
  { id: 20, image: "/assets/img/portfolio/2-2.png", title: "Relief Valve For Mud Pump", link: "/mechanical/relief-valve-for-mud-pump" },
  { id: 21, image: "/assets/img/portfolio/2-2.png", title: "Spray Lubrication System for Mud Pump", link: "/mechanical/spray-lubrication-system-for-mud-pump" },
  { id: 22, image: "/assets/img/portfolio/2-2.png", title: "Discharge Strainer and Auxiliary Piping for Mud Pump", link: "/mechanical/discharge-strainer-and-auxiliary-piping-for-mud-pump" },
  { id: 23, image: "/assets/img/portfolio/2-2.png", title: "Transmission Spare Parts", link: "/mechanical/transmission-spare-parts" },
  { id: 24, image: "/assets/img/portfolio/2-2.png", title: "Oil field Clutch", link: "/mechanical/oil-field-clutch" },
  { id: 25, image: "/assets/img/portfolio/2-2.png", title: "PS Series Hydraulic Disc Brake", link: "/mechanical/ps-series-hydraulic-disc-brake" },
  { id: 26, image: "/assets/img/portfolio/2-2.png", title: "Drilling Rig and Spare Parts", link: "/mechanical/drilling-rig-and-spare-parts" },
  { id: 27, image: "/assets/img/portfolio/2-2.png", title: "BOP Hoisting Equipment", link: "/mechanical/bop-hoisting-equipment" },
  { id: 28, image: "/assets/img/portfolio/2-2.png", title: "Downhole Tool", link: "/mechanical/downhole-tool" },
  { id: 29, image: "/assets/img/portfolio/2-2.png", title: "Oil Tube And Casing Pipe", link: "/mechanical/oil-tube-and-casing-pipe" },
  { id: 30, image: "/assets/img/portfolio/2-2.png", title: "Pressure Transmitters & Transducers Portfolio", link: "/mechanical/pressure-transmitters-transducers-portfolio" }
];

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">Other</span>
              <h2 className="sec-title">
                Products{" "}
                <img
                  className="title-bg-shape"
                  src="/assets/img/bg/title-bg-shape.png"
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
                    <img src="/assets/img/portfolio/2-1.png" alt="Eram" />
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
                    <img src="/assets/img/portfolio/2-2.png" alt="Eram" />
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
                    <img src="/assets/img/portfolio/2-3.png" alt="Eram" />
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
                    <img src="/assets/img/portfolio/2-2.png" alt="Eram" />
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
                    <img src="/assets/img/portfolio/2-3.png" alt="Eram" />
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
      <style>{`
        @media (min-width: 1024px) {
    .col-xxl-10 {
        width: 85%;
    }
}
      `}</style>
    </div>
  );
};

export default PortfolioTwo;
