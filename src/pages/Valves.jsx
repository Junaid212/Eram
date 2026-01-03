import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Award, Gauge, Thermometer, Settings, Layers } from "lucide-react";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import Preloader from "../helper/Preloader";
import PortfolioTwo from "../components/PortfolioTwo";
import FooterAreaTwo from "../components/FooterAreaTwo";

const valveCategories = [
  {
    id: 1,
    title: "Gate, Globe & Check Valves",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80",
    specs: [
      "Class 125 to 4500, Cast & Forged Steel",
      "CS, SS & Alloy Steels",
      "Pressure-seal & Bolted-Bonnet",
      "Valves for Power Applications",
      "Cryogenic Valves",
      "Bellow-sealed Valves",
      "Pressure rating - #150 to 4500"
    ],
    icon: Settings,
    overlayClass: "valve-card-overlay-1"
  },
  {
    id: 2,
    title: "Butterfly Valves",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
    specs: [
      "Triple-offset, Metal-seated",
      "Class 150 to 600",
      "CS, SS & Alloy Steels",
      "API Monogrammed, SIL-3 Capable",
      "Flanged, Fabricated Steel",
      "Pressure rating up to PN 25",
      "Wafer, Lugged & Flanged",
      "CI, SG Iron, CS & SS",
      "Body Integrally-moulded Seat"
    ],
    icon: Layers,
    overlayClass: "valve-card-overlay-2"
  },
  {
    id: 3,
    title: "Ball Valves",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80",
    specs: [
      "Cast & Forged Steel",
      "CS, SS & Alloy Steels",
      "Metal & Soft-Seated",
      "Trunnion-mounted",
      "Floating Ball Valves",
      "Pressure Rating - #150 to 2500"
    ],
    icon: Gauge,
    overlayClass: "valve-card-overlay-3"
  },
  {
    id: 4,
    title: "Double Block & Bleed Plug Valves",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&auto=format&fit=crop&q=80",
    specs: [
      "Class 150 & 600",
      "CS, SS & Alloy Steels",
      "API Monogrammed"
    ],
    icon: Shield,
    overlayClass: "valve-card-overlay-4"
  }
];

const features = [
  { icon: Award, label: "API Certified", desc: "Industry standard compliance" },
  { icon: Thermometer, label: "Cryogenic Ready", desc: "Extreme temperature handling" },
  { icon: Shield, label: "SIL-3 Capable", desc: "Safety integrity level" },
  { icon: Gauge, label: "High Pressure", desc: "Up to Class 4500" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Valves() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
let [active, setActive] = useState(true);
    useEffect(() => {
      setTimeout(function () {
        setActive(false);
      }, 2000);
    }, []);

  return (
    <>
    {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne/>
      <Breadcrumb title={"Valves"} />
    <div className="valves-container">

      {/* Main Products Grid */}
      <section className="valves-main-section">
        <div className="valves-main-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="valves-section-header"
          >
            {/* <h2 className="valves-section-title">
              Our Product <span>Range</span>
            </h2>
            <div className="valves-divider" /> */}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="valves-grid"
          >
            {valveCategories.map((valve, index) => (
              <motion.div
                key={valve.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="valve-card group"
              >
                {/* Image Container */}
                <div className="valve-card-image-container">
                  <motion.img 
                    src={valve.image}
                    alt={valve.title}
                    className="valve-card-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className={`valve-card-overlay ${valve.overlayClass}`} />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="valve-card-icon-badge"
                  >
                    <valve.icon className="valve-card-icon" />
                  </motion.div>

                  {/* Title Overlay */}
                  <div className="valve-card-title-overlay">
                    <h3 className="valve-card-title">
                      {valve.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="valve-card-content">
                  <ul className="valve-card-specs">
                    {valve.specs.map((spec, specIndex) => (
                      <motion.li 
                        key={specIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * specIndex }}
                        viewport={{ once: true }}
                        className="valve-card-spec-item"
                      >
                        <ChevronRight className="valve-card-spec-icon" />
                        <span className="valve-card-spec-text">{spec}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Action */}
                  {/* <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="valve-card-action"
                  >
                    <button className="valve-card-button">
                      Learn More
                      <ChevronRight className="valve-card-button-icon" />
                    </button>
                  </motion.div> */}
                </div>

                {/* Corner Accent */}
                <div className="valve-card-corner" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Material Specifications Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="valves-materials-section"
      >
        <div className="valves-materials-pattern" />
        <div className="valves-materials-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="valves-materials-header"
          >
            <h2 className="valves-materials-title">
              Material <span>Specifications</span>
            </h2>
            <p className="valves-materials-subtitle">
              Premium materials engineered for extreme conditions and lasting performance
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="valves-materials-grid"
          >
            {[
              { label: "Carbon Steel", code: "CS" },
              { label: "Stainless Steel", code: "SS" },
              { label: "Alloy Steels", code: "AS" },
              { label: "Cast Iron", code: "CI" },
              { label: "SG Iron", code: "SGI" },
              { label: "Forged Steel", code: "FS" },
              { label: "Fabricated Steel", code: "FAB" },
              { label: "Special Alloys", code: "SA" }
            ].map((material, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="valves-material-card"
              >
                <div className="valves-material-code">{material.code}</div>
                <div className="valves-material-label">{material.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <style>{`
      /* Main Container */
.valves-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f9fafb, #ffffff, #f3f4f6);
}


/* Main Products Section */
.valves-main-section {
  padding: 3rem 1rem;
}

.valves-main-container {
  max-width: 80rem;
  margin: 0 auto;
}

.valves-section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.valves-section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .valves-section-title {
    font-size: 2.25rem;
  }
}

.valves-section-title span {
  color: #dc2626;
}

.valves-divider {
  width: 5rem;
  height: 0.125rem;
  background: linear-gradient(to right, #ef4444, #b91c1c);
  margin: 0 auto;
  border-radius: 9999px;
}

/* Valve Cards Grid */
.valves-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .valves-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Valve Card */
.valve-card {
  position: relative;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
}

.valve-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.5rem);
}

.valve-card-image-container {
  position: relative;
  height: 16rem;
  overflow: hidden;
}

.valve-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.valve-card-image:hover {
  transform: scale(1.1);
}

.valve-card-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.6;
  transition: opacity 0.5s ease;
}

.valve-card:hover .valve-card-overlay {
  opacity: 0.7;
}

.valve-card-overlay-1 {
  background: linear-gradient(to top, #dc2626, #991b1b);
}

.valve-card-overlay-2 {
  background: linear-gradient(to top, #374151, #111827);
}

.valve-card-overlay-3 {
  background: linear-gradient(to top, #b91c1c, #7f1d1d);
}

.valve-card-overlay-4 {
  background: linear-gradient(to top, #1f2937, #000000);
}

.valve-card-icon-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.valve-card-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: white;
}

.valve-card-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
}

.valve-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
  .valve-card-title {
    font-size: 1.875rem;
  }
}

.valve-card-content {
  padding: 1.5rem;
}

.valve-card-specs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.valve-card-spec-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #4b5563;
}

.valve-card-spec-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #ef4444;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.valve-card-spec-item:hover .valve-card-spec-icon {
  transform: translateX(0.25rem);
}

.valve-card-spec-text {
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .valve-card-spec-text {
    font-size: 1rem;
  }
}

.valve-card-action {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f3f4f6;
}

.valve-card-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(to right, #111827, #1f2937);
  color: white;
  padding: 0.875rem;
  border-radius: 0.75rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(17, 24, 39, 0.1), 0 4px 6px -2px rgba(17, 24, 39, 0.05);
}

.valve-card-button:hover {
  background: linear-gradient(to right, #dc2626, #b91c1c);
  box-shadow: 0 20px 25px -5px rgba(220, 38, 38, 0.2), 0 10px 10px -5px rgba(220, 38, 38, 0.1);
}

.valve-card-button-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease;
}

.valve-card-button:hover .valve-card-button-icon {
  transform: translateX(0.25rem);
}

.valve-card-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent);
  border-bottom-right-radius: 100%;
}

/* Material Specifications Section */
.valves-materials-section {
  padding: 5rem 1rem;
  background: linear-gradient(to right, #111827, #1f2937, #111827);
  position: relative;
  overflow: hidden;
}

.valves-materials-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);
  background-size: 40px 40px;
}

.valves-materials-container {
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
}

.valves-materials-header {
  text-align: center;
  margin-bottom: 3rem;
}

.valves-materials-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .valves-materials-title {
    font-size: 2.25rem;
  }
}

.valves-materials-title span {
  color: #ef4444;
}

.valves-materials-subtitle {
  color: #9ca3af;
  max-width: 36rem;
  margin: 0 auto;
}

.valves-materials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .valves-materials-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.valves-material-card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.25rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.valves-material-card:hover {
  transform: scale(1.05) rotate(1deg);
  background-color: rgba(220, 38, 38, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.valves-material-code {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
}

.valves-material-label {
  font-size: 0.875rem;
  color: #d1d5db;
}

/* Spacing Utilities */
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.mb-16 { margin-bottom: 4rem; }
.mt-12 { margin-top: 3rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }

/* Animation Transitions */
.transition-all { transition: all 0.3s ease; }
.duration-300 { transition-duration: 300ms; }
.duration-500 { transition-duration: 500ms; }
.duration-700 { transition-duration: 700ms; }

/* Text Utilities */
.text-center { text-align: center; }
.text-white { color: white; }
.text-gray-600 { color: #4b5563; }
.text-gray-400 { color: #9ca3af; }
.text-gray-300 { color: #d1d5db; }
.text-red-100 { color: #fee2e2; }
.text-red-400 { color: #f87171; }
.text-red-500 { color: #ef4444; }
.text-red-600 { color: #dc2626; }

/* Font Utilities */
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }

/* Display Utilities */
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
      `}</style>
    </div>
<PortfolioTwo />
    <FooterAreaTwo />

    </>
  );
}