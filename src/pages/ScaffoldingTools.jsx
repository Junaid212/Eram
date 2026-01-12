import React from "react";
import { Link } from "react-router-dom";
import FooterThree from "../components/FooterThree";
import HeaderThree from "../components/HeaderThree";
import Breadcrumb from "../components/Breadcrumb";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import CTAAreaOne from "../components/CTAAreaOne";

const ScaffoldingTools = () => {
  return (
    <>
    <HeaderThree/>
    <Breadcrumb title={"Scaffolding Tools & Accessories Supply"}/>
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
                <h2 className="page-title">Scaffolding Tools & Accessories Supply</h2>
                <p className="mb-25">
                 To complement our scaffolding solutions, Eram Company Ltd provides 
                 a complete range of scaffolding tools and accessories, including 
                 clamps, base plates, adjustable jacks, and safety harnesses. Our 
                 products are sourced from trusted manufacturers, ensuring compliance 
                 with global safety standards.{" "}
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
                  By offering high-quality tools and accessories, we enhance the 
                  efficiency and safety of scaffolding installations. Whether for 
                  large-scale construction or maintenance work, our accessories 
                  play a crucial role in optimizing scaffolding performance and 
                  durability.{" "}
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
                <h3 className="widget_title">All Services</h3>
                <ul>
                  <li>
                    <Link to="/scaffolding/sacffolding-material-sales-rental">
                      <i className="fas fa-angle-double-right" />
                      Scaffolding Material Sales & Rental
                    </Link>
                  </li>
                  <li>
                    <Link to="/scaffolding/scaffolding-tools-accessories-supply">
                      <i className="fas fa-angle-double-right" />
                      Scaffolding Tools & Accessories Supply
                    </Link>
                  </li>
                  <li>
                    <Link to="/scaffolding/consulting-design-inspection-services">
                      <i className="fas fa-angle-double-right" />
                      Consulting, Design & Inspection Services
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
    <ProcessAreaTwo />
    {/* <CTAAreaOne /> */}
    <FooterThree/>
    </>
  );
};

export default ScaffoldingTools;
