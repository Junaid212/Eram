import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ProjectDetailsArea from "../components/ProjectDetailsArea";
import Preloader from "../helper/Preloader";
import Fabrication from "../components/Fabrication";
import FooterAreaTwo from "../components/FooterAreaTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import CivilMech from "../components/CivilMech";
import { Link } from "react-router-dom";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import HeaderFour from "../components/HeaderFour";
import FooterFour from "../components/FooterFour";
import ProcessAreaTwo from "../components/ProcessAreaTwo";

const OperationMaintenance = () => {
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
      <HeaderFour />

      {/* Breadcrumb */}
      <Breadcrumb title={"Operation & Maintenance Services "} />

      {/* Project Details Area */}
      {/* <ProjectDetailsArea /> */}
       <div className="service-details-area space-top space-extra-bottom overflow-hidden">
                  <div className="container">
                    <div className="row gx-40 flex-row-reverse">
                      <div className="col-xxl-8 col-lg-7">
                        <div className="service-page-single">
                          <div className="page-img mb-45">
                            <img
                              src="/assets/img/service/service-details1-1.png"
                              alt="Eram"
                            />
                          </div>
                          <div className="page-content">
                            <h2 className="page-title">Operation & Maintenance (O & M) Services</h2>
                            <p className="mb-25">
                             We provide long-term operation and maintenance (O & M) solutions that 
                             enhance the reliability and efficiency of industrial sites, ensuring 
                             seamless functionality across various sectors. Our electrical and power 
                             systems maintenance services focus on optimizing performance, minimizing 
                             downtime, and ensuring uninterrupted power supply. Mechanical and HVAC 
                             maintenance solutions are designed to keep equipment in peak condition, 
                             preventing costly breakdowns and improving overall operational efficiency.{" "}
                            </p>
                            <div className="row gy-30">
                              <div className="col-sm-6">
                                <div className="page-img">
                                  <img
                                    src="/assets/img/service/service-details1-2.png"
                                    alt="Eram"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="page-img">
                                  <img
                                    src="/assets/img/service/service-details1-3.png"
                                    alt="Eram"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            <div className="checklist style2 mt-35 mb-20">
                              
                            <p className="mb-30">
                              In addition to technical maintenance, we offer civil infrastructure 
                              maintenance services to preserve the durability and safety of facilities. 
                              Our expertise extends to the oil, gas, and petrochemical sectors, where we 
                              provide specialized plant maintenance solutions. With a proactive approach 
                              to predictive and preventive maintenance, we help industries maximize productivity, 
                              extend asset lifespan, and maintain compliance with stringent safety and environmental 
                              standards. We further offer-{" "}
                            </p>
                              <ul>
                                <li>
                                  <i className="fas fa-angle-double-right" /> 
                                  Electrical & Power Systems Maintenance
                                </li>
                                <li>
                                  <i className="fas fa-angle-double-right" />
                                  Mechanical & HVAC Maintenance
                                </li>
                                <li>
                                  <i className="fas fa-angle-double-right" />
                                  Civil Infrastructure Maintenance
                                </li>
                                <li>
                                  <i className="fas fa-angle-double-right" />
                                  Oil & Gas & Petrochemical Plant Maintenance
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                          <div className="widget widget_service-list">
                            <h3 className="widget_title">Other Services</h3>
                            <ul>
                              <li>
                                <Link to="/scaffolding/cuplock-system">
                                  <i className="fas fa-angle-double-right" />
                                  Project Support Services
                                </Link>
                              </li>
                              <li>
                                <Link to="/scaffolding/kwikstage-ringlock-systems">
                                  <i className="fas fa-angle-double-right" />
                                  Engineering Consultancy & Inspection Services
                                </Link>
                              </li>
                              <li>
                                <Link to="/scaffolding/scaffolding-tubes-couplers">
                                  <i className="fas fa-angle-double-right" />
                                  Operation & Maintenance (O & M) Services
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
                                <Link to="tel:+966 557639443">+966 557639443</Link>
                              </h5>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
      {/* Subscribe One */}
      {/* <SubscribeOne /> */}
                    <ProcessAreaTwo />
      {/* Footer Area One */}
      <FooterFour />
    </>
  );
};

export default OperationMaintenance;
