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
import FooterFour from "../components/FooterFour";
import HeaderSix from "../components/HeaderSix";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import HeaderFour from "../components/HeaderFour";

const ProjectSupportServices = () => {
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
      <Breadcrumb title={"Project Support Services"} />

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
                      <h2 className="page-title">Project Support Services</h2>
                      <p className="mb-25">
                       We specialize in delivering end-to-end project support solutions, 
                       ensuring seamless execution across multiple engineering disciplines. 
                       Our team of experts offers tailored services in electrical engineering, 
                       including power distribution, industrial automation, and control systems. 
                       In mechanical engineering, we focus on equipment installation, maintenance, 
                       and structural fabrication to enhance operational efficiency. Additionally, 
                       our civil engineering expertise spans infrastructure development, structural 
                       assessments, and large-scale construction projects. With a keen focus on 
                       instrumentation and control, we integrate advanced automation and calibration 
                       solutions to optimize system performance and accuracy.{" "}
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
                        Our commitment to precision and quality enables us to 
                        support projects across industries, ensuring timely 
                        completion and compliance with industry standards. We 
                        leverage cutting-edge technology and best practices to 
                        enhance productivity while minimizing risks and downtime. 
                        Whether it’s electrical, mechanical, civil, or instrumentation 
                        support, our solutions are designed to enhance efficiency, 
                        safety, and overall project success.We further offer-{" "}
                      </p>
                        <ul>
                          <li>
                            <i className="fas fa-angle-double-right" /> Electrical Engineering – 
                            Power distribution, industrial automation, and control systems
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Mechanical Engineering – Equipment installation, maintenance, and 
                            structural fabrication
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Civil Engineering – Infrastructure development, structural assessments, 
                            and construction projects
                          </li>
                          <li>
                            <i className="fas fa-angle-double-right" />
                            Instrumentation & Control – System integration, automation, and calibration solutions
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
      <FooterFour />
    </>
  );
};

export default ProjectSupportServices;
