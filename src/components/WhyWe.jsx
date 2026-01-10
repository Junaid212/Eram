import { Link } from 'react-router-dom';
export default function WhyWe() {
  return (
    <>
      {/* Why We Are Start */}
      <section className="why-we-are">
        <div className="why-we-are__wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="why-we-are__left">
                  <div className="text-left">
                    <div className="section-title">
                      {/* <span className="section-title__tagline">why we are the best</span> */}
                    </div>
                    <h2 style={{margin:'-50px 0 50px'}}>
                      Choose us for the <span style={{color:'red'}}>Best Quality.</span>
                    </h2>
                  </div>
                  <ul className="why-we-are__list list-unstyled">
                    <li>
                      <div className="why-we-are__list-content">
                        {/* <h3><Link to="/reliable-roof-repair">Reliable Roofing Pros</Link></h3> */}
                        <p>
                          <strong style={{fontSize:'24px'}}>Our Mission</strong> is to create exceptional customer experiences with world-class satisfaction levels and combine this with intelligent diversification to achieve strong and sustainable profitable growth.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link to="/reliable-roof-repair">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        {/* <h3><Link to="/sure-guard-roofing-services">Ridgeguard Roofing</Link></h3> */}
                        <p>
                          <strong style={{fontSize:'24px'}}>Our Vision</strong> as a professional and successful company, we empower all our members to aspire and succeed with us. We aim to become the top traders.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link to="/sure-guard-roofing-services">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="why-we-are__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div className="why-we-are__img-box">
                    <div className="why-we-are__img">
                      <img src="/assets/img/elect/122.webp" alt="Why-We-Are-img-1" style={{borderRadius:'20px'}}/>
                    </div>
                    {/* <div className="why-we-are__img-2">
                      <img src="/assets/img/elect/59.webp" alt="Why-We-Are-img-1" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
          /*--------------------------------------------------------------
# Why We Are
--------------------------------------------------------------*/
.why-we-are {
    position: relative;
    display: block;
    z-index: 1;
}

.why-we-are__wrap {
    position: relative;
    display: block;
    max-width: 1760px;
    margin: 0 auto;
    background-color: #FFF4F3;
    border-radius: 20px;
    padding: 120px 0 120px;
}

.why-we-are__left {
    position: relative;
    display: block;
    margin-top: 23px;
}

.why-we-are__left .section-title {
    margin-bottom: 29px;
}

.why-we-are__list {
    position: relative;
    display: block;
    margin-right: 170px;
    
}

.why-we-are__list li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: white;
    padding: 17px 30px 20px;
}

.why-we-are__list li+li {
    margin-top: 20px;
}

.why-we-are__list-content {
    position: relative;
    display: block;

.why-we-are__list-content h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
}

.why-we-are__list-content h3 a {
    color: black;
}

.why-we-are__list-content h3 a:hover {
    color: #E63A27;
}

.why-we-are__list-content p {
    margin-top: 6px;
}

.why-we-are__list-arrow {
    position: relative;
    display: inline-block;
}

.why-we-are__list-arrow a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    border: 1px solid #cdcdcdf;
    border-radius: 50%;
    font-size: 20px;
    color: transparent;
    -webkit-text-stroke: 1px #E63A27;
}

.why-we-are__list-arrow a:hover {
    background-color: #E63A27;
    color: white;
    -webkit-text-stroke: none;
    border: 1px solid #E63A27;
}

.why-we-are__list-arrow a span {
    transform: rotate(-45deg);
}

.why-we-are__right {
    position: relative;
    display: block;
    margin-left: 42px;
}

.why-we-are__img-box {
    position: relative;
    display: block;
}

.why-we-are__img {
    position: relative;
    display: block;
}

.why-we-are__img img {
    width: 100%;
    border-radius: 20px;
}

.why-we-are__img-2 {
    position: absolute;
    left: -86px;
    bottom: 39px;
}

.why-we-are__img-2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 12px solid white;
    border-radius: 20px;
}

.why-we-are__img-2 img {
    width: auto;
    border-radius: 20px;
}

/*--------------------------------------------------------------
# Why We Are Two
--------------------------------------------------------------*/
.why-we-are-two {
    position: relative;
    display: block;
    counter-reset: count;
    z-index: 1;
}

.why-we-are-two__wrap {
    position: relative;
    display: block;
    max-width: 1760px;
    margin: 0 auto;
    background-color: black;
    border-radius: 20px;
    padding: 120px 0 350px;
}

.why-we-are-two__left {
    position: relative;
    display: block;
    margin-left: 63px;
    margin-right: 102px;
}

.why-we-are-two__img-box {
    position: relative;
    display: block;
}

.why-we-are-two__img {
    position: relative;
    display: block;
    z-index: 1;
}

.why-we-are-two__img img {
    width: 100%;
    border-radius: 20px;
}

.why-we-are-two__shape-1 {
    position: absolute;
    top: 66px;
    left: -64px;
}

.why-we-are-two__shape-1 img {
    width: auto;
}

.why-we-are-two__count-box {
    position: absolute;
    left: -63px;
    bottom: 72px;
    max-width: 191px;
    width: 100%;
    background-color: #E63A27;
    border-radius: 20px;
    text-align: center;
    padding: 22px 20px 22px;
    z-index: 2;
}

.why-we-are-two__count-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, .10);
    border-radius: 50%;
    margin: 0 auto;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease
}

.why-we-are-two__count-box:hover .why-we-are-two__count-icon {
    background-color: black;
}

.why-we-are-two__count-icon span {
    position: relative;
    display: inline-block;
    font-size: 32px;
    color: white;
}

.why-we-are-two__count-inner {
    position: relative;
    display: block;
}

.why-we-are-two__count {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
}

.why-we-are-two__count h3 {
    font-size: 46px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.94px;
    color: white;
}

.why-we-are-two__count-plus {
    font-size: 46px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.94px;
    color: white;
}

.why-we-are-two__count-text {
    font-size: 12px;
    line-height: 23px;
    color: white;
}

.why-we-are-two__right {
    position: relative;
    display: block;
    margin-left: -23px;
}

.why-we-are-two__right .section-title {
    margin-bottom: 30px;
}

.why-we-are-two__right .section-title__title {
    color: white;
}

.why-we-are-two__list {
    position: relative;
    display: block;
}

.why-we-are-two__list li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.20);
    border-radius: 20px;
    padding: 20px 30px 18px;
}

.why-we-are-two__list li+li {
    margin-top: 20px;
}

.why-we-are-two__list li h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    color: var(--maroof-white);
}

.why-we-are-two__list li p {
    font-size: 16px;
    color: var(--maroof-white);
    margin-top: 10px;
}

.why-we-are-two__list-count {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    border: 1px solid #20202D;
    border-radius: 50%;
}

.why-we-are-two__list-count:before {
    position: relative;
    display: block;
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    color: var(--maroof-white);
    border-radius: 50%;
    counter-increment: count;
    content: "0"counter(count);
    transition: all 200ms linear;
    transition-delay: 0.1s;
}










/*--------------------------------------------------------------
# End
--------------------------------------------------------------*/
          `}</style>
        </div>
      </section>
      {/* Why We Are End */}
    </>
  );
}
