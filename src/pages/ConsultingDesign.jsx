import React from "react";
import { Link } from "react-router-dom";
import FooterThree from "../components/FooterThree";
import HeaderThree from "../components/HeaderThree";
import Breadcrumb from "../components/Breadcrumb";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import CTAAreaOne from "../components/CTAAreaOne";

const ConsultingDesign = () => {
  return (
    <>
    <HeaderThree/>
    <Breadcrumb title={"Consulting, Design & Inspection Services"}/>
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
                <h2 className="page-title">Consulting, Design & Inspection Services</h2>
                <p className="mb-25">
                 Eram Company Ltd offers expert consulting, design, and inspection 
                 services to ensure scaffolding solutions are tailored to project 
                 requirements and safety standards. Our experienced team provides 
                 customized designs, structural calculations, and site assessments 
                 to optimize scaffolding performance and efficiency.{" "}
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
                  With rigorous inspection protocols, we ensure compliance 
                  with international safety regulations, minimizing risks 
                  and enhancing worker safety. Our consulting services help 
                  clients implement the best scaffolding practices, ensuring 
                  smooth project execution and long-term structural integrity.{" "}
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

export default ConsultingDesign;
