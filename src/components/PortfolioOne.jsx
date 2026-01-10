import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Link } from "react-router-dom";
const PortfolioOne = () => {
  const isotope = React.useRef(Isotope | null);
  const [active, setActive] = useState(1);

  // handling filter key change
  useEffect(() => {
    const imgLoad = imagesLoaded(document.querySelectorAll(".image-container"));

    imgLoad.on("done", () => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
        percentPosition: true,
      });

      return () => isotope.current?.destroy();
    });

    return () => imgLoad.off("done");
  }, []);

  const handleFilterKeyChange = (key, index) => {
    setActive(index);
    isotope.current?.arrange({ filter: `${key}` });
  };
  return (
    <div className="portfolio-area-1 space">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Eram"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Eram"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="title-area text-center">
              <span className="sub-title">Products</span>
              <h2 className="sec-title">Where Expertise Meets Every Product</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="portfolio-tab-1 mb-60">
              <div className="filter-menu-active text-center">
                <button
                  className={`${active === 1 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange("*", 1)}
                >
                  All Products
                </button>
                <button
                  className={`${active === 2 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro1", 2)}
                >
                  Temporary Camp Facility TCF
                </button>
                <button
                  className={`${active === 3 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro2", 3)}
                >
                  Customised Panelboard System
                </button>
                <button
                  className={`${active === 4 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro3", 4)}
                >
                  Breakers - Contactors - Relays - Timers
                </button>
                <button
                  className={`${active === 5 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro4", 5)}
                >
                  Cables
                </button>
                <button
                  className={`${active === 6 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro5", 6)}
                >
                  Cable Lugs - Cable Glands - Ferrules
                </button>
                <button
                  className={`${active === 7 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro6", 7)}
                >
                  Cable Tray, Cable Cleats & Cable Ties
                </button>
                <button
                  className={`${active === 8 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro7", 8)}
                >
                  MTS - Safety Switch - Transformer
                </button>
                <button
                  className={`${active === 9 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro8", 9)}
                >
                  Industrial Plugs & Sockets
                </button>
                <button
                  className={`${active === 10 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro9", 10)}
                >
                  Grounding - Lightning
                </button>
                <button
                  className={`${active === 11 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro10", 11)}
                >
                  Lighting System
                </button>
                <button
                  className={`${active === 12 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro11", 12)}
                >
                  Wiring Devices
                </button>
                <button
                  className={`${active === 13 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro12", 13)}
                >
                  EMT - PVC Conduits & Accessories
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30  filter-container">
          <div className="col-lg-4 filter-item  pro1 ">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="/assets/img/elect/123.webp" alt="Eram" />
              </div>
              {/* <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">Women Entrepreneurs3</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 filter-item  pro1">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="/assets/img/elect/124.webp" alt="Eram" />
              </div>
              {/* <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">Women Entrepreneurs3</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div> */}
            </div>
          </div>

          <div className="col-lg-4 filter-item pro1">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="/assets/img/elect/125.webp" alt="Eram" />
              </div>
              {/* <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">Women Entrepreneurs4</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 filter-item pro2">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="/assets/img/elect/126.webp" alt="Eram" />
              </div>
              {/* <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">Women Entrepreneurs4</Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 filter-item pro2">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="/assets/img/elect/127.webp" alt="Eram" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 filter-item pro2 ">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/128.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro2">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/129.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro3">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/130.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro3">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/131.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro3">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/132.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro3">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/133.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro4">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/134.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro4 ">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/135.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro4 ">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/136.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro5">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/137.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro5">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/138.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro6">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/139.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro6">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/140.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro6">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/141.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro7">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/142.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro7">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/143.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro7">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/144.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro8">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/145.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro8">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/146.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro8">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/147.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro8">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/148.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro8">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/149.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro9">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/150.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/151.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/152.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/153.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/154.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/155.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro10">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/156.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/157.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/158.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/159.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/160.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/161.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/162.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/163.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/164.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro11">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/165.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro12">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/166.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro12">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/167.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro12">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/168.webp" alt="Eram" />
    </div>
  </div>
</div>

<div className="col-lg-4 filter-item pro12">
  <div className="portfolio-card image-container">
    <div className="portfolio-card-thumb">
      <img src="/assets/img/elect/169.webp" alt="Eram" />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioOne;
