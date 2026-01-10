import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaTwo = () => {
  return (
    <section className="blog-area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Service</span>
              <h2 className="sec-title">
                Other Services
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
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
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_1.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>01</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Fabrication
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_2.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>02</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Civil & Mechanical Contracts
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_3.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>03</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Project Material Supply Management
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_1.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>04</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Warehousing, Marshalling, & Logistics
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_2.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>05</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Maintenance, Repair, & Overhaul
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <div className="blog-card style2">
      <div className="blog-img">
        <img src="/assets/img/blog/blog_s2_3.png" alt="Eram" />
        <div className="blog-date">
          <Link to="/blog">
            <span>06</span>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to="/blog-details">
            Technical Support & Value Added Services
          </Link>
        </h3>
      </div>
    </div>
  </div>
</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
