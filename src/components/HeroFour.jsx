import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      backgroundImage: "url(assets/img/scaff/94.webp)",
      subtitle: "Walking Boards & Planks",
      title: "Efficient Formwork Seamless Construction Innovative",
    },
    {
      id: 2,
      backgroundImage: "url(assets/img/scaff/95.webp)",
      subtitle: "Table Formwork System",
      title: "Predision Panels Perfect Structures Efficient",
    },
    {
      id: 3,
      backgroundImage: "url(assets/img/scaff/96.webp)",
      subtitle: "Panel Systems for Wall & Column Formwork",
      title: "Steady Steps Safe Workspaces Durable",
    },
    {
      id: 4,
      backgroundImage: "url(assets/img/scaff/97.webp)",
      subtitle: "Scaffolding Tubes, Couplers & Joint Access Systems",
      title: "Strong Foundation Secure Heights Reliable",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="hero-wrapper hero-4" id="hero">
      {/* Slider Container */}
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: slide.backgroundImage,
              opacity: index === currentSlide ? 1 : 0,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            {/* Slide Content */}
            <div className="slide-overlay">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-8">
                    <div className="hero-style4" id="hero-style4">
                      <span className="sub-title text-white">
                        {slide.subtitle}
                      </span>
                      <h1 className="hero-title text-white">
                        {slide.title}
                      </h1>
                      <div className="btn-group">
                        <Link to='/scaffolding/about' className="btn">
                          Lear More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation Arrows */}
      <button className="slider-arrow prev" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slider Dots/Pagination */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <style>{`
        #hero-wrapper {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .hero-slider-container {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.5s ease-in-out;
          opacity: 0;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // background: rgba(0, 0, 0, 0.3);
          display: flex;
          margin-top: 300px;
        }

        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .slider-arrow:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .slider-arrow.prev {
          left: 20px;
        }

        .slider-arrow.next {
          right: 20px;
        }

        .slider-dots {
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: white;
          transform: scale(1.2);
        }

        .dot:hover {
          transform: scale(1.1);
        }

        #hero-style4 {
          padding: 0;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          line-height: 1.2333333333;
          font-size: 70px;
          margin-bottom: 20px;
        }

        .sub-title {
          display: block;
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 500;
        }

        .btn-group {
          margin-top: 30px;
        }

        .btn {
          display: inline-block;
          padding: 15px 35px;
          background:#E8092E;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn:hover {
          background: #e55a00;
          transform: translateY(-2px);
        }

        @media (max-width: 1200px) {
          .hero-title {
            font-size: 60px;
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 50px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 40px;
          }
          
          .hero-slider-container {
            height: 100vh;
          }
          
          .slider-arrow {
            width: 40px;
            height: 40px;
          }
          
          .slider-arrow.prev {
            left: 10px;
          }
          
          .slider-arrow.next {
            right: 10px;
          }
            .slide-overlay {
              margin-top: 450px;
            }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 32px;
          }
          
          .sub-title {
            font-size: 16px;
          }
          
          .btn {
            padding: 10px 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroFour;