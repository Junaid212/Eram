import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index }) {
  return (
    <>
      <style>{`
        .product-card {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 1rem;
          cursor: pointer;
        }
        
        .product-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease-out;
        }
        
        .product-card:hover .product-card-image {
          transform: scale(1.1);
        }
        
        .product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.4), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        
        .product-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background-color: #dc2626;
          width: 0;
          transition: width 0.5s ease-out;
        }
        
        .product-card:hover .product-accent-line {
          width: 100%;
        }
        
        .product-info {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.5s ease-out;
        }
        
        .product-card:hover .product-info {
          transform: translateY(0);
        }
        
        .product-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          text-decoration: none;
          display: block;
        }
        
        .product-title:hover {
          color: #dc2626;
        }
        
        .product-category {
          color: #d1d5db;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          opacity: 0;
          transition: opacity 0.5s 0.1s;
        }
        
        .product-card:hover .product-category {
          opacity: 1;
        }
        
        .product-corner-top {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 2rem;
          height: 2rem;
          border-top: 2px solid #dc2626;
          border-right: 2px solid #dc2626;
          opacity: 0;
          transform: translate(0.5rem, -0.5rem);
          transition: all 0.3s;
        }
        
        .product-card:hover .product-corner-top {
          opacity: 1;
          transform: translate(0, 0);
        }
        
        .product-corner-bottom {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          width: 2rem;
          height: 2rem;
          border-bottom: 2px solid #dc2626;
          border-left: 2px solid #dc2626;
          opacity: 0;
          transform: translate(-0.5rem, 0.5rem);
          transition: all 0.3s;
        }
        
        .product-card:hover .product-corner-bottom {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="product-card"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          whileHover={{ scale: 1.05 }}
        />
        
        <div className="product-overlay" />
        <div className="product-accent-line" />
        
        <div className="product-info">
          <Link 
            to='#'
            className="product-title"
          >
            {product.name}
          </Link>
          <p className="product-category">
            {/* {product.category} */}
          </p>
        </div>
        
        <div className="product-corner-top" />
        <div className="product-corner-bottom" />
      </motion.div>
    </>
  );
}