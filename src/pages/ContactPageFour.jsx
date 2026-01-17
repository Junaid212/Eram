import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ContactArea from "../components/ContactArea";
import Preloader from "../helper/Preloader";
import FooterAreaTwo from "../components/FooterAreaTwo";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import HeaderFour from "../components/HeaderFour";
import FooterFour from "../components/FooterFour";

const ContactPageFour = () => {
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
      <HeaderFour />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Area */}
      <ContactArea />

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterFour />
    </>
  );
};

export default ContactPageFour;
