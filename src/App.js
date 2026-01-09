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

        {/* Product Details */}
        <Route exact path="/mechanical/flanges" element={<Flanges />} />
        <Route exact path="/mechanical/stainless-steel-pipes" element={<StainlessSteel />} />
        <Route exact path="/mechanical/carbon-steel-pipes" element={<CarbonSteelPipe />} />
        <Route exact path="/mechanical/butt-weld-fittings" element={<ButtWeldFittings />} />
        <Route exact path="/mechanical/forged-fittings" element={<ForgedFittings />} />
        <Route exact path="/mechanical/valves" element={<Valves />} />
        <Route exact path="/mechanical/instrumentation-tube-fittings" element={<InstrumentationTubeFittings />} />
        <Route exact path="/mechanical/cast-iron-dww-pipe-fittings" element={<CarIronDww />} />
        <Route exact path="/mechanical/pvdf-pipe-fittings-and-valves" element={<PVDFPipeFittings />} />
        <Route exact path="/mechanical/upvc-and-cpvc" element={<UpvcandCpvc />} />

        {/* About Pages */}
        <Route exact path="/electrical/about" element={<AboutPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
