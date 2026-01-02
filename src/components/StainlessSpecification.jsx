import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package, FileText, Zap } from 'lucide-react';
import './HeroSection.css';

export default function StainlessSpecification() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  

  // Fallback gradient if product doesn't have one
  const productGradient = 'from-blue-600 to-purple-600';
  const gradientClasses = productGradient.split(' ');

  return (
    <div className="product-container">
      {/* Specifications Section */}
      <motion.div 
  className="specifications-section"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h2 className="specifications-title">
    <Zap className="specifications-icon" />
    Technical Specifications
  </h2>
  <div className="specifications-grid">
    {/* Seamless Pipes Card */}
    <motion.div
      className="specification-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="specification-title">
        Seamless Pipes
      </h3>
      <div className="specification-details">
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Schedule: SCH 10, 20, STD, 40, 80, 160</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Standard: ASTM A312/A358</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Material: High-grade stainless steel</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Applications: Chemical, petrochemical, oil & gas</span>
        </div>
      </div>
    </motion.div>

    {/* EFW/ERW Pipes Card */}
    <motion.div
      className="specification-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="specification-title">
        EFW/ERW Pipes
      </h3>
      <div className="specification-details">
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Schedule: SCH 10, 20, STD, 40</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Grades: TP 316/316L, TP 304/304L, 310, 321</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Precision welded construction</span>
        </div>
        <div className="specification-detail">
          <div className="specification-dot" />
          <span className="specification-text">Cost-effective for large diameter applications</span>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>
    </div>
  );
}