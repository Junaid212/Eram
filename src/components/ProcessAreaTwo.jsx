import React from "react";
import { Link } from "react-router-dom";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 " id="process-area-2 "
      style={{ backgroundImage: "url(/assets/img/scaff/110.webp)" }}
    >
      <div className="container">
        {/* <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> work process</h3>
              <h2 className="sec-title text-white">
                Miles Of Smiles, One Repair A Time{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="/assets/img/bg/title-bg-shape2.png"
                  alt="Eram"
                />
              </h2>
            </div>
          </div>
        </div> */}
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-3 col-md-6 process-card-wrap2" >
            <div className="process-card style2">
              <div className="process-card-number"><img src="/assets/img/scaff/111.webp" alt="Step 1" /></div>
              <h4 className="process-card-title">Wide Range Of Experience</h4>
              {/* <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number"><img src="/assets/img/scaff/112.webp" alt="Step 1" /></div>
              <h4 className="process-card-title">Experts Across All Sectors</h4>
              {/* <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number"><img src="/assets/img/scaff/113.webp" alt="Step 3" /></div>
              <h4 className="process-card-title">Committed to our Values</h4>
              {/* <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number"><img src="/assets/img/scaff/114.webp" alt="Step 4" /></div>
              <h4 className="process-card-title">Experienced Professionals</h4>
              {/* <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .process-card-number img{
        height:56px;
      }
        .process-area-2 {
          padding: 100px 0 70px;
      `}</style>
    </div>
  );
};

export default ProcessAreaTwo;
