import React from "react";

const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2" >
      <div className="container"style={{zIndex:'100',position:'relative'}}>
        <div className="cta-wrap2 bg-theme">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-7">
              <div className="title-area">
                <h2 className="sec-title text-white">
                  Quality
                </h2>
                <p className="sec-text text-white">
                 Our reputation for exceeding the highest quality standards is 
                 precisely why our customers choose us and choose to stay with 
                 us. Our first customer is still our customer almost decades later 
                 because of the quality they get part after part, year after year. 
                 Our quality commitment is not just a function of our large, well-
                 equipped Quality Control Department but it actively runs through 
                 our entire operation.
                </p>
                <p className="sec-text text-white">
                  We have a long history of excellence. The same principles of quality, 
                  excellence, service, dependability, and safety that we have founded 
                  on years ago still permeated our organization today. We stand behind 
                  the products we sell, we support our technicians with factory training, 
                  and we make your goals our own to provide you with the best possible solutions.
                </p>
              </div>
              {/* <form className="newsletter-form style2">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                </div>
                <button type="submit" className="btn style5">
                  SUBSCRIBE
                </button>
              </form> */}
            </div>
            <div className="col-lg-5">
              <div className="cta2-bg-thumb">
                <img src="assets/img/elect/93.webp" alt="Eram"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .cta-wrap2 {
        padding: 70px 80px 30px 80px;
      }
      `}</style>
    </div>
  );
};

export default CTAAreaTwo;
