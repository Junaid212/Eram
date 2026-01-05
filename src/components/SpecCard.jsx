import React from 'react';
import { motion } from 'framer-motion';
import './SpecCard.css';

export default function SpecCard({ icon: Icon, title, specs, color = 'red', delay = 0 }) {
  // Handle undefined props safely
  const safeTitle = title || 'Untitled';
  const safeSpecs = Array.isArray(specs) ? specs : [];
  
  // Get the appropriate CSS classes based on color
  const getCardColorClass = () => {
    switch(color) {
      case 'gray': return 'spec-card-gray';
      case 'white': return 'spec-card-white';
      default: return 'spec-card-red';
    }
  };

  const getIconColorClass = () => {
    switch(color) {
      case 'gray': return 'spec-icon-gray';
      case 'white': return 'spec-icon-white';
      default: return 'spec-icon-red';
    }
  };

  // Render the icon safely
  const renderIcon = () => {
    if (Icon && typeof Icon === 'function') {
      return <Icon className="spec-icon" />;
    }
    return <div className="spec-icon">Icon</div>;
  };

  return (
    <motion.div
      className={`spec-card ${getCardColorClass()} group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Hover glow effect */}
      <div className="spec-card-glow" />
      
      <div className={`spec-icon-container ${getIconColorClass()}`}>
        {renderIcon()}
      </div>

      <h3 className="spec-card-title">{safeTitle}</h3>

      {safeSpecs.length > 0 ? (
        <ul className="spec-list">
          {safeSpecs.map((spec, index) => (
            <li key={index} className="spec-item">
              <span className="spec-bullet" />
              <span className="spec-text">{spec}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="spec-text">No specifications available</p>
      )}
    </motion.div>
  );
}