import React, { useEffect, useState } from "react";
import HeaderTwo from "./../components/HeaderTwo";
import HeroThree from "../components/HeroThree";
import FeatureAreaOne from "../components/FeatureAreaOne";
import AboutThree from "../components/AboutThree";
import IntroAreaOne from "../components/IntroAreaOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import PortfolioTwo from "../components/PortfolioTwo";
import FaqAreaTwo from "../components/FaqAreaTwo";
import MarqueeOne from "../components/MarqueeOne";
import TeamAreaThree from "../components/TeamAreaThree";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import BlogAreaThree from "../components/BlogAreaThree";
import FooterAreaOne from "../components/FooterAreaOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";
import HeaderSix from "../components/HeaderSix";
import AboutFive from "../components/AboutFive";
import IntroAreaTwo from "../components/IntroAreaTwo";
import ServiceAreaThree from "../components/ServiceAreaThree";
import ClientAreaOne from "../components/ClientAreaOne";
import CTAAreaTwo from "../components/CTAAreaTwo";
import FooterTwo from "../components/FooterTwo";

const HomePageThree = () => {
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

      {/* Header Six */}
      <HeaderSix />

      {/* Hero Three */}
      <HeroThree />

      {/* Feature Area One */}
      {/* <FeatureAreaOne /> */}

      {/* About Three */}
      <AboutFive />

      {/* Intro Area One */}
      <IntroAreaOne />
      <MarqueeOne />
      <IntroAreaTwo />

      {/* Service Area One */}
      {/* <ServiceAreaOne /> */}

      {/* Portfolio Two */}
      {/* <PortfolioTwo /> */}

      {/* Faq Area Two */}
      {/* <FaqAreaTwo /> */}

      {/* Marquee One */}

      <CTAAreaTwo />

      {/* TeamAreaThree */}
      {/* <TeamAreaThree /> */}

      {/* CTA Area One */}
      {/* <CTAAreaOne /> */}

      {/* Testimonial One */}
      {/* <TestimonialOne /> */}

      {/* Blog Area Three */}
      {/* <BlogAreaThree /> */}
      <ClientAreaOne />
      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* <ServiceAreaThree /> */}
      {/* Footer Area One */}
      <FooterTwo />
    </>
  );
};

export default HomePageThree;
