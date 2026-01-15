import React from 'react';

function Downhole() {
  const products = [
    {
      title: "Well Testing Tool Packer",
      image: "https://images.pexels.com/photos/159376/construction-site-build-construction-work-159376.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { label: "Functions", value: "Testing Tool PT Packer" },
        {  value: "Testing Tool Packer" },
        {  value: "Well Testing K344-115/148 Packer" },
        {  value: "Y511-148 Testing Tool Fracturing Packer" },
        {  value: "Z331 Down Hole Tool Double Rubber Bowl Packer" },
        {  value: "Well Testing Dual Locking Packer" },
      ]
    },
    {
      title: "Formation Tester",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { label: "Feature", value: "Sleeve Type Drain Valve Downhole Oil Tool" },
        { label: "Use", value: "Downhole Oil Tool RD Circulation Valve" },
        {  value: "Downhole Oil Tool Reverse Circulation Valve" },
        {  value: "Downhole Testing Tool Assembly Vise" },
        {  value: "Oil Drilling Circulating Case for Downhole Tool" },
        {  value: "Oil Drlling Ball Seat for Downhole Tool" },
        {  value: "Gas Drive Booster Pump for Downhole Testing Tool" },
        {  value: "Oil Drilling Upper Seat Holder" },
      ]
    },
    {
      title: "Well Testing and Completion Tools",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { label: "Type", value: "Hydraulic Anchor for Downhole Tool" },
        { label: "Material", value: "Well Testing Full-bore Compensating Pipe" },
        { label: "Advantage", value: "Completion Downhole Tester Valve" },
        { label: "Coating", value: "Completion Downhole Tester Valve" },
        { label: "Coating", value: "Well Testing Differential Pressure Releasing Tool" },
      ]
    },
    {
      title: "New Research and Design Tools",
      image: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { value: "MFC Clean Scrape Integrated Operation Downhole Tool" },
        { value: "Downhole Tool Blade Retrievable Scraper" },
        { value: "Downhole Tool Multi Function Mechanical Packer" },
        { value: "Downhole Safety Valve" },
      ]
    },
    {
      title: "Wellhead ",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { value: "Wireline Pressure Control Equipment" },
        { value: "Oil Drilling Tubing Cock Valve" },
        { value: "Oil Drilling Kelly Cock" },
      ]
    },
    {
      title: "Well Workover Tools ",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: [
        { value: "Milling Shoe for Downhole Tool" },
      ]
    },
  ];

  return (
    <>
      <style>
        {`
          .ps-app {
            min-height: 100vh;
            background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          }

          
          .ps-main {
            max-width: 80rem;
            margin: 0 auto;
            padding: 4rem 1rem;
          }

          @media (min-width: 640px) {
            .ps-main {
              padding: 4rem 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .ps-main {
              padding: 4rem 2rem;
            }
          }

          .ps-grid-primary {
            display: grid;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          @media (min-width: 1024px) {
            .ps-grid-primary {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          .ps-grid-secondary {
            display: grid;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .ps-grid-secondary {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          .ps-card {
            background-color: white;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .ps-card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            transform: translateY(-0.25rem);
          }

          .ps-card-image-container {
            position: relative;
            overflow: hidden;
          }

          .ps-card-primary .ps-card-image-container {
            height: 18rem;
          }

          .ps-card-secondary .ps-card-image-container {
            height: 14rem;
          }

          .ps-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .ps-card:hover .ps-card-image {
            transform: scale(1.1);
          }

          .ps-card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          }

          .ps-card-content {
            padding: 2rem;
          }

          .ps-card-secondary .ps-card-content {
            padding: 1.5rem;
          }

          .ps-card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1.5rem;
            border-left: 4px solid #dc2626;
            padding-left: 1rem;
          }

          .ps-card-secondary .ps-card-title {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            padding-left: 0.75rem;
          }

          .ps-specs-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .ps-card-secondary .ps-specs-list {
            gap: 0.75rem;
          }

          .ps-spec-item {
            border-left: 2px solid #e5e7eb;
            padding-left: 1rem;
          }

          .ps-card-secondary .ps-spec-item {
            padding-left: 0.75rem;
          }

          .ps-spec-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: #dc2626;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.25rem;
          }

          .ps-card-secondary .ps-spec-label {
            font-size: 0.75rem;
          }

          .ps-spec-value {
            color: #374151;
            line-height: 1.625;
          }

          .ps-card-secondary .ps-spec-value {
            font-size: 0.875rem;
          }

          
        `}
      </style>

      <div className="ps-app">
        {/* <header className="ps-header">
          <div className="ps-header-content">
            <h1 className="ps-header-title">PS Series Hydraulic Disc Brake</h1>
            <p className="ps-header-subtitle">Premium Industrial Braking Solutions</p>
          </div>
        </header> */}

        <main className="ps-main">
          {/* First two larger cards */}
          <div className="ps-grid-primary">
            {products.slice(0, 3).map((product, index) => (
              <div key={index} className="ps-card ps-card-primary">
                <div className="ps-card-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="ps-card-image"
                  />
                  <div className="ps-card-overlay"></div>
                </div>
                <div className="ps-card-content">
                  <h2 className="ps-card-title">
                    {product.title}
                  </h2>
                  <div className="ps-specs-list">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="ps-spec-item">
                        {/* <dt className="ps-spec-label">
                          {spec.label}
                        </dt> */}
                        <dd className="ps-spec-value">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining three smaller cards */}
          <div className="ps-grid-secondary">
            {products.slice(3).map((product, index) => (
              <div key={index} className="ps-card ps-card-secondary">
                <div className="ps-card-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="ps-card-image"
                  />
                  <div className="ps-card-overlay"></div>
                </div>
                <div className="ps-card-content">
                  <h2 className="ps-card-title">
                    {product.title}
                  </h2>
                  {product.specs.length > 0 && (
                    <div className="ps-specs-list">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="ps-spec-item">
                          <dt className="ps-spec-label">
                            {spec.label}
                          </dt>
                          <dd className="ps-spec-value">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Downhole;