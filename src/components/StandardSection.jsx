import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Zap, Shield, Thermometer, Gauge } from 'lucide-react';
import SpecCard from './SpecCard';
import './SpecCard.css';

export default function StandardsSection() {
  const plumbingSpecs = [
    {
      icon: Ruler,
      title: 'Manufacturing Standards',
      specs: [
        'ASTM D1785-88 Schedule 40 & 80',
        'ASTM D2665 certified',
        'Standard lengths: 4, 5.8 & 6 meters'
      ],
      color: 'red',
    },
    {
      icon: Palette,
      title: 'Colour & Socket Types',
      specs: [
        'Schedule 40 — White finish',
        'Schedule 80 — Dark Grey finish',
        'ASTM D2665 — White finish',
        'Solvent Weld / Plain end options'
      ],
      color: 'gray',
    },
  ];

  const electricalSpecs = [
    {
      icon: Ruler,
      title: 'Manufacturing Standards',
      specs: [
        'NEMA TC-2 compliant',
        'NEMA TC-6 compliant',
        'NEMA TC-8 compliant',
        'Standard lengths: 3, 5.8 & 6 meters'
      ],
      color: 'red',
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      specs: [
        'UL 651 listed',
        'CSA certified',
        'Meets NEC requirements',
        'Flame retardant properties'
      ],
      color: 'gray',
    },
  ];

  return (
    <section className="standards-section relative">
      {/* Background Effects */}
      <div className="standards-background-effect standards-bg-1" />
      <div className="standards-background-effect standards-bg-2" />

      <div className="standards-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="standards-header"
        >
          <h2 className="standards-title">Product Standards & Specifications</h2>
          <p className="standards-subtitle">
            Comprehensive compliance with international standards for quality assurance
          </p>
        </motion.div>

        {/* Plumbing Standards */}
        <div className="standards-group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="standards-group-header"
          >
            <Ruler className="standards-group-icon" />
            <h3 className="standards-group-title">Plumbing Standards</h3>
          </motion.div>

          <div className="standards-grid">
            {plumbingSpecs.map((spec, index) => (
              <SpecCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                specs={spec.specs}
                color={spec.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Animated Separator */}
        <motion.div 
          className="standards-animated-separator"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="standards-animated-dot" />
        </motion.div>

        {/* Electrical Standards */}
        <div className="standards-group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="standards-group-header"
          >
            <Zap className="standards-group-icon" />
            <h3 className="standards-group-title">Electrical Conduit Standards</h3>
          </motion.div>

          <div className="standards-grid">
            {electricalSpecs.map((spec, index) => (
              <SpecCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                specs={spec.specs}
                color={spec.color}
                delay={index * 0.1 + 0.2}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="standards-highlight"
        >
          <Zap className="standards-highlight-icon" />
          <p className="standards-highlight-text">
            <strong>Note:</strong> All products are manufactured in compliance with international 
            standards and undergo rigorous quality control testing. Custom specifications and 
            lengths are available upon request for bulk orders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}