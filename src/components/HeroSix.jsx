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
  
    <div className="hero-slider-container" style={{ position: 'relative' }}>
      {/* Slides */}
      <div className="hero-slider-wrapper" style={{ 
        overflow: 'hidden',
        position: 'relative'
      }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              backgroundColor: slide.backgroundColor,
              transition: 'opacity 0.5s ease',
              width: '100%'
            }}
          >
            <div className="hero-6">
              <div className="row flex-row-reverse align-items-center">
                <div className="col-md-6">
                  <div className="hero-thumb text-center">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero-style6" style={{ padding: '20px' }}>
                    <span className="sub-title" style={{ 
                      color: '#666',
                      fontSize: '14px',
                      fontWeight: '500',
                      letterSpacing: '2px',
                      marginBottom: '10px',
                      display: 'block'
                    }}>
                      {slide.subtitle}
                    </span>
                    <h1 className="hero-title" style={{ 
                      fontSize: '3rem',
                      fontWeight: '700',
                      marginBottom: '20px',
                      color: '#333'
                    }}>
                      {slide.title}
                    </h1>
                    <div className="btn-group" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <Link 
                        to={slide.link} 
                        className="btn style2 style-radius"
                        style={{
                          backgroundColor: '#333',
                          color: '#fff',
                          padding: '12px 30px',
                          textDecoration: 'none',
                          borderRadius: '25px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          border: '2px solid #333'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#fff';
                          e.currentTarget.style.color = '#333';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#333';
                          e.currentTarget.style.color = '#fff';
                        }}
                      >
                        {slide.buttonText}
                      </Link>
                      <span className="offer-tag" style={{
                        backgroundColor: '#ff6b6b',
                        color: '#fff',
                        padding: '5px 15px',
                        borderRadius: '15px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {slide.offer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className="slider-prev"
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          zIndex: 10,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        ‹
      </button>
      
      <button 
        className="slider-next"
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          zIndex: 10,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentSlide ? '#333' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              padding: 0
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Add CSS for animation */}
      <style>
        {`
          .hero-slide {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          
          .hero-slide.active {
            opacity: 1;
          }
          
          .hero-slider-wrapper {
            min-height: 500px;
            display: flex;
            align-items: center;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem !important;
            }
            
            .btn-group {
              flex-direction: column;
              align-items: flex-start !important;
            }
            
            .hero-slider-wrapper {
              min-height: 400px;
            }
          }
        `}
      </style>
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
