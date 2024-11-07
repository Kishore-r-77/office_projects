import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";

// import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
import Undertaking from "./components/Undertaking/Undertaking";
import FITPreview from "./components/FITPreview/FITPreview";
import Team from "./components/Team/Team";
import Location from "./components/Location/Location";
import OperationalModal from "./components/operationalModal/OperationalModal";
import GemsOfGoLife from "./components/GemsOfGoLife/GemsOfGoLife";
import FitKernelSection from "./components/FitKernelSection/FitKernelSection";
import TechnicalStack from "./components/TechnicalStack/TechnicalStack";
import FITSection from "./components/FITSection/FITSection";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          {/* <Navbar /> */}
          <Navbar2 />
        </div>

        <FITPreview />
        <Hero />
        {/* <Service /> */}
        <FITSection />
        <Undertaking />
        <br />
        <Team />
        {/* <BannerDetails reverse={true} img={Banner1} />
        <BannerDetails img={Banner2} /> */}
        {/* <Banner /> */}
        {/* <Blogs /> */}
        {/* <Swipe /> */}
        <FitKernelSection />
        <TechnicalStack />
        <GemsOfGoLife />
        <OperationalModal />
        <Location />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
