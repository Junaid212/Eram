import React, { useEffect, useState } from "react";
import HeaderFive from "../components/HeaderFive";
import HeroFour from "../components/HeroFour";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import WhyChooseUsOne from "../components/WhyChooseUsOne";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import CTAAreaTwo from "../components/CTAAreaTwo";
import PricingPlanTwo from "../components/PricingPlanTwo";
import AppointmentAreaTwo from "../components/AppointmentAreaTwo";
import TeamAreaTwo from "../components/TeamAreaTwo";
import ClientAreaTwo from "../components/ClientAreaTwo";
import FaqAreaTwo from "../components/FaqAreaTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import FooterAreaTwo from "../components/FooterAreaTwo";
import Preloader from "../helper/Preloader";
import Banner from "../components/Banner";
import Products from "../components/Products";
import ServiceAreaThree from "../components/ServiceAreaThree";
import Purpose from "../components/Purpose";
import CTAAreaOne from "../components/CTAAreaOne";
import Vision2030 from "../components/Vision2030";
import FeatureAreaOne from "../components/FeatureAreaOne";

const HomePageTwo = () => {
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

      {/* Header Two */}
      <HeaderFive />

      {/* Hero Two */}
      {/* <HeroTwo /> */}
<Banner />
<ServiceAreaThree />

      {/* Service Area Two */}
      <ServiceAreaTwo />
      
      <Products/>
      <ProcessAreaTwo />
      {/* <FeatureAreaOne /> */}
{/* <CounterTwo /> */}

      {/* About Two */}
      {/* <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div> */}

      {/* Counter Two */}
      {/* <CounterTwo /> */}

      {/* Portfolio Two */}
      {/* <PortfolioTwo /> */}

      {/* Why Choose Us One */}
      {/* <WhyChooseUsOne /> */}

      {/* Process Area Two */}
      {/* <ProcessAreaTwo /> */}

      {/* CTA Area Two */}
      {/* <CTAAreaTwo /> */}

      {/* Pricing Plan Two */}
      {/* <PricingPlanTwo /> */}

      {/* Appointment Area Two */}
      {/* <AppointmentAreaTwo /> */}

      {/* Team Area Two */}
      {/* <TeamAreaTwo /> */}

      {/* Client Area Two */}
      <Purpose/>
      {/* <ClientAreaTwo /> */}
      <Vision2030/>
      {/* Faq Area Two */}
      {/* <FaqAreaTwo /> */}

      {/* Blog Area Two */}
      {/* <BlogAreaTwo /> */}
<CTAAreaOne />
      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};
export default HomePageTwo;
