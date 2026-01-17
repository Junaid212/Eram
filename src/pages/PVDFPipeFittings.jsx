import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Thermometer, 
  Gauge, 
  Ruler, 
  Zap, 
  Shield, 
  Flame, 
  CheckCircle2,
  Droplet,
  Package,
  Settings,
  ChevronRight,
  CardSim
} from "lucide-react";
import "../components/PVDFDetails.css";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";

const specifications = [
  {
    title: "Dimension",
    value: "d20 (1/2\") - d315 (12\")",
    standard: "ISO 10931",
    icon: Ruler,
    colorClass: "pvdf-spec-accent-1"
  },
  {
    title: "Pressure Rating",
    value: "Pipes/fittings: 20-110 mm PN 16 (232 PSI)",
    subtitle: "160-315 mm PN 10 (150 PSI)",
    icon: Gauge,
    colorClass: "pvdf-spec-accent-2"
  },
  {
    title: "Temperature Rating",
    value: "from -20°C to 140°C",
    subtitle: "(-4°F to 284°F)",
    icon: Thermometer,
    colorClass: "pvdf-spec-accent-3"
  }
];

const productionMethods = [
  {
    item: "Fittings/valves",
    method: "Injection molded",
    icon: Settings
  },
  {
    item: "Pipes",
    method: "Extruded and stress relieved (ISO 10931-2)",
    icon: Package
  },
  {
    item: "Valves",
    method: "Injection molded (additional available oil free treated and paint compatible/silicon free)",
    icon: Droplet
  }
];

const weldingTechnologies = [
  {
    name: "BCF Plus",
    description: "Bead and crevice free fusion",
    size: "d20 (1/2\") - d110 (4\")",
    colorClass: "pvdf-welding-accent-1"
  },
  {
    name: "IR Plus®",
    description: "Infrared fusion (DVS 2207-6)",
    size: "d20 (1/2\") - d315 (12\")",
    colorClass: "pvdf-welding-accent-2"
  },
  {
    name: "Butt Fusion",
    description: "(DVS 2207-15)",
    size: "d20 (1/2\") - d315 (12\")",
    colorClass: "pvdf-welding-accent-3"
  },
  {
    name: "Socket Fusion",
    description: "(DVS 2207-15)",
    size: "d20 (1/2\") - d63 (2\")",
    colorClass: "pvdf-welding-accent-4"
  }
];

const features = [
  {
    icon: Shield,
    title: "Chemical Resistance",
    description: "Resistant to most organic and inorganic media"
  },
  {
    icon: Flame,
    title: "Low Flammability",
    description: "Enhanced safety with superior fire resistance"
  },
  {
    icon: Thermometer,
    title: "High Temperature",
    description: "Maintains stiffness in upper temperature ranges"
  },
  {
    icon: CheckCircle2,
    title: "Physiologically Safe",
    description: "Safe for use in sensitive applications"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function PVDFPipeFittings() {
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
          <Breadcrumb title={"PVDF Pipe Fittings & Valves"} />
    <div className="pvdf-container">
      {/* Hero Section */}
      {/* <section className="pvdf-hero-section">
        <div className="pvdf-hero-pattern" />
        <div className="pvdf-hero-overlay" />

        <div className="pvdf-hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={createPageUrl("Valves")}
              className="pvdf-back-link"
            >
              <ArrowLeft className="pvdf-back-icon" />
              <span>Back to Valves</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="pvdf-header-badge">
              High-Performance Thermoplastics
            </div>
            <h1 className="pvdf-hero-title">
              PVDF Pipe Fittings <span>&</span> Valves
            </h1>
            <p className="pvdf-hero-subtitle">
              Polyvinylidene fluoride (PVDF) - A highly crystalline high-performance thermoplastic 
              offering exceptional chemical resistance and temperature stability
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Introduction */}
      <section className="pvdf-intro-section">
        <motion.div
          className="pvdf-animated-bg-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="pvdf-animated-bg-2"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="pvdf-specs-container">
          <div className="pvdf-intro-grid">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="pvdf-intro-card">
                <motion.div 
                  className="pvdf-card-decoration"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="pvdf-card-title font-semibold" style={{marginTop:'30px'}}>
                      <motion.div
                        className="pvdf-title-accent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 32 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      />
                      Introduction
                    </div>
                    <br/>
                  </motion.div>
                </div>
                <div className="pvdf-card-content">
                  <p>
                    PVDF Pipe and Fittings are excellent for handling a wide range of chemical solvents 
                    and materials since they are resistant to reacting with most of these substances. Among 
                    the most often used commercial and industrial PVDF pipes are polyvinylidene fluoride 
                    pipes and fittings.
                  </p>
                  <p>
                    Our various PVDF piping meets all domestic and international quality specifications and 
                    criteria. Our entire collection can be delivered in the allowed period. This pipe is 
                    melt-blown so that you can extrude it.
                  </p>
                  <p>
                    To strengthen the connection between different materials, you can chemically etch the 
                    conduit. It is handy for metal pipes if you apply a PVDF coating. PVDF Piping system 
                    is in stock to satisfy the demands of our valued customers in all possible ways.
                  </p>
                  <p className="font-medium text-gray-900">
                    Polyvinylidene fluoride (PVDF) belongs to the group of highly crystalline high-performance 
                    thermoplastics. PVDF retains its high level of stiffness even within the upper temperature 
                    range.
                  </p>
                  <p>
                    The material is highly resistant to the majority of organic and inorganic media, as well 
                    as being physiologically safe and offering the benefits of low flammability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pvdf-image-grid"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 }}
                className="pvdf-floating-badge"
              >
                <p className="text-sm font-bold">ISO 10931</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                className="pvdf-image-card"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop&q=80"
                  alt="PVDF Pipes"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="pvdf-image-overlay-1" />
                <motion.div 
                  className="pvdf-image-content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="pvdf-image-title">PVDF Pipes</p>
                  <p className="pvdf-image-subtitle">High Performance</p>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
                className="pvdf-image-card"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80"
                  alt="Industrial Valves"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="pvdf-image-overlay-2" />
                <motion.div 
                  className="pvdf-image-content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="pvdf-image-title">Industrial Valves</p>
                  <p className="pvdf-image-subtitle">Precision Engineering</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
                className="pvdf-image-card"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop&q=80"
                  alt="Pipe Fittings"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="pvdf-image-overlay-3" />
                <motion.div 
                  className="pvdf-image-content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="pvdf-image-title">Pipe Fittings</p>
                  <p className="pvdf-image-subtitle">Durable Solutions</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                className="pvdf-image-card"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&auto=format&fit=crop&q=80"
                  alt="Valve Systems"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="pvdf-image-overlay-4" />
                <motion.div 
                  className="pvdf-image-content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="pvdf-image-title">Valve Systems</p>
                  <p className="pvdf-image-subtitle">Complete Integration</p>
                </motion.div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="pvdf-particle"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="pvdf-features-section">
        <div className="pvdf-specs-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pvdf-features-title"
          >
            Key <span>Features</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pvdf-features-grid"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="pvdf-feature-card"
              >
                <div className="pvdf-feature-icon">
                  <feature.icon />
                </div>
                <h3 className="pvdf-feature-card-title">{feature.title}</h3>
                <p className="pvdf-feature-card-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="pvdf-specs-section">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="pvdf-specs-pattern"
        />

        <div className="pvdf-specs-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pvdf-specs-header"
          >
            <h2 className="pvdf-specs-title">
              Technical <span>Specifications</span>
            </h2>
            <div className="pvdf-specs-divider" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pvdf-specs-grid"
          >
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="pvdf-spec-card group"
              >
                <motion.div 
                  className={`pvdf-spec-accent ${spec.colorClass}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <div className="pvdf-spec-content">
                  <motion.div 
                    className="pvdf-spec-icon-container"
                    style={{
                      "--start-color": spec.colorClass.includes("1") ? "#ef4444" : spec.colorClass.includes("2") ? "#374151" : "#dc2626",
                      "--end-color": spec.colorClass.includes("1") ? "#dc2626" : spec.colorClass.includes("2") ? "#1f2937" : "#b91c1c"
                    } }
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <spec.icon className="pvdf-spec-icon" />
                  </motion.div>
                  <h3 className="pvdf-spec-card-title">{spec.title}</h3>
                  <p className="pvdf-spec-value">{spec.value}</p>
                  {spec.subtitle && (
                    <p className="pvdf-spec-subtitle">{spec.subtitle}</p>
                  )}
                  {spec.standard && (
                    <div className="pvdf-spec-badge">
                      {spec.standard}
                    </div>
                  )}
                </div>
                <div className="pvdf-spec-bg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Production Methods */}
      <section className="pvdf-production-section">
        <div className="pvdf-production-bg">
          <img 
            src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&auto=format&fit=crop&q=80"
            alt="Industrial Background"
          />
        </div>

        <div className="pvdf-production-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pvdf-production-header"
          >
            <h2 className="pvdf-production-title">
              Production <span>Methods</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pvdf-production-grid"
          >
            {productionMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="pvdf-production-card"
              >
                <motion.div
                  className="pvdf-production-animated-bg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="pvdf-production-content">
                  <motion.div 
                    className="pvdf-production-icon"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <method.icon />
                  </motion.div>
                  <div>
                    <h3 className="pvdf-production-item">{method.item}</h3>
                    <p className="pvdf-production-method">{method.method}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welding Technology */}
      <section className="pvdf-welding-section">
        <div className="pvdf-welding-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pvdf-welding-header"
          >
            <h2 className="pvdf-welding-title">
              Welding <span>Technology</span>
            </h2>
            <p className="pvdf-welding-description">
              Advanced welding techniques for superior joint integrity and performance
            </p>
          </motion.div>

          <div className="pvdf-welding-grid">
            {/* Welding Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pvdf-welding-cards"
            >
              {weldingTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="pvdf-welding-card group"
                >
                  <motion.div 
                    className={`pvdf-welding-accent ${tech.colorClass}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />
                  <div className="pvdf-welding-card-content">
                    <div className="pvdf-welding-bg-icon">
                      <Zap />
                    </div>
                    <div className="pvdf-welding-header-row">
                      <div>
                        <h3 className="pvdf-welding-name">{tech.name}</h3>
                        <p className="pvdf-welding-desc">{tech.description}</p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 180, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap className="pvdf-welding-icon" />
                      </motion.div>
                    </div>
                    <div className="pvdf-welding-size">
                      <Ruler className="pvdf-welding-size-icon" />
                      <span className="pvdf-welding-size-text">Size: {tech.size}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pvdf-featured-image group"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80"
                alt="Welding Technology"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="pvdf-featured-overlay" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pvdf-featured-info"
              >
                <div className="pvdf-featured-card">
                  <h3 className="pvdf-featured-card-title">
                    Precision Welding
                  </h3>
                  <p className="pvdf-featured-card-desc">
                    State-of-the-art welding technology ensuring leak-proof connections and 
                    maximum durability for critical industrial applications.
                  </p>
                  <div className="pvdf-featured-grid">
                    <div className="pvdf-featured-stat">
                      <p className="pvdf-featured-stat-label">DVS Certified</p>
                      <p className="pvdf-featured-stat-value">2207-15</p>
                    </div>
                    <div className="pvdf-featured-stat">
                      <p className="pvdf-featured-stat-label">Max Size</p>
                      <p className="pvdf-featured-stat-value">315 mm</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pvdf-corner-accent"
                animate={{
                  borderRadius: ["0% 0% 0% 100%", "0% 0% 100% 0%", "0% 0% 0% 100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
<PortfolioTwo />
    <FooterAreaTwo />
    </>
  );
}