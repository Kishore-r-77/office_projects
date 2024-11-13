import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";

// import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import FITPreview from "./components/FITPreview/FITPreview";
import Location from "./components/Location/Location";
import Navbar2 from "./components/navbar/Navbar2";
import OperationalModal from "./components/operationalModal/OperationalModal";
import Team from "./components/Team/Team";
import TechnicalStack from "./components/TechnicalStack/TechnicalStack";

import FitKernelSection from "./components/FitKernelSection/FitKernelSection";
import FuturaInsTechEnterprise from "./components/FuturaInsTechEnterprise/FuturaInsTechEnterprise";
import FuturaInsTechManifesto from "./components/FuturaInsTechManifesto/FuturaInsTechManifesto";

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

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          {/* <Navbar /> */}
          <Navbar2 />
        </div>

        <FITPreview />
        <FuturaInsTechEnterprise />
        {/* <Service /> */}
        {/* <Undertaking />
        <OurServiceProp /> */}
        <FuturaInsTechManifesto />
        <br />
        <Team />
        {/* <BannerDetails reverse={true} img={Banner1} />
        <BannerDetails img={Banner2} /> */}
        {/* <Banner /> */}
        {/* <Blogs /> */}
        {/* <Swipe /> */}
        <FitKernelSection />
        <TechnicalStack />
        {/* <GemsOfGoLife /> */}
        <OperationalModal />
        <Location />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
