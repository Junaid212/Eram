import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import './HeroSection.css';

const flangeTypes = [
  'Welding Neck',
  'Slip On',
  'Blind',
  'Socket Weld',
  'Threaded',
  'Lap Joint',
  'Reducing',
  'Long Welding Neck',
  'Orifice',
  'Drip Rings',
  'Spectacle Plates',
  'Spacers / Spades'
];

export default function TypesSection() {
  return (
    <section className="types-section">
      {/* Background Image Overlay */}
      <div className="background-image-overlay" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="animated-gradient-overlay"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating hexagons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-hexagon-container"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5
          }}
          style={{
            top: `${10 + i * 15}%`,
            left: `${5 + i * 15}%`,
          }}
        >
          <Hexagon className="floating-hexagon" strokeWidth={0.5} />
        </motion.div>
      ))}
      
      <div className="types-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="types-header"
        >
          <span className="section-subtitle">
            Catalog
          </span>
          <h2 className="section-title">
            Common Types
          </h2>
        </motion.div>
        
        <div className="flange-grid">
          {flangeTypes.map((type, index) => (
            <motion.div
              key={type}
              className="flange-card"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.15)';
                e.currentTarget.style.borderColor = '#dc2626';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(220, 38, 38, 0.4), inset 0 0 60px rgba(220, 38, 38, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Corner decoration */}
              <motion.div
                className="corner-decoration"
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Bottom accent line */}
              <motion.div
                className="bottom-accent-line"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Number badge */}
              {/* <motion.div
                className="number-badge"
              >
                {index + 1}
              </motion.div> */}
              
              <div className="card-content">
                <motion.h3 
                  className="flange-type-name"
                  whileHover={{ color: '#dc2626' }}
                >
                  {type}
                </motion.h3>
                
                {/* Animated icon */}
                <motion.div
                  className="flange-icon"
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Hexagon className="icon-svg" size={24} strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}