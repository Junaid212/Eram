import React, { useEffect, useState } from "react";
import HeaderThree from "../components/HeaderThree";
import HeroFour from "../components/HeroFour";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import AboutFour from "../components/AboutFour";
import PortfolioTwo from "../components/PortfolioTwo";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import CTAAreaTwo from "../components/CTAAreaTwo";
import PricingPlanTwo from "../components/PricingPlanTwo";
import ClientAreaThree from "../components/ClientAreaThree";
import FaqAreaTwo from "../components/FaqAreaTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import SubscribeOne from "../components/SubscribeOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Preloader from "../helper/Preloader";
import HeroScaffold from "../components/HeroScaffold";
import ScaffService from "../components/ScaffService";
import FooterTwo from "../components/FooterTwo";
import CTAAreaOne from "../components/CTAAreaOne";
import Vision2030 from "../components/Vision2030";
import Purpose from "../components/Purpose";
import PortfolioFour from "../components/PortfolioFour";
import FooterThree from "../components/FooterThree";

const HomePageFour = () => {
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

      {/* Header Three */}
      <HeaderThree />
      {/* <HeroScaffold /> */}

      {/* Hero Four */}
      <HeroFour />
      <ScaffService />
      {/* Service Area Two */}
      {/* <ServiceAreaTwo /> */}

      {/* About Four */}
      {/* <AboutFour /> */}

      {/* Portfolio Two */}
      <PortfolioFour />
<ProcessAreaTwo />
      {/* Process Area Two */}
      {/* <ProcessAreaTwo /> */}

      {/* CTA Area Two */}
      {/* <CTAAreaTwo /> */}

      {/* Pricing Plan Two */}
      {/* <PricingPlanTwo /> */}

      {/* Client Area three */}
      {/* <ClientAreaThree /> */}

      {/* Faq Area Two */}
      {/* <FaqAreaTwo /> */}

      {/* Blog Area Two */}
      {/* <BlogAreaTwo /> */}

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      {/* <FooterAreaOne /> */}
      <Purpose/>
      <Vision2030/>
      <CTAAreaOne />
      <FooterThree />
    </>
  );
};

export default HomePageFour;
