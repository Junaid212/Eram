import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ServiceAreaOneMultiImg from "../components/ServiceAreaOneMultiImg";
import Preloader from "../helper/Preloader";
import FooterAreaTwo from "../components/FooterAreaTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import Systems from "../components/Systems";
import HeaderThree from "../components/HeaderThree";

const ScaffoldingSystems = () => {
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
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Scaffolding Systems"} />
      <Systems/>

      {/* Service Area One */}
      {/* <ServiceAreaOneMultiImg /> */}
{/* <ServiceAreaTwo /> */}
      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default ScaffoldingSystems;
