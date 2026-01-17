import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Address</h6>
                <p className="contact-info_text">
                  Al Jubail, Saudi Arabia
                </p>
                {/* <p className="contact-info_text">Mirpur Dhaka,Bangladesh</p> */}
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Phone Number</h6>
                <p className="contact-info_text">
                  <a href="tel:+966557639443">+966 557639443</a>
                </p>
                {/* <p className="contact-info_text">
                  <a href="tel:01254693326">01254693326</a>
                </p> */}
              </div>
            </div>
            {/* <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-clock" />
                </div>
                <h6 className="contact-info_title">Opening</h6>
                <p className="contact-info_text">Sun-10AM To 5PM</p>
                <p className="contact-info_text">Thurs-9AM To 8PM</p>
              </div>
            </div> */}
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-mail</h6>
                <p className="contact-info_text">
                  <a href="mailto:michael.mitc@example.com">
                    info@eramltd.com
                  </a>
                </p>
                {/* <p className="contact-info_text">
                  <a href="mailto:nafiz 0121@gmail.com">nafiz 0121@gmail.com</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="map-sec">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455098.2200721367!2d49.548168!3d26.984158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a06654d8187d%3A0x210bf5bd13d2288f!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1767249245926!5m2!1sen!2sin" 
              allowFullScreen=""
              loading="lazy"
              title="address"
            />
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 text-lg-end">
              <div className="faq-thumb2 mb-xl-0 mb-50">
                {/* <div className="about-counter-grid jump">
                  <img
                    src="/assets/img/icon/faq2-counter-icon-1.svg"
                    alt="Eram"
                  />
                  <div className="media-right">
                    <h3 className="about-counter">
                      <span className="counter-number">250</span>+
                    </h3>
                    <h4 className="about-counter-text">Services we provide</h4>
                  </div>
                </div> */}
                <img src="/assets/img/normal/faq-thumb-2-1.png" alt="Eram" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap p-0">
                <div className="title-area">
                  <span className="sub-title">Get in touch</span>
                  <h2 className="sec-title">We're Just a
Call Away, Let's Connect!</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Message here.."
                      id="contactForm"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2">
                      Submit Now <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
