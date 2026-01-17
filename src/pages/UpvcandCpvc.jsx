import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Thermometer, 
  Gauge, 
  Ruler, 
  Zap, 
  Shield, 
  Flame, 
  CheckCircle2,
  Droplet,
  Package,
  Settings,
  ChevronRight,
  CardSim
} from "lucide-react";
import "../components/PVDFDetails.css";
import FooterAreaTwo from "../components/FooterAreaTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import SpecCard from "../components/SpecCard";
import StandardSection from "../components/StandardSection";
import HeroSection from "../components/HrerSection";



export default function UpvcandCpvc() {
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
          <HeaderOne/>
          <Breadcrumb title={"UPVC & CPVC"} />
          {/* <SpecCard/> */}
          <StandardSection/>
          <PortfolioTwo />
          <FooterAreaTwo />
       </>
  );
}