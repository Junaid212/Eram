import { backOut } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const BlogAreaList = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
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
                    Forged Crankshaft Assembly For Drilling Mud Pump
                  </Link>
                </h3>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> <b>Processing Type: </b> Forging
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Use: </strong> Well drilling mud pump
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Standard: </strong> API 7K
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
                  <Link to="#">Mud Pump Big Gear Ring Bull Gear
                  </Link>
                </h3>
                 <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> <b>Brand name: </b> BOMCO
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Application: </strong> Oil well drilling
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Pattern: </strong> forging /Iron
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Model: </strong> mud pump for drilling,F500 F800 F1000 F1300 F1600 F2200
                    </li>
                  </ul>
                </div>
                {/* <p className="blog-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                  aenean tortor pretium. Ac{" "}
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="blog-single-card">
              {/* <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_3.png" alt="Eram" />
              </div> */}
              <div className="blog-content" style={{backgroundColor:'red'}}>
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
                <h3 className="blog-title" style={{color:'white'}}>
                  <Link to="#">
                    Connection Rod for Mud Pump
                  </Link>
                </h3>
                 <div className="checklist style2 mt-35 mb-20 " >
                  <ul>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} /> <b>Theory: </b> Reciprocating Pump
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right" style={{color:'white'}}/>
                      <strong>Brand name: </strong> BOMCO
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Application: </strong> Application
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Pattern: </strong> forging /Iron
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Model: </strong> mud pump for drilling,F500 F800 F1000 F1300 F1600 F2200
                    </li>
                  </ul>
                </div>
                {/* <p className="blog-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                  aenean tortor pretium. Ac{" "}
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div> */}
              </div>
            </div>
             <div className="blog-single-card">
              {/* <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_1.png" alt="Eram" />
              </div> */}
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
                    Outer Race Retainer
                  </Link>
                </h3>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> <b>Brand name </b>: BOMCO
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Application </strong>: Oil well drilling
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Pattern </strong>: forging /Iron
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Model </strong>: mud pump for drilling,F500 F800 F1000 F1300 F1600 F2200
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
                {/* <div className="blog-date">
                  <Link to="/blog">
                    <span>*</span>*****
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="blog-single-card" >
              {/* <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_2.png" alt="Eram" />
              </div> */}
              <div className="blog-content" style={{backgroundColor:'#FACED5'}}>
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
Piston Nut M39*3
                  </Link>
                </h3>
                 <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> <b>Size </b>: M39*3
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Material </strong>: Steel
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Process </strong>: forging 
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Measurement system </strong>: Metric
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Model Number</strong>: hex head nut
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      <strong>Application </strong>: Mining, Water Treatment, oil Industry
                    </li>
                  </ul>
                </div>
                {/* <p className="blog-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                  aenean tortor pretium. Ac{" "}
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="blog-single-card">
              {/* <div className="blog-thumb">
                <img src="/assets/img/blog/blog_s1_3.png" alt="Eram" />
              </div> */}
              <div className="blog-content" style={{backgroundColor:'red'}}>
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
                <h3 className="blog-title" style={{color:'white'}}>
                  <Link to="#">
                    Locating Ring for Mud Pump F800 F1600
                  </Link>
                </h3>
                 <div className="checklist style2 mt-35 mb-20 " >
                  <ul>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} /> <b>Theory: </b> Reciprocating Pump
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right" style={{color:'white'}}/>
                      <strong>Shape </strong>: oval gasket
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Material </strong>: steel
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Process </strong>: forging 
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Model Number </strong>: F500/F800/F1000
                    </li>
                    <li style={{color:'white'}}>
                      <i className="fas fa-angle-double-right"style={{color:'white'}} />
                      <strong>Type </strong>: Drilling Mud Pump
                    </li>
                  </ul>
                </div>
                {/* <p className="blog-text">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                  aenean tortor pretium. Ac{" "}
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  READ MORE <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div> */}
              </div>
            </div>
            
            {/* <div className="pagination justify-content-center">
              <ul>
                <li>
                  <Link to="/blog">1</Link>
                </li>
                <li>
                  <Link to="/blog">2</Link>
                </li>
                <li>
                  <Link to="/blog">3</Link>
                </li>
                <li>
                  <Link to="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              {/* <div className="widget widget_search">
                <h3 className="widget_title">Search</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div> */}
              <div className="widget widget_categories">
                <h3 className="widget_title">Hollow Crankshaft for Mud Pump</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <b>Application :</b><span>Drilling Mud pump</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Processing Type:</b> <span>Forging</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Standard:</b> <span>API 7K</span>
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
                <h3 className="widget_title">Main Bearing for Mud Pump F1000 F1600</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Usage
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Sleeve</Link>
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
                          Type
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Rotary Drilling Rig</Link>
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
                          Model type
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">F1600、F-1300、F-1000、F-800、F-500</Link>
                      </div>
                    </div>
                    {/* <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="/assets/img/blog/recent-post3.png"
                          alt="Eram"
                        />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud" style={{backgroundColor:'red'}}>
                <h3 className="widget_title">Eccentric Bearing for Mud Pump</h3>
                <div className="tagcloud">
                  <Link to="#"><b>Usage</b>:	Oil Well</Link>
                  <Link to="#"><b>Type</b>:	Rotary Drilling Rig</Link>
                  <Link to="#"><b>Model type</b>:	F1600,F-1300, F-1000, F-800, F-500e</Link>
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
              <div className="widget widget_categories">
                <h3 className="widget_title">
Main Bearing Sleeve for Mud Pump</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <b>Type :</b><span>Sleeve</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Processing:</b> <span>Casting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Process:</b> <span>Cnc Machine</span>
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
              <div className="widget widget_categories">
                <h3 className="widget_title">Main Bearing Bolt for Mud Pump</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <b>Model :</b><span>hex screw hex head bolt</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Grade:</b> <span>8.8, 10.9, 12.9</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <b>Available:</b> <span>OEM/ODM</span>
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
                <h3 className="widget_title">Inner Locking Ring</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="#">
                          Application
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">Oil well drilling</Link>
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
                          Pattern
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">forging /Iron</Link>
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
                          Model
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="#">mud pump for drilling,F500 F800 F1000 F1300 F1600 F2200</Link>
                      </div>
                    </div>
                    {/* <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="/assets/img/blog/recent-post3.png"
                          alt="Eram"
                        />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
