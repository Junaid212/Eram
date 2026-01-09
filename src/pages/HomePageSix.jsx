import React, { useEffect, useState } from "react";
import HeaderFive from "../components/HeaderFive";
import HeroSix from "../components/HeroSix";
import CategoryAreaOne from "../components/CategoryAreaOne";
import ProductAreaOne from "../components/ProductAreaOne";
import CTAAreaTwo from "../components/CTAAreaTwo";
import ProductAreaTwo from "../components/ProductAreaTwo";
import FaqAreaThree from "../components/FaqAreaThree";
import ClientAreaFour from "../components/ClientAreaFour";
import BlogAreaTwo from "../components/BlogAreaTwo";
import SubscribeTwo from "../components/SubscribeTwo";
import FooterAreaFour from "../components/FooterAreaFour";
import Preloader from "../helper/Preloader";
import HeaderFour from "../components/HeaderFour";
import ProjectSlider from "../components/ProjectSlider";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import Purpose from "../components/Purpose";
import Vision2030 from "../components/Vision2030";
import CTAAreaOne from "../components/CTAAreaOne";
import FooterFour from "../components/FooterFour";

const HomePageSix = () => {
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

      {/* Header Five */}
      {/* <HeaderFive /> */}
      <HeaderFour />

      {/* Hero Six */}
      {/* <HeroSix /> */}
      <ProjectSlider/>

      {/* Category Area One */}
      {/* <CategoryAreaOne /> */}

      {/* Product Area One */}
      {/* <ProductAreaOne /> */}

      {/* CTA Area Two */}
      {/* <CTAAreaTwo /> */}

      {/* Product Area Two */}
      {/* <ProductAreaTwo /> */}

      {/* Faq Area three */}
      {/* <FaqAreaThree /> */}

      {/* Client Area Four */}
      {/* <ClientAreaFour /> */}

      {/* Blog Area Two */}
      {/* <div className="space-top">
        <BlogAreaTwo />
      </div> */}

      {/* Subscribe Two */}
      {/* <SubscribeTwo /> */}

      {/* Footer Area Four */}
      {/* <FooterAreaFour /> */}
      <ProcessAreaTwo />
      <Purpose />
      <Vision2030 />
      <CTAAreaOne />
      <FooterFour />
    </>
  );
};

export default HomePageSix;
