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

const KwikstageRinglockSystem = () => {
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
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Kwikstage & Ringlock Systems"} />

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
                      <h2 className="page-title">Kwikstage & Ringlock Systems</h2>
                      <p className="mb-25">
                       Kwikstage and Ringlock scaffolding systems are among the most advanced 
                       and flexible scaffolding solutions available, offering superior adaptability 
                       for complex structures. The Kwikstage system is known for its fast assembly, 
                       reducing project downtime and improving work efficiency. It is widely used in 
                       commercial and industrial construction due to its ability to handle heavy loads 
                       and varying site conditions.{" "}
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
                       The Ringlock system, on the other hand, features a rosette connection 
                       that allows for multiple angle adjustments, making it an ideal choice 
                       for curved or irregular structures. With high-strength materials and 
                       precision engineering, these systems provide maximum safety and stability. 
                       Eram Company Ltd supplies high-quality Kwikstage and Ringlock scaffolding 
                       components, ensuring long-term durability and cost-effective solutions for 
                       every project.{" "}
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
                          distracted by the and readable content 
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

      {/* Footer Area One */}
      <FooterThree />
    </>
  );
};

export default KwikstageRinglockSystem;
