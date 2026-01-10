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
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import HeaderFour from "../components/HeaderFour";
import FooterFour from "../components/FooterFour";

const EngineeringConsultancy = () => {
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
      <Breadcrumb title={"Engineering Consultancy & Inspection Services"} />

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
                      <h2 className="page-title">Engineering Consultancy & Inspection Services</h2>
                      <p className="mb-25">
                       Our engineering consultancy and inspection services are designed to optimize 
                       project performance through meticulous planning, design verification, and 
                       compliance assurance. We provide specialized Non-Destructive Testing (NDT), 
                       covering both advanced and conventional methods to assess material integrity. 
                       Our lifting and hoisting gear inspections ensure safe operations in onshore 
                       and offshore environments, while welding inspections, conducted by AWS/CSWIP-certified 
                       professionals, guarantee structural reliability. API inspections, rope access 
                       inspections, and painting/coating inspections (BGAS/NACE-certified) further 
                       strengthen our capability to uphold the highest industry standards.{" "}
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
                        In addition to specialized inspections, we offer comprehensive QA/QC 
                        services for mechanical, piping, coating, civil, electrical, instrumentation, 
                        and telecom projects. Our consultants work closely with clients to ensure 
                        adherence to technical specifications and regulatory requirements. By 
                        integrating expertise with industry-leading methodologies, we enhance the 
                        quality, safety, and longevity of engineering projects, delivering results 
                        that align with operational and compliance expectations. We further offer-{" "}
                      </p>
                        <ul>
                          <li>
                            <i className="fas fa-angle-double-right" /> Non-Destructive 
                            Testing (NDT) – Advanced & Conventional
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Lifting & Hoisting Gear Inspections (Onshore & Offshore)
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Welding Inspections (AWS/CSWIP Certified)
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            API Inspections
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Rope Access Inspections
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Painting & Coating Inspections (BGAS/NACE Certified)
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            QA/QC Inspections for Mechanical, Piping, Coating, Civil, E&I, and Telecom Projects
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

      {/* Footer Area One */}
      <ProcessAreaTwo />
      {/* Footer Area One */}
      <FooterFour />
    </>
  );
};

export default EngineeringConsultancy;
