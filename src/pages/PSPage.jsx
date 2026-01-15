import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import BlogAreaList from "../components/BlogAreaList";
import Preloader from "../helper/Preloader";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import MaterialsGrid from "../components/MaterialGrid";
import OilClutch from "../components/OilClutch";
import OilFields from "../components/OilFields";
import PSSeries from "../components/PSSeries";

const PSPage = () => {
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

      {/* Breadcrumb */}
      <Breadcrumb title={"Oil field Clutch"} />

      {/* Blog Area List */}
      <PSSeries />

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}
      
      <PortfolioTwo />
      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default PSPage;
