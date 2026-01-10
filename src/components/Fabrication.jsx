import React from "react";
import { Link } from "react-router-dom";

const Fabrication = () => {
  return (
    <div className="portfolio-area space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="project-details-single-page">
              <div className="page-img">
                <img
                  src="/assets/img/portfolio/portfolio_details.png"
                  alt="portfolio"
                />
              </div>
              <div className="row gx-30 flex-row-reverse">
                <div className="col-xxl-8 col-lg-7">
                  <h3 className="page-subtitle mt-25 mb-25">
                    Fabrication
                  </h3>
                  <p className="mb-25">
                    We are offering a range of Iron and Metal Fabrication services
                     owing to our expertise in this field. These services are rendered
                      by our skilled team of professionals with the help of the latest
                       tools and technology in compliance with the set industry norms.{" "}
                  </p>
                  {/* <p className="mb-25">
                    Aliquam eros justo, posuere loborti vive rra laoreet matti
                    ullamc orper posu ere viverra .Aliquam ero, posuee lobortis
                    non, laoreet augue mattis fermentum ullamcorper viverra
                    Aliquam eros justo, posuere loborti
                  </p> */}
                  {/* <div className="checklist style2 mb-40">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Professional Car Repair Services Dependable Car
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Dependable Car Repair Solutions
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Your One-Stop Car Repair Shop
                      </li>
                    </ul>
                  </div> */}
                  {/* <h3 className="page-subtitle mt-n2 mb-20">
                    Your One-Stop Car Repair Shop
                  </h3> */}
                  {/* <p className="mb-30">
                    Aliquam eros justo, posuere loborti vive rra laoreet matti
                    ullamc orper posu ere viverra .Aliquam ero, posuee lobortis
                    non, laoreet augue mattis fermentum ullamcorper viverra
                    Aliquam eros justo, posuere loborti
                  </p> */}
                  <div className="row gy-30">
                    <div className="col-md-6">
                      <div className="page-img">
                        <img
                          src="/assets/img/portfolio/portfolio_details1-2.png"
                          alt="Eram"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="page-img">
                        <img
                          src="/assets/img/portfolio/portfolio_details1-3.png"
                          alt="Eram"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mb-20 mt-30">
                    The offered Fabrication services are appreciated for their timely
                     execution, hassle-free management, reliability, and professional
                      approach. Apart from this, clients can avail of these services
                       as per their needs at highly competitive prices.
                  </p>
                </div>
                <div className="col-xxl-4 col-lg-5">
                  <aside className="sidebar-area">
                    <div className="widget widget_project-info">
                      <div className="widget widget_contact">
                      <div className="widget-contact-wrap text-center">
                        <h5 className="widget_subtitle">Enquiry</h5>
                        <h3 className="widget_title mt-20">
                          Get In Touch
                        </h3>
                        <p className="widget-contact-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content{" "}
                        </p>
                        <Link className="btn style2 mt-30" to="/contact">
                          Lets Talk <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabrication;
