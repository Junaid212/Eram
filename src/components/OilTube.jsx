import React from "react";
import { Link } from "react-router-dom";

const OilTube = () => {
  return (
    <div className="service-details-area space-top space-extra-bottom overflow-hidden">
      <div className="container">
        <div className="row gx-40 " style={{justifyContent:'center'}}>
          <div className="col-xxl-10 col-lg-7">
            <div className="service-page-single">
              <div className="page-img mb-45">
                <img
                  src="/assets/img/portfolio/portfolio_details.png"
                  alt="Eram"
                />
              </div>
              <div className="page-content">
                <h2 className="page-title">Introduction</h2>
                <p className="mb-25">
                  Oil casing plays a vital role in supporting the integrity of oil and
                   gas wells, ensuring a smooth drilling process and the long-term 
                   sustainability of the entire well. Its multi-layered structure, 
                   tailored to suit the specific geological conditions and drilling 
                   depth, makes it an essential component of any well infrastructure. 
                   Once the well is complete, cement is used to secure the casing, which 
                   cannot be reused and is considered a consumable material. In fact, 
                   casing consumption constitutes more than 70% of all oil well pipes.{" "}
                </p>
                <h3 className="page-subtitle mb-15">
                  API5CT Oil Tube   
                </h3>
                <p className="mb-30">
                  API Full series of oil casing mainly refers to the implementation of 
                  the American Petroleum Institute API SPEC 5CT standard of steel pipe, 
                  mainly used for oil, natural gas and other resources exploitation. 
                  Tubing is used to extract oil or gas from an oil well.{" "}
                </p>
                <div className="row gy-30">
                  <div className="col-sm-4">
                    <div className="page-img">
                      <img
                        src="/assets/img/service/service-details1-2.png"
                        alt="Eram"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="page-img">
                      <img
                        src="/assets/img/service/service-details1-3.png"
                        alt="Eram"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="page-img">
                      <img
                        src="/assets/img/service/service-details1-3.png"
                        alt="Eram"
                      />
                    </div>
                  </div>
                </div>
                <div className="checklist style2 mt-35 mb-20">
                    
                <h3 className="page-subtitle mb-15">
                  Casing Pipe   
                </h3>
                <p className="mb-30">
                  Oil casing is a steel pipe used to support the wall of oil 
                  and gas Wells to ensure the normal operation of the drilling 
                  process and the entire well after completion. Each well uses 
                  several layers of casing depending on the drilling depth and 
                  geology. Casing after the well to use cement, it is different 
                  from tubing, drill pipe, can not be reused, belongs to a one-time 
                  consumption of materials. Therefore, casing consumption accounts 
                  for more than 70% of all oil well pipes.{" "}
                </p>
                  {/* <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> A car repair
                      is a service provided to fix any issues or damages with
                      your vehicle
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      It involves diagnosing the problem, repairing or replacing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Trusted Car Repair Professionals et Your Car Fixed Right
                      Away
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Quality Car Repair Services Affordable Car Repair
                      Solutions
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_service-list">
                <h3 className="widget_title">All Services</h3>
                <ul>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Fast and Reliable Car Repair Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Trusted Car Repair Professionals
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Get Your Car Fixed Right Away
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Quality Car Repair Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fas fa-angle-double-right" />
                      Affordable Car Repair Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_contact">
                <div className="widget-contact-wrap text-center">
                  <h3 className="widget_title">Contact Us</h3>
                  <p className="widget-contact-text">
                    It is a long established fact that a reader will be
                    distracted by the and readable content repair
                  </p>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p className="widget-contact-text">Need help?</p>
                  <h5>
                    <Link to="tel:80855510111">(808) 555-0111</Link>
                  </h5>
                </div>
              </div>
            </aside>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OilTube;
