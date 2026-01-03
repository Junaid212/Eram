import React from 'react';
import { motion } from 'framer-motion';

export default function SpecificationCard({ title, icon: Icon, data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="specification-card"
    >
      <div className="specification-card-header">
        <div className="specification-card-header-bg" />
        <div className="specification-card-header-content">
          <div className="specification-card-icon-container">
            <Icon className="specification-card-icon" />
          </div>
          <h3 className="specification-card-title">{title}</h3>
        </div>
      </div>
      
      <div className="specification-card-body space-y-4">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
            className="specification-card-item-container"
          >
            <span className="specification-card-item-label">
              {item.label}:
            </span>
            <span className="specification-card-item-value">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
      <style>{`
      .specification-card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  overflow: hidden;
}

.specification-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.specification-card-header {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.specification-card-header-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  background-color: white;
  opacity: 0.1;
  border-radius: 50%;
  transform: translate(2rem, -2rem);
}

.specification-card-header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.specification-card-icon-container {
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.specification-card-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.specification-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.025em;
}

.specification-card-body {
  padding: 1.5rem;
}

.specification-card-item-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.specification-card-item-container:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

@media (min-width: 640px) {
  .specification-card-item-container {
    flex-direction: row;
    align-items: flex-start;
  }
}

.specification-card-item-label {
  font-weight: 600;
  color: #111827;
  min-width: 120px;
  font-size: 0.875rem;
}

.specification-card-item-value {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.625;
  flex: 1;
}

/* Spacing utility */
.space-y-4 > * + * {
  margin-top: 1rem;
}
      `}</style>
    </motion.div>
  );
}