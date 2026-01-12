import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Wrench, Shield, Zap, CheckCircle2, Gauge, Cog, Settings } from 'lucide-react';
import HeaderFive from '../components/HeaderFive';
import HeaderOne from '../components/HeaderOne';
import Breadcrumb from '../components/Breadcrumb';
import CTAAreaOne from '../components/CTAAreaOne';
import CTAOne from '../components/CTAOne';
import FooterTwo from '../components/FooterTwo';
import FooterAreaTwo from '../components/FooterAreaTwo';
import PortfolioTwo from '../components/PortfolioTwo';

export default function MudPumpSpare() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const products = [
    {
      title: "Pulsation Dampener Assembly",
      material: "Forged steel, Casted steel",
      structure: "Piston pump",
      theory: "Reciprocating Pump",
      icon: Gauge
    },
    {
      title: "Crankshaft Assembly",
      material: "Alloy steel casting",
      feature: "High durability",
      icon: Cog
    },
    {
      title: "Pinion Shaft Assembly",
      material: "Alloy steel forging",
      structure: "Gear",
      application: "Well drilling",
      icon: Settings
    },
    {
      title: "Hydraulic Cylinder Assembly",
      feature: "High durability",
      pressure: "Up to 5000, 7500, and 10000psi",
      treatment: "Thermal refining treatment, rigid inspection",
      icon: Zap
    },
    {
      title: "Crosshead Assembly",
      material: "Alloy Steel",
      application: "Oil well drilling",
      model: "F500 F800 F1000 F1300 F1600 F2200",
      icon: Wrench
    },
    {
      title: "Shear Pin Safety Valve JA-3",
      type: "JA-3",
      connection: "Flange / screw thread connection",
      maxPressure: "5500 PSI",
      icon: Shield
    }
  ];

  const mudPumps = [
    {
      name: "F-2200HL Mud Pump Set",
      manufacturer: "BOMCO",
      power: "1640kW",
      cylinder: "220mm",
      pressure: "51.2mpa"
    },
    {
      name: "F1000 Mud Pump",
      type: "Drilling mud pump",
      power: "1000/746 HP/KW",
      valve: "API 6#",
      packaging: "Standard Export Packing"
    },
    {
      name: "Triplex Mud Pumps",
      models: "F500, F800, F1000, F1600, F1600HL, F2200, F2200HL",
      brand: "Bomco",
      type: "Drilling mud pump"
    },
    {
      name: "BOMCO F-1600 Mud Pump",
      model: "F-1600",
      power: "1600/1193 HP/KW",
      valve: "API 7#",
      type: "Drilling mud pump"
    }
  ];

  return (
    <>
    <HeaderOne/>
    <Breadcrumb title={'Mud Pump & Spare Parts Assembly'}/>
      <style>{`
        .page-container {
          min-height: 100vh;
          background-color: white;
          overflow: hidden;
        }
        .section-assembly {
          padding: 4rem 1.5rem;
          background-color: #F9FAFB;
        }

        .section-container {
          max-width: 80rem;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .section-title-accent {
          color: #DC2626;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #4B5563;
          max-width: 42rem;
          margin: 0 auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .product-card {
          height: 100%;
          border: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.5s;
          overflow: hidden;
          background-color: white;
          border-radius: 0.5rem;
        }

        .product-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: #E6CCCC;
        }

        .product-card-content {
          padding: 2rem;
        }

        .product-icon-wrapper {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .product-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .product-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1rem;
          transition: color 0.3s;
        }

        .product-card:hover .product-title {
          color: #DC2626;
        }

        .product-details {
          display: flex;
          flex-direction: column;
          gap: 0.005rem;
        }

        .product-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .product-detail-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #DC2626;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .product-detail-text {
          color: #4B5563;
          line-height: 1.5;
        }

        .product-detail-label {
          font-weight: 600;
          color: #111827;
        }

        .section-pumps {
          padding: 4rem 1.5rem;
          background: linear-gradient(to bottom, #F9FAFB 0%, white 100%);
        }

        .pumps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .pump-card {
          height: 100%;
          border: none;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transition: all 0.5s;
          background: linear-gradient(135deg, white 0%, #F9FAFB 100%);
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .pump-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: #E6CCCC;
        }

        .pump-card-content {
          padding: 2.5rem;
        }

        .pump-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .pump-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827;
          transition: color 0.3s;
        }

        .pump-card:hover .pump-title {
          color: #DC2626;
        }

        .pump-icon-circle {
          width: 3rem;
          height: 3rem;
          background-color: #DC2626;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        .pump-card:hover .pump-icon-circle {
          transform: scale(1.1);
        }

        .pump-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .pump-details {
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          color: #4B5563;
        }

        .pump-detail-label {
          font-weight: 600;
          color: #111827;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 6rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 3.75rem;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pumps-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bearing-card-content {
            padding: 4rem;
          }

          .bearing-main-title {
            font-size: 2.25rem;
          }

          .cta-title {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="page-container">

        {/* Assembly Parts Section */}
        <section className="section-assembly">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-header"
            >
              <h2 >
                Mud Pump <span className="section-title-accent">and Spare Parts Assembly</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="products-grid"
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        <CTAOne/>

        {/* Mud Pumps Section */}
        <section className="section-pumps">
          <div className="section-container">

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pumps-grid"
            >
              {mudPumps.map((pump, index) => (
                <MudPumpCard key={index} pump={pump} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <PortfolioTwo />
      <FooterAreaTwo />
    </>
  );
}

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="product-card">
        <div className="product-card-content">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="product-icon-wrapper"
          >
            <product.icon className="product-icon" />
          </motion.div>

          <h3 className="product-title">
            {product.title}
          </h3>

          <div className="product-details">
            {product.material && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Material:</span> {product.material}</p>
              </div>
            )}
            {product.structure && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Structure:</span> {product.structure}</p>
              </div>
            )}
            {product.theory && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Theory:</span> {product.theory}</p>
              </div>
            )}
            {product.application && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Application:</span> {product.application}</p>
              </div>
            )}
            {product.feature && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text">{product.feature}</p>
              </div>
            )}
            {product.pressure && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Pressure:</span> {product.pressure}</p>
              </div>
            )}
            {product.treatment && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text">{product.treatment}</p>
              </div>
            )}
            {product.model && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Models:</span> {product.model}</p>
              </div>
            )}
            {product.type && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Type:</span> {product.type}</p>
              </div>
            )}
            {product.connection && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text">{product.connection}</p>
              </div>
            )}
            {product.maxPressure && (
              <div className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text"><span className="product-detail-label">Max Pressure:</span> {product.maxPressure}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MudPumpCard({ pump, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="pump-card">
        <div className="pump-card-content">
          <div className="pump-header">
            <h3 className="pump-title">
              {pump.name}
            </h3>
            <div className="pump-icon-circle">
              <Gauge className="pump-icon" />
            </div>
          </div>

          <div className="pump-details">
            {pump.manufacturer && (
              <p><span className="pump-detail-label">Manufacturer:</span> {pump.manufacturer}</p>
            )}
            {pump.power && (
              <p><span className="pump-detail-label">Rated Power:</span> {pump.power}</p>
            )}
            {pump.cylinder && (
              <p><span className="pump-detail-label">Max. Cylinder Diameter:</span> {pump.cylinder}</p>
            )}
            {pump.pressure && (
              <p><span className="pump-detail-label">Max. Pressure:</span> {pump.pressure}</p>
            )}
            {pump.type && (
              <p><span className="pump-detail-label">Type:</span> {pump.type}</p>
            )}
            {pump.valve && (
              <p><span className="pump-detail-label">Valve:</span> {pump.valve}</p>
            )}
            {pump.packaging && (
              <p><span className="pump-detail-label">Packaging:</span> {pump.packaging}</p>
            )}
            {pump.models && (
              <p><span className="pump-detail-label">Models:</span> {pump.models}</p>
            )}
            {pump.brand && (
              <p><span className="pump-detail-label">Brand:</span> {pump.brand}</p>
            )}
            {pump.model && (
              <p><span className="pump-detail-label">Model:</span> {pump.model}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}