import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaChevronDown,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaSyncAlt,
  FaUserShield,
  FaExchangeAlt, // New icon for GO MWB section
} from "react-icons/fa";
import GemsOfGoLife from "../GemsOfGoLife/GemsOfGoLife"; // Assuming you have created this component

// Initialize AOS for scroll animations
AOS.init();

const FitKernelSection = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage collapsible

  const sectionData = [
    {
      title:
        "Life Insurance Sales Management System (Lead Management & Quotation Management)",
      description: `The Insurance assignment commences with the Sales Force discourse with the Prospect by way of rendering the genre of the Insurance Products...`,
      icon: <FaHandHoldingUsd className="text-6xl text-blue-600" />,
    },
    {
      title: "Life Insurance Solution (GoLife)",
      description: `The complete cycle of Life Insurance from Policy Issuance to Claims Settlement including Commission to Advisor, Customer Service, and Finance...`,
      icon: <FaHeartbeat className="text-6xl text-red-500" />,
      hasCollapsible: true, // Indicate this item has a collapsible section
    },
    {
      title: "Group Insurance (GoGroup)",
      description: `Group Insurance is an Insurance Contract between the Insurer and the Corporate Client...`,
      icon: <FaUserShield className="text-6xl text-green-500" />,
    },
    {
      title: "Reinsurance Solution (GoRI)",
      description: `All Life Insurance Companies disseminate their liability of colossal risks by signing a treaty with assorted Reinsurance Companies...`,
      icon: <FaSyncAlt className="text-6xl text-purple-500" />,
    },
    {
      title: "GO MWB",
      description: `FuturaInsTech has amalgamated the avant-garde contemporary technology of MWB (Migration Work Bench) with Google’s Programming Language “GO” and unleashed “GO MWB”, garnering the benefits of MWB and GO. “GO MWB” is adroit in integrating modern technology with Legacy Systems in minimalistic span of time without any data loss. 
FuturaInsTech has over 2 decades of expertise in Data migration, the arduous being Data Transfer from six diverse stand-alone systems to Java based system for an indonesian customer. For a Singapore Client, FuturaInsTech has garnered the experience of Data Migration from contemporary Systems to Legacy System as well.`,
      icon: <FaExchangeAlt className="text-6xl text-teal-500" />, // Updated icon for MWB
    },
  ];

  return (
    <div
      id="Product"
      className="bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6 sm:px-20 font-sans"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-700 dark:text-blue-300 font-[Poppins]">
        FUTURAINSTECH’s (FIT’s) KERNEL
      </h2>
      <div className="space-y-10">
        {sectionData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            data-aos="fade-up"
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="mr-5">{item.icon}</div>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 font-[Montserrat]">
                {item.title}
              </h3>
            </div>
            <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-300 font-light">
              {item.description}
            </p>

            {item.hasCollapsible && (
              <div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium"
                >
                  FuturaInstech's Gamechanger – Navaratna of “GoLife”
                  <FaChevronDown
                    className={`ml-2 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="mt-4">
                    <GemsOfGoLife />
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FitKernelSection;
