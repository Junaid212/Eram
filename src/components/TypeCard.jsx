import React from 'react';
import { motion } from 'framer-motion';

export default function TypeCard({ title, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="type-card"
    >
      <div className="type-card-content">
        <div className="type-card-icon-container">
          <Icon className="type-card-icon" />
        </div>
        <h4 className="type-card-title">{title}</h4>
      </div>
      <style>{`
      /* Add these to your existing ButtWeldFittings.css */

.type-card {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
}

.type-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}

.type-card-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.type-card-icon-container {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: #fef2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.type-card-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #dc2626;
}

.type-card-title {
  font-weight: 600;
  color: #111827;
  font-size: 0.875rem;
  text-align: center;
  margin: 5px;
}
      `}</style>
    </motion.div>
  );
}