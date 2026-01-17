import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ContactArea from "../components/ContactArea";
import Preloader from "../helper/Preloader";
import FooterAreaTwo from "../components/FooterAreaTwo";
import HeaderSix from "../components/HeaderSix";
import ContactAreaTwo from "../components/ContactAreaTwo";
import FooterTwo from "../components/FooterTwo";

const ContactPageTwo = () => {
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
      <HeaderSix />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Area */}
      <ContactAreaTwo />

      {/* Subscribe One */}
      {/* <SubscribeOne /> */}

      {/* Footer Area One */}
      <FooterTwo />
    </>
  );
};

export default ContactPageTwo;
