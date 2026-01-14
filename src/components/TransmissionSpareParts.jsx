import { backOut } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const TransmissionSpareParts = () => {
  return (
    <section className="blog-area space-top">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_1.png" alt="Eram" />
              </div>
              <div className="blog-content">
                {/* <div className="blog-meta">
                  <Link to="/blog">
                    <i className="fas fa-user" />
                    By admin
                  </Link>
                  <Link to="/blog">
                    <i className="fas fa-comments" />
                    Comments (05)
                  </Link>
                </div> */}
                <h3 className="blog-title">
                  <Link to="#">
                    Transmission Spare Parts
                  </Link>
                </h3>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />Transmission Belt and Transmission Chains
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Crown Block Bearing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Bearing for rotary tables
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Hand Hydraulic Pump
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Hydraulic Valve Lifter Puller
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Cylinder Liner Lifting Tool
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Oil Seal Ring MC Nylon
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Double Lip Frame Oil Seal
                    </li>
                  </ul>
                </div>
                {/* <p className="blog-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                  aenean tortor pretium. Ac{" "}
                </p> */}
                {/* <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link> */}
                <div className="blog-date">
                  <Link to="/blog">
                    <span>*</span>*****
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-single-card" >
              {/* <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_2.png" alt="Eram" />
              </div> */}
              <div className="blog-content" style={{backgroundColor:'#FACED5'}}>
                <h3 className="blog-title">
                  <Link to="#">
Cylindrical roller bearings
                  </Link>
                </h3>
                 <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> Crosshead Bearing For Drilling Mud Pump
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Use </strong>: Mud pump
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Type </strong>: F series mud pump 3NB mud pumps
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Feature </strong>: High quality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_categories">
                <h3 className="widget_title">V Belt</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <b>Material :</b><span> Rubber</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Service :</b> <span> OEM</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Characteristics :</b> <span>High quality</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/blog">
                      Pro Auto Fix <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Drive-In Garage <span>(3)</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="widget" style={{backgroundColor:'#FACED5'}}>
                <h3 className="widget_title">Seal Oil for Mud Pump</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Color
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Any color</Link>
                      </div>
                    </div>
                    {/* <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="/assets/img/blog/recent-post1.png"
                          alt="Eram"
                        />
                      </Link>
                    </div> */}
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Function
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Fracturing Pump</Link>
                      </div>
                    </div>
                    {/* <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="/assets/img/blog/recent-post2.png"
                          alt="Eram"
                        />
                      </Link>
                    </div> */}
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Material
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">NBR/FKM/RUBBER</Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Working temperature
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">0~200</Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Application
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Mud Pump</Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Feature
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Oil Resistance</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud" style={{backgroundColor:'red'}}>
                <h3 className="widget_title">Transmission chains</h3>
                <div className="tagcloud">
                  <Link to="#"><b>Type</b>:	oil field roller chain</Link>
                  <Link to="#"><b>Materials</b>: alloy steel</Link>
                  <Link to="#"><b>Chain No</b>: 100GA-6</Link>
                  <Link to="#"><b>Structure</b>: roller chain</Link>
                  <Link to="#"><b>Function</b>: transmission chain</Link>
                  {/* <Link to="#">Auto Fixers</Link>
                  <Link to="#">Car Fix</Link>
                  <Link to="#">Pro Auto Fix</Link>
                  <Link to="#">Service</Link>
                  <Link to="#">Auto Fix</Link>
                  <Link to="#">Auto Repair</Link>
                  <Link to="#">Masters</Link>
                  <Link to="#">Automotive</Link> */}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransmissionSpareParts;
