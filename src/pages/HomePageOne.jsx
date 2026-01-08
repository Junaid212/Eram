// import React, { useEffect, useState } from "react";
// import HeaderOne from "../components/HeaderOne";
// import HeroOne from "../components/HeroOne";
// import CounterOne from "../components/CounterOne";
// import AboutOne from "../components/AboutOne";
// import ServiceAreaOne from "../components/ServiceAreaOne";
// import MarqueeOne from "../components/MarqueeOne";
// import PortfolioOne from "../components/PortfolioOne";
// import ClientAreaOne from "../components/ClientAreaOne";
// import PricingPlanOne from "../components/PricingPlanOne";
// import TeamAreaOne from "../components/TeamAreaOne";
// import CTAAreaOne from "../components/CTAAreaOne";
// import TestimonialOne from "../components/TestimonialOne";
// import ProcessAreaOne from "../components/ProcessAreaOne";
// import FaqAreaOne from "../components/FaqAreaOne";
// import BlogAreaOne from "../components/BlogAreaOne";
// import FooterAreaOne from "../components/FooterAreaOne";
// import SubscribeOne from "../components/SubscribeOne";
// import Preloader from "../helper/Preloader";

// const HomePageOne = () => {
//   let [active, setActive] = useState(true);
//   useEffect(() => {
//     setTimeout(function () {
//       setActive(false);
//     }, 2000);
//   }, []);
//   return (
//     <>
//       {active === true && <Preloader />}

//       <HeaderOne />

//       <HeroOne />

//       <CounterOne />

//       <AboutOne />

//       <ServiceAreaOne />

//       <MarqueeOne />

//       <PortfolioOne />

//       <ClientAreaOne />

//       <PricingPlanOne />

//       <TeamAreaOne />

//       <CTAAreaOne />

//       <TestimonialOne />

//       <ProcessAreaOne />

//       <FaqAreaOne />

//       <BlogAreaOne />

//       <SubscribeOne />

//       <FooterAreaOne />
//     </>
//   );
// };

// export default HomePageOne;

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Mechanical",
    image: "assets/img/fact/50.webp",
    description: "Precision engineering solutions",
    link: "/mechanical"
  },
  {
    id: 2,
    name: "Electrical",
    image: "assets/img/fact/51.webp",
    description: "Advanced power systems",
    link: "/electrical"
  },
  {
    id: 3,
    name: "Scaffolding",
    image: "assets/img/fact/52.webp",
    description: "Structural support excellence",
    link: "/scaffolding"
  },
  {
    id: 4,
    name: "Power Project Systems",
    image: "assets/img/fact/53.webp",
    description: "Large-scale energy solutions",
    link: "/project-support-services"
  }
];

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group" id="category-card"
    >
      {/* Main card link - wraps entire card */}
      <Link to={category.link} className="category-card-link">
        <div className="category-card-image-container">
          
          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="category-card-image"
          />

          {/* Gradient Overlay */}
          <div className="category-card-overlay" />

          {/* Content */}
          <div className="category-card-content">
            <div className="category-card-header">
              {/* Arrow Container */}
              <div className="category-card-arrow-container">
                <motion.div
                  className="category-card-pulse"
                  animate={{
                    scale: [0.7, 1.2, 0.7],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="category-card-arrow">
                  <ArrowUpRight className="category-card-arrow-icon" />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="category-card-text-content">
                <motion.span
                  className="category-card-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {/* {category.description} */}
                </motion.span>

                <h3 className="category-card-name">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="category-card-hover-border" />
        </div>
      </Link>
    </motion.div>
  );
};

export default function HomePageOne() {
  return (
    <div className="home-container">
      {/* Logo/Brand */}
      <header className="home-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="home-header-container"
        >
          <div className="home-header-inner">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="home-logo">
                <img src="assets/img/icon/14.png" alt="eram" style={{height:"70px"}}/>
              </span>
              <span className="home-logo-accent">.</span>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Main Content - Split Layout */}
      <section className="home-main-section">
        <div className="home-main-container">
          <div className="home-main-grid">
            {/* Left Side - Text Content */}
            <div className="home-text-content">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="home-subtitle"
              >
                Industrial Excellence
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="home-title"
              >
                Engineering the
                <br />
                <span className="home-title-accent">Future of Industry</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="home-description"
              >
                Select a category to explore our comprehensive solutions across mechanical, electrical, scaffolding, and power projects.
              </motion.p>
            </div>

            {/* Right Side - Images Grid (2x2) */}
            <div className="home-images-grid">
              <div className="home-categories-grid">
                {categories.map((category, index) => (
                  <CategoryCard key={category.id} category={category} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="home-footer">
        <div className="home-footer-container">
          <div className="home-footer-left">
            <span className="home-footer-brand">
              ERAM
            </span>
            <span className="home-footer-brand-accent">.</span>
            <span className="home-footer-copyright">© 2026</span>
          </div>
        </div>
      </footer>
       <style>{`
      /* Main container */
.home-container {
  min-height: 100vh;
  background-color: #0a0a0a;
}

/* Header */
.home-header {
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .home-header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .home-header {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

.home-header-container {
  max-width: 80rem;
  margin: 0 auto;
}

.home-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-logo {
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.15em;
}

@media (min-width: 768px) {
  .home-logo {
    font-size: 1.5rem;
  }
}

.home-logo-accent {
  color: #dc2626;
  margin-left: 0.25rem;
}

.home-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .home-nav {
    display: flex;
  }
}

.home-nav-link {
  color: #a3a3a3;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
}

.home-nav-link:hover {
  color: white;
}

/* Main content section */
.home-main-section {
  padding: 1rem 1rem;
}

@media (min-width: 768px) {
  .home-main-section {
    padding: 2rem 2rem;
  }
}

@media (min-width: 1024px) {
  .home-main-section {
    padding: 0rem 5rem;
  }
}

.home-main-container {
  max-width: 80rem;
  margin: 0 auto;
}

.home-main-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .home-main-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

/* Left side - Text content */
.home-text-content {
  order: 2;
}

@media (min-width: 1024px) {
  .home-text-content {
    order: 1;
  }
}

.home-subtitle {
  color: rgba(239, 68, 68, 0.8);
  font-size: 0.875rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.home-title {
  font-size: 2.25rem;
  font-weight: 600;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .home-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .home-title {
    font-size: 4.5rem;
  }
}

.home-title-accent {
  color: #737373;
}

.home-description {
  color: #a3a3a3;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75;
}

@media (min-width: 768px) {
  .home-description {
    font-size: 1.25rem;
  }
}

/* Right side - Images grid */
.home-images-grid {
  order: 2;
}

@media (min-width: 1024px) {
  .home-images-grid {
    order: 1;
  }
}

.home-categories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .home-categories-grid {
    gap: 1.5rem;
  }
}

/* Category Card */
#category-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.category-card-link {
  text-decoration: none;
  color: inherit;
}

.category-card-image-container {
  position: relative;
  aspect-ratio: 5/5;
  overflow: hidden;
  background-color: #0a0a0a;
}

@media (min-width: 768px) {
  .category-card-image-container {
    aspect-ratio: 4/4;
  }
}

.category-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.category-card:hover .category-card-image {
  transform: scale(1.05);
}

.category-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent);
}

.category-card-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1.3rem;
  padding-bottom: 0.3rem;
}

@media (min-width: 768px) {
  .category-card-content {
    // padding: 1rem;
  }
    .category-card-header {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
}
}
@media (max-width: 768px) {
  .category-card-content {
    padding-left: 0.5rem;
  }
    .category-card-header {
  gap: 0.5rem !important;
}
}

.category-card-header {
  display: flex;
  align-items: flex-end;
  // justify-content: space-between;
  gap: 1.6rem;
}

.category-card-description {
  color: rgba(209, 213, 219, 0.8);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 0.5rem;
  display: block;
}

.category-card-name {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.025em;
}

@media (min-width: 768px) {
  .category-card-name {
    font-size: 1.65rem;
  }
}

/* Pulsing arrow */
.category-card-arrow-container {
  position: relative;
}

.category-card-pulse {
  position: absolute;
  inset: 0;
  background-color: red;
  border-radius: 50%;
}

.category-card-arrow {
  position: relative;
  width: 3rem;
  height: 3rem;
  background-color: red;
  backdrop-filter: blur(4px);
  border: 1px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}

.category-card:hover .category-card-arrow {
  background-color: #dc2626;
  border-color: #dc2626;
}

@media (min-width: 768px) {
  .category-card-arrow {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.category-card-arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
  transition: transform 0.5s ease;
}

.category-card:hover .category-card-arrow-icon {
  transform: translate(0.125rem, -0.125rem);
}

@media (min-width: 768px) {
  .category-card-arrow-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

/* Hover border effect */
.category-card-hover-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: border-color 0.5s ease;
}

.category-card:hover .category-card-hover-border {
  border-color: rgba(255, 255, 255, 0.2);
}

/* Footer */
.home-footer {
  border-top: 1px solid rgba(38, 38, 38, 0.5);
  padding: 2rem 1.5rem;
}

@media (min-width: 768px) {
  .home-footer {
    padding: 2rem 3rem;
  }
}

@media (min-width: 1024px) {
  .home-footer {
    padding: 2rem 5rem;
  }
}

.home-footer-container {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .home-footer-container {
    flex-direction: row;
  }
}

.home-footer-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.home-footer-brand {
  color: #737373;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.025em;
}

.home-footer-brand-accent {
  color: rgba(220, 38, 38, 0.6);
}

.home-footer-copyright {
  color: #525252;
  font-size: 0.875rem;
}

.home-footer-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.home-footer-link {
  color: #737373;
  font-size: 0.75rem;
  letter-spacing: 0.025em;
}

.home-footer-link:hover {
  color: white;
}
      `}</style>
    </div>
  );
}