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

const WalkingBoardPlanks = () => {
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
      <Breadcrumb title={"Walking Boards & Planks"} />

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
                      <h2 className="page-title">Walking Boards & Planks (Wooden & Steel)</h2>
                      <p className="mb-25">
                       Walking boards and planks are essential components of scaffolding 
                       systems, providing a stable and secure working platform for workers. 
                       At Eram Company Ltd, we supply high-quality wooden and steel planks 
                       that are designed to withstand heavy loads and harsh working conditions. 
                       Our planks ensure safety, minimize slippage, and enhance productivity 
                       on-site.{" "}
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
                        Wooden planks are lightweight and easy to handle, while steel planks 
                        offer enhanced durability and fire resistance. Both types are manufactured 
                        to precise specifications, ensuring consistent performance across all 
                        scaffolding applications. Whether for temporary access or long-term construction 
                        projects, our walking boards and planks offer reliability and compliance with 
                        international safety regulations.{" "}
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
                      <h3 className="widget_title">Other Products</h3>
                      <ul>
                        <li>
                          <Link to="/scaffolding/cuplock-system">
                            <i className="fas fa-angle-double-right" />
                            Cuplock System
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/kwikstage-ringlock-systems">
                            <i className="fas fa-angle-double-right" />
                            Kwikstage & Ringlock Systems
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/scaffolding-tubes-couplers">
                            <i className="fas fa-angle-double-right" />
                            Scaffolding Tubes, Couplers & Joint Access Systems
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/walking-boards-planks">
                            <i className="fas fa-angle-double-right" />
                            Walking Boards & Planks (Wooden & Steel)
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/table-formwork-systems">
                            <i className="fas fa-angle-double-right" />
                            Table Formwork Systems
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/aluminium-system-scaffolds-ladders">
                            <i className="fas fa-angle-double-right" />
                            Aluminium System Scaffolds & Ladders
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/panel-systems-wall-column-formwork">
                            <i className="fas fa-angle-double-right" />
                            Panel Systems for Wall & Column Formwork
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/tower-scaffolds-fixed-mobile">
                            <i className="fas fa-angle-double-right" />
                            Tower Scaffolds (Fixed & Mobile)
                          </Link>
                        </li>
                        <li>
                          <Link to="/scaffolding/cantilever-frame-korean-frame-systems">
                            <i className="fas fa-angle-double-right" />
                            Cantilever Frame & Korean Frame Systems
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="widget widget_contact">
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
                    </div> */}
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

export default WalkingBoardPlanks;
