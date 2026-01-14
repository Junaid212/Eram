import React from 'react';
import { motion } from 'framer-motion';
import { Cylinder, Shield, Gauge } from 'lucide-react';
import './ProductOverview.css';

const features = [
  {
    icon: Cylinder,
    title: 'Mud Pump Module',
    subtitle: 'Hydraulic Cylinder Assembly'
  },
  {
    icon: Shield,
    title: 'High Durability',
    subtitle: 'Industrial Grade Quality'
  },
  {
    icon: Gauge,
    title: 'Pressure Rating',
    subtitle: '5000, 7500, 10000 PSI'
  }
];

export default function ProductOverview() {
  return (
    <section className="product-overview-section">
      {/* Subtle pattern */}
      <div className="product-overview-pattern" />

      <div className="product-overview-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="product-overview-header"
        >
          <h2 className="product-overview-title">
            Hydraulic Cylinder For{' '}
            <span>BOMCO</span> Mud Pumps
          </h2>
          <div className="product-overview-divider" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="product-overview-description"
        >
          Hydraulic Cylinder is the main part for fluid end of the mud pumps. The hydraulic cylinder of mud pumps under different brands are also not all the same. Such as the famous brands of BOMCO, EMSCO, GARDNER DENVER, OILWELL, NOV, etc. The similar mud pumps model of theirs, the parts are not all the same. But all of they must use hydraulic cylinder. And other spare parts will be assembly to hydraulic cylinder.
        </motion.p>

        {/* Feature cards */}
        <div className="product-overview-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="product-overview-card">
                {/* Hover gradient */}
                <div className="product-overview-card-glow" />
                
                <div className="product-overview-card-content">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="product-overview-icon-container"
                  >
                    <feature.icon className="product-overview-icon" />
                  </motion.div>
                  
                  <h3 className="product-overview-card-title">
                    {feature.title}
                  </h3>
                  <p className="product-overview-card-subtitle">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}