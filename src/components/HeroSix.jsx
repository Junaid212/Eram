import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const HeroSix = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      backgroundColor: "#EAE1D6",
      image: "assets/img/update-img/hero6-1.png",
      subtitle: "Featured Product",
      title: "Engine Pistons",
      buttonText: "Shop Now",
      offer: "Up to 20% Off",
      link: "/shop"
    },
    {
      id: 2,
      backgroundColor: "#D6E4EA",
      image: "assets/img/update-img/hero6-2.png",
      subtitle: "New Arrival",
      title: "Turbo Chargers",
      buttonText: "Explore Now",
      offer: "Limited Stock",
      link: "/shop"
    },
    {
      id: 3,
      backgroundColor: "#EAD6E1",
      image: "assets/img/update-img/hero6-3.png",
      subtitle: "Best Selling",
      title: "Performance Exhausts",
      buttonText: "View Products",
      offer: "Free Installation",
      link: "/shop"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
    return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
  
    <div className="hero-6" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/update-img/hero6-1.png" alt="Eram" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Featured Product</span>
                <h1 className="hero-title">Engine pistons</h1>
                <div className="btn-group">
                  <Link to="/shop" className="btn style2 style-radius">
                    Shop Now
                  </Link>
                  <span className="offer-tag">Up to 20% Off</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
  
        {/*==============================
        Intro Area  
        ==============================*/}
        <div className="row gx-30 gy-30">
          <div className="col-lg-4 col-md-6">
            <div
              className="hero-intro-card"
              style={{ backgroundColor: "#F2F2EF" }}
            >
              <div className="intro-card-img">
                <img src="assets/img/update-img/hero6-2.png" alt="Eram" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">save up to $5.00</h6>
                <h4 className="intro-card-title">
                  <Link to="#">Engine pistons and cog</Link>
                </h4>
                <Link to="/shop" className="btn style5 style-radius">
                  Shop Now
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
                <img src="assets/img/update-img/hero6-3.png" alt="Eram" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">save up to $5.00</h6>
                <h4 className="intro-card-title">
                  <Link to="#">Engine pistons and cog</Link>
                </h4>
                <Link to="/shop" className="btn style5 style-radius">
                  Shop Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="hero-intro-card bg-theme">
              <div className="intro-card-img">
                <img src="assets/img/update-img/hero6-4.png" alt="Eram" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle text-white">
                  save up to $5.00
                </h6>
                <h4 className="intro-card-title text-white">
                  <Link to="#">Engine pistons and cog</Link>
                </h4>
                <Link to="/shop" className="btn style5 style-radius">
                  Shop Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;
