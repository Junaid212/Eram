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
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import ProductAreaTwo from "../components/ProductAreaTwo";
import Brand from "../components/Brand";
import HeaderSix from "../components/HeaderSix";
import FooterTwo from "../components/FooterTwo";
import Clients from "../components/Clients";

const ClientPage = () => {
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
      <Breadcrumb title={"Clients"} />
      {/* <ProductAreaTwo /> */}
      <Clients/>
      <FooterTwo />
    </>
  );
};

export default ClientPage;
