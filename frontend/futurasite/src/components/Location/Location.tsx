import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS animations
AOS.init();

const MapComponent = () => {
  return (
    <div
      className="map-container bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-12 lg:p-16 rounded-3xl shadow-2xl mx-auto max-w-5xl transition duration-500"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-10 tracking-wide">
        Location
      </h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex justify-center items-center rounded-xl overflow-hidden shadow-xl"
        style={{
          borderRadius: "25px",
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <iframe
          title="Location of 1st Main Rd, Chennai, Tamil Nadu"
          src="https://www.google.com/maps/embed?pb=%211m14%211m8%211m3%211d11178224.221418994%212d82.91867984078114%213d14.685893564856878%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x3a525f078362f0bd%3A0x3f8780b32768200a%212s1st%20Main%20Rd%2C%20Judge%20Colony%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600064%215e0%213m2%211sen%212sin%214v1572533510184%215m2%211sen%212sin"
          width="100%"
          height="500"
          style={{
            border: "0",
            filter: "grayscale(15%) contrast(95%) brightness(95%)",
          }}
          allowFullScreen={true}
          loading="lazy"
          className="w-full h-full transition-all duration-300"
        ></iframe>
      </motion.div>
      <p className="text-center text-gray-700 dark:text-gray-300 mt-8 text-lg lg:text-xl font-medium leading-relaxed">
        1st Main Rd, Judge Colony, Tambaram, Chennai, Tamil Nadu 600064
      </p>
    </div>
  );
};

export default MapComponent;
