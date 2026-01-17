import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Layers,  
  Shield,
  Link,
  CornerDownRight,
  Plus,
  CircleDot,
  Plug,
  Settings,
  GitMerge,
  Factory,
} from 'lucide-react';
import SpecificationCard from '../components/SpeificationCard';
import TypeCard from '../components/TypeCard';
import Preloader from '../helper/Preloader';
import HeaderOne from '../components/HeaderOne';
import Breadcrumb from '../components/Breadcrumb';
import FooterAreaTwo from '../components/FooterAreaTwo';
import PortfolioTwo from '../components/PortfolioTwo';

export default function ForgedFittings() {
  const stainlessSteelData = [
  {
    label: 'Size',
    value: '1/2" NB to 4" NB (Socket Weld & Threaded)'
  },
  {
    label: 'Schedule',
    value: '3000#, 6000#, 9000# in ANSI B 16.11'
  },
  {
    label: 'Stainless Steel',
    value: 'ASTM A182 F-304/304H/304L/316/316H/316L/316Ti/309/, 310/317L/321/347/904L'
  },
  {
    label: 'Duplex Steel',
    value: 'ASTM A182 F51, F53, F55'
  }
];


  const carbonSteelData = [
    {
    label: 'Size',
    value: '1/2" NB to 4" NB (Socket Weld & Threaded)'
  },
  {
    label: 'Class',
    value: '3000#, 6000#, 9000# in ANSI B 16.11'
  },
  {
    label: 'Alloy Steel',
    value: 'ASTM A182 F5, F9, F11, F21, F22 & F91'
  },
  {
    label: 'Carbon Steel',
    value: 'ASTM A105'
  },
  {
    label: 'Low Temp. CS',
    value: 'ASTM A350 LF2'
  },
  {
    label: 'Other Services',
    value: 'Hot Dip Galvanizing, Sand Blasting, Customized Machining'
  }
  ];

  const copperNickelData = [
     {
    label: 'Size',
    value: '1/2" NB to 4" NB (Socket Weld & Threaded)'
  },
  {
    label: 'Class',
    value: '3000#, 6000#, 9000# ANSI B 16.11'
  },
  {
    label: 'Copper Nickel',
    value: 'C70600 (90:10), C71500 (70:30), Nickel, Monel, Inconel, Hastelloy, Titanium'
  }
  ];

  const fittingTypes = [
  { title: 'Elbow (45° & 90° Deg)', icon: Wrench },
  { title: 'Cap', icon: CircleDot },

  { title: 'Tee', icon: Layers },
  { title: 'Plug', icon: Plug },

  { title: 'Union', icon: Link },
  { title: 'Bushing', icon: CornerDownRight },

  { title: 'Cross', icon: Plus },
  { title: 'Boss Insert', icon: Settings },

  { title: 'Swage Nipple Coupling', icon: GitMerge }
];
   let [active, setActive] = useState(true);
    useEffect(() => {
      setTimeout(function () {
        setActive(false);
      }, 2000);
    }, []);

  return (
    <>
    {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne />
      <Breadcrumb title={"Forged Fittings"} />
    <div className="butt-weld-fittings-container">

      {/* Specifications Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-title-small">Technical Specifications</span>
            <h2 className="section-title-large">
              Product Range
            </h2>
            <p className="section-description">
              Industry-standard fittings manufactured to precise specifications
            </p>
          </motion.div>

          <div className="grid-2-col mb-8">
            <SpecificationCard
              title="Stainless Steel & Duplex Steel Forged Fittings"
              icon={Shield}
              data={stainlessSteelData}
              index={0}
            />
            
            <SpecificationCard
              title="Carbon Steel, Alloy Steel & LTCS Forged Fittings"
              icon={Layers}
              data={carbonSteelData}
              index={1}
            />
          </div>

          <div className="grid-1-col">
            <SpecificationCard
              title="Copper & Nickel Alloys Forged Fittings"
              icon={Factory}
              data={copperNickelData}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <div className="section-container">
          <div className="grid-2-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="image-card group"
            >
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop"
                alt="Industrial fittings"
                className="image-card-img"
              />
              <div className="image-card-overlay" />
              <div className="image-card-content">
                <p className="image-card-tag">Manufacturing</p>
                <h3 className="image-card-title">Precision Engineering</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="image-card group"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop"
                alt="Quality control"
                className="image-card-img"
              />
              <div className="image-card-overlay" />
              <div className="image-card-content">
                <p className="image-card-tag">Standards</p>
                <h3 className="image-card-title">Quality Assured</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="types-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-title-small">Product Types</span>
            <h2 className="section-title-large">
              Available Fittings
            </h2>
            <p className="section-description">
              Complete range of butt-weld fittings for all your industrial needs
            </p>
          </motion.div>

          <div className="grid-4-col">
            {fittingTypes.map((type, index) => (
              <TypeCard key={index} {...type} index={index} />
            ))}
          </div>
        </div>
      </section>
      <style>{`
      .butt-weld-fittings-container {
  min-height: 100vh;
  background-color: #f9fafb;
}

/* Sections */
.section-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-padding {
  padding: 5rem 0;
}

.section-title-small {
  color: #dc2626;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.875rem;
  display: block;
}

.section-title-large {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-top: 1rem;
  letter-spacing: -0.025em;
}

@media (min-width: 768px) {
  .section-title-large {
    font-size: 3rem;
  }
}

.section-description {
  color: gray;
  margin-top: 1rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* Grid Layouts */
.grid-2-col {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .grid-2-col {
    grid-template-columns: 1fr 1fr;
  }
}

.grid-1-col {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .grid-1-col {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .grid-4-col {
    grid-template-columns: 1fr 1fr;
  }
}

.grid-4-col {
  display: grid;
  gap: 1rem;
}
  

@media (min-width: 640px) {
  .grid-4-col {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid-4-col {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.grid-3-col {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-3-col {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Image Cards */
.image-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 300px;
}

.image-card:hover .image-card-img {
  transform: scale(1.1);
}

.image-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
}

.image-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(17, 24, 39, 0.6), transparent);
}

.image-card-content {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
}

.image-card-tag {
  color: #f87171;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}

.image-card-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

/* Feature Cards */
.feature-card {
  background-color: #f9fafb;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.3s;
}

.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.feature-icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
}

.feature-icon {
  width: 2rem;
  height: 2rem;
  color: #dc2626;
}

.feature-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.feature-card-description {
  color: #4b5563;
  line-height: 1.625;
}


/* Image Section */
.image-section {
  padding: 4rem 1.5rem;
  background-color: white;
}

/* Types Section */
.types-section {
  padding: 5rem 1.5rem;
  background-color: #f9fafb;
}

/* Features Section */
.features-section {
  padding: 5rem 1.5rem;
  background-color: white;
}

/* Text Utilities */
.text-center {
  text-align: center;
}

.text-white {
  color: white;
}

.text-gray-300 {
  color: #d1d5db;
}

.text-gray-600 {
  color: #4b5563;
}

.text-gray-900 {
  color: #111827;
}

.text-red-400 {
  color: #f87171;
}

.text-red-600 {
  color: #dc2626;
}

/* Spacing Utilities */
.mb-8 {
  margin-bottom: 2rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

/* Display Utilities */
.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

/* Positioning */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  inset: 0;
}

/* Border Radius */
.rounded-full {
  border-radius: 9999px;
}

.rounded-2xl {
  border-radius: 1rem;
}

/* Shadow */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-red-600\/25 {
  box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.25), 0 4px 6px -2px rgba(220, 38, 38, 0.1);
}

/* Animation Utilities */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-700 {
  transition-duration: 700ms;
}
      `}</style>
    </div>
<PortfolioTwo />
    <FooterAreaTwo />
    </>
  );
}