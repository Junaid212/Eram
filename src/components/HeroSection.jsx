import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, ChevronDown } from 'lucide-react';
import './HeroSection.css'; // Import the CSS file

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated gradient background */}
      <motion.div 
        className="animated-gradient-bg"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Industrial texture overlay */}
      <div 
        className="texture-overlay"
      />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="grid-pattern"
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating 3D hexagons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-hexagon"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 360, 0],
            x: [0, Math.sin(i) * 20, 0]
          }}
          transition={{ 
            duration: 15 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            top: `${10 + (i * 12)}%`,
            left: `${5 + (i * 12)}%`,
          }}
        >
          <Hexagon 
            className={i % 2 === 0 ? "hex-red" : "hex-gray"} 
            strokeWidth={0.5} 
            size={60 + i * 10}
          />
        </motion.div>
      ))}
      
      {/* Red accent line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="accent-line"
      />
      
      <div className="content-container">
        {/* Glass morphism badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="badge-container"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(220, 38, 38, 0.3)',
                '0 0 40px rgba(220, 38, 38, 0.5)',
                '0 0 20px rgba(220, 38, 38, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="badge"
          >
            <span className="badge-text">
              <span className="badge-dot" />
              Industrial Components
            </span>
          </motion.div>
        </motion.div> */}
        
        {/* Main title with 3D effect */}
        <h1 style={{color:'white'}}>Flanges</h1>
        
        {/* Animated subtitle with particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="subtitle-container"
        >
          <motion.p 
            className="subtitle"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Precision Engineering for Critical Applications
          </motion.p>
          
          <div className="standards-container">
            {['ASTM', 'ASME', 'DIN', 'AWWA'].map((standard, i) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, color: '#dc2626' }}
                className="standard-item"
              >
                <motion.span 
                  className="standard-dot"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <span className="standard-text">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <span className="scroll-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="scroll-icon" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}