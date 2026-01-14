import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import './ProductOverview.css';

const products = [
  {
    title: 'Emsco Bomco F1600 Mud Pump Liner',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    specs: [
      { label: 'Type', value: 'F Mud Pump Parts' },
      { label: 'Standard', value: 'API7K' },
      { label: 'Material', value: 'High chrome iron sleeve' },
      { label: 'Features', value: 'Wear resistance, corrosion resistance and high surface finish' }
    ]
  },
  {
    title: 'Mud Pump Piston Assembly',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80',
    specs: [
      { label: 'Piston core', value: '42CrMo forge piece' },
      { label: 'Rubber material', value: 'PU, NBR, HNBR' },
      { label: 'Applicable medium', value: 'Oil-based mud, water-based mud' }
    ]
  },
  {
    title: 'API6 Valve Assembly For Mud Pump',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
    specs: [
      { label: 'Application', value: 'Oil well drilling mud pump' },
      { label: 'Material', value: '20CrMnTi' },
      { label: 'Application model', value: 'F500 F800 F1000 F1300 F1600 F2200' }
    ]
  },
  {
    title: 'Clamp Assembly for Mud Pump',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80',
    specs: [
      { label: 'Material', value: 'ZG35CrMo' },
      { label: 'Functions', value: 'Connection' },
      { label: 'Model Number', value: 'F500 F800 F1000 F1600 F2200 mud pump' }
    ]
  },
  {
    title: 'Piston Rod for Mud Pump',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    specs: [
      { label: 'Structure', value: 'PISTON PUMP' },
      { label: 'Material', value: '42CrMo' },
      { label: 'Standard', value: 'API 7K' }
    ]
  },
  {
    title: 'Plug Board Assembly',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=80',
    specs: [
      { label: 'Model', value: 'EMSCO F1300 F1600' },
      { label: 'Type', value: 'Plug board assembly' },
      { label: 'Standard', value: 'API standard' }
    ]
  },
  {
    title: 'Positioning Plate for Mud Pump F1600',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    specs: [
      { label: 'Application', value: 'Used for F1300/1600 mud pump' },
      { label: 'Material', value: '45 steel forgings' },
      { label: 'Certificate', value: 'API 7K' }
    ]
  },
  {
    title: 'Cylinder Head for Mud Pump',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    specs: [
      { label: 'Material', value: '35 Cr Mo' },
      { label: 'Standards', value: 'ISO 9001-2000' },
      { label: 'Usage', value: 'Mud pump parts and oil drilling tools' }
    ]
  },
  {
    title: 'Valve Cover for Mud Pump',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
    specs: [
      { label: 'Material', value: '35CrMo' },
      { label: 'Standard', value: 'API 7K' },
      { label: 'Application', value: 'Used for BOMCO mud pump' }
    ]
  }
];

export default function ProductsGrid() {
  return (
    <section className="products-grid-section">
      {/* Decorative elements */}
      <div className="products-grid-top-line" />
      
      <div className="products-grid-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="products-grid-header"
        >
          <h2 className="products-grid-title">
            Complete <span>Product Range</span>
          </h2>
          <p className="products-grid-subtitle">
            Premium quality components for all major mud pump models
          </p>
          <div className="products-grid-divider" />
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}