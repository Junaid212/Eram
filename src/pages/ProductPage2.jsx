import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutTwo from "../components/AboutTwo";
import ProcessAreaOne from "../components/ProcessAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import SubscribeOne from "../components/SubscribeOne";
import TeamAreaTwo from "../components/TeamAreaTwo";
import Preloader from "../helper/Preloader";
import PricingPlanTwo from "../components/PricingPlanTwo";
import Policy from "../components/Policy";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioOne from "../components/PortfolioOne";
import HeaderSix from "../components/HeaderSix";

const ProductPage2 = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderSix />

      {/* Breadcrumb */}
      <Breadcrumb title={"Products"} />
<PortfolioOne />
      {/* About Area */}
      {/* <AboutTwo />
      <PricingPlanTwo /> */}

      {/* Process Area One */}
      {/* <ProcessAreaOne />
      <Policy/> */}

      {/* CTA Area One */}
      {/* <CTAAreaOne /> */}

      {/* Testimonial One */}
      {/* <TestimonialOne /> */}

      {/* Team Area Two */}
      {/* <TeamAreaTwo /> */}

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default ProductPage2;
