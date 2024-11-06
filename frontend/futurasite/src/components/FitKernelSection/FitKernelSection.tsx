import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHandHoldingUsd,
  FaHeartbeat,
  FaUserShield,
  FaSyncAlt,
} from "react-icons/fa";

// Initialize AOS for scroll animations
AOS.init();

const FitKernelSection = () => {
  const sectionData = [
    {
      title:
        "Life Insurance Sales Management System (Lead Management & Quotation Management)",
      description: `The Insurance assignment commences with the Sales Force discourse with the Prospect by way of rendering the genre of the Insurance Products. When the Client is persuaded with the specific Product based on the “desire and necessity”, the Sale of the Insurance Product effectuates. One or more Quotation(s) is/are prepared citing the Benefits available under the ordained product. Payment of “Consideration” constitutes the basis of consummation of “Offer and Acceptance” and hence the onset of a Life Insurance Protection venture.
      The comprehensive Insurance Product Features indoctrination, Offer and Acceptance is kept abreast through the Lead Management and Quotation Management System of FuturaInsTech. The Quotation could be transformed as a Proposal on the receipt of “Consideration” through FuturaInstech’s GoLife Software Solution.`,
      icon: <FaHandHoldingUsd className="text-6xl text-blue-600" />,
    },
    {
      title: "Life Insurance Solution (GoLife)",
      description: `The complete cycle of Life Insurance from Policy Issuance to Claims Settlement including Commission to Advisor, Customer Service and Finance is handled by FuturaInsTech’s GoLife Software Solution. GoLife has the unique advantage of online Status Updation. The Gamechanger Technology of Time Driven Function (TDF) performs the task of “Auto Pilot” dispensing the necessity of cumbersome “BatchJobs”.`,
      icon: <FaHeartbeat className="text-6xl text-red-500" />,
    },
    {
      title: "Group Insurance",
      description: `Group Insurance provides tailored coverage for groups, offering policies that streamline benefits management for corporate or organizational clients.`,
      icon: <FaUserShield className="text-6xl text-green-500" />,
    },
    {
      title: "Reinsurance Solution (Go-RI)",
      description: `All Life Insurance Companies disseminate their liability of colossal risks by signing a treaty with assorted Reinsurance Companies. The Reinsurers have business acquaintances with all major Insurers hence need to liaise with diverse Systema and software. The compatibility of interfaces with software systems of multifarious Insurers is a herculean task. FuturaInstech’s Reinsurance Solution “Go-RI” bridges the lacuna of the Reinsurers and the Insurers Software disparity.
      Go-RI has been developed to forge and support proportional / non-proportional treaties and facultative contracts to cover risks for all genres of Life Insurance products. It offers a comprehensive solution for risk mitigation, invigorating competency, and transcending customer satisfaction.`,
      icon: <FaSyncAlt className="text-6xl text-purple-500" />,
    },
  ];

  return (
    <div
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FitKernelSection;
