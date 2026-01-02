import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import PortfolioOne from "../components/PortfolioOne";
import Preloader from "../helper/Preloader";
import Products from "../components/Product";
import Product from "../components/Product";
import FooterAreaTwo from "../components/FooterAreaTwo";

const ProjectPage = () => {
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
      <Breadcrumb title={"Project"} />
<Product />
      {/* Portfolio One */}
      {/* <PortfolioOne /> */}

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default ProjectPage;
