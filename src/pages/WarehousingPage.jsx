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
import Material from "../components/Material";
import { Warehouse } from "lucide-react";
import Warehousing from "../components/Warehousing";

const WarehousingPage = () => {
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
      <Breadcrumb title={"Warehousing, Marshalling, & Logistics"} />

      {/* Project Details Area */}
      {/* <ProjectDetailsArea /> */}
      <Warehousing/>
      <BlogAreaTwo />
      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default WarehousingPage;
