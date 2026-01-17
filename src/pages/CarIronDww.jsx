import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutThree from "../components/AboutThree";
const CarIronDww = () => {
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
          <HeaderOne/>
          <Breadcrumb title={"Cast Iron Dww Pipe Fittings System"} />
          <div className="about-area-1 space-top">
      <div className="about1-shape-img shape-mockup">
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
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-7 text-xl-center">
            <div className="about-thumb3 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/wcu-3.png" alt="Eram" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-30">
                <span className="sub-title">Products</span>
                <h2 className="sec-title">Cast Iron Dww Pipe Fittings System</h2>
                <p className="sec-text">
                  A full line of service of extra-heavy cast iron soil pipe and fittings from 2" to 15", 
                  and double-hub pipe from 2" to 6". Hub-less pipe and fittings, 1" to 15".
                </p>
              </div>
              <div className="row gy-4 justify-content-md-between justify-content-start align-items-center">
                <div className="col-md-auto">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Service Weight Pipe & fittings
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Extra Heavy Pipe & Fittings
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        No-hub Pipe & Fittings Speciality Plugs
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        No-hub Couplings, Compression Gaskets.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-md-auto col-lg-6">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Quick Service Times
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Free Trade Appraisal
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Genuine spare parts
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Unbeatable savings!
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              {/* <div className="btn-wrap mt-40">
                <Link to="/about" className="btn style2">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
<PortfolioTwo />
    <FooterAreaTwo />

    </>
  );
};

export default CarIronDww;
