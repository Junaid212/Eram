import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ProjectDetailsArea from "../components/ProjectDetailsArea";
import Preloader from "../helper/Preloader";
import Fabrication from "../components/Fabrication";
import FooterAreaTwo from "../components/FooterAreaTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import CivilMech from "../components/CivilMech";
import Maintenance from "../components/Maintenance";
import TechnicalSupport from "../components/TechnicalSupport";
import HeroSection from "../components/HeroSection";
import TypesSection from "../components/TypeSection";
import StandardsSection from "../components/StandardsSection";
import MaterialsGrid from "../components/MaterialGrid";
import StainlessSpecification from "../components/StainlessSpecification";
import AboutOne from "../components/AboutOne";
import PortfolioTwo from "../components/PortfolioTwo";
import PricingPlanTwo from "../components/PricingPlanTwo";
import CarbonSpec from "../components/CarbonSpec";

const CarbonSteelPipe = () => {
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
      <HeaderOne />
      <Breadcrumb title={"Carbon Steel Pipes"} />
{/* <HeroSection/> */}
<CarbonSpec />
<PortfolioTwo />
      {/* Project Details Area */}
      {/* <ProjectDetailsArea /> */}
      {/* <TechnicalSupport/> */}
      {/* <BlogAreaTwo /> */}
      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default CarbonSteelPipe;
