import React from "react";
import { Waves, Dumbbell, Users, Car, Shield, Zap, Phone, Tv, Baby, Flame, Building } from "lucide-react";

const amenities = [
  { icon: Waves, title: "Flanges" },
  { icon: Dumbbell, title: "Stainless Steel Pipes" },
  { icon: Car, title: "Carbon Steel Pipes" },
  { icon: Shield, title: "Butt-weld fittings" },
  { icon: Zap, title: "Forged fittings" },
  { icon: Phone, title: "Valves" },
  { icon: Tv, title: "Instrumentation Tube Fitting" },
  { icon: Baby, title: "Cast Iron Dww Pipe Fittings" },
  { icon: Users, title: "Fasteners" },
  { icon: Building, title: "PVDF Pipe Fittings & Valves" },
  { icon: Flame, title: "UPVC & CPVC" },
  { icon: Shield, title: "Scaffolding materials" }
];

const Products=()=> {
  return (
    <section id="amenities" className="amenities-section">
      {/* Video Background with Overlay */}
      {/* <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Namko builders.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div> */}

      <div className="amenities-container">
        <div className="amenities-header">
          <h2 className="amenities-title">
            Our <span className="amenities-title-highlight">Products</span>
          </h2>
          <p className="amenities-description">
            Delivering a complete range of high-quality pipes, fittings, valves, and structural materials,
             crafted for strength, safety, and efficiency across all industrial applications.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-card-content">
                <div className="amenity-icon-container">
                  <amenity.icon className="amenity-icon" />
                </div>
                <h3 className="amenity-name">{amenity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        /* Base styles */
        .amenities-section {
          position: relative;
          padding: 3rem 0;
          overflow: hidden;
          color: white;
          background: linear-gradient(0deg,rgba(94, 55, 55, 1) 0%, rgba(255, 3, 3, 1) 78%);
          margin-top: 0px;      
            }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 2;
        }

        /* Content Container */
        .amenities-container {
          position: relative;
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 1rem;
          z-index: 3;
        }

        @media (min-width: 640px) {
          .amenities-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .amenities-container {
            padding: 0 2rem;
          }
        }

        /* Header section */
        .amenities-header {
          text-align: left;
          margin-bottom: 4rem;
        }

        .amenities-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .amenities-title {
            font-size: 3rem;
          }
        }

        .amenities-title-highlight {
          color: #FFFFFF;
        }

        .amenities-description {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 48rem;
          // margin: 0 auto;
        }

        /* Amenities grid */
        .amenities-grid {
          display: grid;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 480px) { 
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .amenities-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        /* Amenity card - Updated for single row layout */
        .amenity-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 203, 12, 0.31);
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(#999999, 0.3);
          border-color: #999999;
          background-color: white;
        }

        .amenity-card-content {
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .amenity-icon-container {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          color: rgba(250, 204, 21, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .amenity-card:hover .amenity-icon-container {
          transform: scale(1.1);
        }

        .amenity-icon {
          width: 1.75rem;
          height: 1.75rem;
          color: #999999;
        }

        .amenity-name {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }

         .amenity-card .amenity-name:hover {
          color: #000000;
        }

        /* Adjust grid for better single row layout */
        @media (max-width: 480px) {
          .amenity-card-content {
            padding: 0.75rem;
            gap: 0.5rem;
          }
          
          .amenity-icon-container {
            width: 2rem;
            height: 2rem;
          }
          
          .amenity-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .amenity-name {
            font-size: 0.9rem;
          }
        }

        /* Featured amenity section */
        .featured-amenity {
          background: rgba(250, 204, 21, 0.6);
          border-radius: 0.5rem;
          padding: 2rem;
          color: #000;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        @media (min-width: 768px) {
          .featured-amenity {
            padding: 3rem;
          }
        }

        .featured-amenity-content {
          max-width: 64rem;
          margin: 0 auto;
        }

        .featured-amenity-icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .featured-amenity-icon-wrapper {
          width: 5rem;
          height: 5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featured-amenity-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #000;
        }

        .featured-amenity-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .featured-amenity-title {
            font-size: 2.25rem;
          }
        }

        .featured-amenity-description {
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .featured-amenity-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .featured-amenity-tag {
          background: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          color: white;
        }
      `}</style>
    </section>
  );
}
export default Products;