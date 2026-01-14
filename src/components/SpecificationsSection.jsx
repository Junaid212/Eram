import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './ProductOverview.css';
import { 
  Thermometer, 
  Gauge, 
  Ruler,
  Zap,
  Shield,
  Settings
} from "lucide-react";

const bomcoSpecs = [
  { label: 'Application', value: 'Triplex pump' },
  { label: 'Material', value: '35CrMo or 8630 metal or 20CrNi2MoV metal' },
  { label: 'Certificate', value: 'API 7k' }
];

const specifications = [
  {
    icon: Ruler,
    colorClass: "pvdf-spec-accent-1",
    heading: "Mud Pump Piston Assembly",
    items: [
      { title: "Piston Core", subtitle: "42CrMo forge piece" },
      { title: "Rubber Material", subtitle: "PU, NBR, HNBR" },
      { title: "Applicable Medium", subtitle: "Oil-based mud, Water-based mud" }
    ]
  },
  {
    icon: Gauge,
    colorClass: "pvdf-spec-accent-2",
    heading: "API 6 Valve Assembly For Mud Pump",
    items: [
      { title: "Application", subtitle: "Oil well drilling mud pump" },
      { title: "Material", subtitle: "20CrMnTi" },
      { title: "Application Model", subtitle: "F500, F800, F1000, F1300, F1600, F2200" }
    ]
  },
  {
    icon: Thermometer,
    colorClass: "pvdf-spec-accent-3",
    heading: "Clamp Assembly for Mud Pump",
    items: [
      { title: "Material", subtitle: "ZG35CrMo" },
      { title: "Function", subtitle: "Connection" },
      { title: "Model Number", subtitle: "F500, F800, F1000, F1600, F2200 mud pump" }
    ]
  },
  {
    icon: Shield,
    colorClass: "pvdf-spec-accent-4",
    heading: "Piston Rod for Mud Pump",
    items: [
      { title: "Structure", subtitle: "Piston Pump" },
      { title: "Material", subtitle: "42CrMo" },
      { title: "Standard", subtitle: "API 7K", badge: true }
    ]
  },
  {
    icon: Zap,
    colorClass: "pvdf-spec-accent-5",
    heading: "Plug Board Assembly",
    items: [
      { title: "Compatible Models", subtitle: "EMSCO F1300, F1600" },
      { title: "Product Type", subtitle: "Plug board assembly" },
      { title: "Standard", subtitle: "API standard", badge: true }
    ]
  },
  {
    icon: Settings,
    colorClass: "pvdf-spec-accent-6",
    heading: "Positioning Plate for Mud Pump F1600",
    items: [
      { title: "Application", subtitle: "Used for F1300 / F1600 mud pump" },
      { title: "Material", subtitle: "45 steel forgings" },
      { title: "Certificate", subtitle: "API 7K", badge: true }
    ]
  },
  {
    icon: Shield,
    colorClass: "pvdf-spec-accent-4",
    heading: "Cylinder Head for Mud Pump",
    items: [
      { title: "Material", subtitle: "35CrMo" },
      { title: "Standard", subtitle: "ISO 9001-2000" },
      { title: "Usage", subtitle: "Mud pump parts and oil drilling tools" }
    ]
  },
  {
    icon: Settings,
    colorClass: "pvdf-spec-accent-6",
    heading: "Emsco Bomco F1600 Mud Pump Liner",
    items: [
      { title: "Type", subtitle: "F Mud Pump Parts" },
      { title: "Standard", subtitle: "API 7K", badge: true },
      { title: "Material", subtitle: "High chrome iron sleeve" },
      { title: "Features", subtitle: "wear resistance, corrosion resistance and high surface finish." },
    ]
  },
  {
    icon: Zap,
    colorClass: "pvdf-spec-accent-2",
    heading: "Valve Cover for Mud Pump",
    items: [
      { title: "Material", subtitle: "35CrMo" },
      { title: "Standard", subtitle: "API 7K", badge: true },
      { title: "Application", subtitle: "Used for BOMCO mud pump" }
    ]
  }
];


export default function SpecificationsSection() {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <section className="specifications-section" style={{maxWidth:'100rem', padding:'6rem'}}>
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="specifications-orb-1"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="specifications-orb-2"
        />

        <div className="specifications-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="specifications-header"
          >
            <h2 className="specifications-title">
              BOMCO <span>Hydraulic Cylinder</span>
            </h2>
            <div className="specifications-divider" />
          </motion.div>

          <div className="specifications-grid">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="specifications-image-container group"
            >
              <div className="specifications-image-glow" />
              <div className="specifications-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
                  alt="Hydraulic Cylinder"
                  className="specifications-image"
                />
                <div className="specifications-image-overlay" />
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="specifications-list">
                {bomcoSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="specifications-item">
                      <div className="specifications-icon-container">
                        <Check className="specifications-icon" />
                      </div>
                      <div className="specifications-content">
                        <span className="specifications-label">
                          {spec.label}
                        </span>
                        <span className="specifications-value">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
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
                whileHover={{ scale: 1.03, y: -5 }}
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
                      "--start-color": spec.colorClass.includes("1") ? "#3b82f6" : 
                                      spec.colorClass.includes("2") ? "#10b981" : 
                                      spec.colorClass.includes("3") ? "#ef4444" :
                                      spec.colorClass.includes("4") ? "#8b5cf6" :
                                      spec.colorClass.includes("5") ? "#f59e0b" : "#06b6d4",
                      "--end-color": spec.colorClass.includes("1") ? "#1d4ed8" : 
                                    spec.colorClass.includes("2") ? "#059669" : 
                                    spec.colorClass.includes("3") ? "#dc2626" :
                                    spec.colorClass.includes("4") ? "#7c3aed" :
                                    spec.colorClass.includes("5") ? "#d97706" : "#0891b2"
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <spec.icon className="pvdf-spec-icon" />
                    
                  </motion.div>
                   {spec.heading && (
    <h3 className="pvdf-spec-card-title">
      {spec.heading}
    </h3>
  )}
                  
                  
                  <div className="pvdf-spec-list">
                    {spec.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={listItemVariants}
                        className="pvdf-spec-list-item"
                      ><h3>{item.heading}</h3>
                        
                        <h3 className="pvdf-spec-item-title">{item.title}</h3>
                        <p className="pvdf-spec-item-subtitle">{item.subtitle}</p>
                        {/* {item.badge && (
                          <div className="pvdf-spec-badge">
                            {item.subtitle}
                          </div>
                        )} */}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="pvdf-spec-bg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <style>{`
      .pvdf-spec-item-title{
        font-size: 18px;
      }
      .pvdf-spec-item-subtitle{
        font-size: 14px;
      }

        
      `}</style>
    </>
  );
}