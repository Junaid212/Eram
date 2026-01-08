import { useState } from 'react';

export default function Policy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <section className="contact-one">
      <div className="contact-one__wrap">
        <div className="contact-one__shape-1">
          <img src='/assets/images/shapes/contact-one-shape-1.png' alt="Shape 1" />
        </div>
        <div className="contact-one__shape-3">
          <img src='/assets/images/shapes/contact-one-shape-3.png' alt="Shape 3" />
        </div>
        <div className="contact-one__shape-4">
          <img src='/assets/images/shapes/contact-one-shape-4.png' alt="Shape 4" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Quality Policy</span>
                  </div>
                  <h2 className="section-title__title">Quality you can rely on</h2>
                </div>
                {/* <p style={{color:'gray'}}>Right from our establishment of the company, we have
                     been striving to maintain a high standard of quality in our service. For this,
                      we have adopted the most stringent quality policy in our business approach.</p>
                      <p style={{color:'gray'}}>Our team makes sure to stringently follow the quality policy throughout from 
                        planning to completion. In this way, we assure a standard of quality in the
                         service that further delivers high-end performance and excellent speed operation
                          at the client’s site.</p> */}
                <form
                  className="contact-form-validated contact-one__form"
                  onSubmit={handleSubmit}
                >
                    <p className='texts'>Right from our establishment of the company, we have
                     been striving to maintain a high standard of quality in our service. For this,
                      we have adopted the most stringent quality policy in our business approach.</p>
                      <p className='texts'>Our team makes sure to stringently follow the quality policy throughout from 
                        planning to completion. In this way, we assure a standard of quality in the
                         service that further delivers high-end performance and excellent speed operation
                          at the client’s site.</p>
                  {/* <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select
                            className="selectmenu wide"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Choose a Option
                            </option>
                            <option value="Type Of Service 01">Type Of Service 01</option>
                            <option value="Type Of Service 02">Type Of Service 02</option>
                            <option value="Type Of Service 03">Type Of Service 03</option>
                            <option value="Type Of Service 04">Type Of Service 04</option>
                            <option value="Type Of Service 05">Type Of Service 05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Message here.."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="contact-one__btn-box">
                        <button type="submit" className="thm-btn-two contact-one__btn">
                          Appointment Now<span className="icon-dubble-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div> */}
                </form>
                {/* <div className="result"></div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-one__right">
                <div
                  className="contact-one__img wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src='/assets/img/service/43.webp' alt="Contact" />
                  <div className="contact-one__shape-2">
                    <img src='/assets/images/shapes/contact-one-shape-2.png' alt="Shape 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .contact-one {
    position: relative;
    display: block;
}

.contact-one__wrap {
    position: relative;
    display: block;
    background: linear-gradient(144.24deg, #E63A27 -2.01%, rgba(0, 0, 0, 0.92) 63.45%);
    border-radius: 30px 30px 0px 0px;
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    z-index: 1;
}

.contact-one__left {
    position: relative;
    display: block;
    margin: 110px 0 80px 0;
    z-index: 1;
}

.contact-one__left .section-title__tagline {
    color: white;
}

.contact-one__left .section-title {
    margin-bottom: 38px;
}

.contact-one__left .section-title__title {
    color: white;
}

.contact-one__form {
    position: relative;
    display: block;
    background-color: #fff;
    opacity: 0.30;
    border-radius: 20px;
    padding: 40px 40px 40px;
}
    .texts{
      color: #000 !important;
      opacity: 1 !important;
      }

.contact-one__input-box {
    position: relative;
    display: block;
    margin-bottom: 20px;
}

.contact-one__input-box input[type="text"],
.contact-one__input-box input[type="email"] {
    height: 60px;
    width: 100%;
    background-color: rgba(#000000, .33);
    border: 2px solid rgba(#ffffff, .20);
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    color: white;
    display: block;
    border-radius: 30px;
}

.contact-one__input-box .select-box {
    width: 100%;
}
.contact-one__input-box .select-box select.selectmenu.wide {
    height: 60px;
    width: 100%;
    background-color: rgba(var(--maroof-black-rgb), .33);
    border: 2px solid rgba(var(--maroof-white-rgb), .20);
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    font-size: 16px;
    color: var(--maroof-white);
    display: block;
    font-weight: 300;
    border-radius: 30px;
    line-height: 60px;
    float: none;
}

.contact-one__input-box .nice-select {
    height: 60px;
    width: 100%;
    background-color: rgba(var(--maroof-black-rgb), .33);
    border: 2px solid rgba(var(--maroof-white-rgb), .20);
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    font-size: 16px;
    color: var(--maroof-white);
    display: block;
    font-weight: 300;
    border-radius: 30px;
    line-height: 60px;
    float: none;
}

.contact-one__input-box .nice-select:after {
    position: absolute;
    top: 21px;
    right: 20px;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid var(--maroof-white);
    border-right: 2px solid var(--maroof-white);
    margin-top: 0px;
    z-index: 10;
}

.contact-one__input-box .nice-select .option {
    color: var(--maroof-black);
}

.contact-one__input-box textarea {
    position: relative;
    height: 130px;
    width: 100%;
    background-color: rgba(var(--maroof-black-rgb), .33);
    border: 2px solid rgba(var(--maroof-white-rgb), .20);
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    font-size: 16px;
    color: var(--maroof-white);
    display: block;
    font-weight: 300;
    border-radius: 30px;
    margin-bottom: 0;
}

.contact-one__input-box.text-message-box {
    height: 130px;
    margin-bottom: 30px;
}

.contact-one__btn-box {
    position: relative;
    display: block;
}

.contact-one__btn {
    border: none !important;
    background-color: var(--maroof-white) !important;
}

.contact-one__right {
    position: relative;
    display: block;
    margin-left: 50px;
    margin-right: -47px;
}

.contact-one__img {
    position: relative;
    display: block;
    z-index: 1;
}

.contact-one__img img {
    width: 100%;
}

.contact-one__shape-1 {
    position: absolute;
    top: 0;
    right: 0;
    opacity: .10;
    z-index: -1;
}

.contact-one__shape-1 img {
    width: auto;
}

.contact-one__shape-2 {
    position: absolute;
    bottom: 70px;
    left: 13px;
    z-index: -1;
}

.contact-one__shape-2 img {
    width: auto;
}

.contact-one__shape-3 {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: .20;
    z-index: -1;
}

.contact-one__shape-3 img {
    width: auto;
}

.contact-one__shape-4 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.contact-one__shape-4 img {
    width: auto;
}
      `}</style>
    </section>
  );
}
