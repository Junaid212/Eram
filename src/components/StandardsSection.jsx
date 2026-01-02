import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gauge, CheckCircle2, Ruler } from 'lucide-react';
import './HeroSection.css';

const standards = ['B16.5', 'B16.36', 'B16.47', 'B16.48', 'AWWA', 'DIN'];
const pressureClasses = ['150#', '300#', '600#', '900#', '1500#', '2500#'];

export default function StandardsSection() {
  return (
    <section className="standards-section">
      {/* Dynamic background */}
      <div className="dynamic-background" />
      
      {/* Animated mesh gradient */}
      <motion.div
        className="animated-mesh-gradient"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <div className="standards-container">
        <div className="grid-layout">
          {/* Standards */}
          <motion.div
            className="standards-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="header-group">
              <motion.div
                className="rotating-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="header-icon" />
              </motion.div>
              <span className="section-subtitle">
                Compliance
              </span>
            </div>
            <h2 className="section-title">
              Material Standards
            </h2>
            
            <div className="standards-grid">
              {standards.map((standard, index) => (
                <motion.div
                  key={standard}
                  className="standard-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                >
                  <motion.div
                    className="standard-item-hover"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="standard-content">
                    <motion.div
                      className="check-icon-container"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="check-icon" />
                    </motion.div>
                    <span className="standard-text">
                      {standard}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="standards-footer">
              ASTM and ASME certified standards
            </p>
          </motion.div>
          
          {/* Size & Pressure */}
          <motion.div
            className="pressure-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="header-group">
              <Ruler className="header-icon" />
              <span className="section-subtitle">
                ASME B16.5
              </span>
            </div>
            <h2 className="section-title">
              Size & Pressure
            </h2>
            
            <motion.div 
              className="size-range"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="size-values">
                <motion.span 
                  className="size-large"
                  whileHover={{ scale: 1.1, color: '#dc2626' }}
                  transition={{ type: "spring" }}
                >
                  1/2"
                </motion.span>
                <motion.span 
                  className="size-connector"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  thru
                </motion.span>
                <motion.span 
                  className="size-large"
                  whileHover={{ scale: 1.1, color: '#dc2626' }}
                  transition={{ type: "spring" }}
                >
                  102"
                </motion.span>
              </div>
              <p className="size-label">Available size range</p>
            </motion.div>
            
            <div className="pressure-section">
              <div className="pressure-header">
                <motion.div
                  className="rotating-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Gauge className="gauge-icon" />
                </motion.div>
                <p className="pressure-label">Pressure Classes</p>
              </div>
              <div className="pressure-grid">
                {pressureClasses.map((pressure, index) => (
                  <motion.span
                    key={pressure}
                    className="pressure-item"
                    initial={{ opacity: 0, y: 10, rotateX: -90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: '#dc2626',
                      boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)',
                      y: -4
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {pressure}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}