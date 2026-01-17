import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageOne from "./pages/HomePageOne";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import TeamPage from "./pages/TeamPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import ContactPage from "./pages/ContactPage";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import HomePageFive from "./pages/HomePageFive";
import HomePageSix from "./pages/HomePageSix";
import FabricationPage from "./pages/FabricationPage";
import CivilandMechanicalPage from "./pages/CivilandMechanicalpage";
import MaterialSupply from "./pages/MaterialSupply";
import WarehousingPage from "./pages/WarehousingPage";
import MaintenancePage from "./pages/MaintenancePage";
import TechnicalPage from "./pages/TechnicalPage";
import Flanges from "./pages/Flanges";
import StainlessSteel from "./pages/StainlessSteel";
import CarbonSteelPipe from "./pages/CarbonSteelPipe";
import ButtWeldFittings from "./pages/ButtWeldFittings";
import ForgedFittings from "./pages/ForgedFittings";
import Valves from "./pages/Valves";
import InstrumentationTubeFittings from "./pages/InstrumentationTubeFittings";
import CarIronDww from "./pages/CarIronDww";
import PVDFPipeFittings from "./pages/PVDFPipeFittings";
import UpvcandCpvc from "./pages/UpvcandCpvc";
import AboutPage2 from "./pages/AboutPage2";
import AboutPage3 from "./pages/AboutPage3";
import AboutPage4 from "./pages/AboutPage4";
import ProductPage2 from "./pages/ProductPage2";
import ScaffoldingSystems from "./pages/ScaffoldingSystems";
import CuplockSystem from "./pages/CuplockSystem";
import KwikstageRinglockSystem from "./pages/KwikstageRinglockSystem";
import ScaffoldingTubesCouplers from "./pages/ScaffoldingTubesCouplers";
import WalkingBoardPlanks from "./pages/WalkingBoardPlanks";
import TableFormworkSystem from "./pages/TableFormworkSystem";
import AluminiumSystem from "./pages/AluminiumSystem";
import PanelSysytem from "./pages/PanelSystem";
import PanelSystem from "./pages/PanelSystem";
import TowerScaffolds from "./pages/TowerScaffolds";
import CantileverFrame from "./pages/CantileverFrame";
import ProjectSupportServices from "./pages/ProjectSupportServices";
import EngineeringConsultancy from "./pages/EngineeringConsulatancy";
import OperationMaintenance from "./pages/OperationMaintenance";
import Brands from "./pages/Brands";
import ScaffoldingMaterial from "./pages/ScaffoldingMaterial";
import ScaffoldingTools from "./pages/ScaffoldingTools";
import ConsultingDesign from "./pages/ConsultingDesign";
import Fastner from "./pages/Fastner";
import MudPumpSpare from "./pages/MudPumpSpare";
import CrankShaft from "./pages/CrankShaft";
import PinionShaft from "./pages/PinionShaft";
import TransmissionPage from "./pages/TransmissionPage";
import HydraulicPage from "./pages/HydraulicPage";
import OilFieldPage from "./pages/OilFieldPage";
import PSPage from "./pages/PSPage";
import DrillingPage from "./pages/DrillingPage";
import BOPPage from "./pages/BOPPage";
import DownholePage from "./pages/DownholePage";
import OilTubePage from "./pages/OilTubePage";
import PressureTransmitter from "./pages/PressureTransmitter";
import Scaffolding from "./pages/Scaffolding";
import MudFluid from "./pages/MudFluid";
import MudPumpCrosshead from "./pages/MudPumpCrosshead";
import PulsationDampener from "./pages/PulsationDampener";
import ReliefPage from "./pages/ReliefPage";
import SprayPage from "./pages/SprayPage";
import DischargePage from "./pages/DischargePage";
import ClientPage from "./pages/ClientPage";
import VendorPage from "./pages/VendorPage";
import ContactPageTwo from "./pages/ContactPageTwo";
import ContactPageThree from "./pages/ContactPageThree";
import ContactPageFour from "./pages/ContactPageFour";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/mechanical" element={<HomePageTwo />} />
        <Route exact path="/electrical" element={<HomePageThree />} />
        <Route exact path="/scaffolding" element={<HomePageFour />} />
        <Route exact path="/home-5" element={<HomePageFive />} />
        <Route exact path="/project-support-services/" element={<HomePageSix />} />
        <Route exact path="/mechanical/about" element={<AboutPage />} />
        <Route exact path="/mechanical/service" element={<ServicePage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />
        <Route exact path="/mechanical/products" element={<ProjectPage />} />
        <Route exact path="/project-details" element={<ProjectDetailsPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/team-details" element={<TeamDetailsPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/shop-details" element={<ShopDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/mechanical/contact" element={<ContactPage />} />

        {/* Service Details */}
        <Route exact path="/mechanical/fabrication" element={<FabricationPage />} />
        <Route exact path="/mechanical/civil-mechanical" element={<CivilandMechanicalPage />} />
        <Route exact path="/mechanical/material-supply" element={<MaterialSupply />} />
        <Route exact path="/mechanical/warehousing" element={<WarehousingPage />} />
        <Route exact path="/mechanical/maintenance" element={<MaintenancePage />} />
        <Route exact path="/mechanical/technical-support" element={<TechnicalPage />} />

        {/* Mechanical Product Details */}
        <Route exact path="/mechanical/flanges" element={<Flanges />} />
        <Route exact path="/mechanical/stainless-steel-pipes" element={<StainlessSteel />} />
        <Route exact path="/mechanical/carbon-steel-pipes" element={<CarbonSteelPipe />} />
        <Route exact path="/mechanical/butt-weld-fittings" element={<ButtWeldFittings />} />
        <Route exact path="/mechanical/forged-fittings" element={<ForgedFittings />} />
        <Route exact path="/mechanical/valves" element={<Valves />} />
        <Route exact path="/mechanical/instrumentation-tube-fittings" element={<InstrumentationTubeFittings />} />
        <Route exact path="/mechanical/cast-iron-dww-pipe-fittings" element={<CarIronDww />} />
        <Route exact path="/mechanical/pvdf-pipe-fittings-and-valves" element={<PVDFPipeFittings />} />
        <Route exact path="/mechanical/upvc-cpvc" element={<UpvcandCpvc />} />
        <Route exact path="/mechanical/fasteners" element={<Fastner />} />
        <Route exact path="/mechanical/mud-pump-spares" element={<MudPumpSpare />} />
        <Route exact path="/mechanical/mud-pump-crank-shaft" element={<CrankShaft/>} />
        <Route exact path="/mechanical/mud-pump-pinion-shaft" element={<PinionShaft/>} />
        <Route exact path="/mechanical/transmission-spare-parts" element={<TransmissionPage/>} />
        <Route exact path="/mechanical/hydraulic-cylinder-mud-pump" element={<HydraulicPage/>} />
        <Route exact path="/mechanical/oil-field-clutch" element={<OilFieldPage/>} />
        <Route exact path="/mechanical/ps-hydraulic-disc-brake" element={<PSPage/>} />
        <Route exact path="/mechanical/drilling-rig-spares" element={<DrillingPage/>} />
        <Route exact path="/mechanical/bop-hoisting-equipment" element={<BOPPage/>} />
        <Route exact path="/mechanical/downhole-tools" element={<DownholePage/>} />
        <Route exact path="/mechanical/oil-tube-casing-pipe" element={<OilTubePage/>} />
        <Route exact path="/mechanical/pressure-transmitters" element={<PressureTransmitter/>} />
        <Route exact path="/mechanical/scaffolding-materials" element={<Scaffolding/>} />
        <Route exact path="/mechanical/mud-pump-fluid-end" element={<MudFluid/>} />
        <Route exact path="/mechanical/mud-pump-crosshead" element={<MudPumpCrosshead/>} />
        <Route exact path="/mechanical/pulsation-dampener" element={<PulsationDampener/>} />
        <Route exact path="/mechanical/mud-pump-relief-valve" element={<ReliefPage/>} />
        <Route exact path="/mechanical/spray-lubrication-system" element={<SprayPage/>} />
        <Route exact path="/mechanical/discharge-strainer-auxiliary-piping" element={<DischargePage/>} />

        {/* About Pages */}
        <Route exact path="/electrical/about" element={<AboutPage2 />} />
        <Route exact path="/scaffolding/about" element={<AboutPage3 />} />
        <Route exact path="/project-support-services/about" element={<AboutPage4 />} />


        <Route exact path="/electrical/products" element={<ProductPage2 />} />
        <Route exact path="/electrical/brands" element={<Brands />} />
        <Route exact path="/electrical/clients" element={<ClientPage />} />
        <Route exact path="/electrical/vendor-code" element={<VendorPage />} />


        {/* Scaffolding Systems */}
        <Route exact path="/scaffolding/scaffolding-systems" element={<ScaffoldingSystems />} />
        <Route exact path="/scaffolding/cuplock-system" element={<CuplockSystem />} />
        <Route exact path="/scaffolding/kwikstage-ringlock-systems" element={<KwikstageRinglockSystem />} />
        <Route exact path="/scaffolding/scaffolding-tubes-couplers" element={<ScaffoldingTubesCouplers />} />
        <Route exact path="/scaffolding/walking-boards-planks" element={<WalkingBoardPlanks />} />
        <Route exact path="/scaffolding/table-formwork-systems" element={<TableFormworkSystem />} />
        <Route exact path="/scaffolding/aluminium-system-scaffolds-ladders" element={<AluminiumSystem />} />
        <Route exact path="/scaffolding/panel-systems-wall-column-formwork" element={<PanelSystem />} />
        <Route exact path="/scaffolding/tower-scaffolds-fixed-mobile" element={<TowerScaffolds />} />
        <Route exact path="/scaffolding/cantilever-frame-korean-frame-systems" element={<CantileverFrame />} />


        {/* Project Support Services */}
        <Route exact path="/project-support-services/project-support-services" element={<ProjectSupportServices />} />
        <Route exact path="/project-support-services/engineering-consultancy-inspection" element={<EngineeringConsultancy />} />
        <Route exact path="/project-support-services/operation-maintenance" element={<OperationMaintenance />} />


        {/* Scaffolding Services */}
        <Route exact path="/scaffolding/sacffolding-material-sales-rental" element={<ScaffoldingMaterial />} />
        <Route exact path="/scaffolding/scaffolding-tools-accessories-supply" element={<ScaffoldingTools />} />
        <Route exact path="/scaffolding/consulting-design-inspection-services" element={<ConsultingDesign />} />

        {/* Contact Pages */}
        <Route exact path="/electrical/contact" element={<ContactPageTwo />} />
        <Route exact path="/scaffolding/contact" element={<ContactPageThree />} />
        <Route exact path="/project-support-services/contact" element={<ContactPageFour />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
