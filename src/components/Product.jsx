import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const styles = `
  .products-page {
    min-height: 100vh;
    background-color: #f9fafb;
  }
  
//   .hero-section {
//     background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
//     padding: 5rem 1.5rem;
//   }
  
//   .hero-container {
//     max-width: 80rem;
//     margin: 0 auto;
//     text-align: center;
//   }
  
//   .hero-badge {
//     display: inline-block;
//     padding: 0.375rem 1rem;
//     background-color: rgba(220, 38, 38, 0.2);
//     color: #ef4444;
//     font-size: 0.875rem;
//     font-weight: 500;
//     border-radius: 9999px;
//     margin-bottom: 1.5rem;
//     letter-spacing: 0.05em;
//   }
  
//   .hero-title {
//     font-size: 3rem;
//     font-weight: 700;
//     color: white;
//     letter-spacing: -0.025em;
//   }
  
//   .hero-title-accent {
//     color: #dc2626;
//   }
  
//   .hero-description {
//     margin-top: 1.5rem;
//     color: #9ca3af;
//     font-size: 1.125rem;
//     max-width: 42rem;
//     margin-left: auto;
//     margin-right: auto;
//     line-height: 1.75;
//   }
  
//   .hero-divider {
//     margin-top: 2.5rem;
//     height: 1px;
//     width: 8rem;
//     background: linear-gradient(to right, transparent, #dc2626, transparent);
//     margin-left: auto;
//     margin-right: auto;
//   }
  
  .products-container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }
  
  .filter-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  
  .products-count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .count-dot {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #dc2626;
    border-radius: 9999px;
  }
  
  .count-text {
    color: #4b5563;
    font-weight: 500;
  }
  
  .filter-buttons {
    display: none;
    align-items: center;
    gap: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .filter-buttons {
      display: flex;
    }
    
    .hero-title {
      font-size: 4.5rem;
    }
  }
  
  .filter-button {
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.3s;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .filter-button-active {
    color: #dc2626;
  }
  
  .filter-button-inactive {
    color: #6b7280;
  }
  
  .filter-button-inactive:hover {
    color: #111827;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 640px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .cta-section {
    margin-top: 5rem;
    text-align: center;
  }
  
  .cta-button {
    position: relative;
    padding: 1rem 2rem;
    background-color: #111827;
    color: white;
    font-weight: 500;
    border-radius: 9999px;
    overflow: hidden;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }
  
  .cta-button:hover {
    box-shadow: 0 20px 25px -5px rgba(220, 38, 38, 0.2);
  }
  
  .cta-button-text {
    position: relative;
    z-index: 10;
  }
  
  .cta-button-bg {
    position: absolute;
    inset: 0;
    background-color: #dc2626;
    transform: translateX(-100%);
    transition: transform 0.5s;
  }
  
  .cta-button:hover .cta-button-bg {
    transform: translateX(0);
  }
  
  .footer-accent {
    height: 4px;
    background: linear-gradient(to right, #e5e7eb, #dc2626, #e5e7eb);
  }
`;

const products = [
  { 
    id: 1, 
    name: "Flanges", 
    category: "Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/flanges"
  },
  { 
    id: 2, 
    name: "Stainless Steel Pipes", 
    category: "Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/stainless-steel-pipes"
  },
  { 
    id: 3, 
    name: "Carbon Steel Pipes", 
    category: "Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/carbon-steel-pipes"
  },
  { 
    id: 4, 
    name: "Butt-Weld Fittings", 
    category: "Fittings", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/butt-weld-fittings"
  },
  { 
    id: 5, 
    name: "Forged Fittings", 
    category: "Fittings", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/forged-fittings"
  },
  { 
    id: 6, 
    name: "Valves", 
    category: "Valves", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/valves"
  },
  { 
    id: 7, 
    name: "Instrumentation Tube Fitting", 
    category: "Instrumentation", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/instrumentation-tube-fitting"
  },
  { 
    id: 8, 
    name: "Cast Iron DWW Pipe Fittings System", 
    category: "Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/cast-iron-dww-pipe-fittings-system"
  },
  { 
    id: 9, 
    name: "Fasteners", 
    category: "Hardware", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/fasteners"
  },
  { 
    id: 10, 
    name: "PVDF Pipe Fittings & Valves", 
    category: "Plastic Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/pvdf-pipe-fittings-valves"
  },
  { 
    id: 11, 
    name: "UPVC & CPVC", 
    category: "Plastic Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/upvc-cpvc"
  },
  { 
    id: 12, 
    name: "Mud Pump And Spare Parts Assembly", 
    category: "Oilfield Equipment", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/mud-pump-and-spare-parts-assembly"
  },
  { 
    id: 13, 
    name: "Crank Shaft Assembly For Mud Pump", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/crank-shaft-assembly-for-mud-pump"
  },
  { 
    id: 14, 
    name: "Pinion Shaft Assembly For Mud Pump", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/pinion-shaft-assembly-for-mud-pump"
  },
  { 
    id: 15, 
    name: "Transmission Spare Parts", 
    category: "Mechanical Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/transmission-spare-parts"
  },
  { 
    id: 16, 
    name: "Hydraulic Cylinder Assembly For Mud Pump", 
    category: "Hydraulics", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/hydraulic-cylinder-assembly-for-mud-pump"
  },
  { 
    id: 17, 
    name: "Oil Field Clutch", 
    category: "Oilfield Equipment", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/oil-field-clutch"
  },
  { 
    id: 18, 
    name: "PS Series Hydraulic Disc Brake", 
    category: "Braking Systems", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/ps-series-hydraulic-disc-brake"
  },
  { 
    id: 19, 
    name: "Drilling Rig And Spare Parts", 
    category: "Oilfield Equipment", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/drilling-rig-and-spare-parts"
  },
  { 
    id: 20, 
    name: "BOP Hoisting Equipment", 
    category: "Oilfield Equipment", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/bop-hoisting-equipment"
  },
  { 
    id: 21, 
    name: "Downhole Tool", 
    category: "Oilfield Tools", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/downhole-tool"
  },
  { 
    id: 22, 
    name: "Oil Tube And Casing Pipe", 
    category: "Oilfield Piping", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/oil-tube-and-casing-pipe"
  },
  { 
    id: 23, 
    name: "Pressure Transmitters & Transducers Portfolio", 
    category: "Instrumentation", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/pressure-transmitters-transducers-portfolio"
  },
  { 
    id: 24, 
    name: "Mud Pump Fluid End Parts", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/mud-pump-fluid-end-parts"
  },
  { 
    id: 25, 
    name: "Mud Pump Crosshead Assembly", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/mud-pump-crosshead-assembly"
  },
  { 
    id: 26, 
    name: "Pulsation Dampener Assembly For Mud Pump", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/pulsation-dampener-assembly-for-mud-pump"
  },
  { 
    id: 27, 
    name: "Relief Valve For Mud Pump", 
    category: "Valves", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/relief-valve-for-mud-pump"
  },
  { 
    id: 28, 
    name: "Spray Lubrication System For Mud Pump", 
    category: "Lubrication Systems", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/spray-lubrication-system-for-mud-pump"
  },
  { 
    id: 29, 
    name: "Discharge Strainer And Auxiliary Piping For Mud Pump", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/discharge-strainer-and-auxiliary-piping-for-mud-pump"
  },
  { 
    id: 30, 
    name: "Mud Pump Fluid End Parts", 
    category: "Mud Pump Parts", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    link: "/products/mud-pump-fluid-end-parts-2"
  }
];


export default function Product() {
  return (
    <>
      <style>{styles}</style>
      
      <div className="products-page">
        {/* Hero Section */}
        {/* <div className="hero-section">
          <div className="hero-container">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">
                COLLECTION 2024
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              Our <span className="hero-title-accent">Products</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-description"
            >
              Discover our curated selection of premium products, crafted with exceptional quality and timeless design.
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-divider"
            />
          </div>
        </div> */}

        {/* Products Grid */}
        <div className="products-container">
          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="filter-bar"
          >
            <div className="products-count">
              <div className="count-dot" />
              <span className="count-text">{products.length} Products</span>
            </div>
            {/* <div className="filter-buttons">
              {["All", "Electronics", "Accessories", "Footwear"].map((filter, i) => (
                <button
                  key={filter}
                  className={`filter-button ${
                    i === 0 
                      ? "filter-button-active" 
                      : "filter-button-inactive"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div> */}
          </motion.div>

          {/* Grid */}
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="cta-section"
          >
            <button className="cta-button">
              <span className="cta-button-text">View All Collection</span>
              <div className="cta-button-bg" />
            </button>
          </motion.div> */}
        </div>

        {/* Footer accent */}
        <div className="footer-accent" />
      </div>
    </>
  );
}