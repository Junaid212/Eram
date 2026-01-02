import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Flame, Snowflake, Box } from 'lucide-react';
import './HeroSection.css';

const materialCategories = [
  {
    title: 'Heat-Resisting Steel',
    accent: 'bg-red-600',
    icon: Flame,
    materials: [
      { code: 'N08020', name: 'Alloy 20' },
      { code: 'N06022', name: 'Hastelloy C22' },
      { code: 'N04400', name: 'Monel 400' },
      { code: 'N06600', name: 'Alloy 600' },
      { code: 'N06625', name: 'Inconel 625' },
      { code: 'N08800', name: 'Alloy 800' },
      { code: 'N08810', name: 'Alloy 800 H' },
      { code: 'N08811', name: 'Alloy 800 H/T' },
      { code: 'N08825', name: 'Inconel 825' },
      { code: 'N10276', name: 'Hastelloy C276' },
    ]
  },
  {
    title: 'Fine Grain / Low Temp Steel',
    accent: 'bg-gray-600',
    icon: Snowflake,
    materials: [
      { code: 'A350 LF2', name: '' },
      { code: 'A694-F42', name: '' },
      { code: 'A694-F46', name: '' },
      { code: 'A694-F52', name: '' },
      { code: 'A694-F56', name: '' },
      { code: 'A694-F60', name: '' },
      { code: 'A694-F65', name: '' },
      { code: 'A694-F70', name: '' },
    ]
  },
  {
    title: 'High Temperature Steel',
    accent: 'bg-red-700',
    icon: Flame,
    materials: [
      { code: 'A105/N/C21', name: '' },
      { code: 'A516 Gr.70', name: '' },
      { code: 'A182-F1', name: '' },
      { code: 'A182-F5', name: '' },
      { code: 'A182-F9', name: '' },
      { code: 'A182-F11', name: '' },
      { code: 'A182-F12', name: '' },
      { code: 'A182-F22', name: '' },
      { code: 'A182-F91', name: '' },
    ]
  },
  {
    title: 'Austenitic Stainless Steel',
    accent: 'bg-gray-500',
    icon: Sparkles,
    materials: [
      { code: 'A182-F304', name: '' },
      { code: 'A182-F304H', name: '' },
      { code: 'A182-F304L', name: '' },
      { code: 'A182-F310', name: '' },
      { code: 'A182-F316', name: '' },
      { code: 'A182-F316H', name: '' },
      { code: 'A182-F316L', name: '' },
      { code: 'A182-F316TI', name: '' },
      { code: 'A182-F317L', name: '' },
      { code: 'A182-F321', name: '' },
      { code: 'A182-F321H', name: '' },
      { code: 'A182-F347', name: '' },
      { code: 'A182-F347H', name: '' },
      { code: '904L', name: '' },
    ]
  },
  {
    title: 'Duplex / Super Duplex',
    accent: 'bg-red-500',
    icon: Layers,
    materials: [
      { code: 'A182-F51/60', name: 'ASME/ASTM' },
      { code: 'A182-F53', name: '' },
      { code: 'A182-F55', name: '' },
      { code: 'A182-F44', name: '6MO AL-6XN' },
    ]
  }
];

export default function MaterialsGrid() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="materials-grid-section">
      {/* Floating orbs */}
      <motion.div
        className="floating-orb-red"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="floating-orb-gray"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <div className="materials-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="materials-header"
        >
          <div className="header-group">
            <Box className="header-icon" />
            <span className="section-subtitle">
              Specifications
            </span>
          </div>
          <h2 className="section-title" id='section-title2'>
            Material Grades
          </h2>
        </motion.div>

        {/* Category Navigation */}
        <div className="category-navigation">
          {materialCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`category-button ${activeCategory === index ? 'active' : ''}`}
              >
                <Icon className="category-icon" />
                {category.title}
              </motion.button>
            );
          })}
        </div>

        {/* Materials Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="materials-grid"
          >
            {materialCategories[activeCategory].materials.map((material, index) => (
              <motion.div
                key={material.code}
                className="material-card"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                  zIndex: 10
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="material-content">
                  <div className="material-code-container">
                    <span className="material-code">{material.code}</span>
                    {material.name && (
                      <span className="material-name">{material.name}</span>
                    )}
                  </div>
                  <div className="material-accent-line" />
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="material-hover-glow"
                    style={{
                      background: `radial-gradient(circle at center, rgba(220, 38, 38, 0.2) 0%, transparent 70%)`
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}