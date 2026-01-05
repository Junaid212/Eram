import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated background elements */}
      <div className="hero-background">
        <motion.div
          className="hero-bg-element-1"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-bg-element-2"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-bg-element-3"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="hero-grid-pattern" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            INDUSTRIAL GRADE SOLUTIONS
          </span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>UPVC</span> & <span>CPVC</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Premium PVC Sch-40 & Sch-80, CPVC, Polypropylene and HDPE Pipes, Fittings & Valves
        </motion.p>

        <motion.div
          className="hero-applications"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['Plumbing', 'Industrial', 'Electrical', 'Irrigation'].map((item, i) => (
            <span key={item} className="hero-application-item">
              <span className="hero-application-dot" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#specifications"
            className="hero-cta"
          >
            Explore Products
            <ChevronDown className="hero-cta-icon" />
          </a>
        </motion.div>
      </div>

      {/* Decorative pipes illustration */}
      <motion.div
        className="hero-bottom-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
}