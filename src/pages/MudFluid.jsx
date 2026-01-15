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

export default function MudFluid() {
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
    title: "Fluid End Spare Parts for drilling mud pump",
    icon: Gauge,
    details: [
      { label: "Including", value: "Liner,valve,piston" },
      { label: "OEM", value: "available" },
      { label: "Size", value: "as your request" },
      { label: "Use", value: "Mud Pump Parts" },
      { label: "Feature", value: "Durable and long life use" }
    ]
  },
  {
    title: "Ceramic cylinder sleeves",
    icon: Cog,
    details: [
      { label: "Material", value: "99.99% zirconia" },
      { label: "Life time", value: "over 4000h" },
      { label: "Size", value: "as your request" },
      { label: "Standard", value: "API 7K" }
    ]
  },
  {
    title: "Cylinder liner sleeve",
    icon: Settings,
    details: [
      { label: "Type", value: "Cylinder liner sleeve" },
      { label: "Material", value: "High chrome iron sleeve" },
      { label: "Use", value: "Mud pumps" }
    ]
  },
  {
    title: "Urethane Piston Assembly",
    icon: Zap,
    details: [
      { label: "Piston core", value: "42CrMo forge piece" },
      { label: "Rubber material", value: "PU,NBR,HNBR" },
      { label: "Applicable medium", value: "oil-based mud,water-based mud" }
    ]
  },
  {
    title: "Mud Pump Spare Parts Piston Assembly For Oil Field",
    icon: Wrench,
    details: [
      { label: "Rubber Material", value: "PU NBR" },
      { label: "Piston core", value: "42CrMo" },
      { label: "Size", value: "100mm 110mm,120mm,130mm etc" },
      { label: "Use", value: "Drilling mud pumps" }
    ]
  },
  {
    title: "Replaceable Piston for Mud Pump Spare Parts",
    icon: Shield,
    details: [
      { label: "Rubber Material", value: "PU NBR HNBR Urethane" },
      { label: "Piston core", value: "42CrMo" },
      { label: "Structure", value: "Replaceable" },
      { label: "Use", value: "Drilling mud pumps" }
    ]
  },
  {
    title: "YL-4 Valve Assembly for Drilling Equipment",
    icon: Gauge,
    details: [
      { label: "Workmanship", value: "Whole forging forming" },
      { label: "Feature", value: "High pressure resistance, corrosion resistance" },
      { label: "Application", value: "High pressure well conditions" }
    ]
  },
  {
    title: "API 7K Valve and Seat",
    icon: Cog,
    details: [
      { label: "Application", value: "Oil well drilling mud pump" },
      { label: "Material", value: "20CrMnTi" },
      { label: "Application model is", value: "F500 F800 F1000 F1300 F1600 F2200" },
      { label: "Use", value: "Mud pump" }
    ]
  },
  {
    title: "Durable Integral Forged Long Lifetime Valve Assembly",
    icon: Settings,
    details: [
      { label: "Application", value: "Oil well drilling mud pump" },
      { label: "Material", value: "20CrMnTi" },
      { label: "Application model is", value: "F500 F800 F1000 F1300 F1600 F2200" },
      { label: "Life time", value: "Over 300h" }
    ]
  },
  {
    title: "Valve Rubber PU NBR HNBR",
    icon: Zap,
    details: [
      { label: "Material", value: "PU NBR HNBR" },
      { label: "Medium", value: "oil-based/water-based mud" },
      { label: "Service life", value: "300 hours" }
    ]
  },
  {
    title: "Piston Rubber PU NBR HNBR",
    icon: Wrench,
    details: [
      { label: "Material", value: "PU NBR HNBR" },
      { label: "Use", value: "drilling mud pump" },
      { label: "Use life", value: "≤ 300hours" }
    ]
  },
  {
    title: "Replacement Piston Rubber Seal for Mud Pump",
    icon: Shield,
    details: [
      { label: "Rubber Material", value: "PU NBR HNBR Urethane" },
      { label: "Applicable medium", value: "oil-based" },
      { label: "Use life", value: "Durable and long life time" }
    ]
  }
];

  // Helper function to format property names
  const formatPropertyName = (key) => {
    const labelMap = {
      Including: "Including",
      material: "Material",
      structure: "Structure",
      theory: "Theory",
      application: "Application",
      feature: "Feature",
      pressure: "Pressure",
      treatment: "Treatment",
      model: "Models",
      type: "Type",
      connection: "Connection",
      maxPressure: "Max Pressure"
    };
    
    return labelMap[key] || key;
  };

  // Helper function to determine if property should show label
  const shouldShowLabel = (key) => {
    // These properties should show with a label
    const showLabelKeys = [
      'Including', 'material', 'structure', 'theory', 'application',
      'pressure', 'model', 'type', 'maxPressure'
    ];
    return showLabelKeys.includes(key);
  };

  return (
    <>
    <HeaderOne/>
    <Breadcrumb title={'Mud Pump Fluid End Parts'}/>
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
          gap: 0.5rem;
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
              <h2 className="section-title">
                Mud Pump <span className="section-title-accent">Fluid End Parts</span>
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
                <ProductCard 
                  key={index} 
                  product={product} 
                  index={index}
                  formatPropertyName={formatPropertyName}
                  shouldShowLabel={shouldShowLabel}
                />
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
            {product.details.map((detail, idx) => (
              <div key={idx} className="product-detail-item">
                <CheckCircle2 className="product-detail-icon" />
                <p className="product-detail-text">
                  <span className="product-detail-label">{detail.label}:</span> {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}