import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true); // Show the button when scrolled down 300px
      } else {
        setShowGoTop(false); // Hide the button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className="grid py-5 md:grid-cols-3">
          {/* Company Info */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home">
                Futura
                <span className="inline-block font-bold text-primary">
                  InsTech
                </span>
              </a>
            </h1>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Chennai, Tamil Nadu</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91-8825761193</p>
            </div>
          </div>

          {/* Important Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Social Links */}
            <div className="flex justify-end">
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex gap-6">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/futurainstech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaLinkedin className="text-3xl" />
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918825761193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaWhatsapp className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            &copy; 2024 Futura InsTech. All rights reserved.
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-5 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white shadow-lg hover:bg-violet-700 transition-all transform hover:scale-110"
        >
          <span className="text-3xl">↑</span>
        </button>
      )}
    </div>
  );
};

export default Footer;
